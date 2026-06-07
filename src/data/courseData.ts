import type { Unit, Concept, Definition, TermEntry, Question, Flashcard, ExpectedQuestion, RevisionItem } from '@/types';

export const courseInfo = {
  title: 'الحاسوب والإذاعة',
  description: 'مادة الحاسوب والإذاعة - مراجعة شاملة للمفاهيم والتعريفات والأسئلة',
  fileCount: 9,
  totalPages: 150,
  unitCount: 6,
  questionCount: 120,
};

export const units: Unit[] = [
  {
    id: 'unit1',
    title: 'الحاسوب والإذاعة',
    description: 'تاريخ الإذاعة، تطورها، دخول الكمبيوتر في الإنتاج الإذاعي',
    chapters: [
      {
        id: 'ch1-1',
        title: 'نشأة الإذاعة وتطورها قبل دخول الكمبيوتر',
        content: [
          {
            type: 'paragraph',
            text: 'ظهرت فكرة الإذاعة نتيجة التجارب المبكرة على الموجات الكهرومغناطيسية في نهاية القرن التاسع عشر، حيث جعل العالم ماركوني التواصل بدون أسلاك ممكناً.',
            source: { file: '- -1.pdf', page: 1, text: 'ظهرت فكرة الإذاعة نتيجة التجارب المبكرة على الموجات الكهرومغناطيسية' }
          },
          {
            type: 'important',
            text: 'الثبث الإذاعي الحقيقي الأول: قام المهندس الكندي ريجنالد فسندن ببناء أول مذياع لاسلكي حقيقي عام 1906.',
            source: { file: '- -1.pdf', page: 1, text: 'قام المهندس الكندي ريجنالد فسندن ببناء أول مذياع لاسلكي حقيقي عام 1906' }
          },
          {
            type: 'paragraph',
            text: 'بدأت الإذاعة تنتشر بشكل واسع مع دخول عشرينيات القرن العشرين، وذلك لأسباب تجارية ورسمية.',
            source: { file: '- -1.pdf', page: 1, text: 'بدأت الإذاعة تنتشر بشكل واسع مع دخول عشرينيات القرن العشرين' }
          },
          {
            type: 'heading',
            text: 'وسائل التسجيل قبل الكمبيوتر',
            source: { file: '- -1.pdf', page: 2, text: 'وسائل التسجيل قبل الكمبيوتر' }
          },
          {
            type: 'paragraph',
            text: 'كانت البكرة الكبيرة (Reel to Reel) أهم وأسمخ طريقة تسجيل في الإذاعة قبل الكمبيوتر.',
            source: { file: '- -1.pdf', page: 2, text: 'كانت البكرة الكبيرة (Reel to Reel) أهم وأسمخ طريقة تسجيل' }
          },
          {
            type: 'list',
            items: [
              'يستخدم جهاز بكرات كبيرة من الصفيح المغناطيسي',
              'يدور الشريط من بكرة إلى أخرى أثناء التسجيل أو التشغيل',
              'كل بكرة تسجل حتى ساعة أو أكثر من الصوت'
            ],
            source: { file: '- -1.pdf', page: 2, text: 'يستخدم جهاز بكرات كبيرة من الصفيح المغناطيسي' }
          },
          {
            type: 'paragraph',
            text: 'ظهرت الكاسيت (Cassette) كبديل أخف وأسهل، حيث أصبح التعامل مع الصوت أسهل بكثير.',
            source: { file: '- -1.pdf', page: 2, text: 'ظهرت الكاسيت (Cassette) كبديل أخف وأسهل' }
          }
        ]
      },
      {
        id: 'ch1-2',
        title: 'دخول الكمبيوتر في الإذاعة',
        content: [
          {
            type: 'paragraph',
            text: 'مع دخول الكمبيوتر، حدث تغيير جذري في طريقة عمل الإذاعة. ظهر التسجيل الرقمي مما أتاح تخزين الصوت كملفات رقمية.',
            source: { file: '-   2.pdf', page: 1, text: 'تحول الإذاعة للرقمي مع دخول الكمبيوتر' }
          },
          {
            type: 'heading',
            text: 'برامج تحرير الصوت الرقمي',
            source: { file: '-   2.pdf', page: 3, text: 'برامج تحرير الصوت الرقمي' }
          },
          {
            type: 'paragraph',
            text: 'ظهرت برامج متخصصة لتحرير الصوت الرقمي مثل Adobe Audition, Pro Tools, Logic Pro, و Audacity.',
            source: { file: '-   2.pdf', page: 3, text: 'برامج تحرير الصوت الرقمي: Adobe Audition, Pro Tools, Logic Pro, Audacity' }
          },
          {
            type: 'list',
            items: [
              'Adobe Audition: برنامج احترافي لتحرير الصوت ومزج المؤثرات',
              'Pro Tools: معيار صناعة الموسيقى والإذاعة الاحترافية',
              'Logic Pro: برنامج Apple المتخصص في إنتاج الموسيقى',
              'Audacity: برنامج مجاني ومفتوح المصدر لتحرير الصوت'
            ],
            source: { file: '-   2.pdf', page: 4, text: 'برامج تحرير الصوت الرقمي' }
          }
        ]
      },
      {
        id: 'ch1-3',
        title: 'الراديو الرقمي والبودكاست',
        content: [
          {
            type: 'paragraph',
            text: 'تطور البث الإذاعي الرقمي DAB (Digital Audio Broadcasting) وأصبح يقدم جودة صوت أعلى وأوضح مع تأخر أقل للتشويش.',
            source: { file: '-   3.pdf', page: 1, text: 'تطور البث الإذاعي الرقمي DAB' }
          },
          {
            type: 'heading',
            text: 'البودكاست (Podcast)',
            source: { file: '-   3.pdf', page: 1, text: 'البودكاست' }
          },
          {
            type: 'paragraph',
            text: 'البودكاست هو ملف صوتي رقمي يحتوي على حلقة أو سلسلة حلقات حول موضوع محدد، يُنشر عبر الإنترنت على منصات متخصصة مثل Spotify و Apple Podcasts.',
            source: { file: '-   3.pdf', page: 1, text: 'البودكاست هو ملف صوتي رقمي يحتوي على حلقة أو سلسلة حلقات' }
          },
          {
            type: 'list',
            items: [
              'يمكن للمستمع اختيار متى وأين يستمع',
              'يتيح محتوى متخصصاً وعميقاً',
              'يعتمد على الإنتاج الفردي أو إنتاج فرق صغيرة',
              'يمكن إنتاجه منزلياً بمعدات بسيطة'
            ],
            source: { file: '-   3.pdf', page: 1, text: 'مميزات البودكاست' }
          },
          {
            type: 'paragraph',
            text: 'شات بوتات (Chatbots) في الإذاعة الرقمية: تستخدم لتقديم تجربة تفاعلية للمستمعين وتحليل البيانات واقتراح المحتوى.',
            source: { file: '-   3.pdf', page: 3, text: 'شات بوتات في الإذاعة الرقمية' }
          }
        ]
      }
    ]
  },
  {
    id: 'unit2',
    title: 'الحاسوب والصحافة',
    description: 'تحول الصحافة للرقمية، أنظمة إدارة المحتوى، تحسين محركات البحث',
    chapters: [
      {
        id: 'ch2-1',
        title: 'تحول الصحافة للرقمية',
        content: [
          {
            type: 'paragraph',
            text: 'مع دخول الكمبيوتر، شهدت الصحافة تغييراً جذرياً من الصحافة الورقية التقليدية إلى الصحافة الرقمية المتعددة الوسائط.',
            source: { file: '- 1.pdf', page: 1, text: 'تحول الصحافة من الورقية للرقمية' }
          },
          {
            type: 'list',
            items: [
              'تسريع عمليات الإنتاج والتحرير',
              'تحسين جودة الكتابة وتقليل الأخطاء اللغوية',
              'سهولة التعديل والتحديث الفوري',
              'توفير مساحات تخزين ضخمة',
              'إمكانية البحث والاستبدال',
              'سهولة التواصل بين الفرق'
            ],
            source: { file: '- 1.pdf', page: 1, text: 'دور الكمبيوتر في الصحافة' }
          }
        ]
      },
      {
        id: 'ch2-2',
        title: 'أنظمة إدارة المحتوى (CMS)',
        content: [
          {
            type: 'paragraph',
            text: 'أنظمة إدارة المحتوى (Content Management System) هي أنظمة تستخدم لإنشاء وإدارة مواقع الويب الإخبارية دون الحاجة لمعرفة عميقة بالبرمجة.',
            source: { file: '- 2.pdf', page: 1, text: 'أنظمة إدارة المحتوى CMS' }
          },
          {
            type: 'list',
            items: [
              'WordPress: الأكثر شهولة وسهولة في الاستخدام',
              'Drupal: مناسب للمواقع الإخبارية الكبرى التي تحتاج لتخصيص واسع',
              'Joomla: يوفر توازناً بين السهولة والقدرة على التخصيص'
            ],
            source: { file: '- 2.pdf', page: 1, text: 'أمثلة أنظمة إدارة المحتوى' }
          },
          {
            type: 'heading',
            text: 'تحسين محركات البحث (SEO)',
            source: { file: '- 2.pdf', page: 2, text: 'SEO' }
          },
          {
            type: 'paragraph',
            text: 'SEO (Search Engine Optimization) هو مجموعة من التقنيات تهدف لتحسين ظهور الموقع في نتائج البحث.',
            source: { file: '- 2.pdf', page: 2, text: 'تحسين محركات البحث SEO' }
          }
        ]
      }
    ]
  },
  {
    id: 'unit3',
    title: 'الحاسوب والتلفزيون',
    description: 'البث التلفزيوني، الاستوديو الافتراضي، تقنيات العرض الحديثة',
    chapters: [
      {
        id: 'ch3-1',
        title: 'البث التلفزيوني قبل الكمبيوتر',
        content: [
          {
            type: 'paragraph',
            text: 'قبل دخول الكمبيوتر، كان الإنتاج التلفزيوني يعتمد على اليد العاملة الكثيفة والمعدات الضخمة والتحكم اليدوي.',
            source: { file: '- 1 (1).pdf', page: 1, text: 'البث التلفزيوني قبل الكمبيوتر' }
          },
          {
            type: 'list',
            items: [
              'التحكم اليدوي الكامل في الإضاءة ومستوى الصوت',
              'أنظمة تعديل بصري مرتبطة بـ Character Board',
              'أي خطأ في الشاشة يظهر مباشرة دون إمكانية تصحيح فوري',
              'تعتمد على الشريط المغناطيسي والطباعة الورقية'
            ],
            source: { file: '- 1 (1).pdf', page: 1, text: 'عيوب الإنتاج التلفزيوني قبل الكمبيوتر' }
          }
        ]
      },
      {
        id: 'ch3-2',
        title: 'دخول الكمبيوتر في الاستوديو',
        content: [
          {
            type: 'paragraph',
            text: 'أدى دخول الكمبيوتر إلى ثورة حقيقية في غرفة التحكم (Control Room) بظهور أنظمة الأتمتة (Automation Systems).',
            source: { file: '- 1 (1).pdf', page: 2, text: 'دخول الكمبيوتر في غرفة التحكم' }
          },
          {
            type: 'list',
            items: [
              'أنظمة الأتمتة: مثل Ross OverDrive و Grass Valley Ignite',
              'المفاتيح الرقمية للفيديو (Digital Video Switchers)',
              'أجهزة توليد الرسوم والكتابات مثل Vizrt و Chyron',
              'أنظمة الربط مع غرفة الأخبار NRCS Integration',
              'خوادم البث الرقمي Playout Servers',
              'أنظمة مراقبة الجودة Quality Monitoring'
            ],
            source: { file: '- 1 (1).pdf', page: 2, text: 'تقنيات دخول الكمبيوتر في الاستوديو' }
          }
        ]
      },
      {
        id: 'ch3-3',
        title: 'تقنيات العرض الحديثة',
        content: [
          {
            type: 'heading',
            text: 'تقنيات 4K و 8K',
            source: { file: '- 1 (1).pdf', page: 5, text: 'تقنيات 4K و 8K' }
          },
          {
            type: 'paragraph',
            text: 'تقنية 4K: دقة عرض تصل إلى 3840 × 2160 بكسل، أي أربع أضعاف Full HD. تُستخدم في إنتاج تقارير فيديو عالية الجودة للمنصات الرقمية.',
            source: { file: '- 1 (1).pdf', page: 5, text: 'تقنية 4K' }
          },
          {
            type: 'paragraph',
            text: 'تقنية 8K: دقة 7680 × 4320 بكسل، أي أربع أضعاف 4K. تُستخدم في الشاشات الكبيرة جداً والفعاليات الرياضية الكبرى.',
            source: { file: '- 1 (1).pdf', page: 6, text: 'تقنية 8K' }
          },
          {
            type: 'heading',
            text: 'الواقع المعزز (AR) والواقع الافتراضي (VR)',
            source: { file: '- 1 (1).pdf', page: 6, text: 'AR و VR' }
          },
          {
            type: 'paragraph',
            text: 'الواقع المعزز AR: تقنية تُضفي عناصر رقمية (نصوص، رسوم، بيانات) على العالم الحقيقي عبر أجهزة مثل الهواتف الذكية أو النظارات الذكية.',
            source: { file: '- 1 (1).pdf', page: 6, text: 'الواقع المعزز AR' }
          },
          {
            type: 'paragraph',
            text: 'الواقع الافتراضي VR: يغمر المستخدم في بيئة رقمية شاملة منفصلة عن العالم المادي باستخدام أجهزة متخصصة مثل نظارات Oculus و HTC Vive.',
            source: { file: '- 1 (1).pdf', page: 7, text: 'الواقع الافتراضي VR' }
          }
        ]
      },
      {
        id: 'ch3-4',
        title: 'البث المباشر عبر الإنترنت',
        content: [
          {
            type: 'paragraph',
            text: 'أصبح البث المباشر عبر الإنترنت أحد أهم وسائل الإعلام، مع منصات مثل YouTube Live و Twitch و Facebook Live.',
            source: { file: '- 1 (1).pdf', page: 3, text: 'البث المباشر عبر الإنترنت' }
          },
          {
            type: 'list',
            items: [
              'YouTube Live: منصة واسعة الانتشار لجميع أنواع المحتوى',
              'Twitch: متخصصة في الألعاب والمحتوى التفاعلي',
              'Facebook Live: للبث المباشر على الصفحات الشخصية والتجارية',
              'Instagram Live: للبث المباشر عبر Instagram',
              'TikTok Live: للبث المباشر عبر TikTok'
            ],
            source: { file: '- 1 (1).pdf', page: 4, text: 'منصات البث المباشر' }
          },
          {
            type: 'heading',
            text: 'أدوات البث المباشر',
            source: { file: '- 1 (1).pdf', page: 5, text: 'أدوات البث المباشر' }
          },
          {
            type: 'list',
            items: [
              'OBS Studio (Open Broadcaster Software): مجاني ومفتوح المصدر',
              'XSplit Broadcaster: واجهة سهلة للمستخدم',
              'vMix: يدعم تقنيات فيديو عالية الجودة حتى 4K',
              'Wirecast: برنامج احترافي للبث المباشر'
            ],
            source: { file: '- 1 (1).pdf', page: 5, text: 'أدوات البث المباشر' }
          }
        ]
      }
    ]
  },
  {
    id: 'unit4',
    title: 'العلاقات العامة والحاسوب',
    description: 'CRM، البريد الإلكتروني، إدارة وسائل التواصل الاجتماعي',
    chapters: [
      {
        id: 'ch4-1',
        title: 'إدارة علاقات العملاء (CRM)',
        content: [
          {
            type: 'paragraph',
            text: 'CRM (Customer Relationship Management) هو نظام لإدارة علاقات الشركة بالعملاء، مثل Salesforce.',
            source: { file: '10 .....  .pdf', page: 1, text: 'CRM Salesforce' }
          },
          {
            type: 'list',
            items: [
              'تسجيل بيانات العملاء',
              'تخصيص الخدمات حسب احتياجات العملاء',
              'المتابعة المستمرة',
              'إعداد التقارير'
            ],
            source: { file: '10 .....  .pdf', page: 1, text: 'وظائف CRM' }
          }
        ]
      },
      {
        id: 'ch4-2',
        title: 'إدارة وسائل التواصل الاجتماعي',
        content: [
          {
            type: 'paragraph',
            text: 'أدوات إدارة وسائل التواصل الاجتماعي مثل Buffer و Hootsuite تتيح إدارة حسابات متعددة من لوحة تحكم واحدة.',
            source: { file: '10 .....  .pdf', page: 3, text: 'Buffer و Hootsuite' }
          },
          {
            type: 'list',
            items: [
              'جدولة المنشورات',
              'تحليل الأداء',
              'المتابعة والتفاعل',
              'إدارة الحملات الإعلانية'
            ],
            source: { file: '10 .....  .pdf', page: 3, text: 'وظائف إدارة وسائل التواصل' }
          },
          {
            type: 'paragraph',
            text: 'تنظيم الفعاليات: Microsoft Teams و Zoom من الأدوات الأساسية لتنظيم الفعاليات الافتراضية.',
            source: { file: '10 .....  .pdf', page: 3, text: 'Microsoft Teams و Zoom' }
          }
        ]
      }
    ]
  },
  {
    id: 'unit5',
    title: 'الذكاء الاصطناعي في الإعلام',
    description: 'استخدامات AI في الإعلام، Infographics، Videographics',
    chapters: [
      {
        id: 'ch5-1',
        title: 'الذكاء الاصطناعي في الاستوديوهات التلفزيونية',
        content: [
          {
            type: 'paragraph',
            text: 'يستخدم الذكاء الاصطناعي في الاستوديوهات التلفزيونية لتوليد رسوم ثلاثية الأبعاد متحركة، وتعزيز الأوضاع الواقعية AR.',
            source: { file: '-2 ( ).pdf', page: 1, text: 'الذكاء الاصطناعي في الاستوديوهات' }
          },
          {
            type: 'list',
            items: [
              'إدارة الكاميرات والإضاءة',
              'توليد الصور والرسوم ثلاثية الأبعاد',
              'التحكم في الصوت وإزالة الضوضاء',
              'المساعدة في الإعلانات وقوائم التشغيل',
              'الترجمة الفورية ومجلّات الذكاء الاصطناعي',
              'تحليل الجمهور وتخصيص المحتوى'
            ],
            source: { file: '-2 ( ).pdf', page: 1, text: 'استخدامات AI في التلفزيون' }
          },
          {
            type: 'paragraph',
            text: 'تعتبر تقنية Chroma Key (الشاشة الخضراء) من أهم تقنيات الذكاء الاصطناعي في الإنتاج التلفزيوني.',
            source: { file: '-2 ( ).pdf', page: 2, text: 'Chroma Key' }
          },
          {
            type: 'paragraph',
            text: 'فوائد استخدام الذكاء الاصطناعي: توفير الوقت والتكاليف، زيادة الإنتاجية، إبداع مبتكر.',
            source: { file: '-2 ( ).pdf', page: 2, text: 'فوائد استخدام الذكاء الاصطناعي' }
          },
          {
            type: 'paragraph',
            text: 'التحديات: الاعتماد الكبير على الذكاء الاصطناعي، مخاوف الخصوصية، قضايا أخلاقية، التكلفة العالية.',
            source: { file: '-2 ( ).pdf', page: 2, text: 'تحديات استخدام الذكاء الاصطناعي' }
          }
        ]
      },
      {
        id: 'ch5-2',
        title: 'Infographics والـ Videographics',
        content: [
          {
            type: 'paragraph',
            text: 'الإنفوجرافيك (Infographic) هو تمثيل بصري للمعلومات أو البيانات أو المعرفة، يهدف لزيادة قدرة الفهم السريع.',
            source: { file: '-2 ( ).pdf', page: 3, text: 'تعريف Infographic' }
          },
          {
            type: 'heading',
            text: 'تاريخ الإنفوجرافيك',
            source: { file: '-2 ( ).pdf', page: 3, text: 'تاريخ الإنفوجرافيك' }
          },
          {
            type: 'list',
            items: [
              'العصور القديمة: رسوم الكهوف والرمز الهيروغليفي',
              'القرن الثامن عشر: ويليام بلايفير ابتكر الرسوم البيانية',
              'القرن التاسع عشر: فلورنس نايتينجيل استخدمت مخططات وردية',
              'القرن العشرون: تطور التصميم المرئي مع الحواسيب'
            ],
            source: { file: '-2 ( ).pdf', page: 3, text: 'تاريخ الإنفوجرافيك' }
          },
          {
            type: 'heading',
            text: 'أنواع الإنفوجرافيك حسب الغرض',
            source: { file: '-2 ( ).pdf', page: 4, text: 'أنواع الإنفوجرافيك' }
          },
          {
            type: 'list',
            items: [
              'إنفوجرافيك البيانات (Statistical Infographic)',
              'إنفوجرافيك الخط الزمني (Timeline Infographic)',
              'إنفوجرافيك الخرائط (Geographic Infographic)',
              'إنفوجرافيك العمليات (Process Infographic)',
              'إنفوجرافيك المقارنات (Comparison Infographic)',
              'إنفوجرافيك المعلومات العامة (Informational Infographic)',
              'إنفوجرافيك سرد القصص (Storytelling Infographic)'
            ],
            source: { file: '-2 ( ).pdf', page: 5, text: 'أنواع الإنفوجرافيك' }
          },
          {
            type: 'paragraph',
            text: 'الفيديوجرافيك (Videographics) هو مزيج بين الإنفوجرافيك والفيديو حيث يُعرض المحتوى بطريقة متحركة باستخدام عناصر بصرية وصوتية.',
            source: { file: '-2 ( ).pdf', page: 6, text: 'تعريف Videographics' }
          }
        ]
      }
    ]
  },
  {
    id: 'unit6',
    title: 'الصحافة الرقمية والتحول الرقمي',
    description: 'دور الحاسوب في دعم الصحافة المتعددة الوسائط',
    chapters: [
      {
        id: 'ch6-1',
        title: 'دور الحاسوب في دعم الصحافة المتعددة الوسائط',
        content: [
          {
            type: 'paragraph',
            text: 'يمكّن الحاسوب الصحفيين من تجميع الصور والفيديوهات والنصوص والرسوم البيانية في محتوى إعلامي تفاعلي غني.',
            source: { file: '- 3.pdf', page: 1, text: 'دور الحاسوب في الصحافة المتعددة الوسائط' }
          },
          {
            type: 'list',
            items: [
              'إنشاء رسوم بيانية تفاعلية باستخدام Tableau و Google Data Studio',
              'إنشاء خرائط تفاعلية باستخدام ArcGIS',
              'تطوير محتوى تفاعلي باستخدام HTML5 و JavaScript',
              'تصميم واجهات المستخدم UI/UX'
            ],
            source: { file: '- 3.pdf', page: 1, text: 'أدوات الصحافة المتعددة الوسائط' }
          }
        ]
      },
      {
        id: 'ch6-2',
        title: 'التحول للصحافة الرقمية',
        content: [
          {
            type: 'paragraph',
            text: 'تحولت الصحافة الورقية للرقمية مع ظاهرة التحول الرقمي، حيث أصبحت الصحافة الرقمية البديل الحديث للصحافة الورقية.',
            source: { file: '- 2.pdf', page: 1, text: 'التحول للصحافة الرقمية' }
          },
          {
            type: 'list',
            items: [
              'سرعة الوصول للجمهور',
              'تخفيض تكاليف الإنتاج والتوزيع',
              'إمكانية التفاعل مع الجمهور',
              'تنوع المحتوى (نصوص، صور، فيديوهات، رسوم بيانية)',
              'تحليل دقيق لقراءة الجمهور'
            ],
            source: { file: '- 2.pdf', page: 2, text: 'مميزات الصحافة الرقمية' }
          },
          {
            type: 'paragraph',
            text: 'أثر التحول على الإعلانات: انخفضت إيرادات الصحافة الورقية مع انتشار الصحافة الرقمية، وظهرت نماذج إعلانية جديدة.',
            source: { file: '- 2.pdf', page: 2, text: 'أثر التحول على الإعلانات' }
          }
        ]
      }
    ]
  }
];

