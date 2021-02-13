var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggleMenu = document.addEventListener("click", function() {
  for (var activated =0; activated < activeElements.length; activated += 1){
    activeElements[activated].classList.toggle("active");
  }
})
