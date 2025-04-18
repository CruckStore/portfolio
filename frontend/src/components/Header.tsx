import { NavLink } from 'react-router-dom'
import '@/styles/Header.scss'

export default function Header() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">Gtol</div>
        <nav className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://discord.gg/cruckstore"
            target="_blank"
            rel="noopener noreferrer"
            className="discord-link"
          >
            Discord
          </a>
        </nav>
      </div>
    </header>
  )
}
