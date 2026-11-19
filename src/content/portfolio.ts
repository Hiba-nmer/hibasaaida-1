import { tx, type LocalizedText } from "@/lib/language";

export const navItems = [
  { id: "home", label: tx("Home", "الرئيسية") },
  { id: "about", label: tx("About", "عني") },
  { id: "methodology", label: tx("Methodology", "منهجيتي") },
  { id: "experience", label: tx("Experience", "الخبرة") },
  { id: "work", label: tx("Case Studies", "دراسات الحالة") },
  { id: "creative", label: tx("Creative", "أعمالي الإبداعية") },
  { id: "skills", label: tx("Skills", "المهارات") },
  { id: "contact", label: tx("Contact", "تواصل") },
] as const;

export const siteCopy = {
  languageSwitcher: tx("Switch to Arabic", "التبديل إلى الإنجليزية"),
  menuOpen: tx("Open navigation", "فتح قائمة التنقل"),
  menuClose: tx("Close navigation", "إغلاق قائمة التنقل"),
  hero: {
    eyebrow: tx("Strategy · Intelligence · Sustainable Growth", "استراتيجية · ذكاء · نمو مستدام"),
    name: tx("Heba Al-Sayda", "هبة سعايدة"),
    roles: tx(
      "Brand Growth Specialist & Strategic Marketer | Facilitator, Trainer & Business Manager",
      "أخصائية نمو العلامات التجارية ومسوقة استراتيجية | ميسرة، مدربة، ومديرة أعمال",
    ),
    bio: tx(
      "I dive deep into business anatomy, analyze data using AI and Excel, and build sustainable growth strategies that turn challenges into real business impact.",
      "أغوص في أعماق البزنس، أحلل البيانات باستخدام أدوات الذكاء الاصطناعي و Excel، وأبني استراتيجيات نمو مستدامة تحول التحديات إلى نتائج حقيقية وأرقام ملموسة.",
    ),
    primaryCta: tx("Explore My Work", "تصفح أعمالي ومشاريعي"),
    secondaryCta: tx("Get in Touch", "تواصل معي"),
    scroll: tx("Scroll to explore", "مرر لاستكشاف أعمالي"),
  },
  about: {
    eyebrow: tx("Beyond conventional marketing", "أبعد من التسويق التقليدي"),
    title: tx("Business thinking, built for growth", "تفكير تجاري يصنع النمو"),
    description: tx(
      "I connect business diagnostics, customer insight, creative execution, and measurable performance in one clear growth system.",
      "أربط بين تشخيص الأعمال، وفهم العملاء، والتنفيذ الإبداعي، وقياس الأداء ضمن منظومة نمو واضحة وقابلة للقياس.",
    ),
    imageAlt: tx("Abstract artwork representing creative strategy", "عمل فني تجريدي يعبر عن الاستراتيجية الإبداعية"),
    cards: [
      {
        num: "01",
        title: tx("Business Analyst", "محللة أعمال"),
        desc: tx(
          "I examine the business model, internal challenges, customer journey, and numbers before recommending any marketing action.",
          "أدرس نموذج العمل والتحديات الداخلية ورحلة العميل والأرقام قبل التوصية بأي خطوة تسويقية.",
        ),
      },
      {
        num: "02",
        title: tx("Growth Strategist", "استراتيجية نمو"),
        desc: tx(
          "I turn market research, competitor intelligence, AI tools, and Excel analysis into focused positioning and sustainable growth plans.",
          "أحول أبحاث السوق وتحليل المنافسين وأدوات الذكاء الاصطناعي وExcel إلى تموضع واضح وخطط نمو مستدامة.",
        ),
      },
      {
        num: "03",
        title: tx("Facilitator & Business Leader", "ميسرة وقائدة أعمال"),
        desc: tx(
          "I facilitate practical learning, coordinate teams and projects, and translate strategy into organized execution with clear ownership.",
          "أيسّر تجارب تعلم تطبيقية، وأنسق الفرق والمشاريع، وأحول الاستراتيجية إلى تنفيذ منظم بمسؤوليات واضحة.",
        ),
      },
    ],
  },
  methodology: {
    eyebrow: tx("How I turn insight into impact", "كيف أحول المعرفة إلى أثر"),
    title: tx("My Strategic Brand Growth Methodology", "منهجيتي الاستراتيجية في نمو العلامات التجارية"),
    description: tx(
      "Four connected pillars move every project from the right questions to measurable, sustainable growth.",
      "أربع ركائز مترابطة تنقل كل مشروع من الأسئلة الصحيحة إلى نمو مستدام قابل للقياس.",
    ),
  },
  experience: {
    eyebrow: tx("Professional & research track record", "مسيرتي المهنية والبحثية"),
    title: tx("Experience grounded in real execution", "خبرة مبنية على تنفيذ حقيقي"),
    description: tx(
      "Consulting, field campaigns, international research, facilitation, and academic inquiry—all connected by evidence-led decisions.",
      "استشارات وحملات ميدانية وأبحاث دولية وتيسير وبحث أكاديمي، تجمعها قرارات مبنية على الدليل.",
    ),
    viewCertificate: tx("View Certificate", "عرض الشهادة"),
    certificateAlt: tx("Professional certificate", "شهادة مهنية"),
  },
  campaigns: {
    eyebrow: tx("Field impact & community leadership", "أثر ميداني وقيادة مجتمعية"),
    title: tx("Featured Campaigns & Strategic Initiatives", "أبرز الحملات والمبادرات الاستراتيجية"),
    description: tx(
      "Practical coordination, measurable acquisition, and community programs delivered through strong local partnerships.",
      "تنسيق عملي، واستحواذ قابل للقياس، وبرامج مجتمعية نُفذت عبر شراكات محلية قوية.",
    ),
    openPhoto: tx("Open photo preview", "فتح معاينة الصورة"),
    closePreview: tx("Close photo preview", "إغلاق معاينة الصورة"),
    previewDescription: tx("Enlarged campaign photo", "صورة موسعة من الحملة"),
  },
  work: {
    eyebrow: tx("Selected strategy engagements", "نماذج من مشاريعي الاستراتيجية"),
    title: tx("Featured Case Studies", "دراسات حالة مختارة"),
    description: tx(
      "Structured work that shows the business question, analytical approach, strategic direction, and practical deliverables.",
      "أعمال منظمة تعرض سؤال العمل، والمنهج التحليلي، والتوجه الاستراتيجي، والمخرجات العملية.",
    ),
    deliverables: tx("Case study deliverables", "ملفات دراسة الحالة"),
    download: tx("Download", "تحميل"),
    supportingTitle: tx("Identity & Presentations", "هوية وعروض تقديمية"),
    supportingDescription: tx("Additional strategy and communication resources.", "مصادر إضافية في الاستراتيجية والتواصل."),
    viewPresentation: tx("View Presentation", "عرض التقديم"),
  },
  creative: {
    eyebrow: tx("Creative & visual production", "الإنتاج الإبداعي والبصري"),
    title: tx("Photoshop Design Showcase", "معرض تصاميم الفوتوشوب"),
    description: tx(
      "A curated selection of professional advertising and visual concepts created with Adobe Photoshop.",
      "مجموعة مختارة من الإعلانات والمفاهيم البصرية الاحترافية المصممة باستخدام Adobe Photoshop.",
    ),
    openGallery: tx("Open design gallery", "فتح معرض التصاميم"),
    designsCount: tx("7 designs", "7 تصاميم"),
    previous: tx("Previous design", "التصميم السابق"),
    next: tx("Next design", "التصميم التالي"),
    close: tx("Close gallery", "إغلاق المعرض"),
  },
  reels: {
    eyebrow: tx("Video & Reels Portfolio", "معرض الفيديوهات والريلز"),
    title: tx("Stories built to be remembered", "قصص بصرية صُممت لتبقى في الذاكرة"),
    description: tx(
      "Perfume-brand campaigns, behind-the-scenes reels, and motion-led visual storytelling—from concept to creative production.",
      "حملات لعلامات عطور، وريلز من الكواليس، وسرد بصري متحرك يمتد من الفكرة إلى الإنتاج الإبداعي.",
    ),
    instagramCta: tx("Visit @lasoriee.ps", "زيارة @lasoriee.ps"),
    victorian: tx("Victorian Chapter", "الفصل الفيكتوري"),
    elegant: tx("Elegant · Golden", "أناقة · ذهبي"),
  },
  skills: {
    eyebrow: tx("Capabilities & tools", "القدرات والأدوات"),
    title: tx("An analytical and creative toolkit", "منظومة مهارات تحليلية وإبداعية"),
    description: tx(
      "The tools I use to diagnose, plan, execute, facilitate, and optimize.",
      "الأدوات التي أستخدمها للتشخيص والتخطيط والتنفيذ والتيسير والتطوير.",
    ),
  },
  achievements: {
    eyebrow: tx("Recognition", "تقدير وإنجاز"),
    title: tx("Achievements", "الإنجازات"),
    description: tx("Recognition for communication, analysis, and persuasion.", "تقدير لمهارات التواصل والتحليل والإقناع."),
    close: tx("Close certificate", "إغلاق الشهادة"),
  },
  contact: {
    eyebrow: tx("Let’s build what’s next", "لنبنِ الخطوة القادمة"),
    title: tx("Turn your next challenge into a growth opportunity", "حوّل تحديك القادم إلى فرصة نمو"),
    description: tx(
      "For consulting, strategy, research, training, or creative campaign collaborations, let’s start a focused conversation.",
      "للاستشارات أو الاستراتيجية أو الأبحاث أو التدريب أو التعاون في الحملات الإبداعية، لنبدأ حوارًا واضحًا وهادفًا.",
    ),
    email: tx("Email", "البريد الإلكتروني"),
    phone: tx("Phone", "الهاتف"),
    location: tx("Location", "الموقع"),
    locationValue: tx("Tulkarm, Palestine", "طولكرم، فلسطين"),
    emailCta: tx("Email Me", "راسليني عبر البريد"),
    linkedinCta: tx("Connect on LinkedIn", "تواصل معي على لينكدإن"),
  },
  loading: {
    name: tx("Heba Al-Sayda", "هبة سعايدة"),
    portfolio: tx("Brand Growth Portfolio", "ملف أعمال نمو العلامات التجارية"),
  },
  footer: tx("Heba Al-Sayda — All Rights Reserved", "هبة سعايدة — جميع الحقوق محفوظة"),
  notFound: {
    title: tx("Page not found", "الصفحة غير موجودة"),
    description: tx("The page you requested is unavailable.", "الصفحة التي طلبتها غير متاحة."),
    action: tx("Return to Home", "العودة إلى الرئيسية"),
  },
};

