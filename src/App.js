import React, { useState, useEffect, useMemo } from 'react';

// --- أيقونات SVG (للحفاظ على ملف واحد) ---
const Brain = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 5C9.24 5 7 7.24 7 10v0a5 5 0 0 0 5 5 5 5 0 0 0 5-5v0c0-2.76-2.24-5-5-5Z" />
    <path d="M10 15a5 5 0 0 0-5 5H3" />
    <path d="M14 15a5 5 0 0 1 5 5h2" />
    <path d="M17.5 10.5c1.17-2.5 1-5.5-1-5.5-2 0-2.17 3-1 5.5" />
    <path d="M6.5 10.5c-1.17-2.5-1-5.5 1-5.5 2 0 2.17 3 1 5.5" />
    <path d="M12 15c-1.67 0-3.17.83-4 2.17" />
    <path d="M12 15c1.67 0 3.17.83 4 2.17" />
  </svg>
);

const HelpCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </svg>
);

const Layers = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const UploadCloud = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M12 12v9" />
    <path d="m16 16-4-4-4 4" />
  </svg>
);

const Settings = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const Sun = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const Moon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const Loader = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="animate-spin"
    {...props}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

const Trash2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 6h18" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" x2="10" y1="11" y2="17" />
    <line x1="14" x2="14" y1="11" y2="17" />
  </svg>
);

const Check = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// [جديد] أيقونة للمصطلحات الأساسية
const Key = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m21 2-9.6 9.6" />
    <path d="M15.5 7.8 12 11.3 10.7 10" />
    <path d="m16.8 6.5 1.4 1.4" />
    <path d="M18 11.2V16a6 6 0 1 1-12 0 6 6 0 0 1 9.3-5.4" />
  </svg>
);


// --- مكونات واجهة المستخدم (مستوحاة من shadcn/ui) ---

const Button = ({ children, variant = 'default', className = '', ...props }) => {
  const baseStyle = 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2';
  
  const variants = {
    default: 'bg-slate-900 text-white hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90',
    destructive: 'bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90',
    outline: 'border border-slate-200 bg-transparent hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-50',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80',
    ghost: 'hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50',
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = '', ...props }) => (
  <div
    className={`rounded-xl border bg-card text-card-foreground shadow-sm bg-white/70 dark:bg-slate-900/70 dark:border-slate-800 backdrop-blur-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`text-sm text-slate-600 dark:text-slate-400 ${className}`} {...props}>
    {children}
  </p>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const Input = ({ className = '', ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-800 ${className}`}
    {...props}
  />
);

// --- بنية الاستجابة من Gemini [تم التحديث] ---
const geminiResponseSchema = {
  type: 'OBJECT',
  properties: {
    summary: {
      type: 'ARRAY',
      description: 'ملخص منظم كنقاط رئيسية، كل نقطة لها موضوع ومحتوى.',
      items: {
        type: 'OBJECT',
        properties: {
          topic: { type: 'STRING', description: 'الموضوع أو العنوان الرئيسي للنقطة.' },
          content: { type: 'STRING', description: 'الشرح التفصيلي للنقطة.' },
        },
      },
    },
    questions: {
      type: 'ARRAY',
      description: 'مجموعة من أسئلة المراجعة.',
      items: {
        type: 'OBJECT',
        properties: {
          question: { type: 'STRING', description: 'نص السؤال.' },
          type: {
            type: 'STRING',
            enum: ['mcq', 'comprehension'],
            description: 'نوع السؤال: اختيار من متعدد أو سؤال فهم.',
          },
          options: {
            type: 'ARRAY',
            description: 'قائمة بخيارات الإجابة (فارغة لأسئلة الفهم).',
            items: { type: 'STRING' },
          },
          answer: { type: 'STRING', description: 'الإجابة الصحيحة.' },
        },
      },
    },
    flashcards: {
      type: 'ARRAY',
      description: 'مجموعة من البطاقات التعليمية (فلاش كاردز).',
      items: {
        type: 'OBJECT',
        properties: {
          term: { type: 'STRING', description: 'المصطلح أو المفهوم الأساسي (الوجه الأمامي للبطاقة).' },
          definition: { type: 'STRING', description: 'الشرح أو التعريف (الوجه الخلفي للبطاقة).' },
        },
      },
    },
    // [جديد] إضافة المصطلحات الأساسية
    keyTerms: {
      type: 'ARRAY',
      description: 'قائمة بالمصطلحات الأساسية (Glossary) وتعريفاتها.',
      items: {
        type: 'OBJECT',
        properties: {
          term: { type: 'STRING', description: 'المصطلح الأساسي.' },
          definition: { type: 'STRING', description: 'تعريف المصطلح باختصار.' },
        },
      },
    },
  },
  // [تعديل] إضافة keyTerms كمتطلب
  required: ['summary', 'questions', 'flashcards', 'keyTerms'],
};


