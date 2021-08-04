const refs = {
    colors: [
        '#FFFFFF',
        '#2196F3',
        '#4CAF50',
        '#FF9800',
        '#009688',
        '#795548',
    ],
    body: document.querySelector('.body'),
    startBtn: document.getElementById('start'),
    stopBtn: document.getElementById('stop'),
    randomIntegerFromInterval: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
};

refs.startBtn.addEventListener('click', startSwitching);
refs.stopBtn.addEventListener('click', stopSwitching);


function startSwitching() {
    refs.startBtn.removeEventListener('click', startSwitching)
    return colorSwitcher = setInterval((startSwitching) => {
        startSwitching = refs.body.style.background = `${refs.colors[refs.randomIntegerFromInterval(0, refs.colors.length)]}`;
    }, 1000);
};

function stopSwitching() {
    clearInterval(colorSwitcher);
    refs.startBtn.addEventListener('click', startSwitching);
};