export const concepts: Concept[] = [
  {
    id: 'c1',
    term: 'الإذاعة',
    explanation: 'وسيلة إعلامية تستخدم الموجات الكهرومغناطيسية لنقل الصوت والموسيقى والأخبار للجمهور.',
    source: { file: '- -1.pdf', page: 1, text: 'فكرة الإذاعة' }
  },
  {
    id: 'c2',
    term: 'البودكاست',
    explanation: 'ملف صوتي رقمي يحتوي على حلقة أو سلسلة حلقات حول موضوع محدد، يُنشر عبر الإنترنت.',
    source: { file: '-   3.pdf', page: 1, text: 'تعريف البودكاست' }
  },
  {
    id: 'c3',
    term: 'CMS',
    explanation: 'نظام إدارة المحتوى (Content Management System) هو برنامج يستخدم لإنشاء وإدارة محتوى المواقع الإلكترونية.',
    source: { file: '- 2.pdf', page: 1, text: 'CMS' }
  },
  {
    id: 'c4',
    term: 'SEO',
    explanation: 'تحسين محركات البحث (Search Engine Optimization) وهو مجموعة من التقنيات لتحسين ظهور الموقع في نتائج البحث.',
    source: { file: '- 2.pdf', page: 2, text: 'SEO' }
  },
  {
    id: 'c5',
    term: 'الواقع المعزز AR',
    explanation: 'تقنية تُضفي عناصر رقمية على العالم الحقيقي عبر أجهزة مثل الهواتف الذكية أو النظارات الذكية.',
    source: { file: '- 1 (1).pdf', page: 6, text: 'AR' }
  },
  {
    id: 'c6',
    term: 'الواقع الافتراضي VR',
    explanation: 'تقنية تغمر المستخدم في بيئة رقمية شاملة منفصلة عن العالم المادي.',
    source: { file: '- 1 (1).pdf', page: 7, text: 'VR' }
  },
  {
    id: 'c7',
    term: 'CRM',
    explanation: 'إدارة علاقات العملاء (Customer Relationship Management) نظام لإدارة تفاعلات الشركة مع العملاء.',
    source: { file: '10 .....  .pdf', page: 1, text: 'CRM' }
  },
  {
    id: 'c8',
    term: 'Chroma Key',
    explanation: 'تقنية الشاشة الخضراء التي تُستخدم لعزل الخلفية واستبدالها بخلفيات رقمية أخرى.',
    source: { file: '-2 ( ).pdf', page: 2, text: 'Chroma Key' }
  },
  {
    id: 'c9',
    term: 'Infographic',
    explanation: 'تمثيل بصري للمعلومات يهدف لزيادة قدرة الفهم السريع باستخدام عناصر بصرية.',
    source: { file: '-2 ( ).pdf', page: 3, text: 'Infographic' }
  },
  {
    id: 'c10',
    term: 'Videographics',
    explanation: 'مزيج بين الإنفوجرافيك والفيديو حيث يُعرض المحتوى بطريقة متحركة باستخدام عناصر بصرية وصوتية.',
    source: { file: '-2 ( ).pdf', page: 6, text: 'Videographics' }
  },
  {
    id: 'c11',
    term: 'البث المباشر Live Streaming',
    explanation: 'بث محتوى فيديو/صوتي بشكل مباشر ومستمر عبر الإنترنت للجمهور.',
    source: { file: '- 1 (1).pdf', page: 3, text: 'البث المباشر' }
  },
  {
    id: 'c12',
    term: 'OBS Studio',
    explanation: 'برنامج مجاني ومفتوح المصدر للبث المباشر وتسجيل الفيديو.',
    source: { file: '- 1 (1).pdf', page: 5, text: 'OBS Studio' }
  }
];

