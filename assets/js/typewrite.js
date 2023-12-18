var i = 0;
var speed = 70;
var currentURL = window.location.href;
var typeElement = document.getElementById("typed-text");

document.addEventListener("DOMContentLoaded", () => {
  if (typeElement) {
      if (currentURL.endsWith('index.html')) { typeWriter("Frédéric Goossens"); }
      if (window.location.pathname === '/') { typeWriter("Frédéric Goossens"); }
      if (currentURL.endsWith('rastalabs.html')) { typeWriter('HTB – Pro Lab: Rastalabs'); }
      if (currentURL.endsWith('ai-ndhoven.html')) { typeWriter('AI-ndhoven'); }
  }
});

function typeWriter(txt) {
  if (i < txt.length) {
      typeElement.innerHTML += txt.charAt(i);
      i++;
      setTimeout(function () {
          typeWriter(txt);
      }, speed);
  }
}