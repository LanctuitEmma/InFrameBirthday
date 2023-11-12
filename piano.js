const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => {
        key.classList.add('active');
        const note = key.getAttribute('data-note');
        playSound(note);
        setTimeout(() => {
            key.classList.remove('active');
        }, 200);
    });
});

function playSound(note) {
    const audioElement = document.getElementById(`audio${note}`);
    audioElement.currentTime = 0;
    audioElement.play();
}