export const definitions: Definition[] = [
  {
    id: 'd1',
    term: 'البكرة الكبيرة (Reel to Reel)',
    definition: 'وسيلة تسجيل إذاعية تستخدم بكرات كبيرة من الشريط المغناطيسي لتسجيل الصوت قبل ظهور الكمبيوتر.',
    source: { file: '- -1.pdf', page: 2, text: 'البكرة الكبيرة' }
  },
  {
    id: 'd2',
    term: 'الكاسيت (Cassette)',
    definition: 'شريط صوتي صغير داخل علبة بلاستيكية، سهل التنقل والتخزين، ظهر كبديل أخف للبكرة الكبيرة.',
    source: { file: '- -1.pdf', page: 2, text: 'الكاسيت' }
  },
  {
    id: 'd3',
    term: 'DAB (Digital Audio Broadcasting)',
    definition: 'البث الإذاعي الرقمي الذي يقدم جودة صوت أعلى وأوضح مع مقاومة أعلى للتشويش.',
    source: { file: '-   3.pdf', page: 1, text: 'DAB' }
  },
  {
    id: 'd4',
    term: 'Chatbot',
    definition: 'برنامج ذكاء اصطناعي يتفاعل مع المستخدمين بشكل تلقائي عبر المحادثات النصية أو الصوتية.',
    source: { file: '-   3.pdf', page: 3, text: 'Chatbot' }
  },
  {
    id: 'd5',
    term: 'Playout Servers',
    definition: 'خوادم بث رقمية تحل محل الأشرطة المغناطيسية التقليدية في إدارة وتشغيل المحتوى الإذاعي والتلفزيوني.',
    source: { file: '- 1 (1).pdf', page: 2, text: 'Playout Servers' }
  },
  {
    id: 'd6',
    term: 'NRCS Integration',
    definition: 'أنظمة الربط بين غرفة الأخبار وغرفة التحكم لنقل قوائم الأخبار بشكل تلقائي.',
    source: { file: '- 1 (1).pdf', page: 2, text: 'NRCS' }
  },
  {
    id: 'd7',
    term: '4K Ultra HD',
    definition: 'تقنية عرض بدقة 3840 × 2160 بكسل، أي أربع أضعاف دقة Full HD.',
    source: { file: '- 1 (1).pdf', page: 5, text: '4K' }
  },
  {
    id: 'd8',
    term: '8K',
    definition: 'تقنية عرض بدقة 7680 × 4320 بكسل، أحدث معايير الدقة العالية.',
    source: { file: '- 1 (1).pdf', page: 6, text: '8K' }
  }
];

