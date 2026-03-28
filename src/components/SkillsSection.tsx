'use client';

import { useApp } from '@/context/AppContext';
import { skills } from '@/data/skills';

export default function SkillsSection() {
  const { t } = useApp();

  return (
    <section id="skills" className="py-12 md:py-20 px-3 md:px-4 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="font-mono text-xs md:text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-md">
            SELECT * FROM skills
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-3 md:mt-4">{t.skills.sectionTitle}</h2>
        </div>

        <div className="bg-gray-900 dark:bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-xl border border-gray-800 dark:border-gray-700">
          {/* Terminal Header */}
          <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2.5 md:py-3 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />
            <span className="ml-1.5 md:ml-2 text-xs text-gray-400 font-mono">psql — skills_db</span>
          </div>

          <div className="p-4 md:p-6 font-mono text-xs md:text-sm" dir="ltr">
            {/* Query */}
            <div className="mb-3 md:mb-4">
              <span className="text-emerald-400">skills_db=&gt;</span>{' '}
              <span className="text-white">{t.skills.query}</span>
            </div>

            {/* Table - desktop */}
            <div className="overflow-x-auto hidden sm:block">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left text-gray-400 py-2 pr-4 md:pr-8">category</th>
                    <th className="text-left text-gray-400 py-2">technologies</th>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="text-gray-600 py-1 pr-4 md:pr-8">----------</td>
                    <td className="text-gray-600 py-1">------------------------------</td>
                  </tr>
                </thead>
                <tbody>
                  {skills.map((skill) => (
                    <tr key={skill.category} className="border-b border-gray-800/50">
                      <td className="text-emerald-300 py-2 pr-4 md:pr-8 whitespace-nowrap">{skill.category}</td>
                      <td className="text-gray-300 py-2">
                        {skill.items.map((item, i) => (
                          <span key={item}>
                            <span className="text-white">{item}</span>
                            {i < skill.items.length - 1 && <span className="text-gray-600">, </span>}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-3 md:mt-4 text-gray-500">({skills.length} rows)</div>
            </div>

            {/* Mobile layout - stacked */}
            <div className="sm:hidden space-y-3">
              {skills.map((skill) => (
                <div key={skill.category} className="border-b border-gray-800/50 pb-3">
                  <div className="text-emerald-300 mb-1.5">{skill.category}:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map((item) => (
                      <span key={item} className="text-white bg-gray-800 px-2 py-0.5 rounded text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="text-gray-500">({skills.length} rows)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
