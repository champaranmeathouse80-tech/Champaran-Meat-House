import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * Optional cozy restaurant ambient sound generator.
 * Uses Web Audio API to synthesize a gentle warm fireplace/charcoal hearth crackle.
 * Completely optional, muted by default, no external audio files required.
 */
export function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<number | null>(null);

  const startSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.12, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Pink noise buffer for cozy warmth
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Lowpass filter for muffled hearth rumble
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(masterGain);
      whiteNoise.start();

      // Random gentle crackles
      const triggerCrackle = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const crackleCtx = audioCtxRef.current;
        const osc = crackleCtx.createOscillator();
        const crackleGain = crackleCtx.createGain();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(80 + Math.random() * 240, crackleCtx.currentTime);
        
        crackleGain.gain.setValueAtTime(0.04 + Math.random() * 0.06, crackleCtx.currentTime);
        crackleGain.gain.exponentialRampToValueAtTime(0.0001, crackleCtx.currentTime + 0.04);
        
        osc.connect(crackleGain);
        crackleGain.connect(masterGain);
        
        osc.start();
        osc.stop(crackleCtx.currentTime + 0.05);
      };

      intervalRef.current = window.setInterval(() => {
        if (Math.random() > 0.4) {
          triggerCrackle();
        }
      }, 350);

      setIsPlaying(true);
    } catch {
      console.warn("Audio Context initialization deferred");
    }
  };

  const stopSound = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSound();
    } else {
      startSound();
    }
  };

  useEffect(() => {
    return () => {
      stopSound();
    };
  }, []);

  return (
    <button
      id="ambient-sound-toggle-btn"
      onClick={toggleSound}
      title={isPlaying ? "Mute Hearth Ambience" : "Play Cozy Hearth Ambience"}
      aria-label={isPlaying ? "Mute Hearth Ambience" : "Play Cozy Hearth Ambience"}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
        isPlaying 
          ? 'bg-[#F4ECE1] border-[#B84E1A] text-[#B84E1A] shadow-[0_0_12px_rgba(184,78,26,0.2)]' 
          : 'bg-[#FFFFFF] border-[#DFCDB9] text-[#6B594C] hover:border-[#B84E1A] hover:text-[#2D231C]'
      }`}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#B84E1A] animate-pulse" />
          <span className="hidden sm:inline">Hearth Ambience On</span>
          <span className="sm:hidden">Sound On</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-[#8A7565]" />
          <span className="hidden sm:inline">Cozy Ambience (Off)</span>
          <span className="sm:hidden">Ambience</span>
        </>
      )}
    </button>
  );
}
