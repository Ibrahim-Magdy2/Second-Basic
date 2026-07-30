const htmlRoot = document.documentElement;
const body = document.body;
const heroSlides = document.querySelectorAll('.hero-slide');
const heroPrev = document.querySelector('.hero-prev');
const heroNext = document.querySelector('.hero-next');
const heroDotsContainer = document.querySelector('.hero-dots');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialPrev = document.querySelector('.testimonial-prev');
const testimonialNext = document.querySelector('.testimonial-next');
const categoryButtons = document.querySelectorAll('.category-button');
const menuSearch = document.getElementById('menu-search');
const menuItems = document.querySelectorAll('.menu-item');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const faqItems = document.querySelectorAll('.faq-item');
const scrollTop = document.querySelector('.scroll-top');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const toggleThemeButtons = document.querySelectorAll('.toggle-theme');
const toggleLangButtons = document.querySelectorAll('.toggle-lang');
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const formFeedback = document.querySelector('.form-feedback');

const translations = {
  ar: {
    nav_home: 'الرئيسية',
    nav_features: 'المميزات',
    nav_menu: 'القائمة',
    nav_gallery: 'المعرض',
    nav_contact: 'اتصل بنا',
    button_theme: 'تبديل الوضع',
    hero_tag: 'تجربة المذاق الراقي',
    hero_title_1: 'لن تستمتع بالطعام قبل تجربة YourBrand',
    hero_desc_1: 'مطعم يعتمد على النكهات المحلية والضيافة العالمية ليصنع لحظات لا تُنسى.',
    hero_button_1: 'استكشف القائمة',
    hero_title_2: 'أجواء أنيقة ومذاق متفرد',
    hero_desc_2: 'نقدّم أطباقاً مصممة بعناية لتجمع بين التميز والجودة في كل لقمة.',
    hero_button_2: 'احجز طاولتك',
    hero_title_3: 'استمتع بسفرة مميزة في قلب المدينة',
    hero_desc_3: 'صممنا قائمة غنية بالعروض الخاصة والنكهات العصرية لتكون تجربة العشاء فريدة.',
    hero_button_3: 'عرض خاص اليوم',
    features_label: 'لماذا تختارنا',
    features_title: 'جودة عالية، تجربة فاخرة، خدمة متقنة',
    feature_1_title: 'مكونات فاخرة',
    feature_1_desc: 'نستخدم أفضل المكونات الطازجة والمنتقاة لتقديم أطباق مبدعة ولا مثيل لها.',
    feature_2_title: 'تصميم عصري',
    feature_2_desc: 'تجربة طعام تدمج بين الأناقة والراحة في مساحة ساحرة وحديثة.',
    feature_3_title: 'خدمة محترفة',
    feature_3_desc: 'فريقنا مدرب للتعامل مع الطلبات بعناية وسرعة فائقة لتلبية كل احتياجاتك.',
    about_label: 'من نحن',
    about_title: 'مطعم يجمع بين التراث والإبداع',
    about_desc: 'في YourBrand نقدم تجربة طعام متكاملة، تجمع نكهات المنطقة مع اللمسة العصرية. يحرص فريقنا على أن يتلقى كل زائر خدمة مميزة وأن يشعر بأنه في بيتٍ أنيق ودافئ.',
    about_point_1: 'قائمة مبتكرة متجددة',
    about_point_2: 'أجواء راقية وراحة تامة',
    about_point_3: 'تجربة ضيافة فردية',
    about_button: 'تواصل معنا',
    stat_1: 'طبق يومي مُعد بعناية',
    stat_2: 'عروض خاصة فريدة',
    stat_3: 'سنوات من الخبرة',
    stat_4: 'رضا العملاء بنسبة',
    menu_label: 'القائمة',
    menu_title: 'اختيار متنوع لكل ذوق',
    menu_search_placeholder: 'ابحث في القائمة',
    category_all: 'الكل',
    category_grill: 'مشاوي',
    category_salads: 'سلطات',
    category_drinks: 'مشروبات',
    category_desserts: 'حلويات',
    category_fastfood: 'وجبات سريعة',
    menu_item_1_title: 'كباب لحم',
    menu_item_1_desc: 'لحم متبل ومشوي على الفحم مع صلصة التتبيلة الخاصة.',
    menu_item_2_title: 'شيش طاووق',
    menu_item_2_desc: 'قطع دجاج متبلة ومشوية مع لمسات الليمون والقشدة.',
    menu_item_3_title: 'كفتة مشوية',
    menu_item_3_desc: 'كفتة لحم طرية تقدم مع خبز ساخن وسلطة طازجة.',
    menu_item_4_title: 'سلطة فتوش',
    menu_item_4_desc: 'خضار طازجة وصلصة سماق مميزة مع خبز محمص.',
    menu_item_5_title: 'سلطة تبولة',
    menu_item_5_desc: 'برجر، بقدونس، طماطم وزيت زيتون بنكهة منعشة.',
    menu_item_6_title: 'عصير رمان',
    menu_item_6_desc: 'عصير طبيعي بارد غني بالفيتامينات.',
    menu_item_7_title: 'قهوة عربية',
    menu_item_7_desc: 'قهوة عربية أصيلة مع الهيل والزعفران.',
    menu_item_8_title: 'بقلاوة فاخرة',
    menu_item_8_desc: 'شرائح رقائق محشوة بالفستق مع شراب العسل الدافئ.',
    menu_item_9_title: 'كنافة نابلسية',
    menu_item_9_desc: 'كنافة ذهبية سكرية مع جبن عكاوي أو قشطة.',
    menu_item_10_title: 'برغر مشوي',
    menu_item_10_desc: 'لحم طازج، جبن شيدر، وخبز محمص مع صوص خاص.',
    menu_item_11_title: 'تشيكن ستريبس',
    menu_item_11_desc: 'أصابع دجاج متبلة ومقلية تقدم مع صلصة الثوم.',
    menu_item_12_title: 'لحم بقر مشوي',
    menu_item_12_desc: 'شريحة لحم بقر مختارة تقدم مع خضار مشوية.',
    menu_item_13_title: 'ماء توت بري',
    menu_item_13_desc: 'مزيج منعش من التوت البري والليمون والنعناع.',
    menu_item_14_title: 'سلطة يونانية',
    menu_item_14_desc: 'خضار وزيتون وجبن فيتا مع صلصة زيت الزيتون.',
    menu_item_15_title: 'بيتزا مارجريتا',
    menu_item_15_desc: 'عجينة رقيقة وصلصة طماطم وجبن موزاريلا طازج.',
    menu_item_16_title: 'روبيان مشوي',
    menu_item_16_desc: 'روبيان طازج متبل يقدم مع صوص الليمون الزعتر.',
    menu_item_17_title: 'آيس كريم فانيلا',
    menu_item_17_desc: 'آيس كريم فانيليا غني مع قطع شوكولاتة بنكهة الكراميل.',
    menu_item_18_title: 'شاي نعناع',
    menu_item_18_desc: 'مزيج منعش من الشاي الأخضر والنعناع الطازج.',
    menu_item_19_title: 'سلطة سيزر',
    menu_item_19_desc: 'خس طازج، جبن بارميزان، وقطع خبز محمص مع صلصة سيزر.',
    menu_item_20_title: 'تندر فرايز',
    menu_item_20_desc: 'بطاطس مقلية مغطاة بالجبن والتوابل المقرمشة.',
    menu_item_21_title: 'لحم ضأن',
    menu_item_21_desc: 'شريحة لحم ضأن مشكلة بتوابل العائلة ومشوية بإتقان.',
    menu_item_22_title: 'كوكتيل فاخر',
    menu_item_22_desc: 'مزيج فواكه موسمية وعصائر طازجة بنكهة راقية.',
    menu_item_23_title: 'تشيز كيك بلوبيري',
    menu_item_23_desc: 'كريمة جبن ناعمة وقاعدة بسكويت مع طبقة من التوت.',
    menu_item_24_title: 'تاكو دجاج',
    menu_item_24_desc: 'قطع دجاج متبلة مع خضار طازجة وصلصة التوابل الخاصة.',
    offers_label: 'العروض الخاصة',
    offers_title: 'تجاربنا المميزة اليوم',
    offer_1_title: 'عشاء ذكريات',
    offer_1_desc: 'قائمة من 4 أطباق تشمل مقبلات، طبق رئيسي، حلوى ومشروب مميز.',
    offer_2_title: 'بوفيه المشاوي',
    offer_2_desc: 'مجموعة مشاوي ممتازة تقدم مع السلطات والصلصات الخاصة.',
    offer_3_title: 'طاولة ضيافة',
    offer_3_desc: 'تجربة طعام لعائلة أو مجموعة مع أطباق متنوعة وكبيرة.',
    gallery_label: 'المعرض',
    gallery_title: 'لقطات من أجوائنا وأطباقنا',
    gallery_caption_1: 'جلسة عائلية ساحرة',
    gallery_caption_2: 'طبق مشاوي فاخر',
    gallery_caption_3: 'الطعام المعد بحب',
    gallery_caption_4: 'جلسة رومانسية هادئة',
    gallery_caption_5: 'حلوى مميزة لأمسية خاصة',
    gallery_caption_6: 'إطلالة مثالية في المطعم',
    testimonials_label: 'آراء العملاء',
    testimonials_title: 'تجربة زوارنا هي أولويتنا',
    testimonial_text_1: 'تجربة ممتازة من البداية للنهاية. الأجواء جميلة والطعام لذيذ للغاية.',
    testimonial_person_1: 'سارة العلي',
    testimonial_text_2: 'أفضل مطعم في المدينة للحفلات العائلية. الخدمة سريعة ومحترفة.',
    testimonial_person_2: 'محمد حمد',
    testimonial_text_3: 'الأطباق جميلة ومتوازنة، والتجربة كلها كانت راقية ومريحة.',
    testimonial_person_3: 'ليلى فؤاد',
    faq_label: 'الأسئلة الشائعة',
    faq_title: 'إجابات سريعة على استفساراتك',
    faq_question_1: 'هل يمكنني الحجز عبر الإنترنت؟',
    faq_answer_1: 'نعم، يمكنك الحجز مباشرة من خلال نموذج الاتصال أو بالاتصال الهاتفي لمواعيد مرنة وسريعة.',
    faq_question_2: 'هل تتوفر خيارات نباتية؟',
    faq_answer_2: 'نعم، لدينا مجموعة واسعة من الأطباق النباتية الطازجة والمميزة تصلح لجميع الأذواق.',
    faq_question_3: 'هل يوجد موقف سيارات قريب؟',
    faq_answer_3: 'يتوفر موقف سيارات بالقرب من المطعم، كما يمكننا توجيهك لأفضل خيارات الوقوف عند التواصل.',
    faq_question_4: 'ما هي ساعات العمل؟',
    faq_answer_4: 'نفتح يومياً من الساعة 12 ظهراً حتى 12 بعد منتصف الليل لتلبية كل احتياجاتك.',
    faq_question_5: 'هل تقدمون خدمة التوصيل؟',
    faq_answer_5: 'نعم، نوفر خدمة التوصيل إلى المناطق المحيطة عبر شركائنا المحليين.',
    contact_label: 'اتصل بنا',
    contact_title: 'نحن هنا لخدمتك',
    contact_desc: 'احجز طاولتك أو أرسل استفسارك وسنعود إليك بسرعة مع أفضل الخيارات المتاحة.',
    contact_address_title: 'العنوان',
    contact_address: 'مصر,الرحاب,القاهرة',
    contact_phone_title: 'الهاتف',
    contact_email_title: 'البريد الإلكتروني',
    contact_name_label: 'الاسم الكامل',
    contact_name_placeholder: 'اكتب اسمك الكامل',
    contact_email_label: 'البريد الإلكتروني',
    contact_email_placeholder: 'اكتب بريدك الإلكتروني',
    contact_phone_label: 'رقم الهاتف',
    contact_phone_placeholder: 'اكتب رقم هاتفك',
    contact_message_label: 'رسالتك',
    contact_message_placeholder: 'اكتب رسالتك هنا',
    contact_submit: 'أرسل الآن',
    contact_success: 'تم استلام رسالتك بنجاح. سنتواصل معك قريباً.',
    contact_error: 'يرجى تعبئة جميع الحقول بشكل صحيح.',
    footer_desc: 'مزيج من الفخامة، النكهة والإتقان داخل كل وجبة.',
    footer_links_title: 'روابط سريعة',
    footer_contact_title: 'ابقَ على تواصل',
    footer_address: 'جميع الحقوق محفوظة © 2026 مطعم YourBrand',
    footer_copyright: 'مصر,الرحاب,القاهرة'
  },
  en: {
    nav_home: 'Home',
    nav_features: 'Features',
    nav_menu: 'Menu',
    nav_gallery: 'Gallery',
    nav_contact: 'Contact',
    button_theme: 'Toggle mode',
    hero_tag: 'Premium taste experience',
    hero_title_1: 'You haven’t enjoyed food until you try YourBrand',
    hero_desc_1: 'A restaurant blending local flavors with global hospitality for unforgettable moments.',
    hero_button_1: 'Explore menu',
    hero_title_2: 'Elegant atmosphere, distinct flavor',
    hero_desc_2: 'We craft dishes with care to combine excellence and quality in every bite.',
    hero_button_2: 'Reserve table',
    hero_title_3: 'Enjoy an elevated dinner in the city center',
    hero_desc_3: 'Our menu is rich with special offers and contemporary tastes for a memorable evening.',
    hero_button_3: 'Today’s special',
    features_label: 'Why choose us',
    features_title: 'Premium quality, luxurious experience, meticulous service',
    feature_1_title: 'Premium ingredients',
    feature_1_desc: 'We use the freshest, selected ingredients to create unforgettable culinary artistry.',
    feature_2_title: 'Modern design',
    feature_2_desc: 'A dining experience that blends elegance and comfort in a charming, contemporary space.',
    feature_3_title: 'Professional service',
    feature_3_desc: 'Our team is trained to handle every request carefully and quickly to fulfill your needs.',
    about_label: 'About us',
    about_title: 'A restaurant that balances heritage and creativity',
    about_desc: 'At YourBrand we deliver a complete dining experience that blends regional flavors with a modern touch. Our team ensures every guest feels welcomed in an elegant and cozy environment.',
    about_point_1: 'Innovative seasonal menu',
    about_point_2: 'Refined atmosphere and total comfort',
    about_point_3: 'Personalized hospitality experience',
    about_button: 'Get in touch',
    stat_1: 'Premium dishes prepared daily',
    stat_2: 'Exclusive special offers',
    stat_3: 'Years of experience',
    stat_4: 'Customer satisfaction rate',
    menu_label: 'Menu',
    menu_title: 'A diverse selection for every taste',
    menu_search_placeholder: 'Search the menu',
    category_all: 'All',
    category_grill: 'Grill',
    category_salads: 'Salads',
    category_drinks: 'Drinks',
    category_desserts: 'Desserts',
    category_fastfood: 'Fast food',
    menu_item_1_title: 'Lamb Kebab',
    menu_item_1_desc: 'Seasoned lamb grilled over charcoal with signature sauce.',
    menu_item_2_title: 'Shish Tawook',
    menu_item_2_desc: 'Marinated chicken pieces grilled with lemon and cream notes.',
    menu_item_3_title: 'Grilled Kofta',
    menu_item_3_desc: 'Tender beef kofta served with warm bread and fresh salad.',
    menu_item_4_title: 'Fattoush Salad',
    menu_item_4_desc: 'Fresh vegetables with sumac dressing and toasted bread.',
    menu_item_5_title: 'Tabbouleh Salad',
    menu_item_5_desc: 'Burgur, parsley, tomato, and olive oil with a refreshing taste.',
    menu_item_6_title: 'Pomegranate Juice',
    menu_item_6_desc: 'Chilled natural juice packed with vitamins.',
    menu_item_7_title: 'Arabic Coffee',
    menu_item_7_desc: 'Authentic Arabic coffee with cardamom and saffron.',
    menu_item_8_title: 'Premium Baklava',
    menu_item_8_desc: 'Layered pastry stuffed with pistachios and warm honey syrup.',
    menu_item_9_title: 'Nablusi Kunafa',
    menu_item_9_desc: 'Golden sweet kunafa with akkawi cheese or cream.',
    menu_item_10_title: 'Grilled Burger',
    menu_item_10_desc: 'Fresh beef, cheddar cheese, and toasted bun with signature sauce.',
    menu_item_11_title: 'Chicken Strips',
    menu_item_11_desc: 'Seasoned fried chicken strips served with garlic sauce.',
    menu_item_12_title: 'Grilled Beef',
    menu_item_12_desc: 'Premium beef steak served with roasted vegetables.',
    menu_item_13_title: 'Berry Water',
    menu_item_13_desc: 'Refreshing blackberry, lemon and mint blend.',
    menu_item_14_title: 'Greek Salad',
    menu_item_14_desc: 'Vegetables, olives, and feta cheese with olive oil dressing.',
    menu_item_15_title: 'Margherita Pizza',
    menu_item_15_desc: 'Thin crust with tomato sauce and fresh mozzarella.',
    menu_item_16_title: 'Grilled Shrimp',
    menu_item_16_desc: 'Fresh shrimp seasoned and served with lemon thyme sauce.',
    menu_item_17_title: 'Vanilla Ice Cream',
    menu_item_17_desc: 'Rich vanilla ice cream topped with caramelized chocolate pieces.',
    menu_item_18_title: 'Mint Tea',
    menu_item_18_desc: 'Refreshing green tea blended with fresh mint.',
    menu_item_19_title: 'Caesar Salad',
    menu_item_19_desc: 'Crisp lettuce, Parmesan cheese, and croutons with Caesar dressing.',
    menu_item_20_title: 'Tender Fries',
    menu_item_20_desc: 'Crispy fries covered in cheese and crunchy seasonings.',
    menu_item_21_title: 'Lamb Chops',
    menu_item_21_desc: 'Family-spiced lamb grilled to perfection.',
    menu_item_22_title: 'Premium Cocktail',
    menu_item_22_desc: 'Seasonal fruit blend and fresh juices with a refined flavor.',
    menu_item_23_title: 'Blueberry Cheesecake',
    menu_item_23_desc: 'Smooth cream cheese on a biscuit base topped with berries.',
    menu_item_24_title: 'Chicken Taco',
    menu_item_24_desc: 'Spiced chicken pieces with fresh vegetables and special sauce.',
    offers_label: 'Special offers',
    offers_title: 'Today’s signature experiences',
    offer_1_title: 'Memory Dinner',
    offer_1_desc: 'A 4-course menu with appetizer, entrée, dessert, and a signature drink.',
    offer_2_title: 'Grill Buffet',
    offer_2_desc: 'A premium grill selection served with salads and special sauces.',
    offer_3_title: 'Hospitality Table',
    offer_3_desc: 'A large family-style experience with varied and generous dishes.',
    gallery_label: 'Gallery',
    gallery_title: 'Scenes from our atmosphere and dishes',
    gallery_caption_1: 'Charming family gathering',
    gallery_caption_2: 'Premium grill platter',
    gallery_caption_3: 'Cooking made with love',
    gallery_caption_4: 'A serene romantic setting',
    gallery_caption_5: 'Signature dessert for a special night',
    gallery_caption_6: 'A perfect restaurant view',
    testimonials_label: 'Customer reviews',
    testimonials_title: 'Our guests’ experience comes first',
    testimonial_text_1: 'Excellent experience from start to finish. The atmosphere was beautiful and the food was incredibly tasty.',
    testimonial_person_1: 'Sarah Al Ali',
    testimonial_text_2: 'The best restaurant in town for family celebrations. Service was fast and professional.',
    testimonial_person_2: 'Mohammed Hamad',
    testimonial_text_3: 'The dishes were balanced and the overall experience was elegant and comfortable.',
    testimonial_person_3: 'Layla Fouad',
    faq_label: 'Frequently asked questions',
    faq_title: 'Quick answers to your inquiries',
    faq_question_1: 'Can I book online?',
    faq_answer_1: 'Yes, you can reserve directly through the contact form or by phone for flexible scheduling.',
    faq_question_2: 'Do you offer vegetarian options?',
    faq_answer_2: 'Yes, we provide a wide range of fresh vegetarian dishes to suit every taste.',
    faq_question_3: 'Is there nearby parking?',
    faq_answer_3: 'Parking is available near the restaurant, and we can guide you to the best options when you contact us.',
    faq_question_4: 'What are your opening hours?',
    faq_answer_4: 'We are open daily from 12 PM to 12 AM to serve your needs.',
    faq_question_5: 'Do you offer delivery?',
    faq_answer_5: 'Yes, we provide delivery to nearby areas through local partners.',
    contact_label: 'Contact us',
    contact_title: 'We are here to serve you',
    contact_desc: 'Reserve your table or send your inquiry and we will respond quickly with the best available options.',
    contact_address_title: 'Address',
    contact_address: 'Cairo, Al Rehab',
    contact_phone_title: 'Phone',
    contact_email_title: 'Email',
    contact_name_label: 'Full name',
    contact_name_placeholder: 'Enter your full name',
    contact_email_label: 'Email address',
    contact_email_placeholder: 'Enter your email',
    contact_phone_label: 'Phone number',
    contact_phone_placeholder: 'Enter your phone number',
    contact_message_label: 'Your message',
    contact_message_placeholder: 'Write your message here',
    contact_submit: 'Send now',
    contact_success: 'Your message has been received successfully. We will be in touch soon.',
    contact_error: 'Please complete all fields correctly.',
    footer_desc: 'A blend of luxury, flavor and craftsmanship in every meal.',
    footer_links_title: 'Quick links',
    footer_contact_title: 'Stay connected',
    footer_address: 'Cairo, Al Rehab',
    footer_copyright: 'All rights reserved © 2026 YourBrand Restaurant'
  }
};

