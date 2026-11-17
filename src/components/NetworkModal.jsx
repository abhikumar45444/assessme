import { useState } from 'react'
import {
  ChevronLeft, Church, Navigation, Search,
  Check, Shield, Users
} from 'lucide-react'
import { CHURCH_ZONES } from '../data'

export default function NetworkModal({ isOpen, onClose, selectedZone, onSelectZone }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isDetecting, setIsDetecting] = useState(false)

  if (!isOpen) return null

  const filteredZones = CHURCH_ZONES.filter(zone =>
    zone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    zone.county.toLowerCase().includes(searchQuery.toLowerCase()) ||
    zone.pincode.includes(searchQuery)
  )

  const handleAutoDetect = () => {
    setIsDetecting(true)
    setTimeout(() => {
      setIsDetecting(false)
      onSelectZone('Southern California Hub (San Diego & OC)')
      onClose()
    }, 600)
  }

  const handleSelectZone = (zoneName) => {
    onSelectZone(zoneName)
    onClose()
  }

  return (
    <div className="fixed md:absolute inset-0 z-[100] bg-black/60 backdrop-blur-xs flex flex-col justify-end overflow-hidden animate-fade-in select-none">
      {/* Backdrop click to close */}
      <div className="flex-1" onClick={onClose} />

      {/* Slide-up sheet */}
      <div className="w-full bg-white rounded-t-[36px] max-h-[92dvh] md:max-h-[92%] h-[92dvh] md:h-[92%] flex flex-col overflow-hidden shadow-2xl border-t border-slate-100 z-10 transition-transform duration-300">
        {/* Top drag handle indicator */}
        <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto my-3 flex-shrink-0" />

        {/* Top header */}
        <div className="px-5 pb-3 flex items-center justify-between border-b border-slate-100 flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h3 className="text-base font-bold text-[#0F172A] leading-tight">Select Ministry Network</h3>
              <p className="text-[11px] text-[#64748B]">Connecting to regional church mobilization hubs</p>
            </div>
          </div>
          <div className="w-9 h-9 rounded-full bg-sky-50 flex items-center justify-center text-[#0284C7] flex-shrink-0">
            <Church className="w-4 h-4" />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 no-scrollbar scrollbar-hide">
          {/* Auto detect button */}
          <button
            onClick={handleAutoDetect}
            disabled={isDetecting}
            className="w-full py-3.5 px-4 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] active:scale-[0.99] text-white flex items-center justify-between shadow-md shadow-sky-900/20 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                <Navigation className={`w-4 h-4 text-white ${isDetecting ? 'animate-spin' : ''}`} />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold block leading-tight">
                  {isDetecting ? 'Detecting Ministry Region...' : 'Auto-Detect Church Location'}
                </span>
                <span className="text-[10px] text-sky-100/90">
                  GPS pinpoint to nearest regional district hub
                </span>
              </div>
            </div>
            <span className="text-xs font-black">→</span>
          </button>

          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search church, district, zip, or region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0284C7] focus:bg-white transition-all shadow-2xs"
            />
          </div>

          {/* Available Zones Header */}
          <div className="pt-1">
            <span className="text-[10px] font-extrabold text-[#64748B] uppercase tracking-wider block mb-2 px-1">
              ACTIVE MINISTRY NETWORKS ({filteredZones.length})
            </span>

            <div className="space-y-2.5">
              {filteredZones.map((zone) => {
                const isSelected = selectedZone === zone.name

                return (
                  <div
                    key={zone.name}
                    onClick={() => handleSelectZone(zone.name)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between shadow-xs ${
                      isSelected
                        ? 'bg-sky-50/70 border-[#0284C7]'
                        : 'bg-white border-slate-200/80 hover:border-sky-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isSelected ? 'bg-[#0284C7] text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <Church className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-xs font-bold text-[#0F172A] truncate">
                            {zone.name}
                          </h4>
                          <span className="text-[9px] font-bold text-[#16A34A] bg-green-50 px-1.5 py-0.2 rounded flex-shrink-0">
                            {zone.eta}
                          </span>
                        </div>
                        <p className="text-[10px] text-[#64748B] truncate mt-0.5">
                          Zip: {zone.pincode} • {zone.county} • {zone.activeChurches} Churches Active
                        </p>
                      </div>
                    </div>

                    {isSelected ? (
                      <div className="w-6 h-6 rounded-full bg-[#0284C7] text-white flex items-center justify-center shadow-xs flex-shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    ) : (
                      <div className="text-slate-400 font-bold flex-shrink-0 text-sm">›</div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Footer Guarantee */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#64748B] px-5 flex-shrink-0">
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>Official AssessME.org ChMS Data Bridge</span>
          </span>
          <span className="font-bold text-[#0284C7]">2,500+ Hubs</span>
        </div>
      </div>
    </div>
  )
}
