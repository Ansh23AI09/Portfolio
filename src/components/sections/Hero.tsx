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
  Workflow
} from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'
import { Button } from '../common/Button'

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<'python' | 'typescript' | 'logs'>('python')
  const [logCounter, setLogCounter] = useState(148)

  // Subtle live log ticker simulating active microservices
  useEffect(() => {
    const interval = setInterval(() => {
      setLogCounter((prev) => prev + 1)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const pythonSnippet = `@app.post("/api/v1/verify", response_model=VerificationReport)
async def verify_claim(payload: ClaimRequest, db: AsyncSession = Depends(get_db)):
    """Extract assertions & cross-reference source registries."""
    embedding = await encoder.encode_async(payload.claim_text)
    sources = await vector_index.similarity_search(embedding, k=5)
    
    # Run neural stance classification & confidence score
    analysis = await stance_model.evaluate(payload.claim_text, sources)
    
    return VerificationReport(
        confidence_score=analysis.score,  # 94.2% verified
        verified_sources=sources.citations,
        latency_ms=18.4
    )`

  const typescriptSnippet = `export interface VerificationReport {
  readonly claimId: UUID;
  readonly confidenceScore: number; // 0.0 - 1.0
  readonly verdict: 'AUTHENTIC' | 'DISPUTED' | 'UNVERIFIED';
  readonly citations: ReadonlyArray<SourceCitation>;
  readonly telemetry: {
    inferenceMs: number;
    embeddingTokens: number;
    cacheHit: boolean;
  };
}`

  const logLines = [
    `[INFO] 12:28:44 [uvicorn] Started server process [PID 4192]`,
    `[POST] /api/v1/verify 200 OK - 18.2ms (cache: MISS)`,
    `[SYNC] FAISS index synchronized with 52,140 registries`,
    `[POST] /api/v1/verify 200 OK - 2.1ms (cache: HIT_REDIS)`,
    `[HEALTH] Memory: 114MB / 1024MB | CPU: 1.4% | Thread pool: Healthy`,
    `[EVENT] Completed verification payload #${logCounter} with 0 errors`
  ]

  const handleCopyCode = () => {
    const textToCopy =
      activeTab === 'python'
        ? pythonSnippet
        : activeTab === 'typescript'
        ? typescriptSnippet
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
                ANSH.SHARMA / SOFTWARE ENGINEERING
              </span>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1E22] border border-[#303238] text-xs font-code text-[#A1A1AA]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                </span>
                <span>{personalInfo.status}</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-[1.12]"
            >
              Engineering Digital Experiences.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E53945] via-[#FF5964] to-[#F5F5F5]">
                Building Real Solutions.
              </span>
            </motion.h1>

            {/* Subtext - Human, Credible, Engineering-Grounded */}
            <motion.p
              variants={itemVariants}
              className="font-body text-[#A1A1AA] text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              I'm <strong className="text-white font-medium">Ansh Sharma</strong>, a Computer Science engineering student focused on building high-reliability distributed systems, clean full-stack web platforms, and applied AI applications that perform reliably under real-world conditions.
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
              <div className="flex items-center justify-between px-3 py-2.5 bg-[#101113]/95 border-b border-[#303238]">
                
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
                      <span>verify_api.py</span>
                      {activeTab === 'python' && (
                        <motion.div
                          layoutId="heroTabIndicator"
                          className="absolute inset-0 bg-[#25272C] rounded -z-10 border border-[#303238]"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                        />
                      )}
                    </button>

                    <button
                      onClick={() => setActiveTab('typescript')}
                      className={`relative px-2.5 py-1 rounded text-xs font-code flex items-center gap-1.5 transition-colors cursor-pointer ${
                        activeTab === 'typescript' ? 'text-white' : 'text-[#A1A1AA] hover:text-[#F5F5F5]'
                      }`}
                    >
                      <Workflow className="w-3 h-3 text-[#60A5FA]" />
                      <span>spec.ts</span>
                      {activeTab === 'typescript' && (
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
                      <span>telemetry.log</span>
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
                          <span className="text-[#FF5964]">@app.post</span>
                          <span className="text-[#A1A1AA]">(</span>
                          <span className="text-[#22C55E]">"/api/v1/verify"</span>
                          <span className="text-[#A1A1AA]">, response_model=VerificationReport)</span>
                        </div>
                        <div>
                          <span className="text-[#FF5964]">async def</span>{' '}
                          <span className="text-[#60A5FA]">verify_claim</span>
                          <span className="text-[#A1A1AA]">(payload: ClaimRequest, db: AsyncSession):</span>
                        </div>
                        <div className="text-[#A1A1AA] italic">
                          {'    '}{'# 1. Semantic embedding search across 50k+ registries'}
                        </div>
                        <div>
                          {'    '}<span>embedding = </span>
                          <span className="text-[#FF5964]">await</span>{' '}
                          <span>encoder.encode_async(payload.claim_text)</span>
                        </div>
                        <div>
                          {'    '}<span>sources = </span>
                          <span className="text-[#FF5964]">await</span>{' '}
                          <span>vector_index.similarity_search(embedding, k=5)</span>
                        </div>
                        <div className="py-0.5"></div>
                        <div className="text-[#A1A1AA] italic">
                          {'    '}{'# 2. Neural stance verification & scoring'}
                        </div>
                        <div>
                          {'    '}<span>verdict = </span>
                          <span className="text-[#FF5964]">await</span>{' '}
                          <span>stance_model.evaluate(payload.claim, sources)</span>
                        </div>
                        <div>
                          {'    '}<span className="text-[#FF5964]">return</span>{' '}
                          <span className="text-[#F5F5F5]">VerificationReport(</span>
                        </div>
                        <div>
                          {'        '}<span>confidence=</span>
                          <span className="text-[#FF5964] font-semibold">verdict.score</span>
                          <span className="text-[#A1A1AA]">,  # 94.2% verified</span>
                        </div>
                        <div>
                          {'        '}<span>citations=sources.citations, latency_ms=</span>
                          <span className="text-[#22C55E]">18.4</span>
                        </div>
                        <div>
                          {'    '}<span className="text-[#F5F5F5]">)</span>
                        </div>
                      </pre>
                    </motion.div>
                  )}

                  {activeTab === 'typescript' && (
                    <motion.div
                      key="typescript"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <pre className="space-y-1">
                        <div>
                          <span className="text-[#FF5964]">export interface</span>{' '}
                          <span className="text-[#60A5FA] font-semibold">VerificationReport</span>{' '}
                          <span className="text-[#A1A1AA]">{'{'}</span>
                        </div>
                        <div>
                          {'  '}<span className="text-[#FF5964]">readonly</span> claimId:{' '}
                          <span className="text-[#38BDF8]">UUID</span>;
                        </div>
                        <div>
                          {'  '}<span className="text-[#FF5964]">readonly</span> confidenceScore:{' '}
                          <span className="text-[#38BDF8]">number</span>;{' '}
                          <span className="text-[#A1A1AA]">// 0.0 - 1.0</span>
                        </div>
                        <div>
                          {'  '}<span className="text-[#FF5964]">readonly</span> verdict:{' '}
                          <span className="text-[#22C55E]">'AUTHENTIC'</span> |{' '}
                          <span className="text-[#F59E0B]">'DISPUTED'</span>;
                        </div>
                        <div>
                          {'  '}<span className="text-[#FF5964]">readonly</span> citations:{' '}
                          <span className="text-[#38BDF8]">ReadonlyArray</span>&lt;SourceCitation&gt;;
                        </div>
                        <div>
                          {'  '}<span className="text-[#FF5964]">readonly</span> telemetry: {'{'}
                        </div>
                        <div>
                          {'    '}inferenceMs:{' '}<span className="text-[#38BDF8]">number</span>;
                        </div>
                        <div>
                          {'    '}cacheHit:{' '}<span className="text-[#38BDF8]">boolean</span>;
                        </div>
                        <div>
                          {'  }'};
                        </div>
                        <div>
                          <span className="text-[#A1A1AA]">{'}'}</span>
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
                            line.includes('200 OK')
                              ? 'text-[#22C55E]'
                              : line.includes('HEALTH')
                              ? 'text-[#38BDF8]'
                              : line.includes('EVENT')
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
                    <span>Tests: 42 passed</span>
                  </span>
                  <span className="text-[#303238]">|</span>
                  <span className="text-[#A1A1AA] flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-[#E53945]" />
                    <span>Latency: 18.4ms</span>
                  </span>
                </div>

                <span className="text-[#A1A1AA] bg-[#25272C] px-2 py-0.5 rounded text-[11px] border border-[#303238]">
                  Python 3.12 · FastAPI
                </span>
              </div>
            </div>

            {/* Floating High-Tech Metrics Badges with subtle floating animation */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 bg-[#1C1E22]/95 backdrop-blur-md p-3 rounded-xl border border-[#303238] shadow-xl"
            >
              <div className="p-2 rounded-lg bg-[#E53945]/15 text-[#E53945]">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <p className="font-heading text-xs font-bold text-white">Full-Stack & Distributed</p>
                <p className="font-code text-[10px] text-[#A1A1AA]">Python · FastAPI · React · Docker</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="hidden sm:flex items-center gap-3 absolute -top-5 -right-3 bg-[#1C1E22]/95 backdrop-blur-md p-3 rounded-xl border border-[#303238] shadow-xl"
            >
              <div className="p-2 rounded-lg bg-[#22C55E]/15 text-[#22C55E]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="font-heading text-xs font-bold text-white">Engineering Quality</p>
                <p className="font-code text-[10px] text-[#A1A1AA]">Clean Architecture & Observability</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
