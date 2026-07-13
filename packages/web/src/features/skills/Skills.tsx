import { useTranslation } from 'react-i18next'
import SectionHeader from '../../components/ui/SectionHeader'
import SkillBlock from './SkillBlock'
import { skillsData } from './data'

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="py-24">
      <div className="max-w-[1120px] mx-auto px-7">

        <SectionHeader
          eyebrow={t('skills.eyebrow')}
          title={t('skills.title')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillsData.map((block) => (
            <SkillBlock
              key={block.key}
              block={block}
              title={t(`skills.${block.key}`)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}