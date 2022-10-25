const header = document.querySelector("header");
const searchButton = document.querySelector(".searchButton");
const searchİnput = document.querySelector(".searchİnput");
const close = document.querySelector(".close");
const burgerBar = document.querySelector(".burger-bar");
const burgerButton = document.getElementById("burger-button");
const burgerClose = document.getElementById("burger-close");

// header.addEventListener("click", (e) => {
//   console.log(e);

//   if (e.target.classList.value === "searchButton") {
//     searchİnput.style.top = "20px";
//   } else {
//     searchİnput.style.top = "-20px";
//   }
// });
searchButton.addEventListener("click", () => {
  searchİnput.style.visibility = "visible";
  searchİnput.classList.toggle("-translate-y-[100%]");
  searchİnput.classList.toggle("h-full");
  if (searchİnput.classList.contains("-translate-y-[100%]")) {
    searchİnput.lastElementChild.value = "";
    searchİnput.style.visibility = "hidden";
  }
});

burgerButton.addEventListener("click", () => {
  burgerBar.classList.toggle("h-0");
  burgerBar.classList.toggle("open");
  burgerBar.classList.toggle("h-[400px]");
  burgerBar.classList.toggle("md:h-[450px]");
  burgerBar.classList.toggle("lg:h-[470px]");
  burgerBar.classList.toggle("duration-500");
  burgerBar.classList.toggle("duration-150");
  burgerBar.classList.toggle("invisible");
  searchİnput.style.visibility = "hidden";
});

burgerClose.addEventListener("click", () => {
  burgerBar.classList.toggle("open");
  burgerBar.classList.toggle("h-0");
  burgerBar.classList.toggle("h-[400px]");
  burgerBar.classList.toggle("md:h-[450px]");
  burgerBar.classList.toggle("lg:h-[470px]");
  burgerBar.classList.toggle("duration-150");
  burgerBar.classList.toggle("duration-500");
  burgerBar.classList.toggle("invisible");

  searchİnput.style.visibility = "visible";
});

// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
