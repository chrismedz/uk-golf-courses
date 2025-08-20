// --- Map init (UK bounds) ---
const map = L.map("mapView", { scrollWheelZoom: false }).setView([54.5, -3], 6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Keep viewport within the UK-ish bounds
const ukBounds = L.latLngBounds([49.5, -8.5], [59.5, 2.0]);
map.setMaxBounds(ukBounds);
map.on('drag', () => { map.panInsideBounds(ukBounds, { animate: false }); });

let markers = [];

// DOM
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

// Build county select
(function initCounties() {
  const counties = [...new Set(courses.map(c => c.county))].sort();
  counties.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c; opt.textContent = c;
    countySelect.appendChild(opt);
  });
})();

// Render list + markers
function renderCourses(list) {
  grid.innerHTML = "";
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  resultsCount.textContent = `${list.length} courses found`;

  list.forEach(course => {
    // card
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="${course.image}" alt="${course.name}">
      <h3>${course.name}</h3>
      <p>${course.county} • Par ${course.par} • ${course.length.toLocaleString()} yds</p>
      <a class="btn" href="course.html?id=${course.id}">View Details</a>
    `;
    grid.appendChild(card);

    // marker
    if (course.lat && course.lng) {
      const marker = L.marker([course.lat, course.lng]).addTo(map);
      marker.bindPopup(`
        <div style="text-align:center;max-width:180px">
          <img src="${course.image}" alt="${course.name}" style="width:100%;border-radius:8px;margin-bottom:6px">
          <strong>${course.name}</strong><br>
          <small>${course.county}</small><br>
          <a href="course.html?id=${course.id}" style="display:inline-block;margin-top:6px">View details</a>
          <div class="ad" style="margin-top:8px">Ad • 300×100</div>
        </div>
      `);
      markers.push(marker);
    }
  });
}

// Filter logic
function filterCourses() {
  let list = courses.slice();
  const q = qInput.value.trim().toLowerCase();

  if (q) list = list.filter(c => c.name.toLowerCase().includes(q) || c.county.toLowerCase().includes(q));
  if (countySelect.value) list = list.filter(c => c.county === countySelect.value);
  if (typeSelect.value) list = list.filter(c => c.type === typeSelect.value);
  if (difficultySelect.value) list = list.filter(c => String(c.difficulty) === difficultySelect.value);
  if (parMin.value) list = list.filter(c => c.par >= Number(parMin.value));
  if (parMax.value) list = list.filter(c => c.par <= Number(parMax.value));
  if (lenMin.value) list = list.filter(c => c.length >= Number(lenMin.value));
  if (lenMax.value) list = list.filter(c => c.length <= Number(lenMax.value));

  renderCourses(list);
}

// Hook filters
[qInput, countySelect, typeSelect, difficultySelect, parMin, parMax, lenMin, lenMax]
  .forEach(el => el.addEventListener("input", filterCourses));

document.getElementById("resetBtn").addEventListener("click", () => {
  qInput.value = ""; countySelect.value = ""; typeSelect.value = "";
  difficultySelect.value = ""; parMin.value = ""; parMax.value = "";
  lenMin.value = ""; lenMax.value = "";
  filterCourses();
});

// Featured videos (first 10 that have a youtube id)
(function renderFeatured() {
  const wrap = document.getElementById("featuredGrid");
  wrap.innerHTML = "";
  courses.filter(c => c.youtube).slice(0, 10).forEach(c => {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.innerHTML = `<h3>${c.name}</h3>
      <iframe src="https://www.youtube.com/embed/${c.youtube}" allowfullscreen title="Flyover video of ${c.name}"></iframe>`;
    wrap.appendChild(tile);
  });
})();

// Initial render
renderCourses(courses);