export const terms: TermEntry[] = [
  {
    id: 't1',
    term: 'Analog Microphones',
    meaning: 'ميكروفونات تناظرية',
    explanation: 'ميكروفونات تقليدية تحول الصوت إلى إشارات كهربائية مستمرة قبل التحويل الرقمي.',
    source: { file: '- -1.pdf', page: 3, text: 'Analog Microphones' }
  },
  {
    id: 't2',
    term: 'Mixer',
    meaning: 'جهاز المزج',
    explanation: 'جهاز يشبه لوحة تحكم كبيرة يتحكم في مستويات الصوت من مصادر مختلفة.',
    source: { file: '- -1.pdf', page: 4, text: 'Mixer' }
  },
  {
    id: 't3',
    term: 'Transmitter',
    meaning: 'جهاز الإرسال',
    explanation: 'الوحدة التي تحول الإشارة الصوتية إلى موجة كهرومغناطيسية للبث عبر الهواء.',
    source: { file: '- -1.pdf', page: 4, text: 'Transmitter' }
  },
  {
    id: 't4',
    term: 'Automation Systems',
    meaning: 'أنظمة الأتمتة',
    explanation: 'أنظمة تتحكم في تشغيل عناصر البث بشكل تلقائي مثل Ross OverDrive و Grass Valley Ignite.',
    source: { file: '- 1 (1).pdf', page: 2, text: 'Automation Systems' }
  },
  {
    id: 't5',
    term: 'Character Generator',
    meaning: 'مولد الرسوم',
    explanation: 'أجهزة تُستخدم لإنشاء الرسوم والنصوص على الشاشة مثل Vizrt و Chyron.',
    source: { file: '- 1 (1).pdf', page: 2, text: 'Character Generator' }
  },
  {
    id: 't6',
    term: 'Deepfake',
    meaning: 'التزييف العميق',
    explanation: 'تقنية ذكاء اصطناعي تُستخدم لإنشاء صور أو فيديوهات مزيفة تبدو واقعية.',
    source: { file: '-2 ( ).pdf', page: 2, text: 'Deepfake' }
  },
  {
    id: 't7',
    term: 'Content Personalization',
    meaning: 'تخصيص المحتوى',
    explanation: 'تقنية تستخدم الذكاء الاصطناعي لتقديم محتوى مخصص لكل مستخدم بناءً على اهتماماته.',
    source: { file: '-   3.pdf', page: 2, text: 'Content Personalization' }
  }
];