// --- المكون الرئيسي للتطبيق ---
export default function App() {
  // --- الحالة (State) ---
  const [apiKey, setApiKey] = useState('');
  const [language, setLanguage] = useState('ar'); // 'ar' or 'en'
  const [theme, setTheme] = useState('system'); // 'light', 'dark', 'system'
  const [activeTab, setActiveTab] = useState('study'); // 'study' or 'settings'
  
  const [inputText, setInputText] = useState('');
  const [generatedContent, setGeneratedContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // [جديد] حالة لقراءة الملف
  const [isReadingFile, setIsReadingFile] = useState(false);

  // الحالة لواجهة المستخدم
  const [activeResultTab, setActiveResultTab] = useState('summary'); // 'summary', 'questions', 'flashcards', 'keyTerms'
  const [tempApiKey, setTempApiKey] = useState('');
  const [showApiSaveConfirm, setShowApiSaveConfirm] = useState(false);

  // [جديد] حالة لخيارات التوليد
  const [numQuestions, setNumQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState('medium'); // 'easy', 'medium', 'hard'
  const [questionTypes, setQuestionTypes] = useState({
    mcq: true,
    comprehension: true,
  });

  // [جديد] دالة مساعدة لانتظار تحميل المكتبات
  const waitForLibraries = () => {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      const maxAttempts = 20; // 10 ثواني كحد أقصى
      const interval = 500; // نصف ثانية بين كل محاولة

      const check = () => {
        // التحقق من وجود المكتبات على الـ window
        if (window.pdfjsLib && window.mammoth) {
          // [هام] تحديد مسار الـ worker الخاص بـ PDF.js بمجرد التأكد من تحميل المكتبة
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js`;
          resolve();
        } else {
          attempts++;
          if (attempts >= maxAttempts) {
            reject(new Error("Failed to load external libraries (PDF.js or Mammoth.js). Please check your internet connection and refresh."));
          } else {
            setTimeout(check, interval);
          }
        }
      };
      check();
    });
  };


  // --- التأثيرات (Effects) ---

  // تحميل الإعدادات والبيانات من LocalStorage عند بدء التشغيل
  useEffect(() => {
    const savedApiKey = localStorage.getItem('studygenius_apiKey');
    const savedLanguage = localStorage.getItem('studygenius_language');
    const savedTheme = localStorage.getItem('studygenius_theme');
    const savedContent = localStorage.getItem('studygenius_content');

    if (savedApiKey) {
      setApiKey(savedApiKey);
      setTempApiKey(savedApiKey); // مزامنة الحقل المؤقت
    }
    if (savedLanguage) setLanguage(savedLanguage);
    if (savedTheme) setTheme(savedTheme);
    
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        // [تعديل] التحقق من سلامة البنية (بما في ذلك keyTerms)
        if (parsedContent && parsedContent.summary && parsedContent.questions && parsedContent.flashcards && parsedContent.keyTerms) {
          setGeneratedContent(parsedContent);
        } else {
          // إذا كانت البيانات تالفة أو غير مكتملة، قم بحذفها
          localStorage.removeItem('studygenius_content');
        }
      } catch (e) {
        // إذا فشل التحليل، قم بحذف البيانات التالفة
        console.error("Failed to parse saved content:", e);
        localStorage.removeItem('studygenius_content');
      }
    }
  }, []);

  // تطبيق المظهر (داكن/فاتح)
  useEffect(() => {
    const root = window.document.documentElement;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    root.classList.remove('light', 'dark');
    root.classList.add(currentTheme);
  }, [theme]);

  // --- قاموس الترجمة (i18n) [تم التحديث] ---
  const translations = useMemo(() => ({
    ar: {
      title: 'StudyGenius',
      studyTab: '🧠 المذاكرة',
      settingsTab: '⚙️ الإعدادات',
      // [تعديل] تحديث النصوص
      pasteLabel: 'ألصق نص محاضرتك هنا...',
      pastePlaceholder: 'لأفضل النتائج، ألصق النص المنسخ من ملفك هنا...',
      generateButton: '🚀 توليد دليل المذاكرة',
      generatingButton: 'جاري التوليد...',
      clearButton: 'مسح الكل',
      summaryTab: '🧠 ملخص الدرس',
      flashcardsTab: '💡 فلاش كاردز',
      settingsTitle: 'الإعدادات',
      apiKeyLabel: 'مفتاح Gemini API',
      apiKeyPlaceholder: 'أدخل مفتاح Google AI Studio API الخاص بك',
      saveButton: 'حفظ',
      languageLabel: 'اللغة',
      langAr: 'العربية',
      langEn: 'English',
      themeLabel: 'المظهر',
      themeLight: 'فاتح',
      themeDark: 'داكن',
      themeSystem: 'النظام',
      errorTitle: 'حدث خطأ',
      errorApiKey: 'يرجى إدخال مفتاح Gemini API صالح في الإعدادات.',
      errorGeneration: 'فشل في توليد المحتوى. حاول مرة أخرى.',
      // [تعديل] تحديث نص الخطأ
      errorFileRead: 'فشل في قراءة الملف. قد يكون الملف تالفاً، أو محمياً، أو فشلت المكتبات الخارجية (PDF/DOCX) في التحميل. يرجى التحقق من اتصالك بالإنترنت وتحديث الصفحة.',
      apiKeySaved: 'تم حفظ المفتاح!',
      welcomeTitle: 'مرحباً بك في StudyGenius!',
      welcomeDesc: 'ارفع ملف (PDF, DOCX, TXT) أو ألصق محتوى محاضرتك واضغط "توليد" لإنشاء ملخصات، أسئلة، وبطاقات مراجعة ذكية.',
      term: 'المصطلح',
      definition: 'التعريف',
      // [تعديل] تم حذف ترجمات الفلاش كاردز المتحركة
      
      quizTab: '📝 كويز تفاعلي',
      // [تعديل] تحديث نصوص الرفع
      uploadOrPaste: 'ارفع ملف (PDF, DOCX, TXT) أو ألصق النص',
      uploadHint: 'يمكنك سحب وإفلات الملفات.',
      dropFile: 'أفلت الملف هنا...',
      readingFile: 'جاري قراءة الملف...',
      or: 'أو',
      clickToUpload: 'اضغط لرفع ملف',
      next: 'التالي',
      back: 'السابق',
      finishQuiz: 'إنهاء الكويز',
      yourScore: 'نتيجتك:',
      retakeQuiz: 'إعادة الكويز',
      correctAnswer: 'الإجابة الصحيحة:',
      yourAnswer: 'إجابتك:',
      page: 'سؤال',
      of: 'من',

      // [جديد] ترجمات للخيارات الجديدة
      generationOptions: 'خيارات التوليد',
      numQuestions: 'عدد الأسئلة:',
      difficulty: 'مستوى الصعوبة',
      difficultyEasy: 'سهل',
      difficultyMedium: 'متوسط',
      difficultyHard: 'صعب',
      questionTypes: 'أنواع الأسئلة',
      questionTypeMCQ: 'اختيار من متعدد',
      questionTypeComp: 'أسئلة فهم',
      keyTermsTab: '🔑 مصطلحات',
    },
    en: {
      title: 'StudyGenius',
      studyTab: '🧠 Study',
      settingsTab: '⚙️ Settings',
      // [تعديل] تحديث النصوص
      pasteLabel: 'Paste your lecture text here...',
      pastePlaceholder: 'For best results, paste text copied from your file...',
      generateButton: '🚀 Generate Study Guide',
      generatingButton: 'Generating...',
      clearButton: 'Clear All',
      summaryTab: '🧠 Summary',
      flashcardsTab: '💡 Flashcards',
      settingsTitle: 'Settings',
      apiKeyLabel: 'Gemini API Key',
      apiKeyPlaceholder: 'Enter your Google AI Studio API key',
      saveButton: 'Save',
      languageLabel: 'Language',
      langAr: 'العربية',
      langEn: 'English',
      themeLabel: 'Theme',
      themeLight: 'Light',
      themeDark: 'Dark',
      themeSystem: 'System',
      errorTitle: 'An error occurred',
      errorApiKey: 'Please enter a valid Gemini API key in Settings.',
      errorGeneration: 'Failed to generate content. Please try again.',
      // [تعديل] تحديث نص الخطأ
      errorFileRead: 'Failed to read file. It might be corrupted, protected, or the external libraries (PDF/DOCX) failed to load. Please check your internet connection and refresh.',
      apiKeySaved: 'API Key Saved!',
      welcomeTitle: 'Welcome to StudyGenius!',
      welcomeDesc: 'Upload a file (PDF, DOCX, TXT) or paste your lecture content and hit "Generate" to create smart summaries, questions, and flashcards.',
      term: 'Term',
      definition: 'Definition',
      // [تعديل] تم حذف ترجمات الفلاش كاردز المتحركة

      quizTab: '📝 Interactive Quiz',
      // [تعديل] تحديث نصوص الرفع
      uploadOrPaste: 'Upload a file (PDF, DOCX, TXT) or paste text',
      uploadHint: 'You can drag & drop files.',
      dropFile: 'Drop the file here...',
      readingFile: 'Reading file...',
      or: 'or',
      clickToUpload: 'Click to upload',
      next: 'Next',
      back: 'Back',
      finishQuiz: 'Finish Quiz',
      yourScore: 'Your Score:',
      retakeQuiz: 'Retake Quiz',
      correctAnswer: 'Correct Answer:',
      yourAnswer: 'Your Answer:',
      page: 'Question',
      of: 'of',

      // [جديد] ترجمات للخيارات الجديدة
      generationOptions: 'Generation Options',
      numQuestions: 'Number of Questions:',
      difficulty: 'Difficulty Level',
      difficultyEasy: 'Easy',
      difficultyMedium: 'Medium',
      difficultyHard: 'Hard',
      questionTypes: 'Question Types',
      questionTypeMCQ: 'Multiple Choice',
      questionTypeComp: 'Comprehension',
      keyTermsTab: '🔑 Key Terms',
    }
  }), []);

  const t = (key) => translations[language][key] || key;
  
  // تغيير اتجاه الواجهة بناءً على اللغة
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);


  // --- دوال مساعدة ---

  // حفظ الإعدادات
  const handleSaveSettings = () => {
    setApiKey(tempApiKey);
    localStorage.setItem('studygenius_apiKey', tempApiKey);
    localStorage.setItem('studygenius_language', language);
    localStorage.setItem('studygenius_theme', theme);
    
    // إظهار رسالة تأكيد الحفظ
    setShowApiSaveConfirm(true);
    setTimeout(() => setShowApiSaveConfirm(false), 2000);
  };

  // مسح المحتوى
  const handleClearAll = () => {
    setInputText('');
    setGeneratedContent(null);
    setError(null);
    localStorage.removeItem('studygenius_content');
  };

  // [تعديل] دالة استدعاء Gemini API (تأخذ الخيارات الجديدة)
  const callGeminiAPI = async (prompt, userApiKey, options) => {
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${userApiKey}`;
    
    // [تعديل] إرشادات النظام أصبحت دينيكية
    const requestedQuestionTypes = Object.keys(options.questionTypes)
      .filter(key => options.questionTypes[key])
      .join(', ');

    const systemPrompt = `You are StudyGenius, an expert AI tutor. Your task is to analyze the user's provided lecture text and generate a structured study guide in JSON format.
The JSON output MUST strictly follow this schema:
${JSON.stringify(geminiResponseSchema, null, 2)}

Generation Rules:
1.  Generate exactly ${options.numQuestions} questions.
2.  The difficulty of the questions must be: ${options.difficulty}.
3.  Only include question types from this list: [${requestedQuestionTypes}]. If the list is empty, default to 'mcq'.
4.  Generate a list of key terms.
5.  Generate content in ${language === 'ar' ? 'Arabic' : 'English'}.

Analyze the following text and generate the study guide:`;

    const payload = {
      contents: [{ 
        role: "user",
        parts: [{ text: prompt }] 
      }],
      systemInstruction: {
        role: "system",
        parts: [{ text: systemPrompt }]
      },
      generationConfig: {
        responseMimeType: 'application/json',
        responseSchema: geminiResponseSchema,
      },
    };

    let attempts = 0;
    const maxAttempts = 3;
    const baseDelay = 1000;

    while (attempts < maxAttempts) {
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts[0].text) {
          // النص المستخرج هو JSON string، نحتاج لتحليله
          const jsonString = result.candidates[0].content.parts[0].text;
          return JSON.parse(jsonString); // إرجاع الكائن المحلل
        } else {
          console.error('Invalid API response structure:', result);
          throw new Error('Invalid API response structure.');
        }
      } catch (err) {
        attempts++;
        if (attempts >= maxAttempts) {
          console.error('API call failed after max attempts:', err);
          throw err;
        }
        // انتظار مع تراجع أسي
        await new Promise(res => setTimeout(res, baseDelay * Math.pow(2, attempts)));
      }
    }
  };


  // --- الدالة الرئيسية: توليد المحتوى [تم التحديث] ---
  const handleGenerate = async () => {
    if (!apiKey) {
      setError(t('errorApiKey'));
      setActiveTab('settings'); // توجيه المستخدم للإعدادات
      return;
    }
    if (!inputText) return;

    setIsLoading(true);
    setError(null);
    setGeneratedContent(null); // مسح النتائج القديمة

    try {
      // [تعديل] تمرير الخيارات الجديدة
      const generationOptions = {
        numQuestions,
        difficulty,
        questionTypes
      };

      const result = await callGeminiAPI(inputText, apiKey, generationOptions);
      
      // [تعديل] التحقق من keyTerms أيضاً
      if (result && result.summary && result.questions && result.flashcards && result.keyTerms) {
        setGeneratedContent(result);
        localStorage.setItem('studygenius_content', JSON.stringify(result));
      } else {
        throw new Error('Generated content is missing required fields.');
      }
      
    } catch (err) {
      console.error(err);
      setError(`${t('errorGeneration')} - ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // --- مكونات العرض الفرعية ---

  // عرض الإعدادات
  const SettingsView = () => (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('settingsTitle')}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {/* مفتاح API */}
          <div className="flex flex-col gap-2">
            <label htmlFor="api-key" className="text-sm font-medium">{t('apiKeyLabel')}</label>
            <Input
              id="api-key"
              type="password"
              placeholder={t('apiKeyPlaceholder')}
              value={tempApiKey}
              onChange={(e) => setTempApiKey(e.target.value)}
            />
          </div>
          
          {/* اللغة */}
          <div className="flex flex-col gap-2">
            <label htmlFor="language" className="text-sm font-medium">{t('languageLabel')}</label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm dark:bg-slate-800 dark:border-slate-700"
            >
              <option value="ar">{t('langAr')}</option>
              <option value="en">{t('langEn')}</option>
            </select>
          </div>
          
          {/* المظهر */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">{t('themeLabel')}</label>
            <div className="flex gap-2 rounded-lg border border-slate-300 dark:border-slate-700 p-1 bg-slate-100 dark:bg-slate-800">
              {['light', 'dark', 'system'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setTheme(mode)}
                  className={`flex-1 rounded-md px-3 py-1.5 text-sm transition-colors ${theme === mode ? 'bg-white shadow-sm dark:bg-slate-900' : 'text-slate-600 dark:text-slate-400'}`}
                >
                  {t(`theme${mode.charAt(0).toUpperCase() + mode.slice(1)}`)}
                </button>
              ))}
            </div>
          </div>
          
          {/* زر الحفظ */}
          <Button onClick={handleSaveSettings} className="mt-4 gap-2">
            {showApiSaveConfirm && <Check className="h-4 w-4 text-green-400" />}
            {showApiSaveConfirm ? t('apiKeySaved') : t('saveButton')}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
  
  // عرض الملخص
  const SummaryTab = ({ content }) => (
    <div className="flex flex-col gap-4">
      {content.summary?.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{item.topic}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line">{item.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
  
  // عرض الكويز التفاعلي
  const QuizTab = ({ content }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({}); // { 0: "الإجابة المختارة", 1: "..." }
    const [quizFinished, setQuizFinished] = useState(false);
    
    const questions = content.questions || [];
    // [إصلاح] التأكد من وجود السؤال الحالي قبل عرضه
    if (!questions || questions.length === 0) {
      return <div>{t('لا توجد أسئلة لعرضها.')}</div>
    }
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) {
      // هذا لا ينبغي أن يحدث إذا كان الفهرس صحيحاً، ولكنه حماية إضافية
      return <div>{t('خطأ في تحميل السؤال.')}</div>
    }


    const handleAnswerSelect = (option) => {
      // السماح بتغيير الإجابة
      setUserAnswers(prev => ({
        ...prev,
        [currentQuestionIndex]: option
      }));
    };
    
    const handleNext = () => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    };
    
    const handleBack = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    };
    
    const handleFinish = () => {
      setQuizFinished(true);
    };
    
    const handleRetake = () => {
      setUserAnswers({});
      setCurrentQuestionIndex(0);
      setQuizFinished(false);
    };

    // حساب النتيجة
    const calculateScore = () => {
      let score = 0;
      questions.forEach((q, index) => {
        if (userAnswers[index] === q.answer) {
          score++;
        }
      });
      return score;
    };

    // عرض شاشة النتائج
    if (quizFinished) {
      const score = calculateScore();
      return (
        <div className="flex flex-col gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <CardTitle className="text-2xl mb-2">{t('yourScore')}</CardTitle>
              <p className="text-4xl font-bold">{score} / {questions.length}</p>
              <Button onClick={handleRetake} className="mt-6">
                {t('retakeQuiz')}
              </Button>
            </CardContent>
          </Card>
          
          <h3 className="text-lg font-semibold mt-4">{t('questionsTab')}</h3>
          {questions.map((q, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === q.answer;
            const isMcq = q.type === 'mcq';
            
            return (
              <Card key={index} className={`border-2 ${isCorrect ? 'border-green-500/50 bg-green-50/30' : 'border-red-500/50 bg-red-50/30'} dark:bg-opacity-20`}>
                <CardHeader>
                  <CardTitle>{index + 1}. {q.question}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  {isMcq && (
                    <div className="flex flex-col gap-2">
                      {q.options?.map((opt, i) => (
                        <div
                          key={i}
                          className={`p-3 rounded-md text-sm ${
                            opt === q.answer ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200' : ''
                          } ${
                            opt === userAnswer && !isCorrect ? 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200 line-through' : ''
                          }`}
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}
                  {!isMcq && (
                    <div className="flex flex-col gap-2">
                      <div className="p-3 rounded-md bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200">
                        <strong>{t('yourAnswer')}:</strong> {userAnswer || '(No answer)'}
                      </div>
                      <div className="p-3 rounded-md bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200">
                        <strong>{t('correctAnswer')}:</strong> {q.answer}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      );
    }
    
    // عرض شاشة الكويز
    return (
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardDescription className="text-sm">
              {t('page')} {currentQuestionIndex + 1} {t('of')} {questions.length}
            </CardDescription>
            <CardTitle>{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {currentQuestion.type === 'mcq' ? (
              // خيارات الاختيار من متعدد
              currentQuestion.options?.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswerSelect(opt)}
                  className={`w-full text-start p-3 rounded-md border transition-colors ${
                    userAnswers[currentQuestionIndex] === opt
                      ? 'bg-blue-500 border-blue-600 text-white'
                      : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-700'
                  }`}
                >
                  {opt}
                </button>
              ))
            ) : (
              // سؤال الفهم (إجابة نصية)
              <textarea
                placeholder={t('اكتب إجابتك هنا...')}
                value={userAnswers[currentQuestionIndex] || ''}
                onChange={(e) => handleAnswerSelect(e.target.value)}
                className="flex min-h-[100px] w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm dark:border-slate-700"
              />
            )}
          </CardContent>
        </Card>
        
        {/* أزرار التنقل */}
        <div className="flex justify-between items-center mt-2">
          <Button variant="outline" onClick={handleBack} disabled={currentQuestionIndex === 0}>
            {t('back')}
          </Button>
          
          {currentQuestionIndex < questions.length - 1 ? (
            <Button onClick={handleNext} disabled={!userAnswers[currentQuestionIndex]}>
              {t('next')}
            </Button>
          ) : (
            <Button onClick={handleFinish} disabled={!userAnswers[currentQuestionIndex]} className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
              {t('finishQuiz')}
            </Button>
          )}
        </div>
      </div>
    );
  };
  
  // [تعديل جذري] عرض الفلاش كاردز (بوجه واحد)
  const FlashcardsTab = ({ content }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {content.flashcards?.map((item, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <CardTitle>{item.term}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">{item.definition}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  // [جديد] عرض المصطلحات الأساسية
  const KeyTermsTab = ({ content }) => (
    <div className="flex flex-col gap-3">
      {content.keyTerms?.map((item, index) => (
        <div key={index} className="rounded-lg border dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-800/50">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100">{item.term}</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.definition}</p>
        </div>
      ))}
    </div>
  );


  // [تعديل جذري] مكون منطقة الإدخال (يدعم PDF, DOCX, TXT)
  const InputArea = ({ value, onChange, onFileReadStateChange }) => {
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = React.useRef(null);

    const handleDragEnter = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
    };
    
    const handleDragLeave = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    };
    
    const handleDragOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    
    const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        handleFile(files[0]);
      }
    };
    
    const handleFileSelect = (e) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        handleFile(files[0]);
      }
    };
    
    // [تعديل] دالة معالجة الملفات الجديدة
    const handleFile = async (file) => {
      onFileReadStateChange(true); // إبلاغ التطبيق أننا نقرأ ملفاً
      setError(null);
      let readSuccess = false; // تتبع نجاح القراءة

      try {
        // [جديد] انتظار تحميل المكتبات أولاً
        await waitForLibraries();

        if (file.type === "text/plain") {
          const text = await file.text();
          onChange(text);
          readSuccess = true;
        
        } else if (file.type === "application/pdf") {
          // استخدام pdf.js
          const fileReader = new FileReader();
          fileReader.readAsArrayBuffer(file);
          fileReader.onload = async (e) => {
            try {
              // [تعديل] إزالة التحقق، لأنه تم في waitForLibraries
              const typedArray = new Uint8Array(e.target.result);
              const pdf = await window.pdfjsLib.getDocument(typedArray).promise;
              let fullText = '';
              
              for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const content = await page.getTextContent();
                const pageText = content.items.map(item => item.str).join(' ');
                fullText += pageText + '\n'; // إضافة سطر جديد بين الصفحات
              }
              onChange(fullText);
              onFileReadStateChange(false); // تم الانتهاء هنا
            } catch (err) {
              console.error("Error reading PDF:", err);
              setError(t('errorFileRead') + ` (PDF: ${err.message})`);
              onFileReadStateChange(false); // تم الانتهاء هنا
            }
          };
          // لا تقم بتعيين readSuccess هنا، لأن القراءة غير متزامنة

        } else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || file.name.endsWith('.docx')) {
          // استخدام mammoth.js
          const fileReader = new FileReader();
          fileReader.readAsArrayBuffer(file);
          fileReader.onload = async (e) => {
            try {
              // [تعديل] إزالة التحقق
              const result = await window.mammoth.extractRawText({ arrayBuffer: e.target.result });
              onChange(result.value);
              onFileReadStateChange(false); // تم الانتهاء هنا
            } catch (err) {
              console.error("Error reading DOCX:", err);
              setError(t('errorFileRead') + ` (DOCX: ${err.message})`);
              onFileReadStateChange(false); // تم الانتهاء هنا
            }
          };
           // لا تقم بتعيين readSuccess هنا

        } else {
          setError(`${t('نوع ملف غير مدعوم')}: ${file.type || file.name}`);
          onFileReadStateChange(false); // [إضافة] تأكد من إيقاف القراءة هنا
        }

        // [تعديل] تحديث حالة القراءة فقط لـ TXT المتزامن
        if (file.type === "text/plain" && readSuccess) {
           onFileReadStateChange(false);
        }
      } catch (err) {
        // [تعديل] هذا سيمسك الآن خطأ waitForLibraries أيضاً
        console.error("Error handling file or loading libs:", err);
        setError(t('errorFileRead') + ` (${err.message})`);
        onFileReadStateChange(false); // تأكد من إيقاف القراءة عند حدوث خطأ عام
      }
    };


    return (
      <div className="flex flex-col gap-4">
        <label htmlFor="lecture-text-area" className="text-sm font-medium">{t('uploadOrPaste')}</label>
        
        {/* منطقة السحب والإفلات / رفع الملفات */}
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
            isDragging ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600'
          }`}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            // [تعديل] قبول جميع الأنواع
            accept=".txt,.pdf,.docx"
            className="hidden"
          />
          {isDragging ? (
            <p className="text-lg font-semibold text-blue-600">{t('dropFile')}</p>
          ) : (
            <div className="text-center text-slate-500 dark:text-slate-400">
              <UploadCloud className="mx-auto h-8 w-8 mb-2" />
              <p className="font-semibold">{t('clickToUpload')} <span className="font-normal">{t('or')} {t('اسحب وأفلت')}</span></p>
              {/* [تعديل] تحديث النص */}
              <p className="text-xs">{t('PDF, DOCX, TXT')}</p>
            </div>
          )}
        </div>
        
        <div className="relative flex items-center">
          <div className="flex-grow border-t border-slate-300 dark:border-slate-700"></div>
          <span className="flex-shrink mx-4 text-sm text-slate-500 dark:text-slate-400">{t('or')}</span>
          <div className="flex-grow border-t border-slate-300 dark:border-slate-700"></div>
        </div>

        {/* منطقة لصق النص */}
        <textarea
          id="lecture-text-area"
          placeholder={t('pastePlaceholder')}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex min-h-[150px] w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-800"
        />
        <p className="text-xs text-slate-500 dark:text-slate-400 text-center">{t('uploadHint')}</p>
      </div>
    );
  };


  // [تعديل] عرض واجهة المذاكرة الرئيسية (مع الخيارات الجديدة)
  const StudyView = () => (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent className="pt-6">
          <InputArea
            value={inputText}
            onChange={setInputText}
            onFileReadStateChange={setIsReadingFile}
          />
          
          {/* [جديد] خيارات التوليد */}
          <div className="mt-6 border-t border-slate-200 dark:border-slate-800 pt-6">
            <h4 className="text-md font-semibold mb-4">{t('generationOptions')}</h4>
            <div className="flex flex-col gap-4">
              {/* عدد الأسئلة */}
              <div className="flex flex-col gap-2">
                <label htmlFor="num-questions" className="text-sm font-medium">{t('numQuestions')} <span className="font-bold text-blue-600 dark:text-blue-400">{numQuestions}</span></label>
                <input
                  id="num-questions"
                  type="range"
                  min="3"
                  max="15"
                  value={numQuestions}
                  onChange={(e) => setNumQuestions(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                />
              </div>
              
              {/* مستوى الصعوبة */}
              <div className="flex flex-col gap-2">
                <label htmlFor="difficulty" className="text-sm font-medium">{t('difficulty')}</label>
                <select
                  id="difficulty"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm dark:bg-slate-800 dark:border-slate-700"
                >
                  <option value="easy">{t('difficultyEasy')}</option>
                  <option value="medium">{t('difficultyMedium')}</option>
                  <option value="hard">{t('difficultyHard')}</option>
                </select>
              </div>

              {/* أنواع الأسئلة */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">{t('questionTypes')}</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={questionTypes.mcq}
                      onChange={(e) => setQuestionTypes(prev => ({ ...prev, mcq: e.target.checked }))}
                      className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm">{t('questionTypeMCQ')}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={questionTypes.comprehension}
                      onChange={(e) => setQuestionTypes(prev => ({ ...prev, comprehension: e.target.checked }))}
                      className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm">{t('questionTypeComp')}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-2">
            <Button onClick={handleGenerate} disabled={isLoading || isReadingFile || !inputText} className="flex-1 gap-2">
              {isLoading ? (
                <>
                  <Loader className="h-4 w-4" />
                  {t('generatingButton')}
                </>
              ) : isReadingFile ? (
                <>
                  <Loader className="h-4 w-4" />
                  {t('readingFile')}
                </>
              ) : (
                t('generateButton')
              )}
            </Button>
            <Button variant="destructive" onClick={handleClearAll} disabled={isLoading || isReadingFile} className="gap-2">
              <Trash2 className="h-4 w-4" />
              {t('clearButton')}
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* عرض الأخطاء */}
      {error && (
        <Card className="border-red-500/50 bg-red-50/50 dark:bg-red-900/20">
          <CardHeader>
            <CardTitle className="text-red-700 dark:text-red-400">{t('errorTitle')}</CardTitle>
            <CardDescription className="text-red-600 dark:text-red-400">{error}</CardDescription>
          </CardHeader>
        </Card>
      )}
      
      {/* عرض النتائج */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center gap-4 p-10">
          <Loader className="h-12 w-12 text-slate-500" />
          <p className="text-slate-600 dark:text-slate-400 animate-pulse">{t('generatingButton')}</p>
        </div>
      )}
      
      {!isLoading && !generatedContent && !error && (
        <Card className="border-dashed border-slate-300 dark:border-slate-700">
          <CardContent className="pt-6 text-center">
            <Brain className="h-12 w-12 mx-auto text-slate-400" />
            <h3 className="text-lg font-semibold mt-4">{t('welcomeTitle')}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t('welcomeDesc')}</p>
          </CardContent>
        </Card>
      )}
      
      {generatedContent && !isLoading && (
        <Card>
          <CardHeader>
            {/* [تعديل] تبويبات النتائج (مع المصطلحات) */}
            <div className="flex flex-wrap gap-1 rounded-lg border border-slate-300 dark:border-slate-700 p-1 bg-slate-100 dark:bg-slate-800">
              {[
                { key: 'summary', label: t('summaryTab'), icon: <Brain className="h-4 w-4" /> },
                { key: 'questions', label: t('quizTab'), icon: <HelpCircle className="h-4 w-4" /> },
                { key: 'flashcards', label: t('flashcardsTab'), icon: <Layers className="h-4 w-4" /> },
                { key: 'keyTerms', label: t('keyTermsTab'), icon: <Key className="h-4 w-4" /> }, // [جديد]
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveResultTab(tab.key)}
                  className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${activeResultTab === tab.key ? 'bg-white shadow-sm dark:bg-slate-900' : 'text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-900/50'}`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            {activeResultTab === 'summary' && <SummaryTab content={generatedContent} />}
            {activeResultTab === 'questions' && <QuizTab content={generatedContent} />}
            {activeResultTab === 'flashcards' && <FlashcardsTab content={generatedContent} />}
            {activeResultTab === 'keyTerms' && <KeyTermsTab content={generatedContent} />} {/* [جديد] */}
          </CardContent>
        </Card>
      )}
    </div>
  );

  // --- الواجهة الرئيسية (JSX) ---
  return (
    <div className={`min-h-screen ${language === 'ar' ? 'font-sans' : 'font-sans'} bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-200`}>
      {/* خلفية جمالية */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-slate-950 dark:bg-[radial-gradient(#ffffff20_1px,transparent_1px)]"></div>

      <div className="max-w-3xl mx-auto p-4 sm:p-8">
        {/* الهيدر وعنوان التطبيق */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            {t('title')}
          </h1>
          
          {/* تبويبات التنقل الرئيسية */}
          <nav className="flex gap-1 rounded-full border border-slate-300 dark:border-slate-700 p-1 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm shadow-sm">
            <button
              onClick={() => setActiveTab('study')}
              title={t('studyTab')}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${activeTab === 'study' ? 'bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-900' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <Brain className="h-5 w-5" />
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              title={t('settingsTab')}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${activeTab === 'settings' ? 'bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-900' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <Settings className="h-5 w-5" />
            </button>
          </nav>
        </header>

        {/* المحتوى الرئيسي (تبويبات) */}
        <main>
          {activeTab === 'study' ? <StudyView /> : <SettingsView />}
        </main>
      </div>
    </div>
  );
}

