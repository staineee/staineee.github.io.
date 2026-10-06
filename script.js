// ===============================
// MUSIC
// ===============================

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");
const musicText = document.getElementById("musicText");

musicButton.addEventListener("click", async () => {
    try {
        if (music.paused) {
            await music.play();
            musicButton.classList.add("playing");
            musicText.textContent = "MUSIC ON";
        } else {
            music.pause();
            musicButton.classList.remove("playing");
            musicText.textContent = "MUSIC OFF";
        }
    } catch (error) {
        musicText.textContent = "ADD MUSIC";
        console.log("Музыка не найдена. Положи файл music.mp3 в папку music.");
    }
});


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
    ".reveal-on-scroll"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});


// ===============================
// HERO ANIMATION
// ===============================

window.addEventListener("load", () => {
    const heroElements = document.querySelectorAll(".hero .reveal");

    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("visible");
        }, 150 + index * 180);
    });
});
