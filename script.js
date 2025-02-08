// Show "Oops, wrong button" only when No is clicked
function wrongButton() {
    document.getElementById("message").style.display = "block";
}

// Envelope click updates image, then waits for another click to go to the final page
function openEnvelope() {
    let envelopeImg = document.getElementById("envelope-img");

    // Change the image to open envelope
    envelopeImg.src = "envelope-open.png";

    // Wait a short delay before allowing the user to click to go to the final page
    setTimeout(() => {
        document.body.addEventListener("click", goToFinalPage);
    }, 500); // 0.5-second delay ensures image updates first
}

// Function to navigate to the final page
function goToFinalPage() {
    window.location.href = "hearts.html";
}

// Generate floating hearts on the final page
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".heart-container")) {
        for (let i = 20; i > 0; i--) {
            createHeart();
        }
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random speed
    document.querySelector(".heart-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}