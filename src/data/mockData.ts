export const quizQuestions = [
  {
    id: 1,
    question: "What kind of problems excite you the most?",
    emoji: "🧩",
    options: [
      { id: "a", text: "Solving math puzzles & equations", emoji: "🔢", tags: ["pcm", "commerce"] },
      { id: "b", text: "Understanding how the body works", emoji: "🧬", tags: ["pcb"] },
      { id: "c", text: "Creating stories, art or designs", emoji: "🎨", tags: ["arts", "vocational"] },
      { id: "d", text: "Tracking money, markets & trends", emoji: "📈", tags: ["commerce"] },
    ],
  },
  {
    id: 2,
    question: "Pick your dream weekend activity",
    emoji: "🎯",
    options: [
      { id: "a", text: "Building a robot or coding an app", emoji: "🤖", tags: ["pcm", "vocational"] },
      { id: "b", text: "Volunteering at a hospital or lab", emoji: "🏥", tags: ["pcb"] },
      { id: "c", text: "Editing reels or designing posters", emoji: "📱", tags: ["arts", "vocational"] },
      { id: "d", text: "Running a small business with friends", emoji: "💼", tags: ["commerce"] },
    ],
  },
  {
    id: 3,
    question: "Which subject feels like 'fun' not work?",
    emoji: "📚",
    options: [
      { id: "a", text: "Physics & Mathematics", emoji: "⚛️", tags: ["pcm"] },
      { id: "b", text: "Biology & Chemistry", emoji: "🧪", tags: ["pcb"] },
      { id: "c", text: "History, Literature, Psychology", emoji: "📖", tags: ["arts"] },
      { id: "d", text: "Economics & Business Studies", emoji: "💰", tags: ["commerce"] },
    ],
  },
  {
    id: 4,
    question: "Are you into coding, AI & tech?",
    emoji: "💻",
    options: [
      { id: "a", text: "Obsessed — I live for it", emoji: "🔥", tags: ["pcm", "vocational"] },
      { id: "b", text: "Curious but prefer hands-on labs", emoji: "🔬", tags: ["pcb"] },
      { id: "c", text: "I'd rather create content & art", emoji: "✨", tags: ["arts", "vocational"] },
      { id: "d", text: "Only if it helps me earn money", emoji: "💸", tags: ["commerce"] },
    ],
  },
  {
    id: 5,
    question: "How do you handle a tough challenge?",
    emoji: "💪",
    options: [
      { id: "a", text: "Break it into logical steps", emoji: "🧠", tags: ["pcm", "commerce"] },
      { id: "b", text: "Research deeply & test theories", emoji: "🔍", tags: ["pcb", "pcm"] },
      { id: "c", text: "Use creativity to find a unique fix", emoji: "🌈", tags: ["arts", "vocational"] },
      { id: "d", text: "Talk to people & strategize", emoji: "🗣️", tags: ["commerce", "arts"] },
    ],
  },
  {
    id: 6,
    question: "Your ideal future workspace?",
    emoji: "🏢",
    options: [
      { id: "a", text: "A high-tech lab or startup garage", emoji: "🚀", tags: ["pcm", "vocational"] },
      { id: "b", text: "A hospital, research center or field", emoji: "🌿", tags: ["pcb"] },
      { id: "c", text: "A creative studio or remote cafe", emoji: "☕", tags: ["arts", "vocational"] },
      { id: "d", text: "A corporate office or trading floor", emoji: "🏛️", tags: ["commerce"] },
    ],
  },
  {
    id: 7,
    question: "What motivates you the most?",
    emoji: "⭐",
    options: [
      { id: "a", text: "Inventing something the world needs", emoji: "💡", tags: ["pcm"] },
      { id: "b", text: "Helping & healing people", emoji: "❤️", tags: ["pcb"] },
      { id: "c", text: "Expressing myself authentically", emoji: "🎭", tags: ["arts"] },
      { id: "d", text: "Building wealth & independence", emoji: "👑", tags: ["commerce"] },
    ],
  },
];