export const methodologyPillars = [
  {
    num: "01",
    title: tx("Deep Business Diagnostics", "تحليل أعماق البزنس"),
    description: tx(
      "Dive into the business structure, diagnose problems, assess SWOT factors, and use Excel and Claude to test hypotheses and answer critical questions with data.",
      "الغوص في هيكل المشروع، تحليل المشكلات، دراسة نقاط القوة والضعف (SWOT)، واستخدام Excel وClaude لطرح الفرضيات والإجابة عن الأسئلة الحرجة بناءً على البيانات.",
    ),
  },
  {
    num: "02",
    title: tx("Market, Trends & AI Intelligence", "أبحاث السوق والترندات والذكاء الاصطناعي"),
    description: tx(
      "Monitor market movements, analyze competitors precisely, and uncover hidden opportunities using AI-powered research tools.",
      "رصد اتجاهات السوق، تحليل المنافسين بدقة، واكتشاف الفرص الكامنة باستخدام أدوات الذكاء الاصطناعي.",
    ),
  },
  {
    num: "03",
    title: tx("Targeted & Creative Execution", "التنفيذ الإبداعي والاستهداف"),
    description: tx(
      "Translate analysis into action plans, precise targeting, and carefully managed campaigns built on numbers and organic results.",
      "ترجمة التحليلات إلى خطط عمل، واستهداف دقيق، وإدارة حملات مدروسة تُبنى على الأرقام والنتائج العضوية.",
    ),
  },
  {
    num: "04",
    title: tx("Measurement & Optimization", "القياس والتطوير المستمر"),
    description: tx(
      "Track campaign performance, measure impact through clear KPIs, and optimize continuously for stronger returns and sustainable growth.",
      "متابعة أداء الحملات، قياس الأثر بدقة عبر مؤشرات الأداء (KPIs)، والتطوير المستمر لضمان أعلى عائد ونمو مستدام.",
    ),
  },
];

