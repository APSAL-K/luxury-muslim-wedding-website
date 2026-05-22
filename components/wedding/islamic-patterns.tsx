export { IslamicPatterns, WeddingSiteBackground } from './wedding-site-background'

export function IslamicDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-12 px-4">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary to-transparent max-w-32" />
      <svg
        viewBox="0 0 60 60"
        className="w-12 h-12 text-secondary"
        fill="currentColor"
      >
        <path d="M30 0L35 15L50 15L38 24L42 40L30 30L18 40L22 24L10 15L25 15Z" />
        <circle cx="30" cy="30" r="8" fill="var(--emerald)" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary to-transparent max-w-32" />
    </div>
  )
}

export function GeometricBorder({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Top left corner */}
      <svg className="absolute top-0 left-0 w-20 h-20 text-secondary opacity-50" viewBox="0 0 80 80">
        <path d="M0 0H80V10H10V80H0V0Z" fill="currentColor" />
        <path d="M20 20H60V25H25V60H20V20Z" fill="currentColor" fillOpacity="0.5" />
      </svg>
      
      {/* Top right corner */}
      <svg className="absolute top-0 right-0 w-20 h-20 text-secondary opacity-50" viewBox="0 0 80 80">
        <path d="M80 0H0V10H70V80H80V0Z" fill="currentColor" />
        <path d="M60 20H20V25H55V60H60V20Z" fill="currentColor" fillOpacity="0.5" />
      </svg>
      
      {/* Bottom left corner */}
      <svg className="absolute bottom-0 left-0 w-20 h-20 text-secondary opacity-50" viewBox="0 0 80 80">
        <path d="M0 80H80V70H10V0H0V80Z" fill="currentColor" />
        <path d="M20 60H60V55H25V20H20V60Z" fill="currentColor" fillOpacity="0.5" />
      </svg>
      
      {/* Bottom right corner */}
      <svg className="absolute bottom-0 right-0 w-20 h-20 text-secondary opacity-50" viewBox="0 0 80 80">
        <path d="M80 80H0V70H70V0H80V80Z" fill="currentColor" />
        <path d="M60 60H20V55H55V20H60V60Z" fill="currentColor" fillOpacity="0.5" />
      </svg>
    </div>
  )
}

export function MughalArch({ children, className = "" }: { children?: React.ReactNode, className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-16 text-secondary" viewBox="0 0 200 50" fill="none">
        <path 
          d="M0 50 Q50 0 100 0 Q150 0 200 50" 
          stroke="currentColor" 
          strokeWidth="3" 
          fill="none"
        />
        <path 
          d="M20 50 Q60 10 100 10 Q140 10 180 50" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none"
          opacity="0.5"
        />
      </svg>
      {children}
    </div>
  )
}

export function CrescentMoon({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={`text-secondary ${className}`} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