export const streamResults: Record<string, { name: string; tagline: string; emoji: string; description: string; color: string }> = {
  pcm: {
    name: "Science (PCM)",
    tagline: "The Future-Builder",
    emoji: "⚛️",
    description: "Physics, Chemistry, Maths — perfect for engineering, tech, AI, architecture and pure sciences. You think logically and love solving complex problems.",
    color: "primary",
  },
  pcb: {
    name: "Science (PCB)",
    tagline: "The Life-Saver",
    emoji: "🧬",
    description: "Physics, Chemistry, Biology — your gateway to medicine, biotech, psychology and research. You're empathetic and love understanding life.",
    color: "success",
  },
  commerce: {
    name: "Commerce",
    tagline: "The Wealth-Creator",
    emoji: "📈",
    description: "Accounts, Economics, Business — for future CAs, entrepreneurs, bankers and analysts. You have a sharp mind for numbers and strategy.",
    color: "warning",
  },
  arts: {
    name: "Arts / Humanities",
    tagline: "The Storyteller",
    emoji: "🎨",
    description: "Literature, Psychology, History, Political Science — for future writers, lawyers, designers and changemakers. You're creative and deeply curious.",
    color: "accent",
  },
  vocational: {
    name: "Vocational / Diploma",
    tagline: "The Hands-On Hustler",
    emoji: "🛠️",
    description: "Diplomas, ITI, Design, Animation, Tech bootcamps — skill-first paths that get you industry-ready fast. You learn best by doing.",
    color: "secondary",
  },
};

