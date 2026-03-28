'use client';

import { useApp } from '@/context/AppContext';
import { useRef, useState, useCallback, useEffect } from 'react';

const codeContent = `const developer = {
  name: "Beny Zion",
  email: "b4123190@gmail.com",
  role: "Fullstack Developer",
  status: "Deploying to Production...",
  focus: [
    "Next.js", "React",
    "Node.js", "AI-Driven Dev"
  ],
  isAvailable: true,
  execute: () => openMailClient()
};

// Drag the slider ←→`;

export default function HeroSection() {
  const { t, isRTL } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);
  const [mobileView, setMobileView] = useState<'ui' | 'code'>('ui');

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => handleMove(e.clientX), [handleMove]);
  const handleTouchMove = useCallback((e: TouchEvent) => handleMove(e.touches[0].clientX), [handleMove]);

  const stopDrag = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', stopDrag);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stopDrag);
    };
  }, [handleMouseMove, handleTouchMove, stopDrag]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-14 md:pt-16 px-3 md:px-4 bg-white dark:bg-gray-950 transition-colors">

      {/* ===== MOBILE: toggle between UI / Code ===== */}
      <div className="w-full md:hidden">
        {/* Toggle tabs */}
        <div className="flex mb-3 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 max-w-xs mx-auto">
          <button
            onClick={() => setMobileView('ui')}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
              mobileView === 'ui'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            UI
          </button>
          <button
            onClick={() => setMobileView('code')}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
              mobileView === 'code'
                ? 'bg-gray-900 dark:bg-black text-emerald-400 shadow-sm'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            {'<Code />'}
          </button>
        </div>

        {/* Mobile card */}
        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
          {mobileView === 'ui' ? (
            <div className="bg-white dark:bg-gray-900 p-6" dir={isRTL ? 'rtl' : 'ltr'}>
              <div className="inline-block px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-medium mb-4">
                {t.header.available}
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                {t.hero.greeting}
              </h1>
              <h2 className="text-base text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                {t.hero.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {t.hero.description}
              </p>
              <button
                onClick={scrollToAbout}
                className="px-5 py-2.5 text-sm bg-gray-900 dark:bg-emerald-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-emerald-500 transition-colors font-medium"
              >
                {t.hero.cta} →
              </button>
            </div>
          ) : (
            <div className="bg-gray-900 dark:bg-black p-5" dir="ltr">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="ml-1.5 text-xs text-gray-400 font-mono">developer.ts</span>
              </div>
              <pre className="font-mono text-xs text-emerald-400 leading-relaxed whitespace-pre-wrap">
                {codeContent}
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* ===== DESKTOP: slider ===== */}
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl h-130 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl select-none hidden md:block"
      >
        {/* UI Side */}
        <div
          className="absolute inset-0 bg-white dark:bg-gray-900 flex items-center justify-center p-16"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div className="max-w-lg" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium mb-6">
              {t.header.available}: b4123190@gmail.com
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
              {t.hero.greeting}
            </h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t.hero.title}
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              {t.hero.description}
            </p>
            <button
              onClick={scrollToAbout}
              className="px-6 py-3 bg-gray-900 dark:bg-emerald-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-emerald-500 transition-colors font-medium"
            >
              {t.hero.cta} →
            </button>
          </div>
        </div>

        {/* Code Side */}
        <div
          className="absolute inset-0 bg-gray-900 dark:bg-black flex items-center justify-center p-12"
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <div className="w-full max-w-lg" dir="ltr">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-gray-400 font-mono">developer.ts</span>
            </div>
            <pre className="font-mono text-base text-emerald-400 leading-relaxed whitespace-pre-wrap">
              {codeContent}
            </pre>
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-emerald-500 cursor-col-resize z-10"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          onMouseDown={() => { isDragging.current = true; }}
          onTouchStart={() => { isDragging.current = true; }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
              <path d="M7 4L3 10L7 16M13 4L17 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