let currentTheme = localStorage.getItem('alphaTheme') || 'dark';
let currentLanguage = localStorage.getItem('alphaLang') || 'ar';
let heroIndex = 0;
let heroTimer = null;
let testimonialIndex = 0;
let testimonialTimer = null;
let activeCategory = 'all';

const i18nElements = document.querySelectorAll('[data-i18n]');
const i18nPlaceholders = document.querySelectorAll('[data-i18n-placeholder]');

function applyTranslations(lang) {
  const dictionary = translations[lang] || translations.ar;

  i18nElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    const text = dictionary[key];
    if (typeof text !== 'undefined') element.textContent = text;
  });

  i18nPlaceholders.forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (!key) return;
    const placeholder = dictionary[key];
    if (typeof placeholder !== 'undefined') element.placeholder = placeholder;
  });

  heroSlides.forEach((slide) => {
    const titleKey = slide.dataset.i18nTitle;
    const descKey = slide.dataset.i18nDesc;
    const buttonKey = slide.dataset.i18nButton;
    const heading = slide.querySelector('h1');
    const description = Array.from(slide.querySelectorAll('p')).find((paragraph) => !paragraph.classList.contains('eyebrow'));
    const link = slide.querySelector('a.button-primary');

    if (titleKey && heading) heading.textContent = dictionary[titleKey] || heading.textContent;
    if (descKey && description) description.textContent = dictionary[descKey] || description.textContent;
    if (buttonKey && link) link.textContent = dictionary[buttonKey] || link.textContent;
  });

  menuItems.forEach((item) => {
    const titleKey = item.dataset.i18nTitle;
    const descKey = item.dataset.i18nDesc;
    const title = item.querySelector('h3');
    const description = item.querySelector('p');

    if (titleKey && title) title.textContent = dictionary[titleKey] || title.textContent;
    if (descKey && description) description.textContent = dictionary[descKey] || description.textContent;
  });

  testimonialCards.forEach((card) => {
    const textKey = card.dataset.i18nText;
    const nameKey = card.dataset.i18nName;
    const textElement = card.querySelector('p');
    const nameElement = card.querySelector('strong');

    if (textKey && textElement) textElement.textContent = dictionary[textKey] || textElement.textContent;
    if (nameKey && nameElement) nameElement.textContent = dictionary[nameKey] || nameElement.textContent;
  });

  galleryItems.forEach((item) => {
    const captionKey = item.dataset.i18nCaption;
    const caption = dictionary[captionKey];
    if (caption) {
      item.dataset.caption = caption;
    }
  });

  toggleLangButtons.forEach((button) => {
    button.textContent = lang === 'ar' ? 'EN' : 'AR';
    button.setAttribute('aria-label', lang === 'ar' ? 'English' : 'العربية');
  });

  htmlRoot.lang = lang === 'ar' ? 'ar' : 'en';
  htmlRoot.dir = lang === 'ar' ? 'rtl' : 'ltr';
  htmlRoot.classList.toggle('lang-en', lang === 'en');
  htmlRoot.classList.toggle('lang-ar', lang === 'ar');
}

