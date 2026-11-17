import { useState } from 'react'
import {
  Sparkles, Lock, ShieldCheck, CheckCircle2,
  Trash2, ArrowRight, BookOpen, Users, Database
} from 'lucide-react'

export default function PlanScreen({
  plan = [],
  onClearAll,
  onRemove,
  onUpdateQty,
  onExplore
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderConfirmed, setOrderConfirmed] = useState(false)

  // Calculations
  const subtotal = plan.reduce((sum, item) => sum + (item.price || 0) * (item.qty || 1), 0)
  const chmsBridgeFee = 0 // Complimentary on all church packages
  const total = subtotal + chmsBridgeFee

  const handleActivatePlan = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setOrderConfirmed(true)
    }, 1000)
  }

  // Activation Confirmed Success Screen
  if (orderConfirmed) {
    return (
      <div className="flex-1 flex flex-col h-full min-h-0 bg-[#F4F5F6] pb-24 font-sans select-none">
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-4 text-[#E17335] shadow-sm animate-scale-in">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-black font-cabin text-[#111518] mb-1.5">Ministry Plan Activated!</h3>
          <p className="text-xs text-[#696767] max-w-xs mb-5 leading-relaxed">
            Praise God! Your AssessME candidate seats and automated ChMS integration keys are ready.
          </p>

          <div className="bg-white border border-[#ECECEC] rounded-2xl p-4 w-full max-w-xs text-left text-xs mb-6 space-y-2.5 shadow-card">
            <div className="flex justify-between">
              <span className="text-[#696767]">License / Order ID:</span>
              <span className="font-mono font-bold text-[#111518]">#AM-942801</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#696767]">ChMS API Status:</span>
              <span className="text-[#E17335] font-bold">Pushpay CCB / PCO Ready</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#696767]">Candidate Access:</span>
              <span className="text-emerald-600 font-bold">Immediate Web Dispatch</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-slate-100">
              <span className="text-[#696767]">Total Paid:</span>
              <span className="font-black font-cabin text-[#E17335] text-base">${total}</span>
            </div>
          </div>

          <button
            onClick={() => {
              setOrderConfirmed(false)
              if (onExplore) onExplore()
            }}
            className="w-full max-w-xs py-3.5 px-6 rounded-2xl bg-[#E17335] hover:bg-[#EC600F] active:scale-95 text-white font-bold text-xs shadow-orange cursor-pointer transition-all"
          >
            Return to Assessments
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col h-full min-h-0 overflow-hidden bg-[#F4F5F6] font-sans select-none">
      {/* 1. Fixed Header (ALWAYS SHOWN AT TOP - NEVER MOVES) */}
      <header className="flex-shrink-0 sticky top-0 z-30 px-5 pt-3.5 md:pt-12 pb-3 bg-white border-b border-[#ECECEC] flex items-center justify-between shadow-2xs">
        <div>
          <h2 className="text-lg font-black font-cabin text-[#111518] leading-tight">
            Church Assessment Plan
          </h2>
          <p className="text-[11px] text-[#696767]">
            AssessME Verified Ministry Deployment
          </p>
        </div>
        {plan.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-xs text-[#E17335] hover:underline font-bold cursor-pointer transition-colors"
          >
            Clear all
          </button>
        )}
      </header>

      {plan.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center my-auto">
          <div className="w-20 h-20 rounded-3xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-4 text-[#E17335] shadow-xs">
            <BookOpen className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-bold font-cabin text-[#111518] mb-1">No Assessments In Your Plan</h3>
          <p className="text-xs text-[#696767] max-w-xs mb-6 leading-relaxed">
            Select assessments or whole-church licenses to equip your congregation and sync with your ChMS.
          </p>
          <button
            onClick={onExplore}
            className="py-3 px-6 rounded-2xl bg-[#E17335] hover:bg-[#EC600F] active:scale-95 text-white font-bold text-xs shadow-orange cursor-pointer transition-all"
          >
            Explore Assessments
          </button>
        </div>
      ) : (
        /* 2. Scrollable Content Area */
        <div className="flex-1 overflow-y-auto no-scrollbar scrollbar-hide p-4 space-y-4 pb-28">
          {/* Promo Banner */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#ECECEC] shadow-card flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#E17335] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-bold text-[#111518] text-xs block leading-tight">
                Complimentary ChMS Setup Concierge
              </span>
              <span className="text-[#E17335] text-[11px] font-semibold mt-0.5 block leading-tight">
                Free Pushpay CCB & Planning Center bridge ($199 value)
              </span>
            </div>
          </div>

          {/* Plan Items List */}
          <div className="space-y-3">
            {plan.map((item) => (
              <div
                key={item.id}
                className="p-3.5 bg-white rounded-2xl border border-[#ECECEC] shadow-card flex items-center gap-3"
              >
                {/* Product cover thumbnail */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-20 rounded-xl object-cover border border-slate-100 flex-shrink-0 bg-slate-50"
                />

                {/* Title, category, and price */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-[#111518] truncate leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[#696767] capitalize mt-0.5 leading-tight">
                    {item.category?.replace('-', ' ') || 'Assessment'}
                  </p>
                  <p className="text-xs font-black font-cabin text-[#E17335] mt-1.5">
                    ${item.price} <span className="text-[10px] text-slate-400 font-normal">/ candidate seat</span>
                  </p>
                </div>

                {/* Quantity stepper pill */}
                <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-2 py-1 shadow-2xs">
                    <button
                      onClick={() => onUpdateQty(item.id, Math.max(0, item.qty - 1))}
                      className="w-5 h-5 rounded flex items-center justify-center text-slate-600 hover:bg-slate-200 active:scale-90 text-xs font-bold cursor-pointer transition-all"
                      aria-label="Decrease seats"
                    >
                      −
                    </button>
                    <span className="text-xs font-bold text-[#111518] min-w-4 text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => onUpdateQty(item.id, item.qty + 1)}
                      className="w-5 h-5 rounded flex items-center justify-center text-slate-600 hover:bg-slate-200 active:scale-90 text-xs font-bold cursor-pointer transition-all"
                      aria-label="Increase seats"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">candidates</span>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Card */}
          <div className="p-4 bg-white rounded-2xl border border-[#ECECEC] space-y-2.5 text-xs shadow-card">
            <div className="flex justify-between items-center text-[#696767]">
              <span>Assessment Seats Subtotal</span>
              <span className="font-semibold text-[#111518]">${subtotal}</span>
            </div>

            <div className="flex justify-between items-center text-[#696767]">
              <div className="flex items-center gap-1.5">
                <span>ChMS Universal API Bridge</span>
                <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded">INCLUDED</span>
              </div>
              <span className="font-semibold text-emerald-600">$0</span>
            </div>

            <div className="border-t border-slate-100 my-1" />

            <div className="flex justify-between items-center pt-0.5">
              <span className="font-bold text-[#111518] text-sm">Total Investment</span>
              <span className="font-black font-cabin text-[#E17335] text-base">${total}</span>
            </div>
          </div>

          {/* Security & Guarantee Note */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#696767] pt-1">
            <Lock className="w-3.5 h-3.5 text-[#E17335] flex-shrink-0" />
            <span>256-bit Encrypted • 30-Day Ministry Satisfaction Guarantee</span>
          </div>

          {/* Bottom Action Button */}
          <button
            onClick={handleActivatePlan}
            disabled={isSubmitting || plan.length === 0}
            className="w-full py-3.5 px-4 rounded-2xl bg-[#E17335] hover:bg-[#EC600F] active:scale-[0.98] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-orange cursor-pointer transition-all"
          >
            <ShieldCheck className="w-4 h-4 flex-shrink-0" />
            <span>
              {isSubmitting ? 'Activating Church License...' : `Activate Church Plan • $${total} →`}
            </span>
          </button>
        </div>
      )}
    </div>
  )
}
