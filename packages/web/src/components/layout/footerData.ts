import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { type IconType } from 'react-icons'

export type Social = {
  icon:  IconType
  label: string
  href:  string
}

export const socialsData: Social[] = [
  { icon: FaLinkedin,  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/rusthen-ronald-631ba6300/' },
  { icon: FaGithub,    label: 'GitHub',    href: 'https://github.com/RusthenRonald' },
  { icon: Mail,        label: 'Email',     href: 'mailto:rusthenronald9@gmail.com' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/___rusthenronald/' },
]

export const footerConfig = {
  name: 'Rusthen',
}