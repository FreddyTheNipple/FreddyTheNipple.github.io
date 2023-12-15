var htbLinuxDiv = document.getElementById("htbLinux");
var htbWindowsDiv = document.getElementById("htbWindows");
var htbOtherDiv = document.getElementById("htbOther");

document.addEventListener("DOMContentLoaded", function () {
    htbLinuxDiv.addEventListener("click", function () {
      navigateToPage("htbList.html?os=Linux");
    });
  
    htbWindowsDiv.addEventListener("click", function () {
      navigateToPage("htbList.html?os=Windows");
    });
  
    htbOtherDiv.addEventListener("click", function () {
      navigateToPage("htbList.html?os=Other");
    });
  });

function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}