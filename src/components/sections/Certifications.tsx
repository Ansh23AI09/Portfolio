import React from 'react'
import { Award, ExternalLink, Calendar } from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { SpotlightCard } from '../common/SpotlightCard'
import { certificates } from '../../data/portfolioData'

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="06"
          title="Certifications & Coursework"
          subtitle="Rigorous specialized training and verified certifications in modern frontend architectures, deep neural networks, and database performance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <SpotlightCard
              key={cert.id}
              className="flex flex-col justify-between p-6 shadow-lg group"
            >
              <div>
                {/* Header Icon & Issuer */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#25272C] border border-[#303238] text-[#E53945] group-hover:bg-[#E53945]/15 transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-code text-xs text-[#A1A1AA] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#E53945]" />
                    {cert.date}
                  </span>
                </div>

                <h4 className="font-heading text-base font-bold text-white mb-1.5 group-hover:text-[#FF5964] transition-colors line-clamp-2">
                  {cert.title}
                </h4>

                <p className="font-body text-xs font-medium text-[#A1A1AA] mb-4">
                  Issued by {cert.issuer}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-code bg-[#101113] text-[#A1A1AA] border border-[#303238]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Link */}
              {cert.credentialUrl && (
                <div className="pt-3 border-t border-[#303238]/60">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-code text-xs text-[#E53945] hover:text-[#FF5964] font-semibold transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  )
}
