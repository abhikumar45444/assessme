import { useEffect } from 'react'
import { Sparkles, Users, Award } from 'lucide-react'

export default function SplashScreen({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDone()
    }, 1500)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div className="flex-1 w-full h-full bg-gradient-to-br from-[#0B192C] via-[#0F172A] to-[#0284C7] flex flex-col items-center justify-center p-6 text-white text-center select-none animate-fade-in relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Center animated logo */}
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl relative z-10 animate-bounce">
          <Sparkles className="w-10 h-10 text-sky-300" />
        </div>
        <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-blue-600 rounded-3xl opacity-40 blur-md animate-pulse" />
      </div>

      <div className="space-y-1 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-black uppercase tracking-widest text-sky-200 mb-2">
          <Users className="w-3 h-3" />
          <span>Ministry Human Resource Platform</span>
        </div>
        <h1 className="text-3xl font-black tracking-tight text-white drop-shadow-md">
          Assess<span className="text-[#38BDF8]">ME</span>.org
        </h1>
        <p className="text-xs text-sky-200/80 font-medium max-w-xs leading-relaxed">
          Mobilizing Disciples into Effective Ministry Service
        </p>
      </div>

      <div className="mt-12 flex items-center gap-1.5 text-[11px] text-sky-200/60 font-semibold">
        <Award className="w-3.5 h-3.5 text-sky-300" />
        <span>Trusted by 2,500+ Churches Worldwide</span>
      </div>

      <div className="absolute bottom-8 flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-white animate-ping" />
        <div className="w-2 h-2 rounded-full bg-white/40" />
        <div className="w-2 h-2 rounded-full bg-white/40" />
      </div>
    </div>
  )
}