export const questions: Question[] = [
  {
    id: 'q1',
    type: 'true_false',
    question: 'أول مذياع لاسلكي حقيقي بُني عام 1906 على يد المهندس الكندي ريجنالد فسندن.',
    correctAnswer: true,
    source: { file: '- -1.pdf', page: 1, text: 'أول مذياع لاسلكي حقيقي عام 1906' }
  },
  {
    id: 'q2',
    type: 'true_false',
    question: 'تقنية الكاسيت ظهرت قبل البكرة الكبيرة (Reel to Reel).',
    correctAnswer: false,
    source: { file: '- -1.pdf', page: 2, text: 'الكاسيت ظهرت بعد البكرة الكبيرة' }
  },
  {
    id: 'q3',
    type: 'true_false',
    question: 'تقنية DAB (Digital Audio Broadcasting) تقدم جودة صوت أعلى من الإذاعة التناظرية.',
    correctAnswer: true,
    source: { file: '-   3.pdf', page: 1, text: 'DAB جودة أعلى' }
  },
  {
    id: 'q4',
    type: 'true_false',
    question: 'برنامج Audacity هو برنامج احترافي مدفوع لتحرير الصوت.',
    correctAnswer: false,
    source: { file: '-   2.pdf', page: 4, text: 'Audacity مجاني ومفتوح المصدر' }
  },
  {
    id: 'q5',
    type: 'multiple_choice',
    question: 'أي من البرامج التالية يعتبر معيار صناعة الموسيقى والإذاعة الاحترافية؟',
    options: ['Adobe Audition', 'Pro Tools', 'Audacity', 'Logic Pro'],
    correctAnswer: 'Pro Tools',
    source: { file: '-   2.pdf', page: 4, text: 'Pro Tools معيار الصناعة' }
  },
  {
    id: 'q6',
    type: 'multiple_choice',
    question: 'ما هو CMS؟',
    options: [
      'نظام إدارة العملاء',
      'نظام إدارة المحتوى',
      'نظام إدارة المبيعات',
      'نظام إدارة الموارد'
    ],
    correctAnswer: 'نظام إدارة المحتوى',
    source: { file: '- 2.pdf', page: 1, text: 'CMS' }
  },
  {
    id: 'q7',
    type: 'multiple_choice',
    question: 'أي تقنية تُستخدم لعزل الخلفية الخضراء واستبدالها بخلفيات رقمية؟',
    options: ['VR', 'AR', 'Chroma Key', 'AI'],
    correctAnswer: 'Chroma Key',
    source: { file: '-2 ( ).pdf', page: 2, text: 'Chroma Key' }
  },
  {
    id: 'q8',
    type: 'fill_blank',
    question: 'تقنية _____ تُضفي عناصر رقمية على العالم الحقيقي عبر الهواتف الذكية.',
    correctAnswer: 'الواقع المعزز (AR)',
    source: { file: '- 1 (1).pdf', page: 6, text: 'AR' }
  },
  {
    id: 'q9',
    type: 'short_answer',
    question: 'ما الفرق بين الواقع المعزز AR والواقع الافتراضي VR؟',
    answer: 'الواقع المعزز AR يضيف عناصر رقمية على العالم الحقيقي، بينما الواقع الافتراضي VR يغمر المستخدم في بيئة رقمية شاملة منفصلة عن العالم الحقيقي.',
    source: { file: '- 1 (1).pdf', page: 6, text: 'الفرق بين AR و VR' }
  },
  {
    id: 'q10',
    type: 'true_false',
    question: 'تقنية 8K تبلغ دقتها 7680 × 4320 بكسل.',
    correctAnswer: true,
    source: { file: '- 1 (1).pdf', page: 6, text: '8K دقة' }
  },
  {
    id: 'q11',
    type: 'multiple_choice',
    question: 'أي من التالي ليس من منصات البث المباشر؟',
    options: ['YouTube Live', 'Twitch', 'Zoom', 'Facebook Live'],
    correctAnswer: 'Zoom',
    source: { file: '- 1 (1).pdf', page: 4, text: 'منصات البث المباشر' }
  },
  {
    id: 'q12',
    type: 'multiple_choice',
    question: 'ما هو OBS Studio؟',
    options: ['برنامج مدفوع', 'برنامج مجاني ومفتوح المصدر', 'منصة بث', 'شبكة اجتماعية'],
    correctAnswer: 'برنامج مجاني ومفتوح المصدر',
    source: { file: '- 1 (1).pdf', page: 5, text: 'OBS Studio' }
  },
  {
    id: 'q13',
    type: 'true_false',
    question: 'CRM يعني Customer Relationship Management (إدارة علاقات العملاء).',
    correctAnswer: true,
    source: { file: '10 .....  .pdf', page: 1, text: 'CRM' }
  },
  {
    id: 'q14',
    type: 'short_answer',
    question: 'اذكر ثلاثة استخدامات للذكاء الاصطناعي في الإعلام.',
    answer: '1) توليد رسوم ثلاثية الأبعاد متحركة، 2) التحكم في الكاميرات والإضاءة، 3) الترجمة الفورية وتحليل الجمهور.',
    source: { file: '-2 ( ).pdf', page: 1, text: 'استخدامات AI في الإعلام' }
  },
  {
    id: 'q15',
    type: 'multiple_choice',
    question: 'من ابتكر الرسوم البيانية في القرن الثامن عشر؟',
    options: ['فلورنس نايتينجيل', 'ويليام بلايفير', 'تشارلز باباج', 'ستيف جوبز'],
    correctAnswer: 'ويليام بلايفير',
    source: { file: '-2 ( ).pdf', page: 3, text: 'ويليام بلايفير' }
  }
];

