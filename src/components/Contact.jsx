import { FiMail } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Footer from './Footer'
import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-dvh snap-start flex-col bg-surface pt-24"
    >
      <div className="flex flex-1 items-center">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-xl text-center">
            <p className="mb-2 text-lg font-medium text-accent">Contact</p>
            <h2 className="mb-4 text-4xl font-bold md:text-6xl">Let&apos;s talk</h2>
            <p className="mb-8 text-muted">
              Interested in working together or have a question? Feel free to reach out!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-medium text-accent-fg transition hover:opacity-90"
              >
                <FiMail aria-hidden="true" />
                Email me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-medium transition hover:bg-bg"
              >
                <FaLinkedin aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-medium transition hover:bg-bg"
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </a>
            </div>

            <p className="mt-6 text-sm text-muted">{profile.email}</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}