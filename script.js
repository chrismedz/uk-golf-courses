// Map init
const map = L.map('mapEl').setView([54.5, -4], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Fallback data if JSON fails to load
const FALLBACK = [
  {id:1,name:"St Andrews Links (Old Course)",town:"St Andrews",nation:"Scotland",par:72,holes:18,website:"https://www.standrews.com/",lat:56.3429,lng:-2.8034,images:["https://images.unsplash.com/photo-1508766206392-8bd5cf550d1b"]},
  {id:2,name:"Royal Birkdale Golf Club",town:"Southport",nation:"England",par:70,holes:18,website:"https://www.royalbirkdale.com/",lat:53.6291,lng:-3.0401,images:["https://images.unsplash.com/photo-1502904550040-7534597429ae"]},
  {id:3,name:"Royal St George's Golf Club",town:"Sandwich",nation:"England",par:70,holes:18,website:"https://www.royalstgeorges.com/",lat:51.2740,lng:1.3673,images:["https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1"]},
  {id:4,name:"Muirfield",town:"Gullane",nation:"Scotland",par:71,holes:18,website:"https://www.muirfield.org.uk/",lat:56.0375,lng:-2.8080,images:["https://images.unsplash.com/photo-1529927066849-953d92eebf86"]},
  {id:5,name:"Carnoustie Golf Links",town:"Carnoustie",nation:"Scotland",par:72,holes:18,website:"https://www.carnoustiegolflinks.com/",lat:56.5016,lng:-2.7185,images:["https://images.unsplash.com/photo-1524492449090-1a065f3aefba"]}
];

const markers = [];

function renderCourses(courses){
  const grid = document.getElementById('coursesGrid');
  grid.innerHTML = '';

  // Clear markers
  markers.forEach(m => map.removeLayer(m));
  markers.length = 0;

  courses.forEach(c => {
    // card
    const img = (c.images && c.images[0]) ? c.images[0] : 'https://images.unsplash.com/photo-1508766206392-8bd5cf550d1b';
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img class="card-img" src="${img}" alt="${c.name}">
      <div class="card-body">
        <h3>${c.name}</h3>
        <div class="meta">${c.town}, ${c.nation} • Par ${c.par} • ${c.holes} holes</div>
        <div class="row">
          <a class="btn-small" href="${c.website}" target="_blank" rel="noopener">Visit Website</a>
          <a class="btn-small" href="#map" data-goto="${c.id}">View on Map</a>
        </div>
      </div>`;
    grid.appendChild(card);

    // marker
    if (typeof c.lat === 'number' && typeof c.lng === 'number') {
      const m = L.marker([c.lat, c.lng]).addTo(map);
      m.bindPopup(`<b>${c.name}</b><br>${c.town}, ${c.nation}`);
      m._id = c.id;
      markers.push(m);
    }
  });

  // Scroll to marker
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

function loadCourses(){
  fetch('./data/courses.json')
    .then(r => { if(!r.ok) throw new Error('Not OK'); return r.json(); })
    .then(renderCourses)
    .catch(() => renderCourses(FALLBACK));
}

loadCourses();
