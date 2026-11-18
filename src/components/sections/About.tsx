import React from 'react'
import {
  GraduationCap,
  BrainCircuit,
  Compass,
  CheckCircle2,
  TerminalSquare,
  Sparkles,
  Award
} from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { SpotlightCard } from '../common/SpotlightCard'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="02"
          title="About & Engineering Mindset"
          subtitle="Specializing in Artificial Intelligence, Machine Learning, and Python Data Science at DPG Institute of Technology & Management."
        />

        {/* Two columns on desktop, one column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#A1A1AA] text-base leading-relaxed">
            
            <SpotlightCard className="p-6 sm:p-8 space-y-5">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F5F5] flex items-center gap-2.5">
                <TerminalSquare className="w-5 h-5 text-[#E53945]" />
                Career Objective & Background
              </h3>
              
              <p>
                Hello! I'm <strong className="text-white font-medium">Ansh Sharma</strong>, a motivated and detail-oriented B.Tech student specializing in <strong className="text-white font-medium">Artificial Intelligence and Machine Learning (AIML)</strong> at <span className="text-[#FF5964]">DPG Institute of Technology and Management, Gurugram</span>.
              </p>

              <p>
                My technical passion is centered on applying analytical and problem-solving skills to real-world datasets. During my <strong className="text-white font-medium">4-credit Python for Data Science Internship with AISECT Learn</strong>, I conducted exploratory analysis, data cleaning, and statistical visualization using <span className="text-[#F5F5F5] font-code">Pandas, NumPy, and Matplotlib</span> to identify meaningful trends and support data-driven decision-making.
              </p>

              <p>
                Recently, I also completed the <strong className="text-white font-medium">IBM SkillsBuild Cybersecurity BootCamp</strong> (in association with BharatCares), deepening my knowledge of network defense, threat assessment, and secure software development.
              </p>
            </SpotlightCard>

            {/* Academic & Systems Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SpotlightCard className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-white font-heading font-semibold text-base">
                  <GraduationCap className="w-4 h-4 text-[#E53945]" />
                  <span>Academic Standing</span>
                </div>
                <p className="text-xs sm:text-sm text-[#A1A1AA]">
                  Pursuing B.Tech in AIML at DPGITM, Gurugram. Last Semester <strong>SGPA: 7.4</strong>. Solid foundation in Python, C, C++, Java, and SQL.
                </p>
              </SpotlightCard>

              <SpotlightCard className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-white font-heading font-semibold text-base">
                  <BrainCircuit className="w-4 h-4 text-[#E53945]" />
                  <span>Applied AIML & Data</span>
                </div>
                <p className="text-xs sm:text-sm text-[#A1A1AA]">
                  Practical data science workflows with Pandas, NumPy, and Power BI for data cleaning, transformation, and visual reporting.
                </p>
              </SpotlightCard>
            </div>

            {/* Verified Certifications Highlight Card */}
            <SpotlightCard className="p-5 sm:p-6 bg-[#25272C]/40 border-[#303238]">
              <div className="flex items-center gap-2 text-white font-heading font-semibold text-base mb-2">
                <Award className="w-4 h-4 text-[#FF5964]" />
                <span>Verified Industry Credentials</span>
              </div>
              <ul className="text-xs sm:text-sm text-[#A1A1AA] space-y-1.5">
                <li>• <strong>AISECT Learn:</strong> Python for Data Science Internship (120 Hours / 4 Credits, Cert ID: <span className="text-[#F5F5F5] font-code">j82HZm6AKB</span>)</li>
                <li>• <strong>IBM SkillsBuild:</strong> 2-Week Cybersecurity BootCamp (ID: <span className="text-[#F5F5F5] font-code">BHIBMCSB00747</span>)</li>
              </ul>
            </SpotlightCard>

          </div>

          {/* Right Column: Personal Strengths & Quick Facts (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            <SpotlightCard className="p-6 sm:p-7">
              <h3 className="font-heading text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E53945]" />
                Personal Strengths
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-heading text-sm font-semibold text-white">
                      Quick Learner & Highly Adaptable
                    </h5>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">
                      Fast to learn new languages, analytical libraries, frameworks, and developer workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-heading text-sm font-semibold text-white">
                      Analytical & Problem-Solving Mindset
                    </h5>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">
                      Approaching bugs and data challenges systematically through hypothesis testing and data exploration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-heading text-sm font-semibold text-white">
                      Team Collaboration & Communication
                    </h5>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">
                      Communicating technical insights clearly in English and Hindi, with strong collaborative spirit.
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Quick Stat Highlights with motion hover */}
            <div className="grid grid-cols-2 gap-4">
              <SpotlightCard className="p-4 text-center">
                <span className="font-heading text-3xl font-bold text-[#E53945]">7.4</span>
                <p className="font-code text-xs text-[#A1A1AA] mt-1">Last Sem SGPA</p>
              </SpotlightCard>

              <SpotlightCard className="p-4 text-center">
                <span className="font-heading text-3xl font-bold text-white">120+</span>
                <p className="font-code text-xs text-[#A1A1AA] mt-1">Internship Hours</p>
              </SpotlightCard>

              <SpotlightCard className="p-4 text-center">
                <span className="font-heading text-3xl font-bold text-white">2</span>
                <p className="font-code text-xs text-[#A1A1AA] mt-1">Industry Certifications</p>
              </SpotlightCard>

              <SpotlightCard className="p-4 text-center">
                <span className="font-heading text-3xl font-bold text-[#22C55E]">100%</span>
                <p className="font-code text-xs text-[#A1A1AA] mt-1">Dedication</p>
              </SpotlightCard>
            </div>

            {/* Location & Contact Card */}
            <div className="p-5 rounded-2xl bg-[#1C1E22] border border-[#303238] flex items-start gap-3">
              <Compass className="w-5 h-5 text-[#E53945] shrink-0 mt-0.5" />
              <div>
                <h5 className="font-heading text-sm font-semibold text-white">
                  Based in Gurugram, Haryana
                </h5>
                <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                  Available for full-time entry-level engineering roles, data science positions, and technical internships across NCR / Remote.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
