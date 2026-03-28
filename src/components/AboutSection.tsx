'use client';

import { useApp } from '@/context/AppContext';
import { useState, useEffect } from 'react';

export default function AboutSection() {
  const { t, language } = useApp();
  const [typed, setTyped] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const command = t.about.command;

  useEffect(() => {
    setTyped('');
    setShowResult(false);
    setHasAnimated(false);
  }, [language]);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let i = 0;
          const interval = setInterval(() => {
            setTyped(command.slice(0, i + 1));
            i++;
            if (i >= command.length) {
              clearInterval(interval);
              setTimeout(() => setShowResult(true), 300);
            }
          }, 50);
        }
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById('about');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [command, hasAnimated]);

  const jsonOutput = JSON.stringify(
    {
      name: 'Beny Zion',
      title: 'Fullstack Developer',
      education: t.about.education,
      superpower: t.about.superpower,
      location: t.about.location,
    },
    null,
    2
  );

  return (
    <section id="about" className="py-12 md:py-20 px-3 md:px-4 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-900 dark:bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-xl border border-gray-800 dark:border-gray-700">
          {/* Terminal Header */}
          <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2.5 md:py-3 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />
            <span className="ml-1.5 md:ml-2 text-xs text-gray-400 font-mono">terminal</span>
          </div>

          {/* Terminal Body */}
          <div className="p-4 md:p-6 font-mono text-xs md:text-sm overflow-x-auto" dir="ltr">
            {/* Command Line */}
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <span className="text-emerald-400">$</span>
              <span className="text-white">{typed}</span>
              {!showResult && <span className="w-2 h-4 md:h-5 bg-emerald-400 animate-pulse inline-block" />}
            </div>

            {/* JSON Output */}
            {showResult && (
              <div className="animate-fadeIn">
                <div className="text-gray-400 mb-2">// Response: 200 OK</div>
                <pre className="text-emerald-300 whitespace-pre-wrap leading-relaxed wrap-break-word">{jsonOutput}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
