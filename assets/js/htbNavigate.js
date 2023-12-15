var htbLinuxDiv = document.getElementById("htbLinux");
var htbWindowsDiv = document.getElementById("htbWindows");
var htbOtherDiv = document.getElementById("htbOther");

document.addEventListener("DOMContentLoaded", function () {
    htbLinuxDiv.addEventListener("click", function () {
      navigateToPage("htb_linux.html");
    });
  
    htbWindowsDiv.addEventListener("click", function () {
      navigateToPage("htb_windows.html");
    });
  
    htbOtherDiv.addEventListener("click", function () {
      navigateToPage("htb_other.html");
    });
  });

function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}