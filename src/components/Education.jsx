import Section from './Section'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <Section id="education" label="Education" title="Where I Studied">
      <ol className="mx-auto max-w-3xl space-y-10 border-l-2 border-border pl-6">
        {education.map(({ period, school, detail }) => (
          <li key={school} className="relative">
            <span className="absolute -left-8.25 top-1.5 h-3 w-3 rounded-full bg-accent" />
            <p className="text-sm font-semibold text-accent">{period}</p>
            <h3 className="text-lg font-bold">{school}</h3>
            <p className="text-sm text-muted">{detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}