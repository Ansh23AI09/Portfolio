import React, { useEffect } from 'react'
import { X, ExternalLink, CheckCircle2, Activity, Cpu } from 'lucide-react'
import type { Project } from '../../types'
import { SkillTag } from './SkillTag'
import { Button } from './Button'
import { GithubIcon } from './Icons'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1C1E22] border border-[#303238] shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#25272C] text-[#A1A1AA] hover:text-white hover:bg-[#303238] transition-colors"
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
            <span className="px-3 py-1 rounded-full text-xs font-code font-semibold uppercase bg-[#25272C] text-[#F5F5F5] border border-[#303238]">
              Flagship Project
            </span>
          )}
        </div>

        {/* Title */}
        <h3 id="modal-project-title" className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="font-body text-base text-[#A1A1AA] mb-6 leading-relaxed">
          {project.tagline}
        </p>

        {/* Image Preview if available */}
        {project.previewImage && (
          <div className="relative mb-6 rounded-xl overflow-hidden border border-[#303238] bg-[#101113] aspect-video">
            <img
              src={project.previewImage}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101113] via-transparent to-transparent opacity-60" />
          </div>
        )}

        {/* Detailed Description */}
        <div className="mb-6">
          <h4 className="font-heading text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#E53945]" /> System Architecture & Overview
          </h4>
          <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
            {project.fullDescription || project.description}
          </p>
        </div>

        {/* Architecture Highlights */}
        {project.architectureHighlights && project.architectureHighlights.length > 0 && (
          <div className="mb-6">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#F5F5F5] mb-3">
              Engineering Highlights
            </h4>
            <div className="space-y-2.5">
              {project.architectureHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-[#A1A1AA] bg-[#25272C]/60 p-3 rounded-lg border border-[#303238]">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-6">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#F5F5F5] mb-3">
              Performance Telemetry
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#25272C] border border-[#303238] text-center">
                  <div className="font-heading text-xl font-bold text-[#FF5964]">{metric.value}</div>
                  <div className="font-code text-xs text-[#A1A1AA] mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#F5F5F5] mb-3">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <SkillTag key={tech} name={tech} size="sm" />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#303238]">
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
      </div>
    </div>
  )
}
