import React, { useState, useEffect } from 'react'
import { Smartphone, Download, X } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export const InstallPWA: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if running in standalone mode (already installed on Android)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
      ('standalone' in navigator && (navigator as unknown as { standalone: boolean }).standalone)

    if (isStandalone) {
      return
    }

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      if (!isDismissed) {
        setIsVisible(true)
      }
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [isDismissed])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      setIsVisible(false)
      setDeferredPrompt(null)
    }
  }

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
  }

  if (!isVisible || !deferredPrompt) {
    return null
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm w-[calc(100vw-2.5rem)] animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-[#1C1E22]/95 backdrop-blur-md border border-[#E53945]/40 rounded-xl p-4 shadow-2xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#E53945]/15 border border-[#E53945]/30 flex items-center justify-center text-[#E53945] shrink-0">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading text-sm font-bold text-white leading-tight">
              Install Android App
            </h4>
            <p className="font-body text-[11px] text-[#A1A1AA] leading-normal">
              Fast, offline-ready & standalone home screen app.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleInstallClick}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#E53945] hover:bg-[#FF5964] text-white text-xs font-code font-semibold transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Install</span>
          </button>
          <button
            onClick={handleDismiss}
            aria-label="Dismiss install banner"
            className="p-1 rounded-md text-[#A1A1AA] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
