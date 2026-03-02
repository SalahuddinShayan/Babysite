const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

enterBtn.addEventListener("click", () => {

    // Fade out intro
    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
        mainContent.classList.remove("hidden");

        // Soft confetti burst
        confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
        });

    }, 1000);
});