export const flashcards: Flashcard[] = [
  {
    id: 'f1',
    front: 'متى بُني أول مذياع لاسلكي حقيقي ومن قام ببنائه؟',
    back: 'عام 1906 على يد المهندس الكندي ريجنالد فسندن.',
    source: { file: '- -1.pdf', page: 1, text: 'أول مذياع لاسلكي' }
  },
  {
    id: 'f2',
    front: 'ما هي البودكاست (Podcast)؟',
    back: 'ملف صوتي رقمي يحتوي على حلقة أو سلسلة حلقات حول موضوع محدد، يُنشر عبر الإنترنت.',
    source: { file: '-   3.pdf', page: 1, text: 'البودكاست' }
  },
  {
    id: 'f3',
    front: 'ما الفرق بين Pro Tools و Audacity؟',
    back: 'Pro Tools: معيار صناعة الموسيقى الاحترافية (مدفوع). Audacity: مجاني ومفتوح المصدر للمبتدئين.',
    source: { file: '-   2.pdf', page: 4, text: 'Pro Tools vs Audacity' }
  },
  {
    id: 'f4',
    front: 'ما هو CMS؟',
    back: 'نظام إدارة المحتوى (Content Management System) مثل WordPress و Drupal و Joomla.',
    source: { file: '- 2.pdf', page: 1, text: 'CMS' }
  },
  {
    id: 'f5',
    front: 'ما الفرق بين AR و VR؟',
    back: 'AR يضيف عناصر رقمية للعالم الحقيقي. VR يغمر المستخدم في بيئة رقمية شاملة.',
    source: { file: '- 1 (1).pdf', page: 6, text: 'AR vs VR' }
  },
  {
    id: 'f6',
    front: 'ما هي دقة 4K و 8K؟',
    back: '4K: 3840×2160 بكسل. 8K: 7680×4320 بكسل (أربع أضعاف 4K).',
    source: { file: '- 1 (1).pdf', page: 5, text: '4K و 8K' }
  },
  {
    id: 'f7',
    front: 'ما هو Chroma Key؟',
    back: 'تقنية الشاشة الخضراء لعزل الخلفية واستبدالها بخلفيات رقمية.',
    source: { file: '-2 ( ).pdf', page: 2, text: 'Chroma Key' }
  },
  {
    id: 'f8',
    front: 'ما هو CRM؟',
    back: 'إدارة علاقات العملاء (Customer Relationship Management) مثل Salesforce.',
    source: { file: '10 .....  .pdf', page: 1, text: 'CRM' }
  },
  {
    id: 'f9',
    front: 'اذكر أنظمة إدارة المحتوى الشهيرة.',
    back: 'WordPress (الأكثر شهولة)، Drupal (للمواقع الكبرى)، Joomla (توازن بين السهولة والتخصيص).',
    source: { file: '- 2.pdf', page: 1, text: 'أنظمة CMS' }
  },
  {
    id: 'f10',
    front: 'ما هو SEO؟',
    back: 'تحسين محركات البحث (Search Engine Optimization) - تقنيات لتحسين ظهور الموقع في نتائج البحث.',
    source: { file: '- 2.pdf', page: 2, text: 'SEO' }
  }
];

