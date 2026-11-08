'use client';

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private englishVoices: SpeechSynthesisVoice[] = [];
  private isSpeakingState = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    const all = this.synth.getVoices();
    this.englishVoices = all.filter((v) => v.lang.startsWith('en'));
  }

  public isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public isSpeaking(): boolean {
    return this.synth ? this.synth.speaking : false;
  }

  public speak(
    text: string,
    options: {
      rate?: number; // 0.75 for slow beginner mode, 1.0 for normal
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (err: unknown) => void;
    } = {}
  ): void {
    if (!this.synth) {
      options.onError?.(new Error('Speech synthesis not supported in this browser.'));
      return;
    }

    // Cancel any ongoing speech
    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = options.rate ?? 0.85; // slightly slower for clear learning
    utterance.pitch = 1.0;

    // Pick a preferred English voice if available
    if (this.englishVoices.length === 0) {
      this.loadVoices();
    }
    const preferred = this.englishVoices.find(
      (v) =>
        v.name.includes('Samantha') ||
        v.name.includes('Karen') ||
        v.name.includes('Daniel') ||
        v.name.includes('Google US English') ||
        v.name.includes('Natural')
    ) || this.englishVoices[0];

    if (preferred) {
      utterance.voice = preferred;
    }

    utterance.onstart = () => {
      this.isSpeakingState = true;
      options.onStart?.();
    };

    utterance.onend = () => {
      this.isSpeakingState = false;
      this.currentUtterance = null;
      options.onEnd?.();
    };

    utterance.onerror = (e) => {
      this.isSpeakingState = false;
      this.currentUtterance = null;
      options.onError?.(e);
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeakingState = false;
      this.currentUtterance = null;
    }
  }
}

export const speechService = new SpeechService();
