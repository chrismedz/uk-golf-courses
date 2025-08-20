document.addEventListener("DOMContentLoaded", () => {
  // Example hardcoded course data
  const course = {
    name: "St Andrews Links (Old Course)",
    location: "St Andrews, Scotland",
    lat: 56.3429,
    lng: -2.8030,
    length: "6,721 yards",
    par: 72,
    slope: 135,
    fee: "£195",
    image: "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1b?auto=format&fit=crop&w=800&q=80",
    video: "https://www.youtube.com/embed/Scxs7L0vhZ4",
    gallery: [
      "https://images.unsplash.com/photo-1526401485004-2fda9f4b43d3",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
    ]
  };

  // Populate content
  document.getElementById("course-name").textContent = course.name;
  document.getElementById("course-image").src = course.image;
  document.getElementById("course-location").textContent = course.location;
  document.getElementById("course-length").textContent = course.length;
  document.getElementById("course-par").textContent = course.par;
  document.getElementById("course-slope").textContent = course.slope;
  document.getElementById("course-fee").textContent = course.fee;
  document.getElementById("course-video").src = course.video;

  // Map
  const map = L.map("map").setView([course.lat, course.lng], 14);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  L.marker([course.lat, course.lng]).addTo(map).bindPopup(course.name);

  // Gallery
  const galleryContainer = document.getElementById("course-gallery");
  course.gallery.forEach(img => {
    const el = document.createElement("img");
    el.src = img;
    el.alt = course.name;
    galleryContainer.appendChild(el);
  });
});
