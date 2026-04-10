import Reveal from './Reveal'

const certGroups = [
  {
    provider: 'Red Hat',
    heading: 'Linux administration certification path',
    count: '2 certifications',
    items: [
      { name: 'RHCSA (RHEL 9.3)', status: 'Completed' },
      { name: 'RHCE (RHEL 9.3)', status: 'Completed' },
    ],
  },
  {
    provider: 'Cisco',
    heading: 'Networking and cybersecurity track',
    count: '5 certifications',
    items: [
      { name: 'Introduction to Networking', status: 'Completed' },
      { name: 'Switching, Routing and Wireless', status: 'Completed' },
      { name: 'Enterprise Networking, Security and Automation', status: 'Completed' },
      { name: 'Cybersecurity Essentials', status: 'Completed' },
      { name: 'Introduction to Cybersecurity', status: 'Completed' },
    ],
  },
  {
    provider: 'Academic and partner programs',
    heading: 'Supplementary security and network engineering credentials',
    count: '2 certifications',
    items: [
      { name: 'Certificate in Cybersecurity - NIBM', status: 'Completed' },
      { name: 'Network Engineering with Security - NextGen Campus', status: 'Completed' },
    ],
  },
]

export default function Certifications() {
  return (
    <section id="certs" style={{ padding: '7rem 8%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <div className="h-rule">
            <span className="label">05 - Certifications</span>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {certGroups.map(({ provider, heading, count, items }, i) => (
            <Reveal key={provider} delay={i * 0.06}>
              <article className="card" style={{ height: '100%', padding: '1.75rem', display: 'grid', gap: '1.3rem' }}>
                <div style={{ display: 'grid', gap: '0.55rem' }}>
                  <span className="mono" style={{ fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-1)' }}>
                    {provider}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--white)', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
                    {heading}
                  </h3>
                </div>

                <div className="mono" style={{ fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-2)' }}>
                  {count}
                </div>

                <div style={{ display: 'grid', gap: '0.85rem' }}>
                  {items.map(({ name, status }) => (
                    <div key={name} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', paddingTop: '0.85rem', borderTop: '1px solid var(--grey-4)' }}>
                      <div style={{ fontSize: '0.96rem', lineHeight: 1.7, color: 'var(--white)' }}>{name}</div>
                      <span className="pill" style={{ flexShrink: 0, color: status === 'Completed' ? 'var(--white)' : 'var(--grey-1)' }}>
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
