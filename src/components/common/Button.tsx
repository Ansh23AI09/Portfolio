import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  href?: string
  target?: string
  rel?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  href,
  target,
  rel,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium font-code tracking-wide transition-all duration-200 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E53945] focus:ring-offset-2 focus:ring-offset-[#101113] disabled:opacity-50 disabled:pointer-events-none select-none'

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  }

  const variantStyles = {
    primary:
      'bg-[#E53945] text-white hover:bg-[#FF5964] shadow-md shadow-[#E53945]/20 hover:shadow-lg hover:shadow-[#E53945]/30 active:scale-[0.98]',
    secondary:
      'bg-[#1C1E22] text-[#F5F5F5] border border-[#303238] hover:bg-[#25272C] hover:border-[#E53945]/60 hover:text-white active:scale-[0.98]',
    outline:
      'bg-transparent text-[#F5F5F5] border border-[#303238] hover:border-[#E53945] hover:text-[#FF5964] active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#1C1E22] active:scale-[0.98]',
  }

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {content}
      </a>
    )
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  )
}
