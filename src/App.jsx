import { useState } from 'react'
import PhoneShell from './components/PhoneShell'
import SplashScreen from './components/SplashScreen'
import NavBar from './components/NavBar'
import NetworkModal from './components/NetworkModal'
import AssessmentDetailModal from './components/AssessmentDetailModal'
import HomeScreen from './screens/HomeScreen'
import AssessmentsScreen from './screens/AssessmentsScreen'
import PlanScreen from './screens/PlanScreen'
import MinistryFitQuiz from './screens/MinistryFitQuiz'
import ConsultationScreen from './screens/ConsultationScreen'
import PastorProfileScreen from './screens/PastorProfileScreen'
import { getAssetUrl } from './utils/assets'

export default function App() {
  const [splashDone, setSplashDone] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [plan, setPlan] = useState([
    {
      id: 'grace-gifts',
      name: 'GraceGifts™ Spiritual Gifts Assessment',
      category: 'spiritual-gifts',
      tagline: 'Biblical Spiritual Gifts Filtered by Personality',
      price: 12,
      qty: 10,
      image: getAssetUrl('/hero-gracegifts.jpg'),
    },
  ])
  const [selectedAssessment, setSelectedAssessment] = useState(null)
  const [showConsultation, setShowConsultation] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [selectedZone, setSelectedZone] = useState('Southern California Hub (San Diego & OC)')
  const [showZoneModal, setShowZoneModal] = useState(false)

  const addToPlan = (assessment, qty = 1) => {
    setPlan((prev) => {
      const existing = prev.find((i) => i.id === assessment.id)
      if (existing) {
        return prev.map((i) =>
          i.id === assessment.id ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [...prev, { ...assessment, qty }]
    })
  }

  const removeFromPlan = (id) => setPlan((prev) => prev.filter((i) => i.id !== id))

  const updatePlanQty = (id, qty) => {
    if (qty <= 0) return removeFromPlan(id)
    setPlan((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)))
  }

  const planCount = plan.reduce((s, i) => s + (i.qty || 0), 0)

  if (!splashDone) {
    return (
      <PhoneShell>
        <SplashScreen onDone={() => setSplashDone(true)} />
      </PhoneShell>
    )
  }

  if (showConsultation) {
    return (
      <PhoneShell>
        <ConsultationScreen onBack={() => setShowConsultation(false)} />
      </PhoneShell>
    )
  }

  if (showProfile) {
    return (
      <PhoneShell>
        <PastorProfileScreen
          onBack={() => setShowProfile(false)}
          onOpenConsultation={() => {
            setShowProfile(false)
            setShowConsultation(true)
          }}
          onOpenNetworkModal={() => setShowZoneModal(true)}
          selectedNetwork={{ name: selectedZone, county: 'West Coast Ministry Network', activeChurches: 412 }}
        />
      </PhoneShell>
    )
  }

  const isModalOpen = !!selectedAssessment || showZoneModal

  return (
    <PhoneShell isLocked={isModalOpen}>
      <div className="flex flex-col flex-1 relative h-full overflow-hidden">
        <div
          className={`flex-1 ${
            isModalOpen ? 'overflow-hidden' : 'overflow-y-auto'
          } no-scrollbar scrollbar-hide pb-2`}
        >
          {activeTab === 'home' && (
            <HomeScreen
              onOpenAssessments={() => setActiveTab('assessments')}
              onOpenQuiz={() => setActiveTab('quiz')}
              onOpenConsultation={() => setShowConsultation(true)}
              onOpenProfile={() => setShowProfile(true)}
              onSelectAssessment={setSelectedAssessment}
              selectedZone={selectedZone}
              onOpenZoneModal={() => setShowZoneModal(true)}
              onOpenPlan={() => setActiveTab('plan')}
              planCount={planCount}
            />
          )}

          {activeTab === 'assessments' && (
            <AssessmentsScreen
              onSelectAssessment={setSelectedAssessment}
              onAddToPlan={addToPlan}
            />
          )}

          {activeTab === 'plan' && (
            <PlanScreen
              plan={plan}
              onClearAll={() => setPlan([])}
              onRemove={removeFromPlan}
              onUpdateQty={updatePlanQty}
              onExplore={() => setActiveTab('assessments')}
            />
          )}

          {activeTab === 'quiz' && (
            <MinistryFitQuiz
              onSelectAssessment={(assessment) => {
                setActiveTab('assessments')
                setSelectedAssessment(assessment)
              }}
              onOpenConsultation={() => setShowConsultation(true)}
            />
          )}
        </div>

        <NavBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          planCount={planCount}
        />
      </div>

      <AssessmentDetailModal
        isOpen={!!selectedAssessment}
        assessment={selectedAssessment}
        onClose={() => setSelectedAssessment(null)}
        onOpenConsultation={() => {
          setSelectedAssessment(null)
          setShowConsultation(true)
        }}
        onAddToPlan={(assessment) => {
          addToPlan(assessment, 10)
        }}
      />

      <NetworkModal
        isOpen={showZoneModal}
        onClose={() => setShowZoneModal(false)}
        selectedZone={selectedZone}
        onSelectZone={setSelectedZone}
      />
    </PhoneShell>
  )
}
