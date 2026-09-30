import {
  SolutionItem,
  MetricItem,
  ProblemCard,
  GrowthStage,
  ClientType,
  CaseStudy,
  ProcessStepItem,
  WhyReason,
} from '../types';

// High-resolution architectural photography adhering to the bright luxury daylight aesthetic
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85', // Luxury high-rise residential architecture under bright blue sky
  heroSecondary: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', // Contemporary luxury residence with landscaped greenery
  caseStudyFeatured: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85', // High-end contemporary residence in Hyderabad
  caseStudy2: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', // Luxury villa development
  caseStudy3: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', // Commercial landmark tower
  caseStudy4: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80', // Gated community masterplan
  caseStudy5: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80', // Premium sales gallery interior
  architecturalInterior: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  projectLaunch: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  buyerAcquisition: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  siteVisits: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  salesGrowth: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  channelPartner: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
  founderPlaceholder: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  cofounderPlaceholder: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
};

// Verified placeholder metrics as mandated: Clearly marked [XX+] until verified numbers are provided
export const PROOF_METRICS: MetricItem[] = [
  {
    value: '[XX+]',
    label: 'Real Estate Campaigns',
    note: 'Active & Concluded Campaigns',
  },
  {
    value: '[XX+]',
    label: 'Qualified Enquiries',
    note: 'High-Intent Property Enquiries',
  },
  {
    value: '[XX+]',
    label: 'Projects Supported',
    note: 'Residential & Commercial Developments',
  },
  {
    value: '[XX+]',
    label: 'Years of Experience',
    note: 'Real Estate Growth Expertise',
  },
  {
    value: '[XX Cr+]',
    label: 'Sales Pipeline Influenced',
    note: 'Estimated Value of Buyer Enquiries',
  },
];

// 6 Problem Cards in a 3x2 grid
export const PROBLEMS: ProblemCard[] = [
  {
    id: 1,
    title: 'High Advertising Costs',
    description: 'Ad spends escalate on digital channels without reducing cost per genuine site visit.',
    metricImpact: 'Rising CPL with diminishing returns',
    iconName: 'TrendingUp',
  },
  {
    id: 2,
    title: 'Low-Quality Leads',
    description: 'Generic forms capture contact details with zero verified buying capacity or intent.',
    metricImpact: 'Sales teams fatigued by bad numbers',
    iconName: 'UserX',
  },
  {
    id: 3,
    title: 'Unqualified Enquiries',
    description: 'Inquiries fail to match actual ticket size, configuration, or possession requirements.',
    metricImpact: 'Misaligned budget & project match',
    iconName: 'HelpCircle',
  },
  {
    id: 4,
    title: 'Poor Follow-Up',
    description: 'Slow response times and disjointed CRM handoffs allow warm prospects to go cold.',
    metricImpact: 'Leads lose interest within 2 hours',
    iconName: 'Clock',
  },
  {
    id: 5,
    title: 'Low Site-Visit Conversion',
    description: 'Hundreds of inquiries fail to translate into confirmed, attended project site visits.',
    metricImpact: '< 5% inquiry-to-walk-in conversion',
    iconName: 'MapPinOff',
  },
  {
    id: 6,
    title: 'Unsold Inventory',
    description: 'Units linger past launch windows, locking developer capital in completed or ongoing phases.',
    metricImpact: 'Stagnant inventory carrying costs',
    iconName: 'Building2',
  },
];

