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
      return ASSESSMENTS.find((a) => a.id === 'grace-gifts') || ASSESSMENTS[0]
    }
    if (answers.temperament === 'encourager' || answers.temperament === 'steady') {
      return ASSESSMENTS.find((a) => a.id === 'epersonality') || ASSESSMENTS[1]
    }
    if (answers.calling === 'logistics') {
      return ASSESSMENTS.find((a) => a.id === 'skills-tracking') || ASSESSMENTS[3]
    }
    return ASSESSMENTS.find((a) => a.id === 'grace-gifts') || ASSESSMENTS[0]
  }

  const recommended = getRecommendedAssessment()

  return (
    <div className="flex-1 flex flex-col bg-[#F8FAFC] pb-16 font-sans select-none min-h-full">
      {/* 1. Header */}
      <div className="px-5 pt-3.5 md:pt-12 pb-3 bg-white border-b border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-black text-[#0B192C] leading-tight">
            Ministry Fit Diagnostic
          </h2>
          <p className="text-[11px] text-[#64748B]">
            AssessME Smart Volunteer Advisor
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
      </div>

      {isFinished ? (
        /* Results / Prescription Screen */
        <div className="flex-1 overflow-y-auto no-scrollbar scrollbar-hide p-5 space-y-4">
          {/* Recommended Assessment Card */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-[#0284C7] via-[#0369a1] to-[#0B192C] text-white shadow-xl shadow-sky-950/20">
            <div className="flex items-center gap-2 text-sky-200 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-sky-300" />
              <span>Prescribed Assessment Solution</span>
            </div>

            <h3 className="text-xl font-black mb-1.5 leading-tight text-white">
              {recommended.name}
            </h3>
            <p className="text-xs text-sky-100/90 leading-relaxed mb-4">
              {recommended.tagline}
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 mb-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-sky-200">Optimal Placement:</span>
                <span className="font-bold text-white">99.4% Fit Match</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-sky-200">ChMS Synchronization:</span>
                <span className="font-bold text-emerald-300">Instant Automated Sync</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-sky-200">Starting At:</span>
                <span className="font-black text-white text-sm">${recommended.price} / seat</span>
              </div>
            </div>

            <button
              onClick={() => onSelectAssessment(recommended)}
              className="w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-sky-50 active:scale-95 text-[#0284C7] font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
            >
              <span>Explore Assessment Specs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Ministry Role Insights */}
          <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-xs space-y-2.5">
            <h4 className="text-xs font-bold text-[#0B192C] flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#0284C7]" />
              <span>Recommended Ministry Placements</span>
            </h4>
            <div className="space-y-2 text-xs text-[#64748B]">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Small Group Leader, Discipleship Mentor, or Care Coordinator</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Hospitality Welcome Host or Community Outreach Champion</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Ministry Department Lead or New Campus Launch Core Member</span>
              </div>
            </div>
          </div>

          {/* Book Consultation Banner */}
          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-between gap-3">
            <div>
              <h5 className="text-xs font-bold text-[#0B192C]">Need Pastor Consultation?</h5>
              <p className="text-[11px] text-[#64748B]">Schedule a 1-on-1 church mobilization demo</p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="px-3.5 py-2 rounded-xl bg-[#0284C7] text-white text-xs font-bold shadow-xs hover:bg-[#0369a1] active:scale-95 cursor-pointer transition-all flex-shrink-0"
            >
              Book Demo
            </button>
          </div>
        </div>
      ) : (
        /* Quiz Questions Flow */
        <div className="flex-1 overflow-y-auto no-scrollbar scrollbar-hide p-5 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Progress Bar */}
            <div>
              <div className="flex justify-between items-center text-[11px] font-bold text-[#64748B] mb-1.5 uppercase tracking-wider">
                <span>Question {currentStep + 1} of {totalQuestions}</span>
                <span>{progressPercent}% Complete</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0284C7] rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-xs">
              <h3 className="text-sm font-black text-[#0B192C] leading-snug mb-4">
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
                          ? 'border-[#0284C7] bg-sky-50/70 shadow-xs'
                          : 'border-slate-100 hover:border-slate-200 bg-white'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <span className="block text-xs font-bold text-[#0B192C] leading-snug">
                          {option.label}
                        </span>
                        {option.desc && (
                          <span className="block text-[11px] text-[#64748B] mt-0.5 leading-snug">
                            {option.desc}
                          </span>
                        )}
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                          isSelected
                            ? 'border-[#0284C7] bg-[#0284C7] text-white'
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
        </div>
      )}
    </div>
  )
}
