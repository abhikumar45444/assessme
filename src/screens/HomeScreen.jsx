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
  const [scrollY, setScrollY] = useState(0)
  const [headerHeight, setHeaderHeight] = useState(96)
  const scrollRef = useRef(null)
  const headerRef = useRef(null)
  const touchStartX = useRef(0)
  const timerRef = useRef(null)

  const slides = [
    {
      id: 1,
      image: getAssetUrl('/cover-personality.jpg'),
      title: 'ePersonality™ Assessment',
      tagline: 'Explains the purpose for which a person was created by God',
      badge: 'Most Popular!',
      cta: 'Explore ePersonality →',
      assessmentId: 'epersonality',
    },
    {
      id: 2,
      image: getAssetUrl('/cover-gracegifts.jpg'),
      title: 'GraceGifts™ Spiritual Gifts',
      tagline: 'The only gifts program filtered through personality dynamics',
      badge: 'Personality Filtered',
      cta: 'Explore GraceGifts →',
      assessmentId: 'grace-gifts',
    },
    {
      id: 3,
      image: getAssetUrl('/cover-leadership.jpg'),
      title: 'Leadership Style Test',
      tagline: 'Build highly effective staff & elder teams with stability',
      badge: 'Staff & Elders Ready',
      cta: 'Explore Leadership →',
      assessmentId: 'leadership-style',
    },
    {
      id: 4,
      image: getAssetUrl('/cover-skills.jpg'),
      title: 'Skills Tracking Program',
      tagline: 'Organic skills tracking with micro-resumes for your whole church',
      badge: 'Micro-Resumes',
      cta: 'Explore Skills →',
      assessmentId: 'skills-tracking',
    },
  ]

  // Measure header height dynamically to tuck the hero perfectly underneath
  useEffect(() => {
    if (!headerRef.current) return
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight)
      }
    }
    updateHeight()
    const observer = new ResizeObserver(updateHeight)
    observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-advance through the hero slides every 3.5 seconds
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3500)
  }

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [slides.length])

  // Internal scroll listener to trigger scroll-linked collapse and header transition
  const handleScroll = (e) => {
    const top = e.currentTarget.scrollTop
    setScrollY(top)
  }

  // Touch swipe support for manual carousel control
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    if (deltaX > 45) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      resetTimer()
    } else if (deltaX < -45) {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      resetTimer()
    }
  }

  // Threshold: at scrollTop > 40, transition sticky top bar to solid dark slate
  const isScrolled = scrollY > 40

  // Parallax offset for hero image
  const parallaxOffset = Math.min(scrollY * 0.38, 85)

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className="flex-1 overflow-y-auto no-scrollbar scrollbar-hide relative h-full bg-[#F4F5F6] font-sans select-none rounded-none md:rounded-[40px]"
    >
      {/* 1. TOP OVERLAY BAR (Sticky & Overlaid on Hero) */}
      <header
        ref={headerRef}
        className={`sticky top-0 left-0 right-0 z-30 transition-all duration-300 px-4 pt-3.5 md:pt-12 pb-3.5 rounded-none md:rounded-t-[40px] ${
          isScrolled
            ? 'bg-[#111518] shadow-md border-b border-white/10'
            : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent border-b border-transparent shadow-none'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* AssessME White Wordmark Logo */}
          <div className="flex items-center gap-2">
            <img
              src={getAssetUrl('/logo-white.png')}
              alt="AssessME.org"
              className="h-7 w-auto object-contain drop-shadow-sm"
            />
          </div>

          <div className="flex items-center gap-2">
            {/* Church Plan cart quick pill */}
            <button
              onClick={onOpenPlan}
              className="relative p-2 rounded-xl bg-white/15 backdrop-blur-md text-white hover:bg-white/25 active:scale-95 transition-all cursor-pointer border border-white/10 shadow-xs"
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
              className="w-8 h-8 rounded-full bg-[#E17335] hover:bg-[#EC600F] active:scale-95 text-white flex items-center justify-center font-black text-xs shadow-md transition-all cursor-pointer ring-1 ring-white/20"
              aria-label="Pastor Profile"
            >
              AM
            </button>
          </div>
        </div>

        {/* Network selector & ChMS status strip */}
        <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-white/15 text-xs">
          <button
            onClick={onOpenZoneModal}
            className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors cursor-pointer text-[11px] truncate max-w-[240px]"
          >
            <Church className="w-3.5 h-3.5 text-[#E17335] flex-shrink-0" />
            <span className="truncate drop-shadow-xs">{selectedZone}</span>
            <ChevronRight className="w-3 h-3 text-slate-300" />
          </button>

          <span className="px-2 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold tracking-tight backdrop-blur-xs">
            ChMS API Sync Active
          </span>
        </div>
      </header>

      {/* 2. AUTO-ROTATING FULL-BLEED HERO BANNER (rounded-b-3xl) */}
      <div
        className="relative w-full rounded-b-3xl overflow-hidden shadow-card bg-[#111518]"
        style={{
          marginTop: -headerHeight, // Tucks the hero full-bleed right under the sticky header
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="relative w-full h-[375px] md:h-[410px] overflow-hidden rounded-b-3xl"
        >
          {/* Horizontal Carousel Track */}
          <div
            className="flex w-full h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full h-full flex-shrink-0 relative overflow-hidden">
                {/* Hero Background Image with parallax transform */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-top brightness-[0.78]"
                  style={{
                    transform: `translateY(${parallaxOffset}px)`,
                    transition: 'transform 0.1s ease-out',
                  }}
                />

                {/* Top dark gradient overlay for top bar readability */}
                <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />

                {/* Dark bottom gradient and anchored slide content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent flex flex-col justify-end p-5 pb-5">
                  <h2 className="text-xl font-black font-cabin text-white leading-tight mb-1 drop-shadow-sm">
                    {slide.title}
                  </h2>
                  <p className="text-xs text-slate-200 line-clamp-1 mb-3.5 drop-shadow-xs">
                    {slide.tagline}
                  </p>

                  {/* Bottom Row: Dark Pill Tag (Left) + Primary Pill CTA (Right) */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-wider shadow-xs">
                      {slide.badge}
                    </span>

                    <button
                      onClick={() => {
                        const item = ASSESSMENTS.find((a) => a.id === slide.assessmentId)
                        if (item) onSelectAssessment(item)
                      }}
                      className="px-4 py-2 rounded-full bg-[#E17335] hover:bg-[#EC600F] active:scale-95 text-white text-xs font-bold shadow-md cursor-pointer transition-all flex items-center gap-1.5"
                    >
                      <span>{slide.cta}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subtle Carousel Pagination Dots */}
          <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-1.5 pointer-events-none z-10">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setCurrentSlide(idx)
                  resetTimer()
                }}
                className={`h-1.5 rounded-full transition-all duration-300 pointer-events-auto cursor-pointer ${
                  currentSlide === idx
                    ? 'w-5 bg-[#E17335] shadow-xs'
                    : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. HOME FEED CONTENT SHEET (Slides cleanly beneath the sticky top bar) */}
      <div className="p-4 space-y-5 pb-28">
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
                const bundle = ASSESSMENTS.find((a) => a.id === 'all-inclusive-bundle')
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
