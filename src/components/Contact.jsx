import Reveal from './Reveal'

const iconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg {...iconProps}>
      <path d="M10 14a4 4 0 0 1 0-6l2-2a4 4 0 1 1 6 6l-1.5 1.5" />
      <path d="M14 10a4 4 0 0 1 0 6l-2 2a4 4 0 0 1-6-6L7.5 10.5" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg {...iconProps}>
      <path d="M8 8l-4 4 4 4" />
      <path d="M16 8l4 4-4 4" />
      <path d="M14 4l-4 16" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg {...iconProps}>
      <path d="M6 18l-2.5 2V7a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6z" />
      <path d="M8 10h8" />
      <path d="M8 14h5" />
    </svg>
  )
}

const links = [
  {
    href: 'mailto:methumsandul2006@gmail.com?subject=Portfolio%20Inquiry',
    label: 'Email',
    tag: 'Open your mail app',
    icon: MailIcon,
  },
  {
    href: 'https://www.linkedin.com/in/methum-sandul-1b7962215/',
    label: 'LinkedIn',
    tag: 'View profile',
    icon: LinkIcon,
    external: true,
  },
  {
    href: 'https://github.com/methumsandul',
    label: 'GitHub',
    tag: 'Explore work',
    icon: CodeIcon,
    external: true,
  },
  {
    href: 'https://wa.me/94707055121?text=Hi%20Methum%2C%20I%20saw%20your%20portfolio.',
    label: 'WhatsApp',
    tag: 'Start a chat',
    icon: ChatIcon,
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '7rem 8%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <div className="h-rule">
            <span className="label">06 - Contact</span>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '5rem', alignItems: 'start' }}>
          <div>
            <Reveal>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                Let's talk.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="section-copy" style={{ maxWidth: 400, marginBottom: '2rem' }}>
                I'm actively looking for internship opportunities in cybersecurity, networking, or sysadmin. If you think I'd be a good fit, reach out.
              </p>
              <a href="/cv.pdf" download className="btn-primary" style={{ display: 'inline-flex' }}>
                Download CV
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
              {links.map(({ href, label, tag, icon: Icon, external }) => (
                <a
                  key={href}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="card"
                  style={{
                    textDecoration: 'none',
                    padding: '1.4rem',
                    minHeight: 180,
                    display: 'grid',
                    alignContent: 'space-between',
                    gap: '1.2rem',
                  }}
                >
                  <div>
                    <div style={{ width: 52, height: 52, borderRadius: '16px', border: '1px solid var(--floating-border)', background: 'var(--tint-soft)', display: 'grid', placeItems: 'center', color: 'var(--white)', marginBottom: '1rem' }}>
                      <Icon />
                    </div>
                    <div style={{ fontSize: '1.08rem', fontWeight: 500, color: 'var(--white)', marginBottom: '0.35rem' }}>{label}</div>
                    <div className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-1)', lineHeight: 1.7 }}>{tag}</div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--grey-1)' }}>
                    <span className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                      Open
                    </span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
