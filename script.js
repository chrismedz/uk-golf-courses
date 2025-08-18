
let map = L.map('map').setView([54.5, -4], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
fetch('data/courses.json')
.then(response => response.json())
.then(data => {
  let coursesDiv = document.getElementById('courses');
  data.forEach(course => {
    let card = document.createElement('div');
    card.className = 'course-card';
    let img = course.images && course.images.length > 0 ? course.images[0] : '';
    card.innerHTML = `<img src="${img}" alt="${course.name}"><div class="info"><h2>${course.name}</h2><p>${course.town}, ${course.nation}</p><p>Par ${course.par} | ${course.holes} Holes</p><a href="${course.website}" target="_blank">Visit Website</a></div>`;
    coursesDiv.appendChild(card);
    if(course.lat && course.lng){
      let marker = L.marker([course.lat, course.lng]).addTo(map);
      marker.bindPopup(`<b>${course.name}</b><br>${course.town}, ${course.nation}`);
    }
  });
});
