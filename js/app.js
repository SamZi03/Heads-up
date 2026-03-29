(function () {
  const TIMER_DURATION = 60;
  const TILT_THRESHOLD_DOWN = 22;
  const TILT_THRESHOLD_UP = 12;
  const NEUTRAL_ZONE = 8;

  let state = 'home';
  let selectedDeck = null;
  let shuffledWords = [];
  let wordIndex = 0;
  let results = [];
  let correctCount = 0;
  let attemptCount = 0;
  let timeLeft = TIMER_DURATION;
  let timerInterval = null;
  let tiltBaseline = null;
  let baselineSamples = [];
  let baselineCaptured = false;
  let tiltReturned = true;
  let orientationHandler = null;
  let tiltAxis = 'beta';
  let audioCtx = null;

  const screens = {
    home: document.getElementById('screen-home'),
    instructions: document.getElementById('screen-instructions'),
    playing: document.getElementById('screen-playing'),
    results: document.getElementById('screen-results'),
  };

  const deckGrid = document.getElementById('deck-grid');
  const instructionsDeckName = document.getElementById('instructions-deck-name');
  const btnStart = document.getElementById('btn-start');
  const wordDisplay = document.getElementById('word-display');
  const timerBar = document.getElementById('timer-bar');
  const timerText = document.getElementById('timer-text');
  const currentScore = document.getElementById('current-score');
  const overlay = document.getElementById('overlay');
  const finalScore = document.getElementById('final-score');
  const resultsList = document.getElementById('results-list');
  const btnPlayAgain = document.getElementById('btn-play-again');
  const btnHome = document.getElementById('btn-home');

  function showScreen(name) {
    state = name;
    Object.entries(screens).forEach(([key, el]) => {
      el.classList.toggle('active', key === name);
    });
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildDeckGrid() {
    deckGrid.innerHTML = '';
    DECKS.forEach(deck => {
      const card = document.createElement('div');
      card.className = 'deck-card';
      card.style.backgroundColor = deck.color;
      card.textContent = deck.name;
      card.addEventListener('click', () => selectDeck(deck));
      deckGrid.appendChild(card);
    });
  }

  function selectDeck(deck) {
    selectedDeck = deck;
    instructionsDeckName.textContent = deck.name;
    showScreen('instructions');
  }

  async function requestOrientationPermission() {
    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      const permission = await DeviceOrientationEvent.requestPermission();
      return permission === 'granted';
    }
    return true;
  }

  function startGame() {
    shuffledWords = shuffle(selectedDeck.words);
    wordIndex = 0;
    results = [];
    correctCount = 0;
    attemptCount = 0;
    timeLeft = TIMER_DURATION;
    tiltBaseline = null;
    baselineSamples = [];
    baselineCaptured = false;
    tiltReturned = true;
    const angle = (window.screen && window.screen.orientation) ? window.screen.orientation.angle : (window.orientation || 0);
    tiltAxis = (Math.abs(angle) === 90) ? 'gamma' : 'beta';

    document.documentElement.style.setProperty('--play-color', selectedDeck.color);

    currentScore.textContent = '0';
    timerBar.style.width = '100%';
    timerBar.style.backgroundColor = '#4caf50';
    timerText.textContent = TIMER_DURATION;

    showScreen('playing');
    startCountdown();
  }

  function startCountdown() {
    let count = 5;
    wordDisplay.textContent = count;
    wordDisplay.style.fontSize = '25vw';
    playTick();
    const interval = setInterval(() => {
      count--;
      if (count <= 0) {
        clearInterval(interval);
        wordDisplay.style.fontSize = '';
        wordDisplay.textContent = shuffledWords[wordIndex];
        startTimer();
        attachOrientation();
      } else {
        wordDisplay.textContent = count;
        playTick();
      }
    }, 1000);
  }

  function startTimer() {
    const startTime = Date.now();
    const totalMs = TIMER_DURATION * 1000;

    timerInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, totalMs - elapsed);
      timeLeft = remaining / 1000;

      updateTimerDisplay();

      if (remaining <= 0) {
        endGame();
      }
    }, 100);
  }

  function updateTimerDisplay() {
    const secs = Math.ceil(timeLeft);
    timerText.textContent = secs;

    const pct = (timeLeft / TIMER_DURATION) * 100;
    timerBar.style.width = pct + '%';

    let color;
    if (pct > 50) {
      color = '#4caf50';
    } else if (pct > 25) {
      color = '#ff9800';
    } else {
      color = '#f44336';
    }
    timerBar.style.backgroundColor = color;
  }

  function attachOrientation() {
    orientationHandler = function (e) {
      let val = e[tiltAxis];
      if (val === null || val === undefined) return;
      if (tiltAxis === 'gamma' && (window.screen.orientation.angle === 270 || window.orientation === -90)) val = -val;

      if (!baselineCaptured) {
        baselineSamples.push(val);
        if (baselineSamples.length >= 20) {
          tiltBaseline = baselineSamples.reduce((a, b) => a + b, 0) / baselineSamples.length;
          baselineCaptured = true;
        }
        return;
      }

      const delta = val - tiltBaseline;

      if (tiltReturned) {
        if (delta < -TILT_THRESHOLD_DOWN) {
          tiltReturned = false;
          registerAction('correct');
        } else if (delta > TILT_THRESHOLD_UP) {
          tiltReturned = false;
          registerAction('pass');
        }
      } else {
        if (Math.abs(delta) < NEUTRAL_ZONE) tiltReturned = true;
      }
    };
    window.addEventListener('deviceorientation', orientationHandler);
  }

  function detachOrientation() {
    if (orientationHandler) {
      window.removeEventListener('deviceorientation', orientationHandler);
      orientationHandler = null;
    }
  }

  function registerAction(type) {
    const word = shuffledWords[wordIndex];
    results.push({word, result: type});
    attemptCount++;

    if (type === 'correct') {
      correctCount++;
      currentScore.textContent = correctCount;
      flashOverlay('correct');
      playCorrect();
      vibrate(type);
    } else {
      flashOverlay('pass');
      playPass();
      vibrate(type);
    }

    wordIndex++;
    if (wordIndex >= shuffledWords.length) {
      shuffledWords = shuffle(selectedDeck.words);
      wordIndex = 0;
    }
    wordDisplay.textContent = shuffledWords[wordIndex];
  }

  function flashOverlay(type) {
    overlay.classList.remove('correct', 'pass', 'hide');
    overlay.classList.add(type);
    setTimeout(() => {
      overlay.classList.add('hide');
      setTimeout(() => {
        overlay.classList.remove('correct', 'pass', 'hide');
      }, 400);
    }, 400);
  }

  function initAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
  }

  function playCorrect() {
    try {
      const ctx = audioCtx;
      [523, 784].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.value = freq;
        const t = ctx.currentTime + i * 0.13;
        gain.gain.setValueAtTime(0.5, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
        osc.start(t); osc.stop(t + 0.28);
      });
    } catch(e) {}
  }

  function playPass() {
    try {
      const ctx = audioCtx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(380, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(130, ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.35);
    } catch(e) {}
  }

  function playTick() {
    try {
      const ctx = audioCtx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = 660;
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.07);
    } catch(e) {}
  }

  function vibrate(type) {
    try {
      if (type === 'correct') navigator.vibrate(300);
      else navigator.vibrate([200, 100, 200]);
    } catch(e) {}
  }

  function endGame() {
    clearInterval(timerInterval);
    timerInterval = null;
    detachOrientation();
    showResults();
  }

  function showResults() {
    finalScore.textContent = correctCount + ' correct out of ' + attemptCount + ' attempts';

    resultsList.innerHTML = '';
    results.forEach(item => {
      const li = document.createElement('li');
      if (item.result === 'correct') {
        li.innerHTML = '<span class="result-correct">&#10003;</span> ' + item.word;
      } else {
        li.innerHTML = '<span class="result-pass">&#10007;</span> ' + item.word;
      }
      resultsList.appendChild(li);
    });

    showScreen('results');
  }

  btnStart.addEventListener('click', async () => {
    initAudio();
    const granted = await requestOrientationPermission();
    if (!granted) {
      alert('Orientation permission is required to play.');
      return;
    }
    startGame();
  });

  btnPlayAgain.addEventListener('click', () => {
    showScreen('instructions');
  });

  btnHome.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    detachOrientation();
    showScreen('home');
  });

  function setViewportHeight() {
    document.documentElement.style.setProperty('--vh', window.innerHeight + 'px');
  }
  window.addEventListener('resize', setViewportHeight);
  setViewportHeight();

  buildDeckGrid();
})();
