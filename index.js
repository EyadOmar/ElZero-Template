//header active link
let links = document.querySelectorAll("header .main-links li");
let otherLinks = document.getElementById("lastLi");
let megaMenu = document.querySelector("header .mega-menu");
switchActive(links, "header .main-links li.active");

function switchActive(elements, activeQuery) {
  elements.forEach((ele) => {
    ele.addEventListener("click", () => {
      if (ele === otherLinks) megaMenu.classList.add("visible");
      else megaMenu.classList.remove("visible");

      let activeElement = document.querySelector(activeQuery);
      if (activeElement) activeElement.classList.remove("active");

      if (activeElement === ele) {
        ele.classList.remove("active");
        megaMenu.classList.remove("visible");
      } else ele.classList.add("active");
    });
  });
}

//Scroll Progress
let scroller = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});
