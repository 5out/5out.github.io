$(document).foundation();

$(document).ready(function() {
  $(".invisible-man").show();
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $("#sticky-header").addClass("active");
  }
  else {
    $("#sticky-header").removeClass("active");
  }
});

function openNav() {
  document.getElementById("navTray").style.height = "100%";
}

function closeNav() {
  document.getElementById("navTray").style.height = "0%";
}

console.log("%cGood Food With Five Out", "font-size: x-large")

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function toTitleCase(str)
{
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}