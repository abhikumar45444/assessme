import { getAssetUrl } from './utils/assets'

// Assessment product catalog data
export const ASSESSMENTS = [
  {
    id: 'grace-gifts',
    name: 'GraceGifts™ Spiritual Gifts Assessment',
    category: 'spiritual-gifts',
    tagline: 'Biblical Spiritual Gifts Filtered by Personality',
    price: 12,
    originalPrice: 19,
    annualPrice: 299,
    rating: 4.99,
    reviewsCount: 1420,
    badge: 'Flagship',
    isBestSeller: true,
    image: getAssetUrl('/hero-gracegifts.jpg'),
    gallery: [
      getAssetUrl('/hero-gracegifts.jpg'),
      getAssetUrl('/sample-report-1.jpg'),
      getAssetUrl('/church-team-1.jpg')
    ],
    features: [
      'Identifies 24 distinct New Testament spiritual gifts with contextual placement scoring',
      'Filters spiritual gifts through personal temperament so members understand HOW they serve',
      'Automated 1-way and 2-way API synchronization into Planning Center and Pushpay ChMS profiles',
      'Includes individual 8-page actionable PDF growth reports with ministry role suggestions'
    ],
    dimensions: [
      { num: 1, title: 'Motivational Gifts Inventory', desc: 'Evaluates inner spiritual motivation based on Romans 12.' },
      { num: 2, title: 'Ministry Manifestation Matrix', desc: 'Contextualizes gifts for modern volunteer team dynamics (1 Cor 12).' },
      { num: 3, title: 'Temperament Synergy Filter', desc: 'Analyzes whether a member thrives in high-people or high-task roles.' },
      { num: 4, title: 'Burnout Prevention Indicator', desc: 'Alerts pastors if a volunteer is currently serving out of their calling.' },
      { num: 5, title: 'Custom Church Ministry Role Match', desc: 'Maps candidate gifts directly to your open volunteer positions.' }
    ],
    specs: {
      completionTime: '12 - 15 Minutes',
      questionsCount: '60 Contextual Scenarios',
      delivery: 'Instant Online + Mobile Friendly',
      integrations: 'Planning Center, Pushpay, CCB, Breeze',
      reportFormat: 'Interactive Web Dashboard + 8-Page PDF'
    }
  },
  {
    id: 'epersonality',
    name: 'ePersonality™ Ministry Temperament Profile',
    category: 'personality',
    tagline: 'DISC-Enhanced Ministry Behavior Assessment',
    price: 12,
    originalPrice: 19,
    annualPrice: 279,
    rating: 4.96,
    reviewsCount: 890,
    badge: 'Team Dynamics',
    isBestSeller: true,
    image: getAssetUrl('/hero-personality.jpg'),
    gallery: [
      getAssetUrl('/hero-personality.jpg'),
      getAssetUrl('/sample-report-2.jpg'),
      getAssetUrl('/church-team-2.jpg')
    ],
    features: [
      'Tailored specifically for church and ministry cultures, avoiding sterile corporate jargon',
      'Pinpoints natural communication styles, relational triggers, and conflict resolution defaults',
      'Equips small group leaders and ministry heads to build harmonious, complementary teams',
      'Full compatibility with Church Management System member profiles'
    ],
    dimensions: [
      { num: 1, title: 'Directive (Dominance in Ministry)', desc: 'Measures pace, decisiveness, and willingness to pioneer new ministries.' },
      { num: 2, title: 'Interactive (Influence & Welcome)', desc: 'Assesses warmth, charisma, and hospitality in volunteer roles.' },
      { num: 3, title: 'Supportive (Steadiness & Care)', desc: 'Evaluates loyalty, reliability, patience, and pastoral empathy.' },
      { num: 4, title: 'Conscientious (Clarity & Detail)', desc: 'Measures biblical thoroughness, logistical excellence, and accuracy.' }
    ],
    specs: {
      completionTime: '10 - 12 Minutes',
      questionsCount: '48 Forced-Choice Quadrants',
      delivery: 'Instant Online Dashboard',
      integrations: 'All Major ChMS Platforms',
      reportFormat: 'Comprehensive 10-Page Profile'
    }
  },
  {
    id: 'leadership-style',
    name: 'Leadership Style Assessment',
    category: 'leadership',
    tagline: 'Staff, Elder & Ministry Coordinator Placement',
    price: 15,
    originalPrice: 24,
    annualPrice: 349,
    rating: 4.93,
    reviewsCount: 610,
    badge: 'Staff & Elders',
    isBestSeller: false,
    image: getAssetUrl('/hero-leadership.jpg'),
    gallery: [
      getAssetUrl('/hero-leadership.jpg'),
      getAssetUrl('/sample-report-1.jpg'),
      getAssetUrl('/church-team-1.jpg')
    ],
    features: [
      'Evaluates high-capacity leaders across 4 essential ministry leadership pillars',
      'Ideal for screening pastoral candidates, deacon boards, and youth ministry directors',
      'Provides strategic insights into strategic vs pastoral decision-making under pressure',
      'Generates interview questions tailored to the candidate profile'
    ],
    dimensions: [
      { num: 1, title: 'Visionary Pioneer', desc: 'Ability to cast Kingdom vision and rally people into new territories.' },
      { num: 2, title: 'Shepherd Protector', desc: 'Heart for pastoral care, member counseling, and spiritual safety.' },
      { num: 3, title: 'Operational Architect', desc: 'Systems builder optimizing budget, facilities, and staff workflows.' },
      { num: 4, title: 'Empowering Developer', desc: 'Multiplies leaders through intentional discipleship and delegation.' }
    ],
    specs: {
      completionTime: '15 - 18 Minutes',
      questionsCount: '72 Evaluative Questions',
      delivery: 'Confidential Candidate Link',
      integrations: 'Church Staff & HR Pipelines',
      reportFormat: '14-Page Executive Dossier'
    }
  },
  {
    id: 'skills-tracking',
    name: 'Skills & Trades Marketplace Tracker',
    category: 'skills',
    tagline: 'Professional & Marketplace Trades Inventory',
    price: 8,
    originalPrice: 14,
    annualPrice: 199,
    rating: 4.88,
    reviewsCount: 430,
    badge: 'Practical Trades',
    isBestSeller: false,
    image: getAssetUrl('/hero-skills.jpg'),
    gallery: [
      getAssetUrl('/hero-skills.jpg'),
      getAssetUrl('/sample-report-2.jpg'),
      getAssetUrl('/church-team-2.jpg')
    ],
    features: [
      'Uncovers hidden skills in your pews: audio/video, carpentry, legal, accounting, IT, counseling',
      'Saves thousands of dollars annually in church contractor and maintenance expenses',
      'Engages members who prefer hands-on, practical service over upfront public roles',
      'Searchable skills database with one-click volunteer blast messaging'
    ],
    dimensions: [
      { num: 1, title: 'Media, Tech & Creative', desc: 'Video production, audio engineering, lighting, graphic design, social media.' },
      { num: 2, title: 'Construction & Trades', desc: 'Electrical, plumbing, carpentry, HVAC, landscaping, facility repair.' },
      { num: 3, title: 'Professional & Governance', desc: 'Legal counsel, CPA finance, medical first aid, human resources.' },
      { num: 4, title: 'Hospitality & Events', desc: 'Culinary prep, event coordination, security, transportation.' }
    ],
    specs: {
      completionTime: '5 - 8 Minutes',
      questionsCount: 'Dynamic Multi-Select Grid',
      delivery: 'Mobile Check-In Integration',
      integrations: 'Planning Center Services & People',
      reportFormat: 'Searchable Church-Wide Directory'
    }
  },
  {
    id: 'nextsteps-discipleship',
    name: 'NextSteps™ Discipleship Pathway Tracker',
    category: 'discipleship',
    tagline: 'Spiritual Formation & Growth Tracking Engine',
    price: 18,
    originalPrice: 29,
    annualPrice: 399,
    rating: 4.97,
    reviewsCount: 520,
    badge: 'Formation',
    isBestSeller: false,
    image: getAssetUrl('/hero-gracegifts.jpg'),
    gallery: [
      getAssetUrl('/hero-gracegifts.jpg'),
      getAssetUrl('/sample-report-1.jpg'),
      getAssetUrl('/church-team-1.jpg')
    ],
    features: [
      'Customizable discipleship pipeline measuring prayer life, scripture engagement, and stewardship',
      'Helps pastors identify who is ready to be discipled vs who is ready to become a disciple-maker',
      'Automated check-ins and encouragement reminders sent to candidate phones',
      'Cohorts and small group spiritual health dashboards'
    ],
    dimensions: [
      { num: 1, title: 'Spiritual Habits Baseline', desc: 'Consistent prayer, personal devotion, and Sabbath rhythm tracking.' },
      { num: 2, title: 'Biblical Literacy & Doctrine', desc: 'Sound understanding of essential Christian faith tenets.' },
      { num: 3, title: 'Kingdom Stewardship', desc: 'Generosity, hospitality, and sacrificial service orientation.' },
      { num: 4, title: 'Missional Living', desc: 'Personal evangelism, local outreach, and global mission engagement.' }
    ],
    specs: {
      completionTime: '15 Minutes Periodic Check-in',
      questionsCount: '50 Reflection Rubrics',
      delivery: 'Self-Paced Mobile Journal',
      integrations: 'Pushpay Groups, PCO Groups',
      reportFormat: 'Discipleship Journey Roadmap'
    }
  },
  {
    id: 'all-inclusive-bundle',
    name: 'Complete Church Mobilization Suite',
    category: 'bundle',
    tagline: 'Unlimited Congregation Assessment License',
    price: 499,
    originalPrice: 799,
    annualPrice: 499,
    rating: 5.0,
    reviewsCount: 780,
    badge: 'Best Value',
    isBestSeller: true,
    image: getAssetUrl('/hero-gracegifts.jpg'),
    gallery: [
      getAssetUrl('/hero-gracegifts.jpg'),
      getAssetUrl('/hero-personality.jpg'),
      getAssetUrl('/hero-leadership.jpg')
    ],
    features: [
      'Unlimited assessments for GraceGifts, ePersonality, Leadership, and Skills Tracking for 1 full year',
      'Full 2-way live sync with Planning Center People, Pushpay ChMS, Breeze, and CCB',
      'Includes dedicated Church Onboarding Concierge & staff coaching webinar',
      '30-Day unconditional money-back guarantee for your ministry'
    ],
    dimensions: [
      { num: 1, title: 'All 4 Core Assessments', desc: 'GraceGifts, ePersonality, Leadership Style, Skills Inventory.' },
      { num: 2, title: 'Unlimited Candidate Seats', desc: 'Deploy across entire church membership without per-person caps.' },
      { num: 3, title: 'Automated ChMS Webhooks', desc: 'Zero manual data entry for church administrative staff.' },
      { num: 4, title: 'Volunteer Placement Matcher', desc: 'Automated algorithm linking member gifts to open ministries.' }
    ],
    specs: {
      licenseType: 'Unlimited Church-Wide Annual License',
      onboarding: 'Dedicated 1-on-1 Ministry Concierge',
      guarantee: '100% Satisfaction or Full Refund',
      integrations: 'Universal API + Direct ChMS Connect',
      support: 'Priority Pastoral Telephone & Video Support'
    }
  }
]

