import { NavLink } from 'react-router-dom'
import logo from '@/assets/logo.svg'
import '@/styles/Header.scss'

export default function Header() {
  const links = [
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo">
          <img src={logo} alt="Polo logo" width={24} height={24} />
        </div>
        <div className="actions">
          <nav className="nav">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <a
            href="https://discord.gg/tonlien"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-free"
          >
            <span className="icon">✨</span>
            <span>Get for Free</span>
          </a>
        </div>
      </div>
    </header>
  )
}
