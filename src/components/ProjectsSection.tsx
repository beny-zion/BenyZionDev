'use client';

import { useApp } from '@/context/AppContext';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const { t, isRTL } = useApp();

  return (
    <section id="projects" className="py-12 md:py-20 px-3 md:px-4 bg-gray-50 dark:bg-gray-900/50 transition-colors">
      <div className="max-w-6xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="text-center mb-8 md:mb-12">
          <span className="font-mono text-xs md:text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-md">
            GET /api/projects
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-3 md:mt-4">{t.projects.sectionTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
