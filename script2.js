document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById("greeting");
    const greetingText = "WELCOME TO SAURABH'S BOOKSTORE";
    let charIndex = 0;
  
    function typeWriterEffect() {
      if (charIndex < greetingText.length) {
        greetingElement.innerHTML += greetingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriterEffect, 200); // Delay between each character
      }
    }
    
    typeWriterEffect();
  });