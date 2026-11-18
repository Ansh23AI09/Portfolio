import React from 'react'

interface SkillTagProps {
  name: string
  highlight?: boolean
  size?: 'sm' | 'md'
}

export const SkillTag: React.FC<SkillTagProps> = ({
  name,
  highlight = false,
  size = 'md',
}) => {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-1.5 text-xs sm:text-sm'

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-code font-medium rounded-md transition-all duration-200 cursor-default border ${sizeClasses} ${
        highlight
          ? 'bg-[#E53945]/10 text-[#FF5964] border-[#E53945]/40 hover:bg-[#E53945]/20 hover:border-[#E53945]'
          : 'bg-[#1C1E22] text-[#F5F5F5] border-[#303238] hover:border-[#E53945]/60 hover:text-white hover:bg-[#25272C]'
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#E53945] opacity-75" />
      {name}
    </span>
  )
}
