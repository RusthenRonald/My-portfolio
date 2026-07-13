import { type IconType } from 'react-icons'
import { Braces, FolderTree, Layers, Webhook } from 'lucide-react'
import {
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiShopify,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa6'
import { VscVscode } from 'react-icons/vsc'

export type Skill = {
  name: string
  icon: IconType
}

export type SkillCategory = {
  key:    string
  tag:    string
  items:  Skill[]
}

export const skillsData: SkillCategory[] = [
  {
    key:   'front',
    tag:   'front-end',
    items: [
      { name: 'HTML',         icon: SiHtml5 },
      { name: 'CSS',          icon: FaCss3Alt },
      { name: 'JavaScript',   icon: SiJavascript },
      { name: 'TypeScript',   icon: SiTypescript },
      { name: 'React',        icon: SiReact },
      { name: 'React Native', icon: SiReact },
      { name: 'Vite',         icon: SiVite },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Storybook',    icon: SiStorybook },
      { name: 'Shopify',      icon: SiShopify },
      { name: 'Liquid',       icon: Braces },
    ],
  },
  {
    key:   'back',
    tag:   'back-end',
    items: [
      { name: 'Node.js',  icon: SiNodedotjs },
      { name: 'Express',  icon: SiExpress },
      { name: 'REST API', icon: Webhook },
      { name: 'Python',   icon: SiPython },
      { name: 'FastAPI',  icon: SiFastapi },
    ],
  },
  {
    key:   'db',
    tag:   'database',
    items: [
      { name: 'MySQL',   icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    key:   'tools',
    tag:   'tools',
    items: [
      { name: 'Git',     icon: SiGit },
      { name: 'GitHub',  icon: SiGithub },
      { name: 'Docker',  icon: SiDocker },
      { name: 'Figma',   icon: SiFigma },
      { name: 'VS Code', icon: VscVscode },
    ],
  },
  {
    key:   'architecture',
    tag:   'architecture',
    items: [
      { name: 'MVVM', icon: Layers },
      { name: 'FSD',  icon: FolderTree },
    ],
  },
]
