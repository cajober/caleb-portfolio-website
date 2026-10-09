export default function Section({ id, label, title, className = '', children }) {
  return (
    <section
      id={id}
      className={`flex min-h-dvh snap-start items-center pb-12 pt-24 ${className}`}
    >
      <div className="container mx-auto w-full px-4">
        {label && (
          <p className="mb-2 text-xl font-medium text-accent">{label}</p>
        )}
        {title && (
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">{title}</h2>
        )}
        {children}
      </div>
    </section>
  )
}