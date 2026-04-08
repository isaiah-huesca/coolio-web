const container = document.getElementById('container');
const text = document.getElementById('text');

function breathAnimation() {
    text.innerText = 'Breathe In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        }, 7000);
    }, 4000);
}

breathAnimation();
