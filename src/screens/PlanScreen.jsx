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
  const [includeChmsBridge, setIncludeChmsBridge] = useState(true)

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
      <div className="flex-1 flex flex-col bg-[#F8FAFC] pb-6 font-sans select-none">
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-4 text-[#059669] shadow-sm animate-scale-in">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-black text-[#0B192C] mb-1.5">Ministry Plan Activated!</h3>
          <p className="text-xs text-[#64748B] max-w-xs mb-5 leading-relaxed">
            Praise God! Your AssessME candidate seats and automated ChMS integration keys are ready.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 w-full max-w-xs text-left text-xs mb-6 space-y-2.5 shadow-xs">
            <div className="flex justify-between">
              <span className="text-[#64748B]">License / Order ID:</span>
              <span className="font-mono font-bold text-[#0B192C]">#AM-942801</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64748B]">ChMS API Status:</span>
              <span className="text-[#0284C7] font-bold">Auto-Sync Enabled</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64748B]">Candidate Access:</span>
              <span className="text-[#059669] font-bold">Immediate Web Dispatch</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-slate-100">
              <span className="text-[#64748B]">Total Paid:</span>
              <span className="font-black text-[#0284C7]">${total}</span>
            </div>
          </div>

          <button
            onClick={() => {
              setOrderConfirmed(false)
              if (onExplore) onExplore()
            }}
            className="w-full max-w-xs py-3.5 px-6 rounded-2xl bg-[#0284C7] hover:bg-[#0369a1] active:scale-95 text-white font-bold text-xs shadow-md shadow-sky-900/20 cursor-pointer transition-all"
          >
            Return to Assessments
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col bg-[#F8FAFC] pb-6 font-sans select-none">
      {/* 1. Header: Bold title "Church Assessment Plan", subtitle, blue "Clear all" button */}
      <div className="px-5 pt-3.5 md:pt-12 pb-3 bg-white border-b border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-black text-[#0B192C] leading-tight">
            Church Assessment Plan
          </h2>
          <p className="text-[11px] text-[#64748B]">
            AssessME Verified Ministry Deployment
          </p>
        </div>
        {plan.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-xs text-[#0284C7] hover:text-[#0369a1] font-bold cursor-pointer transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {plan.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center my-auto">
          <div className="w-20 h-20 rounded-3xl bg-[#F0F9FF] border border-sky-100 flex items-center justify-center mb-4 text-[#0284C7] shadow-xs">
            <BookOpen className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-bold text-[#0B192C] mb-1">No Assessments In Your Plan</h3>
          <p className="text-xs text-[#64748B] max-w-xs mb-6 leading-relaxed">
            Select assessments or whole-church licenses to equip your congregation and sync with your ChMS.
          </p>
          <button
            onClick={onExplore}
            className="py-3 px-6 rounded-2xl bg-[#0284C7] hover:bg-[#0369a1] active:scale-95 text-white font-bold text-xs shadow-md shadow-sky-900/20 cursor-pointer transition-all"
          >
            Explore Assessments
          </button>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto no-scrollbar scrollbar-hide p-5 space-y-4">
          {/* 2. Promo Banner: Free ChMS Concierge Sync */}
          <div className="p-3.5 rounded-2xl bg-[#F0F9FF] border border-sky-100 flex items-center gap-3 shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-[#0284C7] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-bold text-[#0B192C] text-xs block leading-tight">
                Complimentary ChMS Setup Concierge
              </span>
              <span className="text-[#0284C7] text-[11px] font-semibold mt-0.5 block leading-tight">
                Free Planning Center & Pushpay automated bridge ($199 value)
              </span>
            </div>
          </div>

          {/* 3. Plan Items List */}
          <div className="space-y-3">
            {plan.map((item) => (
              <div
                key={item.id}
                className="p-3.5 bg-white rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3"
              >
                {/* Square product thumbnail on the left */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover border border-slate-100 flex-shrink-0 bg-slate-50"
                />

                {/* Title, category, and price */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-[#0B192C] truncate leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[#64748B] capitalize mt-0.5 leading-tight">
                    {item.category?.replace('-', ' ') || 'Assessment'}
                  </p>
                  <p className="text-xs font-black text-[#0284C7] mt-1.5">
                    ${item.price} <span className="text-[10px] text-slate-400 font-normal">/ seat</span>
                  </p>
                </div>

                {/* Right-aligned quantity stepper pill: "- 1 +" */}
                <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-2 py-1 shadow-2xs">
                    <button
                      onClick={() => onUpdateQty(item.id, Math.max(0, item.qty - 1))}
                      className="w-5 h-5 rounded flex items-center justify-center text-slate-600 hover:bg-slate-200 active:scale-90 text-xs font-bold cursor-pointer transition-all"
                      aria-label="Decrease seats"
                    >
                      −
                    </button>
                    <span className="text-xs font-bold text-[#0B192C] min-w-4 text-center">
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

          {/* 4. Order Summary Card */}
          <div className="p-4 bg-white rounded-2xl border border-slate-100 space-y-2.5 text-xs shadow-xs">
            <div className="flex justify-between items-center text-[#64748B]">
              <span>Assessment Seats Subtotal</span>
              <span className="font-semibold text-[#0B192C]">${subtotal}</span>
            </div>

            <div className="flex justify-between items-center text-[#64748B]">
              <div className="flex items-center gap-1.5">
                <span>ChMS Universal API Bridge</span>
                <span className="px-1.5 py-0.5 bg-emerald-50 text-[#059669] text-[10px] font-bold rounded">INCLUDED</span>
              </div>
              <span className="font-semibold text-[#059669]">$0</span>
            </div>

            <div className="border-t border-slate-100 my-1" />

            <div className="flex justify-between items-center pt-0.5">
              <span className="font-bold text-[#0B192C] text-sm">Total Investment</span>
              <span className="font-black text-[#0B192C] text-base">${total}</span>
            </div>
          </div>

          {/* 5. Security & Guarantee Note */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#64748B] pt-1">
            <Lock className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
            <span>256-bit Encrypted • 30-Day Ministry Satisfaction Guarantee</span>
          </div>

          {/* 6. Bottom Action Button */}
          <button
            onClick={handleActivatePlan}
            disabled={isSubmitting || plan.length === 0}
            className="w-full py-3.5 px-4 rounded-2xl bg-[#0284C7] hover:bg-[#0369a1] active:scale-[0.98] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-sky-900/20 cursor-pointer transition-all"
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