function setTheme(theme) {
  currentTheme = theme === 'light' ? 'light' : 'dark';
  htmlRoot.classList.toggle('theme-light', currentTheme === 'light');
  htmlRoot.classList.toggle('theme-dark', currentTheme !== 'light');
  localStorage.setItem('YourBrandTheme', currentTheme);

  toggleThemeButtons.forEach((button) => {
    button.textContent = currentTheme === 'light' ? '☀️' : '🌙';
    button.setAttribute('aria-label', currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
  });
}

function setLanguage(lang) {
  currentLanguage = lang === 'en' ? 'en' : 'ar';
  localStorage.setItem('YourBrand', currentLanguage);
  applyTranslations(currentLanguage);
}

function setActiveHero(index) {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === heroIndex);
  });
  const dots = document.querySelectorAll('.hero-dot');
  dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === heroIndex));
}

function createHeroDots() {
  heroSlides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'hero-dot';
    dot.addEventListener('click', () => {
      resetHeroTimer();
      setActiveHero(index);
    });
    heroDotsContainer.appendChild(dot);
  });
}

function nextHeroSlide() {
  setActiveHero(heroIndex + 1);
}

function prevHeroSlide() {
  setActiveHero(heroIndex - 1);
}

function resetHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(nextHeroSlide, 6000);
}

