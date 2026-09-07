import { ServiceItem, CaseStudy, ProcessStep, ClientCategory, FaqItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'personal-branding',
    number: '01',
    title: 'Personal Branding',
    tagline: 'Become Known For What You Know.',
    description: "Your personal brand is more than your profile photo and bio. It's what people think of when your name appears on their screen. We help founders, entrepreneurs, professionals and industry experts build a clear, credible and memorable personal brand.",
    bullets: ['Positioning', 'Strategy', 'Storytelling', 'Content', 'Thought Leadership'],
    deliverables: [
      'Core Brand Archetype & Narrative Framework',
      'Executive Voice & Tone Playbook',
      'High-Impact Profile Architecture & Visual Identity',
      'Signature Thought Leadership Content Pillars',
      'Ongoing Editorial Ghostwriting & Curation'
    ],
    idealFor: 'Founders, C-suite executives, boutique agency owners, and seasoned consultants.'
  },
  {
    id: 'linkedin-growth',
    number: '02',
    title: 'LinkedIn Growth',
    tagline: "Don't Just Post. Build Authority.",
    description: "LinkedIn is more than a publishing platform. It's a place where reputation becomes relationships and relationships become opportunities. We build LinkedIn strategies that help you communicate your expertise, grow the right network and create meaningful conversations.",
    bullets: ['Profile Positioning', 'Content Strategy', 'Thought Leadership', 'Engagement', 'Network Growth'],
    deliverables: [
      'Profile Optimization for Inbound Inquiries',
      'Algorithmic Content Calendar (Weekly 3-5 high-engagement posts)',
      'Strategic Peer & Executive Commenting Playbook',
      'Targeted 2nd/3rd Degree Network Expansion',
      'Weekly Audience Insights & Conversation Metrics'
    ],
    idealFor: 'B2B leaders, tech founders, creators, and business development executives.'
  },
  {
    id: 'influencer-marketing',
    number: '03',
    title: 'Influencer Marketing',
    tagline: 'The Right Voice Can Move People.',
    description: 'Influence works when the creator, audience and brand genuinely fit together. We help brands discover the right creators, build campaigns and create collaborations that feel authentic while delivering measurable business value.',
    bullets: ['Influencer Discovery', 'Creator Partnerships', 'Campaign Strategy', 'Campaign Management', 'Performance Tracking'],
    deliverables: [
      'High-Affinity Creator Scouting & Vetting (Quality > Vanity Count)',
      'Native Campaign Narrative & Brief Development',
      'End-to-End Contract, Negotiation & Deliverable Handling',
      'Creative Quality Control & Brand Alignment',
      'Post-Campaign Reach, Engagement & Conversion Attribution'
    ],
    idealFor: 'Consumer brands, D2C disruptors, SaaS startups, and lifestyle enterprises.'
  },
  {
    id: 'lead-generation',
    number: '04',
    title: 'Lead Generation',
    tagline: 'Turn Attention Into Conversations.',
    description: 'Visibility is valuable. But conversations create opportunities. We build targeted lead-generation systems that help businesses reach relevant prospects, start conversations and move qualified opportunities through the funnel.',
    bullets: ['Prospecting', 'Outreach', 'Lead Generation', 'Qualification', 'Funnels', 'Conversion'],
    deliverables: [
      'Ideal Customer Profile (ICP) Multi-Variable Mapping',
      'Multi-Touch Bespoke Outreach Sequences (LinkedIn + Direct)',
      'Value-First Conversation Scripts & Objection Frameworks',
      'Calendar Booking & Lead Qualification Integration',
      'Pipeline Nurturing & Close-Rate Optimizations'
    ],
    idealFor: 'Service firms, high-ticket agencies, SaaS platforms, and enterprise solutions.'
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVERY',
    tagline: 'We start with understanding you.',
    description: 'Your business, expertise, audience, goals, competitors and current digital presence.',
    deliverables: ['Audience Research', 'Brand Audit', 'Competitor Analysis', 'Goal Setting']
  },
  {
    step: '02',
    title: 'POSITIONING',
    tagline: 'We define what you should be known for.',
    description: 'We identify your strongest differentiators and create a clear positioning strategy.',
    deliverables: ['Brand Positioning', 'Messaging', 'Content Pillars', 'Voice']
  },
  {
    step: '03',
    title: 'STRATEGY',
    tagline: 'We build your growth roadmap.',
    description: 'We decide what to say, where to say it, who should hear it and what action we want them to take.',
    deliverables: ['Content Strategy', 'Platform Strategy', 'Campaign Planning', 'Growth Roadmap']
  },
  {
    step: '04',
    title: 'CREATION',
    tagline: 'Strategy becomes content and campaigns.',
    description: 'We create the content, campaigns and communication systems that bring your positioning to life.',
    deliverables: ['Content', 'Creative', 'Campaigns', 'Influencer Collaborations']
  },
  {
    step: '05',
    title: 'GROWTH',
    tagline: 'We measure what matters.',
    description: 'We track visibility, engagement, audience quality, conversations and business outcomes.',
    deliverables: ['Analytics', 'Testing', 'Optimisation', 'Performance Tracking']
  },
  {
    step: '06',
    title: 'CONVERSION',
    tagline: 'Influence becomes opportunity.',
    description: 'The ultimate objective is to turn attention into relationships and relationships into business.',
    deliverables: ['Lead Generation', 'Outreach', 'Funnels', 'Conversion']
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'case-personal-branding',
    domain: 'PERSONAL BRANDING',
    title: 'Turning Expertise Into Authority.',
    challenge: 'Build a stronger personal identity and establish a clear position within a competitive industry.',
    approach: 'We developed a personal-brand strategy built around positioning, storytelling, consistent content and thought leadership.',
    services: ['Personal Branding', 'Content Strategy', 'LinkedIn', 'Thought Leadership'],
    impact: [
      'Stronger positioning in key executive circles',
      'Increased organic visibility across targeted industry leaders',
      'Higher-quality inbound network and speaking invitations',
      'More relevant, high-ticket business conversations'
    ],
    metrics: [
      { label: 'Profile Views', value: '+340%' },
      { label: 'Executive Network', value: '5,200+' },
      { label: 'Keynote Inquiries', value: '4 Tier-1' }
    ],
    clientType: 'Tech Founder & Advisory Board Member',
    timeline: '90-Day Authority Sprint'
  },
  {
    id: 'case-linkedin-growth',
    domain: 'LINKEDIN GROWTH',
    title: 'From Posting Content to Building a Reputation.',
    challenge: 'Create a consistent LinkedIn presence that communicates expertise and attracts the right professional audience.',
    approach: "We developed content pillars, positioning, publishing systems and engagement strategies designed around the individual's expertise and goals.",
    services: ['LinkedIn Strategy', 'Content', 'Profile Positioning', 'Engagement'],
    impact: [
      'Higher visibility across CXO and decision-maker feeds',
      'Stronger peer network of respected industry founders',
      'Greater domain authority and verified social proof',
      'More inbound opportunities without cold begging'
    ],
    metrics: [
      { label: 'Content Impressions', value: '1.4M+' },
      { label: 'Inbound Conversations', value: '48 / Mo' },
      { label: 'Engagement Rate', value: '6.8%' }
    ],
    clientType: 'B2B Consulting Practice Partner',
    timeline: 'Ongoing Growth Retainer'
  },
  {
    id: 'case-influencer-marketing',
    domain: 'INFLUENCER MARKETING',
    title: 'Connecting Brands With the Right Influence.',
    challenge: "Reach a relevant audience through creators who genuinely connect with the brand's target customer.",
    approach: 'We identify relevant creators, develop campaign concepts and manage collaborations from discovery to execution.',
    services: ['Influencer Discovery', 'Campaign Strategy', 'Creator Partnerships', 'Campaign Management'],
    impact: [
      'Relevant reach among high-intent target buyers',
      'Authentic creator-generated assets deployed cross-channel',
      'Elevated brand awareness and recall',
      'Deep audience engagement with measurable sentiment shift'
    ],
    metrics: [
      { label: 'Target Reach', value: '2.8M+' },
      { label: 'Creator Alignment', value: '100%' },
      { label: 'Direct Referral Lift', value: '+185%' }
    ],
    clientType: 'Modern Lifestyle & D2C Brand',
    timeline: '6-Week Omni Campaign'
  },
  {
    id: 'case-lead-generation',
    domain: 'LEAD GENERATION',
    title: 'Turning Digital Presence Into Business Conversations.',
    challenge: 'Generate relevant prospects instead of relying on passive visibility.',
    approach: 'We combine targeted prospecting, outreach, content and conversion systems to create a structured lead-generation process.',
    services: ['Lead Generation', 'Prospecting', 'Outreach', 'Funnels', 'Conversion'],
    impact: [
      'More qualified conversations with actual budget owners',
      'Better-quality prospects with pre-built trust',
      'Increased win-rate opportunities in sales calls',
      'Stronger, predictable sales pipeline'
    ],
    metrics: [
      { label: 'Qualified Pipeline', value: '$240k+' },
      { label: 'Meeting Show Rate', value: '88%' },
      { label: 'Response Rate', value: '24.2%' }
    ],
    clientType: 'Enterprise Agency & SaaS Platform',
    timeline: 'Systemized Outbound Engine'
  }
];

