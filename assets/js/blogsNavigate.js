var rastalabs = document.getElementById("rastalabs");
var aindhoven = document.getElementById("AI-ndhoven");

document.addEventListener("DOMContentLoaded", function () {
    rastalabs.addEventListener("click", function () {
      navigateToPage("/blogs/rastalabs.html");
    });
  
    aindhoven.addEventListener("click", function () {
      navigateToPage("/blogs/ai-ndhoven.html");
    });

  });

function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}