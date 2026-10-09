import { useState, useEffect } from 'react'
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data/portfolio'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className="fixed inset-x-0 top-0 z-50  bg-bg/80 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#hero">
          <img src="/assets/caleb-logo.svg" alt="Caleb logo" className="h-20 pt-4" />
        </a>

        <nav
          className={`${open ? 'block' : 'hidden'} absolute left-0 top-full w-full border-b border-border bg-bg md:static md:block md:w-auto md:border-0 md:bg-transparent`}
        >
          <ul className="flex flex-col gap-4 p-4 text-lg font-medium md:flex-row md:items-center md:gap-8 md:p-0">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="transition hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4 text-3xl">
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
            className="transition hover:text-accent"
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}