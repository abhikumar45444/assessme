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
      <div className="min-h-full flex-1 bg-[#F8FAFC] flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto font-sans select-none">
        <div className="w-20 h-20 bg-[#059669] rounded-full flex items-center justify-center mb-5 shadow-lg shadow-emerald-900/20 animate-scale-in">
          <Calendar className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-2xl font-black text-[#0B192C] mb-2">Demo Session Confirmed!</h2>
        <p className="text-slate-500 text-xs leading-relaxed mb-6 max-w-xs">
          A dedicated AssessME Ministry Consultant will reach out to confirm your church onboarding demo and prepare your personalized ChMS sync sandbox.
        </p>
        <div className="w-full bg-white rounded-3xl border border-slate-100 p-5 mb-6 shadow-xs text-left space-y-3">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#059669] flex-shrink-0" />
            <span className="text-xs font-semibold text-[#0B192C]">Complimentary 1-on-1 ChMS Workflow Audit</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#059669] flex-shrink-0" />
            <span className="text-xs font-semibold text-[#0B192C]">Sample Pastor & Candidate Test Reports</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#059669] flex-shrink-0" />
            <span className="text-xs font-semibold text-[#0B192C]">Zero Obligation Pastoral Consultation</span>
          </div>
        </div>
        <button
          onClick={onBack}
          className="w-full bg-[#0284C7] hover:bg-[#0369a1] text-white font-bold py-3.5 rounded-2xl text-xs active:scale-95 transition-all shadow-md cursor-pointer"
        >
          Return to Dashboard
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-full flex-1 bg-[#F8FAFC] pb-24 font-sans select-none overflow-y-auto no-scrollbar scrollbar-hide">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0B192C] to-[#0F172A] px-5 pt-5 md:pt-14 pb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-sky-500/10 -translate-y-12 translate-x-12" />
        <button
          onClick={onBack}
          className="relative w-8 h-8 bg-white/10 hover:bg-white/20 active:scale-95 rounded-xl flex items-center justify-center mb-6 cursor-pointer transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-white" />
        </button>
        <div className="relative">
          <p className="text-sky-300 text-[10px] font-bold uppercase tracking-widest mb-1">
            FREE CHURCH MOBILIZATION SESSION
          </p>
          <h1 className="text-2xl font-black text-white mb-2 leading-tight">
            Schedule a 1-on-1 Pastoral Consultation
          </h1>
          <p className="text-sky-200/80 text-xs">
            Discover how AssessME integrates with Planning Center, Pushpay, and your discipleship track.
          </p>
        </div>
      </div>

      <div className="px-5 py-6 space-y-5">
        {/* What to expect */}
        <div className="bg-[#F0F9FF] rounded-3xl p-4 border border-sky-100">
          <p className="text-xs font-black text-[#0B192C] mb-3 uppercase tracking-wide">
            What's Included
          </p>
          <div className="space-y-2">
            {[
              'Comprehensive volunteer mobilization & burnout assessment',
              'Live Planning Center & Pushpay API integration walkthrough',
              'Review of sample GraceGifts and ePersonality candidate reports',
              'Tailored church rollout roadmap & staff training guide',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0" />
                <span className="text-xs text-[#0B192C] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ministry Zone selector */}
        <div>
          <p className="text-xs font-black text-[#0B192C] mb-1">Select Regional Network</p>
          <p className="text-[11px] text-slate-400 mb-2.5">Connect with a consultant in your ministry region</p>
          <div className="grid grid-cols-2 gap-2">
            {CHURCH_ZONES.slice(0, 4).map((zone) => (
              <button
                key={zone.name}
                type="button"
                onClick={() => setSelectedZone(zone.name)}
                className={`rounded-2xl p-2.5 border text-left transition-all cursor-pointer ${
                  selectedZone === zone.name
                    ? 'bg-[#0284C7] border-[#0284C7] text-white shadow-xs'
                    : 'bg-white border-slate-200 text-[#0B192C] hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <MapPin className={`w-3 h-3 flex-shrink-0 ${selectedZone === zone.name ? 'text-sky-200' : 'text-[#0284C7]'}`} />
                  <span className="text-[11px] font-bold truncate">{zone.county}</span>
                </div>
                <span className={`text-[10px] block truncate ${selectedZone === zone.name ? 'text-sky-200' : 'text-slate-400'}`}>
                  {zone.activeChurches} active churches
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 bg-white p-4 rounded-3xl border border-slate-100 shadow-xs">
          <div>
            <label className="text-[11px] font-bold text-[#0B192C] mb-1 block">Church / Organization Name</label>
            <input
              type="text"
              value={churchName}
              onChange={e => setChurchName(e.target.value)}
              placeholder="e.g. Grace Fellowship Church"
              required
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-[#0B192C] placeholder-slate-400 outline-none focus:border-[#0284C7] transition-colors"
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-[#0B192C] mb-1 block">Pastor / Leader Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your full name"
              required
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-[#0B192C] placeholder-slate-400 outline-none focus:border-[#0284C7] transition-colors"
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-[#0B192C] mb-1 block">Contact Phone or Email</label>
            <input
              type="text"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="(800) 000-0000 or pastor@church.org"
              required
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-[#0B192C] placeholder-slate-400 outline-none focus:border-[#0284C7] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0284C7] hover:bg-[#0369a1] text-white font-bold py-3.5 rounded-2xl text-xs active:scale-95 transition-all mt-2 cursor-pointer shadow-md"
          >
            Confirm Free Consultation
          </button>
        </form>

        {/* Immediate Call Helpline */}
        <div className="text-center pt-2">
          <p className="text-[11px] text-slate-400 mb-1">Prefer to talk right now?</p>
          <a
            href="tel:8002445999"
            className="inline-flex items-center gap-1.5 text-[#0284C7] hover:text-[#0369a1] font-black text-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>(800) 244-5999</span>
          </a>
        </div>
      </div>
    </div>
  )
}
