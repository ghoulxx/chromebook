function startCountdown() {
    const countdownElement = document.getElementById('countdown');

    // Set the target date to 30 days from now
    const now = new Date();
    const targetDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    function updateCountdown() {
        const currentTime = new Date();
        const difference = targetDate - currentTime;

        if (difference <= 0) {
            countdownElement.innerHTML = "It's Here!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        countdownElement.innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

document.addEventListener('DOMContentLoaded', startCountdown);
