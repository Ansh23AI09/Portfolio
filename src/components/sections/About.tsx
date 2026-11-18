import React from 'react'
import {
  GraduationCap,
  BrainCircuit,
  Compass,
  CheckCircle2,
  TerminalSquare,
  Sparkles
} from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="02"
          title="About & Engineering Mindset"
          subtitle="A disciplined approach to computer science: translating complex engineering theory into production-grade systems."
        />

        {/* Two columns on desktop, one column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#A1A1AA] text-base leading-relaxed">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1C1E22] border border-[#303238] space-y-5">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F5F5] flex items-center gap-2.5">
                <TerminalSquare className="w-5 h-5 text-[#E53945]" />
                Professional Introduction
              </h3>
              
              <p>
                Hello! I'm <strong className="text-white font-medium">Ansh Sharma</strong>, a Computer Science Engineering student with an intense curiosity for how distributed software and artificial intelligence systems operate under load. I don't just write code that functions—I prioritize correctness, observability, and modular system design.
              </p>

              <p>
                My journey began with algorithmic problem solving and low-level programming, which grounded my understanding of memory structures, computational complexity, and asynchronous execution. Over time, I scaled this up to creating end-to-end full-stack applications like <span className="text-[#FF5964] font-code font-semibold">VerifyWeb</span>, tackling real-world misinformation using NLP and high-throughput web scraping.
              </p>
            </div>

            {/* Academic & Engineering Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#1C1E22] border border-[#303238] space-y-2">
                <div className="flex items-center gap-2 text-white font-heading font-semibold text-base">
                  <GraduationCap className="w-4 h-4 text-[#E53945]" />
                  <span>Academic Background</span>
                </div>
                <p className="text-sm text-[#A1A1AA]">
                  Pursuing B.Tech in CSE with a strong 8.85 CGPA, balancing theoretical foundation in OS, Networks, and DBMS with hands-on software development.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#1C1E22] border border-[#303238] space-y-2">
                <div className="flex items-center gap-2 text-white font-heading font-semibold text-base">
                  <BrainCircuit className="w-4 h-4 text-[#E53945]" />
                  <span>AI & Systems Focus</span>
                </div>
                <p className="text-sm text-[#A1A1AA]">
                  Passionate about combining neural language models (RAG, embeddings) with deterministic, robust backend pipelines that scale predictably.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#25272C]/70 border border-[#303238]">
              <h4 className="font-heading text-base font-semibold text-white mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#E53945]" />
                Career Objective
              </h4>
              <p className="text-sm text-[#A1A1AA]">
                Seeking software engineering roles where I can contribute to mission-critical distributed systems, build resilient developer-centric tools, and collaborate with high-performance engineering teams.
              </p>
            </div>

          </div>

          {/* Right Column: Engineering Principles & Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="p-6 rounded-2xl bg-[#1C1E22] border border-[#303238]">
              <h3 className="font-heading text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E53945]" />
                Engineering Principles
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-heading text-sm font-semibold text-white">
                      Zero Magic, High Transparency
                    </h5>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">
                      Writing clear, testable, type-safe code over clever one-liners that degrade maintainability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-heading text-sm font-semibold text-white">
                      Performance & Latency Awareness
                    </h5>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">
                      Understanding database query plans, network round-trips, and bundle size constraints.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-heading text-sm font-semibold text-white">
                      User-First Ergonomics
                    </h5>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">
                      Building intuitive, accessible, and responsive user interfaces that don't compromise speed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#1C1E22] border border-[#303238] text-center">
                <span className="font-heading text-3xl font-bold text-[#E53945]">8.85</span>
                <p className="font-code text-xs text-[#A1A1AA] mt-1">B.Tech CGPA</p>
              </div>

              <div className="p-4 rounded-xl bg-[#1C1E22] border border-[#303238] text-center">
                <span className="font-heading text-3xl font-bold text-white">20+</span>
                <p className="font-code text-xs text-[#A1A1AA] mt-1">Projects & Prototypes</p>
              </div>

              <div className="p-4 rounded-xl bg-[#1C1E22] border border-[#303238] text-center">
                <span className="font-heading text-3xl font-bold text-white">400+</span>
                <p className="font-code text-xs text-[#A1A1AA] mt-1">Algorithmic Problems</p>
              </div>

              <div className="p-4 rounded-xl bg-[#1C1E22] border border-[#303238] text-center">
                <span className="font-heading text-3xl font-bold text-[#22C55E]">100%</span>
                <p className="font-code text-xs text-[#A1A1AA] mt-1">Commitment to Quality</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
