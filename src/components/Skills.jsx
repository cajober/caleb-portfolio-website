import Section from './Section'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <Section id="skills" label="Tech Stack" title="What I Can Utilize">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map(({ category, items }) => (
          <div
            key={category}
            className="rounded-lg border border-border bg-surface p-6"
          >
            <h3 className="mb-4 text-lg font-bold">{category}</h3>
            <ul className="flex flex-wrap gap-3">
              {items.map(({ name, Icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-full border border-border bg-bg px-4 py-2 text-sm transition hover:border-accent"
                >
                  <Icon className="text-lg text-accent" aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}