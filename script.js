function startCountdown() {
    const countdownElement = document.getElementById('countdown');

    const now = new Date();
    const targetDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    let lastOutput = '';

    function updateCountdown() {
        const currentTime = new Date();
        const difference = targetDate - currentTime;

        if (difference <= 0) {
            countdownElement.textContent = "It's Here!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        const output = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (output !== lastOutput) {
            countdownElement.classList.add('animate');
            setTimeout(() => countdownElement.classList.remove('animate'), 200);
        }

        countdownElement.textContent = output;
        lastOutput = output;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

document.addEventListener('DOMContentLoaded', startCountdown);
