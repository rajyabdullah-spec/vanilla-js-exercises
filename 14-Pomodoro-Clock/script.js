const timerLabel = document.getElementById('timer-label');
const timeLeftDisplay = document.getElementById('time-left');
const breakLengthDisplay = document.getElementById('break-length');
const sessionLengthDisplay = document.getElementById('session-length');
const beep = document.getElementById('beep');
const container = document.getElementById('main-container');
const startStopBtn = document.getElementById('start_stop');

let breakLength = 5;
let sessionLength = 25;
let timeLeft = 25 * 60;
let timerId = null;
let isSession = true;
let isRunning = false;
let pressTimer = null;

const updateDisplay = () => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    const formatted = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    timeLeftDisplay.textContent = formatted;
    document.title = `(${formatted}) Pomodoro`;
};

const handleSwitch = () => {
    try { beep.play(); } catch(e) { console.warn("Audio interaction required"); }
    isSession = !isSession;
    timerLabel.textContent = isSession ? "Session" : "Break";
    timeLeft = (isSession ? sessionLength : breakLength) * 60;
    
    container.classList.remove('session-active', 'break-active');
    container.classList.add(isSession ? 'session-active' : 'break-active');
    updateDisplay();
};

const startStop = () => {
    if (isRunning) {
        clearInterval(timerId);
        isRunning = false;
        startStopBtn.textContent = "Start";
    } else {
        isRunning = true;
        startStopBtn.textContent = "Pause";
        timerId = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                handleSwitch();
            }
        }, 1000);
    }
};

const reset = () => {
    clearInterval(timerId);
    isRunning = false;
    isSession = true;
    breakLength = 5;
    sessionLength = 25;
    timeLeft = 25 * 60;
    timerLabel.textContent = "Session";
    breakLengthDisplay.textContent = breakLength;
    sessionLengthDisplay.textContent = sessionLength;
    startStopBtn.textContent = "Start";
    beep.pause();
    beep.currentTime = 0;
    container.className = 'glass-panel session-active';
    updateDisplay();
};

const setupControls = (id, action) => {
    const el = document.getElementById(id);
    const startAction = (e) => {
        if (isRunning) return;
        e.preventDefault();
        action();
        pressTimer = setInterval(action, 150);
    };
    const stopAction = () => clearInterval(pressTimer);

    el.onmousedown = startAction;
    el.onmouseup = el.onmouseleave = stopAction;
    el.ontouchstart = startAction;
    el.ontouchend = stopAction;
};


setupControls('break-increment', () => {
    if(breakLength < 60) { breakLength++; breakLengthDisplay.textContent = breakLength; if(!isSession) {timeLeft = breakLength * 60; updateDisplay();}}
});
setupControls('break-decrement', () => {
    if(breakLength > 1) { breakLength--; breakLengthDisplay.textContent = breakLength; if(!isSession) {timeLeft = breakLength * 60; updateDisplay();}}
});
setupControls('session-increment', () => {
    if(sessionLength < 60) { sessionLength++; sessionLengthDisplay.textContent = sessionLength; if(isSession) {timeLeft = sessionLength * 60; updateDisplay();}}
});
setupControls('session-decrement', () => {
    if(sessionLength > 1) { sessionLength--; sessionLengthDisplay.textContent = sessionLength; if(isSession) {timeLeft = sessionLength * 60; updateDisplay();}}
});

startStopBtn.onclick = startStop;
document.getElementById('reset').onclick = reset;


updateDisplay();
container.classList.add('session-active');