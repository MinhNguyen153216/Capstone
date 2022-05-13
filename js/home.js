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
