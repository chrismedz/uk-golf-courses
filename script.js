// ---- Map setup (uses #mapEl which exists in your index.html) ----
const map = L.map('mapEl').setView([54.5, -4], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const markers = [];

function renderCourses(courses){
  const grid = document.getElementById('coursesGrid');
  grid.innerHTML = '';

  // Clear old markers
  markers.forEach(m => map.removeLayer(m));
  markers.length = 0;

  courses.forEach(c => {
    // Card
    const card = document.createElement('article');
    card.className = 'card';
    const img = c.image || 'https://images.unsplash.com/photo-1508766206392-8bd5cf550d1b';
    card.innerHTML = `
      <img class="card-img" src="${img}" alt="${c.name}">
      <div class="card-body">
        <h3>${c.name}</h3>
        <div class="meta">${c.location} • Par ${c.par} • Best ${c.bestScore}</div>
        <div class="row">
          ${c.website ? `<a class="btn-small" href="${c.website}" target="_blank" rel="noopener">Website</a>` : `<span></span>`}
          <div>
            <a class="btn-small" href="course.html?id=${c.id}">View Details</a>
            <a class="btn-small" href="#map" data-goto="${c.id}">View on Map</a>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);

    // Marker
    if (typeof c.lat === 'number' && typeof c.lng === 'number') {
      const m = L.marker([c.lat, c.lng]).addTo(map);
      m.bindPopup(`<b>${c.name}</b><br>${c.location}<br><a href="course.html?id=${c.id}">Details</a>`);
      m._id = c.id;
      markers.push(m);
    }
  });

  // Scroll/zoom to marker when clicking "View on Map"
  grid.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-goto]');
    if(!a) return;
    const id = Number(a.getAttribute('data-goto'));
    const m = markers.find(x => x._id === id);
    if(m){
      map.setView(m.getLatLng(), 11, {animate:true});
      m.openPopup();
    }
  });
}

// Load courses from JSON
fetch('./data/courses.json')
  .then(r => r.json())
  .then(renderCourses)
  .catch(err => {
    console.error('Failed to load courses.json', err);
    alert('Could not load courses data.');
  });