function updateTestimonials() {
  testimonialCards.forEach((card, index) => card.classList.toggle('active', index === testimonialIndex));
}

function nextTestimonial() {
  testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
  updateTestimonials();
}

function prevTestimonial() {
  testimonialIndex = (testimonialIndex - 1 + testimonialCards.length) % testimonialCards.length;
  updateTestimonials();
}

function resetTestimonialTimer() {
  clearInterval(testimonialTimer);
  testimonialTimer = setInterval(nextTestimonial, 7000);
}

function updateMenuFilter() {
  const query = menuSearch.value.trim().toLowerCase();
  menuItems.forEach((item) => {
    const matchesCategory = activeCategory === 'all' || item.dataset.category === activeCategory;
    const text = item.textContent.toLowerCase();
    const matchesQuery = text.includes(query);
    item.style.display = matchesCategory && matchesQuery ? 'flex' : 'none';
  });
}

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
}

function openLightbox(imageUrl, caption) {
  lightboxImage.src = imageUrl;
  lightboxImage.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  body.style.overflow = '';
}

function validateContactForm() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const message = messageInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9+\-\s]{6,}$/;

  if (!name || !emailPattern.test(email) || !phonePattern.test(phone) || !message) {
    formFeedback.textContent = translations[currentLanguage].contact_error;
    formFeedback.style.color = '#ff8f8f';
    return false;
  }

  formFeedback.textContent = translations[currentLanguage].contact_success;
  formFeedback.style.color = '#a6f1b6';
  return true;
}

