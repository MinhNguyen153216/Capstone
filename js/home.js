window.onscroll = headerChange;

function headerChange() {
  document
    .getElementById("headerID")
    .classList.toggle("header-change", window.scrollY > 0);
  document
    .getElementById("header-barID")
    .classList.toggle("header-bar-change", window.scrollY > 0);
}

function togglePage() {
  document
    .getElementById("togglePagesID")
    .classList.toggle("navbar-page-active");
}

function openProject(evt, projectName) {
  var i, tabcontent, tablinks;

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    // tablinks[i].classList = tablinks[i].classList.remove("tab1");
    tablinks[i].classList.remove("tab1");
  }

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementById(projectName).style.display = "block";
  evt.currentTarget.className += " active";
  evt.currentTarget.classList.add("tab1");
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openProjectResp(evt, projectName) {
  var i, tabcontent, tablinks;

  tablinks = document.getElementsByClassName("tablinks-resp");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    // tablinks[i].classList = tablinks[i].classList.remove("tab1");
    tablinks[i].classList.remove("tab1");
  }

  tabcontent = document.getElementsByClassName("tabcontent-resp");
  for (i = 0; i < tabcontent.length; i++) {
    // tabcontent[i].classList.remove("displayBlockAnimate");
    tabcontent[i].classList.add("displayNormalAnimate");
    tabcontent[i].style.maxHeight = "0px";
  }

  // document.getElementById(projectName).classList.remove("displayNoneAnimate");
  document.getElementById(projectName).style.maxHeight = "1000px";
  evt.currentTarget.className += " active";
  evt.currentTarget.classList.add("tab1");
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen-resp").click();