// 10 Stages of the NXZ Growth System
export const GROWTH_SYSTEM_STAGES: GrowthStage[] = [
  {
    id: 1,
    label: 'PROJECT',
    sublabel: 'Inventory Audit',
    description: 'Deep evaluation of inventory mix, pricing bands, unit layouts, and market positioning.',
    techStack: 'Inventory Matrix & Market Data',
  },
  {
    id: 2,
    label: 'POSITIONING',
    sublabel: 'Buyer Thesis',
    description: 'Crafting compelling value propositions tailored to end-users, HNIs, and investors.',
    techStack: 'Audience Persona Architecture',
  },
  {
    id: 3,
    label: 'CREATIVE',
    sublabel: 'Architectural Assets',
    description: 'High-converting 3D walkthrough snippets, floorplan spotlights, and location storytelling.',
    techStack: 'Editorial Video & Visual System',
  },
  {
    id: 4,
    label: 'META + GOOGLE',
    sublabel: 'Performance Ads',
    description: 'Hyper-targeted search, display, and social campaigns reaching genuine real estate seekers.',
    techStack: 'Algorithmic Intent Bidding',
  },
  {
    id: 5,
    label: 'LEADS',
    sublabel: 'Instant Ingestion',
    description: 'Frictionless capture through fast, high-converting project landing experiences.',
    techStack: 'Sub-Second Webhooks',
  },
  {
    id: 6,
    label: 'AI QUALIFICATION',
    sublabel: 'Instant Screening',
    description: 'Conversational qualification vetting budget, location intent, timeline, and purchase purpose.',
    techStack: 'Multi-Parameter Intent Scoring',
  },
  {
    id: 7,
    label: 'CRM',
    sublabel: 'Centralized Pipeline',
    description: 'Unified lead routing, sales rep assignment, and automated lead warming workflows.',
    techStack: 'LeadSquared / Salesforce / Custom CRM',
  },
  {
    id: 8,
    label: 'FOLLOW-UP',
    sublabel: 'WhatsApp & Telephony',
    description: 'Immediate WhatsApp brocure delivery, automated booking slots, and timed callback nudges.',
    techStack: 'WhatsApp Cloud API & Voice Cloud',
  },
  {
    id: 9,
    label: 'SITE VISIT',
    sublabel: 'Scheduled Walk-ins',
    description: 'Calendar confirmations, GPS direction assistance, and pre-visit property teasers.',
    techStack: 'Site Visit Attendance Verification',
  },
  {
    id: 10,
    label: 'SALES',
    sublabel: 'Inventory Closure',
    description: 'Closing conversations supported with real-time unit availability and booking confirmation.',
    techStack: 'Closed-Loop Revenue Attribution',
  },
];

