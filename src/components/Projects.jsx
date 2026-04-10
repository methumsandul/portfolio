import { useState } from 'react'
import Reveal from './Reveal'
import { withBase } from '../utils/withBase'

const projects = [
  {
    num: '01',
    category: 'Enterprise networking lab',
    title: 'Campus Network Segmentation and VLAN Rollout',
    desc: 'Designed a Cisco-based network layout that separated departments with VLANs, mapped access and trunk ports correctly, and restored only the communication paths that were actually required.',
    impact: 'This project demonstrates that I can take network requirements and turn them into a cleaner, more secure switching environment with controlled traffic flow and easier troubleshooting.',
    highlights: [
      'Planned department-based segmentation instead of leaving every device on a flat network.',
      'Configured access ports, trunk links, and inter-VLAN routing to keep the design functional end to end.',
      'Validated isolation and reachability so each segment behaved the way the design intended.',
    ],
    tags: ['Cisco IOS', 'VLAN', 'Inter-VLAN routing', 'Switching'],
    gallery: [
      {
        src: withBase('/images/projects/project-01-1.jpg'),
        alt: 'Network topology view for the VLAN rollout project', 
      },
      {
        src: withBase('/images/projects/project-01-2.jpg'),
        alt: 'Configuration or validation view for the VLAN rollout project', 
      },
    ],
  },
  {
    num: '02',
    category: 'Linux infrastructure lab',
    title: 'Multi-Service Linux Environment for Core Network Services',
    desc: 'Built a Linux server environment that delivered DNS, DHCP, FTP over SSL/TLS, and Apache-based web hosting while keeping services testable and maintainable.',
    impact: 'The value here is not only standing services up, but proving I can coordinate several infrastructure roles together, verify them properly, and apply security-minded configuration choices.',
    highlights: [
      'Deployed BIND, DHCP, Apache, and FTP services across a structured lab environment.',
      'Configured reservations, virtual hosting, and controlled service access for more realistic administration.',
      'Used validation checks and service testing to confirm the environment behaved reliably.',
    ],
    tags: ['Linux', 'BIND', 'DHCP', 'Apache', 'SSL/TLS'],
  },
  {
    num: '03',
    category: 'Security and operations lab',
    title: 'Firewall, Proxy, and Backup Operations Setup',
    desc: 'Configured pfSense with Squid filtering, balanced traffic across services, and automated backup routines so the environment stayed safer and easier to recover.',
    impact: 'This project shows operational value: reducing exposure through firewall and proxy controls while improving resilience with repeatable backup automation.',
    highlights: [
      'Set up firewall and proxy rules to control how traffic moved through the lab.',
      'Used load balancing to spread service demand instead of relying on a single point of handling.',
      'Automated backup routines with rsync and scheduled scripts to support recovery readiness.',
    ],
    tags: ['pfSense', 'Squid Proxy', 'Load balancing', 'rsync', 'Bash'],
  },
]

function ProjectShot({ src, alt, label, slot }) {
  const [hasError, setHasError] = useState(false)

  return (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      <div
        style={{
          position: 'relative',
          aspectRatio: '4 / 3',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid var(--grey-3)',
          background: 'linear-gradient(180deg, var(--tint-medium), var(--tint-soft))',
        }}
      >
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setHasError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              height: '100%',
              display: 'grid',
              placeItems: 'center',
              padding: '1.25rem',
              textAlign: 'center',
              background: 'radial-gradient(circle at top, var(--tint-medium), transparent 52%), linear-gradient(180deg, var(--tint-soft), transparent)',
            }}
          >
            <div style={{ display: 'grid', gap: '0.55rem', justifyItems: 'center' }}>
              <div
                className="mono"
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: '14px',
                  border: '1px solid var(--floating-border)',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'var(--white)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {slot}
              </div>
              <p className="mono" style={{ margin: 0, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--grey-1)' }}>
                Screenshot ready
              </p>
              <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--grey-1)' }}>
                Add this project image and it will appear here.
              </p>
            </div>
          </div>
        )}

        {!hasError ? (
          <div
            style={{
              position: 'absolute',
              right: '0.8rem',
              bottom: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 48,
              padding: '0.55rem 0.7rem',
              borderRadius: '12px',
              background: 'var(--floating-bg)',
              border: '1px solid var(--floating-border)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span className="mono" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--grey-1)' }}>
              {slot}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '7rem 8%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <div className="h-rule">
            <span className="label">03 - Projects</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="section-subtitle" style={{ maxWidth: 760, marginBottom: '3rem' }}>
            I changed this section to focus on the value each project demonstrates, and the VLAN project can also show two screenshots of the actual work.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {projects.map(({ num, category, title, desc, impact, highlights, tags, gallery }, i) => (
            <Reveal key={num} delay={i * 0.08}>
              <article className="card" style={{ padding: '2rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                <div style={{ display: 'grid', gap: '1.2rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
                    <span className="mono" style={{ fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-1)' }}>
                      Project {num}
                    </span>
                    <span className="pill">{category}</span>
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.65rem, 3vw, 2.2rem)', fontWeight: 600, color: 'var(--white)', letterSpacing: '-0.035em', lineHeight: 1.08 }}>
                    {title}
                  </h3>

                  <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--grey-1)' }}>
                    {desc}
                  </p>

                  <div style={{ display: 'grid', gap: '0.9rem' }}>
                    <div className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-2)' }}>
                      What I delivered
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: '0.8rem' }}>
                      {highlights.map((item) => (
                        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--white)', marginTop: '0.55rem', flexShrink: 0 }} />
                          <span style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--grey-1)' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ display: 'grid', gap: '1rem', alignContent: 'start' }}>
                  {gallery?.length ? (
                    <div style={{ border: '1px solid var(--grey-3)', borderRadius: '16px', padding: '1.2rem 1.25rem', background: 'var(--tint-soft)' }}>
                      <div className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-2)', marginBottom: '0.8rem' }}>
                        Project gallery
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0.9rem' }}>
                        {gallery.map((shot, shotIndex) => (
                          <ProjectShot
                            key={shot.src}
                            src={shot.src}
                            alt={shot.alt}
                            label={shot.label}
                            slot={`0${shotIndex + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div style={{ border: '1px solid var(--grey-3)', borderRadius: '16px', padding: '1.2rem 1.25rem', background: 'var(--tint-soft)' }}>
                    <div className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-2)', marginBottom: '0.7rem' }}>
                      Value delivered
                    </div>
                    <p style={{ margin: 0, fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--grey-1)' }}>
                      {impact}
                    </p>
                  </div>

                  <div style={{ border: '1px solid var(--grey-3)', borderRadius: '16px', padding: '1.2rem 1.25rem', background: 'var(--tint-soft)' }}>
                    <div className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-2)', marginBottom: '0.8rem' }}>
                      Tools and technologies
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                      {tags.map((tag) => <span key={tag} className="pill">{tag}</span>)}
                    </div>
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
