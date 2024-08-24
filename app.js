document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('loading-overlay').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
    }, 2000);

    const sigilContainer = document.getElementById('sigil-container');
    const sigil = document.getElementById('sigil');
    const powerWord = document.getElementById('power-word');
    let isRevealed = false;

    const powerWords = ['STRENGTH', 'COURAGE', 'WISDOM', 'RESILIENCE', 'HARMONY'];
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FED766', '#2AB7CA'];

    sigilContainer.addEventListener('click', function() {
        if (!isRevealed) {
            // Reveal power word
            const randomIndex = Math.floor(Math.random() * powerWords.length);
            powerWord.textContent = powerWords[randomIndex];
            powerWord.style.opacity = '1';

            // Change background color
            document.body.style.backgroundColor = colors[randomIndex];

            // Rotate sigil
            sigil.style.transform = 'rotate(360deg)';
            sigil.style.transition = 'transform 0.5s ease-in-out';

            isRevealed = true;
        } else {
            // Reset
            powerWord.style.opacity = '0';
            document.body.style.backgroundColor = '#1a1a1a';
            sigil.style.transform = 'rotate(0deg)';
            isRevealed = false;
        }
    });
});