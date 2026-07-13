import { useTranslation } from 'react-i18next'
import SectionHeader from '../../components/ui/SectionHeader'
import TimelineItem from './TimeLineItem'
import { experienceData } from './data'

export default function Experience() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'pt' | 'en'

  return (
    <section id="experience" className="py-24">
      <div className="max-w-[1120px] mx-auto px-7">

        <SectionHeader
          eyebrow={t('experience.eyebrow')}
          title={t('experience.title')}
        />

        <div className="relative">

          <div
            className="hidden md:block absolute left-1/2 top-5 bottom-5 w-[2px] -translate-x-1/2"
            style={{ background: 'var(--color-line)' }}
          />

          <div>
            {experienceData.map((exp, i) => (
              <TimelineItem
                key={i}
                experience={exp}
                index={i}
                lang={lang}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}