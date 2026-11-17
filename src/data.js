import { getAssetUrl } from './utils/assets'

// Authentic AssessME.org Assessment Catalog Data
export const ASSESSMENTS = [
  {
    id: 'epersonality',
    name: 'ePersonality™ Assessment',
    category: 'personality',
    tagline: 'Explains the purpose for which a person was created by God',
    price: 12,
    originalPrice: 19,
    annualPrice: 279,
    rating: 4.98,
    reviewsCount: 1640,
    badge: 'Most Popular!',
    isBestSeller: true,
    logo: getAssetUrl('/logo-epersonality.png'),
    image: getAssetUrl('/cover-personality.jpg'),
    gallery: [
      getAssetUrl('/cover-personality.jpg'),
      getAssetUrl('/cellphone.webp'),
      getAssetUrl('/report-sample.png')
    ],
    features: [
      'Explains biblical temperament dynamics and why people behave the way they do',
      'Tailored specifically for church and ministry cultures, avoiding sterile corporate jargon',
      'Pinpoints natural communication styles, relational triggers, and conflict resolution defaults',
      'Live 2-way sync into Pushpay CCB & Planning Center Online member profile cards'
    ],
    dimensions: [
      { num: 1, title: 'Directive (Dominance)', desc: 'Measures pioneering vision, decisive initiative, and willingness to lead new ministry frontiers.' },
      { num: 2, title: 'Interactive (Influence)', desc: 'Evaluates warmth, charisma, relational hospitality, and enthusiasm in bringing people to Christ.' },
      { num: 3, title: 'Supportive (Steadiness)', desc: 'Assesses pastoral loyalty, patience, empathy, reliability, and dependable long-term team service.' },
      { num: 4, title: 'Conscientious (Clarity)', desc: 'Measures biblical thoroughness, logistical excellence, accuracy, and administrative stewardship.' }
    ],
    specs: {
      completionTime: '10 - 12 Minutes',
      questionsCount: '48 Forced-Choice Quadrants',
      delivery: 'Instant Online + Mobile Interface',
      integrations: 'Planning Center, Pushpay CCB, Breeze',
      reportFormat: 'Comprehensive 10-Page Personal Profile'
    }
  },
  {
    id: 'grace-gifts',
    name: 'GraceGifts™ Spiritual Gifts',
    category: 'spiritual-gifts',
    tagline: 'The only Spiritual Gifts program filtered through personality dynamics',
    price: 12,
    originalPrice: 19,
    annualPrice: 299,
    rating: 4.99,
    reviewsCount: 2180,
    badge: 'Personality Filtered',
    isBestSeller: true,
    logo: getAssetUrl('/logo-gracegifts.png'),
    image: getAssetUrl('/cover-gracegifts.jpg'),
    gallery: [
      getAssetUrl('/cover-gracegifts.jpg'),
      getAssetUrl('/report-sample.png'),
      getAssetUrl('/cellphone.webp')
    ],
    features: [
      'Evaluates New Testament spiritual gifts filtered by temperament, creating authentic "Gift Expressions"',
      'Eliminates volunteer burnout by placing people where gifts and natural temperament synergize',
      'Automated placement engine maps candidate gifts directly into your open volunteer positions',
      'Direct API synchronization into Planning Center People and Pushpay ChMS'
    ],
    dimensions: [
      { num: 1, title: 'Romans 12 Motivational Gifts', desc: 'Inner spiritual drive determining core motivations in Christian service.' },
      { num: 2, title: '1 Cor 12 Manifestation Matrix', desc: 'Contextual expression in collaborative team ministries.' },
      { num: 3, title: 'Temperament Synergy Filter', desc: 'Identifies whether candidates thrive in task-oriented or people-intensive roles.' },
      { num: 4, title: 'Burnout Prevention Indicator', desc: 'Alerts leadership if members are currently serving out of alignment with their calling.' }
    ],
    specs: {
      completionTime: '12 - 15 Minutes',
      questionsCount: '60 Contextual Ministry Scenarios',
      delivery: 'Instant Online + Mobile Friendly',
      integrations: 'Planning Center, Pushpay CCB, Breeze',
      reportFormat: 'Interactive Web Dashboard + 8-Page PDF'
    }
  },
  {
    id: 'leadership-style',
    name: 'Leadership Style Assessment',
    category: 'leadership',
    tagline: 'Build highly effective leadership teams with longevity & stability',
    price: 15,
    originalPrice: 24,
    annualPrice: 349,
    rating: 4.95,
    reviewsCount: 840,
    badge: 'Staff & Elders',
    isBestSeller: false,
    logo: getAssetUrl('/logo-leadership.png'),
    image: getAssetUrl('/cover-leadership.jpg'),
    gallery: [
      getAssetUrl('/cover-leadership.jpg'),
      getAssetUrl('/class-kit.webp'),
      getAssetUrl('/cellphone.webp')
    ],
    features: [
      'Used to build balanced elder boards, pastoral staff, and key ministry coordinators',
      'Identifies strategic visionaries, operational managers, relational developers, and pioneers',
      'Reveals organizational blind spots and builds complementary leadership teams',
      'Essential for pastoral search committees and staff restructuring'
    ],
    dimensions: [
      { num: 1, title: 'Visionary Pioneer', desc: 'Focuses on strategic direction, spiritual breakthrough, and launching new ministries.' },
      { num: 2, title: 'Operational Shepherd', desc: 'Excels at team harmony, pastoral oversight, and practical project execution.' },
      { num: 3, title: 'Consensus Developer', desc: 'Brings elder boards and diverse volunteer groups into unified decision-making.' },
      { num: 4, title: 'Architectural Builder', desc: 'Constructs sustainable ministry systems and scalable volunteer infrastructure.' }
    ],
    specs: {
      completionTime: '15 Minutes',
      questionsCount: '52 Leadership Scenarios',
      delivery: 'Instant Online Dashboard',
      integrations: 'Planning Center, Pushpay CCB',
      reportFormat: 'Comprehensive Leadership Analysis Report'
    }
  },
  {
    id: 'skills-tracking',
    name: 'Skills Tracking Program',
    category: 'skills',
    tagline: 'Organic skills tracking with micro-resumes for your whole church',
    price: 9,
    originalPrice: 15,
    annualPrice: 229,
    rating: 4.92,
    reviewsCount: 710,
    badge: 'Micro-Resumes',
    isBestSeller: false,
    logo: getAssetUrl('/logo-skills.webp'),
    image: getAssetUrl('/cover-skills.jpg'),
    gallery: [
      getAssetUrl('/cover-skills.jpg'),
      getAssetUrl('/interface-search.webp'),
      getAssetUrl('/cellphone.webp')
    ],
    features: [
      'Catalogs trades, technical proficiencies, professional licenses, and vocational skills',
      'Includes candidate micro-resumes so church staff can discover hidden talents in the pews',
      'Instant search engine finds plumbers, accountants, video editors, and audio techs',
      'Reduces church facility and production costs by activating in-house member expertise'
    ],
    dimensions: [
      { num: 1, title: 'Trades & Physical Crafts', desc: 'Electrical, plumbing, carpentry, construction, and facility maintenance.' },
      { num: 2, title: 'Creative & Media Tech', desc: 'Audio engineering, lighting, video editing, graphic design, and web.' },
      { num: 3, title: 'Professional & Legal', desc: 'Accounting, finance, legal counsel, HR, and project management.' },
      { num: 4, title: 'Educational & Care', desc: 'Teaching, medical/nursing, counseling, translation, and tutoring.' }
    ],
    specs: {
      completionTime: '8 - 10 Minutes',
      questionsCount: 'Customizable Skill Inventory',
      delivery: 'Instant Member Portal',
      integrations: 'Planning Center, Pushpay CCB',
      reportFormat: 'Instant Searchable Talent Database'
    }
  },
  {
    id: 'nextsteps-discipleship',
    name: 'NextSteps™ Discipleship Tracking',
    category: 'discipleship',
    tagline: '98% customizable discipleship tracking & spiritual maturity growth',
    price: 12,
    originalPrice: 18,
    annualPrice: 289,
    rating: 4.96,
    reviewsCount: 650,
    badge: 'Discipleship Track',
    isBestSeller: false,
    logo: getAssetUrl('/logo-nextsteps.webp'),
    image: getAssetUrl('/cover-nextsteps.jpg'),
    gallery: [
      getAssetUrl('/cover-nextsteps.jpg'),
      getAssetUrl('/interface-invite.webp'),
      getAssetUrl('/cellphone.webp')
    ],
    features: [
      'Revolutionary spiritual growth tracking system adaptable to your church discipleship model',
      'Customizable spiritual maturity milestones: Baptism, small groups, daily word, tithing',
      'Equips small group pastors and mentors with real-time discipleship progression analytics',
      'Keeps members engaged and progressing forward toward biblical maturity'
    ],
    dimensions: [
      { num: 1, title: 'Foundations of Faith', desc: 'Salvation clarity, water baptism, and foundational scripture literacy.' },
      { num: 2, title: 'Spiritual Disciplines', desc: 'Daily devotional prayer, biblical meditation, and faithful generosity.' },
      { num: 3, title: 'Relational Community', desc: 'Consistent small group fellowship, accountability, and mutual care.' },
      { num: 4, title: 'Kingdom Mobilization', desc: 'Serving on ministry teams, mentoring younger disciples, and sharing faith.' }
    ],
    specs: {
      completionTime: 'Self-Paced / Mentor Guided',
      questionsCount: 'Dynamic Milestones (98% Configurable)',
      delivery: 'Mobile + Web Portal',
      integrations: 'Planning Center, Pushpay CCB',
      reportFormat: 'Interactive Growth Dashboard'
    }
  },
  {
    id: 'all-inclusive-bundle',
    name: 'All-Inclusive Church Mobilization Suite',
    category: 'bundle',
    tagline: 'Unlimited congregation assessment license with ChMS sync',
    price: 499,
    originalPrice: 799,
    annualPrice: 499,
    rating: 5.0,
    reviewsCount: 920,
    badge: 'Best Church Value',
    isBestSeller: true,
    logo: getAssetUrl('/logo-white.png'),
    image: getAssetUrl('/cellphone.webp'),
    gallery: [
      getAssetUrl('/cellphone.webp'),
      getAssetUrl('/cover-personality.jpg'),
      getAssetUrl('/cover-gracegifts.jpg')
    ],
    features: [
      'Unlimited assessments for GraceGifts, ePersonality, Leadership, and Skills Tracking for 1 full year',
      'Full 2-way live sync with Planning Center People and Pushpay Church Community Builder (CCB)',
      'Includes Pastor\'s Class Kit with slide decks, sermon series, and participant handouts',
      'Includes "Made for a Mission" mobilization guide by Chuck Ballard (AssessME Founder)'
    ],
    dimensions: [
      { num: 1, title: 'All 5 Core Assessments', desc: 'ePersonality, GraceGifts, Leadership Style, Skills Tracking, NextSteps.' },
      { num: 2, title: 'Unlimited Candidate Seats', desc: 'Deploy across your entire congregation without per-person caps.' },
      { num: 3, title: 'Automated ChMS Webhooks', desc: 'Zero manual data entry for church administrative staff.' },
      { num: 4, title: 'Pastor\'s Class & Sermon Kit', desc: 'Pre-packaged 4-session weekend teaching and slides.' }
    ],
    specs: {
      licenseType: 'Unlimited Church-Wide Annual License',
      onboarding: 'Dedicated 1-on-1 Ministry Concierge',
      guarantee: '100% Satisfaction or Full Refund',
      integrations: 'Planning Center, Pushpay CCB, Breeze',
      support: 'Priority Pastoral Helpline & Video Training'
    }
  }
]

