import { useState, useEffect } from 'react'
import {
  Heart, X, Star, Sparkles, Wrench, ShieldCheck,
  CheckCircle2, Phone, Calendar, ArrowRight, Share2, Award, BookOpen
} from 'lucide-react'
import { getAssetUrl } from '../utils/assets'

export default function AssessmentDetailModal({
  assessment,
  isOpen,
  onClose,
  onOpenConsultation,
  onAddToPlan
}) {
  const [activeImage, setActiveImage] = useState(assessment?.image || getAssetUrl('/cover-gracegifts.jpg'))
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
        assessment.gallery?.[1] || getAssetUrl('/cellphone.webp'),
        assessment.gallery?.[2] || getAssetUrl('/report-sample.png')
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
      {/* 1. Backdrop */}
      <div className="flex-1" onClick={onClose} />

      {/* 2. Slide-up bottom sheet */}
      <div
        className="w-full bg-white rounded-t-[36px] max-h-[92dvh] md:max-h-[92%] h-[92dvh] md:h-[92%] flex flex-col overflow-hidden shadow-2xl border-t border-slate-100 z-10 transition-transform duration-300"
        style={{ touchAction: 'auto' }}
      >
        {/* Top drag handle indicator */}
        <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto my-3 flex-shrink-0" />

        {/* 3. Top sticky header */}
        <div className="px-5 pb-3 flex items-center justify-between border-b border-[#ECECEC] flex-shrink-0 bg-white">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="min-w-0">
              <span className="text-[10px] font-black tracking-wider uppercase text-[#E17335] block truncate">
                {categoryDisplay}
              </span>
              <h3 className="text-sm font-black font-cabin text-[#111518] truncate leading-tight">
                {assessment.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsWishlist(!isWishlist)}
              className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
              aria-label="Save"
            >
              <Heart className={`w-4 h-4 ${isWishlist ? 'fill-red-500 text-red-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* 4. Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto no-scrollbar scrollbar-hide p-5 space-y-5">
          {/* Main Cover Showcase */}
          <div className="relative rounded-3xl overflow-hidden bg-[#111518] border border-slate-100 shadow-sm aspect-video flex items-center justify-center">
            <img
              src={activeImage}
              alt={assessment.name}
              className="w-full h-full object-contain p-2"
            />
            {assessment.badge && (
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#E17335] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                {assessment.badge}
              </span>
            )}
          </div>

          {/* Gallery Thumbnails */}
          <div className="flex items-center gap-2.5">
            {gallery.map((imgUrl, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(imgUrl)}
                className={`relative flex-1 aspect-video rounded-xl overflow-hidden border-2 transition-all cursor-pointer bg-slate-100 ${
                  activeImage === imgUrl
                    ? 'border-[#E17335] shadow-xs'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Pricing & Ratings */}
          <div className="bg-[#F4F5F6] rounded-2xl p-4 border border-[#ECECEC] flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black font-cabin text-[#E17335]">
                  ${assessment.price}
                </span>
                <span className="text-xs text-slate-400 line-through">
                  ${assessment.originalPrice}
                </span>
                <span className="text-[11px] font-bold text-slate-600">/ candidate seat</span>
              </div>
              <p className="text-[10px] text-[#696767] mt-0.5">
                Annual church-wide license available (${assessment.annualPrice || 299}/yr)
              </p>
            </div>

            <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-xl border border-slate-200">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-xs font-black text-[#111518]">{assessment.rating}</span>
              <span className="text-[10px] text-slate-400 font-medium">({assessment.reviewsCount})</span>
            </div>
          </div>

          {/* Section Navigation Tabs */}
          <div className="flex border-b border-slate-200">
            {[
              { id: 'dimensions', label: 'Dimensions' },
              { id: 'specs', label: 'Specifications' },
              { id: 'impact', label: 'Church Impact' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2 text-xs font-bold transition-colors cursor-pointer border-b-2 -mb-[2px] ${
                  activeTab === tab.id
                    ? 'border-[#E17335] text-[#E17335]'
                    : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Dimensions */}
          {activeTab === 'dimensions' && (
            <div className="space-y-3 animate-fade-in">
              <p className="text-xs text-[#696767]">
                Scientifically calibrated for biblical discipleship & volunteer placement:
              </p>
              <div className="space-y-2">
                {dimensionsList.map((dim) => (
                  <div
                    key={dim.num}
                    className="p-3 bg-white border border-[#ECECEC] rounded-2xl flex items-start gap-3 shadow-2xs"
                  >
                    <div className="w-6 h-6 rounded-full bg-orange-100 text-[#E17335] font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {dim.num}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#111518]">{dim.title}</h4>
                      <p className="text-[11px] text-[#696767] mt-0.5 leading-snug">{dim.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Specs */}
          {activeTab === 'specs' && (
            <div className="space-y-2.5 animate-fade-in">
              {assessment.specs && Object.entries(assessment.specs).map(([key, val]) => (
                <div
                  key={key}
                  className="flex justify-between items-center p-3 bg-white border border-[#ECECEC] rounded-2xl text-xs shadow-2xs"
                >
                  <span className="text-[#696767] capitalize font-medium">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <span className="font-bold text-[#111518] text-right">{val}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Church Impact */}
          {activeTab === 'impact' && (
            <div className="space-y-3 animate-fade-in">
              <div className="p-4 bg-orange-50/70 border border-orange-100 rounded-2xl text-xs space-y-2 text-[#565D66]">
                <div className="flex items-center gap-2 text-[#E17335] font-black">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Church-Wide Mobilization Metrics</span>
                </div>
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-xs">
                    <span>1-Year Volunteer Retention:</span>
                    <span className="font-bold text-emerald-600">+68% Increase</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Volunteer Role Sweet-Spot Match:</span>
                    <span className="font-bold text-[#111518]">94.2%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>ChMS Data Entry Time Saved:</span>
                    <span className="font-bold text-[#E17335]">100% Automated</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Key Features Bullet List */}
          <div className="space-y-2 pt-1">
            <h4 className="text-xs font-bold text-[#111518]">Included in Every Candidate Seat:</h4>
            {assessment.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#565D66]">
                <CheckCircle2 className="w-4 h-4 text-[#E17335] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Sticky Bottom Action Bar */}
        <div className="p-4 bg-white border-t border-[#ECECEC] flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => {
              onClose()
              if (onOpenConsultation) onOpenConsultation()
            }}
            className="px-3.5 py-3 rounded-2xl border border-slate-200 text-[#111518] hover:bg-slate-50 text-xs font-bold cursor-pointer transition-colors"
          >
            Pastoral Demo
          </button>

          <button
            onClick={() => {
              if (onAddToPlan) onAddToPlan(assessment)
              onClose()
            }}
            className="flex-1 py-3 px-4 rounded-2xl bg-[#E17335] hover:bg-[#EC600F] active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-orange cursor-pointer transition-all"
          >
            <span>Add Candidate Seats • ${assessment.price}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
