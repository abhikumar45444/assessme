import { useState, useEffect } from 'react'
import {
  Heart, X, Star, Sparkles, Wrench, ShieldCheck,
  CheckCircle2, Phone, Calendar, ArrowRight, Share2, Award
} from 'lucide-react'
import { getAssetUrl } from '../utils/assets'

export default function AssessmentDetailModal({
  assessment,
  isOpen,
  onClose,
  onOpenConsultation,
  onAddToPlan
}) {
  const [activeImage, setActiveImage] = useState(assessment?.image || getAssetUrl('/hero-gracegifts.jpg'))
  const [isWishlist, setIsWishlist] = useState(false)
  const [activeTab, setActiveTab] = useState('dimensions')

  useEffect(() => {
    if (assessment) {
      setActiveImage(assessment.image)
    }
  }, [assessment])

  if (!isOpen || !assessment) return null

  const gallery = assessment.gallery && assessment.gallery.length >= 3
    ? assessment.gallery.slice(0, 3)
    : [
        assessment.image,
        assessment.gallery?.[1] || getAssetUrl('/hero-personality.jpg'),
        assessment.gallery?.[2] || getAssetUrl('/sample-report-1.jpg')
      ]

  const dimensionsList = assessment.dimensions && assessment.dimensions.length > 0
    ? assessment.dimensions
    : [
        { num: 1, title: 'Spiritual Gifts Inventory', desc: 'Identifies biblical motivational giftings.' },
        { num: 2, title: 'Ministry Placement Context', desc: 'Maps gifts to volunteer departments.' },
        { num: 3, title: 'Burnout Prevention', desc: 'Helps volunteers thrive in long-term service.' }
      ]

  const categoryDisplay = assessment.category
    ? assessment.category.replace('-', ' ')
    : 'Ministry Assessment'

  return (
    <div
      className="fixed md:absolute inset-0 z-[100] bg-black/60 backdrop-blur-xs flex flex-col justify-end overflow-hidden animate-fade-in select-none"
      style={{ touchAction: 'none' }}
    >
      {/* Lock Background Scroll: Backdrop */}
      <div
        className="flex-1 w-full"
        onClick={onClose}
        style={{ touchAction: 'none' }}
      />

      {/* Anchor Modal Sheet: Pinned flush to bottom with flex-column layout */}
      <div
        className="w-full bg-white rounded-t-[36px] max-h-[92dvh] md:max-h-[92%] h-[92dvh] md:h-[92%] flex flex-col overflow-hidden shadow-2xl relative font-sans z-10 bottom-0 transition-transform duration-300"
        style={{ touchAction: 'auto' }}
      >
        {/* Top drag handle indicator (shrink-0) */}
        <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto my-3 shrink-0" />

        {/* Fixed Top Header Bar (shrink-0) */}
        <div className="px-5 flex items-center justify-between pb-3 shrink-0 border-b border-slate-100 bg-white z-10">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black text-[#0284C7] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
              {assessment.badge || 'Flagship'}
            </span>
            <span className="text-xs text-slate-400 font-medium capitalize">
              {categoryDisplay}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsWishlist(!isWishlist)}
              className="w-9 h-9 rounded-full border border-slate-100 flex items-center justify-center hover:bg-slate-50 active:scale-95 transition-all cursor-pointer shadow-2xs"
              aria-label="Wishlist"
            >
              <Heart
                className={`w-4 h-4 transition-colors ${
                  isWishlist ? 'fill-rose-500 text-rose-500' : 'text-slate-600'
                }`}
              />
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full border border-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-100 active:scale-95 transition-all cursor-pointer shadow-2xs"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Middle Body */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-5 space-y-4 no-scrollbar scrollbar-hide">
          {/* Main Photo Container */}
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-100 shadow-xs border border-slate-100 group">
            <img
              src={activeImage}
              alt={assessment.name}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            {/* Top-left dark pill rating badge */}
            <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] font-bold flex items-center gap-1 shadow-md">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{assessment.rating || '4.98'} ({assessment.reviewsCount || '1,200'} Churches)</span>
            </div>

            {/* Bottom-right dark pill badge */}
            <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] font-bold flex items-center gap-1 shadow-md">
              <Award className="w-3 h-3 text-[#38BDF8]" />
              <span>AssessME Certified</span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex items-center gap-2">
            {gallery.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(thumb)}
                className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer bg-slate-50 flex-shrink-0 ${
                  activeImage === thumb
                    ? 'border-[#0284C7] ring-2 ring-sky-100 scale-105'
                    : 'border-slate-100 opacity-75 hover:opacity-100'
                }`}
              >
                <img
                  src={thumb}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Title & Subtitle */}
          <div>
            <h2 className="text-lg font-black text-[#0F172A] leading-tight mb-1">
              {assessment.name}
            </h2>
            <p className="text-xs text-[#64748B] leading-snug">
              {assessment.tagline}
            </p>
          </div>

          {/* 3-Column Feature Strip */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <Sparkles className="w-4 h-4 text-[#0284C7] mx-auto mb-1" />
              <p className="text-[10px] font-bold text-[#0F172A] leading-tight">ChMS Sync</p>
              <p className="text-[8.5px] text-[#64748B] mt-0.5">Planning Center & Pushpay</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <ShieldCheck className="w-4 h-4 text-[#16A34A] mx-auto mb-1" />
              <p className="text-[10px] font-bold text-[#0F172A] leading-tight">Biblical Context</p>
              <p className="text-[8.5px] text-[#64748B] mt-0.5">Romans 12 & 1 Cor 12</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <Award className="w-4 h-4 text-[#F59E0B] mx-auto mb-1" />
              <p className="text-[10px] font-bold text-[#0F172A] leading-tight">Instant Report</p>
              <p className="text-[8.5px] text-[#64748B] mt-0.5">Full 8-Page PDF</p>
            </div>
          </div>

          {/* Segmented Tab Control */}
          <div className="p-1 rounded-2xl bg-slate-100 flex items-center gap-1 border border-slate-200/60">
            <button
              onClick={() => setActiveTab('dimensions')}
              className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === 'dimensions'
                  ? 'bg-white text-[#0284C7] shadow-xs'
                  : 'text-slate-500 hover:text-[#0F172A]'
              }`}
            >
              Dimensions
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === 'specs'
                  ? 'bg-white text-[#0284C7] shadow-xs'
                  : 'text-slate-500 hover:text-[#0F172A]'
              }`}
            >
              Specs
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === 'benefits'
                  ? 'bg-white text-[#0284C7] shadow-xs'
                  : 'text-slate-500 hover:text-[#0F172A]'
              }`}
            >
              Church Impact
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'dimensions' && (
            <div className="space-y-2.5">
              {dimensionsList.map((dim) => (
                <div
                  key={dim.num}
                  className="p-3 bg-white rounded-2xl border border-slate-100 shadow-xs flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-sky-50 text-[#0284C7] font-black text-xs flex items-center justify-center shrink-0 border border-sky-100">
                    {dim.num}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0F172A] leading-tight">
                      {dim.title}
                    </h4>
                    <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                      {dim.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="bg-white rounded-2xl border border-slate-100 p-4 space-y-2.5 text-xs shadow-xs">
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-[#64748B]">Completion Time</span>
                <span className="font-bold text-[#0F172A]">{assessment.specs?.completionTime || '12-15 Mins'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-[#64748B]">Questions Count</span>
                <span className="font-bold text-[#0F172A]">{assessment.specs?.questionsCount || '60 Questions'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-[#64748B]">ChMS Connect</span>
                <span className="font-bold text-[#16A34A]">Auto 2-Way Sync</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#64748B]">Report Format</span>
                <span className="font-bold text-[#0F172A]">{assessment.specs?.reportFormat || 'PDF + Web'}</span>
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="space-y-2.5 text-xs">
              {assessment.features?.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-100 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span className="text-slate-600 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sticky Bottom Action Bar (shrink-0) */}
        <div className="p-4 bg-white border-t border-slate-100 shrink-0 flex items-center gap-2.5 shadow-lg">
          <a
            href="tel:8002445999"
            className="w-12 h-12 rounded-2xl bg-slate-100 hover:bg-slate-200 active:scale-95 flex items-center justify-center text-slate-700 shrink-0 transition-all cursor-pointer border border-slate-200/60"
            aria-label="Call Pastoral Concierge"
          >
            <Phone className="w-5 h-5" />
          </a>

          <button
            onClick={() => {
              if (onAddToPlan) onAddToPlan(assessment)
              onClose()
            }}
            className="flex-1 py-3.5 px-4 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] active:scale-[0.98] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-sky-900/20 cursor-pointer transition-all"
          >
            <span>Add to Church Plan • ${assessment.price}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
