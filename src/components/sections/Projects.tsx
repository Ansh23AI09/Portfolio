import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ExternalLink,
  Maximize2,
  Activity,
  Sparkles,
  ArrowRight
} from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { SkillTag } from '../common/SkillTag'
import { Button } from '../common/Button'
import { ProjectModal } from '../common/ProjectModal'
import { SpotlightCard } from '../common/SpotlightCard'
import { GithubIcon } from '../common/Icons'
import { projects } from '../../data/portfolioData'
import type { Project } from '../../types'

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const featuredProject = projects.find((p) => p.featured) || projects[0]
  const secondaryProjects = projects.filter((p) => p.id !== featuredProject.id)

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="04"
          title="Featured Software Projects"
          subtitle="Real-world distributed systems, applied NLP engines, and developer-centric tools. Built with high standards for speed, security, and maintainability."
        />

        {/* Featured Flagship Project (VerifyWeb - Larger Card) */}
        {featuredProject && (
          <SpotlightCard className="mb-12 border-2 border-[#E53945]/40 hover:border-[#E53945] shadow-2xl relative group overflow-hidden">
            {/* Red Accent Top Glow Bar with subtle animated pulse */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#E53945] via-[#FF5964] to-[#E53945]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
              
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-code font-bold uppercase bg-[#E53945]/15 text-[#FF5964] border border-[#E53945]/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      FLAGSHIP SYSTEM
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-code font-semibold uppercase bg-[#25272C] text-[#22C55E] border border-[#303238]">
                      <Activity className="w-3.5 h-3.5" />
                      {featuredProject.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                    {featuredProject.title}
                  </h3>

                  {/* Tagline / Subtitle */}
                  <p className="font-body text-base sm:text-lg text-[#F5F5F5] font-medium mb-3">
                    {featuredProject.tagline}
                  </p>

                  {/* Description */}
                  <p className="font-body text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  {/* Key Metrics */}
                  {featuredProject.metrics && (
                    <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-[#101113]/80 border border-[#303238]">
                      {featuredProject.metrics.map((m, i) => (
                        <div key={i} className="text-center">
                          <p className="font-heading text-lg sm:text-2xl font-bold text-[#FF5964]">{m.value}</p>
                          <p className="font-code text-[11px] text-[#A1A1AA] uppercase mt-0.5">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((t) => (
                      <SkillTag key={t} name={t} size="sm" highlight={['Python', 'FastAPI', 'React', 'PyTorch'].includes(t)} />
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#303238]">
                  <Button
                    onClick={() => setSelectedProject(featuredProject)}
                    variant="primary"
                    size="md"
                    icon={<Maximize2 className="w-4 h-4" />}
                  >
                    View System Architecture
                  </Button>

                  {featuredProject.liveUrl && (
                    <Button
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="md"
                      icon={<ExternalLink className="w-4 h-4" />}
                    >
                      Live Demo
                    </Button>
                  )}

                  {featuredProject.githubUrl && (
                    <Button
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      size="md"
                      icon={<GithubIcon className="w-4 h-4" />}
                    >
                      Source Code
                    </Button>
                  )}
                </div>
              </div>

              {/* Right Visual / Preview (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden border border-[#303238] bg-[#101113] group-hover:border-[#E53945]/50 transition-colors cursor-pointer"
                  onClick={() => setSelectedProject(featuredProject)}
                >
                  <img
                    src={featuredProject.previewImage}
                    alt={featuredProject.title}
                    className="w-full h-72 sm:h-80 object-cover object-center transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101113] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="font-code text-xs px-2.5 py-1 rounded bg-[#101113]/90 text-white border border-[#303238] backdrop-blur-sm">
                      Interactive Analysis Preview
                    </span>
                    <span className="p-2 rounded-lg bg-[#E53945] text-white shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              </div>

            </div>
          </SpotlightCard>
        )}

        {/* Secondary Projects Grid (3-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <SpotlightCard
              key={project.id}
              className="flex flex-col justify-between p-6 shadow-lg group"
            >
              <div>
                {/* Image thumbnail */}
                {project.previewImage && (
                  <div
                    className="relative mb-4 rounded-xl overflow-hidden border border-[#303238] bg-[#101113] aspect-video cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E22] via-transparent to-transparent opacity-60" />
                  </div>
                )}

                {/* Status & Category */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-code text-xs px-2.5 py-0.5 rounded-full bg-[#25272C] text-[#A1A1AA] border border-[#303238]">
                    {project.status}
                  </span>
                  {project.metrics && project.metrics[0] && (
                    <span className="font-code text-xs font-bold text-[#FF5964]">
                      {project.metrics[0].value}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h4 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-[#FF5964] transition-colors">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm text-[#A1A1AA] mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <SkillTag key={tech} name={tech} size="sm" />
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="font-code text-xs text-[#A1A1AA] px-1.5 py-1">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer with Details / Links */}
              <div className="flex items-center justify-between pt-4 border-t border-[#303238]/60">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="font-code text-xs font-semibold text-[#F5F5F5] group-hover:text-[#FF5964] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Inspect Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Github Repository"
                      className="p-1.5 rounded-md bg-[#25272C] text-[#A1A1AA] hover:text-white hover:bg-[#303238] transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Live Demo"
                      className="p-1.5 rounded-md bg-[#25272C] text-[#A1A1AA] hover:text-[#FF5964] hover:bg-[#303238] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
