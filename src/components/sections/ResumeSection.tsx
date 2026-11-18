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

export const ResumeSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false)

  const handleDownloadPdf = () => {
    const a = document.createElement('a')
    a.href = '/Ansh_Sharma_Resume_Excel.pdf'
    a.download = 'Ansh_Sharma_Resume_Excel.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    setDownloadSuccess(true)
    setTimeout(() => setDownloadSuccess(false), 3000)
  }

  const handleDownloadTxt = () => {
    const a = document.createElement('a')
    a.href = '/Ansh_Sharma_Resume_Excel.txt'
    a.download = 'Ansh_Sharma_Resume_Excel.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <section id="resume" className="py-20 md:py-28 relative bg-[#101113]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="07"
          title="Curriculum Vitae & Resume"
          subtitle="A comprehensive record of academic training at DPGITM, AISECT Learn data science internship, IBM SkillsBuild cybersecurity certification, and core technical skills."
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
                  Verified Credentials
                </span>
                <span className="font-code text-xs text-[#A1A1AA]">
                  B.Tech AIML · Gurugram, Haryana
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-snug">
                Ready for Data Science, AI/ML, and Software Engineering opportunities.
              </h3>

              <p className="font-body text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
                Contains verified documentation of coursework at DPG Institute of Technology & Management, the 4-credit AISECT Learn Python for Data Science internship, and the IBM SkillsBuild Cybersecurity BootCamp certificate.
              </p>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F5F5F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#E53945]" />
                  <span>B.Tech AIML (SGPA: 7.4)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F5F5F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#E53945]" />
                  <span>AISECT Learn Data Science Intern</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F5F5F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#E53945]" />
                  <span>IBM SkillsBuild Cybersecurity Certified</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F5F5F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#E53945]" />
                  <span>Python, C, C++, Java, SQL & Pandas</span>
                </div>
              </div>

              {/* Download CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <Button
                  onClick={handleDownloadPdf}
                  variant="primary"
                  size="lg"
                  icon={<Download className="w-5 h-5" />}
                >
                  {downloadSuccess ? 'Downloaded Resume (PDF)!' : 'Download Resume (PDF)'}
                </Button>

                <Button
                  onClick={handleDownloadTxt}
                  variant="secondary"
                  size="lg"
                  icon={<FileText className="w-5 h-5" />}
                >
                  Download Resume (TXT)
                </Button>

                <Button
                  href="/Ansh_Sharma_Resume_Excel.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                  icon={<FileCheck className="w-5 h-5" />}
                >
                  View Official PDF
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
                      Ansh_Sharma_Resume_Excel.pdf
                    </span>
                  </div>
                  <span className="font-code text-[11px] text-[#A1A1AA]">
                    Gurugram, HR · Verified
                  </span>
                </div>

                {/* Simulated Resume Document Lines */}
                <div className="space-y-3 font-code text-xs text-[#A1A1AA] select-none opacity-85">
                  <div className="flex justify-between items-baseline">
                    <span className="text-white font-bold text-sm">ANSH SHARMA</span>
                    <span className="text-[#FF5964]">B.Tech AIML (7.4 SGPA)</span>
                  </div>
                  <div className="text-[11px] text-[#A1A1AA]">
                    +91 8368309766 · anshh1953@gmail.com · Gurugram, India
                  </div>
                  <div className="h-[1px] bg-[#303238]" />

                  <div>
                    <span className="text-[#F5F5F5] font-semibold uppercase text-[11px]">CAREER OBJECTIVE</span>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5 leading-relaxed">
                      B.Tech AIML student eager to apply technical & analytical skills in real-world data-driven solutions.
                    </p>
                  </div>

                  <div>
                    <span className="text-[#F5F5F5] font-semibold uppercase text-[11px]">EDUCATION</span>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5">
                      DPGITM, Gurugram (AIML, SGPA: 7.4) · Sharda Int'l School (CBSE XII: 64%, X: Passed)
                    </p>
                  </div>

                  <div>
                    <span className="text-[#F5F5F5] font-semibold uppercase text-[11px]">INTERNSHIP & CAPSTONE</span>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5">
                      AISECT Learn (45 Days / 120 Hours) · Capstone: Data Analysis using Pandas & Matplotlib
                    </p>
                  </div>

                  <div>
                    <span className="text-[#F5F5F5] font-semibold uppercase text-[11px]">TECHNICAL SKILLS</span>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5">
                      Python, C, C++, Java, SQL, Pandas, Matplotlib, NumPy, Power BI, Excel, React
                    </p>
                  </div>

                  <div>
                    <span className="text-[#F5F5F5] font-semibold uppercase text-[11px]">CERTIFICATIONS</span>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5">
                      AISECT Learn (ID: j82HZm6AKB) · IBM SkillsBuild Cybersecurity (ID: BHIBMCSB00747)
                    </p>
                  </div>

                  <div className="pt-2 text-center">
                    <span className="text-[10px] text-[#E53945] tracking-widest uppercase">
                      *** AUTHENTIC RESUME — ANSH SHARMA EXCEL ***
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
