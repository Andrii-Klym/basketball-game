/* START TASK 3: Your code goes here */
const two = 2;
const eightHundred = 800;
const oneThousand = 1000;
const court = document.querySelector('#task3');
const ball = document.querySelector('#ball');
const bucketLeft = document.querySelector('.bucketLeft');
const bucketRight = document.querySelector('.bucketRight');
const scoreA = document.querySelector('.scoreA');
const scoreB = document.querySelector('.scoreB');
const scoreStat = document.querySelector('.scoreStat');

let countA = 0;
let countB = 0;


bucketLeft.onclick = function () {
    setTimeout(() => bucketLeft.dispatchEvent(new CustomEvent('bucket-left', {
        bubbles: true
    })), eightHundred);
};

bucketRight.onclick = function () {
    setTimeout(() => bucketLeft.dispatchEvent(new CustomEvent('bucket-right', {
        bubbles: true
    })), eightHundred);
};

document.addEventListener('bucket-left', () => {
    countA += 1;
    scoreA.innerHTML = `Team A: ${countA}`;
    scoreStat.innerHTML = 'Team A score!';
    scoreStat.classList.remove('redB');
    scoreStat.classList.add('blueA');
});

document.addEventListener('bucket-right', () => {
    countB += 1;
    scoreB.innerHTML = `Team B: ${countB}`;
    scoreStat.innerHTML = 'Team B score!';
    scoreStat.classList.remove('blueA');
    scoreStat.classList.add('redB');
})


court.onclick = function (event) {
    let courtCoords = this.getBoundingClientRect();

    let ballCoords = {
        top: event.clientY - courtCoords.top - court.clientTop - ball.clientHeight / two,
        left: event.clientX - courtCoords.left - court.clientLeft - ball.clientWidth / two
    };

    if (ballCoords.top < 0) {
        ballCoords.top = 0;
    }

    if (ballCoords.left < 0) {
        ballCoords.left = 0;
    }

    if (ballCoords.left + ball.clientWidth > court.clientWidth) {
        ballCoords.left = court.clientWidth - ball.clientWidth;
    }

    if (ballCoords.top + ball.clientHeight > court.clientHeight) {
        ballCoords.top = court.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
    ball.classList.add('rotateAnimation');
    setTimeout(() => {
        ball.classList.remove('rotateAnimation');
    }, oneThousand)
};

court.addEventListener('click', (e) => {
    if (e.target.id === 'task3') {
        scoreStat.innerHTML = '';
    }
});
/* END TASK 3 */