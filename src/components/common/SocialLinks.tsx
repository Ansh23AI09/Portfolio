import React from 'react'
import { Mail, Globe, ArrowUpRight } from 'lucide-react'
import { socialLinks } from '../../data/portfolioData'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons'

interface SocialLinksProps {
  layout?: 'icons-only' | 'cards' | 'inline'
  className?: string
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  layout = 'icons-only',
  className = '',
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Github':
        return <GithubIcon className="w-4 h-4" />
      case 'Linkedin':
        return <LinkedinIcon className="w-4 h-4" />
      case 'Twitter':
        return <TwitterIcon className="w-4 h-4" />
      case 'Mail':
        return <Mail className="w-4 h-4" />
      default:
        return <Globe className="w-4 h-4" />
    }
  }

  if (layout === 'cards') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3.5 ${className}`}>
        {socialLinks.map((item) => (
          <a
            key={item.platform}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-xl bg-[#1C1E22] border border-[#303238] hover:border-[#E53945]/60 hover:bg-[#25272C] transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#25272C] text-[#E53945] group-hover:bg-[#E53945]/15 transition-colors">
                {getIcon(item.icon)}
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-[#F5F5F5] group-hover:text-white">
                  {item.platform}
                </p>
                <p className="font-code text-xs text-[#A1A1AA]">{item.handle}</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#FF5964] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {socialLinks.map((item) => (
        <a
          key={item.platform}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit Ansh Sharma's ${item.platform}`}
          className="p-2.5 rounded-lg bg-[#1C1E22] text-[#A1A1AA] border border-[#303238] hover:text-[#FF5964] hover:border-[#E53945]/50 hover:bg-[#25272C] transition-all duration-200"
        >
          {getIcon(item.icon)}
        </a>
      ))}
    </div>
  )
}
