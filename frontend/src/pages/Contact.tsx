import { useState } from 'react'
import Button from '@/components/Button'
import '@/styles/Contact.scss'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message envoyé !')
  }

  return (
    <section className="contact-page">
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Message
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
        </label>
        <Button type="submit">Envoyer</Button>
      </form>
    </section>
  )
}
