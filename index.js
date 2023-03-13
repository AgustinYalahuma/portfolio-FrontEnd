const toggleMenuElement = document.getElementById("toggle-menu");
const mainMenuElement = document.getElementById("main-menu");
const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");

toggleMenuElement.addEventListener("click", () => {
  mainMenuElement.classList.toggle("menu-show");
});
document.addEventListener("click", function (event) {
  let clickInButton = toggleMenuElement.contains(event.target);

  if (!clickInButton) {
    mainMenuElement.classList.remove("menu-show");
  }
});
function activeMenu() {
  let len = sections.length;
  while (--len && window.scrollY + 75 < sections[len].offsetTop) {}
  if (
    document.documentElement.scrollHeight -
      window.innerHeight -
      window.scrollY ==
    0
  ) {
    links[len].classList.remove("active");
    links[3].classList.add("active");
  } else {
    links.forEach((ltx) => ltx.classList.remove("active"));
    links[len].classList.add("active");
  }
}

activeMenu();
window.addEventListener("scroll", activeMenu);
