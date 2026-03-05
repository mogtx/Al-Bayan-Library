// ===================================
// مكتبة البيان - JavaScript احترافي
// ===================================

// Translations Object
const translations = {
  ar: {
    // Navigation
    home: "الرئيسية",
    books: "الكتب",
    stories: "القصص",
    about: "من نحن",
    contact: "تواصل معنا",
    toggleTheme: "تبديل الوضع",
    barcode: "الباركود",
    scanBarcode: "امسح الباركود",
    
    // Hero Section
    welcomeTo: "مرحباً بك في",
    libraryName: "مكتبة البيان",
    platformSubtitle: "منصة ثقافة عربية وطنية",
    heroDesc: "نقدم لك تجربة قراءة فريدة مع أفضل الكتب العربية والإسلامية في مختلف العلوم والآداب",
    exploreBooks: "استكشف الكتب",
    learnMore: "اعرف المزيد",
    
    // Stats
    book: "كتاب",
    books: "كتب",
    reader: "قارئ",
    readers: "قارئ",
    readersPlural: "قارئ",
    reads: "قراءة",
    readsPlural: "قراءة",
    rating: "تقييم",
    
    // Featured Section
    featured: "مميز",
    bookOfWeek: "كتاب الأسبوع",
    readMore: "قراءة المزيد",
    read: "قراءة",
    
    // Library Section
    library: "المكتبة",
    availableBooks: "الكتب المتوفرة",
    booksDesc: "مجموعة مختارة من أفضل الكتب العربية في مختلف التخصصات",
    searchPlaceholder: "ابحث عن كتاب...",
    allCategories: "جميع التصنيفات",
    sorting: "الترتيب",
    popular: "الأكثر قراءة",
    topRated: "الأعلى تقييماً",
    newest: "الأحدث",
    favorites: "المفضلة",
    all: "الكل",
    
    // Categories Section
    browse: "تصفح",
    categories: "تصنيفات الكتب",
    grammar: "نحو",
    grammarFull: "النحو",
    poetry: "شعر",
    poetryFull: "الشعر",
    rhetoric: "بلاغة",
    rhetoricFull: "البلاغة",
    hadith: "حديث",
    hadithFull: "الحديث",
    history: "تاريخ",
    historyFull: "التاريخ",
    literature: "أدب",
    literatureFull: "الأدب",
    tales: "قصص",
    talesFull: "القصص",
    
    // Grammar descriptions
    grammarDesc: "العلوم النحوية واللغوية",
    poetryDesc: "أشعار العرب الخالدة",
    rhetoricDesc: "فنون البيان والإعجاز",
    hadithDesc: "علوم السنة النبوية",
    historyDesc: "سير وأحداث",
    talesDesc: "قصص عربية وعالمية",
    literatureDesc: "فنون الأدب العربي",
    
    // Testimonials
    testimonials: "آراء",
    whatReadersSay: "ماذا يقول القراء",
    
    // About Section
    aboutTitle: "من نحن",
    aboutHeading: "مكتبة البيان",
    aboutDesc: "مكتبة البيان هي منصة رقمية عربية وطنية تُعنى بعلوم اللغة وآدابها وترسيخ الهوية الثقافية بأسلوب عصري. نحن نسعى لنشر المعرفة والثقافة العربية وإتاحة الكتب النافعة لجميع المتحدثين بالعربية.",
    aboutDesc2: "تأسست هذه المكتبة بإشراف مدرسة خالد بن الوليد الثانوية للبنين في لواء الموقر، بهدف تقديم محتوى عربي ثري ومفيد للطلاب والباحثين والمهتمين بالثقافة العربية.",
    diverseBooks: "مجموعة متنوعة من الكتب",
    easyDownload: "تحميل مباشر وسهل",
    multipleCategories: "تصنيفات متعددة",
    greatExperience: "تجربة قراءة مميزة",
    authenticContent: "محتوى عربي أصيل",
    continuousUpdate: "تحديث مستمر",
    ourVision: "رؤيتنا",
    visionText: "أن نكون المنصة الأولى للثقافة العربية على الإنترنت",
    ourMission: "رسالتنا",
    missionText: "نشر العلم والمعرفة والتراث العربي للعالم",
    ourGoal: "هدفنا",
    goalText: "تيسير الوصول للمعرفة العربية لجميع المتحدثين بالعربية",
    location: "الموقع",
    schoolLocation: "مدرسة خالد بن الوليد الثانوية للبنين / لواء الموقر",
    
    // Contact Section
    contactTitle: "تواصل",
    contactUs: "اتصل بنا",
    contactDesc: "نحن هنا للإجابة على استفساراتك واقتراحاتك",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    whatsapp: "الواتس أب",
    address: "الموقع",
    workingHours: "أوقات العمل",
    workingHoursText: "السبت - الخميس: 8ص - 4م",
    yourName: "الاسم",
    yourEmail: "البريد الإلكتروني",
    subject: "الموضوع",
    yourMessage: "رسالتك...",
    sendMessage: "إرسال الرسالة",
    
    // Footer
    footerBrand: "مكتبة البيان",
    footerDesc: "منصة ثقافية عربية وطنية تُعنى بنشر العلم والمعرفة والتراث العربي",
    quickLinks: "روابط سريعة",
    categoriesFooter: "التصنيفات",
    newsletter: "النشرة البريدية",
    newsletterDesc: "اشترك للحصول على آخر الكتب والمقالات",
    yourEmail: "بريدك الإلكتروني",
    copyright: "مشروع ثقافي وطني",
    supervisedBy: "بإشراف مدرسة خالد بن الوليد الثانوية للبنين / لواء الموقر",
    
    // Messages
    noResults: "لا توجد نتائج",
    tryDifferent: "جرب البحث بكلمات مختلفة",
    addedToFavorites: "تمت إضافة للمفضلة",
    removedFromFavorites: "تمت إزالة من المفضلة",
    thankYou: "شكراً لتواصلكم معنا!",
    subscribed: "شكراً لاشتراكك في النشرة البريدية!",
    fileNotAvailable: "الملف غير متوفر",
    increasedReads: "تمت زيادة قراءات",
    
    // Stories
    arabicStories: "القصص العربية",
    storiesSubtitle: "مجموعة مختارة من أروع القصص العربية والتراثية",
    adventureStories: "قصص مغامرات",
    heritageStories: "قصص تراثية",
    seaStories: "قصص بحرية",
    natureStories: "قصص طبيعة",
    historicalStories: "قصص تاريخية",
    readStory: "اقرأ القصة",
    
    // Book Modal
    by: "تأليف",
    pages: "صفحات",
    year: "السنة",
    addToFavorites: "إضافة للمفضلة",
    removeFromFavorites: "إزالة من المفضلة",
    
    // Page Headers
    booksPageTitle: "مكتبة الكتب",
    booksPageDesc: "استكشف مجموعة متنوعة من الكتب العربية في مختلف التخصصات والعلوم",
    aboutPageTitle: "من نحن",
    aboutPageDesc: "تعرف على قصة مكتبة البيان ورسالتها في نشر الثقافة العربية",
    storiesPageTitle: "القصص العربية",
    storiesPageDesc: "مجموعة مختارة من أروع القصص العربية والتراثية",
    contactPageTitle: "تواصل معنا",
    contactPageDesc: "نحن هنا للإجابة على استفساراتكم واقتراحاتكم. لا تترددوا في التواصل معنا",

    // Books Page Specific
    booksLibrary: "مكتبة الكتب",
    booksLibraryDesc: "استكشف مجموعة متنوعة من الكتب العربية في مختلف التخصصات والعلوم",
    searchForBook: "ابحث عن كتاب...",
    allCategoriesOption: "جميع التصنيفات",
    sortBy: "الترتيب",
    mostRead: "الأكثر قراءة",
    highestRated: "الأعلى تقييماً",
    newestOption: "الأحدث",
    favoritesOption: "المفضلة",
    allOption: "الكل",
    noResultsFound: "لا توجد نتائج",
    tryDifferentSearch: "جرب البحث بكلمات مختلفة",

    // Stories Page Specific
    arabicStoriesPage: "القصص العربية",
    arabicStoriesPageDesc: "مجموعة مختارة من أروع القصص العربية والتراثية",
    adventureStories: "قصص مغامرات",
    heritageStories: "قصص تراثية",
    seaStories: "قصص بحرية",
    natureStories: "قصص طبيعة",
    historicalStories: "قصص تاريخية",
    readTheStory: "اقرأ القصة",
    storyReads: "قراءة",

    // About Page Specific
    aboutUsPage: "من نحن",
    aboutUsPageDesc: "تعرف على قصة مكتبة البيان ورسالتها في نشر الثقافة العربية",
    diverseBooksCollection: "مجموعة متنوعة من الكتب",
    easyDirectDownload: "تحميل مباشر وسهل",
    multipleCategoriesOption: "تصنيفات متعددة",
    greatReadingExperience: "تجربة قراءة مميزة",
    authenticArabicContent: "محتوى عربي أصيل",
    continuousUpdate: "تحديث مستمر",
    ourVisionPage: "رؤيتنا",
    visionTextPage: "أن نكون المنصة الأولى للثقافة العربية على الإنترنت",
    ourMissionPage: "رسالتنا",
    missionTextPage: "نشر العلم والمعرفة والتراث العربي للعالم",
    ourGoalPage: "هدفنا",
    goalTextPage: "تيسير الوصول للمعرفة العربية لجميع المتحدثين بالعربية",

    // Contact Page Specific
    contactUsPage: "تواصل معنا",
    contactUsPageDesc: "نحن هنا للإجابة على استفساراتكم واقتراحاتكم. لا تترددوا في التواصل معنا",
    emailAddress: "البريد الإلكتروني",
    whatsappApp: "الواتس أب",
    locationAddress: "الموقع",
    workingHoursPage: "أوقات العمل",
    workingHoursPageText: "السبت - الخميس: 8ص - 4م",
    yourNameInput: "الاسم",
    yourEmailInput: "البريد الإلكتروني",
    subjectInput: "الموضوع",
    yourMessageInput: "رسالتك...",
    sendMessageBtn: "إرسال الرسالة",

    // Common
    copyright: "مشروع ثقافي وطني",
    supervisedBySchool: "بإشراف مدرسة خالد بن الوليد الثانوية للبنين / لواء الموقر",
  },
  en: {
    // Navigation
    home: "Home",
    books: "Books",
    stories: "Stories",
    about: "About",
    contact: "Contact",
    toggleTheme: "Toggle Theme",
    barcode: "Barcode",
    scanBarcode: "Scan Barcode",
    
    // Hero Section
    welcomeTo: "Welcome to",
    libraryName: "Al-Bayan Library",
    platformSubtitle: "National Arabic Cultural Platform",
    heroDesc: "We offer you a unique reading experience with the best Arabic and Islamic books in various sciences and literature",
    exploreBooks: "Explore Books",
    learnMore: "Learn More",
    
    // Stats
    book: "Book",
    books: "Books",
    reader: "Reader",
    readers: "Readers",
    readersPlural: "Readers",
    reads: "Read",
    readsPlural: "Reads",
    rating: "Rating",
    
    // Featured Section
    featured: "Featured",
    bookOfWeek: "Book of the Week",
    readMore: "Read More",
    read: "Read",
    
    // Library Section
    library: "Library",
    availableBooks: "Available Books",
    booksDesc: "A curated collection of the best Arabic books in various disciplines",
    searchPlaceholder: "Search for a book...",
    allCategories: "All Categories",
    sorting: "Sorting",
    popular: "Most Read",
    topRated: "Top Rated",
    newest: "Newest",
    favorites: "Favorites",
    all: "All",
    
    // Categories Section
    browse: "Browse",
    categories: "Book Categories",
    grammar: "Grammar",
    grammarFull: "Grammar",
    poetry: "Poetry",
    poetryFull: "Poetry",
    rhetoric: "Rhetoric",
    rhetoricFull: "Rhetoric",
    hadith: "Hadith",
    hadithFull: "Hadith",
    history: "History",
    historyFull: "History",
    literature: "Literature",
    literatureFull: "Literature",
    tales: "Stories",
    talesFull: "Stories",
    
    // Grammar descriptions
    grammarDesc: "Grammatical and linguistic sciences",
    poetryDesc: "Immortal Arabic poetry",
    rhetoricDesc: "Arts of eloquence and inimitability",
    hadithDesc: "Sciences of the Prophet's tradition",
    historyDesc: "Biographies and events",
    talesDesc: "Arabic and international stories",
    literatureDesc: "Arts of Arabic literature",
    
    // Testimonials
    testimonials: "Reviews",
    whatReadersSay: "What Readers Say",
    
    // About Section
    aboutTitle: "About Us",
    aboutHeading: "Al-Bayan Library",
    aboutDesc: "Al-Bayan Library is a national Arabic digital platform dedicated to Arabic language sciences and literature, and reinforcing cultural identity in a modern way. We strive to spread Arabic knowledge and culture and make beneficial books available to all Arabic speakers.",
    aboutDesc2: "This library was established under the supervision of Khalid ibn Al-Walid Secondary School for Boys in Al-Maqor district, aiming to provide rich and useful Arabic content for students, researchers, and those interested in Arabic culture.",
    diverseBooks: "Diverse collection of books",
    easyDownload: "Easy and direct download",
    multipleCategories: "Multiple categories",
    greatExperience: "Great reading experience",
    authenticContent: "Authentic Arabic content",
    continuousUpdate: "Continuous updates",
    ourVision: "Our Vision",
    visionText: "To be the first platform for Arabic culture on the internet",
    ourMission: "Our Mission",
    missionText: "Spread knowledge, culture and Arabic heritage to the world",
    ourGoal: "Our Goal",
    goalText: "Facilitating access to Arabic knowledge for all Arabic speakers",
    location: "Location",
    schoolLocation: "Khalid ibn Al-Walid Secondary School / Al-Maqor - Jordan",
    
    // Contact Section
    contactTitle: "Contact",
    contactUs: "Contact Us",
    contactDesc: "We are here to answer your inquiries and suggestions",
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
    address: "Address",
    workingHours: "Working Hours",
    workingHoursText: "Saturday - Thursday: 8AM - 4PM",
    yourName: "Name",
    yourEmail: "Email",
    subject: "Subject",
    yourMessage: "Your message...",
    sendMessage: "Send Message",
    
    // Footer
    footerBrand: "Al-Bayan Library",
    footerDesc: "A national Arabic cultural platform dedicated to spreading knowledge, culture and Arabic heritage",
    quickLinks: "Quick Links",
    categoriesFooter: "Categories",
    newsletter: "Newsletter",
    newsletterDesc: "Subscribe to get the latest books and articles",
    yourEmail: "Your email",
    copyright: "National Cultural Project",
    supervisedBy: "Supervised by Khalid ibn Al-Walid Secondary School / Al-Maqor",
    
    // Messages
    noResults: "No results found",
    tryDifferent: "Try different search terms",
    addedToFavorites: "Added to favorites",
    removedFromFavorites: "Removed from favorites",
    thankYou: "Thank you for contacting us!",
    subscribed: "Thanks for subscribing!",
    fileNotAvailable: "File not available",
    increasedReads: "Increased reads for",
    
    // Stories
    arabicStories: "Arabic Stories",
    storiesSubtitle: "A curated collection of the finest Arabic and heritage stories",
    adventureStories: "Adventure Stories",
    heritageStories: "Heritage Stories",
    seaStories: "Sea Stories",
    natureStories: "Nature Stories",
    historicalStories: "Historical Stories",
    readStory: "Read Story",
    
    // Book Modal
    by: "By",
    pages: "Pages",
    year: "Year",
    addToFavorites: "Add to Favorites",
    removeFromFavorites: "Remove from Favorites",
    
    // Page Headers
    booksPageTitle: "Books Library",
    booksPageDesc: "Explore a diverse collection of Arabic books in various disciplines and sciences",
    aboutPageTitle: "About Us",
    aboutPageDesc: "Learn about Al-Bayan Library's story and mission in spreading Arabic culture",
    storiesPageTitle: "Arabic Stories",
    storiesPageDesc: "A curated collection of the finest Arabic and heritage stories",
    contactPageTitle: "Contact Us",
    contactPageDesc: "We are here to answer your inquiries and suggestions. Feel free to contact us",

    // Books Page Specific
    booksLibrary: "Books Library",
    booksLibraryDesc: "Explore a diverse collection of Arabic books in various disciplines and sciences",
    searchForBook: "Search for a book...",
    allCategoriesOption: "All Categories",
    sortBy: "Sorting",
    mostRead: "Most Read",
    highestRated: "Highest Rated",
    newestOption: "Newest",
    favoritesOption: "Favorites",
    allOption: "All",
    noResultsFound: "No results found",
    tryDifferentSearch: "Try different search terms",

    // Stories Page Specific
    arabicStoriesPage: "Arabic Stories",
    arabicStoriesPageDesc: "A curated collection of the finest Arabic and heritage stories",
    adventureStories: "Adventure Stories",
    heritageStories: "Heritage Stories",
    seaStories: "Sea Stories",
    natureStories: "Nature Stories",
    historicalStories: "Historical Stories",
    readTheStory: "Read Story",
    storyReads: "Read",

    // About Page Specific
    aboutUsPage: "About Us",
    aboutUsPageDesc: "Learn about Al-Bayan Library's story and mission in spreading Arabic culture",
    diverseBooksCollection: "Diverse collection of books",
    easyDirectDownload: "Easy and direct download",
    multipleCategoriesOption: "Multiple categories",
    greatReadingExperience: "Great reading experience",
    authenticArabicContent: "Authentic Arabic content",
    continuousUpdate: "Continuous updates",
    ourVisionPage: "Our Vision",
    visionTextPage: "To be the first platform for Arabic culture on the internet",
    ourMissionPage: "Our Mission",
    missionTextPage: "Spread knowledge, culture and Arabic heritage to the world",
    ourGoalPage: "Our Goal",
    goalTextPage: "Facilitating access to Arabic knowledge for all Arabic speakers",

    // Contact Page Specific
    contactUsPage: "Contact Us",
    contactUsPageDesc: "We are here to answer your inquiries and suggestions. Feel free to contact us",
    emailAddress: "Email",
    whatsappApp: "WhatsApp",
    locationAddress: "Location",
    workingHoursPage: "Working Hours",
    workingHoursPageText: "Saturday - Thursday: 8AM - 4PM",
    yourNameInput: "Name",
    yourEmailInput: "Email",
    subjectInput: "Subject",
    yourMessageInput: "Your message...",
    sendMessageBtn: "Send Message",

    // Common
    copyright: "National Cultural Project",
    supervisedBySchool: "Supervised by Khalid ibn Al-Walid Secondary School / Al-Maqor",
  }
};

