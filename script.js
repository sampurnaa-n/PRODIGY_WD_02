let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
const lapsContainer = document.getElementById('laps');

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStopBtn').textContent = 'Pause';
    } else {
        isRunning = false;
        clearInterval(timer);
        document.getElementById('startStopBtn').textContent = 'Start';
    }
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    document.getElementById('display').textContent = formatTime(hours, minutes, seconds);
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('startStopBtn').textContent = 'Start';
    lapsContainer.innerHTML = ''; // Clear laps
}

function formatTime(hours, minutes, seconds) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function recordLap() {
    if (isRunning) {
        const lapTime = formatTime(hours, minutes, seconds);
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapsContainer.appendChild(lapItem);
    }
}

document.getElementById('startStopBtn').addEventListener('click', startStopwatch);
document.getElementById('resetBtn').addEventListener('click', resetStopwatch);
document.getElementById('lapBtn').addEventListener('click', recordLap);
