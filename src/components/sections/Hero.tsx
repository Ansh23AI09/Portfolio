import React, { useState } from 'react'
import {
  ArrowRight,
  Download,
  Terminal,
  Activity,
  Code2,
  Cpu,
  Sparkles,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'
import { Button } from '../common/Button'

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const codeSnippet = `class SoftwareEngine:
    def __init__(self):
        self.engineer = "Ansh Sharma"
        self.focus = ["Scalable Systems", "AI / NLP", "Full-Stack"]
        self.status = "Available for Opportunities"

    async def execute_mission(self):
        system = await build_reliable_architecture()
        return system.deploy(excellence=True)`

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 md:py-24 overflow-hidden tech-grid-pattern red-ambient-glow"
    >
      {/* Background radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#101113]/70 to-[#101113] pointer-events-none" />

      {/* Decorative accent orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E53945]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Identity & Status Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-code text-xs md:text-sm font-semibold tracking-wider text-[#E53945] uppercase px-3 py-1 rounded-md bg-[#E53945]/10 border border-[#E53945]/20">
                ANSH.SHARMA / SOFTWARE ENGINEERING
              </span>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1E22] border border-[#303238] text-xs font-code text-[#A1A1AA]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                </span>
                <span>{personalInfo.status}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-[1.12]">
              Engineering Digital Experiences.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E53945] via-[#FF5964] to-[#F5F5F5]">
                Building Real Solutions.
              </span>
            </h1>

            {/* Subtext */}
            <p className="font-body text-[#A1A1AA] text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Explore Projects
              </Button>

              <Button
                href="#resume"
                variant="secondary"
                size="lg"
                icon={<Download className="w-5 h-5" />}
              >
                Download Resume
              </Button>
            </div>

            {/* Technology Highlights Bar */}
            <div className="pt-6 border-t border-[#303238]/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 font-code text-xs text-[#A1A1AA] tracking-wider">
                <Code2 className="w-4 h-4 text-[#E53945]" />
                <span>{personalInfo.techHighlights.join(' · ')}</span>
              </div>

              <div className="font-code text-xs font-semibold text-[#A1A1AA] flex items-center gap-1.5">
                <span className="text-[#E53945]">01</span>
                <span>/</span>
                <span>09</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Code Window & Technical Visual (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient decorative border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#E53945]/30 to-[#303238]/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-1000"></div>

            {/* Terminal Window Container */}
            <div className="relative rounded-2xl bg-[#1C1E22] border border-[#303238] shadow-2xl overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#101113]/90 border-b border-[#303238]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#E53945]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#22C55E]/80" />
                  <span className="ml-2 font-code text-xs text-[#A1A1AA] flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#E53945]" />
                    ansh_core_engine.py
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-code text-[11px] text-[#A1A1AA] px-2 py-0.5 rounded bg-[#25272C] border border-[#303238]">
                    git:main*
                  </span>
                  <button
                    onClick={handleCopyCode}
                    aria-label="Copy code snippet"
                    className="p-1 rounded text-[#A1A1AA] hover:text-white transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#22C55E]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-5 font-code text-xs sm:text-sm text-[#F5F5F5] overflow-x-auto leading-relaxed bg-[#101113]/70">
                <pre className="space-y-1">
                  <div>
                    <span className="text-[#FF5964]">class</span>{' '}
                    <span className="text-[#F5F5F5] font-semibold">SoftwareEngine</span>
                    <span className="text-[#A1A1AA]">:</span>
                  </div>
                  <div>
                    {'    '}<span className="text-[#FF5964]">def</span>{' '}
                    <span className="text-[#60A5FA]">__init__</span>
                    <span className="text-[#A1A1AA]">(self):</span>
                  </div>
                  <div>
                    {'        '}<span className="text-[#A1A1AA]">self.</span>
                    <span className="text-[#F5F5F5]">engineer</span> ={' '}
                    <span className="text-[#22C55E]">"Ansh Sharma"</span>
                  </div>
                  <div>
                    {'        '}<span className="text-[#A1A1AA]">self.</span>
                    <span className="text-[#F5F5F5]">focus</span> = [
                    <span className="text-[#22C55E]">"Scalable Systems"</span>,{' '}
                    <span className="text-[#22C55E]">"AI / NLP"</span>]
                  </div>
                  <div>
                    {'        '}<span className="text-[#A1A1AA]">self.</span>
                    <span className="text-[#F5F5F5]">status</span> ={' '}
                    <span className="text-[#22C55E]">"Available for Opportunities"</span>
                  </div>
                  <div className="py-1"></div>
                  <div>
                    {'    '}<span className="text-[#FF5964]">async def</span>{' '}
                    <span className="text-[#60A5FA]">execute_mission</span>
                    <span className="text-[#A1A1AA]">(self):</span>
                  </div>
                  <div>
                    {'        '}<span className="text-[#F5F5F5]">system</span> ={' '}
                    <span className="text-[#FF5964]">await</span> build_architecture()
                  </div>
                  <div>
                    {'        '}<span className="text-[#FF5964]">return</span> system.deploy(
                    <span className="text-[#F59E0B]">excellence</span>=
                    <span className="text-[#38BDF8]">True</span>)
                  </div>
                </pre>
              </div>

              {/* Terminal Bottom Telemetry Tray */}
              <div className="px-4 py-3 bg-[#1C1E22] border-t border-[#303238] flex flex-wrap items-center justify-between gap-2 text-xs font-code">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-[#22C55E]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Tests: 42 passed</span>
                  </span>
                  <span className="text-[#303238]">|</span>
                  <span className="text-[#A1A1AA] flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-[#E53945]" />
                    <span>Latency: 18ms</span>
                  </span>
                </div>

                <span className="text-[#A1A1AA] bg-[#25272C] px-2 py-0.5 rounded text-[11px] border border-[#303238]">
                  UTF-8
                </span>
              </div>

            </div>

            {/* Floating High-Tech Metrics Badges */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 bg-[#1C1E22]/95 backdrop-blur-md p-3 rounded-xl border border-[#303238] shadow-xl">
              <div className="p-2 rounded-lg bg-[#E53945]/15 text-[#E53945]">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <p className="font-heading text-xs font-bold text-white">Full-Stack & Systems</p>
                <p className="font-code text-[10px] text-[#A1A1AA]">Python · React · FastAPI</p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-3 absolute -top-5 -right-3 bg-[#1C1E22]/95 backdrop-blur-md p-3 rounded-xl border border-[#303238] shadow-xl">
              <div className="p-2 rounded-lg bg-[#22C55E]/15 text-[#22C55E]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="font-heading text-xs font-bold text-white">Engineering Quality</p>
                <p className="font-code text-[10px] text-[#A1A1AA]">Clean Architecture & Testing</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
