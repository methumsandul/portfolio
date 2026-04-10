import Reveal from './Reveal'

const stats = [
  { n: '3+', l: 'Hands-on projects' },
  { n: '9+', l: 'Certifications earned' },
  { n: 'RHCSA', l: 'Linux admin milestone' },
  { n: '2024', l: 'Started my security path' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '7rem 8%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <div className="h-rule">
            <span className="label">01 - About</span>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '5rem', alignItems: 'start' }}>
          <div>
            <Reveal>
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>
                Who I am.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="section-copy" style={{ marginBottom: '1.25rem' }}>
                Ethical Hacking & Network Security undergraduate at NIBM, Sri Lanka.
                I am driven by curiosity and by understanding how systems work so I can protect them well.
              </p>
              <p className="section-copy" style={{ marginBottom: '1.25rem' }}>
                From deploying multi-server Linux environments to configuring enterprise firewalls
                and Cisco switches, I have turned classroom theory into hands-on technical skills.
              </p>
              <p className="section-copy">
                Actively seeking an internship in cybersecurity, networking, or system administration.
              </p>
            </Reveal>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem' }}>
            {stats.map(({ n, l }, i) => (
              <Reveal key={l} delay={i * 0.07}>
                <article className="card" style={{ height: '100%', padding: '1.6rem 1.4rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--white)', marginBottom: '0.55rem' }}>{n}</div>
                  <div className="mono" style={{ fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-1)', lineHeight: 1.8 }}>{l}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