export const CATEGORIES = [
  { id: 'all', name: 'All Assessments', count: 6 },
  { id: 'personality', name: 'Temperament', count: 1 },
  { id: 'spiritual-gifts', name: 'Spiritual Gifts', count: 1 },
  { id: 'leadership', name: 'Leadership & Staff', count: 1 },
  { id: 'skills', name: 'Skills & Trades', count: 1 },
  { id: 'discipleship', name: 'Discipleship', count: 1 },
  { id: 'bundle', name: 'Church Suites', count: 1 },
]

export const STEPS = [
  {
    step: '01',
    title: 'Invite People',
    desc: 'Send customized email invites or post public enrollment links on your church website & bulletin.',
    image: getAssetUrl('/interface-invite.webp')
  },
  {
    step: '02',
    title: 'Manage Members',
    desc: 'Track candidate completion live. Automated reminders keep church members moving forward.',
    image: getAssetUrl('/cellphone.webp')
  },
  {
    step: '03',
    title: 'Automated Reports',
    desc: 'Instant mobilization reports match candidate gifts & temperaments to open church roles.',
    image: getAssetUrl('/report-sample.png')
  },
  {
    step: '04',
    title: 'Equip Leaders',
    desc: 'Department heads receive team dynamic reports to build complementary, friction-free teams.',
    image: getAssetUrl('/class-kit.webp')
  },
  {
    step: '05',
    title: 'Launch Sermon Series',
    desc: 'Deploy the 4-week "Made for a Mission" sermon series with slides and teaching notes.',
    image: getAssetUrl('/book-mission.avif')
  },
  {
    step: '06',
    title: 'Mobilize Disciples',
    desc: 'Watch volunteer retention soar as members serve in the authentic sweet spots God created them for.',
    image: getAssetUrl('/conference.webp')
  }
]

