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
      <div className="w-full bg-white rounded-t-[36px] max-h-[92dvh] md:max-h-[92%] h-[92dvh] md:h-[92%] flex flex-col overflow-hidden shadow-2xl border-t border-[#ECECEC] z-10 transition-transform duration-300">
        {/* Top drag handle indicator */}
        <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto my-3 flex-shrink-0" />

        {/* Top header */}
        <div className="px-5 pb-3 flex items-center justify-between border-b border-[#ECECEC] flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h3 className="text-sm font-black font-cabin text-[#111518]">Select Ministry Network</h3>
              <p className="text-[11px] text-[#696767]">Regional support & ChMS database cluster</p>
            </div>
          </div>
        </div>

        {/* Modal content body */}
        <div className="flex-1 overflow-y-auto no-scrollbar scrollbar-hide p-5 space-y-4">
          {/* GPS Auto-detect button */}
          <button
            onClick={handleAutoDetect}
            disabled={isDetecting}
            className="w-full p-3.5 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-between hover:bg-orange-100/70 transition-all cursor-pointer group shadow-2xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#E17335] text-white flex items-center justify-center shadow-xs">
                <Navigation className={`w-4 h-4 ${isDetecting ? 'animate-spin' : ''}`} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-[#111518]">
                  {isDetecting ? 'Locating closest ministry district...' : 'Auto-Detect Church Location'}
                </span>
                <span className="block text-[11px] text-[#E17335] font-medium">
                  Connect to regional mobilization director
                </span>
              </div>
            </div>
          </button>

          {/* Search box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by state, city, or zip code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-[#111518] placeholder-slate-400 outline-none focus:border-[#E17335] transition-colors"
            />
          </div>

          {/* Ministry Zones list */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-[#696767] uppercase tracking-wider block">
              AVAILABLE CHURCH DISTRICTS ({filteredZones.length})
            </span>

            {filteredZones.map((zone) => {
              const isSelected = selectedZone === zone.name

              return (
                <div
                  key={zone.name}
                  onClick={() => handleSelectZone(zone.name)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-orange-50/70 border-[#E17335] shadow-2xs'
                      : 'bg-white border-slate-100 hover:border-slate-200 shadow-2xs'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isSelected ? 'bg-[#E17335] text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Church className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs font-bold text-[#111518]">{zone.name}</h4>
                        {isSelected && (
                          <span className="w-4 h-4 rounded-full bg-[#E17335] text-white flex items-center justify-center text-[10px]">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#696767] mt-0.5">
                        {zone.county} • Zip: {zone.pincode}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                          {zone.eta}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {zone.activeChurches} active churches
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
