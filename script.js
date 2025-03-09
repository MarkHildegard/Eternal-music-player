let audio = document.getElementById("audio");
let loopButton = document.getElementById("loop-btn");
let favoritesList = document.getElementById("favorites");

// Lade gespeicherte Favoriten aus localStorage
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
updateFavorites();

// Song abspielen
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

// Song zu Favoriten hinzufügen/entfernen
function toggleFavorite(file, title) {
    let index = favorites.findIndex(song => song.file === file);

    if (index === -1) {
        favorites.push({ file, title });
    } else {
        favorites.splice(index, 1);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateFavorites();
}

// Aktualisiert die Favoriten-Playlist
function updateFavorites() {
    favoritesList.innerHTML = "";

    favorites.forEach(song => {
        let li = document.createElement("li");
        li.innerHTML = `▶ <span onclick="playSong('${song.file}', '${song.title}')">${song.title}</span>
                        <button class="fav-btn fav-active" onclick="toggleFavorite('${song.file}', '${song.title}')">❤️</button>`;
        favoritesList.appendChild(li);
    });
}
