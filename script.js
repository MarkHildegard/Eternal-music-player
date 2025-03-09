function playSong(file, title) {
    let audio = document.getElementById("audio");
    let songTitle = document.getElementById("song-title");

    audio.src = file;
    songTitle.textContent = title;
    audio.play();
}