function initScrollAnimations() {
  const observedSections = Array.from(document.querySelectorAll('.section:not(.hero-section)'));
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  observedSections.forEach((section) => observer.observe(section));
}

function init() {
  setTheme(currentTheme);
  setLanguage(currentLanguage);
  createHeroDots();
  setActiveHero(0);
  heroTimer = setInterval(nextHeroSlide, 6000);
  testimonialTimer = setInterval(nextTestimonial, 7000);
  initScrollAnimations();
  updateMenuFilter();

  heroNext.addEventListener('click', () => {
    nextHeroSlide();
    resetHeroTimer();
  });

  heroPrev.addEventListener('click', () => {
    prevHeroSlide();
    resetHeroTimer();
  });

  testimonialNext.addEventListener('click', () => {
    nextTestimonial();
    resetTestimonialTimer();
  });

  testimonialPrev.addEventListener('click', () => {
    prevTestimonial();
    resetTestimonialTimer();
  });

  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      categoryButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      activeCategory = button.dataset.category;
      updateMenuFilter();
    });
  });

  menuSearch.addEventListener('input', updateMenuFilter);

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      openLightbox(item.dataset.image, item.dataset.caption);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });

  faqItems.forEach((item) => {
    const button = item.querySelector('.faq-question');
    button.addEventListener('click', () => {
      faqItems.forEach((other) => {
        if (other !== item) other.classList.remove('open');
      });
      item.classList.toggle('open');
    });
  });

  scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('show', window.scrollY > 450);
  });

  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  document.querySelectorAll('.mobile-menu a').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  toggleThemeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
  });

  toggleLangButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(currentLanguage === 'ar' ? 'en' : 'ar');
    });
  });

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateContactForm()) {
      if (validateContactForm()) {

  const text = `الاسم: ${nameInput.value}
البريد: ${emailInput.value}
الهاتف: ${phoneInput.value}

الرسالة:
${messageInput.value}`;

  window.open(
    `https://wa.me/201014053954?text=${encodeURIComponent(text)}`,
    "_blank"
  );

  contactForm.reset();
}
    }
  });

  window.addEventListener('load', () => {
    setTheme(currentTheme);
    setLanguage(currentLanguage);
  });
}

init();
