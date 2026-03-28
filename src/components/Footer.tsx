'use client';

import { useApp } from '@/context/AppContext';

export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-3 md:px-4 py-3 md:py-4" dir="ltr">
        <div className="font-mono text-xs text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-y-1 gap-x-2">
          <span className="flex items-center gap-x-2">
            <span className="text-gray-400 dark:text-gray-500">[LOG]</span>
            <span>
              {t.footer.connectedAs}: <span className="text-gray-700 dark:text-gray-300">בני ציון</span>
            </span>
          </span>
          <span className="text-gray-300 dark:text-gray-600 hidden sm:inline">|</span>
          <span className="flex items-center gap-x-2">
            <span>
              {t.footer.contact}:{' '}
              <a href="mailto:b4123190@gmail.com" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
                b4123190@gmail.com
              </a>
            </span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span>
              {t.footer.status}: <span className="text-emerald-600 dark:text-emerald-400">200 OK</span>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
