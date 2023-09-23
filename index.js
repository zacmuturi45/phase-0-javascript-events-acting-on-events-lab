function moveDodgerLeft(e) {
    const rite = dodger.style.left.replace('px', '');
    const right = parseInt(rite, 10);

if (right > 0) {
    dodger.style.left = `${right - 5}px`;
}
}

function moveDodgerRight(e) {
    const rite = dodger.style.left.replace('px', '');
    const right = parseInt(rite, 10);

    if (right < 360) {
        dodger.style.left = `${right + 5}px`;
    }
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft();
    }
})


document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        moveDodgerRight();
    }
})
