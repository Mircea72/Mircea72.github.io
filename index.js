// variabile publice
var activePage = "projects";

// functii publice
function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.info("show", id);
  var page = document.getElementById(id);
  console.debug("show page", page);
  page.style.display = "block";
}

function showPage(id) {
  console.info("show page", id);
  hide(activePage);
  show(id);
  activePage = id;
}

function initEvents() {
  var toolbar = document.querySelector("#top-menu-bar");
  toolbar.addEventListener("click", function (e) {
    var page = e.target.innerHTML.toLowerCase();
    console.warn("event", page);
    showPage(page);
  });
}

// executii
showPage(ativePage);
initEvents();

/*
function showRubik () {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";

  var page = document.getElementById("rubik");
  page.style.display = "block";
}
*/
/* Use show page use id param*/