// Books Database
let books = [
  // النحو
  { id: 1, title: "ألفية ابن مالك", author: "ابن مالك", category: "نحو", reads: 1250, rating: 4.9, fav: false, desc: "ألفية ابن مالك في النحو العربي هي قصيدة طويلة تتناول القواعد النحوية.", pages: 250, year: 1200, cover: "navy",  pdf: "../kotob/book-alfyah.pdf" },
  { id: 2, title: "المغني في النحو", author: "ابن عقيل", category: "نحو", reads: 980, rating: 4.7, fav: false, desc: "كتاب شامل في النحو العربي.", pages: 480, year: 1220, cover: "blue",  pdf: "../kotob/book-mgni.pdf" },
  { id: 3, title: "الجرير والتنب", author: "المرزوقي", category: "نحو", reads: 650, rating: 4.5, fav: false, desc: "شرح نفيس على جرير والفرزدق.", pages: 320, year: 1100, cover: "green",  pdf: "../kotob/book-jarir.pdf" },
  { id: 4, title: "التسهيل", author: "ابن مالك", category: "نحو", reads: 820, rating: 4.6, fav: false, desc: "مختصر في النحو.", pages: 180, year: 1210, cover: "purple",  pdf: "../kotob/book-tashel.pdf" },
  { id: 5, title: "شرح كافية الحافظ", author: "ابن الحاجب", category: "نحو", reads: 540, rating: 4.4, fav: false, desc: "شرح كتاب كافية الحافظ.", pages: 420, year: 1300, cover: "orange",  pdf: "../kotob/book-kafyah.pdf" },
  
  // الشعر
  { id: 6, title: "ديوان المتنبي", author: "أبو الطيب المتنبي", category: "شعر", reads: 2100, rating: 4.95, fav: false, desc: "مجموعة من أشعار المتنبي الخالدة.", pages: 500, year: 960, cover: "purple",  pdf: "../kotob/book-motanabi.pdf" },
  { id: 7, title: "ديوان امرئ القيس", author: "امرئ القيس", category: "شعر", reads: 1850, rating: 4.8, fav: false, desc: "ديوان رائد الشعر الجاهلي.", pages: 380, year: 550, cover: "gold",  pdf: "../kotob/book-qais.pdf" },
  { id: 8, title: "ديوان الحسن بن هرمة", author: "الحسن بن هرمة", category: "شعر", reads: 1200, rating: 4.7, fav: false, desc: "من اشهر الدواوين.", pages: 290, year: 650, cover: "red",  pdf: "../kotob/book-qais.pdf" },
  { id: 9, title: "ديوان البحتري", author: "البحتري", category: "شعر", reads: 950, rating: 4.6, fav: false, desc: "مجموعة من اشعار البحتري.", pages: 420, year: 900, cover: "teal",  pdf: "../kotob/book-bhtare.pdf" },
  { id: 10, title: "ديوان ابن الرومي", author: "ابن الرومي", category: "شعر", reads: 780, rating: 4.5, fav: false, desc: "ديوان شاعر كبير.", pages: 350, year: 890, cover: "navy",  pdf: "../kotob/book-romy.pdf" },

  // البلاغة
  { id: 11, title: "دلائل الإعجاز", author: "عبد القاهر الجرجاني", category: "بلاغة", reads: 890, rating: 4.7, fav: false, desc: "كتاب في بيان دلائل الإعجاز.", pages: 320, year: 1075, cover: "green",  pdf: "../kotob/book-i3jaz.pdf" },
  { id: 12, title: "البرهان في علوم القرآن", author: "الزمخشري", category: "بلاغة", reads: 720, rating: 4.6, fav: false, desc: "مقال في علوم البلاغة.", pages: 280, year: 1140, cover: "purple",  pdf: "../kotob/book-brhan.pdf" },
  { id: 13, title: "عروس الأفراح", author: "السيوطي", category: "بلاغة", reads: 580, rating: 4.5, fav: false, desc: "كتاب في علوم البلاغة.", pages: 220, year: 1500, cover: "orange",  pdf: "../kotob/book-3ros.pdf" },
  { id: 15, title: "الموالي في المعاني", author: "السيوطي", category: "بلاغة", reads: 390, rating: 4.3, fav: false, desc: "شرح نفيس.", pages: 250, year: 1450, cover: "teal",  pdf: "../kotob/book-m3ani.pdf" },

  // الحديث
  { id: 21, title: "صحيح البخاري", author: "الإمام البخاري", category: "حديث", reads: 2500, rating: 5.0, fav: false, desc: "أصح كتب السنة النبوية.", pages: 2500, year: 870, cover: "navy",  pdf: "../kotob/book-qais.pdf" },
  { id: 22, title: "صحيح مسلم", author: "الإمام مسلم", category: "حديث", reads: 2200, rating: 4.95, fav: false, desc: "ثاني اصح كتب السنة.", pages: 2200, year: 875, cover: "green",  pdf: "../kotob/book-qais.pdf" },
  { id: 23, title: "سنن الترمذي", author: "الترمذي", category: "حديث", reads: 1650, rating: 4.8, fav: false, desc: "من كتب السنة المعتبرة.", pages: 1800, year: 892, cover: "purple",  pdf: "../kotob/book-qais.pdf" },
  { id: 24, title: "سنن أبي داود", author: "أبو داود", category: "حديث", reads: 1400, rating: 4.7, fav: false, desc: "من السنن المشهورة.", pages: 1600, year: 889, cover: "red",  pdf: "../kotob/book-qais.pdf" },
  { id: 25, title: "سنن النسائي", author: "النسائي", category: "حديث", reads: 1150, rating: 4.6, fav: false, desc: "من كتب السنة.", pages: 1500, year: 915, cover: "teal",  pdf: "../kotob/book-qais.pdf" },

  // التاريخ
  { id: 26, title: "مختصر تاريخ العرب", author: "حسن إبراهيم حسن", category: "تاريخ", reads: 1100, rating: 4.5, fav: false, desc: "ملخص شامل لتاريخ العرب.", pages: 420, year: 1960, cover: "red",  pdf: "../kotob/book-arab.pdf" },
  { id: 29, title: "تاريخ ابن خلدون", author: "ابن خلدون", category: "تاريخ", reads: 1600, rating: 4.95, fav: false, desc: "مقدمة في علم العمران.", pages: 1200, year: 1375, cover: "green",  pdf: "../kotob/book-ebn.pdf" },

  // الأدب
  { id: 31, title: "الحديث في الفن", author: "أحمد حسن الزيات", category: "أدب", reads: 750, rating: 4.6, fav: false, desc: "دراسة شاملة لفن الحديث.", pages: 180, year: 1945, cover: "orange",  pdf: "../kotob/book-hdath.pdf" },
  { id: 34, title: "المقامات", author: "بديع الزمان الهنائي", category: "أدب", reads: 780, rating: 4.7, fav: false, desc: "مجموعة من المقامات.", pages: 340, year: 1087, cover: "teal",  pdf: "../kotob/book-mqamat.pdf" },
  { id: 35, title: "الأغاني", author: "الأصفهاني", category: "أدب", reads: 920, rating: 4.8, fav: false, desc: "من اكبر كتب الأدب.", pages: 3000, year: 980, cover: "red",  pdf: "../kotob/book-agani.pdf" },

];

