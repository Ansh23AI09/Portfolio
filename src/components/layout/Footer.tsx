import React from 'react'
import { Terminal, ArrowUp } from 'lucide-react'
import { navItems } from '../../data/portfolioData'
import { SocialLinks } from '../common/SocialLinks'

const CURRENT_YEAR = new Date().getFullYear()

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="bg-[#101113] border-t border-[#303238] pt-16 pb-12 text-[#A1A1AA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#303238]">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1C1E22] border border-[#303238]">
                <Terminal className="w-4 h-4 text-[#E53945]" />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                ANSH<span className="text-[#E53945]">.</span>SHARMA
              </span>
            </div>

            <p className="font-body text-sm text-[#A1A1AA] max-w-sm leading-relaxed">
              Computer Science engineering student building reliable software, intelligent applications and practical technology solutions.
            </p>

            <div className="flex items-center gap-2 font-code text-xs text-[#22C55E]">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              <span>Available for full-time roles & internships</span>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-code text-xs font-semibold uppercase text-white tracking-wider">
              Quick Navigation
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm font-code">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-[#FF5964] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a href="#resume" className="hover:text-[#FF5964] transition-colors">
                Resume
              </a>
              <a href="#certifications" className="hover:text-[#FF5964] transition-colors">
                Certificates
              </a>
            </div>
          </div>

          {/* Social Profiles & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <p className="font-code text-xs font-semibold uppercase text-white tracking-wider mb-3">
                Connect
              </p>
              <SocialLinks layout="icons-only" />
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 font-code text-xs text-[#A1A1AA] hover:text-[#FF5964] transition-colors cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#E53945]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-code text-xs text-[#A1A1AA]">
          <p>© {CURRENT_YEAR} Ansh Sharma. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            <span>Built with React, Vite & Tailwind CSS</span>
            <span className="text-[#303238]">•</span>
            <span className="text-[#E53945]">09 / 09</span>
          </p>
        </div>

      </div>
    </footer>
  )
}
