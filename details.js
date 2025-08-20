// Get query string (?id=0 etc.)
const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get("id");

// Same course data array (copy-paste from script.js)
const courses = [
  // paste the same 20-course array here!
];

// If course found, display it
if (courseId && courses[courseId]) {
  const course = courses[courseId];
  document.getElementById("course-name").textContent = course.name;
  document.getElementById("course-image").src = course.image;
  document.getElementById("course-location").textContent = "📍 " + course.location;
  document.getElementById("course-par").textContent = "⛳ Par: " + course.par;
  document.getElementById("course-bestScore").textContent = "🏌️ Best Score: " + course.bestScore;
}
