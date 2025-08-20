const courses = [
  {
    name: "St Andrews (Old Course)",
    location: "St Andrews, Scotland",
    par: 72,
    bestScore: 62,
    lat: 56.3429,
    lng: -2.8030,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/St_Andrews_Old_Course.jpg"
  },
  {
    name: "Royal Birkdale",
    location: "Southport, England",
    par: 72,
    bestScore: 63,
    lat: 53.6106,
    lng: -3.0156,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Royal_Birkdale_Clubhouse.jpg"
  },
  {
    name: "Royal St George's",
    location: "Sandwich, England",
    par: 70,
    bestScore: 64,
    lat: 51.2747,
    lng: 1.3663,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Royal_St_George%27s_Clubhouse.jpg"
  },
  {
    name: "Wentworth (West Course)",
    location: "Virginia Water, England",
    par: 72,
    bestScore: 62,
    lat: 51.3894,
    lng: -0.5708,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Wentworth_Clubhouse.jpg"
  },
  {
    name: "Muirfield",
    location: "Gullane, Scotland",
    par: 71,
    bestScore: 65,
    lat: 56.0319,
    lng: -2.8156,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Muirfield_Clubhouse.jpg"
  },
  {
    name: "Sunningdale (Old Course)",
    location: "Ascot, England",
    par: 70,
    bestScore: 62,
    lat: 51.3853,
    lng: -0.6558,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Sunningdale_Old_Course.jpg"
  },
  {
    name: "Carnoustie",
    location: "Angus, Scotland",
    par: 72,
    bestScore: 63,
    lat: 56.5039,
    lng: -2.7150,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Carnoustie_Golf_Links.jpg"
  },
  {
    name: "Royal Troon",
    location: "Ayrshire, Scotland",
    par: 71,
    bestScore: 64,
    lat: 55.5447,
    lng: -4.6631,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Royal_Troon_Golf_Clubhouse.jpg"
  },
  {
    name: "Trump Turnberry",
    location: "Ayrshire, Scotland",
    par: 71,
    bestScore: 64,
    lat: 55.3169,
    lng: -4.8278,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Turnberry_Clubhouse.jpg"
  },
  {
    name: "Gleneagles (King's Course)",
    location: "Perthshire, Scotland",
    par: 71,
    bestScore: 65,
    lat: 56.2741,
    lng: -3.7440,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Gleneagles_Clubhouse.jpg"
  },
  {
    name: "Hillside Golf Club",
    location: "Southport, England",
    par: 72,
    bestScore: 64,
    lat: 53.6264,
    lng: -3.0267,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Hillside_Golf_Club.jpg"
  },
  {
    name: "The Belfry (Brabazon)",
    location: "Sutton Coldfield, England",
    par: 72,
    bestScore: 63,
    lat: 52.5611,
    lng: -1.7192,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/The_Belfry_Clubhouse.jpg"
  },
  {
    name: "Walton Heath (Old Course)",
    location: "Surrey, England",
    par: 72,
    bestScore: 65,
    lat: 51.2717,
    lng: -0.2228,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Walton_Heath_Golf_Club.jpg"
  },
  {
    name: "Royal Liverpool (Hoylake)",
    location: "Wirral, England",
    par: 71,
    bestScore: 65,
    lat: 53.3781,
    lng: -3.1847,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Royal_Liverpool_Clubhouse.jpg"
  },
  {
    name: "Lytham & St Annes",
    location: "Lancashire, England",
    par: 70,
    bestScore: 64,
    lat: 53.7450,
    lng: -3.0275,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Royal_Lytham_%26_St_Annes_Golf_Club.jpg"
  },
  {
    name: "Ganton Golf Club",
    location: "North Yorkshire, England",
    par: 71,
    bestScore: 65,
    lat: 54.2022,
    lng: -0.4656,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Ganton_Golf_Club.jpg"
  },
  {
    name: "Formby Golf Club",
    location: "Merseyside, England",
    par: 72,
    bestScore: 64,
    lat: 53.5581,
    lng: -3.0681,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Formby_Golf_Club.jpg"
  },
  {
    name: "Woodhall Spa (Hotchkin Course)",
    location: "Lincolnshire, England",
    par: 73,
    bestScore: 66,
    lat: 53.1497,
    lng: -0.2058,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Woodhall_Spa_Golf.jpg"
  },
  {
    name: "Royal Portrush",
    location: "Northern Ireland",
    par: 72,
    bestScore: 63,
    lat: 55.1972,
    lng: -6.6492,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Royal_Portrush_Clubhouse.jpg"
  },
  {
    name: "Portmarnock (Old Course)",
    location: "Dublin, Ireland",
    par: 71,
    bestScore: 65,
    lat: 53.4225,
    lng: -6.1378,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Portmarnock_Golf_Club.jpg"
  }
];

// Show cards on the homepage
const container = document.getElementById("course-cards");

courses.forEach((course, index) => {
  const card = document.createElement("div");
  card.classList.add("course-card");
  card.innerHTML = `
    <img src="${course.image}" alt="${course.name}">
    <h3>${course.name}</h3>
    <p>${course.location}</p>
    <p>Par: ${course.par}</p>
    <p>Best Score: ${course.bestScore}</p>
    <a href="course.html?id=${index}">View Details</a>
  `;
  container.appendChild(card);
});

// Add pins to the map (Leaflet.js assumed)
const map = L.map('map').setView([54.5, -3], 5); // Center UK
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

courses.forEach((course, index) => {
  const marker = L.marker([course.lat, course.lng]).addTo(map);
  marker.bindPopup(`<b>${course.name}</b><br><a href="course.html?id=${index}">View Details</a>`);
});
