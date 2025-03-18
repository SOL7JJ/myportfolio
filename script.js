document.addEventListener("DOMContentLoaded", function() {
    // Mobile menu toggle
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Typing Animation
    const words = ["a Developer", "a Designer", "a Creator"];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = words[wordIndex];
    const typingSpan = document.querySelector(".typing");

    function type() {
        if (charIndex < currentWord.length) {
            typingSpan.textContent += currentWord[charIndex];
            charIndex++;
            setTimeout(type, 150);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            currentWord = words[wordIndex];
            setTimeout(type, 500);
        }
    }

    type();

    // Contact Form Validation
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Message sent successfully!");
        form.reset();
    });
});
