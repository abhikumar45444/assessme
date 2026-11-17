import { useState } from 'react'
import {
  Bell, CheckCircle2, ChevronRight, MapPin, Database,
  Shield, Globe, Phone, Star, Check, ArrowLeft, RefreshCw, Sparkles
} from 'lucide-react'

export default function PastorProfileScreen({
  onOpenConsultation,
  onOpenNetworkModal,
  selectedNetwork,
  onBack
}) {
  const [language, setLanguage] = useState('en')
  const [syncStatus, setSyncStatus] = useState('idle')
  const [notificationBellCount, setNotificationBellCount] = useState(1)

  const handleSyncChms = () => {
    setSyncStatus('syncing')
    setTimeout(() => {
      setSyncStatus('done')
      setTimeout(() => setSyncStatus('idle'), 3500)
    }, 1200)
  }

  return (
    <div className="flex-1 flex flex-col bg-[#F4F5F6] pb-24 font-sans select-none overflow-y-auto no-scrollbar scrollbar-hide">
      {/* 1. Header */}
      <div className="px-5 pt-3.5 md:pt-12 pb-3.5 flex items-center justify-between bg-white border-b border-[#ECECEC]">
        <div className="flex items-center gap-2.5 min-w-0">
          {onBack && (
            <button
              onClick={onBack}
              className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 hover:bg-slate-100 active:scale-95 transition-all cursor-pointer flex-shrink-0"
              aria-label="Back to Home"
            >
              <ArrowLeft className="w-4 h-4 text-slate-700" />
            </button>
          )}
          <h2 className="text-base font-extrabold font-cabin text-[#111518] tracking-tight truncate">
            Pastor & Ministry Profile
          </h2>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setNotificationBellCount(0)}
            className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 relative hover:bg-slate-100 active:scale-95 transition-all cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4 text-slate-600" />
            {notificationBellCount > 0 && (
              <span className="w-2 h-2 rounded-full bg-[#E17335] absolute top-2 right-2 ring-2 ring-white" />
            )}
          </button>

          <div className="w-9 h-9 rounded-full bg-[#E17335] text-white flex items-center justify-center font-black text-xs shadow-xs">
            AM
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Sync Toast Alert */}
        {syncStatus === 'done' && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-2.5 shadow-xs animate-scale-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <p className="text-xs text-[#111518] font-semibold">
              ChMS profiles successfully synchronized! 412 candidates up to date.
            </p>
          </div>
        )}

        {/* 2. Customer Summary Card */}
        <div className="bg-white rounded-3xl p-4 border border-[#ECECEC] shadow-card">
          <div className="flex items-start justify-between mb-3.5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-13 h-13 rounded-full bg-[#111518] text-white flex items-center justify-center font-black font-cabin text-lg shadow-sm border-2 border-slate-100">
                  AM
                </div>
                <div className="w-4.5 h-4.5 rounded-full bg-[#E17335] text-white flex items-center justify-center absolute -bottom-0.5 -right-0.5 shadow-xs">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold font-cabin text-[#111518] leading-tight">
                  Grace Point Community
                </h3>
                <p className="text-[11px] text-[#696767] font-medium mt-0.5">
                  Pastor David Evans • Lead Pastor
                </p>
                <p className="text-[10px] text-[#696767] font-normal truncate mt-0.5">
                  pastor.evans@gracepointchurch.org
                </p>
              </div>
            </div>

            <span className="px-2 py-0.5 rounded-full bg-orange-50 text-[#E17335] border border-orange-200 text-[9px] font-black uppercase tracking-tight flex items-center gap-1 shadow-2xs">
              <CheckCircle2 className="w-3 h-3 text-[#E17335]" />
              VERIFIED
            </span>
          </div>

          {/* 3-column stats */}
          <div className="grid grid-cols-3 gap-1 p-2.5 bg-[#F4F5F6] rounded-2xl text-center border border-[#ECECEC]">
            <div>
              <span className="text-sm font-black font-cabin text-[#111518] block leading-none mb-1">
                06
              </span>
              <span className="text-[9px] font-bold text-[#696767] uppercase tracking-wider">
                ASSESSMENTS
              </span>
            </div>

            <div className="border-x border-slate-200">
              <span className="text-sm font-black font-cabin text-[#111518] flex items-center justify-center gap-0.5 leading-none mb-1">
                4.99 <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              </span>
              <span className="text-[9px] font-bold text-[#696767] uppercase tracking-wider">
                RATING
              </span>
            </div>

            <div>
              <span className="text-sm font-black font-cabin text-[#111518] block leading-none mb-1">
                ANNUAL
              </span>
              <span className="text-[9px] font-bold text-[#696767] uppercase tracking-wider">
                LICENSE
              </span>
            </div>
          </div>
        </div>

        {/* 3. ChMS Live Sync Status Banner */}
        <div className="bg-white rounded-2xl p-3.5 border border-[#ECECEC] shadow-card flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#E17335] flex items-center justify-center flex-shrink-0 shadow-2xs">
              <Database className="w-5 h-5 text-[#E17335]" />
            </div>
            <div>
              <span className="text-[9px] font-black text-[#E17335] uppercase tracking-wider block leading-tight">
                PUSHPAY CCB & PCO SYNC
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-xs font-black text-emerald-600">
                  412 Profiles
                </span>
                <span className="text-[10px] text-[#696767] font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  Auto-Sync OK
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handleSyncChms}
            disabled={syncStatus === 'syncing'}
            className="px-3.5 py-2 rounded-xl bg-[#E17335] hover:bg-[#EC600F] active:scale-95 text-white font-bold text-xs shadow-xs cursor-pointer transition-all flex items-center gap-1.5 flex-shrink-0"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${syncStatus === 'syncing' ? 'animate-spin' : ''}`} />
            <span>{syncStatus === 'syncing' ? 'Syncing...' : 'Sync'}</span>
          </button>
        </div>

        {/* 4. Ministry Network Selector */}
        <div className="bg-white rounded-2xl p-4 border border-[#ECECEC] shadow-card space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#E17335]" />
              <span className="text-xs font-bold text-[#111518]">Ministry District Network</span>
            </div>
            <button
              onClick={onOpenNetworkModal}
              className="text-xs font-bold text-[#E17335] hover:underline cursor-pointer flex items-center gap-1"
            >
              Change
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="p-3 bg-[#F4F5F6] rounded-xl text-xs flex justify-between items-center">
            <div>
              <span className="font-bold text-[#111518] block">{selectedNetwork?.name || 'Southern California Hub'}</span>
              <span className="text-[11px] text-[#696767]">{selectedNetwork?.county || 'West Coast Ministry Network'}</span>
            </div>
            <span className="px-2 py-0.5 bg-orange-100 text-[#E17335] font-bold text-[10px] rounded-full">
              {selectedNetwork?.activeChurches || 412} Churches
            </span>
          </div>
        </div>

        {/* 5. ChMS Integration Connectors */}
        <div className="bg-white rounded-2xl p-4 border border-[#ECECEC] shadow-card space-y-3">
          <div className="flex items-center gap-2.5">
            <Database className="w-4 h-4 text-[#E17335]" />
            <span className="text-xs font-bold text-[#111518]">Connected Church Management Systems</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F4F5F6]">
              <span className="font-semibold text-[#111518]">Pushpay Church Community Builder (CCB)</span>
              <span className="text-emerald-600 font-bold text-[11px]">Connected</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F4F5F6]">
              <span className="font-semibold text-[#111518]">Planning Center Online (PCO)</span>
              <span className="text-emerald-600 font-bold text-[11px]">Connected</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F4F5F6]">
              <span className="font-semibold text-[#111518]">Breeze ChMS</span>
              <span className="text-slate-400 font-normal text-[11px]">Ready to Connect</span>
            </div>
          </div>
        </div>

        {/* 6. Language Settings */}
        <div className="bg-white rounded-2xl p-4 border border-[#ECECEC] shadow-card flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Globe className="w-4 h-4 text-[#E17335]" />
            <span className="text-xs font-bold text-[#111518]">Assessment Language</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#F4F5F6] p-1 rounded-xl text-xs font-bold">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                language === 'en' ? 'bg-white text-[#E17335] shadow-xs' : 'text-slate-600'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                language === 'es' ? 'bg-white text-[#E17335] shadow-xs' : 'text-slate-600'
              }`}
            >
              Español
            </button>
          </div>
        </div>

        {/* 7. Pastoral Support Call Card */}
        <div className="bg-gradient-to-br from-[#111518] to-[#1F2428] rounded-2xl p-4 text-white shadow-card space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-bold text-white">Pastoral Ministry Helpline</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 font-bold">
              Toll Free
            </span>
          </div>
          <p className="text-xs text-slate-300">
            Dedicated team available to assist church leadership with candidate placements & ChMS integration setup.
          </p>
          <div className="flex items-center justify-between pt-1">
            <a
              href="tel:8002445999"
              className="text-xs font-black text-orange-400 hover:text-orange-300"
            >
              (800) 244-5999
            </a>
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 rounded-xl bg-[#E17335] hover:bg-[#EC600F] text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
            >
              Book 1-on-1 Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
