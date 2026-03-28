'use client';

import { useApp } from '@/context/AppContext';
import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { skills } from '@/data/skills';
import { projects } from '@/data/projects';

interface TerminalLine {
  type: 'command' | 'output' | 'error';
  text: string;
}

export default function Terminal() {
  const { t, language } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', text: '// Welcome! Type "help" to see available commands.' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: TerminalLine[] = [...lines, { type: 'command', text: `$ ${cmd}` }];

    if (trimmed === 'help') {
      newLines.push({
        type: 'output',
        text: `${t.terminal.help}:
  GET /api/about     - Developer info
  GET /api/skills    - Technical skills
  GET /api/projects  - Live projects
  GET /api/contact   - Contact info
  clear              - Clear terminal
  help               - Show this message`,
      });
    } else if (trimmed === 'get /api/about') {
      newLines.push({
        type: 'output',
        text: JSON.stringify(
          {
            name: 'Beny Zion',
            title: 'Fullstack Developer',
            education: t.about.education,
            superpower: t.about.superpower,
            location: t.about.location,
          },
          null,
          2
        ),
      });
    } else if (trimmed === 'get /api/skills') {
      newLines.push({
        type: 'output',
        text: JSON.stringify(
          skills.reduce(
            (acc, s) => ({ ...acc, [s.category]: s.items }),
            {} as Record<string, string[]>
          ),
          null,
          2
        ),
      });
    } else if (trimmed === 'get /api/projects') {
      newLines.push({
        type: 'output',
        text: JSON.stringify(
          projects.map((p) => ({
            title: p.title,
            description: p.description[language],
            url: p.url,
            tech: p.tech,
          })),
          null,
          2
        ),
      });
    } else if (trimmed === 'get /api/contact') {
      newLines.push({
        type: 'output',
        text: JSON.stringify(
          {
            developer: 'Beny Zion',
            email: 'b4123190@gmail.com',
            github: 'github.com/beny-zion',
          },
          null,
          2
        ),
      });
    } else if (trimmed === 'clear') {
      setLines([{ type: 'output', text: '// Terminal cleared.' }]);
      setInput('');
      return;
    } else {
      newLines.push({ type: 'error', text: t.terminal.notFound });
    }

    setLines(newLines);
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      processCommand(input);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-gray-900 text-emerald-400 rounded-full shadow-xl hover:bg-gray-800 transition-all flex items-center justify-center font-mono text-base md:text-lg border border-gray-700"
        title="Toggle Terminal"
      >
        {isOpen ? '×' : '>_'}
      </button>

      {/* Terminal Panel */}
      {isOpen && (
        <div className="fixed bottom-20 md:bottom-24 right-3 md:right-6 left-3 md:left-auto z-50 md:w-[90vw] md:max-w-lg bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-gray-800 border-b border-gray-700">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />
            <span className="ml-1.5 md:ml-2 text-xs text-gray-400 font-mono">beny@portfolio ~ $</span>
          </div>

          {/* Output */}
          <div ref={scrollRef} className="h-48 md:h-64 overflow-y-auto p-3 md:p-4 font-mono text-xs md:text-sm" dir="ltr">
            {lines.map((line, i) => (
              <div key={i} className="mb-1">
                {line.type === 'command' && <span className="text-emerald-400">{line.text}</span>}
                {line.type === 'output' && (
                  <pre className="text-gray-300 whitespace-pre-wrap wrap-break-word">{line.text}</pre>
                )}
                {line.type === 'error' && <span className="text-red-400">{line.text}</span>}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 px-3 md:px-4 py-2.5 md:py-3 bg-gray-800/50 border-t border-gray-700" dir="ltr">
            <span className="text-emerald-400 font-mono text-xs md:text-sm">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.terminal.placeholder}
              className="flex-1 bg-transparent text-white font-mono text-sm outline-none placeholder-gray-600 min-w-0"
            />
          </div>
        </div>
      )}
    </>
  );
}
