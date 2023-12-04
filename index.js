var activePage;

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.info("show", id);

  var page = document.getElementById("id");
  console.debug("show page", page);
  page.style.display = "block";
}

function showHome() {
  hide(activePage);
  show("HOME");
  activePage = "HOME";
}

function showSkills() {
  hide(activePage);
  show("Skills");
  activePage = "Skills";
}

function showProjets() {
  hide(activePage);
  show("Projects");
  activePage = "Projects";
}

function showLanguages() {
  hide(activePage);
  show("Languages");
  activePage = "Languages";
}

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
/* */
