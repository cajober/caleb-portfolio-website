import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/portfolio'

const socials = [
  { label: 'GitHub', href: profile.github, Icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, Icon: FaLinkedin },
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="container mx-auto flex items-center justify-between px-4">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-4 text-xl text-muted">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="transition hover:text-accent"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}