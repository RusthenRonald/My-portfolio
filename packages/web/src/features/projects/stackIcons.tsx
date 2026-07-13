import type { IconType } from 'react-icons'
import {
  SiReact,
  SiJson,
  SiDocker,
  SiCss,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiReactrouter,
  SiFigma,
  SiJavascript,
  SiHtml5,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiZod,
  SiResend,
  SiSqlalchemy,
  SiJsonwebtokens,
} from 'react-icons/si'

const STACK_ICONS: Record<string, IconType> = {
  'React':           SiReact,
  'React Native':    SiReact,
  'JSON Server':     SiJson,
  'Docker':          SiDocker,
  'Docker Compose':  SiDocker,
  'CSS':             SiCss,
  'TypeScript':      SiTypescript,
  'Tailwind':        SiTailwindcss,
  'Node.js':         SiNodedotjs,
  'Express':         SiExpress,
  'PostgreSQL':      SiPostgresql,
  'React Router':    SiReactrouter,
  'Figma':           SiFigma,
  'JavaScript':      SiJavascript,
  'HTML':            SiHtml5,
  'Python':          SiPython,
  'FastAPI':         SiFastapi,
  'MongoDB':         SiMongodb,
  'Zod':             SiZod,
  'Resend':          SiResend,
  'SQLAlchemy':      SiSqlalchemy,
  'JWT':             SiJsonwebtokens,
}

export function getStackIcon(tech: string): IconType | undefined {
  return STACK_ICONS[tech]
}
