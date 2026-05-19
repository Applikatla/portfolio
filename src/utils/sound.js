let audioCtx = null;

const initAudio = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

const playTone = (frequency, type, duration, vol) => {
  try {
    const ctx = initAudio();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
    
    gainNode.gain.setValueAtTime(vol, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(ctx.currentTime + duration);
  } catch (e) {
    console.warn("Audio not supported or interaction needed first", e);
  }
};

export const playHoverSound = () => {
  playTone(800, 'sine', 0.1, 0.02); // Very soft, high ping
};

export const playClickSound = () => {
  playTone(300, 'triangle', 0.1, 0.05); // Deeper click
};

export const playSuccessSound = () => {
  playTone(500, 'sine', 0.1, 0.03);
  setTimeout(() => playTone(800, 'sine', 0.2, 0.03), 100);
};