export const experiences = [
  {
    num: "01",
    company: tx("Karmol Roastery & Local Retail Businesses", "محمص كرمول ومحلات تجارية محلية"),
    role: tx("Marketing Consultant", "مستشارة تسويق"),
    period: tx("4 Months · Completed", "4 أشهر · مكتمل"),
    tags: [tx("Positioning", "التموضع"), tx("Brand Identity", "الهوية البصرية"), tx("Craft-led Content", "محتوى الصنعة")],
    desc: tx(
      "Built positioning strategies, developed visual identity direction, and created craft-led marketing content. Delivered market and competitor studies and complete marketing plans for local shops, including Karmol’s relaunch strategy.",
      "بناء استراتيجيات التموضع، تطوير اتجاه الهوية البصرية، وإعداد محتوى تسويقي قائم على الصنعة، مع دراسات للسوق والمنافسين وخطط تسويقية متكاملة لمحلات محلية، بما فيها استراتيجية إعادة إطلاق كرمول.",
    ),
  },
  {
    num: "02",
    company: tx("Bank of Palestine", "بنك فلسطين"),
    role: tx("Promotional Team", "فريق الترويج"),
    period: tx("April 2025 · Completed", "نيسان 2025 · مكتمل"),
    tags: [tx("Field Campaigns", "حملات ميدانية"), tx("Customer Acquisition", "جذب العملاء"), tx("35 Accounts / Day", "35 حسابًا / يوم")],
    desc: tx(
      "Managed and organized field promotional activities, explained banking services, and delivered tailored marketing messages. Achieved a record of opening 35 new accounts in one working day.",
      "إدارة وتنظيم أنشطة ترويجية ميدانية، وشرح الخدمات المصرفية برسائل تسويقية مخصصة، وتحقيق رقم قياسي بفتح 35 حسابًا جديدًا في يوم عمل واحد.",
    ),
    certificate: true,
  },
  {
    num: "03",
    company: tx("Karunya University · Coimbatore, India · IAESTE", "جامعة كارونيا · كويمباتور، الهند · IAESTE"),
    role: tx("Marketing Researcher & Data Analyst", "باحثة تسويق ومحللة بيانات"),
    period: tx("August – September 2026 · Completed", "آب – أيلول 2026 · مكتمل"),
    tags: [tx("Market Research", "أبحاث السوق"), tx("Consumer Behaviour", "سلوك المستهلك"), tx("Excel", "إكسل")],
    desc: tx(
      "Completed two months of market and competitor research, segmentation, questionnaires, and customer interviews. Cleaned data in Excel, applied linear regression and pivot tables, and translated quantitative and qualitative findings into business recommendations. Joined an industrial visit to study operational workflows.",
      "أتممت شهرين من أبحاث السوق والمنافسين وتجزئة السوق وتصميم الاستبيانات وإجراء مقابلات العملاء. نظفت البيانات باستخدام Excel وطبقت الانحدار الخطي والجداول المحورية، وحولت النتائج الكمية والنوعية إلى توصيات للأعمال، مع زيارة صناعية لدراسة سير العمليات.",
    ),
  },
  {
    num: "04",
    company: tx("Academic Research · AI & Marketing", "البحث العلمي الأكاديمي · الذكاء الاصطناعي والتسويق"),
    role: tx("Researcher", "باحثة"),
    period: tx("Advanced Research Study", "دراسة بحثية متقدمة"),
    tags: [tx("AI Adoption", "تبني الذكاء الاصطناعي"), tx("SMEs", "الشركات الصغيرة والمتوسطة"), tx("Palestine", "فلسطين")],
    desc: tx(
      "Prepared an advanced research study on the impact of artificial intelligence on marketing strategies and the barriers to its adoption among small and medium-sized enterprises in Palestine.",
      "إعداد دراسة بحثية متقدمة حول تأثير الذكاء الاصطناعي على استراتيجيات التسويق وتحديد عوائق تبنيه بين الشركات الصغيرة والمتوسطة في فلسطين.",
    ),
  },
  {
    num: "05",
    company: tx("Roya Palestinian Organization", "مؤسسة رؤيا الفلسطينية"),
    role: tx("Facilitator & Life Skills Trainer", "ميسرة ومدربة مهارات حياتية"),
    period: tx("Completed", "مكتمل"),
    tags: [tx("Facilitation", "التيسير"), tx("Training Design", "تصميم التدريب"), tx("Communication", "التواصل")],
    desc: tx(
      "Trained teenagers in communication and time management through practical simulations. Coordinated a community psychological first aid initiative for children with a PhD expert, and organized a three-day recreational program led by the trained teams.",
      "دربت اليافعين على التواصل وإدارة الوقت عبر محاكاة تطبيقية. نسقت مبادرة مجتمعية للإسعاف النفسي الأولي للأطفال بالتعاون مع خبير حاصل على الدكتوراه، ونظمت برنامجًا ترفيهيًا لثلاثة أيام بمشاركة الفرق المدربة.",
    ),
  },
  {
    num: "06",
    company: tx("SheTech · Tahaluf Consulting & Galaxy Training Center", "SheTech · تحالف للاستشارات ومركز غالاكسي للتدريب"),
    role: tx("Digital Marketing Specialist Training", "تدريب أخصائية تسويق رقمي"),
    period: tx("February – July 2026 · Completed", "شباط – تموز 2026 · مكتمل"),
    tags: [tx("96 Hours", "96 ساعة"), tx("AI in Marketing", "الذكاء الاصطناعي في التسويق"), tx("U.S. Department of State", "الخارجية الأمريكية")],
    desc: tx(
      "Completed a 96-hour professional program supported by the U.S. Department of State, covering SEO, SEM, social media, content, AI-assisted analytics, e-commerce business models, and tech entrepreneurship.",
      "إتمام برنامج مهني لمدة 96 ساعة بدعم من وزارة الخارجية الأمريكية، شمل SEO وSEM ووسائل التواصل والمحتوى والتحليلات المدعومة بالذكاء الاصطناعي ونماذج أعمال التجارة الإلكترونية وريادة الأعمال التقنية.",
    ),
  },
  {
    num: "07",
    company: tx("Marketing Direction · Tulkarm", "الإدارة التسويقية · طولكرم"),
    role: tx("Marketing Director", "مديرة تسويق"),
    period: tx("March – April 2026 · Completed", "آذار – نيسان 2026 · مكتمل"),
    tags: [tx("Campaign Direction", "توجيه الحملات"), tx("Client Coordination", "تنسيق العملاء"), tx("Production", "الإنتاج")],
    desc: tx("Developed marketing plans and content scripts, coordinated schedules and client communication, directed photographers on shoots, and defined brand identity guidelines for consistent campaign production.", "طورت خطط التسويق وسكريبتات المحتوى، ونسقت المواعيد والتواصل مع العملاء، ووجهت المصورين خلال جلسات التصوير، وحددت إرشادات الهوية لضمان اتساق إنتاج الحملات."),
  },
];