export const CLIENT_CATEGORIES: ClientCategory[] = [
  {
    id: 'founders',
    title: 'FOUNDERS',
    subtitle: 'Build authority beyond your company.',
    description: 'When founders become industry voices, companies attract top talent, effortless capital, and premium enterprise customers.',
    keyChallenge: 'Lacking time to articulate deep market perspective amidst operational fires.',
    markfluraSolution: 'Full-service executive ghostwriting, narrative positioning, and LinkedIn thought leadership.'
  },
  {
    id: 'entrepreneurs',
    title: 'ENTREPRENEURS',
    subtitle: 'Turn experience into influence.',
    description: 'Transform years of lessons, pivots, and operational wins into magnetic digital gravity that fuels your next venture.',
    keyChallenge: 'Uncertainty on how to package raw experience into authoritative content pillars.',
    markfluraSolution: 'Strategic storytelling blueprints that convert your journey into actionable insight.'
  },
  {
    id: 'professionals',
    title: 'PROFESSIONALS',
    subtitle: 'Build a reputation around your expertise.',
    description: 'Position yourself as the go-to specialist in your sector, commanding premium advisory fees and inbound board seats.',
    keyChallenge: 'Being overlooked despite exceptional domain mastery and client results.',
    markfluraSolution: 'Clear positioning and profile optimization designed to make you top-of-mind.'
  },
  {
    id: 'creators',
    title: 'CREATORS',
    subtitle: 'Turn your audience into meaningful opportunities.',
    description: 'Move past volatile creator-fund payouts into sustainable brand equity, private consultancies, and flagship deals.',
    keyChallenge: 'Monetizing followers with high-integrity commercial partnerships.',
    markfluraSolution: 'Brand alignment strategy, commercial positioning, and executive partnerships.'
  },
  {
    id: 'brands',
    title: 'BRANDS',
    subtitle: 'Use creator influence to reach the right people.',
    description: 'Stop wasting budget on superficial banner ads. Deploy credible creator voices that consumers naturally trust.',
    keyChallenge: 'Sifting through fake follower counts to find real affinity and commercial lift.',
    markfluraSolution: 'Vetted creator scouting, contextual campaign concepts, and transparent performance tracking.'
  },
  {
    id: 'businesses',
    title: 'BUSINESSES',
    subtitle: 'Build a digital presence that creates conversations and leads.',
    description: 'Combine high-level brand credibility with high-converting outbound systems that fill sales calendars consistently.',
    keyChallenge: 'Generating pipeline without burning brand equity on spammy outreach.',
    markfluraSolution: 'Value-first lead funnels and relationship-driven social prospecting.'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What does Markflura do?',
    answer: 'Markflura is a Delhi-based influence and growth agency specialising in personal branding, LinkedIn growth, influencer marketing and lead generation.'
  },
  {
    id: 'faq-2',
    category: 'Clients',
    question: 'Who do you work with?',
    answer: 'We work with founders, entrepreneurs, professionals, creators, startups and businesses that want to build stronger visibility, authority and business opportunities.'
  },
  {
    id: 'faq-3',
    category: 'Services',
    question: 'What is personal branding?',
    answer: 'Personal branding is the process of intentionally building your reputation around your expertise, experience, personality and point of view. We help turn that into a consistent digital presence.'
  },
  {
    id: 'faq-4',
    category: 'LinkedIn',
    question: 'Can you help me grow on LinkedIn?',
    answer: 'Yes. We help with LinkedIn positioning, profile optimisation, content strategy, thought leadership, engagement and audience growth.'
  },
  {
    id: 'faq-5',
    category: 'LinkedIn',
    question: 'Do you create LinkedIn content?',
    answer: 'Yes. We can develop content strategies and create posts around your expertise, experiences, opinions, industry insights and personal stories.'
  },
  {
    id: 'faq-6',
    category: 'Influencer Marketing',
    question: 'Do you work with influencers?',
    answer: 'Yes. We help brands identify suitable creators, develop campaigns and manage influencer collaborations.'
  },
  {
    id: 'faq-7',
    category: 'Influencer Marketing',
    question: 'How do you select influencers?',
    answer: 'We look beyond follower count. We consider: Audience relevance, Engagement, Content quality, Brand fit, Audience demographics, and Campaign objectives.'
  },
  {
    id: 'faq-8',
    category: 'Lead Generation',
    question: 'Can you generate leads through LinkedIn?',
    answer: 'Yes. LinkedIn can be an effective channel for B2B prospecting and relationship-driven lead generation when the strategy, targeting and outreach are handled correctly.'
  },
  {
    id: 'faq-9',
    category: 'Lead Generation',
    question: 'Do you guarantee a specific number of leads?',
    answer: "We don't believe responsible marketing should promise artificial numbers. Results depend on the industry, offer, audience, positioning, market and execution. Our focus is on building a sustainable system and continuously improving performance."
  },
  {
    id: 'faq-10',
    category: 'Operations',
    question: 'Do you work only with Delhi-based clients?',
    answer: 'No. Markflura is Delhi-based but can work with clients across India and, where appropriate, international clients.'
  },
  {
    id: 'faq-11',
    category: 'Engagement',
    question: 'Do you offer customised packages?',
    answer: 'Yes. Every business and personal brand has different objectives, so our scope can be customised around your specific requirements.'
  },
  {
    id: 'faq-12',
    category: 'Engagement',
    question: 'How do we get started?',
    answer: "Simply get in touch. We'll understand your goals, evaluate your current presence and discuss the best way forward."
  }
];

export const APPROACH_JOURNEY = [
  {
    stage: 'POSITION',
    subtitle: 'Know what you want to be known for.',
    description: 'Uncover your distinctive edge, point of view, and domain territory.'
  },
  {
    stage: 'PRESENCE',
    subtitle: 'Show up consistently and professionally.',
    description: 'Polish every public surface so people instantly respect your standard.'
  },
  {
    stage: 'CONTENT',
    subtitle: 'Share ideas worth paying attention to.',
    description: 'Publish signal over noise; articulate perspectives that challenge the consensus.'
  },
  {
    stage: 'AUTHORITY',
    subtitle: 'Build trust through expertise and consistency.',
    description: 'Prove your track record with depth, case outcomes, and intellectual honesty.'
  },
  {
    stage: 'RELATIONSHIPS',
    subtitle: 'Turn audiences into communities and conversations.',
    description: 'Transform passive lurkers into trusted collaborators, allies, and peers.'
  },
  {
    stage: 'OPPORTUNITY',
    subtitle: 'Convert influence into business value.',
    description: 'Unlock enterprise deals, partnerships, talent attraction, and compound revenue.'
  }
];
