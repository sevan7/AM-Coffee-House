const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const navItems = document.querySelectorAll(".nav-items");
const htmlEl = document.querySelector("html");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  htmlEl.classList.toggle("html-overflow-hidden");
});

navItems.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    header.classList.toggle("nav-open");
    if (window.getComputedStyle(btnNav).display === "block") {
      htmlEl.classList.toggle("html-overflow-hidden");
    }
  });
});

// SAFARI GAP FLEX

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
