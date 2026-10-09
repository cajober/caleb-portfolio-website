import { FiMapPin, FiBook, FiCode, FiBriefcase, FiDownload } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Section from './Section'
import { profile } from '../data/portfolio'

const facts = [
  { Icon: FiMapPin, label: 'Based in', value: 'Cebu City, Philippines' },
  { Icon: FiBook, label: 'Education', value: 'BS Computer Science, UP Cebu (2026)' },
  { Icon: FiCode, label: 'Focus', value: 'Full-stack web development' },
  { Icon: FiBriefcase, label: 'Experience', value: 'Software engineering and SRE internships' },
]

const socials = [
  { label: 'GitHub', href: profile.github, Icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, Icon: FaLinkedin },
]

export default function About() {
  return (
    <Section id="about" label="About Me" title="Who Am I?" className="bg-surface">
      <div className="grid items-center gap-12 md:grid-cols-5">
        <div className="flex justify-center md:col-span-2">
          <img
            src={profile.aboutImage}
            alt={`Portrait of ${profile.name}`}
            className="w-3/4 max-w-lg md:w-full"
          />
        </div>

        <div className="md:col-span-3">
          <div className="space-y-4 text-muted">
            {profile.aboutParagraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {facts.map(({ Icon, label, value }) => (
              <li key={label} className="flex items-start gap-3">
                <Icon className="mt-1 shrink-0 text-xl text-accent" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted">{label}</p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={profile.resume}
              download="Caleb-Berandoy-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2 font-medium text-accent-fg transition hover:opacity-90"
            >
              <FiDownload aria-hidden="true" />
              Download resume
            </a>
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-2xl text-muted transition hover:text-accent"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}