import { useState } from 'react'
import { ArrowLeft, Phone, MapPin, CheckCircle2, Calendar, Church } from 'lucide-react'
import { CHURCH_ZONES } from '../data'

export default function ConsultationScreen({ onBack }) {
  const [churchName, setChurchName] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [selectedZone, setSelectedZone] = useState(CHURCH_ZONES[0]?.name || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && (phone || churchName)) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-full flex-1 flex flex-col h-full min-h-0 bg-[#F4F5F6] p-6 text-center max-w-md mx-auto font-sans select-none items-center justify-center">
        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-5 shadow-sm text-[#E17335] animate-scale-in">
          <Calendar className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-black font-cabin text-[#111518] mb-2">Demo Session Confirmed!</h2>
        <p className="text-[#696767] text-xs leading-relaxed mb-6 max-w-xs">
          A dedicated AssessME Ministry Consultant will reach out to confirm your church onboarding demo and prepare your personalized ChMS sync sandbox.
        </p>
        <div className="w-full bg-white rounded-3xl border border-[#ECECEC] p-5 mb-6 shadow-card text-left space-y-3">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#E17335] flex-shrink-0" />
            <span className="text-xs font-semibold text-[#111518]">Complimentary 1-on-1 ChMS Workflow Audit</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#E17335] flex-shrink-0" />
            <span className="text-xs font-semibold text-[#111518]">Sample Pastor & Candidate Test Reports</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#E17335] flex-shrink-0" />
            <span className="text-xs font-semibold text-[#111518]">Zero Obligation Pastoral Consultation</span>
          </div>
        </div>
        <button
          onClick={onBack}
          className="w-full bg-[#E17335] hover:bg-[#EC600F] text-white font-bold py-3.5 rounded-2xl text-xs active:scale-95 transition-all shadow-orange cursor-pointer"
        >
          Return to Dashboard
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-full flex-1 flex flex-col h-full min-h-0 overflow-hidden bg-[#F4F5F6] font-sans select-none">
      {/* 1. Fixed Header (ALWAYS SHOWN AT TOP - NEVER MOVES) */}
      <header className="flex-shrink-0 sticky top-0 z-30 bg-gradient-to-b from-[#111518] to-[#1F2428] px-5 pt-5 md:pt-14 pb-6 relative overflow-hidden shadow-md">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#E17335]/15 -translate-y-12 translate-x-12" />
        <button
          onClick={onBack}
          className="relative w-8 h-8 bg-white/10 hover:bg-white/20 active:scale-95 rounded-xl flex items-center justify-center mb-4 cursor-pointer transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-white" />
        </button>
        <div className="relative">
          <p className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-1">
            FREE CHURCH MOBILIZATION SESSION
          </p>
          <h1 className="text-xl font-black font-cabin text-white mb-1.5 leading-tight">
            Schedule a 1-on-1 Pastoral Consultation
          </h1>
          <p className="text-slate-300 text-xs">
            Discover how AssessME integrates with Planning Center, Pushpay, and your discipleship track.
          </p>
        </div>
      </header>

      {/* 2. Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar scrollbar-hide p-4 space-y-4 pb-28">
        {/* What to expect */}
        <div className="bg-white rounded-3xl p-4 border border-[#ECECEC] shadow-card">
          <p className="text-xs font-black text-[#E17335] mb-3 uppercase tracking-wide">
            What's Included
          </p>
          <div className="space-y-2">
            {[
              'Comprehensive volunteer mobilization & burnout assessment',
              'Live Planning Center & Pushpay CCB API integration walkthrough',
              'Review of sample GraceGifts and ePersonality candidate reports',
              'Tailored church rollout roadmap & staff training guide',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E17335] flex-shrink-0" />
                <span className="text-xs text-[#111518] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Network selector */}
        <div>
          <p className="text-xs font-black text-[#111518] mb-1">Select Regional Network</p>
          <p className="text-[11px] text-[#696767] mb-2.5">Connect with a consultant in your ministry region</p>
          <div className="grid grid-cols-2 gap-2">
            {CHURCH_ZONES.slice(0, 4).map((zone) => (
              <button
                key={zone.name}
                type="button"
                onClick={() => setSelectedZone(zone.name)}
                className={`rounded-2xl p-2.5 border text-left transition-all cursor-pointer ${
                  selectedZone === zone.name
                    ? 'bg-[#E17335] border-[#E17335] text-white shadow-orange'
                    : 'bg-white border-slate-200 text-[#111518] hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <MapPin className={`w-3 h-3 flex-shrink-0 ${selectedZone === zone.name ? 'text-orange-200' : 'text-[#E17335]'}`} />
                  <span className="text-[11px] font-bold truncate">{zone.county}</span>
                </div>
                <span className={`text-[10px] block truncate ${selectedZone === zone.name ? 'text-orange-100' : 'text-slate-400'}`}>
                  {zone.activeChurches} active churches
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 bg-white p-4 rounded-3xl border border-[#ECECEC] shadow-card">
          <div>
            <label className="text-[11px] font-bold text-[#111518] mb-1 block">Church / Organization Name</label>
            <input
              type="text"
              value={churchName}
              onChange={e => setChurchName(e.target.value)}
              placeholder="e.g. Grace Fellowship Church"
              required
              className="w-full px-3.5 py-2.5 bg-[#F4F5F6] border border-slate-200 rounded-xl text-xs font-medium text-[#111518] placeholder-slate-400 outline-none focus:border-[#E17335] transition-colors"
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-[#111518] mb-1 block">Pastor / Leader Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your full name"
              required
              className="w-full px-3.5 py-2.5 bg-[#F4F5F6] border border-slate-200 rounded-xl text-xs font-medium text-[#111518] placeholder-slate-400 outline-none focus:border-[#E17335] transition-colors"
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-[#111518] mb-1 block">Contact Phone or Email</label>
            <input
              type="text"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="(800) 000-0000 or pastor@church.org"
              required
              className="w-full px-3.5 py-2.5 bg-[#F4F5F6] border border-slate-200 rounded-xl text-xs font-medium text-[#111518] placeholder-slate-400 outline-none focus:border-[#E17335] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#E17335] hover:bg-[#EC600F] text-white font-bold py-3.5 rounded-2xl text-xs active:scale-95 transition-all mt-2 cursor-pointer shadow-orange"
          >
            Confirm Free Consultation
          </button>
        </form>

        {/* Immediate Call Helpline */}
        <div className="text-center pt-2">
          <p className="text-[11px] text-[#696767] mb-1">Prefer to talk right now?</p>
          <a
            href="tel:8002445999"
            className="inline-flex items-center gap-1.5 text-[#E17335] hover:text-[#EC600F] font-black text-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>(800) 244-5999</span>
          </a>
        </div>
      </div>
    </div>
  )
}