// State
let currentTab = "all";
let currentLang = "ar";
let searchQuery = "";
let categoryFilter = "all";
let sortFilter = "default";

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initApp();
  setupScrollEffects();
});

function initApp() {
  loadPreferences();
  displayFeaturedBook();
  displayBooks();
  updateStats();
  setupEventListeners();
  animateStats();
  setupScrollEffects();
}

// ===================================
// تأثير الحركة مع المؤشر - Mouse Parallax Effect
// ===================================
function initParallax() {
  const heroSection = document.querySelector('.hero-section');
  const heroVisual = document.querySelector('.hero-visual');
  const floatingBooks = document.querySelectorAll('.floating-book');
  const heroCircle = document.querySelector('.hero-circle');
  
  // التحقق من وجود العناصر
  if (!heroSection) return;
  
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  
  // دالة لتحديث الموقع
  function updatePosition() {
    // حساب الفرق بين الموقع الحالي والموقع المستهدف
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
    
    // تطبيق التحويل على قسم الهيدرو
    const moveX = (mouseX - window.innerWidth / 2) * 0.015;
    const moveY = (mouseY - window.innerHeight / 2) * 0.015;
    
    if (heroSection) {
      heroSection.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
    
    // تحريك العناصر العائمة بسرعات مختلفة
    if (floatingBooks.length > 0) {
      floatingBooks.forEach((book, index) => {
        const speed = (index + 1) * 0.008;
        const bookMoveX = (mouseX - window.innerWidth / 2) * speed;
        const bookMoveY = (mouseY - window.innerHeight / 2) * speed;
        book.style.transform = `translate(${bookMoveX}px, ${bookMoveY}px)`;
      });
    }
    
    // تحريك الدائرة الخلفية بسرعة مختلفة
    if (heroCircle) {
      const circleMoveX = (mouseX - window.innerWidth / 2) * 0.02;
      const circleMoveY = (mouseY - window.innerHeight / 2) * 0.02;
      heroCircle.style.transform = `translate(${circleMoveX}px, ${circleMoveY}px)`;
    }
    
    requestAnimationFrame(updatePosition);
  }
  
  // تتبع حركة المؤشر
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // بدء التحديث
  updatePosition();
  
  // تأثير إضافي: تحريك البطاقات والعناصر عند تمرير المؤشر
  const cards = document.querySelectorAll('.book-card, .category-card, .testimonial-card, .about-card, .contact-item');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
}

// Event Listeners
function setupEventListeners() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(filterBooks, 300));
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const bookModal = document.getElementById('bookModal');
  if (bookModal) {
    bookModal.addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });
}