export const CATEGORIES = [
  { id: 'all', name: 'All Assessments', count: 6 },
  { id: 'spiritual-gifts', name: 'Spiritual Gifts', count: 1 },
  { id: 'personality', name: 'Temperament', count: 1 },
  { id: 'leadership', name: 'Leadership & Staff', count: 1 },
  { id: 'skills', name: 'Skills & Trades', count: 1 },
  { id: 'bundle', name: 'Church Suites', count: 1 },
]

export const PASTORS = [
  {
    name: 'Pastor David Evans',
    title: 'Senior Pastor, Grace Fellowship',
    location: 'San Diego, CA',
    quote: 'AssessME eliminated the volunteer revolving door in our church. Our people are now serving with deep joy in their authentic sweet spots.',
    image: getAssetUrl('/pastor-1.jpg'),
    initials: 'DE',
  },
  {
    name: 'Dr. Sarah Jenkins',
    title: 'Discipleship & Executive Director',
    location: 'Austin, TX',
    quote: 'We connected AssessME directly into Planning Center. Every member class takes GraceGifts, and our 1-year volunteer retention surged by 68%.',
    image: getAssetUrl('/pastor-2.jpg'),
    initials: 'SJ',
  },
  {
    name: 'Pastor Marcus Rivera',
    title: 'Lead Pastor, Hope Valley Church',
    location: 'Atlanta, GA',
    quote: 'The synergy between ePersonality and Spiritual Gifts is unmatched. It prevents volunteer burnout before it starts.',
    image: getAssetUrl('/pastor-3.jpg'),
    initials: 'MR',
  },
]

