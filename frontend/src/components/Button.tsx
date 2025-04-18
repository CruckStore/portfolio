import { ReactNode } from 'react'
import '@/styles/Button.scss'

interface Props {
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function Button({ children, onClick, type = 'button' }: Props) {
  return (
    <button className="btn" onClick={onClick} type={type}>
      {children}
    </button>
  )
}
