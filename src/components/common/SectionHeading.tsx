import React from 'react'

interface SectionHeadingProps {
  number: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  subtitle,
  align = 'left',
}) => {
  const isCenter = align === 'center'

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      <div className={`flex items-center gap-3 mb-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="font-code text-xs md:text-sm tracking-widest text-[#E53945] font-semibold uppercase">
          {number} //
        </span>
        <span className="h-[1px] w-8 bg-[#303238]" />
        <span className="font-code text-xs text-[#A1A1AA] tracking-wider uppercase">
          SYSTEM_SPEC
        </span>
      </div>

      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F5] tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-[#A1A1AA] text-base md:text-lg max-w-2xl leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      <div className={`mt-4 h-1 w-16 bg-[#E53945] rounded-full ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  )
}
