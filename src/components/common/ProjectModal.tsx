import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ExternalLink,
  CheckCircle2,
  Activity,
  Cpu,
  Sparkles,
  Server
} from 'lucide-react'
import type { Project } from '../../types'
import { SkillTag } from './SkillTag'
import { Button } from './Button'
import { GithubIcon } from './Icons'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeModalTab, setActiveModalTab] = useState<'overview' | 'architecture' | 'metrics'>('overview')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#1C1E22] border border-[#303238] shadow-2xl p-6 sm:p-8 text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-5 right-5 p-2 rounded-xl bg-[#25272C] text-[#A1A1AA] hover:text-white hover:bg-[#303238] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header tags */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4 pr-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-code font-semibold uppercase bg-[#E53945]/15 text-[#FF5964] border border-[#E53945]/30">
              <Activity className="w-3.5 h-3.5" />
              {project.status}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-code font-semibold uppercase bg-[#25272C] text-[#F5F5F5] border border-[#303238]">
                <Sparkles className="w-3 h-3 text-[#E53945]" />
                Flagship Project
              </span>
            )}
          </div>

          {/* Title */}
          <h3 id="modal-project-title" className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
            {project.title}
          </h3>

          <p className="font-body text-base text-[#A1A1AA] mb-6 leading-relaxed">
            {project.tagline}
          </p>

          {/* Modal Tab Controls */}
          <div className="flex items-center gap-2 mb-6 pb-2 border-b border-[#303238]">
            <button
              onClick={() => setActiveModalTab('overview')}
              className={`relative px-3.5 py-1.5 rounded-lg font-code text-xs sm:text-sm transition-colors cursor-pointer ${
                activeModalTab === 'overview' ? 'text-white font-semibold' : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              Overview & Motivation
              {activeModalTab === 'overview' && (
                <motion.div
                  layoutId="modalTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E53945] rounded-full"
                />
              )}
            </button>

            <button
              onClick={() => setActiveModalTab('architecture')}
              className={`relative px-3.5 py-1.5 rounded-lg font-code text-xs sm:text-sm transition-colors cursor-pointer ${
                activeModalTab === 'architecture' ? 'text-white font-semibold' : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              System Architecture
              {activeModalTab === 'architecture' && (
                <motion.div
                  layoutId="modalTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E53945] rounded-full"
                />
              )}
            </button>

            {project.metrics && (
              <button
                onClick={() => setActiveModalTab('metrics')}
                className={`relative px-3.5 py-1.5 rounded-lg font-code text-xs sm:text-sm transition-colors cursor-pointer ${
                  activeModalTab === 'metrics' ? 'text-white font-semibold' : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                Telemetry & Benchmarks
                {activeModalTab === 'metrics' && (
                  <motion.div
                    layoutId="modalTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E53945] rounded-full"
                  />
                )}
              </button>
            )}
          </div>

          {/* Tab Content */}
          <div className="min-h-[220px]">
            {activeModalTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Image Preview */}
                {project.previewImage && (
                  <div className="relative rounded-2xl overflow-hidden border border-[#303238] bg-[#101113] aspect-video">
                    <img
                      src={project.previewImage}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101113] via-transparent to-transparent opacity-60" />
                  </div>
                )}

                <div>
                  <h4 className="font-heading text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#E53945]" /> Purpose & Real-World Impact
                  </h4>
                  <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
                    {project.fullDescription || project.description}
                  </p>
                </div>
              </motion.div>
            )}

            {activeModalTab === 'architecture' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="p-4 rounded-xl bg-[#101113] border border-[#303238] text-xs font-code text-[#A1A1AA] space-y-1">
                  <div className="text-white font-semibold flex items-center gap-1.5 mb-2">
                    <Server className="w-4 h-4 text-[#E53945]" />
                    Key Architectural Decisions
                  </div>
                  <p>• Asynchronous non-blocking I/O using Python FastAPI & Celery background task workers.</p>
                  <p>• FAISS vector indexing with dense semantic embeddings for sub-20ms nearest-neighbor lookups.</p>
                  <p>• Multi-tiered caching layer with Redis to serve verified queries at zero compute cost.</p>
                </div>

                {project.architectureHighlights && project.architectureHighlights.length > 0 && (
                  <div className="space-y-2.5">
                    {project.architectureHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-[#A1A1AA] bg-[#25272C]/70 p-3 rounded-xl border border-[#303238]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {activeModalTab === 'metrics' && project.metrics && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#101113] border border-[#303238] text-center">
                      <div className="font-heading text-2xl font-bold text-[#FF5964]">{metric.value}</div>
                      <div className="font-code text-xs text-[#A1A1AA] mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#25272C]/50 border border-[#303238] text-xs text-[#A1A1AA] leading-relaxed">
                  Benchmarks measured over 1,000 synthetic requests with p95 latency under 180ms across all semantic claim verification pipelines.
                </div>
              </motion.div>
            )}
          </div>

          {/* Technologies */}
          <div className="mt-8 pt-6 border-t border-[#303238]">
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-3">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <SkillTag key={tech} name={tech} size="sm" />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-[#303238]">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Live Demo
              </Button>
            )}

            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
                icon={<GithubIcon className="w-4 h-4" />}
              >
                View Repository
              </Button>
            )}

            <Button variant="ghost" size="md" onClick={onClose} className="ml-auto">
              Close
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
