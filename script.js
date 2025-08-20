// Load Leaflet map
const map = L.map("mapView").setView([54.5, -3], 6); // UK center
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

let markers = [];

// DOM elements
const grid = document.getElementById("courseGrid");
const countySelect = document.getElementById("countySelect");
const qInput = document.getElementById("q");
const parMin = document.getElementById("parMin");
const parMax = document.getElementById("parMax");
const lenMin = document.getElementById("lenMin");
const lenMax = document.getElementById("lenMax");
const typeSelect = document.getElementById("typeSelect");
const difficultySelect = document.getElementById("difficultySelect");
const resultsCount = document.getElementById("resultsCount");

// Render courses
function renderCourses(courses) {
  grid.innerHTML = "";
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  resultsCount.textContent = `${courses.length} courses found`;

  courses.forEach(course => {
    // Card
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${course.image}" alt="${course.name}">
      <h3>${course.name}</h3>
      <p>${course.county} • Par ${course.par} • ${course.length} yds</p>
      <a href="course.html?id=${course.id}" class="btn">View Details</a>
    `;
    grid.appendChild(card);

    // Marker
    const marker = L.marker([course.lat, course.lng]).addTo(map);
    marker.bindPopup(`<b>${course.name}</b><br><a href="course.html?id=${course.id}">View details</a>`);
    markers.push(marker);
  });
}

// Filtering
function filterCourses() {
  let filtered = courses.slice();

  const q = qInput.value.toLowerCase();
  if (q) {
    filtered = filtered.filter(c =>
      c.name.toLowerCase().includes(q) || c.county.toLowerCase().includes(q)
    );
  }
  if (countySelect.value) {
    filtered = filtered.filter(c => c.county === countySelect.value);
  }
  if (typeSelect.value) {
    filtered = filtered.filter(c => c.type === typeSelect.value);
  }
  if (difficultySelect.value) {
    filtered = filtered.filter(c => String(c.difficulty) === difficultySelect.value);
  }
  if (parMin.value) filtered = filtered.filter(c => c.par >= +parMin.value);
  if (parMax.value) filtered = filtered.filter(c => c.par <= +parMax.value);
  if (lenMin.value) filtered = filtered.filter(c => c.length >= +lenMin.value);
  if (lenMax.value) filtered = filtered.filter(c => c.length <= +lenMax.value);

  renderCourses(filtered);
}

// Populate county select
function initCounties() {
  const counties = [...new Set(courses.map(c => c.county))].sort();
  counties.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c; opt.textContent = c;
    countySelect.appendChild(opt);
  });
}

// Featured section (YouTube embeds)
function renderFeatured() {
  const featured = document.getElementById("featuredGrid");
  featured.innerHTML = "";
  courses.filter(c => c.youtube).slice(0,10).forEach(c => {
    const wrap = document.createElement("div");
    wrap.innerHTML = `
      <h3>${c.name}</h3>
      <iframe src="https://www.youtube.com/embed/${c.youtube}" allowfullscreen></iframe>
    `;
    featured.appendChild(wrap);
  });
}

// Reset
document.getElementById("resetBtn").addEventListener("click", () => {
  qInput.value = "";
  countySelect.value = "";
  typeSelect.value = "";
  difficultySelect.value = "";
  parMin.value = "";
  parMax.value = "";
  lenMin.value = "";
  lenMax.value = "";
  filterCourses();
});

// Initial render
initCounties();
renderCourses(courses);
renderFeatured();

// Hook filters
[qInput, countySelect, typeSelect, difficultySelect,
 parMin, parMax, lenMin, lenMax].forEach(el =>
  el.addEventListener("input", filterCourses)
);
