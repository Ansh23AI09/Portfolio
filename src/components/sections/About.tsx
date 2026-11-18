import React from 'react'
import {
  GraduationCap,
  BrainCircuit,
  Compass,
  CheckCircle2,
  TerminalSquare,
  Sparkles,
  Flame
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
          subtitle="A disciplined, pragmatic approach to software craft: translating complex computer science theory into resilient production code."
        />

        {/* Two columns on desktop, one column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#A1A1AA] text-base leading-relaxed">
            
            <SpotlightCard className="p-6 sm:p-8 space-y-5">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F5F5] flex items-center gap-2.5">
                <TerminalSquare className="w-5 h-5 text-[#E53945]" />
                The Story Behind the Code
              </h3>
              
              <p>
                Hello! I'm <strong className="text-white font-medium">Ansh Sharma</strong>. I fell in love with programming not just by building user interfaces, but by digging deep into what happens under the hood when code executes—how memory buffers align, why databases stall on unindexed scans, and how asynchronous event loops maximize throughput under concurrency.
              </p>

              <p>
                During my computer science degree, I challenged myself to move beyond standard student tutorials. When I built <span className="text-[#FF5964] font-code font-semibold">VerifyWeb</span>, my flagship misinformation detection engine, I dove into transformer embeddings, vector search indexing, and background task workers with Celery & FastAPI. I wanted to build something that solves real human problems with verifiable, explainable citations.
              </p>

              <p>
                Whether I'm writing Python microservices, building clean TypeScript/React interfaces, or optimizing SQL execution plans, my philosophy is simple: <span className="text-white font-medium">write readable, type-safe, and transparent software that teammates love to maintain and users find lightning-fast.</span>
              </p>
            </SpotlightCard>

            {/* Academic & Systems Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SpotlightCard className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-white font-heading font-semibold text-base">
                  <GraduationCap className="w-4 h-4 text-[#E53945]" />
                  <span>Academic Grounding</span>
                </div>
                <p className="text-xs sm:text-sm text-[#A1A1AA]">
                  B.Tech in CSE with a strong <strong>8.85 CGPA</strong>. Deeply grounded in Operating Systems, Distributed Systems, Computer Networks, and Discrete Math.
                </p>
              </SpotlightCard>

              <SpotlightCard className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-white font-heading font-semibold text-base">
                  <BrainCircuit className="w-4 h-4 text-[#E53945]" />
                  <span>Applied AI & Systems</span>
                </div>
                <p className="text-xs sm:text-sm text-[#A1A1AA]">
                  Bridging the gap between neural models (RAG, dense embeddings) and deterministic backend pipelines that respect latency budgets.
                </p>
              </SpotlightCard>
            </div>

            {/* Currently Exploring Card */}
            <SpotlightCard className="p-5 sm:p-6 bg-[#25272C]/40 border-[#303238]">
              <div className="flex items-center gap-2 text-white font-heading font-semibold text-base mb-2">
                <Flame className="w-4 h-4 text-[#FF5964]" />
                <span>What I'm Exploring Right Now</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1AA]">
                Benchmarking local LLM inference engines (vLLM & llama.cpp), exploring distributed consensus protocols (Raft), and writing systems utilities to profile memory allocations.
              </p>
            </SpotlightCard>

          </div>

          {/* Right Column: Engineering Principles & Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            <SpotlightCard className="p-6 sm:p-7">
              <h3 className="font-heading text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E53945]" />
                Engineering Principles
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-heading text-sm font-semibold text-white">
                      Simple Beats Clever
                    </h5>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">
                      Clear control flow, structured types, and helpful logs save ten times more hours than clever one-liners.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-heading text-sm font-semibold text-white">
                      Measure Before Optimizing
                    </h5>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">
                      Profile CPU, query plans, and network latencies with real metrics rather than guessing bottlenecks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-heading text-sm font-semibold text-white">
                      High Empathy for End Users & Teammates
                    </h5>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">
                      Fast load times, accessible interfaces, and thorough documentation are marks of professional craftsmanship.
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Quick Stat Highlights with motion hover */}
            <div className="grid grid-cols-2 gap-4">
              <SpotlightCard className="p-4 text-center">
                <span className="font-heading text-3xl font-bold text-[#E53945]">8.85</span>
                <p className="font-code text-xs text-[#A1A1AA] mt-1">B.Tech CGPA</p>
              </SpotlightCard>

              <SpotlightCard className="p-4 text-center">
                <span className="font-heading text-3xl font-bold text-white">20+</span>
                <p className="font-code text-xs text-[#A1A1AA] mt-1">Projects & Prototypes</p>
              </SpotlightCard>

              <SpotlightCard className="p-4 text-center">
                <span className="font-heading text-3xl font-bold text-white">400+</span>
                <p className="font-code text-xs text-[#A1A1AA] mt-1">Algorithmic Problems</p>
              </SpotlightCard>

              <SpotlightCard className="p-4 text-center">
                <span className="font-heading text-3xl font-bold text-[#22C55E]">100%</span>
                <p className="font-code text-xs text-[#A1A1AA] mt-1">Focus on Quality</p>
              </SpotlightCard>
            </div>

            {/* Career Objective */}
            <div className="p-5 rounded-2xl bg-[#1C1E22] border border-[#303238] flex items-start gap-3">
              <Compass className="w-5 h-5 text-[#E53945] shrink-0 mt-0.5" />
              <div>
                <h5 className="font-heading text-sm font-semibold text-white">
                  Looking Ahead
                </h5>
                <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                  Excited to join an engineering team where I can contribute to high-scale backend services, build resilient tools, and learn alongside veteran architects.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
