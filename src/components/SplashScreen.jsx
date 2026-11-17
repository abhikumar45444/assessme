import { useEffect } from 'react'
import { Sparkles, Users, Award } from 'lucide-react'
import { getAssetUrl } from '../utils/assets'

export default function SplashScreen({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDone()
    }, 1500)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div className="flex-1 w-full h-full bg-[#111518] flex flex-col items-center justify-center p-6 text-white text-center select-none animate-fade-in relative overflow-hidden">
      {/* Background glow in warm terracotta orange */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-[#E17335]/15 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-[#E17335]/20 blur-3xl" />

      {/* Official AssessME Logo Showcase */}
      <div className="relative mb-6">
        <div className="p-4 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl relative z-10">
          <img
            src={getAssetUrl('/logo-white.png')}
            alt="AssessME.org"
            className="h-10 w-auto object-contain drop-shadow-md"
          />
        </div>
        <div className="absolute -inset-2 bg-gradient-to-r from-[#E17335] to-[#EC600F] rounded-3xl opacity-30 blur-lg animate-pulse" />
      </div>

      <div className="space-y-1.5 relative z-10 max-w-xs">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-black uppercase tracking-widest text-orange-400 mb-2">
          <Users className="w-3 h-3" />
          <span>Christian & Church Human Resources</span>
        </div>
        <h2 className="text-sm font-bold font-cabin text-slate-200">
          Discovering Authentic Ministry Fit
        </h2>
        <p className="text-xs text-slate-400 font-medium leading-relaxed">
          Our assessments help churches MAKE & MOBILIZE more disciples of Jesus Christ!
        </p>
      </div>

      <div className="mt-12 flex items-center gap-1.5 text-[11px] text-slate-400 font-semibold">
        <Award className="w-3.5 h-3.5 text-[#E17335]" />
        <span>Trusted by Thousands of Growing Churches</span>
      </div>

      <div className="absolute bottom-8 flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#E17335] animate-ping" />
        <div className="w-2 h-2 rounded-full bg-white/40" />
        <div className="w-2 h-2 rounded-full bg-white/40" />
      </div>
    </div>
  )
}
