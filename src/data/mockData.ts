import { Project, Testimonial, FAQItem } from '../types';

export const FEATURED_BRANDS = [
  { name: 'CarDekho', category: 'AutoTech', fundedShark: 'Amit Jain Portfolio' },
  { name: 'Emcure Pharma', category: 'Healthcare', fundedShark: 'Namita Thapar' },
  { name: 'Swiggy', category: 'Food Delivery', count: '120+ Gigs' },
  { name: 'Shoppers Stop', category: 'Retail', count: '85+ Gigs' },
  { name: 'Tata 1mg', category: 'Health & Wellness', count: '60+ Gigs' },
  { name: 'Dunzo', category: 'Hyperlocal', count: '45+ Gigs' },
  { name: 'Boat Lifestyle', category: 'Audio & Wearables', count: '90+ Gigs' },
  { name: 'Lenskart', category: 'Eyewear', count: '110+ Gigs' },
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Short-Form Reel & Meme Creation for Gen-Z Launch',
    company: 'CarDekho',
    companyLogoText: 'CD',
    category: 'Social Media',
    stipend: 3500,
    duration: '10 days (approx. 4 hrs/week)',
    spotsLeft: 4,
    difficulty: 'Beginner Friendly',
    verifiedBrand: true,
    deadline: 'In 3 days',
    description: 'Create 5 relatable short reels or carousel memes on Instagram breaking down first-time car buying myths for youth and college students.',
    deliverables: [
      '5 Edited Instagram Reels (9:16 format with hooks and subtitles)',
      'Caption copy and hashtag suggestions',
      'Raw footage / CapCut or Premiere project files'
    ],
    skillsRequired: ['Reel Editing', 'Canva / CapCut', 'Gen-Z Trends', 'Copywriting'],
    perks: ['Official CarDekho Project Certificate', 'Chance for monthly retainer', 'Featured on CarDekho handle'],
    companyIndustry: 'AutoTech & Mobility'
  },
  {
    id: 'proj-2',
    title: 'Mobile App Beta Usability Testing & Bug Audit',
    company: 'Tata 1mg Health',
    companyLogoText: '1MG',
    category: 'App & Web Testing',
    stipend: 2200,
    duration: 'Weekend Sprint (approx. 3 hrs)',
    spotsLeft: 8,
    difficulty: 'Beginner Friendly',
    verifiedBrand: true,
    deadline: 'In 2 days',
    description: 'Test the newly released wellness habit tracker on Android and iOS devices. Document navigation friction, broken UI elements, and recommend youth-oriented enhancements.',
    deliverables: [
      'Structured Google Sheet bug log with screenshots',
      '3-minute screen recording of checkout workflow',
      'Survey response on teen wellness attitudes'
    ],
    skillsRequired: ['Attention to Detail', 'Mobile OS Testing', 'Critical Thinking'],
    perks: ['1mg Product Testing Certificate', '₹500 Health Store voucher'],
    companyIndustry: 'HealthTech'
  },
  {
    id: 'proj-3',
    title: 'YouTube Thumbnail & Social Graphic Package',
    company: 'Boat Lifestyle',
    companyLogoText: 'BOAT',
    category: 'Graphic Design',
    stipend: 4200,
    duration: '2 weeks (approx. 5 hrs/week)',
    spotsLeft: 3,
    difficulty: 'Intermediate',
    verifiedBrand: true,
    deadline: 'In 5 days',
    description: 'Design 8 high-CTR YouTube thumbnails and 4 promotional banner graphics for Boat’s new noise-cancelling headphone release campaign.',
    deliverables: [
      '8 High-Resolution YouTube Thumbnails (1920x1080)',
      '4 Story & Square Social Posters (Canva or Photoshop/Figma)',
      'Editable layered source files'
    ],
    skillsRequired: ['Figma or Photoshop', 'Color Contrast Theory', 'Typography'],
    perks: ['Official Creative Certificate', 'Discount pass on Boat gear'],
    companyIndustry: 'Consumer Electronics'
  },
  {
    id: 'proj-4',
    title: 'College Campus Brand Ambassador & Survey Pulse',
    company: 'Swiggy Instamart',
    companyLogoText: 'SW',
    category: 'Market Research',
    stipend: 2800,
    duration: '7 days',
    spotsLeft: 12,
    difficulty: 'Beginner Friendly',
    verifiedBrand: true,
    deadline: 'In 4 days',
    description: 'Gather 40 peer responses on late-night snack snacking habits and app delivery preferences across your high school or college campus community.',
    deliverables: [
      '40 verified digital survey submissions',
      '1-page summary highlighting key student snack cravings',
      'Feedback on campus discount codes'
    ],
    skillsRequired: ['Communication', 'Survey Execution', 'Data Summarization'],
    perks: ['Swiggy Ambassador Certificate', 'Exclusive Swiggy One Perks'],
    companyIndustry: 'Quick Commerce'
  },
  {
    id: 'proj-5',
    title: 'Podcast Highlights & Short-Form Video Repurposing',
    company: 'FinEd Studio',
    companyLogoText: 'FS',
    category: 'Video Editing',
    stipend: 5000,
    duration: '14 days (approx. 6 hrs/week)',
    spotsLeft: 2,
    difficulty: 'Intermediate',
    verifiedBrand: true,
    deadline: 'In 6 days',
    description: 'Cut 10 viral vertical clips from long-form founder interviews. Add dynamic word-by-word captions, sound effects, B-roll overlays, and zoom punches.',
    deliverables: [
      '10 Vertical clips (60 seconds or less) with burned-in subtitles',
      'Color graded export ready for TikTok/Shorts/Reels',
      'SRT subtitle files'
    ],
    skillsRequired: ['Premiere Pro / DaVinci / CapCut', 'Subtitle Timing', 'Sound Design'],
    perks: ['Video Editor Verified Credential', 'Long-term freelance contract potential'],
    companyIndustry: 'EdTech & Media'
  },
  {
    id: 'proj-6',
    title: 'SEO Blog Post on "Best Pocket Money Management Apps for Teens"',
    company: 'YouthMoney India',
    companyLogoText: 'YM',
    category: 'Content & Writing',
    stipend: 1800,
    duration: '5 days',
    spotsLeft: 5,
    difficulty: 'Beginner Friendly',
    verifiedBrand: true,
    deadline: 'In 3 days',
    description: 'Write an authentic 1,200-word conversational guide reviewing practical methods Indian teens use to save, invest, and budget their first freelancing income.',
    deliverables: [
      '1,200-word original article with clean H2/H3 headings',
      'Meta description and 5 target keyword suggestions',
      '0% AI-generated plag-checked text draft'
    ],
    skillsRequired: ['English Writing', 'Basic SEO', 'Authentic Gen-Z Voice'],
    perks: ['Author Byline on National Youth Blog', 'Certificate of Publication'],
    companyIndustry: 'FinTech'
  },
  {
    id: 'proj-7',
    title: 'UI Audit & Responsive Layout Feedback on New SaaS Portal',
    company: 'WorkGrid Technologies',
    companyLogoText: 'WG',
    category: 'App & Web Testing',
    stipend: 3200,
    duration: '1 week',
    spotsLeft: 4,
    difficulty: 'Intermediate',
    verifiedBrand: true,
    deadline: 'In 7 days',
    description: 'Inspect a newly created cloud collaboration dashboard across various screen sizes (laptop, iPad, mobile). Log responsiveness glitches and workflow friction.',
    deliverables: [
      'Comprehensive report detailing 10+ UX friction points',
      'Screen annotations with suggested layout fixes',
      'Summary video walk-through'
    ],
    skillsRequired: ['UI/UX Awareness', 'Bug Reporting', 'Device Testing'],
    perks: ['QA Intern Certificate', 'Direct recommendation letter'],
    companyIndustry: 'B2B Software'
  },
  {
    id: 'proj-8',
    title: 'Gen-Z E-Commerce Product Tagging & Classification',
    company: 'Shoppers Stop',
    companyLogoText: 'SS',
    category: 'Market Research',
    stipend: 2500,
    duration: '6 days (flexible hours)',
    spotsLeft: 7,
    difficulty: 'Beginner Friendly',
    verifiedBrand: true,
    deadline: 'In 5 days',
    description: 'Review and categorize 250 fashion catalog items using trending street-wear and Gen-Z aesthetic tags (cottagecore, Y2K, minimalist, streetwear).',
    deliverables: [
      'Spreadsheet with categorized SKUs and aesthetic tags',
      'Trend report highlighting 5 upcoming youth apparel themes'
    ],
    skillsRequired: ['Fashion Trends', 'Data Organization', 'Google Sheets'],
    perks: ['Retail Merchandising Certificate', 'Shoppers Stop Gift Card'],
    companyIndustry: 'Fashion & Retail'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Riya Sen',
    age: 17,
    city: 'New Delhi',
    role: 'Reel Editor & Motion Designer',
    earnings: '₹34,500 total earned',
    quote: 'Before Funngro, I made video edits just for fun on Instagram. Within 3 months on Funngro, I worked with CarDekho and two D2C skincare startups. I bought my own iPad Air without asking my parents!',
    completedGigs: 9,
    companyWorkedWith: 'CarDekho & D2C Brands'
  },
  {
    id: 't-2',
    name: 'Kabir Deshmukh',
    age: 15,
    city: 'Pune',
    role: 'Beta Tester & QA Enthusiast',
    earnings: '₹14,200 total earned',
    quote: 'As a 10th grader, finding a legit internship seemed impossible until Funngro. Companies actually listen to my bug reports, and money goes straight to my minor savings account via UPI. The experience certificates helped me stand out in school leadership.',
    completedGigs: 6,
    companyWorkedWith: 'Tata 1mg & EdTech Apps'
  },
  {
    id: 't-3',
    name: 'Dr. Meenakshi Sundaram',
    age: 46,
    city: 'Bengaluru',
    role: 'Parent of 16-year-old Teenlancer',
    earnings: 'Parent Endorsement',
    quote: 'As a mother, safety was my primary question. Funngro requires parent verification for under 18s, the project mentors review deliverables, and my son works only on weekends. He now understands the value of money and manages his own budget.',
    completedGigs: 11,
    companyWorkedWith: 'Parent Perspective'
  },
  {
    id: 't-4',
    name: 'Siddharth Varma',
    age: 19,
    city: 'Hyderabad',
    role: 'Graphic Designer & Content Strategist',
    earnings: '₹52,000 total earned',
    quote: 'The Shark Tank pitch gave me confidence that this is 100% legitimate. I started with a small ₹1,500 survey project, and now I handle retainer graphic design packages for startups while balancing my 1st year B.Tech.',
    completedGigs: 14,
    companyWorkedWith: 'Boat & FinTech Startups'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f-1',
    category: 'Teens',
    question: 'Who can register and earn on Funngro?',
    answer: 'Any teenager or young adult aged 14 to 25 with enthusiasm to learn and execute real tasks. Whether you love editing videos, designing memes, testing apps, or doing research, there are projects tailored for every skill level.'
  },
  {
    id: 'f-2',
    category: 'Payments',
    question: 'How do Teenlancers get paid and is it safe?',
    answer: 'Payments are held securely in an escrow model by Funngro before you start work. Once your submission is reviewed and approved by the company mentor, your payment is transferred directly to your bank account or UPI within 24-48 hours.'
  },
  {
    id: 'f-3',
    category: 'Parents',
    question: 'How does Funngro protect teen safety and study hours?',
    answer: 'Every company is KYC-verified before posting tasks. For teens under 18, parental consent is integrated into the sign-up flow. Project durations are strictly capped (typically 3–5 hours a week) so academics and sports are never compromised.'
  },
  {
    id: 'f-4',
    category: 'Teens',
    question: 'What if I have zero prior work experience?',
    answer: 'Most projects are marked "Beginner Friendly" and designed precisely as learning-by-doing micro-internships. Funngro provides sample task templates, short preparation modules, and mentor checkpoints to guide you through your first gig.'
  },
  {
    id: 'f-5',
    category: 'Companies',
    question: 'Why do 5,000+ brands and startups hire through Funngro?',
    answer: 'Companies access dynamic Gen-Z perspectives, fast turnaround for creative content, honest usability testing from digital natives, and cost-efficient execution. Payments are milestone-backed with strict quality control.'
  },
  {
    id: 'f-6',
    category: 'Teens',
    question: 'Do I get an official experience certificate?',
    answer: 'Yes! Upon successful completion of each corporate project, you receive a digitally verifiable Experience Certificate co-branded by the client company and Funngro, complete with a QR code for your LinkedIn or college portfolio.'
  }
];
