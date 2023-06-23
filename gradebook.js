// JavaScript code for gradebook functionality

// Toggle side navigation
document.getElementById("menuButton").addEventListener("click", function() {
  openNav();
});

document.getElementById("closeNav").addEventListener("click", function() {
  closeNav();
});

function openNav() {
  document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}


