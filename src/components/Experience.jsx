import Section from './Section'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I've Worked" className="bg-surface">
      <ol className="mx-auto max-w-3xl space-y-8 border-l-2 border-border pl-6">
        {experience.map(({ period, role, org, points, tags = [] }) => (
          <li key={`${org}-${period}`} className="relative">
            <span className="absolute -left-8.25 top-1.5 h-3 w-3 rounded-full bg-accent" />
            <p className="text-sm font-semibold text-accent">{period}</p>
            <h3 className="text-lg font-bold">
              {role} <span className="font-normal text-muted">· {org}</span>
            </h3>

            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            {tags.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-bg px-3 py-0.5 text-xs"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}