export const PASTORS = [
  {
    name: 'Pastor David Evans',
    title: 'Senior Pastor, Grace Point Fellowship',
    location: 'San Diego, CA',
    quote: 'AssessME eliminated the volunteer revolving door in our church. Our people are now serving with deep biblical joy in their authentic sweet spots.',
    church: 'Grace Point Fellowship',
    initials: 'DE',
  },
  {
    name: 'Dr. Sarah Jenkins',
    title: 'Executive Director of Discipleship',
    location: 'Austin, TX',
    quote: 'We connected AssessME directly into Planning Center. Every member class takes GraceGifts and ePersonality, and our 1-year volunteer retention surged by 68%.',
    church: 'Austin Hope Church',
    initials: 'SJ',
  },
  {
    name: 'Pastor Marcus Rivera',
    title: 'Lead Pastor, Valley Community Church',
    location: 'Atlanta, GA',
    quote: 'The synergy between ePersonality and Spiritual Gifts is unmatched. It prevents volunteer burnout before it ever starts.',
    church: 'Valley Community Church',
    initials: 'MR',
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
  { id: 'pco', name: 'Planning Center Online (PCO)', desc: 'Auto-populates spiritual gifts and personality tags on member profiles.' },
  { id: 'pushpay', name: 'Pushpay / Church Community Builder (CCB)', desc: 'Live two-way sync into Pushpay member records and process queues.' },
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
        label: 'Behind-The-Scenes Tech, Logistics & Crafts',
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
