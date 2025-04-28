document.addEventListener('DOMContentLoaded', () => {
    const enterScreen = document.getElementById('enter-screen');
    const bioContainer = document.getElementById('bio-container');
    const music = document.getElementById('background-music');
    const animatedTitle = document.getElementById('animated-title');

    const titleText = "ghoulx"; // CHANGE THIS to your real name!

    enterScreen.addEventListener('click', () => {
        enterScreen.style.opacity = 0;

        setTimeout(() => {
            enterScreen.classList.add('hidden');
            bioContainer.classList.remove('hidden');

            music.volume = 0.5;
            music.play();

            typeTitle(titleText);
        }, 1000); // match fade
    });

    function typeTitle(text) {
        let i = 0;
        animatedTitle.style.width = 'auto';
        const interval = setInterval(() => {
            if (i < text.length) {
                animatedTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                animatedTitle.style.borderRight = 'none'; // End cursor
            }
        }, 100);
    }

    /* Initialize Particles.js */
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('particles.js config loaded');
    });
});
