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

  const handleDownload = () => {
    const a = document.createElement('a')
    a.href = '/Ansh_Sharma_Resume.pdf'
    a.download = 'Ansh_Sharma_Resume.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    setDownloadSuccess(true)
    setTimeout(() => setDownloadSuccess(false), 3000)
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
                  onClick={handleDownload}
                  variant="primary"
                  size="lg"
                  icon={<Download className="w-5 h-5" />}
                >
                  {downloadSuccess ? 'Downloaded Resume (PDF)!' : 'Download Resume (PDF)'}
                </Button>

                <Button
                  href="/Ansh_Sharma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="lg"
                  icon={<FileCheck className="w-5 h-5" />}
                >
                  View Official PDF
                </Button>

                <Button
                  href="/Ansh_Sharma_Software_Engineer_Resume.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                  icon={<FileText className="w-5 h-5" />}
                >
                  ATS Text (.txt)
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
                    Gurugram, HR · Verified
                  </span>
                </div>

                {/* Simulated Resume Document Lines */}
                <div className="space-y-3 font-code text-xs text-[#A1A1AA] select-none opacity-85">
                  <div className="flex justify-between items-baseline">
                    <span className="text-white font-bold text-sm">ANSH SHARMA</span>
                    <span className="text-[#FF5964]">B.Tech AIML (7.4 SGPA)</span>
                  </div>
                  <div className="h-[1px] bg-[#303238]" />

                  <div>
                    <span className="text-[#F5F5F5] font-semibold uppercase text-[11px]">EDUCATION</span>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5">
                      DPG Institute of Technology and Management, Gurugram
                    </p>
                  </div>

                  <div>
                    <span className="text-[#F5F5F5] font-semibold uppercase text-[11px]">INTERNSHIP</span>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5">
                      AISECT Learn — Python for Data Science (4 Credits / 120 Hours)
                    </p>
                  </div>

                  <div>
                    <span className="text-[#F5F5F5] font-semibold uppercase text-[11px]">CERTIFICATION</span>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5">
                      IBM SkillsBuild Cybersecurity BootCamp (ID: BHIBMCSB00747)
                    </p>
                  </div>

                  <div>
                    <span className="text-[#F5F5F5] font-semibold uppercase text-[11px]">TECH STACK</span>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5">
                      Python, C, C++, Java, SQL, Pandas, Matplotlib, NumPy, Power BI, Excel
                    </p>
                  </div>

                  <div className="pt-2 text-center">
                    <span className="text-[10px] text-[#E53945] tracking-widest uppercase">
                      *** VERIFIED CANDIDATE PROFILE ***
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
