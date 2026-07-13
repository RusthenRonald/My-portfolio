import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SectionHeader from '../../components/ui/SectionHeader'
import FilterBar     from './FilterBar'
import ProjectCard   from './ProjectCard'
import ProjectModal  from './ProjectModal'
import { projectsData, type Project, type ProjectCategory } from './data'

type Filter = ProjectCategory | 'all'

export default function Projects() {
  const { t, i18n } = useTranslation()
  const lang   = i18n.language as 'pt' | 'en'
  const [active, setActive] = useState<Filter>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered = active === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24">
      <div className="max-w-[1120px] mx-auto px-7">

        <SectionHeader
          eyebrow={t('projects.eyebrow')}
          title={t('projects.title')}
        />

        <FilterBar
          active={active}
          onChange={setActive}
          lang={lang}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              lang={lang}
              onLearnMore={setSelectedProject}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[var(--color-muted)] font-mono text-sm">
            No projects in this category yet.
          </div>
        )}

        <p className="text-center mt-10 font-mono text-sm text-[var(--color-muted)]">
          {t('projects.moreSoon')}
        </p>

      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          lang={lang}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}