export const featuredCampaigns = [
  {
    id: "bank-field-campaign",
    organization: tx("Bank of Palestine · Rashfh Cafe, Tulkarm", "بنك فلسطين · مقهى رشفة، طولكرم"),
    title: tx("Bank of Palestine Field Campaign", "حملة الترويج الميداني والاستحواذ – بنك فلسطين"),
    description: tx(
      "Coordinated an on-ground promotional and customer-acquisition campaign at Rashfh Cafe, engaging visitors through direct conversations and tailored banking-service messages.",
      "نسقت حملة ترويجية ميدانية لجذب العملاء في مقهى رشفة، وتفاعلت مع الزوار عبر حوارات مباشرة ورسائل مخصصة عن الخدمات المصرفية.",
    ),
    metric: {
      value: 50,
      label: tx("qualified leads collected in one day", "عميلًا محتملًا مؤهلًا تم جمعهم في يوم واحد"),
    },
  },
  {
    id: "psychological-first-aid",
    organization: tx("Roya Palestinian Organization · Community Initiative", "مؤسسة رؤيا الفلسطينية · مبادرة مجتمعية"),
    title: tx("Community & Psychological First Aid Initiative", "مبادرة \"الإسعاف النفسي الأولي\" والمجتمع المحلي"),
    description: tx(
      "Coordinated the initiative with Roya Palestinian Organization, trained a local team, and delivered an interactive program for children that strengthened participation and community engagement.",
      "نسقت المبادرة مع مؤسسة رؤيا الفلسطينية، ودربت فريقًا محليًا، ونفذت برنامجًا تفاعليًا للأطفال عزز المشاركة والتفاعل المجتمعي.",
    ),
  },
];

