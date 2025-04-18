import '@/styles/Footer.scss'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        © {new Date().getFullYear()} Ma Société. Tous droits réservés.
      </div>
    </footer>
  )
}
