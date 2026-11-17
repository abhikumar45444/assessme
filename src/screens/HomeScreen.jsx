import { useState, useEffect, useRef } from 'react'
import {
  Church, Search, ShoppingBag, Phone, ChevronRight, Star,
  CheckCircle2, Heart, Sparkles, Clock, Award, ShieldCheck,
  ArrowRight, Users, ClipboardList, Check, BookOpen
} from 'lucide-react'
import { ASSESSMENTS, PASTORS, STEPS } from '../data'
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
      image: getAssetUrl('/cover-personality.jpg'),
      logo: getAssetUrl('/logo-epersonality.png'),
      title: 'ePersonality™ Assessment',
      tagline: 'Explains the purpose for which a person was created by God',
      badge: 'Most Popular!',
      cta: 'Explore ePersonality →',
      assessmentId: 'epersonality',
    },
    {
      id: 2,
      image: getAssetUrl('/cover-gracegifts.jpg'),
      logo: getAssetUrl('/logo-gracegifts.png'),
      title: 'GraceGifts™ Spiritual Gifts',
      tagline: 'The only gifts program filtered through personality dynamics',
      badge: 'Zero Burnout',
      cta: 'Explore GraceGifts →',
      assessmentId: 'grace-gifts',
    },
    {
      id: 3,
      image: getAssetUrl('/cover-leadership.jpg'),
      logo: getAssetUrl('/logo-leadership.png'),
      title: 'Leadership Style Test',
      tagline: 'Build highly effective staff & elder teams with stability',
      badge: 'Staff & Elders Ready',
      cta: 'Explore Leadership →',
      assessmentId: 'leadership-style',
    },
  ]

  // Auto-slide every 5.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [slides.length])

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    if (deltaX > 45) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    } else if (deltaX < -45) {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }
  }

  return (
    <div className="flex-1 flex flex-col h-full min-h-0 overflow-hidden bg-[#F4F5F6] font-sans select-none">
      {/* 1. Official AssessME Header (ALWAYS FIXED AT TOP - NEVER MOVES WHEN SCROLLING) */}
      <header className="flex-shrink-0 sticky top-0 z-30 bg-[#111518] px-4 pt-3.5 md:pt-12 pb-3.5 border-b border-white/10 shadow-md">
        <div className="flex items-center justify-between">
          {/* Official AssessME White Logo */}
          <div className="flex items-center gap-2">
            <img
              src={getAssetUrl('/logo-white.png')}
              alt="AssessME.org"
              className="h-7 w-auto object-contain"
            />
          </div>

          <div className="flex items-center gap-2">
            {/* Church Plan cart quick pill */}
            <button
              onClick={onOpenPlan}
              className="relative p-2 rounded-xl bg-white/10 text-white hover:bg-white/15 transition-all cursor-pointer"
              aria-label="View Plan"
            >
              <ShoppingBag className="w-4 h-4 text-orange-400" />
              {planCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E17335] text-white text-[9.5px] font-black w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-[#111518]">
                  {planCount}
                </span>
              )}
            </button>

            {/* Pastor Profile Avatar Button */}
            <button
              onClick={onOpenProfile}
              className="w-8 h-8 rounded-full bg-[#E17335] hover:bg-[#EC600F] active:scale-95 text-white flex items-center justify-center font-black text-xs shadow-md transition-all cursor-pointer"
              aria-label="Pastor Profile"
            >
              AM
            </button>
          </div>
        </div>

        {/* Network & ChMS status strip */}
        <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-white/10 text-xs">
          <button
            onClick={onOpenZoneModal}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer text-[11px] truncate max-w-[240px]"
          >
            <Church className="w-3.5 h-3.5 text-[#E17335] flex-shrink-0" />
            <span className="truncate">{selectedZone}</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
          </button>

          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-tight">
            ChMS API Sync Active
          </span>
        </div>
      </header>

      {/* 2. Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar scrollbar-hide p-4 space-y-5 pb-28">
        {/* Authentic AssessME Hero Carousel */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-card border border-slate-200 bg-[#1F2428] touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative h-60 w-full overflow-hidden">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover object-top transition-all duration-700 brightness-[0.78]"
            />
            {/* Gradient Overlay in AssessME theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111518] via-[#111518]/60 to-transparent" />

            <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
              <span className="self-start px-2.5 py-1 rounded-full bg-[#E17335] text-white text-[10px] font-black uppercase tracking-wider mb-2 shadow-xs">
                {slides[currentSlide].badge}
              </span>

              <h2 className="text-xl font-black font-cabin leading-tight mb-1">
                {slides[currentSlide].title}
              </h2>
              <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                {slides[currentSlide].tagline}
              </p>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => {
                    const item = ASSESSMENTS.find(a => a.id === slides[currentSlide].assessmentId)
                    if (item) onSelectAssessment(item)
                  }}
                  className="px-4 py-2 rounded-xl bg-[#E17335] hover:bg-[#EC600F] active:scale-95 text-white text-xs font-bold shadow-md cursor-pointer transition-all flex items-center gap-1.5"
                >
                  <span>{slides[currentSlide].cta}</span>
                </button>

                {/* Dot Indicators */}
                <div className="flex items-center gap-1.5">
                  {slides.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        currentSlide === idx ? 'w-5 bg-[#E17335]' : 'w-1.5 bg-white/40'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Value Proposition Banner */}
        <div className="bg-white rounded-3xl p-4 border border-[#ECECEC] shadow-card">
          <p className="text-[11px] font-black text-[#E17335] uppercase tracking-wider mb-1">
            DISCOVERING MINISTRY FIT
          </p>
          <h3 className="text-base font-black font-cabin text-[#111518] leading-snug mb-1.5">
            More Data, Better Results: Mobilizing Church Members
          </h3>
          <p className="text-xs text-[#696767] leading-relaxed mb-3">
            AssessME provides churches with 5 interconnected assessments filtered by temperament to prevent volunteer burnout and connect members to their calling.
          </p>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onOpenAssessments}
              className="py-2.5 px-3 rounded-2xl bg-[#E17335] hover:bg-[#EC600F] active:scale-95 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-orange cursor-pointer transition-all"
            >
              <span>Explore Assessments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenQuiz}
              className="py-2.5 px-3 rounded-2xl bg-[#111518] hover:bg-[#1F2428] active:scale-95 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm cursor-pointer transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Ministry Fit Quiz</span>
            </button>
          </div>
        </div>

        {/* The 5 Core Assessments Grid */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-black font-cabin text-[#111518]">
                AssessME Catalog
              </h3>
              <p className="text-[11px] text-[#696767]">
                Human Resource Assessments for Christians & Churches
              </p>
            </div>
            <button
              onClick={onOpenAssessments}
              className="text-xs font-bold text-[#E17335] hover:underline cursor-pointer"
            >
              View all (6)
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {ASSESSMENTS.slice(0, 4).map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectAssessment(item)}
                className="bg-white rounded-2xl p-3 border border-[#ECECEC] shadow-card hover:border-[#E17335] transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="relative rounded-xl overflow-hidden mb-2 bg-slate-100 aspect-square">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded-md bg-[#111518]/90 text-white text-[9px] font-black uppercase tracking-tight">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-[#111518] line-clamp-1 group-hover:text-[#E17335] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[#696767] line-clamp-2 mt-0.5 leading-snug">
                    {item.tagline}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-black text-[#E17335]">
                    ${item.price} <span className="text-[10px] text-slate-400 font-normal">/ seat</span>
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-500 text-[10px] font-bold">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Easy Steps to Assess Church Members */}
        <div className="bg-white rounded-3xl p-4 border border-[#ECECEC] shadow-card space-y-3">
          <div>
            <span className="text-[10px] font-black text-[#E17335] uppercase tracking-wider block">
              CHURCH IMPLEMENTATION ROADMAP
            </span>
            <h3 className="text-sm font-black font-cabin text-[#111518] leading-snug mt-0.5">
              6 Easy Steps to Assess Church Members
            </h3>
            <p className="text-xs text-[#696767] mt-0.5">
              A proven workflow trusted by thousands of growing churches nationwide.
            </p>
          </div>

          <div className="space-y-2.5">
            {STEPS.slice(0, 3).map((st) => (
              <div
                key={st.step}
                className="p-2.5 rounded-2xl bg-[#F4F5F6] border border-slate-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E17335] text-white flex items-center justify-center font-black font-cabin text-xs flex-shrink-0 shadow-xs">
                  {st.step}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-[#111518]">{st.title}</h4>
                  <p className="text-[11px] text-[#696767] leading-tight mt-0.5 line-clamp-2">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onOpenConsultation}
            className="w-full py-2.5 px-3 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#E17335] text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all"
          >
            <span>Learn More About the 6 Steps</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Discipleship Book & Sermon Kit ("Made for a Mission") */}
        <div className="rounded-3xl p-4 bg-gradient-to-br from-[#111518] to-[#1F2428] text-white shadow-card space-y-3">
          <div className="flex items-center gap-3">
            <img
              src={getAssetUrl('/book-mission.avif')}
              alt="Made for a Mission"
              className="w-16 h-24 object-cover rounded-xl shadow-md border border-white/10 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <span className="px-2 py-0.5 rounded-full bg-[#E17335] text-white text-[9px] font-black uppercase tracking-wider inline-block mb-1">
                Sermon Series & Class Kit
              </span>
              <h4 className="text-sm font-black font-cabin leading-tight">
                Made for a Mission
              </h4>
              <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">
                Written by Chuck Ballard, Founder of AssessME.org. Includes a 4-week church sermon series kit with slides and teaching notes.
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-orange-300 font-semibold">Included in Church Suites</span>
            <button
              onClick={() => {
                const bundle = ASSESSMENTS.find(a => a.id === 'all-inclusive-bundle')
                if (bundle) onSelectAssessment(bundle)
              }}
              className="px-3 py-1.5 rounded-xl bg-[#E17335] hover:bg-[#EC600F] text-white text-xs font-bold cursor-pointer transition-all shadow-xs"
            >
              View Church Suite
            </button>
          </div>
        </div>

        {/* Pastoral Testimonials */}
        <div className="space-y-3">
          <div>
            <h3 className="text-sm font-black font-cabin text-[#111518]">
              Pastoral Endorsements
            </h3>
            <p className="text-[11px] text-[#696767]">
              Proven impact across growing ministry congregations
            </p>
          </div>

          <div className="space-y-2.5">
            {PASTORS.map((pastor) => (
              <div
                key={pastor.name}
                className="bg-white p-3.5 rounded-2xl border border-[#ECECEC] shadow-card space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-[#111518]">{pastor.name}</h5>
                    <p className="text-[10px] text-[#696767]">{pastor.title} • {pastor.location}</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-orange-100 text-[#E17335] flex items-center justify-center font-bold text-[10px]">
                    {pastor.initials}
                  </div>
                </div>
                <p className="text-xs italic text-[#565D66] leading-relaxed">
                  "{pastor.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Church Consultation Booking Banner */}
        <div className="p-4 rounded-3xl bg-[#E17335] text-white shadow-orange space-y-3">
          <div className="flex items-center gap-2 text-orange-100 text-xs font-bold uppercase tracking-wider">
            <Church className="w-4 h-4 text-white" />
            <span>Pastoral Consultation & ChMS Demo</span>
          </div>

          <h3 className="text-lg font-black font-cabin leading-tight">
            Equip Your Entire Congregation Today
          </h3>
          <p className="text-xs text-orange-100/90 leading-relaxed">
            Schedule a free 1-on-1 walkthrough with an AssessME church mobilization specialist. We'll show you how to connect Planning Center or Pushpay.
          </p>

          <button
            onClick={onOpenConsultation}
            className="w-full py-3 px-4 rounded-2xl bg-[#111518] hover:bg-[#1F2428] active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
          >
            <span>Schedule Free Pastoral Consultation</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </button>
        </div>
      </div>
    </div>
  )
}
