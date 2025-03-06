document.addEventListener("DOMContentLoaded", function () {
    let formContainer = document.querySelector(".form-container");
    formContainer.style.opacity = 0; // Start with hidden form
    formContainer.style.transition = "opacity 1.5s ease-in-out"; // Smooth transition

    setTimeout(() => {
        formContainer.style.opacity = 1; // Fade in
    }, 500); // Delay before fade-in starts
});

