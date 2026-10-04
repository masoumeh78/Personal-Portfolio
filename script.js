const sections = document.querySelectorAll(".section");
const navButtons = document.querySelectorAll(".nav-btn");
const mobileNav = document.getElementById("mobileNav");

const mobileMenuButton = document.getElementById("mobileMenuButton");
const sectionLabels = {
  about: "About",
  experience: "Experience",
  education: "Education",
  skills: "Skills",
  projects: "Projects",
};

function toggleMenu() {
  const isOpening = mobileNav.classList.contains("hidden");
  mobileNav.classList.toggle("hidden");
  mobileMenuButton.setAttribute("aria-expanded", String(isOpening));
}

function showSection(id, btn) {
  sections.forEach((section) =>
    section.classList.toggle("hidden", section.id !== id),
  );
  mobileMenuButton.firstChild.textContent = `${sectionLabels[id] || "About"} `;
  navButtons.forEach((button) => button.classList.remove("active"));
  if (btn) btn.classList.add("active");
  const titles = {
    about: "Masoumeh Masoumi | Front End Developer",
    experience: "Experience | Masoumeh Masoumi",
    education: "Education | Masoumeh Masoumi",
    skills: "Skills | Masoumeh Masoumi",
    projects: "Projects | Masoumeh Masoumi",
  };
  document.title = titles[id] || "Masoumeh Masoumi";
  if (window.innerWidth < 768) {
    mobileNav.classList.add("hidden");
    mobileMenuButton.setAttribute("aria-expanded", "false");
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
