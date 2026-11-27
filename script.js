const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const replayBtn = document.getElementById("replayBtn");
const hint = document.getElementById("hint");

function openCard() {
    envelope.classList.add("open");

    openBtn.style.display = "none";
    hint.style.display = "none";

    replayBtn.style.display = "inline-block";

    createConfetti();
}

function replayCard() {
    envelope.classList.remove("open");

    replayBtn.style.display = "none";
    openBtn.style.display = "inline-block";
    hint.style.display = "block";
}

function createConfetti() {
    const symbols = ["♡", "✦", "✧", "♥", "✿"];

    for (let i = 0; i < 35; i++) {
        const confetti = document.createElement("div");

        confetti.innerText =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = "20px";
        confetti.style.color = "#ffffff";
        confetti.style.pointerEvents = "none";
        confetti.style.zIndex = "10";

        document.body.appendChild(confetti);

        const duration = 2000 + Math.random() * 2000;

        confetti.animate([
            { transform: "translateY(0) rotate(0deg)", opacity: 1 },
            { transform: `translateY(100vh) rotate(360deg)`, opacity: 0 }
        ], {
            duration: duration,
            easing: "ease-in"
        });

        setTimeout(() => confetti.remove(), duration);
    }
}