export const streams = [
  {
    id: "pcm",
    name: "Science (PCM)",
    emoji: "⚛️",
    tagline: "Engineering, Tech & Innovation",
    color: "primary",
    overview: {
      subjects: ["Physics", "Chemistry", "Mathematics", "English", "Computer Science / Optional"],
      difficulty: "High",
      skills: ["Logical reasoning", "Problem-solving", "Strong math foundation", "Patience for theory"],
    },
    roadmap: [
      { stage: "Class 11-12", desc: "Master PCM core. Start JEE / coding prep early.", emoji: "📘" },
      { stage: "Entrance Exams", desc: "JEE Main, JEE Advanced, BITSAT, State CETs.", emoji: "📝" },
      { stage: "Undergrad (3-4 yrs)", desc: "B.Tech, B.Sc, B.Arch — pick your specialization.", emoji: "🎓" },
      { stage: "Master's / Job", desc: "M.Tech, MS abroad, MBA, or join top tech companies.", emoji: "🚀" },
      { stage: "Career", desc: "Software Engineer, Data Scientist, Architect, Researcher.", emoji: "💼" },
    ],
    exams: [
      { name: "JEE Main", eligibility: "12th with PCM, 75%+", purpose: "NITs, IIITs, CFTIs admission" },
      { name: "JEE Advanced", eligibility: "Top 2.5L JEE Main qualifiers", purpose: "Admission to IITs" },
      { name: "BITSAT", eligibility: "12th PCM, 75%+", purpose: "BITS Pilani campuses" },
      { name: "CUET", eligibility: "12th pass", purpose: "Central universities (B.Sc, B.Tech)" },
    ],
    colleges: [
      { name: "IIT Bombay", location: "Mumbai", cutoff: "JEE Adv Rank <500", tag: "🏆 Top Tier" },
      { name: "IIT Delhi", location: "Delhi", cutoff: "JEE Adv Rank <800", tag: "🏆 Top Tier" },
      { name: "BITS Pilani", location: "Rajasthan", cutoff: "BITSAT 350+", tag: "⭐ Elite" },
      { name: "NIT Trichy", location: "Tamil Nadu", cutoff: "JEE Main Rank <2000", tag: "✨ Premier" },
    ],
  },
  {
    id: "pcb",
    name: "Science (PCB)",
    emoji: "🧬",
    tagline: "Medicine, Biotech & Life Sciences",
    color: "success",
    overview: {
      subjects: ["Physics", "Chemistry", "Biology", "English", "Psychology / Optional"],
      difficulty: "High",
      skills: ["Memorization", "Empathy & care", "Lab precision", "Long-term commitment"],
    },
    roadmap: [
      { stage: "Class 11-12", desc: "Deep dive into Bio + NEET prep alongside boards.", emoji: "🔬" },
      { stage: "Entrance Exams", desc: "NEET-UG, AIIMS, CUET (B.Sc), state exams.", emoji: "📝" },
      { stage: "Undergrad (4-5 yrs)", desc: "MBBS, BDS, B.Pharm, B.Sc, BPT, Nursing.", emoji: "🎓" },
      { stage: "PG / Specialization", desc: "MD/MS, MDS, M.Pharm — pick your specialty.", emoji: "💊" },
      { stage: "Career", desc: "Doctor, Researcher, Pharmacist, Biotech Scientist.", emoji: "🩺" },
    ],
    exams: [
      { name: "NEET-UG", eligibility: "12th PCB, 50%+", purpose: "MBBS, BDS, AYUSH admission" },
      { name: "AIIMS / JIPMER", eligibility: "Now via NEET", purpose: "Top medical institutes" },
      { name: "CUET", eligibility: "12th pass", purpose: "B.Sc programs in central unis" },
      { name: "ICAR AIEEA", eligibility: "12th PCB", purpose: "Agriculture & allied sciences" },
    ],
    colleges: [
      { name: "AIIMS Delhi", location: "Delhi", cutoff: "NEET Rank <100", tag: "🏆 Top Tier" },
      { name: "CMC Vellore", location: "Tamil Nadu", cutoff: "NEET Rank <500", tag: "⭐ Elite" },
      { name: "MAMC", location: "Delhi", cutoff: "NEET Rank <1000", tag: "✨ Premier" },
      { name: "JIPMER", location: "Puducherry", cutoff: "NEET Rank <300", tag: "🏆 Top Tier" },
    ],
  },
  {
    id: "commerce",
    name: "Commerce",
    emoji: "📈",
    tagline: "Business, Finance & Entrepreneurship",
    color: "warning",
    overview: {
      subjects: ["Accountancy", "Business Studies", "Economics", "English", "Maths / IP (optional)"],
      difficulty: "Medium",
      skills: ["Number sense", "Analytical thinking", "Communication", "Curiosity about markets"],
    },
    roadmap: [
      { stage: "Class 11-12", desc: "Build accounts + economics base. Start CA Foundation if interested.", emoji: "📊" },
      { stage: "Entrance Exams", desc: "CUET, IPMAT, CA Foundation, CLAT, NPAT.", emoji: "📝" },
      { stage: "Undergrad (3-4 yrs)", desc: "B.Com, BBA, BMS, Eco Hons, Integrated MBA.", emoji: "🎓" },
      { stage: "PG / Pro Course", desc: "MBA, CA, CFA, ACCA, Masters in Finance.", emoji: "💼" },
      { stage: "Career", desc: "CA, Investment Banker, Entrepreneur, Analyst, Consultant.", emoji: "💰" },
    ],
    exams: [
      { name: "CUET", eligibility: "12th pass", purpose: "DU, BHU, JNU & central unis" },
      { name: "IPMAT", eligibility: "12th any stream, 60%+", purpose: "5-year Integrated MBA at IIMs" },
      { name: "CA Foundation", eligibility: "12th pass", purpose: "Chartered Accountancy" },
      { name: "NPAT", eligibility: "12th pass", purpose: "NMIMS BBA / B.Com programs" },
    ],
    colleges: [
      { name: "SRCC", location: "Delhi", cutoff: "CUET 99%ile", tag: "🏆 Top Tier" },
      { name: "Hindu College", location: "Delhi", cutoff: "CUET 98%ile", tag: "⭐ Elite" },
      { name: "St. Xavier's", location: "Mumbai", cutoff: "95%+ boards", tag: "✨ Premier" },
      { name: "IIM Indore (IPM)", location: "Indore", cutoff: "IPMAT Top 200", tag: "🏆 Top Tier" },
    ],
  },
  {
    id: "arts",
    name: "Arts / Humanities",
    emoji: "🎨",
    tagline: "Law, Design, Media & Social Sciences",
    color: "accent",
    overview: {
      subjects: ["History", "Political Science", "Psychology", "English", "Sociology / Economics"],
      difficulty: "Medium",
      skills: ["Reading & writing", "Critical thinking", "Creativity", "Empathy & curiosity"],
    },
    roadmap: [
      { stage: "Class 11-12", desc: "Read widely. Start CLAT / NID / NIFT prep early.", emoji: "📚" },
      { stage: "Entrance Exams", desc: "CUET, CLAT, NID, NIFT, NPAT, JMI mass comm.", emoji: "📝" },
      { stage: "Undergrad (3-4 yrs)", desc: "BA Hons, BA LLB, B.Des, BJMC, BFA.", emoji: "🎓" },
      { stage: "PG / Specialization", desc: "MA, LLM, M.Des, MBA, UPSC prep.", emoji: "✍️" },
      { stage: "Career", desc: "Lawyer, Designer, Journalist, Psychologist, Civil Servant.", emoji: "⚖️" },
    ],
    exams: [
      { name: "CLAT", eligibility: "12th pass, 45%+", purpose: "NLUs for BA LLB" },
      { name: "CUET", eligibility: "12th pass", purpose: "DU, JNU, Jamia & more" },
      { name: "NID DAT", eligibility: "12th any stream", purpose: "B.Des at NID campuses" },
      { name: "NIFT", eligibility: "12th any stream", purpose: "Fashion & design programs" },
    ],
    colleges: [
      { name: "NLSIU Bangalore", location: "Bangalore", cutoff: "CLAT Rank <80", tag: "🏆 Top Tier" },
      { name: "NID Ahmedabad", location: "Ahmedabad", cutoff: "DAT Top 100", tag: "🏆 Top Tier" },
      { name: "St. Stephen's", location: "Delhi", cutoff: "CUET 98%ile", tag: "⭐ Elite" },
      { name: "JMI Mass Comm", location: "Delhi", cutoff: "Entrance Top 50", tag: "✨ Premier" },
    ],
  },
  {
    id: "vocational",
    name: "Vocational / Diploma",
    emoji: "🛠️",
    tagline: "Skill-First, Industry-Ready Paths",
    color: "secondary",
    overview: {
      subjects: ["Trade-specific", "Practical labs", "Internships", "Soft skills"],
      difficulty: "Hands-on",
      skills: ["Practical aptitude", "Discipline", "Quick learning", "Tool handling"],
    },
    roadmap: [
      { stage: "After 10th", desc: "Pick a Diploma / ITI / Polytechnic / Design foundation.", emoji: "🔧" },
      { stage: "Course (1-3 yrs)", desc: "Diploma in Engg, Animation, Hospitality, ITI trades.", emoji: "📐" },
      { stage: "Internship", desc: "On-the-job training, apprenticeships, portfolios.", emoji: "🏗️" },
      { stage: "Lateral Entry / Job", desc: "Join 2nd year of B.Tech OR start working immediately.", emoji: "💼" },
      { stage: "Career", desc: "Designer, Technician, Animator, Chef, Tech Specialist.", emoji: "🎬" },
    ],
    exams: [
      { name: "JEXPO / Polytechnic CET", eligibility: "10th pass", purpose: "State polytechnic admission" },
      { name: "ITI Entrance", eligibility: "8th-10th pass", purpose: "Industrial Training Institutes" },
      { name: "NID / NIFT (UG Diploma)", eligibility: "10th/12th pass", purpose: "Design diplomas" },
      { name: "Pearl Academy", eligibility: "10th/12th", purpose: "Fashion, design, media diplomas" },
    ],
    colleges: [
      { name: "Govt Polytechnic Mumbai", location: "Mumbai", cutoff: "10th 75%+", tag: "✨ Premier" },
      { name: "Arena Animation", location: "Pan-India", cutoff: "Open admission", tag: "🎨 Skill-Hub" },
      { name: "IHM Pusa (Hotel Mgmt)", location: "Delhi", cutoff: "NCHMCT JEE", tag: "⭐ Elite" },
      { name: "Pearl Academy", location: "Delhi/Mumbai", cutoff: "Portfolio + Interview", tag: "🎨 Skill-Hub" },
    ],
  },
];

