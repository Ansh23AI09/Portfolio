import React, { useState } from 'react'
import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Award,
  ChevronRight
} from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { SkillTag } from '../common/SkillTag'
import { timelineData } from '../../data/portfolioData'

export const ExperienceTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'education' | 'experience'>('all')

  const filteredItems = timelineData.filter((item) => {
    if (filter === 'all') return true
    return item.type === filter
  })

  return (
    <section id="timeline" className="py-20 md:py-28 relative bg-[#101113]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="05"
          title="Education & Engineering Experience"
          subtitle="Chronological track record of academic rigour, software internships, and foundational training."
        />

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-12">
          {(['all', 'education', 'experience'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-lg font-code text-xs sm:text-sm capitalize transition-all cursor-pointer ${
                filter === tab
                  ? 'bg-[#E53945] text-white font-semibold shadow-md shadow-[#E53945]/20'
                  : 'bg-[#1C1E22] text-[#A1A1AA] border border-[#303238] hover:text-white hover:border-[#E53945]/40'
              }`}
            >
              {tab === 'all' ? 'All Milestones' : tab}
            </button>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#303238] space-y-10 sm:space-y-12 ml-2 sm:ml-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Node Indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-[#101113] border-2 border-[#303238] group-hover:border-[#E53945] group-hover:bg-[#E53945]/15 transition-colors shadow-lg">
                {item.type === 'education' ? (
                  <GraduationCap className="w-4 h-4 text-[#E53945]" />
                ) : (
                  <Briefcase className="w-4 h-4 text-[#FF5964]" />
                )}
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#1C1E22] border border-[#303238] group-hover:border-[#E53945]/50 group-hover:bg-[#25272C]/70 transition-all duration-300">
                
                {/* Meta details header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 text-xs font-code text-[#A1A1AA]">
                    <Calendar className="w-3.5 h-3.5 text-[#E53945]" />
                    <span>{item.period}</span>
                    {item.location && (
                      <>
                        <span className="text-[#303238]">•</span>
                        <MapPin className="w-3.5 h-3.5 text-[#A1A1AA]" />
                        <span>{item.location}</span>
                      </>
                    )}
                  </div>

                  {item.scoreOrGpa && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-code font-bold bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30">
                      <Award className="w-3.5 h-3.5" />
                      {item.scoreOrGpa}
                    </span>
                  )}
                </div>

                {/* Role / Degree Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-[#FF5964] transition-colors">
                  {item.title}
                </h3>

                <p className="font-body text-sm font-medium text-[#F5F5F5] mb-4">
                  {item.organization} <span className="text-[#A1A1AA]">({item.subtitle})</span>
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-5">
                  {item.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-[#E53945] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags if any */}
                {item.technologies && (
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-[#303238]/60">
                    {item.technologies.map((tech) => (
                      <SkillTag key={tech} name={tech} size="sm" />
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
