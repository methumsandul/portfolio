export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ padding: '2rem 8%', borderTop: '1px solid var(--grey-3)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
      <span className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-1)' }}>
        Copyright {year} Methum Sandul
      </span>
      <span className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-1)' }}>
        Kalutara, Sri Lanka
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--white)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
        <span className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-1)' }}>
          Open to opportunities
        </span>
      </div>
    </footer>
  )
}
