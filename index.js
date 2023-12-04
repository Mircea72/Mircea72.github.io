function showHome() {
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";

  var page = document.getElementById("home");
  page.style.display = "block";
}

function showSkills() {
  document.getElementById("home").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";

  var page = document.getElementById("skills");
  page.style.display = "block";
}

function showProjets() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";

  var page = document.getElementById("projects");
  page.style.display = "block";
}

function showLanguages() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";

  var page = document.getElementById("languages");
  page.style.display = "block";
}

/*
function activate("projects") {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";

  var page = document.getElementById("projects");
  page.style.display = "block";
}
*/
