const courses = [
  {
    name: "St Andrews Links (Old Course)",
    location: "St Andrews, Scotland",
    lat: 56.3429,
    lng: -2.8030,
    image: "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1b?auto=format&fit=crop&w=800&q=80",
    link: "course.html?course=standrews"
  },
  {
    name: "Royal Birkdale Golf Club",
    location: "Southport, England",
    lat: 53.6050,
    lng: -3.0290,
    image: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&w=800&q=80",
    link: "course.html?course=royalbirkdale"
  },
  {
    name: "Royal St George’s Golf Club",
    location: "Sandwich, England",
    lat: 51.2747,
    lng: 1.3761,
    image: "https://images.unsplash.com/photo-1526401485004-2fda9f4b43d3?auto=format&fit=crop&w=800&q=80",
    link: "course.html?course=royalstgeorges"
  },
  {
    name: "Muirfield",
    location: "Gullane, Scotland",
    lat: 56.0365,
    lng: -2.8225,
    image: "https://images.unsplash.com/photo-1587174486073-4c4e5bc9a2b2?auto=format&fit=crop&w=800&q=80",
    link: "course.html?course=muirfield"
  },
  {
    name: "Royal Troon Golf Club",
    location: "Troon, Scotland",
    lat: 55.5445,
    lng: -4.6634,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    link: "course.html?course=royaltroon"
  }
];

// Initialize Leaflet map
const map = L.map('map').setView([54.5, -4], 6);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add pins for each course
courses.forEach(course => {
  const marker = L.marker([course.lat, course.lng]).addTo(map);
  marker.bindPopup(`
    <div style="text-align:center;">
      <img src="${course.image}" alt="${course.name}" style="width:100px; border-radius:6px; margin-bottom:5px;">
      <br><b>${course.name}</b><br>
      ${course.location}<br>
      <a href="${course.link}" style="color:#007bff; text-decoration:underline;">View Details</a>
    </div>
  `);
});

// Render course cards
const courseContainer = document.getElementById("course-cards");
courses.forEach(course => {
  const card = document.createElement("div");
  card.classList.add("course-card");

  card.innerHTML = `
    <img src="${course.image}" alt="${course.name}">
    <h3>${course.name}</h3>
    <p>${course.location}</p>
    <a href="${course.link}">View Details</a>
  `;

  courseContainer.appendChild(card);
});