export const CHURCH_INSTALLATIONS = [
  {
    churchName: 'Grace Point Community',
    system: 'Whole-Church GraceGifts & Planning Center Sync',
    image: getAssetUrl('/church-team-1.jpg'),
    badge: '1,200 Members',
  },
  {
    churchName: 'Saddleback Valley Church',
    system: 'Staff Leadership & Deacon Placement',
    image: getAssetUrl('/church-team-2.jpg'),
    badge: 'Multi-Campus',
  },
  {
    churchName: 'The Rock Fellowship',
    system: 'Skills Inventory & Volunteer Mobilization',
    image: getAssetUrl('/sample-report-1.jpg'),
    badge: 'Zero Volunteer Burnout',
  },
  {
    churchName: 'Cornerstone City Church',
    system: 'NextSteps Discipleship Pipeline',
    image: getAssetUrl('/sample-report-2.jpg'),
    badge: 'Church Plant Hub',
  },
]

export const CHURCH_ZONES = [
  { name: 'Southern California Hub (San Diego & OC)', pincode: '92101', county: 'West Coast Ministry Network', eta: 'Instant Sync', activeChurches: 412 },
  { name: 'Texas Lone Star Network (Dallas & Austin)', pincode: '75201', county: 'South Central District', eta: 'Instant Sync', activeChurches: 538 },
  { name: 'Southeast Gospel Coalition (Atlanta & Nashville)', pincode: '30301', county: 'Southeast Regional Alliance', eta: 'Instant Sync', activeChurches: 380 },
  { name: 'Midwest Ministry Alliance (Chicago & Indy)', pincode: '60601', county: 'Great Lakes Church Network', eta: 'Instant Sync', activeChurches: 295 },
  { name: 'Pacific Northwest Network (Seattle & Portland)', pincode: '98101', county: 'Cascadia Church Planting Hub', eta: 'Instant Sync', activeChurches: 210 },
  { name: 'National & Global Online Ministry (All States)', pincode: '10001', county: 'Cloud ChMS Universal Network', eta: 'Instant Sync', activeChurches: 1850 },
]