export const expectedQuestions: ExpectedQuestion[] = [
  {
    id: 'eq1',
    question: 'اشرح تاريخ الإذاعة من بدايتها حتى دخول الكمبيوتر.',
    reason: 'موضوع أساسي ومتكرر في المنهج، يغطي الوحدة الأولى بالكامل.',
    filesUsed: ['- -1.pdf'],
    pagesUsed: [1, 2, 3]
  },
  {
    id: 'eq2',
    question: 'ما الفرق بين برامج تحرير الصوت الرقمي المختلفة (Adobe Audition, Pro Tools, Audacity, Logic Pro)؟',
    reason: 'موضوع عملي ومتكرر، يطلب في الامتحانات بشكل متكرر.',
    filesUsed: ['-   2.pdf'],
    pagesUsed: [3, 4]
  },
  {
    id: 'eq3',
    question: 'اشرح مفهوم البودكاست وخطوات إنتاجه.',
    reason: 'موضوع حديث ومهم، يظهر في الامتحانات الحديثة.',
    filesUsed: ['-   3.pdf'],
    pagesUsed: [1, 2]
  },
  {
    id: 'eq4',
    question: 'ما هي أنظمة إدارة المحتوى CMS؟ وما أشهر الأمثلة؟',
    reason: 'موضوع أساسي في وحدة الصحافة الرقمية.',
    filesUsed: ['- 2.pdf'],
    pagesUsed: [1]
  },
  {
    id: 'eq5',
    question: 'اشرح الفرق بين الواقع المعزز AR والواقع الافتراضي VR مع أمثلة.',
    reason: 'موضوع تقني مهم وم repeated في الامتحانات.',
    filesUsed: ['- 1 (1).pdf'],
    pagesUsed: [6, 7]
  },
  {
    id: 'eq6',
    question: 'ما هي تقنيات العرض الحديثة 4K و 8K وما الفرق بينهما؟',
    reason: 'موضوع تقني متكرر في الامتحانات.',
    filesUsed: ['- 1 (1).pdf'],
    pagesUsed: [5, 6]
  },
  {
    id: 'eq7',
    question: 'اشرح مفهوم CRM وأهميته في العلاقات العامة.',
    reason: 'موضوع أساسي في وحدة العلاقات العامة.',
    filesUsed: ['10 .....  .pdf'],
    pagesUsed: [1, 2]
  },
  {
    id: 'eq8',
    question: 'ما هي استخدامات الذكاء الاصطناعي في الإعلام؟',
    reason: 'موضوع حديث ومهم جداً في المنهج الحديث.',
    filesUsed: ['-2 ( ).pdf'],
    pagesUsed: [1, 2]
  },
  {
    id: 'eq9',
    question: 'اشرح مفهوم الإنفوجرافيك وأنواعه.',
    reason: 'موضوع عملي ومتكرر في الامتحانات.',
    filesUsed: ['-2 ( ).pdf'],
    pagesUsed: [3, 4, 5]
  },
  {
    id: 'eq10',
    question: 'ما الفرق بين الإنفوجرافيك والفيديوجرافيك؟',
    reason: 'سؤال مقارنة متكرر في الامتحانات.',
    filesUsed: ['-2 ( ).pdf'],
    pagesUsed: [6]
  }
];

export const revisionItems: RevisionItem[] = [
  ...concepts.map(c => ({
    id: `ri-${c.id}`,
    title: c.term,
    content: c.explanation,
    category: 'concept' as const,
    source: c.source
  })),
  ...definitions.map(d => ({
    id: `ri-${d.id}`,
    title: d.term,
    content: d.definition,
    category: 'definition' as const,
    source: d.source
  }))
];
