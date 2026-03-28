'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';

export default function Header() {
  const { t, toggleLanguage, language, isRTL, darkMode, toggleDarkMode } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { key: 'about', label: t.header.nav.about },
    { key: 'projects', label: t.header.nav.projects },
    { key: 'skills', label: t.header.nav.skills },
    { key: 'contact', label: t.header.nav.contact },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Logo + Name */}
        <div className="flex items-center gap-2 md:gap-3">
          <Image
            src="/logo-80.png"
            alt="Logo"
            width={28}
            height={28}
            className="rounded-md w-7 h-7 md:w-8 md:h-8 dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
          />
          <span className="font-bold text-base md:text-lg text-gray-900 dark:text-white">{t.header.name}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 hidden md:inline">|</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 hidden md:inline">{t.header.role}</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.key)}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-base rounded-md transition-colors bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600"
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 text-xs font-mono bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
          >
            {language === 'he' ? 'EN' : 'עב'}
          </button>
        </nav>

        {/* Mobile: toggles + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 text-sm rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-2 text-xs font-mono bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
          >
            {language === 'he' ? 'EN' : 'עב'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-700 dark:text-gray-300"
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              ) : (
                <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 animate-slideUp" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="flex flex-col px-4 py-3 gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollTo(item.key)}
                className="text-base text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2.5 text-start"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
