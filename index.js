const toggleMenuElement = document.querySelector(".nav__icon");
const mainMenuElement = document.querySelector(".nav__list");
const links = document.querySelectorAll(".nav__li");
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
    links[len].classList.remove("nav__li-active");
    links[sections.length - 1].classList.add("nav__li-active");
  } else {
    links.forEach((ltx) => ltx.classList.remove("nav__li-active"));
    links[len].classList.add("nav__li-active");
  }
}

activeMenu();
window.addEventListener("scroll", activeMenu);
