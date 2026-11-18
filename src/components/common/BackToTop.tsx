import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top of page"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-[#1C1E22]/90 backdrop-blur-md border border-[#303238] text-[#A1A1AA] hover:text-white hover:border-[#E53945] hover:bg-[#E53945]/15 transition-all duration-200 shadow-xl group"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform text-[#E53945]" />
    </button>
  )
}