// 5 Solutions
export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'project-launch',
    title: 'Project Launch',
    tagline: 'Build demand from day one with integrated launch systems.',
    shortDescription: 'Build demand from day one with positioning, creative, landing pages and performance campaigns designed for new real-estate projects.',
    problem: 'Launches often rely on blind hoarding campaigns and unfocused digital noise, leaving sales teams empty-handed on opening weekend.',
    approach: 'We engineer a synchronized pre-launch teaser, VIP registry, priority pass booking, and high-velocity digital acquisition to open with strong booking velocity.',
    capabilities: [
      'Project positioning & buyer thesis',
      'High-converting project landing experiences',
      'Campaign creative & architectural renders',
      'Meta Ads (Facebook & Instagram target cohorts)',
      'Google Search & intent keyword funnels',
      'Pre-launch Expression of Interest (EOI) funnels',
    ],
    workflow: [
      { step: '01', label: 'Launch Proposition', desc: 'Define pricing bands, early-bird incentives, and customer avatar.' },
      { step: '02', label: 'Collateral & Landing Systems', desc: 'Deploy speed-optimized project web pages and verified brochures.' },
      { step: '03', label: 'Multi-Channel Push', desc: 'Trigger coordinated search, discovery, and social performance engines.' },
      { step: '04', label: 'VIP EOI Collection', desc: 'Screen applicants and build high-confidence walk-in rosters.' },
    ],
    metricsHeadline: 'Designed for Opening Weekend Velocity',
    exampleCase: {
      title: 'Premium Tower Launch',
      location: 'Gachibowli, Hyderabad',
      propertyType: '3 & 4 BHK Luxury Residences',
      objective: 'Build pre-launch demand and secure verified EOIs within 30 days',
      strategy: ['Architectural Spotlight Renders', 'High-Income Meta Cohorts', 'Instant WhatsApp EOI Funnel'],
      results: [
        { label: 'Verified EOIs', value: '[XX]' },
        { label: 'Launch Day Site Visits', value: '[XX]' },
        { label: 'Booking Velocity', value: '[XX Units]' },
      ],
    },
    faqs: [
      {
        q: 'When should we begin the digital launch campaign?',
        a: 'We recommend initiating positioning and landing infrastructure 4 to 6 weeks prior to the public launch date.',
      },
      {
        q: 'Can NXZ coordinate with our on-ground sales teams?',
        a: 'Yes. We configure real-time CRM handoffs and lead routing directly to your sales managers.',
      },
    ],
    imageUrl: IMAGES.projectLaunch,
  },
  {
    id: 'buyer-acquisition',
    title: 'Buyer Acquisition',
    tagline: 'Target buyers with verified intent, not casual scrollers.',
    shortDescription: 'Generate qualified enquiries from audiences with genuine buying intent.',
    problem: 'Standard ad agencies flood CRMs with accidental button-clicks and wrong-number submissions that waste expensive sales hours.',
    approach: 'We use high-intent Google Search captures, algorithmic remarketing, and strict qualification forms to isolate serious property buyers.',
    capabilities: [
      'Audience demographic & wealth cohort targeting',
      'High-intent Google Search & Local campaigns',
      'Meta Performance Ads with customized lead forms',
      'Dynamic inventory remarketing sequences',
      'Dedicated project landing pages',
      'Conversion rate optimization (CRO)',
    ],
    workflow: [
      { step: '01', label: 'Intent Mapping', desc: 'Target commercial and residential search terms with high purchase intent.' },
      { step: '02', label: 'Creative Testing', desc: 'Iterate visuals focused on price transparency, floorplans, and location.' },
      { step: '03', label: 'Friction-Engineered Forms', desc: 'Filter out casual scrollers through purposeful qualification fields.' },
      { step: '04', label: 'Remarketing Trajectory', desc: 'Keep the property top-of-mind during lengthy 30–90 day buying cycles.' },
    ],
    metricsHeadline: 'Precision Buyer Acquisition',
    exampleCase: {
      title: 'Gated Villa Community',
      location: 'North Bengaluru',
      propertyType: 'Contemporary 4 BHK Villas',
      objective: 'Attract HNIs and senior tech executives seeking ready-to-move inventory',
      strategy: ['Affluent Micro-Targeting', 'Custom Video Walkthroughs', 'Budget-Gated Inquiry Funnel'],
      results: [
        { label: 'Total Inquiries', value: '[XX]' },
        { label: 'Qualified Buyer Ratio', value: '[XX%]' },
        { label: 'Direct Site Visits', value: '[XX]' },
      ],
    },
    faqs: [
      {
        q: 'How do you prevent junk leads on social media?',
        a: 'We implement multi-step qualification questions (budget range, purchase timeframe, preferred size) before form submission.',
      },
      {
        q: 'Which ad channels do you recommend for luxury real estate?',
        a: 'A blended strategy of Google Search for active seekers and high-aesthetic Meta video creative for discovery.',
      },
    ],
    imageUrl: IMAGES.buyerAcquisition,
  },
  {
    id: 'site-visit-generation',
    title: 'Site Visit Generation',
    tagline: 'Move beyond inquiries and drive qualified walk-ins.',
    shortDescription: 'Move beyond lead volume and build systems designed to turn enquiries into scheduled site visits.',
    problem: 'A database of 1,000 leads means nothing if only 10 people walk into the experience centre.',
    approach: 'We engineer automated WhatsApp verification, calendar scheduling, instant brochure deliveries, and tele-caller qualification workflows.',
    capabilities: [
      'Instant lead qualification via WhatsApp API',
      'Automated site visit scheduling calendar',
      'Location & site route guidance delivery',
      'Pre-visit virtual walkthrough primers',
      'No-show follow-up & rescheduling workflows',
      'CRM status syncing with site reception',
    ],
    workflow: [
      { step: '01', label: 'Immediate Confirmation', desc: 'Deliver digital brochure and floor plans via WhatsApp in under 60 seconds.' },
      { step: '02', label: 'Intent Assessment', desc: 'Bot or tele-screening establishes budget and visit readiness.' },
      { step: '03', label: 'Slot Reservation', desc: 'Prospect books specific day and time slot for personal walkthrough.' },
      { step: '04', label: 'Walk-In Nudges', desc: 'Automated location pin, host introduction, and site check-in reminder.' },
    ],
    metricsHeadline: 'Turning Inquiries Into Real Footfall',
    exampleCase: {
      title: 'Waterfront High-Rise Community',
      location: 'Kochi Marine Drive',
      propertyType: 'Luxury Waterfront Apartments',
      objective: 'Double monthly site visits without increasing total ad expenditure',
      strategy: ['WhatsApp Scheduling Bot', 'Site Visit Cab Assist Incentives', 'Telephony Nurture Sprints'],
      results: [
        { label: 'Monthly Site Visits', value: '[XX]' },
        { label: 'Walk-in Ratio Improvement', value: '[XX%]' },
        { label: 'Sales Conversion Rate', value: '[XX%]' },
      ],
    },
    faqs: [
      {
        q: 'Can this integrate with our site reception app?',
        a: 'Yes, we synchronize booked appointments with your visitor management or CRM portal.',
      },
      {
        q: 'Does NXZ provide the follow-up automation?',
        a: 'Yes, we architect the complete WhatsApp and SMS nurturing flows.',
      },
    ],
    imageUrl: IMAGES.siteVisits,
  },
  {
    id: 'project-sales-growth',
    title: 'Project Sales Growth',
    tagline: 'Connect marketing and sales operations for faster inventory liquidation.',
    shortDescription: 'Connect marketing, qualification and sales operations to improve project performance.',
    problem: 'Siloed marketing agencies blame sales teams for not closing; sales teams blame marketing for bad leads.',
    approach: 'We unify marketing attribution with the actual closing pipeline, analyzing which campaigns, keywords, and demographics yield completed deed registrations.',
    capabilities: [
      'Closed-loop revenue attribution',
      'Sales CRM optimization & automation',
      'Lead scoring & priority routing',
      'Sales team script & pitch alignment',
      'Unit-level inventory sales velocity reports',
      'Performance recalibration based on closed deals',
    ],
    workflow: [
      { step: '01', label: 'Pipeline Diagnostic', desc: 'Audit current drop-offs between inquiry, site visit, negotiation, and token.' },
      { step: '02', label: 'Lead Scoring Rule Base', desc: 'Prioritize hot buyers for senior closers while nurturing cold records.' },
      { step: '03', label: 'Inventory Pacing', desc: 'Direct acquisition pressure toward slower-moving inventory categories.' },
      { step: '04', label: 'Closed-Loop Optimization', desc: 'Feed sales conversion data back into ad bidding algorithms.' },
    ],
    metricsHeadline: 'End-to-End Sales Enablement',
    exampleCase: {
      title: 'Commercial Office Park',
      location: 'Cyber City, Gurugram',
      propertyType: 'Grade-A Commercial Suites & Retail',
      objective: 'Accelerate absorption of top-floor office units and anchor retail spaces',
      strategy: ['Investor Cohort B2B Search', 'Executive ROI Landing Pages', 'Lead Scoring System'],
      results: [
        { label: 'Investor Enquiries', value: '[XX]' },
        { label: 'Negotiation Closures', value: '[XX Units]' },
        { label: 'Deal Velocity', value: '[XX Days]' },
      ],
    },
    faqs: [
      {
        q: 'What CRM platforms do you work with?',
        a: 'We integrate with LeadSquared, Salesforce, HubSpot, Sell.Do, Zoho, and custom proprietary developer CRMs.',
      },
      {
        q: 'How do you measure project sales attribution?',
        a: 'We track every closed buyer back to their initial acquisition source, ad creative, and campaign cohort.',
      },
    ],
    imageUrl: IMAGES.salesGrowth,
  },
  {
    id: 'broker-partner-growth',
    title: 'Broker & Channel Partner Growth',
    tagline: 'Empower real estate professionals with consistent buyer demand.',
    shortDescription: 'Help property professionals create consistent buyer demand and manage their project pipeline.',
    problem: 'Brokers often rely purely on word-of-mouth or cold databases, leading to unstable commission revenue and unpredictable quarters.',
    approach: 'We equip leading brokers and institutional channel partners with dedicated project acquisition engines, co-branded funnels, and automated buyer pipelines.',
    capabilities: [
      'Co-branded project landing pages',
      'Dedicated local buyer acquisition campaigns',
      'Lead segregation & exclusive partner routing',
      'Mobile-first lead management workflow',
      'Client remarketing & property cross-sell engines',
      'Transparent weekly pipeline analytics',
    ],
    workflow: [
      { step: '01', label: 'Inventory Mandate Alignment', desc: 'Select exclusive or high-commission developer mandates to promote.' },
      { step: '02', label: 'Partner Digital Assets', desc: 'Launch focused landing pages featuring broker credentials and project access.' },
      { step: '03', label: 'Direct Buyer Funnel', desc: 'Run targeted local ad campaigns delivering direct phone and WhatsApp inquiries.' },
      { step: '04', label: 'Pipeline Visibility', desc: 'Manage prospect stages from first call to site visit escort.' },
    ],
    metricsHeadline: 'Predictable Partner Pipelines',
    exampleCase: {
      title: 'Channel Partner Portfolio',
      location: 'Bandra-Kurla Complex & Powai, Mumbai',
      propertyType: 'Luxury High-Rise & Duplexes',
      objective: 'Provide a top brokerage firm with a dedicated source of ultra-luxury buyers',
      strategy: ['HNI Financial Sector Targeting', 'Private Consultation Booking Flow', 'Instant WhatsApp Connect'],
      results: [
        { label: 'Exclusive Enquiries', value: '[XX]' },
        { label: 'Escorted Site Visits', value: '[XX]' },
        { label: 'Gross Transaction Value', value: '[XX Cr]' },
      ],
    },
    faqs: [
      {
        q: 'Can individual brokers use this or only large firms?',
        a: 'We work with top-performing individual brokers, boutique agencies, and national channel partner networks.',
      },
      {
        q: 'Are the buyer leads exclusive to our agency?',
        a: 'Yes. 100% of leads generated through your campaign belong solely to your organization.',
      },
    ],
    imageUrl: IMAGES.channelPartner,
  },
];