export const botResponses: { keywords: string[]; reply: string }[] = [
  {
    keywords: ["science", "commerce", "confused"],
    reply: "Great question! 🤔 If you love numbers + logic + want a degree like CA or MBA, Commerce is solid. If you love physics/bio and want engineering or medicine, go Science. Take our quiz — it really helps!",
  },
  {
    keywords: ["cuet"],
    reply: "CUET = Common University Entrance Test 🎯 It's a single exam to get into central universities like DU, BHU, JNU. You pick subjects based on your stream. Almost every 12th-grader takes it now!",
  },
  {
    keywords: ["jee"],
    reply: "JEE is the gateway to IITs, NITs and top engineering colleges 🚀 JEE Main → NITs/IIITs. JEE Advanced (top 2.5L) → IITs. Start prep in Class 11 ideally!",
  },
  {
    keywords: ["neet"],
    reply: "NEET-UG is THE exam for MBBS/BDS in India 🩺 Single national test, super competitive. You need PCB in 12th with 50%+ to qualify.",
  },
  {
    keywords: ["arts", "humanities"],
    reply: "Arts is NOT a backup — it's the path for future lawyers, designers, psychologists, IAS officers and journalists! 🎨 NLUs, NID, DU all welcome you.",
  },
  {
    keywords: ["diploma", "iti", "vocational"],
    reply: "Diplomas & ITI are AMAZING shortcuts to industry 🛠️ You can even do lateral entry to B.Tech 2nd year after a 3-year diploma. Skill-first = job-ready!",
  },
  {
    keywords: ["hi", "hello", "hey"],
    reply: "Heyy! 👋 I'm CareerBot. Ask me anything about streams, exams, or careers — or just type 'confused' and I'll help you out!",
  },
];
