// Open burger menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

// Close burger menu
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//   Open accordion menu in navigation
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}