import React, { useState } from 'react'
import {
  FileText,
  Download,
  CheckCircle2,
  FileCheck,
  ShieldCheck
} from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { Button } from '../common/Button'
import { SpotlightCard } from '../common/SpotlightCard'
import { personalInfo } from '../../data/portfolioData'

export const ResumeSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false)

  const handleDownload = () => {
    const resumeText = `ANSH SHARMA - SOFTWARE ENGINEER
Email: ${personalInfo.email}
GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}

SUMMARY
Computer Science Engineering student focused on building reliable, high-performance distributed systems, AI-powered applications, and modern web architectures.

EDUCATION
Bachelor of Technology in Computer Science & Engineering (CGPA: 8.85 / 10.0)

CORE COMPETENCIES
- Programming: Python, TypeScript, JavaScript, C++, SQL
- Full Stack: React, Next.js, FastAPI, Node.js, Express, Tailwind CSS
- Databases & Infra: PostgreSQL, MongoDB, Redis, Docker, Git, CI/CD
- AI & NLP: PyTorch, LangChain, FAISS, Transformer architectures

FEATURED PROJECTS
- VerifyWeb: Automated digital credibility & misinformation verification engine using FastAPI, PyTorch & React.
- NeuralFlow RAG: High-performance document retrieval & conversational intelligence engine.
- DevPulse Telemetry: Real-time distributed microservice latency dashboard.`

    const blob = new Blob([resumeText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Ansh_Sharma_Software_Engineer_Resume.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    setDownloadSuccess(true)
    setTimeout(() => setDownloadSuccess(false), 3000)
  }

  return (
    <section id="resume" className="py-20 md:py-28 relative bg-[#101113]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="07"
          title="Curriculum Vitae & Resume"
          subtitle="A comprehensive record of systems built, academic honors, and technical competencies prepared for engineering recruiters."
        />

        <SpotlightCard className="p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Red Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E53945]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Preview Card (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-code font-semibold uppercase bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  ATS-Parsed & Verified
                </span>
                <span className="font-code text-xs text-[#A1A1AA]">
                  Updated for 2025/2026 Opportunities
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-snug">
                Ready for high-impact software engineering roles & internships.
              </h3>

              <p className="font-body text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
                Contains verified documentation of projects, microservices built with Python and FastAPI, coursework syllabus, competitive programming accomplishments, and academic transcripts.
              </p>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F5F5F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#E53945]" />
                  <span>8.85 CGPA in B.Tech CSE</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F5F5F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#E53945]" />
                  <span>FastAPI, PyTorch & React Stack</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F5F5F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#E53945]" />
                  <span>Backend & Microservice Internships</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F5F5F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#E53945]" />
                  <span>400+ Algorithmic Challenges</span>
                </div>
              </div>

              {/* Download CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button
                  onClick={handleDownload}
                  variant="primary"
                  size="lg"
                  icon={<Download className="w-5 h-5" />}
                >
                  {downloadSuccess ? 'Downloaded Resume!' : 'Download Resume (TXT/PDF)'}
                </Button>

                <Button
                  href="/Ansh_Sharma_Software_Engineer_Resume.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="lg"
                  icon={<FileCheck className="w-5 h-5" />}
                >
                  Quick Print View
                </Button>
              </div>

            </div>

            {/* Right Preview Box (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#101113] border-2 border-[#303238] p-5 shadow-2xl space-y-4">
                
                {/* Simulated Document Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-[#303238]">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#E53945]" />
                    <span className="font-code text-xs text-white font-semibold">
                      Ansh_Sharma_Resume.pdf
                    </span>
                  </div>
                  <span className="font-code text-[11px] text-[#A1A1AA]">
                    Page 1 / 1
                  </span>
                </div>

                {/* Simulated Resume Document Lines */}
                <div className="space-y-3 font-code text-xs text-[#A1A1AA] select-none opacity-85">
                  <div className="flex justify-between items-baseline">
                    <span className="text-white font-bold text-sm">ANSH SHARMA</span>
                    <span className="text-[#FF5964]">B.Tech CSE</span>
                  </div>
                  <div className="h-[1px] bg-[#303238]" />

                  <div>
                    <span className="text-[#F5F5F5] font-semibold uppercase text-[11px]">CORE STACK</span>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5">
                      Python, TypeScript, React, Next.js, FastAPI, PostgreSQL, Docker, PyTorch
                    </p>
                  </div>

                  <div>
                    <span className="text-[#F5F5F5] font-semibold uppercase text-[11px]">EXPERIENCE</span>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5">
                      Software Engineering Intern • TechVanguard Solutions (FastAPI, Redis)
                    </p>
                  </div>

                  <div>
                    <span className="text-[#F5F5F5] font-semibold uppercase text-[11px]">FLAGSHIP WORK</span>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5">
                      VerifyWeb Misinformation Engine (94.2% accuracy, &lt;180ms latency)
                    </p>
                  </div>

                  <div className="pt-2 text-center">
                    <span className="text-[10px] text-[#E53945] tracking-widest uppercase">
                      *** END OF RESUME PREVIEW ***
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </SpotlightCard>

      </div>
    </section>
  )
}
