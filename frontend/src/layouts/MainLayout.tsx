import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/MainLayout.scss'

interface Props {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="main-layout">
      <Header />
      <main className="container content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