// Who We Work With - 4 ecosystem cards
export const CLIENT_TYPES: ClientType[] = [
  {
    id: 'developers-builders',
    title: 'Developers & Builders',
    headline: 'Launch projects, create demand and accelerate sales.',
    challenge: 'High cost of capital and multi-year construction timelines require fast absorption rates and predictable revenue velocity across every launch phase.',
    solution: 'NXZ builds end-to-end acquisition infrastructure that feeds your on-site sales team with high-intent, screened buyers who have the capacity to purchase.',
    systemIncludes: [
      'Full project launch digital war-room',
      'Multi-channel buyer acquisition (Meta, Google, YouTube)',
      'AI qualification and automated WhatsApp brocure routing',
      'On-site CRM integration and reception syncing',
    ],
    engagementScope: [
      'Pre-launch EOI generation',
      'Sustenance phase buyer flow',
      'End-of-phase inventory clearance',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'project-owners',
    title: 'Project Owners',
    headline: 'Turn available inventory into qualified buyer demand.',
    challenge: 'Holding completed or near-completion inventory incurs heavy carrying costs. Traditional brokerage channels often fail to maintain consistent sales focus.',
    solution: 'We deploy focused digital campaigns aimed specifically at clearing remaining units, penthouses, or specialized inventory batches without public discounting.',
    systemIncludes: [
      'Ready-to-move (RTM) value proposition packaging',
      'Targeted investor and end-user acquisition',
      'Special unit spotlight video walkthroughs',
      'Direct-to-developer site visit generation',
    ],
    engagementScope: [
      'Dedicated inventory liquidation sprints',
      'Specific tower or phase push',
      'Distress-free premium pricing preservation',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'brokers',
    title: 'Brokers',
    headline: 'Build a stronger buyer pipeline and generate qualified enquiries.',
    challenge: 'Relying solely on portals and generic databases results in shared, stale leads where five different agents call the same frustrated prospect.',
    solution: 'NXZ sets up your private acquisition engine. Every lead generated belongs 100% exclusively to your agency, allowing you to build lasting buyer relationships.',
    systemIncludes: [
      'Exclusive branded project landing funnels',
      'Direct-to-WhatsApp buyer inquiries',
      'Mobile CRM lead tracking setup',
      'Automated site visit scheduling calendar',
    ],
    engagementScope: [
      'Monthly buyer acquisition subscriptions',
      'Specific luxury mandate campaigns',
      'Repeat investor pipeline development',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'channel-partners',
    title: 'Channel Partners',
    headline: 'Acquire buyers and manage project demand more effectively.',
    challenge: 'Managing high sales targets from multiple developers requires consistent lead volume and rapid distribution across junior and senior sales executives.',
    solution: 'We construct scalable acquisition engines capable of distributing dozens of verified site visits weekly across your partner network with automated accountability.',
    systemIncludes: [
      'Multi-project acquisition infrastructure',
      'Automated lead qualification and tier-based routing',
      'Real-time site visit scheduling and SMS passes',
      'Performance analytics per agent/project',
    ],
    engagementScope: [
      'Enterprise channel partner scaling',
      'Developer mandate fulfillment',
      'Multi-city buyer acquisition funnels',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
];

// Featured and filterable case studies (All numbers explicitly marked [XX] as instructed)
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'hyderabad-luxury-towers',
    project: 'Premium Residential Development',
    location: 'Financial District, Hyderabad',
    propertyType: 'Residential',
    category: 'Project Launch',
    objective: 'Generate qualified buyer demand and build launch day momentum for 3 & 4 BHK luxury residences.',
    strategy: [
      'High-Intent Meta Cohorts',
      'Ultra-Fast Landing Experience',
      'AI-Assisted Qualification',
      'Instant WhatsApp Brochure Dispatch',
      'Site Visit Calendar Workflows',
    ],
    adChannels: ['Meta Ads', 'Google Search', 'YouTube In-Stream', 'WhatsApp Cloud'],
    results: {
      leads: '[XX]',
      qualifiedLeads: '[XX]',
      siteVisits: '[XX]',
      bookings: '[XX]',
    },
    highlightQuote: 'Connecting ad impressions to confirmed site visits unlocked a predictable weekend walk-in rate.',
    imageUrl: IMAGES.caseStudyFeatured,
  },
  {
    id: 'bengaluru-villa-community',
    project: 'Private Gated Villa Estates',
    location: 'Devanahalli, North Bengaluru',
    propertyType: 'Villas',
    category: 'Residential',
    objective: 'Attract senior executives and HNIs seeking expansive suburban villas with private gardens.',
    strategy: [
      'Architectural Aerial Storytelling',
      'Income-Segmented Meta Delivery',
      'Pre-Visit Video Tours',
      'Direct Relationship Manager Routing',
    ],
    adChannels: ['Google Discovery', 'Meta Luxury Cohorts', 'Programmatic Display'],
    results: {
      leads: '[XX]',
      qualifiedLeads: '[XX]',
      siteVisits: '[XX]',
      bookings: '[XX]',
    },
    highlightQuote: 'Filtering out non-target budgets prior to sales outreach tripled our executive talk time efficiency.',
    imageUrl: IMAGES.caseStudy2,
  },
  {
    id: 'gurugram-commercial-tower',
    project: 'Grade-A Commercial Suites',
    location: 'Golf Course Extension, Gurugram',
    propertyType: 'Commercial',
    category: 'Commercial',
    objective: 'Target institutional investors and corporate family offices for large-plate office floors.',
    strategy: [
      'B2B Commercial Real Estate Intent Bidding',
      'Yield & Rental Projection Landing Pages',
      'Investor Consultation Scheduling',
    ],
    adChannels: ['Google Search', 'LinkedIn Sponsored Content', 'Direct Email Funnels'],
    results: {
      leads: '[XX]',
      qualifiedLeads: '[XX]',
      siteVisits: '[XX]',
      bookings: '[XX]',
    },
    highlightQuote: 'Positioned the asset around rental yield economics rather than standard square footage claims.',
    imageUrl: IMAGES.caseStudy3,
  },
  {
    id: 'pune-township-expansion',
    project: 'Integrated Urban Township',
    location: 'Hinjawadi, Pune',
    propertyType: 'Mixed Use',
    category: 'Lead Generation',
    objective: 'Generate sustainable month-on-month enquiry flow for mid-stage inventory absorption.',
    strategy: [
      'Neighborhood Infrastructure Highlights',
      'Micro-Location Google Local Campaigns',
      'Automated Lead Nurturing sequences',
    ],
    adChannels: ['Meta Performance', 'Google Search', 'WhatsApp Automation'],
    results: {
      leads: '[XX]',
      qualifiedLeads: '[XX]',
      siteVisits: '[XX]',
      bookings: '[XX]',
    },
    highlightQuote: 'Maintained steady site-visit volume across four consecutive quarters without lead fatigue.',
    imageUrl: IMAGES.caseStudy4,
  },
  {
    id: 'mumbai-channel-portfolio',
    project: 'Sea-Facing Duplex Collection',
    location: 'Worli, Mumbai',
    propertyType: 'Residential',
    category: 'Project Sales',
    objective: 'Enable top-tier channel partner network to close remaining sea-view residences.',
    strategy: [
      'Curated Private Invitation Funnels',
      'HNI Concierge Appointment Booking',
      'Exclusive Co-Branded Asset Suites',
    ],
    adChannels: ['Exclusive Meta Ingestion', 'Search Retargeting'],
    results: {
      leads: '[XX]',
      qualifiedLeads: '[XX]',
      siteVisits: '[XX]',
      bookings: '[XX]',
    },
    highlightQuote: 'Every lead delivered direct to senior partners with verified purchase timelines.',
    imageUrl: IMAGES.caseStudy5,
  },
];

// 6 How We Work Steps (Horizontal desktop, vertical mobile)
export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: '01',
    title: 'Understand',
    summary: 'Project, inventory, location, pricing, buyer profile and sales objective.',
    details: [
      'Inventory unit mix and pricing bands breakdown',
      'Competitor micro-market absorption analysis',
      'Ideal buyer profile and wealth cohort mapping',
    ],
  },
  {
    step: '02',
    title: 'Position',
    summary: 'Define the project’s market proposition and buyer-facing message.',
    details: [
      'Unique selling thesis versus neighboring developments',
      'Value-driven messaging hierarchy (Lifestyle vs Investment)',
      'Campaign thematic framework and visual guidelines',
    ],
  },
  {
    step: '03',
    title: 'Build',
    summary: 'Landing pages, creative, tracking, CRM and acquisition infrastructure.',
    details: [
      'Sub-second, mobile-first project landing pages',
      'Architectural visual assets and floor plan teasers',
      'Webhook CRM integration and WhatsApp Cloud API pipelines',
    ],
  },
  {
    step: '04',
    title: 'Acquire',
    summary: 'Launch and optimize relevant performance campaigns.',
    details: [
      'High-intent Google Search and keyword funnels',
      'Audience-targeted Meta and Instagram campaigns',
      'Dynamic remarketing to capture returning property researchers',
    ],
  },
  {
    step: '05',
    title: 'Qualify',
    summary: 'Identify buying intent and route leads to the right sales process.',
    details: [
      'Instant conversational qualification (budget, timeline, purpose)',
      'Tiered categorization into Hot, Warm, and Nurture buckets',
      'Direct handoff to available sales managers within 5 minutes',
    ],
  },
  {
    step: '06',
    title: 'Convert',
    summary: 'Support the journey toward site visits and sales.',
    details: [
      'Automated site visit scheduling and calendar confirmations',
      'GPS navigation and host introductions sent via WhatsApp',
      'Closing feedback loop to optimize ad spend toward booked revenue',
    ],
  },
];

// 6 Why NXZ Reasons
export const WHY_REASONS: WhyReason[] = [
  {
    id: 1,
    title: 'Real Estate Focus',
    description: 'We concentrate strictly on property businesses rather than attempting to serve every industry. We understand project timelines, RERA compliances, inventory carrying costs, and site visit dynamics.',
    icon: 'Building',
  },
  {
    id: 2,
    title: 'Performance First',
    description: 'Campaigns are measured against meaningful acquisition metrics — verified site visits, pipeline velocity, and closed bookings — never meaningless social vanity metrics or untracked impressions.',
    icon: 'Target',
  },
  {
    id: 3,
    title: 'Full-Funnel Thinking',
    description: 'We connect initial advertising directly to qualification, follow-up, site visits, and sales. The system addresses what happens after the lead arrives, preventing expensive leaks in the sales pipe.',
    icon: 'GitBranch',
  },
  {
    id: 4,
    title: 'Technology Enabled',
    description: 'Modern CRM pipelines, WhatsApp automation, and AI-assisted qualification identify high-intent prospects in seconds, ensuring your sales reps never waste time on invalid inquiries.',
    icon: 'Cpu',
  },
  {
    id: 5,
    title: 'Creative That Sells Property',
    description: 'Every asset is designed around projects, locations, inventory configurations, and buyer intent. No generic stock photos or SaaS templates — only architectural storytelling that respects your development.',
    icon: 'Sparkles',
  },
  {
    id: 6,
    title: 'One Growth Partner',
    description: 'Strategy, performance campaigns, creative production, technology infrastructure, and execution sit under one roof. Zero vendor finger-pointing between marketing and sales.',
    icon: 'ShieldCheck',
  },
];

// Leadership placeholders with clean professional styling
export const LEADERSHIP = [
  {
    role: 'Founder',
    title: 'Founder & Managing Partner',
    experience: 'Real Estate Growth Strategist',
    bio: 'Specialized in real estate customer acquisition systems, project launch positioning, and performance marketing infrastructure across premium residential and commercial sectors.',
    placeholderImage: IMAGES.founderPlaceholder,
  },
  {
    role: 'Co-Founder',
    title: 'Co-Founder & Head of Growth Technology',
    experience: 'Real Estate Systems & Marketing Automation',
    bio: 'Leads AI qualification algorithms, CRM data architectures, and closed-loop revenue attribution connecting digital media budgets to on-site transaction closures.',
    placeholderImage: IMAGES.cofounderPlaceholder,
  },
];
