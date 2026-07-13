import { type IconType } from 'react-icons'
import { BrainCircuit } from 'lucide-react'
import {
  SiFastapi,
  SiFigma,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

export type Tech = {
  name: string
  icon: IconType
}

export type Experience = {
  period:   { pt: string; en: string }
  role:     { pt: string; en: string }
  company:  string
  location: string
  description: { pt: string; en: string }
  stack:    Tech[]
}

export const experienceData: Experience[] = [
  {
    period:   { pt: 'Jan 2025 — Jun 2025', en: 'Jan 2025 — Jun 2025' },
    role:     { pt: 'Trainee', en: 'Trainee' },
    company:  'SergipeTec',
    location: 'Aracaju, Sergipe',
    description: {
      pt: 'Como trainee no SergipeTec, participei do desenvolvimento de um sistema de detecção de fraudes para o Banese, utilizando Python, FastAPI, React e Machine Learning. Atuei no desenvolvimento de funcionalidades, análise de dados e otimização de código, adquirindo experiência em desenvolvimento full stack.',
      en: 'As a trainee at SergipeTec, I contributed to the development of a fraud detection system for Banese using Python, FastAPI, React, and Machine Learning. I worked on feature development, data analysis, and code optimization, gaining hands-on experience in full-stack development.',
    },
    stack: [
      { name: 'Python', icon: SiPython },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'React', icon: SiReact },
      { name: 'Machine Learning', icon: BrainCircuit },
      { name: 'Figma', icon: SiFigma },
    ],
  },
  {
    period:   { pt: 'Agosto 2025 — Atualmente', en: 'Agosto 2025  — Present' },
    role:     { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
    company:  'Ajulabs',
    location: 'Aracaju, Sergipe',
    description: {
      pt: 'Atualmente sou Desenvolvedor Full Stack na Ajulabs, atuando remotamente em projetos para empresas nacionais e internacionais.Trabalho com desenvolvimento web e mobile, colaborando diariamente com equipes globais em um ambiente ágil, contribuindo para soluções escaláveis e de alta qualidade enquanto aprimoro continuamente minhas habilidades técnicas e de comunicação em inglês.',
      en: 'I am currently a Full Stack Developer at Ajulabs, working remotely on projects for both national and international companies. I develop web and mobile applications while collaborating daily with global teams in an agile environment. My role involves delivering scalable, high-quality solutions and continuously improving both my technical expertise and English communication skills.',
    },
    stack: [
      { name: 'React', icon: SiReact },
      { name: 'Python', icon: SiPython },
      { name: 'React Native', icon: SiReact },
      { name: 'Storybook', icon: SiStorybook },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Figma', icon: SiFigma },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'TypeScript', icon: SiTypescript },
    ],
  },
]