export const CHMS_INTEGRATIONS = [
  { id: 'pco', name: 'Planning Center People', desc: 'Auto-populates spiritual gifts and personality tags on member cards.' },
  { id: 'pushpay', name: 'Pushpay ChMS', desc: 'Live two-way sync into Pushpay member records and process queues.' },
  { id: 'ccb', name: 'Church Community Builder', desc: 'Fills custom profile fields and triggers automated volunteer workflows.' },
  { id: 'breeze', name: 'Breeze ChMS', desc: 'Seamless volunteer tags and instant ministry roster placement.' },
]

export const QUIZ_QUESTIONS = [
  {
    id: 'calling',
    question: 'Where do you feel most energized serving in your community?',
    options: [
      {
        id: 'teaching',
        label: 'Teaching, Mentoring & Small Groups',
        desc: 'Explaining scripture, discipling individuals, and fostering spiritual growth'
      },
      {
        id: 'logistics',
        label: 'Behind-The-Scenes Tech, Logistics & Helps',
        desc: 'Audio/video, event staging, facility crafts, and practical operational execution'
      },
      {
        id: 'counseling',
        label: 'Caring for the Sick, Hurting & Hospital Visits',
        desc: 'Compassionate one-on-one listening, prayer ministry, and emotional support'
      },
      {
        id: 'visionary',
        label: 'Starting New Outreach Ministries & Vision',
        desc: 'Rallying teams, neighborhood evangelism, and launching fresh community initiatives'
      }
    ]
  },
  {
    id: 'temperament',
    question: 'How do you naturally collaborate with teammates?',
    options: [
      {
        id: 'leadership',
        label: 'Leading the Charge & Setting Strategic Goals',
        desc: 'Decisive, results-oriented, and comfortable making tough ministry calls'
      },
      {
        id: 'encourager',
        label: 'Inspiring, Welcoming & Bringing People Together',
        desc: 'Relational, enthusiastic, and passionate about community hospitality'
      },
      {
        id: 'steady',
        label: 'Faithfully Supporting Behind the Scenes',
        desc: 'Dependable, peacemaking, patient, and highly reliable over the long haul'
      },
      {
        id: 'analyst',
        label: 'Organizing Systems, Budgets & Deep Accuracy',
        desc: 'Detail-driven, thoughtful, and ensuring excellence in church stewardship'
      }
    ]
  },
  {
    id: 'church_size',
    question: 'What is the current size of your church or ministry team?',
    options: [
      {
        id: 'small',
        label: 'Under 200 Members (Church Plant or Intimate Fellowship)',
        desc: 'Key need: multi-hat volunteers and identifying core pioneer leaders'
      },
      {
        id: 'medium',
        label: '200 - 800 Members (Growing Mid-Sized Church)',
        desc: 'Key need: department leader placement and automated ChMS onboarding'
      },
      {
        id: 'large',
        label: '800+ Members or Multi-Site Campus',
        desc: 'Key need: enterprise church-wide scale and volunteer retention workflows'
      }
    ]
  }
]
