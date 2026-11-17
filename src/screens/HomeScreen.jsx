import { useState, useEffect, useRef } from 'react'
import {
  Church, Search, ShoppingBag, Phone, ChevronRight, Star,
  CheckCircle2, Heart, Sparkles, Clock, Award, ShieldCheck,
  ArrowRight, Users, ClipboardList
} from 'lucide-react'
import { ASSESSMENTS, PASTORS, CHURCH_INSTALLATIONS } from '../data'
import { getAssetUrl } from '../utils/assets'

export default function HomeScreen({
  onOpenAssessments,
  onOpenQuiz,
  onOpenConsultation,
  onOpenProfile,
  onSelectAssessment,
  selectedZone = 'Southern California Hub (San Diego & OC)',
  onOpenZoneModal,
  onOpenPlan,
  planCount = 0
}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)

  const slides = [
    {
      id: 1,
      image: getAssetUrl('/hero-gracegifts.jpg'),
      title: 'GraceGifts™ Spiritual Gifts',
      tagline: 'Biblical spiritual gifts filtered by temperament',
      badge: '99% Volunteer Retention',
      cta: 'Explore Gifts →',
      assessmentId: 'grace-gifts',
    },
    {
      id: 2,
      image: getAssetUrl('/hero-personality.jpg'),
      title: 'ePersonality™ Dynamics',
      tagline: 'DISC-enhanced ministry team communication',
      badge: 'Zero Team Friction',
      cta: 'View Profile →',
      assessmentId: 'epersonality',
    },
    {
      id: 3,
      image: getAssetUrl('/hero-leadership.jpg'),
      title: 'Leadership Style Test',
      tagline: 'Strategic elder & ministry director placement',
      badge: 'Staff & Elder Ready',
      cta: 'View Test →',
      assessmentId: 'leadership-style',
    },
  ]

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length, currentSlide])

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX
  }

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
    const diffX = touchStartX.current - touchEndX
    if (diffX > 40) {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    } else if (diffX < -40) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }
  }

  const handleCta = (slide) => {
    const target = ASSESSMENTS.find((p) => p.id === slide.assessmentId)
    if (target) {
      onSelectAssessment(target)
    } else {
      onOpenAssessments()
    }
  }

  const activeSlide = slides[currentSlide]

  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Auto-Rotating Hero Banner */}
      <div
        className="relative w-full h-[336px] rounded-b-[40px] overflow-hidden shadow-md flex-shrink-0 select-none bg-slate-900"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Images with smooth fade */}
        {slides.map((slide, i) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === i ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          />
        ))}

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/85 pointer-events-none" />

        {/* Top Header Bar */}
        <div className="absolute top-3.5 md:top-12 left-0 right-0 px-4 flex items-center justify-between z-20">
          {/* Top-left network button */}
          <div
            onClick={onOpenZoneModal}
            className="flex items-center gap-2 cursor-pointer flex-1 min-w-0 mr-2 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 text-white flex-shrink-0 group-hover:bg-white/30 transition-colors">
              <Church className="w-5 h-5 text-sky-300" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 leading-none mb-1">
                <span className="text-[10px] font-black text-white bg-[#0284C7] px-2 py-0.5 rounded-full shadow-xs uppercase tracking-tight flex-shrink-0">
                  INSTANT SYNC
                </span>
                <span className="text-xs text-white/90 font-bold truncate">Church Hub</span>
              </div>
              <div className="flex items-center gap-1 text-sm font-black text-white drop-shadow-sm leading-none">
                <span className="truncate">{selectedZone}</span>
                <span className="text-[10px] text-sky-300 flex-shrink-0">▾</span>
              </div>
            </div>
          </div>

          {/* Top Right Quick Actions */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button
              onClick={onOpenAssessments}
              className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer border border-white/10"
              aria-label="Search Assessments"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenPlan}
              className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors relative cursor-pointer border border-white/10"
              aria-label="Church Plan"
            >
              <ShoppingBag className="w-4 h-4" />
              {planCount > 0 && (
                <span className="w-2 h-2 rounded-full bg-[#0284C7] absolute top-2 right-2 ring-1.5 ring-black" />
              )}
            </button>
            <button
              onClick={onOpenProfile}
              className="w-9 h-9 rounded-full bg-[#0284C7] hover:bg-[#0369A1] active:scale-95 transition-all flex items-center justify-center text-white font-black text-xs shadow-md border border-white/30 cursor-pointer"
              aria-label="Pastor Profile"
              title="Pastor Profile"
            >
              AM
            </button>
          </div>
        </div>

        {/* Bottom Slide Content */}
        <div className="absolute bottom-6 left-5 right-5 z-20">
          <div className="transition-all duration-300">
            <h1 className="text-2xl font-black text-white tracking-tight leading-tight mb-1 drop-shadow-md">
              {activeSlide.title}
            </h1>
            <p className="text-xs text-sky-100/90 font-medium mb-3 drop-shadow-sm leading-snug">
              {activeSlide.tagline}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white drop-shadow-sm">
              {activeSlide.badge}
            </span>
            <button
              onClick={() => handleCta(activeSlide)}
              className="px-4 py-2.5 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] active:scale-95 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-sky-950/40 cursor-pointer transition-all"
            >
              <span>{activeSlide.cta}</span>
            </button>
          </div>

          {/* Pagination Pill Indicator & Dot Clicks */}
          <div className="flex items-center gap-1.5 mt-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentSlide === i ? 'w-5 h-1.5 bg-[#0284C7]' : 'w-1.5 h-1.5 bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 2. 6-Card AssessME Solutions Product Grid */}
      <div className="px-5 mt-6 mb-3 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#0284C7]" />
            <h3 className="text-sm font-bold text-[#0F172A]">AssessME Mobilization Toolkit</h3>
          </div>
          <p className="text-[10px] text-[#64748B]">Data-driven volunteer placement & discipleship systems</p>
        </div>
        <div className="flex items-center gap-1 bg-[#F0F9FF] text-[#0284C7] px-2.5 py-1 rounded-full text-[10px] font-bold border border-sky-100">
          <Clock className="w-3 h-3" />
          <span>10-15 Min</span>
        </div>
      </div>

      <div className="px-5 grid grid-cols-3 gap-2.5 mb-6">
        {ASSESSMENTS.slice(0, 6).map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectAssessment(item)}
            className="bg-white rounded-2xl border border-slate-100 p-2 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 mb-1.5">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-1 right-1 bg-black/60 backdrop-blur-xs text-white px-1 py-0.5 rounded text-[8px] font-bold flex items-center gap-0.5">
                <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                {item.rating}
              </span>
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-[#0F172A] leading-tight line-clamp-2 mb-0.5 group-hover:text-[#0284C7] transition-colors">
                {item.name}
              </h4>
              <p className="text-[9px] text-[#64748B] line-clamp-1 mb-1">
                {item.tagline}
              </p>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-slate-50 mt-auto">
              <span className="text-[11px] font-black text-[#0284C7]">
                ${item.price}
              </span>
              <span className="text-[9px] text-slate-400 font-semibold group-hover:text-[#0284C7] transition-colors">
                Specs ›
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Church Deployments (2x2 Grid) */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-[#0F172A]">Churches Mobilized</h3>
          <span className="px-2.5 py-0.5 bg-[#F0F9FF] text-[#0284C7] text-[10px] font-bold rounded-full border border-sky-100">
            2,500+ Ministries
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {CHURCH_INSTALLATIONS.map((install, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img
                  src={install.image}
                  alt={install.churchName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 bg-[#0F172A]/85 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                  {install.badge}
                </span>
              </div>
              <div className="p-2.5">
                <h4 className="text-xs font-bold text-[#0F172A] leading-tight mb-0.5 truncate">
                  {install.churchName}
                </h4>
                <p className="text-[10px] text-[#64748B] leading-tight line-clamp-1">
                  {install.system}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Pastoral Endorsements & Trust Badges */}
      <div className="px-5 mb-6">
        <p className="text-[9.5px] font-black text-[#0284C7] uppercase tracking-wider mb-1">
          MINISTRY TRUST & PASTORAL ENDORSEMENTS
        </p>
        <h3 className="text-base font-extrabold text-[#0F172A] leading-tight mb-3">
          Used & Recommended by Pastors Worldwide
        </h3>

        <div className="space-y-3 mb-4">
          {PASTORS.map((pastor, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 p-3.5 shadow-xs flex items-start gap-3"
            >
              <img
                src={pastor.image}
                alt={pastor.name}
                className="w-12 h-12 rounded-full object-cover border border-slate-100 flex-shrink-0 bg-slate-100"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h4 className="text-xs font-bold text-[#0F172A] truncate">
                    {pastor.name}
                  </h4>
                  <span className="text-[9px] font-semibold text-slate-400 bg-slate-50 px-1.5 py-0.2 rounded border border-slate-100 flex-shrink-0">
                    {pastor.location}
                  </span>
                </div>
                <p className="text-[10px] font-bold text-[#0284C7] mb-1.5">
                  {pastor.title}
                </p>
                <p className="text-[11px] text-[#64748B] italic leading-snug">
                  "{pastor.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Trust Badges */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-2xl bg-white border border-slate-100 shadow-xs text-center">
            <ShieldCheck className="w-4 h-4 text-[#0284C7] mx-auto mb-1" />
            <span className="text-[10px] font-black text-[#0F172A] block leading-tight">100% Biblical</span>
            <span className="text-[8.5px] text-[#64748B]">Scripture Based</span>
          </div>
          <div className="p-2.5 rounded-2xl bg-white border border-slate-100 shadow-xs text-center">
            <Users className="w-4 h-4 text-[#16A34A] mx-auto mb-1" />
            <span className="text-[10px] font-black text-[#0F172A] block leading-tight">ChMS Verified</span>
            <span className="text-[8.5px] text-[#64748B]">Pushpay & PCO</span>
          </div>
          <div className="p-2.5 rounded-2xl bg-white border border-slate-100 shadow-xs text-center">
            <Award className="w-4 h-4 text-[#F59E0B] mx-auto mb-1" />
            <span className="text-[10px] font-black text-[#0F172A] block leading-tight">Zero Burnout</span>
            <span className="text-[8.5px] text-[#64748B]">Sweet Spot Fit</span>
          </div>
        </div>
      </div>

      {/* 5. Dark Navy Ministry Consultation Card (#0B192C) */}
      <div className="px-5 pb-8">
        <div className="bg-[#0B192C] rounded-[20px] p-5 shadow-xl shadow-slate-900/20 text-left border border-slate-800/80">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[10px] font-extrabold tracking-wider text-white bg-[#0284C7] px-2.5 py-0.5 rounded-full uppercase shadow-xs">
              FREE CHURCH CONSULTATION
            </span>
            <span className="text-xs text-slate-400 font-medium">Zero Obligation</span>
          </div>

          <h3 className="text-base font-bold text-white leading-snug mb-1.5">
            Evaluate Your Church Volunteer Health
          </h3>

          <p className="text-xs text-[#94A3B8] mb-4 leading-relaxed">
            An AssessME church mobilization specialist will analyze your ChMS workflow and demonstrate automated volunteer placement.
          </p>

          <div className="flex items-center gap-2.5">
            <a
              href="tel:8002445999"
              className="flex-1 py-3 px-3.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-sky-950/40 transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Call (800) 244-5999</span>
            </a>

            <button
              onClick={onOpenQuiz}
              className="py-3 px-4 rounded-xl bg-[#1E293B] hover:bg-[#334155] active:scale-95 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer border border-slate-700/80 shadow-xs"
            >
              <ClipboardList className="w-3.5 h-3.5 text-white" />
              <span>Fit Quiz</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
