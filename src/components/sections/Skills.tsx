import React from 'react'
import {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Terminal,
  Layers
} from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { SkillTag } from '../common/SkillTag'
import { skillCategories } from '../../data/portfolioData'

export const Skills: React.FC = () => {
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

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#101113]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="03"
          title="Technical Competencies"
          subtitle="Honest, practical breakdown of technologies, frameworks, and developer tools applied in real-world software engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-[#1C1E22] border border-[#303238] hover:border-[#E53945]/50 hover:bg-[#25272C]/80 transition-all duration-300 shadow-lg hover:shadow-black/40"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#25272C] border border-[#303238] group-hover:bg-[#E53945]/10 group-hover:border-[#E53945]/30 transition-colors">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#FF5964] transition-colors">
                    {category.name}
                  </h3>
                </div>

                {/* Practical Description (avoiding fake percentage bars) */}
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
            </div>
          ))}
        </div>

        {/* Technical Philosophy Note */}
        <div className="mt-12 p-5 rounded-xl bg-[#1C1E22]/60 border border-[#303238] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
            <span className="font-code text-xs sm:text-sm text-[#A1A1AA]">
              Continuously learning, profiling performance, and adopting modern standards.
            </span>
          </div>
          <span className="font-code text-xs text-[#E53945] font-semibold">
            STACK: PRODUCTION-READY
          </span>
        </div>

      </div>
    </section>
  )
}
