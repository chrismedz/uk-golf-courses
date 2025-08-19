// --- Map setup ---
let map = L.map('map').setView([54.5, -4], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// --- Safe fallback data (used only if fetch fails) ---
const FALLBACK_COURSES = [
  {name:"St Andrews Links (Old Course)", town:"St Andrews", nation:"Scotland", par:72, holes:18, website:"https://www.standrews.com/", lat:56.3429, lng:-2.8034, images:["https://images.unsplash.com/photo-1508766206392-8bd5cf550d1b"]},
  {name:"Royal Birkdale Golf Club", town:"Southport", nation:"England", par:70, holes:18, website:"https://www.royalbirkdale.com/", lat:53.6291, lng:-3.0401, images:["https://images.unsplash.com/photo-1502904550040-7534597429ae"]},
  {name:"Royal St George's Golf Club", town:"Sandwich", nation:"England", par:70, holes:18, website:"https://www.royalstgeorges.com/", lat:51.2740, lng:1.3673, images:["https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1"]},
  {name:"Muirfield", town:"Gullane", nation:"Scotland", par:71, holes:18, website:"https://www.muirfield.org.uk/", lat:56.0375, lng:-2.8080, images:["https://images.unsplash.com/photo-1529927066849-953d92eebf86"]},
  {name:"Carnoustie Golf Links", town:"Carnoustie", nation:"Scotland", par:72, holes:18, website:"https://www.carnoustiegolflinks.com/", lat:56.5016, lng:-2.7185, images:["https://images.unsplash.com/photo-1524492449090-1a065f3aefba"]}
];

// --- Render function (cards + pins) ---
function renderCourses(courses){
  const coursesDiv = document.getElementById('courses');
  coursesDiv.innerHTML = '';
  courses.forEach(course => {
    // card
    const img = (course.images && course.images[0]) ? course.images[0] : '';
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
      <img src="${img}" alt="${course.name}">
      <div class="info">
        <h2>${course.name}</h2>
        <p>${course.town}, ${course.nation}</p>
        <p>Par ${course.par} | ${course.holes} Holes</p>
        <a href="${course.website}" target="_blank" rel="noopener">Visit Website</a>
      </div>`;
    coursesDiv.appendChild(card);

    // pin
    if (typeof course.lat === 'number' && typeof course.lng === 'number') {
      const m = L.marker([course.lat, course.lng]).addTo(map);
      m.bindPopup(`<b>${course.name}</b><br>${course.town}, ${course.nation}`);
    }
  });
}

// --- Try to load your JSON; fall back if anything goes wrong ---
fetch('./data/courses.json')
  .then(r => {
    if(!r.ok) throw new Error('Could not load courses.json');
    return r.json();
  })
  .then(renderCourses)
  .catch(err => {
    console.warn('Using fallback data because:', err);
    renderCourses(FALLBACK_COURSES);
  });
