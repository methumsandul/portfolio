import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certs', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
]

function ThemeGlyph({ theme }) {
  if (theme === 'light') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 2v3M12 19v3M22 12h-3M5 12H2M19.07 4.93l-2.12 2.12M7.05 16.95l-2.12 2.12M19.07 19.07l-2.12-2.12M7.05 7.05L4.93 4.93" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7.2 7.2 0 0 0 9.8 9.8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40)

      let nextActive = ''
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].href.replace('#', ''))
        if (el && window.scrollY >= el.offsetTop - 130) {
          nextActive = links[i].href.replace('#', '')
          break
        }
      }

      setActive(nextActive)
    }

    fn()
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? '0.95rem 8%' : '1.35rem 8%',
          background: scrolled ? 'var(--glass-strong)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--grey-3)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease',
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mono text-xs uppercase tracking-widest"
          style={{ color: 'var(--white)', letterSpacing: '0.2em' }}
          aria-label="Scroll to top"
        >
          MS
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const id = href.replace('#', '')
            return (
              <li key={href}>
                <button
                  onClick={() => go(href)}
                  className="mono text-xs uppercase tracking-widest transition-colors duration-200"
                  style={{
                    color: active === id ? 'var(--accent-2)' : 'var(--grey-1)',
                    fontSize: '0.74rem',
                    textShadow: active === id ? '0 0 12px color-mix(in srgb, var(--accent-2) 40%, transparent)' : 'none',
                  }}
                >
                  {label}
                </button>
              </li>
            )
          })}
        </ul>

        <div
          className="hidden md:flex items-center gap-2 rounded-full border px-4 py-2 mono text-xs"
          style={{
            color: 'var(--grey-1)',
            borderColor: 'var(--floating-border)',
            background: 'var(--tint-soft)',
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--white)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          Open to work
        </div>

        <button
          onClick={onToggleTheme}
          className="hidden md:inline-flex items-center rounded-full border px-3 py-2 mono text-xs uppercase tracking-widest transition-colors duration-200"
          style={{
            borderColor: 'var(--floating-border)',
            color: 'var(--white)',
            background: 'var(--tint-soft)',
            fontSize: '0.68rem',
            gap: '0.38rem',
          }}
          aria-label={`Switch to ${nextTheme} theme`}
        >
          <ThemeGlyph theme={theme} />
          {nextTheme}
        </button>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="inline-flex items-center rounded-full border px-2.5 py-1.5 mono text-xs uppercase tracking-widest"
            style={{
              borderColor: 'var(--floating-border)',
              color: 'var(--white)',
              background: 'var(--tint-soft)',
              fontSize: '0.64rem',
              gap: '0.28rem',
            }}
            aria-label={`Switch to ${nextTheme} theme`}
          >
            <ThemeGlyph theme={theme} />
            {nextTheme}
          </button>

          <button className="flex flex-col gap-[5px]" onClick={() => setOpen(!open)} aria-label="Open navigation">
            <span style={{ display: 'block', width: 20, height: 1, background: 'var(--grey-1)', transition: 'all 0.3s', transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: 20, height: 1, background: 'var(--grey-1)', transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
            <span style={{ display: 'block', width: 20, height: 1, background: 'var(--grey-1)', transition: 'all 0.3s', transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              background: 'var(--black)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
            }}
          >
            {links.map(({ href, label }, i) => (
              <motion.button
                key={href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => go(href)}
                style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--grey-1)', letterSpacing: '-0.02em', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { e.target.style.color = 'var(--white)' }}
                onMouseLeave={(e) => { e.target.style.color = 'var(--grey-1)' }}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
