import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
import { SpotlightCard } from '../common/SpotlightCard'
import { timelineData } from '../../data/portfolioData'

export const ExperienceTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'education' | 'experience'>('all')

  const filteredItems = timelineData.filter((item) => {
    if (filter === 'all') return true
    if (filter === 'experience') return item.type === 'experience' || item.type === 'training'
    return item.type === filter
  })

  return (
    <section id="timeline" className="py-20 md:py-28 relative bg-[#101113]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="05"
          title="Education & Engineering Experience"
          subtitle="A chronological record of academic rigor, software engineering internships, and systems building."
        />

        {/* Filter Tabs with Motion Layout */}
        <div className="flex items-center gap-2 mb-12">
          {(['all', 'education', 'experience'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`relative px-4 py-2 rounded-lg font-code text-xs sm:text-sm capitalize transition-colors cursor-pointer ${
                filter === tab
                  ? 'text-white font-semibold'
                  : 'text-[#A1A1AA] hover:text-white bg-[#1C1E22] border border-[#303238]'
              }`}
            >
              {filter === tab && (
                <motion.div
                  layoutId="timelineFilterPill"
                  className="absolute inset-0 bg-[#E53945] rounded-lg -z-10 shadow-md shadow-[#E53945]/30"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
              <span>{tab === 'all' ? 'All Milestones' : tab}</span>
            </button>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#303238] space-y-10 sm:space-y-12 ml-2 sm:ml-4">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Node Indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-[#101113] border-2 border-[#303238] group-hover:border-[#E53945] group-hover:bg-[#E53945]/15 transition-colors shadow-lg">
                  {item.type === 'education' ? (
                    <GraduationCap className="w-4 h-4 text-[#E53945]" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-[#FF5964]" />
                  )}
                </div>

                {/* Spotlight Card */}
                <SpotlightCard className="p-6 sm:p-8">
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
                  <ul className="space-y-2.5 mb-5">
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
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