export type Deliverable = {
  label: LocalizedText;
  file: string;
  format: string;
};

export const caseStudies = [
  {
    id: "karmol",
    number: "01",
    title: tx("Karmol Roastery Relaunch Strategy", "استراتيجية إعادة إطلاق محمص كرمول"),
    subtitle: tx("From discount-led selling to authentic craft", "من البيع بالخصومات إلى إبراز الصنعة الحقيقية"),
    overview: tx(
      "A comprehensive relaunch strategy for a local roastery in Tulkarm, centered on authentic in-house roasting and blending instead of random discounts. The work included visual identity direction, behind-the-scenes Reels scripts, market positioning, and campaign planning.",
      "استراتيجية إعادة إطلاق شاملة لمحمص محلي في طولكرم، تركز على الصنعة الحقيقية المتمثلة بالتحميص والخلط داخل المحل بدلًا من الخصومات العشوائية. تضمنت بناء اتجاه الهوية البصرية، وسكريبتات ريلز الكواليس، والتموضع السوقي، وخطة الحملات.",
    ),
    tags: [tx("Market & Competitors", "السوق والمنافسون"), tx("Brand Positioning", "تموضع العلامة"), tx("Content & Campaigns", "المحتوى والحملات")],
    deliverables: [
      { label: tx("Arabic Marketing Plan", "خطة العمل التسويقية — عربي"), file: "/files/Karmol_Arabic_Marketing_Plan.pdf", format: "PDF" },
      { label: tx("Original English Plan", "الخطة الإنجليزية الأصلية"), file: "/files/Karmol_Original_Marketing_Plan_EN.docx", format: "DOCX" },
      { label: tx("Final Integrated Plan", "الخطة النهائية المتكاملة والموسعة"), file: "/files/Karmol_Final_Plan_EN.docx", format: "DOCX" },
    ] satisfies Deliverable[],
  },
  {
    id: "laundry",
    number: "02",
    title: tx("On-Demand Laundry App Strategy", "استراتيجية تطبيق خدمات الغسيل حسب الطلب"),
    subtitle: tx("A market-backed service launch roadmap", "خارطة إطلاق خدمة مبنية على دراسة السوق"),
    overview: tx(
      "Strategic research and planning for an on-demand laundry and ironing application, including PESTEL macro-environment analysis, SWOT, market segmentation, competitor understanding, and the extended 7 Ps marketing mix.",
      "دراسة وتخطيط استراتيجي لتطبيق غسيل وكي ملابس حسب الطلب، متضمنة تحليل البيئة الكلية PESTEL، وتحليل SWOT، وتجزئة السوق، وفهم المنافسين، وتطبيق المزيج التسويقي الموسع 7Ps.",
    ),
    tags: [tx("PESTEL & SWOT", "PESTEL وSWOT"), tx("Segmentation", "تجزئة السوق"), tx("7 Ps", "المزيج 7Ps")],
    deliverables: [
      { label: tx("Full App Marketing Plan", "تحميل الخطة التسويقية الكاملة للتطبيق"), file: "/files/Laundry_App_Marketing_Plan.pptx", format: "PPTX" },
      { label: tx("Marketing Research Methodology", "منهجية البحث التسويقي"), file: "/files/Marketing_Research_Methodology.pdf", format: "PDF" },
    ] satisfies Deliverable[],
  },
];

