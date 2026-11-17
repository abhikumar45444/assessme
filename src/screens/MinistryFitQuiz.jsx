import { useState } from 'react'
import { Sparkles, Calendar, ArrowRight, RotateCcw, Check, HeartHandshake, CheckCircle2 } from 'lucide-react'
import { ASSESSMENTS, QUIZ_QUESTIONS } from '../data'

export default function MinistryFitQuiz({ onSelectAssessment, onOpenConsultation }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [selectedOption, setSelectedOption] = useState(null)
  const [isFinished, setIsFinished] = useState(false)

  const totalQuestions = QUIZ_QUESTIONS.length
  const currentQuestion = QUIZ_QUESTIONS[currentStep]
  const progressPercent = Math.round(((currentStep + 1) / totalQuestions) * 100)

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers({})
    setSelectedOption(null)
    setIsFinished(false)
  }

  const handleSelectOption = (optionId) => {
    setSelectedOption(optionId)
    const updatedAnswers = { ...answers, [currentQuestion.id]: optionId }
    setAnswers(updatedAnswers)

    setTimeout(() => {
      if (currentStep < totalQuestions - 1) {
        setCurrentStep((prev) => prev + 1)
        setSelectedOption(null)
      } else {
        setIsFinished(true)
      }
    }, 220)
  }

  // Determine prescribed assessment recommendation
  const getRecommendedAssessment = () => {
    if (answers.church_size === 'large' || answers.temperament === 'leadership') {
      return ASSESSMENTS.find((a) => a.id === 'all-inclusive-bundle') || ASSESSMENTS[0]
    }
    if (answers.calling === 'teaching' || answers.calling === 'visionary') {
      return ASSESSMENTS.find((a) => a.id === 'grace-gifts') || ASSESSMENTS[1]
    }
    if (answers.temperament === 'encourager' || answers.temperament === 'steady') {
      return ASSESSMENTS.find((a) => a.id === 'epersonality') || ASSESSMENTS[0]
    }
    if (answers.calling === 'logistics') {
      return ASSESSMENTS.find((a) => a.id === 'skills-tracking') || ASSESSMENTS[3]
    }
    return ASSESSMENTS.find((a) => a.id === 'epersonality') || ASSESSMENTS[0]
  }

  const recommended = getRecommendedAssessment()

  return (
    <div className="flex-1 flex flex-col h-full min-h-0 overflow-hidden bg-[#F4F5F6] font-sans select-none">
      {/* 1. Fixed Header (ALWAYS SHOWN AT TOP - NEVER MOVES) */}
      <header className="flex-shrink-0 sticky top-0 z-30 px-5 pt-3.5 md:pt-12 pb-3 bg-white border-b border-[#ECECEC] flex items-center justify-between shadow-2xs">
        <div>
          <h2 className="text-lg font-black font-cabin text-[#111518] leading-tight">
            Ministry Fit Diagnostic
          </h2>
          <p className="text-[11px] text-[#696767]">
            AssessME Smart Volunteer Placement Advisor
          </p>
        </div>

        <button
          onClick={handleRestart}
          className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-600 rounded-full text-xs font-semibold cursor-pointer transition-all shadow-2xs"
          title="Restart Quiz"
        >
          <RotateCcw className="w-3 h-3 text-slate-500" />
          <span>Restart</span>
        </button>
      </header>

      {/* 2. Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar scrollbar-hide p-4 space-y-4 pb-28">
        {isFinished ? (
          /* Results / Prescription Screen */
          <div className="space-y-4">
            {/* Recommended Assessment Card */}
            <div className="p-5 rounded-3xl bg-gradient-to-br from-[#111518] via-[#1F2428] to-[#111518] text-white shadow-card border border-white/10">
              <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-[#E17335]" />
                <span>Prescribed Assessment Solution</span>
              </div>

              <h3 className="text-xl font-black font-cabin mb-1.5 leading-tight text-white">
                {recommended.name}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {recommended.tagline}
              </p>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 mb-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">Optimal Placement:</span>
                  <span className="font-bold text-orange-400">99.4% Fit Match</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">ChMS Synchronization:</span>
                  <span className="font-bold text-emerald-400">Pushpay & PCO Auto-Sync</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">Starting At:</span>
                  <span className="font-black font-cabin text-white text-base">${recommended.price} / seat</span>
                </div>
              </div>

              <button
                onClick={() => onSelectAssessment(recommended)}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#E17335] hover:bg-[#EC600F] active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-orange cursor-pointer transition-all"
              >
                <span>Explore Assessment Specs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Ministry Role Insights */}
            <div className="p-4 bg-white rounded-2xl border border-[#ECECEC] shadow-card space-y-2.5">
              <h4 className="text-xs font-bold font-cabin text-[#111518] flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#E17335]" />
                <span>Recommended Ministry Placements</span>
              </h4>
              <div className="space-y-2 text-xs text-[#565D66]">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#E17335] mt-0.5 flex-shrink-0" />
                  <span>Small Group Leader, Discipleship Mentor, or Care Coordinator</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#E17335] mt-0.5 flex-shrink-0" />
                  <span>Hospitality Welcome Host or Community Outreach Champion</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#E17335] mt-0.5 flex-shrink-0" />
                  <span>Ministry Department Lead or New Campus Launch Core Member</span>
                </div>
              </div>
            </div>

            {/* Book Consultation Banner */}
            <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-between gap-3">
              <div>
                <h5 className="text-xs font-bold font-cabin text-[#111518]">Need Pastor Consultation?</h5>
                <p className="text-[11px] text-[#696767]">Schedule a 1-on-1 church mobilization demo</p>
              </div>
              <button
                onClick={onOpenConsultation}
                className="px-3.5 py-2 rounded-xl bg-[#E17335] text-white text-xs font-bold shadow-xs hover:bg-[#EC600F] active:scale-95 cursor-pointer transition-all flex-shrink-0"
              >
                Book Demo
              </button>
            </div>
          </div>
        ) : (
          /* Quiz Questions Flow */
          <div className="space-y-4">
            {/* Progress Bar */}
            <div>
              <div className="flex justify-between items-center text-[11px] font-bold text-[#696767] mb-1.5 uppercase tracking-wider">
                <span>Question {currentStep + 1} of {totalQuestions}</span>
                <span>{progressPercent}% Complete</span>
              </div>
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#E17335] rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white p-5 rounded-3xl border border-[#ECECEC] shadow-card">
              <h3 className="text-sm font-black font-cabin text-[#111518] leading-snug mb-4">
                {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedOption === option.id
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option.id)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-[#E17335] bg-orange-50/70 shadow-xs'
                          : 'border-slate-100 hover:border-slate-200 bg-white'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <span className="block text-xs font-bold text-[#111518] leading-snug">
                          {option.label}
                        </span>
                        {option.desc && (
                          <span className="block text-[11px] text-[#696767] mt-0.5 leading-snug">
                            {option.desc}
                          </span>
                        )}
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                          isSelected
                            ? 'border-[#E17335] bg-[#E17335] text-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
