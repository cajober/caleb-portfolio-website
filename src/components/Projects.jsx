import Section from './Section'
import { projects } from '../data/portfolio'

function ProjectCard({ title, description, image, stack, demo, repo }) {
  return (
    <article className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6">
      <img src={image} alt={`${title} screenshot`} className="rounded-lg" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
      <ul className="flex gap-2">
        {stack.map((tech) => (
          <li key={tech} className="rounded bg-border px-2 py-1 text-xs">{tech}</li>
        ))}
      </ul>
      <div className="flex gap-4 text-sm">
        {demo && <a href={demo} target="_blank" rel="noreferrer" className="text-accent">Live demo</a>}
        {repo && <a href={repo} target="_blank" rel="noreferrer" className="text-accent">Source</a>}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section id="projects" className="bg-bg py-16 md:py-24" label="Projects" title="What I've Worked On">
        <div className="container mx-auto px-4 mt-7">
            <div className="grid gap-8 md:grid-cols-2">
            {projects.map((p) => (
                <ProjectCard key={p.title} {...p} />
            ))}
            </div>
        </div>
    </Section>
  )
}