export const supportingProjects = [
  {
    id: "logo",
    title: tx("Logo Guidelines", "دليل استخدام الشعار"),
    desc: tx("Brand identity and logo usage specifications for consistent application.", "مواصفات الهوية واستخدام الشعار لضمان اتساق تطبيقه."),
    file: "/files/Logo_Guidelines.pdf",
  },
  {
    id: "volunteer",
    title: tx("Volunteer at Work Leadership", "القيادة والتطوع في العمل"),
    desc: tx("A presentation on leadership, initiative, and volunteer experience.", "عرض تقديمي حول القيادة والمبادرة والتجربة التطوعية."),
    link: "https://app.presentations.ai/view/Q5ysg6",
  },
];

export const skillGroups = [
  {
    title: tx("Business Diagnostics", "تشخيص الأعمال"),
    skills: [tx("Business Model Analysis", "تحليل نموذج العمل"), tx("SWOT & Critical Questions", "SWOT والأسئلة الحرجة"), tx("Growth Strategy", "استراتيجيات النمو")],
  },
  {
    title: tx("Market Intelligence", "ذكاء السوق"),
    skills: [tx("Market & Competitor Research", "أبحاث السوق والمنافسين"), tx("Trend Analysis", "تحليل الاتجاهات"), tx("Audience Segmentation", "تجزئة الجمهور")],
  },
  {
    title: tx("Data & AI", "البيانات والذكاء الاصطناعي"),
    skills: [tx("Excel: Regression & Pivot Tables", "Excel: الانحدار والجداول المحورية"), tx("Claude & AI Research", "Claude وأبحاث الذكاء الاصطناعي"), tx("AI-driven Insights", "رؤى مدعومة بالذكاء الاصطناعي")],
  },
  {
    title: tx("Campaigns & Measurement", "الحملات والقياس"),
    skills: [tx("Targeting & Campaign Planning", "الاستهداف وتخطيط الحملات"), tx("SEO / SEM", "SEO / SEM"), tx("KPIs & Optimization", "مؤشرات الأداء والتطوير")],
  },
  {
    title: tx("Training & Management", "التدريب وإدارة الأعمال"),
    skills: [tx("Facilitation", "التيسير"), tx("Training Design", "تصميم التدريب"), tx("Project & Business Management", "إدارة المشاريع والأعمال")],
  },
  {
    title: tx("Creative Production", "الإنتاج الإبداعي"),
    skills: [tx("Adobe Photoshop", "Adobe Photoshop"), tx("Reels & Visual Storytelling", "الريلز والسرد البصري"), tx("Illustrator & Canva", "Illustrator وCanva")],
  },
];

export const achievements = [
  {
    title: tx("National Debate Champion", "بطلة المناظرات على المستوى الوطني"),
    subtitle: tx("Palestinian Universities Debate Competition", "مسابقة مناظرات الجامعات الفلسطينية"),
    desc: tx(
      "National-level winner selected among the top six debaters to represent the university, recognized for persuasive communication, sharp analysis, and precise refutation.",
      "فوز على المستوى الوطني واختيار ضمن أفضل ستة مناظرين لتمثيل الجامعة، مع تقدير لمهارات الإقناع والتحليل العميق والدحض الدقيق.",
    ),
  },
];
