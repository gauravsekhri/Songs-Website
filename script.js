var preloader = document.getElementBYID('loading');
  function pageload() {
	preloader.style.display = 'none';
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}