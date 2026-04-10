import Reveal from './Reveal'

const categories = [
  {
    title: 'Networking',
    strengths: ['VLAN planning and inter-VLAN routing', 'TCP/IP fundamentals with DNS, DHCP, HTTP, and FTP', 'Packet analysis and connectivity validation'],
    tools: ['Cisco IOS', 'VLAN', 'Routing', 'DNS', 'DHCP'],
  },
  {
    title: 'Security',
    strengths: ['Firewall and proxy configuration', 'SSL/TLS awareness and secure service delivery', 'Threat investigation mindset and access control basics'],
    tools: ['pfSense', 'Network Security', 'Proxying', 'SSL/TLS', 'Incident Response'],
  },
  {
    title: 'Linux and Services',
    strengths: ['Linux administration for multi-service environments', 'BIND, Apache, and FTP service deployment', 'System troubleshooting and configuration review'],
    tools: ['Linux', 'BIND', 'Apache', 'VSFTPD', 'Bash'],
  },
  {
    title: 'Operations',
    strengths: ['Backup flows and file synchronization', 'Virtualized lab setup for repeatable testing', 'Version control and structured workflow habits'],
    tools: ['rsync', 'Ansible', 'Virtualization', 'GitHub', 'Load Balancing'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '7rem 8%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <div className="h-rule">
            <span className="label">02 - Skills</span>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {categories.map(({ title, strengths, tools }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <article className="card" style={{ height: '100%', padding: '1.75rem', display: 'grid', gap: '1.4rem' }}>
                <div style={{ display: 'grid', gap: '0.7rem' }}>
                  <span className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-1)' }}>
                    Skill group {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{ fontSize: '1.36rem', fontWeight: 600, color: 'var(--white)', letterSpacing: '-0.03em' }}>{title}</h3>
                </div>

                <div style={{ display: 'grid', gap: '0.8rem' }}>
                  <div className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-2)' }}>
                    What I can handle
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
                    {strengths.map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem' }}>
                        <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--white)', marginTop: '0.55rem', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--grey-1)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                  {tools.map((tool) => (
                    <span key={tool} className="pill">{tool}</span>
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
