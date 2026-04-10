import { useState } from 'react'
import Reveal from './Reveal'
import { withBase } from '../utils/withBase'

const items = [
  {
    period: '2024 - 2028',
    degree: 'BSc (Hons) Ethical Hacking and Network Security',
    institution: 'NIBM',
    detail: 'Undergraduate pathway focused on secure systems, cyber concepts, and practical network defence thinking.',
    current: true,
    logo: withBase('/images/education/nibm-logo.png'),
    fallback: 'NI',
  },
  {
    period: '2025 - 2026',
    degree: 'Higher National Diploma in Network Engineering',
    institution: 'NIBM',
    detail: 'Applied networking track covering routing, switching, service deployment, and infrastructure fundamentals.',
    current: true,
    logo: withBase('/images/education/nibm-logo.png'),
    fallback: 'NI',
  },
  {
    period: '2024 - 2025',
    degree: 'Diploma in Network Engineering',
    institution: 'NIBM',
    detail: 'Built the base for hands-on networking practice and the labs that now support my project work.',
    current: false,
    logo: withBase('/images/education/nibm-logo.png'),
    fallback: 'NI',
  },
  {
    period: '2012 - 2023',
    degree: 'Secondary Education',
    institution: "St. Sebastian's College, Moratuwa",
    detail: 'Academic foundation before moving into formal cybersecurity and network engineering studies.',
    current: false,
    logo: withBase('/images/education/st-sebastians-logo.png'),
    fallback: 'SS',
  },
]

function InstitutionLogo({ src, alt, fallback }) {
  const [hasError, setHasError] = useState(false)

  return (
    <div
      style={{
        width: 82,
        height: 82,
        borderRadius: '20px',
        border: '1px solid var(--grey-3)',
        background: 'var(--tint-soft)',
        overflow: 'hidden',
        display: 'grid',
        placeItems: 'center',
        flexShrink: 0,
      }}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <span
          className="mono"
          style={{
            fontSize: '1rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--white)',
          }}
        >
          {fallback}
        </span>
      )}
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" style={{ padding: '7rem 8%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <div className="h-rule">
            <span className="label">04 - Education</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="section-subtitle" style={{ maxWidth: 760, marginBottom: '3rem' }}>
            I kept this section simple, but lifted the readability so the qualifications are easier to scan.
          </p>
        </Reveal>

        <div style={{ maxWidth: 900, display: 'grid', gap: '1.25rem' }}>
          {items.map(({ period, degree, institution, detail, current, logo, fallback }, i) => (
            <Reveal key={degree} delay={i * 0.09}>
              <article
                className="card"
                style={{
                  padding: '1.55rem 1.7rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1.5rem',
                  alignItems: 'start',
                }}
              >
                <div>
                  <div className="mono" style={{ fontSize: '0.8rem', color: 'var(--grey-1)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {period}
                  </div>
                  {current && (
                    <span className="pill" style={{ marginTop: '0.9rem' }}>In progress</span>
                  )}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '82px minmax(0, 1fr)', gap: '1rem', alignItems: 'start' }}>
                  <InstitutionLogo src={logo} alt={`${institution} logo`} fallback={fallback} />

                  <div style={{ display: 'grid', gap: '0.55rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--white)', letterSpacing: '-0.02em' }}>{degree}</h3>
                    <p className="mono" style={{ margin: 0, fontSize: '0.78rem', color: 'var(--grey-1)', letterSpacing: '0.13em', textTransform: 'uppercase' }}>
                      {institution}
                    </p>
                    <p style={{ margin: 0, fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--grey-1)' }}>
                      {detail}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
