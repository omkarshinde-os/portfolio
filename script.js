
// Typing Effect
const texts = [
  "Software Engineer",
  "Java Backend Developer",
  "Cloud & FinTech Engineer",
  "Freelancer | Open Source Contributor"
];
let index = 0, char = 0;

function type() {
  if (char < texts[index].length) {
    document.querySelector(".typing").textContent += texts[index][char++];
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (char > 0) {
    document.querySelector(".typing").textContent =
      texts[index].substring(0, --char);
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 500);
  }
}

type();

// Theme toggle
document.getElementById("themeToggle").onclick = () =>
  document.body.classList.toggle("light");

// Project filter
function filterProjects(type) {
  document.querySelectorAll(".project").forEach(p => {
    p.style.display =
      type === "all" || p.classList.contains(type) ? "block" : "none";
  });
}