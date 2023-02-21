function openPage(pageName) {
  var i, pages;
  pages = document.getElementsByClassName("page");
  for (i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
}
