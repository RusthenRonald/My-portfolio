export type Certificate = {
  year:        string
  name:        { pt: string; en: string }
  issuer:      string
  link:        string
  description?: { pt: string; en: string }
  image?:      string
  gradient?:   string
}

export const certificatesData: Certificate[] = [
    {
    year:   '2026',
    name:   { pt: 'Fundamentos do Google Cloud Computing', en: 'Google Cloud Computing Foundations' },
    issuer: 'Google',
    link:   'https://www.credly.com/badges/f89c1ba3-98f8-4d6b-8ae7-00acf288f7b2/linked_in_profile',
  },
  {
    year:   '2025',
    name:   { pt: 'Trilha de Formação em Tecnologia Banese-labs 2° fase', en: 'Technology Training Program – Banese Labs (Phase 2)' },
    issuer: 'Banese',
    link:   'https://doity.com.br/certificados/imprimir_do_evento/0aaadfd7fd1850c4fe74e105dd919bb048b0ae41',
  },
   {
    year:   '2025',
    name:   { pt: 'Trilha de Formação em Tecnologia Banese-labs 1° fase', en: 'Technology Training Program – Banese Labs (Phase 1)' },
    issuer: 'Banese',
    link:   'https://doity.com.br/certificados/imprimir_do_evento/528fe68060de3c00f4bfe3a7c04a533affdcc61e',
  },
  {
    year:   '2022',
    name:   { pt: 'Curso de Inglês', en: 'English Course' },
    issuer: 'Wizard',
    link:   '#',
  },
  {
    year:   '2024',
    name:   { pt: 'Oficina Git e GitHub - Circuito Tecnológico', en: 'Git and GitHub Workshop – Technology Circuit' },
    issuer: 'Even3',
    link:   'https://www.even3.com.br/documentos/imprimir?i=18357816.84983623.546777.8.8357816849836235467778&cc=8FFCA4F0-4A64-4A58-97FE-1E314B688210',
  },
  {
    year:   '2024',
    name:   { pt: 'Python-Explorando Web Scraping', en: 'Python - Exploring Web Scraping' },
    issuer: 'Even3',
    link:   'https://www.even3.com.br/documentos/imprimir?i=18357816.84983623.546707.8.8357816849836235467078&cc=8FFCA4F0-4A64-4A58-97FE-1E314B688210',
  },
   {
    year:   '2024',
    name:   { pt: 'Aprofundamento em Python- Circuito Tecnológico', en: 'Advanced Python Training – Technology Circuit' },
    issuer: 'Even3',
    link:   'https://www.even3.com.br/documentos/imprimir?i=18357816.84983623.546703.8.8357816849836235467038&cc=8FFCA4F0-4A64-4A58-97FE-1E314B688210',
  },
   {
    year:   '2024',
    name:   { pt: 'Participação - Circuito Tecnológico', en: 'Participation in the Technology Circuit' },
    issuer: 'Even3',
    link:   'https://www.even3.com.br/documentos/imprimir?i=18357851.84983623.6.8.83578518498362368&cc=8FFCA4F0-4A64-4A58-97FE-1E314B688210',
  },
]