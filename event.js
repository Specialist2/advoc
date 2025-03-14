/* const openMenuButton = document.querySelector("#open-button");
openMenuButton.style.backgroundColor = "yellow";

openMenuButton.addEventListener("click", () => {
  console.log("Opening Menu!!!!");
  document.querySelector(".about").style.display = "flex"; //add a style attribute (inline css) to the selected element
  document.querySelector(".about").classList.add("opened-nav");
});

const closeMenuButton = document.querySelector("#close-button");
closeMenuButton.style.backgroundColor = "red"; */

let openMenu = document.querySelector(".menu-icon");
openMenu.addEventListener("click", () => {
  document.querySelector(".about").style.display = "flex";
});
let closeIcon = document.querySelector(".close-icon");
/* let menuIcon = document.querySelector(".menu-icon");
menuIcon.style.display="none" */

closeIcon.addEventListener("click", () => {
  document.querySelector(".about").style.display = "none";
});
/* .addEventListener("click", () => {
  console.log("Closing Menu!!");
  document.querySelector(".about").style.display = "none";
  document.querySelector(".about").classList.remove("opened-nav");
}); */
