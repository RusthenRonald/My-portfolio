import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SectionHeader from '../../components/ui/SectionHeader'
import CertCard      from './CertCard'
import CertModal     from './CertModal'
import { certificatesData, type Certificate } from './data'

export default function Certificates() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'pt' | 'en'
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  return (
    <section id="certs" className="py-24">
      <div className="max-w-[1120px] mx-auto px-7">

        <SectionHeader
          eyebrow={t('certs.eyebrow')}
          title={t('certs.title')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificatesData.map((cert, i) => (
            <CertCard
              key={i}
              cert={cert}
              lang={lang}
              onLearnMore={setSelectedCert}
            />
          ))}
        </div>

      </div>

      {selectedCert && (
        <CertModal
          cert={selectedCert}
          lang={lang}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  )
}
