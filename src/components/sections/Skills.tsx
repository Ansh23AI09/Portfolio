import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Terminal,
  Layers,
  Sparkles
} from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { SkillTag } from '../common/SkillTag'
import { SpotlightCard } from '../common/SpotlightCard'
import { skillCategories } from '../../data/portfolioData'

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#E53945]" />
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#E53945]" />
      case 'Server':
        return <Server className="w-5 h-5 text-[#E53945]" />
      case 'Database':
        return <Database className="w-5 h-5 text-[#E53945]" />
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#E53945]" />
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#E53945]" />
      default:
        return <Layers className="w-5 h-5 text-[#E53945]" />
    }
  }

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeCategory === 'all') return true
    if (activeCategory === 'data-science') return ['data-science', 'languages', 'databases'].includes(cat.id)
    if (activeCategory === 'cybersecurity') return ['cybersecurity', 'languages'].includes(cat.id)
    if (activeCategory === 'tools') return ['bi-tools', 'web-development', 'databases'].includes(cat.id)
    return true
  })

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#101113]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="03"
          title="Technical Competencies"
          subtitle="An honest, practical breakdown of programming languages, analytical libraries, and cybersecurity tools from academic & internship experience."
        />

        {/* Filter Pills with Motion layoutId */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Technologies' },
            { id: 'data-science', label: 'Data Science & AIML' },
            { id: 'cybersecurity', label: 'Cybersecurity' },
            { id: 'tools', label: 'BI, Web & Tools' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`relative px-4 py-2 rounded-lg font-code text-xs sm:text-sm transition-colors cursor-pointer ${
                activeCategory === tab.id
                  ? 'text-white font-semibold'
                  : 'text-[#A1A1AA] hover:text-[#F5F5F5] bg-[#1C1E22] border border-[#303238]'
              }`}
            >
              {activeCategory === tab.id && (
                <motion.div
                  layoutId="skillTabPill"
                  className="absolute inset-0 bg-[#E53945] rounded-lg -z-10 shadow-md shadow-[#E53945]/30"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <SpotlightCard className="h-full flex flex-col justify-between p-6 shadow-lg">
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-[#25272C] border border-[#303238] group-hover:bg-[#E53945]/15 transition-colors">
                        {getCategoryIcon(category.iconName)}
                      </div>
                      <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#FF5964] transition-colors">
                        {category.name}
                      </h3>
                    </div>

                    {/* Practical Description */}
                    <p className="font-body text-xs sm:text-sm text-[#A1A1AA] mb-6 leading-relaxed min-h-[40px]">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills Tags Grid */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#303238]/60">
                    {category.skills.map((skill) => (
                      <SkillTag key={skill} name={skill} size="sm" />
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Human Software Craftsmanship Quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-[#1C1E22] border border-[#303238] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-2 rounded-lg bg-[#22C55E]/15 text-[#22C55E]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="font-heading text-sm font-semibold text-white">
                Continuous Craftsmanship & Growth
              </p>
              <p className="font-body text-xs text-[#A1A1AA] mt-0.5">
                I prioritize deep understanding of language internals, memory allocation, and concurrency over memorizing syntax.
              </p>
            </div>
          </div>
          <span className="font-code text-xs text-[#E53945] font-semibold tracking-wider whitespace-nowrap">
            DISCIPLINED CRAFT
          </span>
        </motion.div>

      </div>
    </section>
  )
}
