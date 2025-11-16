//your JS code here. If required.
// your JS code here. If required.

const btns = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

let currentAudio = null;

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const sound = btn.getAttribute("data-sound");

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = new Audio(`./sounds/${sound}.mp3`);
        currentAudio.play();
    });
});

stopBtn.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
});

