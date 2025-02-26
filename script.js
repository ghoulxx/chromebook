let currentSongItem = null;

function playSong(url, info) {
    const player = document.getElementById('audio-player');
    const songInfo = document.getElementById('song-info');
    const playIcon = document.getElementById('play-icon');
    
    // Update active song styling
    if (currentSongItem) {
        currentSongItem.classList.remove('active');
    }
    currentSongItem = event.currentTarget;
    currentSongItem.classList.add('active');
    
    // Update player
    player.src = url;
    songInfo.textContent = info;
    player.play();
    playIcon.className = 'fas fa-pause';
}

function togglePlay() {
    const player = document.getElementById('audio-player');
    const icon = document.getElementById('play-icon');
    
    if (player.paused) {
        player.play();
        icon.className = 'fas fa-pause';
    } else {
        player.pause();
        icon.className = 'fas fa-play';
    }
}

// Add event listener for when a song ends
document.getElementById('audio-player').addEventListener('ended', function() {
    const icon = document.getElementById('play-icon');
    icon.className = 'fas fa-play';
}); 
