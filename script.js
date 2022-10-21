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
  console.log();

  searchİnput.style.visibility = "visible";
  searchİnput.classList.toggle("-translate-y-[200%]");
  searchİnput.classList.toggle("-translate-y-1/2");
  if (searchİnput.classList.contains("-translate-y-[200%]")) {
    searchİnput.lastElementChild.value = "";
    searchİnput.style.visibility = "hidden";
  }
});

burgerButton.addEventListener("click", () => {
  console.log(burgerBar.classList);
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