// Scroll Effects
function setupScrollEffects() {
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      backToTop.classList.toggle('visible', window.scrollY > 300);
    }
  });
}

// Display Functions
function displayFeaturedBook() {
  const container = document.getElementById('featuredBook');
  if (!container) return;

  const topBook = books.reduce((a, b) => b.reads > a.reads ? b : a);
  
  container.innerHTML = `
    <div class="featured-book-cover" style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);">
      ${getBookEmoji(topBook.category)}
    </div>
    <div class="featured-book-info">
      <h3>${topBook.title}</h3>
      <p class="featured-book-author">تأليف: ${topBook.author}</p>
      <p class="featured-book-desc">${topBook.desc}</p>
      <div class="featured-book-meta">
        <div class="meta-item"><i class="fas fa-star"></i> ${topBook.rating}</div>
        <div class="meta-item"><i class="fas fa-eye"></i> ${topBook.reads.toLocaleString()}</div>
        <div class="meta-item"><i class="fas fa-book-open"></i> ${topBook.pages}</div>
      </div>
      <button class="btn-primary" onclick="openBookModal(${topBook.id})">
        <i class="fas fa-book-reader"></i> قراءة المزيد
      </button>
    </div>
  `;
}

function displayBooks() {
  const container = document.getElementById('booksGrid');
  if (!container) return;

  let filteredBooks = [...books];

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filteredBooks = filteredBooks.filter(b => 
      b.title.toLowerCase().includes(q) || 
      b.author.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q)
    );
  }

  if (categoryFilter !== "all") {
    filteredBooks = filteredBooks.filter(b => b.category === categoryFilter);
  }

  if (currentTab === "popular") filteredBooks.sort((a, b) => b.reads - a.reads);
  else if (currentTab === "top") filteredBooks.sort((a, b) => b.rating - a.rating);
  else if (currentTab === "favorites") filteredBooks = filteredBooks.filter(b => b.fav);

  if (sortFilter === "popular") filteredBooks.sort((a, b) => b.reads - a.reads);
  else if (sortFilter === "rating") filteredBooks.sort((a, b) => b.rating - a.rating);
  else if (sortFilter === "new") filteredBooks.sort((a, b) => b.year - a.year);

  if (filteredBooks.length === 0) {
    container.innerHTML = `<div class="no-results"><i class="fas fa-search"></i><h3>لا توجد نتائج</h3><p>جرب البحث بكلمات مختلفة</p></div>`;
    return;
  }

  container.innerHTML = filteredBooks.map(book => `
    <div class="book-card" data-aos="fade-up">
      <button class="book-card-favorite ${book.fav ? 'active' : ''}" onclick="toggleFav(${book.id})">
        <i class="fas fa-heart"></i>
      </button>
      <div class="book-cover ${book.cover}">
        ${getBookEmoji(book.category)}
        ${book.rating >= 4.8 ? '<span class="book-badge">مميز</span>' : ''}
      </div>
      <div class="book-info">
        <span class="book-category">${book.category}</span>
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">${book.author}</p>
        <div class="book-rating">
          <span class="stars">${generateStars(book.rating)}</span>
          <span class="rating-value">${book.rating}</span>
        </div>
        <div class="book-stats">
          <span class="book-reads"><i class="fas fa-eye"></i> ${book.reads.toLocaleString()}</span>
          <div class="book-actions">
            <button class="btn-view" onclick="openBookModal(${book.id})"><i class="fas fa-eye"></i></button>
            <button class="btn-favorite ${book.fav ? 'active' : ''}" onclick="toggleFav(${book.id})"><i class="fas fa-heart"></i></button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function updateStats() {
  const booksCount = document.getElementById('booksCount');
  const readCount = document.getElementById('readCount');
  const avgRating = document.getElementById('avgRating');

  if (booksCount) booksCount.innerText = books.length;
  if (readCount) readCount.innerText = books.reduce((a, b) => a + b.reads, 0).toLocaleString();
  if (avgRating) avgRating.innerText = (books.reduce((a, b) => a + b.rating, 0) / books.length).toFixed(1);
}

function animateStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = parseFloat(target.getAttribute('data-target'));
        const isDecimal = target.getAttribute('data-decimal') === 'true';
        animateValue(target, 0, finalValue, 2000, isDecimal);
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(stat => observer.observe(stat));
}

function animateValue(element, start, end, duration, isDecimal) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = start + (progress * (end - start));
    element.innerText = isDecimal ? value.toFixed(1) : Math.floor(value).toLocaleString();
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}

// Filter Functions
function filterBooks() {
  const searchInput = document.getElementById('searchInput');
  const categoryFilterSelect = document.getElementById('categoryFilter');
  const sortFilterSelect = document.getElementById('sortFilter');
  
  if (searchInput) searchQuery = searchInput.value;
  if (categoryFilterSelect) categoryFilter = categoryFilterSelect.value;
  if (sortFilterSelect) sortFilter = sortFilterSelect.value;
  
  displayBooks();
}

function filterByCategory(category) {
  const categoryFilterSelect = document.getElementById('categoryFilter');
  const booksSection = document.getElementById('books');
  
  if (categoryFilterSelect) {
    categoryFilter = category;
    categoryFilterSelect.value = category;
  }
  if (booksSection) booksSection.scrollIntoView({ behavior: 'smooth' });
  displayBooks();
}

function setTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
  });
  displayBooks();
}

// Book Actions
function addRead(id) {
  const book = books.find(b => b.id === id);
  if (book) {
    book.reads++;
    updateStats();
    displayBooks();
    showToast('تمت زيادة قراءات ' + book.title, 'success');
  }
}
function readBook(id) {
  const book = books.find(b => b.id === id);
  if (book && book.pdf) {
    addRead(id);
    window.open(book.pdf, "_blank");
  } else {
    showToast("الملف غير متوفر", "error");
  }
}

function toggleFav(id) {
  const book = books.find(b => b.id === id);
  if (book) {
    book.fav = !book.fav;
    displayBooks();
    displayFeaturedBook();
    showToast(book.fav ? 'تمت إضافة للمفضلة' : 'تمت إزالة من المفضلة', 'success');
  }
}

// Modal Functions
function openBookModal(id) {
  const book = books.find(b => b.id === id);
  if (!book) return;

  const modal = document.getElementById('bookModal');
  const modalContent = document.getElementById('modalContent');

  modalContent.innerHTML = `
    <div class="modal-book">
      <div class="modal-book-cover ${book.cover}">
        ${getBookEmoji(book.category)}
      </div>
      <div class="modal-book-info">
        <h2>${book.title}</h2>
        <p class="modal-book-author">تأليف: ${book.author}</p>
        <p class="modal-book-desc">${book.desc}</p>
        <div class="modal-book-details">
          <div class="modal-detail"><i class="fas fa-folder"></i> ${book.category}</div>
          <div class="modal-detail"><i class="fas fa-star"></i> ${book.rating}</div>
          <div class="modal-detail"><i class="fas fa-eye"></i> ${book.reads.toLocaleString()}</div>
          <div class="modal-detail"><i class="fas fa-book"></i> ${book.pages}</div>
          <div class="modal-detail"><i class="fas fa-calendar"></i> ${book.year}هـ</div>
        </div>
        <div class="modal-actions">
          <button class="btn-primary" onclick="readBook(${book.id})">
  <i class="fas fa-book-reader"></i> قراءة
</button>
          <button class="btn-secondary" onclick="toggleFav(${book.id})">
            <i class="fas fa-heart"></i> ${book.fav ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('bookModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Theme & Language
function toggleTheme() {
  document.body.classList.toggle('light');
  const themeBtn = document.querySelector('.theme-btn i');
  if (themeBtn) {
    themeBtn.classList.toggle('fa-moon');
    themeBtn.classList.toggle('fa-sun');
  }
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
}

function toggleLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = currentLang;
  
  const langBtn = document.querySelector('.lang-btn');
  if (langBtn) langBtn.textContent = currentLang === "ar" ? "EN" : "AR";
  
  localStorage.setItem('language', currentLang);
  
  // Translate all page elements
  translatePage();
  
  showToast(currentLang === "ar" ? "العربية" : "English", 'success');
}

// Translate all elements with data-i18n attribute
function translatePage() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  
  // Translate placeholders
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.placeholder = translations[currentLang][key];
    }
  });
  
  // Translate titles/tooltips
  const titles = document.querySelectorAll('[data-i18n-title]');
  titles.forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.title = translations[currentLang][key];
    }
  });
}

