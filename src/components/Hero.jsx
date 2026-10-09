import { profile } from '../data/portfolio'
import { FiArrowRight } from 'react-icons/fi'


export default function Hero() {
  return (
    <section
      id="hero"
      className="container mx-auto flex min-h-dvh snap-start flex-col items-center justify-center gap-12 px-4 pb-12 pt-24 md:flex-row md:px-16"
    >
      <div className="md:w-1/2">
        <p className="mb-2 text-3xl font-bold text-accent">Hi, I'm</p>
        <h1 className="text-4xl font-bold md:text-6xl">{profile.name}.</h1>
        <p className="mb-8 mt-4 text-lg text-muted">{profile.tagline}</p>

        <div className="flex flex-wrap gap-4">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2 font-medium text-accent-fg transition hover:opacity-90"
          >
            View Resume
            <FiArrowRight aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-border px-5 py-2 font-medium transition hover:bg-surface"
          >
            Contact me
          </a>
        </div>
      </div>

      <div className="flex justify-center md:w-1/2 md:justify-end">
        <img
          src={profile.heroImage}
          alt={`Illustration of ${profile.name}`}
          className="w-2/3 max-w-xl md:w-full"
        />
      </div>
    </section>
  )
}