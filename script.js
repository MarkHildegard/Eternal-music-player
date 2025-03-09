let audio = document.getElementById("audio");
let loopButton = document.getElementById("loop-btn");

function playSong(file, title) {
    let songTitle = document.getElementById("song-title");

    audio.src = file;
    songTitle.textContent = title;
    audio.play();
}

// Loop-Modus an/aus schalten
function toggleLoop() {
    audio.loop = !audio.loop;

    if (audio.loop) {
        loopButton.textContent = "🔁 Loop an";
        loopButton.classList.add("loop-active");
    } else {
        loopButton.textContent = "🔁 Loop aus";
        loopButton.classList.remove("loop-active");
    }
}
