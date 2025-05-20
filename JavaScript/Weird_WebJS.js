window.addEventListener('load', function() {
    console.log('Page fully loaded');
});

// When you click the ok for the alert the music will start playing
// Code Reference: https://devncoffee.com/adding-background-music-in-html/
// Music Reference: https://pixabay.com/music/ambient-isolation-atmosphere-8637/
document.addEventListener("DOMContentLoaded", () => {
    alert("Woah! You found the Weird Web. Congrats!")

    const bgm = document.getElementById("bgm");
    const muteBtn = document.getElementById("muteBtn");

    bgm.muted = true;
    bgm.play()
        .then(() => {
            console.log("Music is playing automatically (muted).");
        })
        .catch((error) => {
            console.error("Autoplay blocked:", error);
        });

    bgm.muted = false;
    console.log("Audio unmuted after user interaction (alert).");

    muteBtn.onclick = () => {
        bgm.muted = !bgm.muted;
        muteBtn.textContent = bgm.muted ? "Unmute" : "Mute";
    };
});