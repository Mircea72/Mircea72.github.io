function show(id) {
  console.info("show", id);

  var page = document.getElementById("id");
  console.info("page", page);
  page.style.display = "block";
}

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showHome() {
  hide("skills");
  hide("projects");
  hide("languages");

  show("home");
}

function showSkills() {
  hide("home");
  hide("projects");
  hide("languages");

  show("skills");
}

function showProjets() {
  hide("home");
  hide("skills");
  hide("languages");

  show("Projects");
}

function showLanguages() {
  hide("home");
  hide("skills");
  hide("projects");

  show("Languages");
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
