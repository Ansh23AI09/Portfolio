import React, { useState, useEffect } from 'react'
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react'
import { navItems } from '../../data/portfolioData'
import { Button } from '../common/Button'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Track active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'timeline', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const targetId = href.replace('#', '')
    const targetEl = document.getElementById(targetId)
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-[#101113]/90 backdrop-blur-md border-b border-[#303238] py-3.5 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1C1E22] border border-[#303238] group-hover:border-[#E53945] transition-colors">
            <Terminal className="w-4 h-4 text-[#E53945]" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-[#F5F5F5] group-hover:text-white flex items-center">
              ANSH<span className="text-[#E53945]">.</span>SHARMA
            </span>
            <span className="font-code text-[10px] text-[#A1A1AA] tracking-widest uppercase -mt-1 hidden sm:block">
              SWE // PORTFOLIO
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#1C1E22]/60 border border-[#303238]/60 backdrop-blur-sm">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={`relative px-4 py-1.5 font-code text-xs lg:text-sm font-medium transition-colors duration-200 rounded-full ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#A1A1AA] hover:text-[#F5F5F5]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#E53945] rounded-full" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Right Action / Contact Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href="#contact"
            variant="primary"
            size="sm"
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            Get In Touch
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="p-2 rounded-lg bg-[#1C1E22] border border-[#303238] text-[#F5F5F5] hover:text-[#FF5964] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#101113]/98 backdrop-blur-xl border-b border-[#303238] animate-fadeIn">
          <nav className="flex flex-col space-y-2 pt-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-code text-sm ${
                    isActive
                      ? 'bg-[#E53945]/15 text-white border-l-4 border-[#E53945]'
                      : 'text-[#A1A1AA] hover:bg-[#1C1E22] hover:text-[#F5F5F5]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-code text-xs text-[#A1A1AA]">{`// 0${navItems.indexOf(item) + 1}`}</span>
                </a>
              )
            })}
            <div className="pt-3">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Get In Touch
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
