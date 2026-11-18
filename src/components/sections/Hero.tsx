import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Activity,
  Code2,
  Cpu,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  FileCode,
  FileTerminal,
  ShieldCheck,
  MapPin
} from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'
import { Button } from '../common/Button'

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<'python' | 'security' | 'logs'>('python')
  const [logCounter, setLogCounter] = useState(148)

  // Subtle live log ticker simulating active microservices
  useEffect(() => {
    const interval = setInterval(() => {
      setLogCounter((prev) => prev + 1)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const pythonSnippet = `import pandas as pd
import matplotlib.pyplot as plt

def analyze_and_visualize(dataset_path: str):
    """Clean data & discover patterns using Pandas & Matplotlib."""
    df = pd.read_csv(dataset_path).dropna()
    summary = df.describe().to_dict()
    
    # Generate distribution & trend analysis
    plt.figure(figsize=(10, 5))
    plt.plot(df['timestamp'], df['metric_val'], color='#E53945')
    plt.title("Exploratory Data Analysis — Trends & Correlations")
    
    return {"status": "SUCCESS", "rows_cleaned": len(df), "insights": summary}`

  const securitySnippet = `# IBM SkillsBuild Cybersecurity Audit Script
def audit_security_posture(network_config: dict) -> dict:
    """Evaluate port states, hash integrity & firewall rules."""
    vulnerabilities = []
    if network_config.get("unencrypted_protocols"):
        vulnerabilities.append("WARN: Insecure protocol detected")
        
    return {
        "candidate": "Ansh Sharma",
        "cert_id": "BHIBMCSB00747",
        "status": "SECURE",
        "posture_score": 98.5
    }`

  const logLines = [
    `[INFO] AISECT Learn: Loaded Python Data Science environment`,
    `[PANDAS] Ingested 52,140 rows — 0 missing values after cleanup`,
    `[MATPLOTLIB] Rendered trend correlation matrix (figure_01.png)`,
    `[IBM_SECURITY] Verified certificate ID: BHIBMCSB00747`,
    `[DPGITM] Academic Specialization: B.Tech AIML (SGPA: 7.4)`,
    `[STATUS] Ready for Data Science & AIML engineering roles #${logCounter}`
  ]

  const handleCopyCode = () => {
    const textToCopy =
      activeTab === 'python'
        ? pythonSnippet
        : activeTab === 'security'
        ? securitySnippet
        : logLines.join('\n')
    navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center pt-8 pb-16 md:py-24 overflow-hidden tech-grid-pattern red-ambient-glow"
    >
      {/* Background radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#101113]/70 to-[#101113] pointer-events-none" />

      {/* Decorative accent orb */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E53945]/15 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Human Engineering Introduction & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Top Identity & Status Badge */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <span className="font-code text-xs md:text-sm font-semibold tracking-wider text-[#E53945] uppercase px-3 py-1 rounded-md bg-[#E53945]/10 border border-[#E53945]/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E53945] animate-pulse" />
                ANSH.SHARMA / B.TECH AIML
              </span>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1E22] border border-[#303238] text-xs font-code text-[#A1A1AA]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                </span>
                <span>{personalInfo.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-code text-[#A1A1AA]">
                <MapPin className="w-3.5 h-3.5 text-[#E53945]" />
                <span>Gurugram, Haryana</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-[1.12]"
            >
              Engineering Intelligent Systems.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E53945] via-[#FF5964] to-[#F5F5F5]">
                Delivering Data Solutions.
              </span>
            </motion.h1>

            {/* Subtext - Authentic Bio from Resume */}
            <motion.p
              variants={itemVariants}
              className="font-body text-[#A1A1AA] text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              I'm <strong className="text-white font-medium">Ansh Sharma</strong>, a B.Tech student specializing in <strong>Artificial Intelligence & Machine Learning (AIML)</strong> at <strong className="text-white">DPG Institute of Technology and Management</strong>. Eager to apply technical skills in Python, data analysis, and cybersecurity to build innovative real-world projects.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
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
            </motion.div>

            {/* Technology Highlights Bar */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#303238]/80 flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2.5 font-code text-xs text-[#A1A1AA] tracking-wider">
                <Code2 className="w-4 h-4 text-[#E53945]" />
                <span>{personalInfo.techHighlights.join(' · ')}</span>
              </div>

              <div className="font-code text-xs font-semibold text-[#A1A1AA] flex items-center gap-1.5">
                <span className="text-[#E53945]">01</span>
                <span>/</span>
                <span>09</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Code Terminal & Motion Graphics (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' as const }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient decorative border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#E53945]/30 to-[#303238]/20 rounded-2xl blur-lg opacity-60 transition duration-1000 pointer-events-none" />

            {/* Terminal Window Container */}
            <div className="relative rounded-2xl bg-[#1C1E22] border border-[#303238] shadow-2xl overflow-hidden">
              
              {/* Window Header with Tabs */}
              <div className="relative z-20 flex items-center justify-between px-3 py-2.5 bg-[#101113]/95 border-b border-[#303238]">
                
                {/* Traffic lights & tabs */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 pl-1">
                    <div className="w-3 h-3 rounded-full bg-[#E53945]/80 hover:opacity-100 transition-opacity" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80 hover:opacity-100 transition-opacity" />
                    <div className="w-3 h-3 rounded-full bg-[#22C55E]/80 hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 ml-2">
                    <button
                      onClick={() => setActiveTab('python')}
                      className={`relative px-2.5 py-1 rounded text-xs font-code flex items-center gap-1.5 transition-colors cursor-pointer ${
                        activeTab === 'python' ? 'text-white' : 'text-[#A1A1AA] hover:text-[#F5F5F5]'
                      }`}
                    >
                      <FileCode className="w-3 h-3 text-[#E53945]" />
                      <span>data_analysis.py</span>
                      {activeTab === 'python' && (
                        <motion.div
                          layoutId="heroTabIndicator"
                          className="absolute inset-0 bg-[#25272C] rounded -z-10 border border-[#303238]"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                        />
                      )}
                    </button>

                    <button
                      onClick={() => setActiveTab('security')}
                      className={`relative px-2.5 py-1 rounded text-xs font-code flex items-center gap-1.5 transition-colors cursor-pointer ${
                        activeTab === 'security' ? 'text-white' : 'text-[#A1A1AA] hover:text-[#F5F5F5]'
                      }`}
                    >
                      <ShieldCheck className="w-3 h-3 text-[#60A5FA]" />
                      <span>ibm_audit.py</span>
                      {activeTab === 'security' && (
                        <motion.div
                          layoutId="heroTabIndicator"
                          className="absolute inset-0 bg-[#25272C] rounded -z-10 border border-[#303238]"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                        />
                      )}
                    </button>

                    <button
                      onClick={() => setActiveTab('logs')}
                      className={`relative px-2.5 py-1 rounded text-xs font-code hidden sm:flex items-center gap-1.5 transition-colors cursor-pointer ${
                        activeTab === 'logs' ? 'text-white' : 'text-[#A1A1AA] hover:text-[#F5F5F5]'
                      }`}
                    >
                      <FileTerminal className="w-3 h-3 text-[#22C55E]" />
                      <span>output.log</span>
                      {activeTab === 'logs' && (
                        <motion.div
                          layoutId="heroTabIndicator"
                          className="absolute inset-0 bg-[#25272C] rounded -z-10 border border-[#303238]"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                        />
                      )}
                    </button>
                  </div>
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-2">
                  <span className="font-code text-[11px] text-[#A1A1AA] px-2 py-0.5 rounded bg-[#25272C] border border-[#303238]">
                    main*
                  </span>
                  <button
                    onClick={handleCopyCode}
                    aria-label="Copy code snippet"
                    className="p-1 rounded text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#22C55E]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Code Content with AnimatePresence */}
              <div className="p-4 sm:p-5 font-code text-xs text-[#F5F5F5] overflow-x-auto leading-relaxed bg-[#101113]/85 min-h-[260px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {activeTab === 'python' && (
                    <motion.div
                      key="python"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <pre className="space-y-1">
                        <div>
                          <span className="text-[#FF5964]">import</span>{' '}
                          <span className="text-[#F5F5F5]">pandas</span>{' '}
                          <span className="text-[#FF5964]">as</span>{' '}
                          <span className="text-[#60A5FA]">pd</span>
                        </div>
                        <div>
                          <span className="text-[#FF5964]">import</span>{' '}
                          <span className="text-[#F5F5F5]">matplotlib.pyplot</span>{' '}
                          <span className="text-[#FF5964]">as</span>{' '}
                          <span className="text-[#60A5FA]">plt</span>
                        </div>
                        <div className="py-0.5"></div>
                        <div>
                          <span className="text-[#FF5964]">def</span>{' '}
                          <span className="text-[#60A5FA]">analyze_dataset</span>
                          <span className="text-[#A1A1AA]">(file_path: str):</span>
                        </div>
                        <div className="text-[#A1A1AA] italic">
                          {'    '}{'# 1. Clean & process structured data (AISECT Learn Capstone)'}
                        </div>
                        <div>
                          {'    '}<span>df = pd.read_csv(file_path).dropna()</span>
                        </div>
                        <div>
                          {'    '}<span>summary = df.describe().to_dict()</span>
                        </div>
                        <div className="py-0.5"></div>
                        <div className="text-[#A1A1AA] italic">
                          {'    '}{'# 2. Extract trends and visual distributions'}
                        </div>
                        <div>
                          {'    '}<span>plt.figure(figsize=(10, 5))</span>
                        </div>
                        <div>
                          {'    '}<span>plt.plot(df[</span>
                          <span className="text-[#22C55E]">'metric'</span>
                          <span>], color=</span>
                          <span className="text-[#FF5964]">'#E53945'</span>
                          <span>)</span>
                        </div>
                        <div>
                          {'    '}<span className="text-[#FF5964]">return</span>{' '}
                          <span>{'{'}</span>
                          <span className="text-[#22C55E]">'rows'</span>: len(df),{' '}
                          <span className="text-[#22C55E]">'status'</span>:{' '}
                          <span className="text-[#22C55E]">'CLEANED'</span>
                          <span>{'}'}</span>
                        </div>
                      </pre>
                    </motion.div>
                  )}

                  {activeTab === 'security' && (
                    <motion.div
                      key="security"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <pre className="space-y-1">
                        <div>
                          <span className="text-[#A1A1AA] italic"># IBM SkillsBuild Cybersecurity BootCamp</span>
                        </div>
                        <div>
                          <span className="text-[#FF5964]">def</span>{' '}
                          <span className="text-[#60A5FA]">audit_security_posture</span>
                          <span className="text-[#A1A1AA]">(network_config: dict):</span>
                        </div>
                        <div>
                          {'    '}<span>vulnerabilities = []</span>
                        </div>
                        <div>
                          {'    '}<span className="text-[#FF5964]">if</span> network_config.get(
                          <span className="text-[#22C55E]">"unencrypted_ports"</span>):
                        </div>
                        <div>
                          {'        '}<span>vulnerabilities.append(</span>
                          <span className="text-[#FF5964]">"WARN: Insecure Port"</span>
                          <span>)</span>
                        </div>
                        <div className="py-0.5"></div>
                        <div>
                          {'    '}<span className="text-[#FF5964]">return</span> {'{'}
                        </div>
                        <div>
                          {'        '}<span className="text-[#22C55E]">"engineer"</span>:{' '}
                          <span className="text-[#F5F5F5]">"Ansh Sharma"</span>,
                        </div>
                        <div>
                          {'        '}<span className="text-[#22C55E]">"cert_id"</span>:{' '}
                          <span className="text-[#38BDF8]">"BHIBMCSB00747"</span>,
                        </div>
                        <div>
                          {'        '}<span className="text-[#22C55E]">"score"</span>:{' '}
                          <span className="text-[#22C55E]">"100% Passed"</span>
                        </div>
                        <div>
                          {'    }'}
                        </div>
                      </pre>
                    </motion.div>
                  )}

                  {activeTab === 'logs' && (
                    <motion.div
                      key="logs"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-1.5"
                    >
                      {logLines.map((line, i) => (
                        <div
                          key={i}
                          className={`text-xs ${
                            line.includes('PANDAS')
                              ? 'text-[#22C55E]'
                              : line.includes('DPGITM')
                              ? 'text-[#38BDF8]'
                              : line.includes('IBM_SECURITY')
                              ? 'text-[#FF5964]'
                              : 'text-[#A1A1AA]'
                          }`}
                        >
                          <span className="text-[#A1A1AA] mr-2">$</span>
                          {line}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Terminal Bottom Telemetry Tray */}
              <div className="px-4 py-2.5 bg-[#1C1E22] border-t border-[#303238] flex flex-wrap items-center justify-between gap-2 text-xs font-code">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-[#22C55E]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Python 3.12 · Pandas · NumPy</span>
                  </span>
                  <span className="text-[#303238]">|</span>
                  <span className="text-[#A1A1AA] flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-[#E53945]" />
                    <span>SGPA: 7.4</span>
                  </span>
                </div>

                <span className="text-[#A1A1AA] bg-[#25272C] px-2 py-0.5 rounded text-[11px] border border-[#303238]">
                  AIML @ DPGITM
                </span>
              </div>
            </div>

            {/* Floating High-Tech Metrics Badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 bg-[#1C1E22]/95 backdrop-blur-md p-3 rounded-xl border border-[#303238] shadow-xl"
            >
              <div className="p-2 rounded-lg bg-[#E53945]/15 text-[#E53945]">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <p className="font-heading text-xs font-bold text-white">Data Science & AIML</p>
                <p className="font-code text-[10px] text-[#A1A1AA]">Pandas · Matplotlib · Power BI · SQL</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="hidden sm:flex items-center gap-3 absolute -top-8 -right-2 bg-[#1C1E22]/95 backdrop-blur-md p-3 rounded-xl border border-[#303238] shadow-xl pointer-events-none select-none z-10"
            >
              <div className="p-2 rounded-lg bg-[#22C55E]/15 text-[#22C55E]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="font-heading text-xs font-bold text-white">IBM & AISECT Certified</p>
                <p className="font-code text-[10px] text-[#A1A1AA]">ID: BHIBMCSB00747 & j82HZm6AKB</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
