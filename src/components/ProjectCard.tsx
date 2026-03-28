'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { Project } from '@/lib/types';

export default function ProjectCard({ project }: { project: Project }) {
  const { language, t } = useApp();
  const [flipped, setFlipped] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="group perspective-1000 relative">
      <div
        className={`relative w-full h-72 sm:h-80 transition-transform duration-700 preserve-3d cursor-pointer ${
          flipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setFlipped(!flipped)}
      >
        {/* Front - UI View */}
        <div className="absolute inset-0 backface-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          <div className="p-4 md:p-6 flex flex-col flex-1 justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <div className="flex items-center gap-1.5 md:gap-2">
                  {/* Eye icon for preview */}
                  {project.image && (
                    <button
                      className="relative p-1.5 text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                      onMouseEnter={() => setShowPreview(true)}
                      onMouseLeave={() => setShowPreview(false)}
                      onClick={(e) => { e.stopPropagation(); setShowPreview(!showPreview); }}
                      title="Preview"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  )}
                  <span className="text-xs font-mono px-1.5 md:px-2 py-0.5 md:py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-500 dark:text-gray-400">UI</span>
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-2 md:mb-3">{project.description[language]}</p>
              <div className="flex flex-wrap gap-1 md:gap-1.5">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs px-1.5 md:px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between mt-2 md:mt-3">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium py-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t.projects.viewSite} →
                </a>
              ) : (
                <span className="text-sm text-gray-400 dark:text-gray-500 font-mono py-1">
                  {language === 'he' ? 'מערכת פרטית' : 'Private System'}
                </span>
              )}
              <button className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 font-mono py-1">
                [{t.projects.xrayToggle}]
              </button>
            </div>
          </div>
        </div>

        {/* Back - X-Ray View */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-gray-900 dark:bg-black p-4 md:p-6 flex flex-col justify-between border border-gray-700">
          <div>
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <h3 className="text-lg md:text-xl font-bold text-emerald-400 font-mono">{project.title}</h3>
              <span className="text-xs font-mono px-2 py-1 bg-emerald-900/50 rounded text-emerald-400">X-Ray</span>
            </div>
            <div className="font-mono text-xs md:text-sm text-gray-300 leading-relaxed" dir="ltr">
              <span className="text-gray-500">{'// '}{t.projects.xrayToggle}</span>
              <br /><br />
              <span className="text-emerald-300">{project.xray[language]}</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3 md:mt-4">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm text-emerald-400 hover:text-emerald-300 font-mono py-1"
                onClick={(e) => e.stopPropagation()}
              >
                {project.url.replace('https://', '')} →
              </a>
            ) : (
              <span className="text-xs md:text-sm text-gray-500 font-mono py-1">
                // private deployment
              </span>
            )}
            <button className="text-xs text-gray-500 hover:text-gray-300 font-mono py-1">
              [flip back]
            </button>
          </div>
        </div>
      </div>

      {/* Floating Preview Popup */}
      {project.image && <div
        className={`absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 sm:w-72 transition-all duration-200 ${
          showPreview ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-600 overflow-hidden">
          <div className="relative w-full h-32 sm:h-40">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 224px, 288px"
            />
          </div>
          <div className="px-2.5 py-1.5 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{project.url.replace('https://', '')}</span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-3 h-3 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-600 rotate-45 -mt-1.5" />
        </div>
      </div>}
    </div>
  );
}