function loadPreferences() {
  const savedLang = localStorage.getItem('language');
  if (savedLang) {
    currentLang = savedLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
    const langBtn = document.querySelector('.lang-btn');
    if (langBtn) langBtn.textContent = currentLang === "ar" ? "EN" : "AR";
    // Translate page on load if language is English
    translatePage();
  }
  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light');
    const themeBtn = document.querySelector('.theme-btn i');
    if (themeBtn) {
      themeBtn.classList.remove('fa-moon');
      themeBtn.classList.add('fa-sun');
    }
  }
}

// Barcode
function showBarcode() {
  const barcodeData = "ALBAYAN-LIBRARY-2026";
  const modal = document.createElement('div');
  modal.className = 'modal-overlay active';
  modal.id = 'barcodeModal';
  modal.innerHTML = `
    <div class="modal-container" style="max-width: 400px;">
      <button class="modal-close" onclick="closeBarcodeModal()"><i class="fas fa-times"></i></button>
      <div class="modal-body" style="text-align: center;">
        <h2 style="margin-bottom: 20px;">الباركود</h2>
        <svg id="barcode"></svg>
        <p style="margin-top: 20px; color: var(--text-secondary);">امسح الباركود</p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  if (typeof JsBarcode !== 'undefined') {
    JsBarcode("#barcode", barcodeData, { format: "CODE128", width: 2, height: 80, displayValue: true, fontSize: 14 });
  }
}

function closeBarcodeModal() {
  const modal = document.getElementById('barcodeModal');
  if (modal) { modal.remove(); document.body.style.overflow = ''; }
}

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) navLinks.classList.toggle('active');
}

// Forms
function submitContact(e) {
  e.preventDefault();
  showToast('شكراً لتواصلكم معنا!', 'success');
  e.target.reset();
}

function subscribeNewsletter(e) {
  e.preventDefault();
  showToast('شكراً لاشتراكك في النشرة البريدية!', 'success');
  e.target.reset();
}

// Toast
function showToast(message, type) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast ' + (type || 'success');
  toast.innerHTML = '<i class="fas fa-check-circle"></i><span>' + message + '</span>';
  container.appendChild(toast);
  setTimeout(() => { toast.remove(); }, 3000);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Utility Functions
function generateStars(rating) {
  return '★'.repeat(Math.floor(rating));
}

function getBookEmoji(category) {
  const emojis = { 'نحو': '✏️', 'شعر': '📝', 'بلاغة': '✨', 'أدب': '📖', 'تاريخ': '🏛️', 'حديث': '🕌', 'قصص': '📜' };
  return emojis[category] || '📚';
}

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Export
window.displayBooks = displayBooks;
window.filterBooks = filterBooks;
window.filterByCategory = filterByCategory;
window.setTab = setTab;
window.addRead = addRead;
window.readBook = readBook;
window.toggleFav = toggleFav;
window.openBookModal = openBookModal;
window.closeModal = closeModal;
window.toggleTheme = toggleTheme;
window.toggleLanguage = toggleLanguage;
window.toggleMenu = toggleMenu;
window.submitContact = submitContact;
window.subscribeNewsletter = subscribeNewsletter;
window.scrollToTop = scrollToTop;
window.showBarcode = showBarcode;
window.closeBarcodeModal = closeBarcodeModal;
window.loadPreferences = loadPreferences;
window.translatePage = translatePage;


