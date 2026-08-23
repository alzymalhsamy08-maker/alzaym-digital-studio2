document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const fastPage = document.getElementById("fastPage");
  const openFast = document.getElementById("openFast");
  const fastClose = document.getElementById("fastClose");
  const closeFastPage2 = document.getElementById("closeFastPage2");
  const fastStart = document.getElementById("fastStart");
  const clientForm = document.getElementById("clientForm");
  const languageButtons = document.querySelectorAll(".language-button");

  let activeLanguage =
    localStorage.getItem("alzaym-language") ||
    (navigator.language.startsWith("ar") ? "ar" : "en");

  const copy = {
    en: {
      loaderText: "DIGITAL COMMERCE & BUSINESS SYSTEMS",
      navLabel: "DIGITAL BUSINESS STUDIO",
      navLink: "START A PROJECT ↗",
      heroMeta: [
        "01 / DIGITAL BUSINESS SYSTEMS",
        "SAUDI ARABIA · EVERYWHERE"
      ],
      eyebrow: "BUILT FOR LOCAL BUSINESSES THAT WANT TO GROW",
      heroTitle: "WE BUILD <span>BUSINESS</span> SYSTEMS<span class=\"dot\">.</span>",
      heroDescription:
        "Custom websites, online stores and connected digital systems for stores, restaurants, cafés, hotels and growing businesses.",
      heroButton: "EXPLORE OUR WORK <span>↓</span>",
      statementLabel: "02 / WHAT WE BUILD",
      statementTitle: "MORE THAN A <span>BEAUTIFUL WEBSITE.</span>",
      statementText:
        "We create digital systems that help businesses sell, manage orders, build customer loyalty and deliver a smoother experience online and in-store.",
      servicesLabel: "03 / OUR SERVICES",
      servicesTitles: [
        "CUSTOM <em>WEBSITES</em>",
        "ONLINE <em>STORES</em>",
        "SALES <em>SYSTEMS</em>",
        "LOYALTY & <em>DELIVERY</em>"
      ],
      servicesText: [
        "Professional websites tailored to your brand, services and customers.",
        "E-commerce stores with secure payment options, products and order management.",
        "Connected POS, inventory and sales systems built for daily operations.",
        "Loyalty, pickup, home delivery and order-tracking experiences for modern retail."
      ],
      workLabel: "04 / DIGITAL EXPERIENCES",
      workTitle: "BUILT FOR <span>BUSINESS.</span>",
      workText:
        "Digital product concepts for commerce, retail operations and better customer experiences.",
      projectImageLabels: [
        "DELIVERY PLATFORM · IN DEVELOPMENT",
        "COMMERCE EXPERIENCE"
      ],
      projectNames: ["FAST.", "ALZAYM COMMERCE", "RETAIL OS"],
      projectSummaries: [
        "A delivery platform currently in development for online ordering, pickup, home delivery and live order tracking.",
        "An e-commerce concept for product discovery, secure online payments and simple order management.",
        "A business system concept bringing sales, inventory and customer loyalty together."
      ],
      projectMeta: [
        ["PRODUCT IN DEVELOPMENT", "WEB APP · 2026"],
        ["E-COMMERCE CONCEPT", "WEB STORE · 2026"],
        ["BUSINESS SYSTEM CONCEPT", "POS · INVENTORY · LOYALTY"]
      ],
      philosophyLabel: "05 / THE ALZAYM WAY",
      philosophyWords: [
        "DESIGN<span>.</span>",
        "CONNECT<span>.</span>",
        "GROW<span>.</span>"
      ],
      processLabel: "06 / HOW WE WORK",
      processTitle: "FROM IDEA <span>TO IMPACT.</span>",
      processText:
        "A clear process built around your business goals, your customers and the way you work every day.",
      processTitles: ["DISCOVER", "PLAN", "BUILD", "LAUNCH"],
      processTexts: [
        "We understand your business, customers and what needs to improve.",
        "We map the right website, store or system before we build.",
        "We design and develop a polished experience around your workflow.",
        "We help you launch with confidence and prepare for what comes next."
      ],
      contactLabel: "07 / START A PROJECT",
      contactTitle: "READY TO <span>GROW?</span>",
      contactText:
        "Tell us about your business, your customers and the digital experience you want to build.",
      contactButton: "LET'S TALK ↗",
      footerText: "DIGITAL COMMERCE & BUSINESS SYSTEMS",
      footerCopyright: "© 2026 ALZAYM DIGITAL STUDIO",
      formLabel: "08 / START YOUR PROJECT",
      formTitle: "LET'S BUILD <span>SOMETHING.</span>",
      formText:
        "Tell us about your idea and business, and we will help turn it into a practical digital solution.",
      formLabels: [
        "Your name",
        "Phone number",
        "Project type",
        "Estimated budget",
        "Tell us about your project"
      ],
      formPlaceholders: [
        "Mohammed",
        "05xxxxxxxx",
        "Write your idea, required services and how your business works..."
      ],
      formButton: "SEND PROJECT REQUEST <span>↗</span>",
      serviceOptions: [
        "Choose a project type",
        "Professional website",
        "Online store",
        "POS & sales system",
        "Inventory & loyalty system",
        "App or platform",
        "Ordering & delivery",
        "Other"
      ],
      budgetLabel: "Choose a budget",
      budgetOptions: [
        "Less than SAR 1,000",
        "SAR 1,000 – 2,000",
        "SAR 2,000 – 5,000",
        "SAR 5,000 – 10,000",
        "More than SAR 10,000"
      ],
      fastTop: [
        "01 / ALZAYM PRODUCT CONCEPT",
        "FAST · IN DEVELOPMENT"
      ],
      fastLabel: "DELIVERY, PICKUP & ORDER TRACKING",
      fastDescription:
        "A delivery platform concept currently being prepared for development, designed for online ordering, pickup, home delivery and live order tracking.",
      fastStart: "EXPLORE FAST ↗",
      fastWelcome: ["WELCOME BACK", "What do you<br>need today?"],
      fastSearch: "⌕ Search stores",
      fastNear: "NEAR YOU",
      fastProducts: [
        ["Fresh Market", "Groceries · 1.2 km", "4.9 ★"],
        ["Daily Store", "Market · 0.8 km", "4.8 ★"],
        ["Quick Shop", "Everything · 2.1 km", "4.7 ★"]
      ],
      fastCards: [
        ["DISCOVER", "Find stores and products near you."],
        ["ORDER", "Order for pickup or home delivery."],
        ["TRACK", "Follow your order from store to door."]
      ],
      fastAction: "START A PROJECT ↗",
      fastBack: "BACK TO ALZAYM"
    },

    ar: {
      loaderText: "حلول رقمية للتجارة وإدارة الأعمال",
      navLabel: "استوديو حلول رقمية",
      navLink: "ابدأ مشروعك ↗",
      heroMeta: [
        "٠١ / حلول رقمية للأعمال",
        "المملكة العربية السعودية · جميع المدن"
      ],
      eyebrow: "حلول رقمية للمتاجر والشركات التي تريد النمو",
      heroTitle: "نبني <span>حلولًا رقمية</span> تنمو معك<span class=\"dot\">.</span>",
      heroDescription:
        "نصمم مواقع ومتاجر إلكترونية وأنظمة متكاملة للمتاجر والمطاعم والكافيهات والفنادق والشركات الصغيرة.",
      heroButton: "استكشف أعمالنا <span>↓</span>",
      statementLabel: "٠٢ / ماذا نبني",
      statementTitle: "أكثر من <span>مجرد موقع جميل.</span>",
      statementText:
        "نبني أنظمة رقمية تساعد نشاطك على البيع وإدارة الطلبات والمخزون وبرامج الولاء وتقديم تجربة أفضل لعملائك في المتجر وعبر الإنترنت.",
      servicesLabel: "٠٣ / خدماتنا",
      servicesTitles: [
        "مواقع <em>احترافية</em>",
        "متاجر <em>إلكترونية</em>",
        "أنظمة <em>مبيعات</em>",
        "ولاء <em>وتوصيل</em>"
      ],
      servicesText: [
        "مواقع احترافية مصممة حسب هوية نشاطك وخدماتك واحتياج عملائك.",
        "متاجر إلكترونية تشمل الدفع الإلكتروني وإدارة المنتجات والطلبات.",
        "أنظمة كاشير ومبيعات ومخزون تساعدك على إدارة نشاطك اليومي بوضوح.",
        "برامج ولاء وطلبات واستلام وتوصيل منزلي مع متابعة حالة الطلب."
      ],
      workLabel: "٠٤ / تجارب رقمية",
      workTitle: "حلول تدعم <span>نمو عملك.</span>",
      workText:
        "نماذج ومنتجات رقمية للتجارة وإدارة عمليات البيع وتحسين تجربة العملاء.",
      projectImageLabels: [
        "منصة توصيل · قيد التطوير",
        "تجربة تجارة إلكترونية"
      ],
      projectNames: ["فاست.", "تجارة الزعيم", "نظام التجزئة"],
      projectSummaries: [
        "منصة قيد التطوير للطلبات والاستلام والتوصيل المنزلي ومتابعة حالة الطلب مباشرة.",
        "نموذج متجر إلكتروني للدفع الآمن واكتشاف المنتجات وإدارة الطلبات بسهولة.",
        "نموذج نظام يجمع المبيعات والمخزون وبرنامج الولاء في تجربة واحدة."
      ],
      projectMeta: [
        ["منتج قيد التطوير", "تطبيق ويب · ٢٠٢٦"],
        ["نموذج متجر إلكتروني", "متجر رقمي · ٢٠٢٦"],
        ["نموذج نظام أعمال", "مبيعات · مخزون · ولاء"]
      ],
      philosophyLabel: "٠٥ / أسلوب الزعيم",
      philosophyWords: [
        "نصمم<span>.</span>",
        "نربط<span>.</span>",
        "ننمو<span>.</span>"
      ],
      processLabel: "٠٦ / كيف نعمل",
      processTitle: "من الفكرة <span>إلى أثر حقيقي.</span>",
      processText:
        "عملية واضحة تبدأ بأهداف نشاطك وعملائك، ثم تتحول إلى حل رقمي يناسب طريقة عملك.",
      processTitles: ["نفهم", "نخطط", "نبني", "نطلق"],
      processTexts: [
        "نتعرف على نشاطك وعملائك وما يحتاج إلى تطوير.",
        "نحدد الموقع أو المتجر أو النظام المناسب قبل بدء التنفيذ.",
        "نصمم ونطوّر تجربة عملية تناسب سير العمل اليومي.",
        "نساعدك على الإطلاق بثقة والاستعداد للنمو القادم."
      ],
      contactLabel: "٠٧ / ابدأ مشروعك",
      contactTitle: "جاهز <span>للنمو؟</span>",
      contactText:
        "أخبرنا عن نشاطك وعملائك والفكرة التي تريد تحويلها إلى تجربة رقمية.",
      contactButton: "تحدث معنا ↗",
      footerText: "حلول رقمية للتجارة وإدارة الأعمال",
      footerCopyright: "© ٢٠٢٦ استوديو الزعيم الرقمي",
      formLabel: "٠٨ / ابدأ مشروعك",
      formTitle: "لنصنع <span>شيئًا مميزًا.</span>",
      formText:
        "أخبرنا عن فكرتك ونشاطك، وسنساعدك على تحويلها إلى موقع أو متجر أو نظام رقمي عملي.",
      formLabels: [
        "اسمك",
        "رقم التواصل",
        "نوع المشروع",
        "الميزانية التقريبية",
        "حدثنا عن مشروعك"
      ],
      formPlaceholders: [
        "محمد",
        "05xxxxxxxx",
        "اكتب فكرتك والخدمات المطلوبة وطريقة عمل نشاطك..."
      ],
      formButton: "أرسل طلب المشروع <span>↗</span>",
      serviceOptions: [
        "اختر نوع المشروع",
        "موقع إلكتروني احترافي",
        "متجر إلكتروني",
        "نظام كاشير ومبيعات",
        "نظام مخزون وولاء",
        "تطبيق أو منصة",
        "طلبات وتوصيل",
        "مشروع آخر"
      ],
      budgetLabel: "اختر الميزانية",
      budgetOptions: [
        "أقل من ١٬٠٠٠ ريال",
        "١٬٠٠٠ – ٢٬٠٠٠ ريال",
        "٢٬٠٠٠ – ٥٬٠٠٠ ريال",
        "٥٬٠٠٠ – ١٠٬٠٠٠ ريال",
        "أكثر من ١٠٬٠٠٠ ريال"
      ],
      fastTop: [
        "٠١ / نموذج منتج من الزعيم",
        "فاست · قيد التطوير"
      ],
      fastLabel: "طلبات · استلام · توصيل · تتبع",
      fastDescription:
        "منصة توصيل يجري إعدادها للتطوير، مصممة للطلبات عبر الإنترنت والاستلام من المتجر والتوصيل المنزلي ومتابعة الطلب.",
      fastStart: "استكشف فاست ↗",
      fastWelcome: ["مرحبًا بعودتك", "ماذا تحتاج<br>اليوم؟"],
      fastSearch: "⌕ ابحث عن متجر",
      fastNear: "بالقرب منك",
      fastProducts: [
        ["سوق طازج", "بقالة · ١٫٢ كم", "★ ٤٫٩"],
        ["المتجر اليومي", "متجر · ٠٫٨ كم", "★ ٤٫٨"],
        ["التسوق السريع", "احتياجات متنوعة · ٢٫١ كم", "★ ٤٫٧"]
      ],
      fastCards: [
        ["اكتشف", "اعثر على المتاجر والمنتجات القريبة منك."],
        ["اطلب", "اطلب للاستلام أو التوصيل إلى المنزل."],
        ["تابع", "تابع طلبك من المتجر حتى باب المنزل."]
      ],
      fastAction: "ابدأ مشروعك ↗",
      fastBack: "العودة إلى الزعيم"
    }
  };

  function set(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
  }

  function setAll(selector, values) {
    document.querySelectorAll(selector).forEach(function (element, index) {
      if (values[index] !== undefined) {
        element.innerHTML = values[index];
      }
    });
  }

  function applyLanguage(language) {
    const t = copy[language];
    const isArabic = language === "ar";

    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.body.classList.toggle("language-ar", isArabic);

    set(".loader-text", t.loaderText);
    set(".nav-label", t.navLabel);
    set(".nav-link", t.navLink);
    setAll(".hero-meta span", t.heroMeta);
    set(".eyebrow", t.eyebrow);
    set(".hero h1", t.heroTitle);
    set(".hero-description", t.heroDescription);
    set(".hero-button", t.heroButton);

    set(".statement .label", t.statementLabel);
    set(".statement h2", t.statementTitle);
    set(".statement p", t.statementText);

    set(".services > .label", t.servicesLabel);
    setAll(".service h3", t.servicesTitles);
    setAll(".service p", t.servicesText);

    set(".work > .label", t.workLabel);
    set(".work-title h2", t.workTitle);
    set(".work-title p", t.workText);

    setAll(".project-image small", t.projectImageLabels);
    setAll(".project-info strong", t.projectNames);
    setAll(".project-summary", t.projectSummaries);

    document.querySelectorAll(".project-meta").forEach(function (meta, index) {
      const labels = t.projectMeta[index];
      if (!labels) return;

      meta.innerHTML = "<span>" + labels[0] + "</span><span>" + labels[1] + "</span>";
    });

    set(".philosophy .label", t.philosophyLabel);
    setAll(".words div", t.philosophyWords);

    set(".process .label", t.processLabel);
    set(".process-heading h2", t.processTitle);
    set(".process-heading p", t.processText);
    setAll(".process-step h3", t.processTitles);
    setAll(".process-step p", t.processTexts);

    set(".contact .label", t.contactLabel);
    set(".contact h2", t.contactTitle);
    set(".contact p", t.contactText);
    set(".contact-button", t.contactButton);

    set("footer > p", t.footerText);
    set("footer > small", t.footerCopyright);
    set(".project-form-section .label", t.formLabel);
    set(".form-heading h2", t.formTitle);
    set(".form-heading p", t.formText);
    setAll(".input-group label", t.formLabels);

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const details = document.getElementById("details");

    if (name) name.placeholder = t.formPlaceholders[0];
    if (phone) phone.placeholder = t.formPlaceholders[1];
    if (details) details.placeholder = t.formPlaceholders[2];

    const service = document.getElementById("service");
    if (service) {
      service.innerHTML = t.serviceOptions.map(function (option, index) {
        return '<option value="' + option + '"' + (index === 0 ? " selected" : "") + ">" + option + "</option>";
      }).join("");
    }

    const budget = document.getElementById("budget");
    if (budget) {
      const options = [t.budgetLabel].concat(t.budgetOptions);

      budget.innerHTML = options.map(function (option, index) {
        return '<option value="' + (index === 0 ? "" : option) + '"' + (index === 0 ? " selected" : "") + ">" + option + "</option>";
      }).join("");
    }

    set(".submit-project", t.formButton);

    setAll(".fast-top span", t.fastTop);
    set(".fast-label", t.fastLabel);
    set(".fast-hero h1", isArabic ? "فاست<span>.</span>" : "FAST<span>.</span>");
    set(".fast-hero p", t.fastDescription);
    set(".fast-start", t.fastStart);
    set(".fast-welcome small", t.fastWelcome[0]);
    set(".fast-welcome strong", t.fastWelcome[1]);
    set(".fast-search", t.fastSearch);
    set(".fast-section-title", t.fastNear);

    document.querySelectorAll(".fast-product").forEach(function (product, index) {
      const item = t.fastProducts[index];
      if (!item) return;

      setFastProduct(product, item);
    });

    document.querySelectorAll(".fast-card").forEach(function (card, index) {
      const item = t.fastCards[index];
      if (!item) return;

      const title = card.querySelector("strong");
      const text = card.querySelector("p");

      if (title) title.textContent = item[0];
      if (text) text.textContent = item[1];
    });

    set(".fast-page-actions a", t.fastAction);
    set("#closeFastPage2", t.fastBack);

    languageButtons.forEach(function (button) {
      const selected = button.dataset.language === language;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", selected ? "true" : "false");
    });

    activeLanguage = language;
    localStorage.setItem("alzaym-language", language);
  }

  function setFastProduct(product, item) {
    const title = product.querySelector("span");
    const subtitle = product.querySelector("small");
    const rating = product.querySelector("b");

    if (title) title.textContent = item[0];
    if (subtitle) subtitle.textContent = item[1];
    if (rating) rating.textContent = item[2];
  }

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.dataset.language);
    });
  });

  applyLanguage(activeLanguage);

  window.setTimeout(function () {
    if (!loader) return;

    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    window.setTimeout(function () {
      loader.style.display = "none";
    }, 500);
  }, 700);

  function openFastPage() {
    if (!fastPage) return;

    fastPage.style.display = "block";
    fastPage.classList.add("active");
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeFastPage() {
    if (!fastPage) return;

    fastPage.classList.remove("active");
    fastPage.style.display = "none";
    document.body.style.overflow = "";
  }

  if (fastPage) {
    fastPage.style.display = "none";

    const fastContactLink = fastPage.querySelector('a[href="#contact"]');
    if (fastContactLink) {
      fastContactLink.addEventListener("click", closeFastPage);
    }
  }

  if (openFast) {
    openFast.addEventListener("click", openFastPage);

    openFast.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openFastPage();
      }
    });
  }

  if (fastClose) fastClose.addEventListener("click", closeFastPage);
  if (closeFastPage2) closeFastPage2.addEventListener("click", closeFastPage);

  if (fastStart) {
    fastStart.addEventListener("click", function () {
      const device = document.getElementById("fastDevice");
      if (device) device.classList.add("active");
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeFastPage();
  });

  if (clientForm) {
  clientForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const service = document.getElementById("service");
    const budget = document.getElementById("budget");
    const details = document.getElementById("details");

    const isArabic = activeLanguage === "ar";

    const payload = {
      name: name ? name.value : "",
      phone: phone ? phone.value : "",
      email: "",
      projectType: service ? service.value : "",
      budget: budget ? budget.value : "",
      details: details ? details.value : ""
    };

    const message = isArabic
      ? [
          "طلب مشروع جديد من موقع ALZAYM",
          "",
          "الاسم: " + payload.name,
          "رقم التواصل: " + payload.phone,
          "نوع المشروع: " + payload.projectType,
          "الميزانية: " + payload.budget,
          "التفاصيل: " + payload.details
        ].join("\n")
      : [
          "New project request from ALZAYM",
          "",
          "Name: " + payload.name,
          "Phone: " + payload.phone,
          "Project type: " + payload.projectType,
          "Estimated budget: " + payload.budget,
          "Details: " + payload.details
        ].join("\n");

    try {
      await fetch(
        "https://alzaymdigital.app.n8n.cloud/webhook/alzaym-lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      );

      window.open(
        "https://wa.me/966596100109?text=" + encodeURIComponent(message),
        "_blank"
      );

      clientForm.reset();

    } catch (error) {
      console.error("n8n error:", error);

      window.open(
        "https://wa.me/966596100109?text=" + encodeURIComponent(message),
        "_blank"
      );
    }
  });
}
  });
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  if (!themeToggle || !themeIcon) return;

  const savedTheme = localStorage.getItem("alzaym-theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  function applyTheme(theme) {
    const isLight = theme === "light";

    document.body.classList.toggle("light-theme", isLight);
    themeIcon.textContent = isLight ? "☾" : "☼";

    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark mode" : "Switch to light mode"
    );

    localStorage.setItem("alzaym-theme", theme);
  }

  applyTheme(savedTheme || (prefersLight ? "light" : "dark"));

  themeToggle.addEventListener("click", function () {
    const nextTheme = document.body.classList.contains("light-theme")
      ? "dark"
      : "light";

    applyTheme(nextTheme);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const ecosystem = document.getElementById("ecosystem");
  const panel = document.getElementById("featurePanel");
  const closeButton = document.getElementById("featureClose");
  const preview = document.getElementById("featurePreview");
  const number = document.getElementById("featureNumber");
  const title = document.getElementById("featureTitle");
  const description = document.getElementById("featureDescription");
  const list = document.getElementById("featureList");
  const triggers = document.querySelectorAll("[data-feature]");

  if (!ecosystem || !panel) return;

  let activeFeature = null;

  const features = {
    payment: {
      en: {
        number: "01 / ONLINE PAYMENT",
        title: "PAYMENT MADE SIMPLE.",
        description: "Give customers a clear and trusted online payment experience inside your store.",
        list: ["Secure checkout flow", "Payment options for your customers", "Orders connected to your business workflow"],
        visual: "payment"
      },
      ar: {
        number: "٠١ / الدفع الإلكتروني",
        title: "دفع سهل وآمن.",
        description: "امنح عملاءك تجربة دفع إلكتروني واضحة وموثوقة داخل متجرك.",
        list: ["خطوات شراء ودفع سهلة", "خيارات دفع مناسبة لعملائك", "ربط الطلبات بسير عمل نشاطك"],
        visual: "payment"
      }
    },

    pos: {
      en: {
        number: "02 / POS SYSTEM",
        title: "SALES IN ONE PLACE.",
        description: "A connected point-of-sale experience that helps your team manage daily sales clearly.",
        list: ["Fast checkout workflow", "Connected product information", "Clear daily sales overview"],
        visual: "pos"
      },
      ar: {
        number: "٠٢ / نظام الكاشير",
        title: "مبيعاتك في مكان واحد.",
        description: "تجربة كاشير مترابطة تساعد فريقك على إدارة المبيعات اليومية بوضوح.",
        list: ["إتمام البيع بسرعة", "بيانات منتجات مترابطة", "نظرة واضحة للمبيعات اليومية"],
        visual: "pos"
      }
    },

    loyalty: {
      en: {
        number: "03 / LOYALTY PROGRAM",
        title: "TURN VISITS INTO LOYALTY.",
        description: "Create a branded loyalty experience that gives customers a reason to return.",
        list: ["Digital loyalty card for your store", "Reward points and repeat visits", "A stronger customer relationship"],
        visual: "loyalty"
      },
      ar: {
        number: "٠٣ / برنامج الولاء",
        title: "حوّل الزيارات إلى ولاء.",
        description: "أنشئ تجربة ولاء باسم متجرك تمنح العملاء سببًا للعودة مرة أخرى.",
        list: ["بطاقة ولاء رقمية باسم متجرك", "نقاط ومكافآت للعميل", "علاقة أقوى مع عملائك"],
        visual: "loyalty"
      }
    },

    delivery: {
      en: {
        number: "04 / DELIVERY TRACKING",
        title: "FROM ORDER TO DOOR.",
        description: "Help customers place orders, choose delivery and follow the journey with clarity.",
        list: ["Ordering from website or store", "Pickup or home delivery options", "Clear order-status tracking"],
        visual: "delivery"
      },
      ar: {
        number: "٠٤ / التوصيل وتتبع الطلب",
        title: "من الطلب حتى باب العميل.",
        description: "ساعد عملاءك على الطلب واختيار التوصيل ومتابعة حالة الطلب بوضوح.",
        list: ["الطلب من الموقع أو المتجر", "استلام من الفرع أو توصيل منزلي", "متابعة واضحة لحالة الطلب"],
        visual: "delivery"
      }
    },

    store: {
      en: {
        number: "05 / RETAIL STORE",
        title: "A STORE THAT WORKS TOGETHER.",
        description: "Connect your online store, products, payments and customer experience in one system.",
        list: ["Online product catalogue", "Payments and order management", "A foundation for future growth"],
        visual: "payment"
      },
      ar: {
        number: "٠٥ / المتاجر",
        title: "متجر يعمل كمنظومة واحدة.",
        description: "اربط متجرك الإلكتروني ومنتجاتك ودفعك وتجربة عميلك في نظام واحد.",
        list: ["عرض منظم للمنتجات", "دفع وإدارة للطلبات", "أساس واضح لنمو نشاطك"],
        visual: "payment"
      }
    },

    restaurant: {
      en: {
        number: "06 / RESTAURANTS",
        title: "ORDERS WITHOUT THE CHAOS.",
        description: "Build a smoother ordering experience for restaurants, pickup and home delivery.",
        list: ["Digital menu and online orders", "Pickup and delivery options", "Order progress for customers"],
        visual: "delivery"
      },
      ar: {
        number: "٠٦ / المطاعم",
        title: "طلبات بدون فوضى.",
        description: "ابنِ تجربة طلبات أسهل للمطاعم والاستلام والتوصيل المنزلي.",
        list: ["منيو رقمي وطلبات عبر الإنترنت", "استلام أو توصيل", "متابعة حالة الطلب للعميل"],
        visual: "delivery"
      }
    },

    cafe: {
      en: {
        number: "07 / CAFÉS",
        title: "MAKE EVERY VISIT COUNT.",
        description: "Use loyalty and easy ordering to create a more personal café experience.",
        list: ["Digital loyalty card", "Rewards for returning customers", "Simple ordering experience"],
        visual: "loyalty"
      },
      ar: {
        number: "٠٧ / الكافيهات",
        title: "اجعل كل زيارة لها قيمة.",
        description: "استخدم الولاء والطلبات السهلة لصنع تجربة أقرب لعملاء الكافيه.",
        list: ["بطاقة ولاء رقمية", "مكافآت للعملاء المتكررين", "تجربة طلب سهلة"],
        visual: "loyalty"
      }
    },

    hotel: {
      en: {
        number: "08 / HOTELS",
        title: "A BETTER GUEST EXPERIENCE.",
        description: "Digital services can make guest requests, payments and communication feel simpler.",
        list: ["Clear service requests", "Digital payment flow", "Better guest communication"],
        visual: "pos"
      },
      ar: {
        number: "٠٨ / الفنادق",
        title: "تجربة ضيف أفضل.",
        description: "الخدمات الرقمية تجعل طلبات الضيف والدفع والتواصل أكثر سهولة ووضوحًا.",
        list: ["طلبات خدمة واضحة", "تجربة دفع رقمية", "تواصل أفضل مع الضيف"],
        visual: "pos"
      }
    }
  };

  function createVisual(type) {
    if (type === "loyalty") {
      return `
        <div class="loyalty-visual">
          <div class="loyalty-brand">YOUR STORE</div>
          <div class="loyalty-name"></div>
          <div class="loyalty-points">
            <i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
        </div>
      `;
    }

    if (type === "delivery") {
      return `
        <div class="delivery-visual">
          <div class="delivery-route"><i></i></div>
          <div class="delivery-point start"></div>
          <div class="delivery-point end"></div>
          <div class="delivery-status"></div>
        </div>
      `;
    }

    if (type === "payment") {
      return `
        <div class="payment-visual">
          <div class="payment-chip"></div>
          <div class="payment-line"></div>
          <div class="payment-line short"></div>
        </div>
      `;
    }

    return `
      <div class="pos-visual">
        <div class="pos-screen">
          <i></i><i></i><i></i>
        </div>
        <div class="pos-keys">
          <i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i>
        </div>
      </div>
    `;
  }

  function showFeature(key) {
    const isArabic = document.body.classList.contains("language-ar");
    const data = features[key][isArabic ? "ar" : "en"];

    activeFeature = key;

    number.textContent = data.number;
    title.textContent = data.title;
    description.textContent = data.description;
    preview.innerHTML = createVisual(data.visual);

    list.innerHTML = data.list
      .map(function (item) {
        return "<li>" + item + "</li>";
      })
      .join("");

    panel.classList.add("active");

    triggers.forEach(function (trigger) {
      trigger.classList.toggle("is-active", trigger.dataset.feature === key);
    });
  }

  function hideFeature() {
    activeFeature = null;
    panel.classList.remove("active");

    triggers.forEach(function (trigger) {
      trigger.classList.remove("is-active");
    });
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      const key = trigger.dataset.feature;

      if (activeFeature === key) {
        hideFeature();
      } else {
        showFeature(key);
      }
    });

    trigger.addEventListener("mouseenter", function () {
      const desktopHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

      if (desktopHover) {
        showFeature(trigger.dataset.feature);
      }
    });
  });

  ecosystem.addEventListener("mouseleave", function () {
    const desktopHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (desktopHover) {
      hideFeature();
    }
  });

  if (closeButton) {
    closeButton.addEventListener("click", hideFeature);
  }

  document.querySelectorAll(".language-button").forEach(function (button) {
    button.addEventListener("click", function () {
      if (activeFeature) {
        showFeature(activeFeature);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const builder = document.getElementById("solutionBuilder");
  const businessButtons = document.querySelectorAll(".business-option");
  const moduleButtons = document.querySelectorAll(".module-option");
  const summary = document.getElementById("builderSummary");
  const whatsappButton = document.getElementById("builderWhatsapp");

  if (!builder || !summary || !whatsappButton) return;

  let selectedBusiness = "";
  let selectedModules = [];

  const recommendations = {
    store: ["website", "store", "payment", "pos", "loyalty"],
    restaurant: ["website", "store", "payment", "pos", "delivery"],
    cafe: ["website", "payment", "pos", "loyalty"],
    hotel: ["website", "payment", "pos", "loyalty", "delivery"]
  };

  const names = {
    en: {
      store: "Store",
      restaurant: "Restaurant",
      cafe: "Café",
      hotel: "Hotel",
      website: "Website",
      payment: "Online payment",
      pos: "POS system",
      loyalty: "Loyalty program",
      delivery: "Delivery",
      noSelection: "Choose your business to see a recommended system.",
      selected: "Your recommended system includes"
    },
    ar: {
      store: "متجر",
      restaurant: "مطعم",
      cafe: "كافيه",
      hotel: "فندق",
      website: "موقع إلكتروني",
      payment: "دفع إلكتروني",
      pos: "نظام كاشير",
      loyalty: "برنامج ولاء",
      delivery: "توصيل وتتبع الطلبات",
      noSelection: "اختر نوع نشاطك لتظهر لك مكونات النظام المناسبة.",
      selected: "النظام المقترح لنشاطك يشمل"
    }
  };

  function isArabic() {
    return document.body.classList.contains("language-ar");
  }

  function renderBuilder() {
    const language = isArabic() ? "ar" : "en";
    const text = names[language];

    businessButtons.forEach(function (button) {
      button.classList.toggle(
        "is-active",
        button.dataset.business === selectedBusiness
      );
    });

    moduleButtons.forEach(function (button) {
      button.classList.toggle(
        "is-active",
        selectedModules.includes(button.dataset.module)
      );
    });

    if (!selectedBusiness) {
      summary.textContent = text.noSelection;
      return;
    }

    const moduleNames = selectedModules.map(function (module) {
      return text[module];
    });

    summary.textContent =
      text.selected +
      " " +
      text[selectedBusiness] +
      ": " +
      moduleNames.join(" · ");
  }

  businessButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      selectedBusiness = button.dataset.business;
      selectedModules = recommendations[selectedBusiness].slice();
      renderBuilder();
    });
  });

  moduleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const module = button.dataset.module;

      if (selectedModules.includes(module)) {
        selectedModules = selectedModules.filter(function (item) {
          return item !== module;
        });
      } else {
        selectedModules.push(module);
      }

      renderBuilder();
    });
  });

  whatsappButton.addEventListener("click", function () {
    const language = isArabic() ? "ar" : "en";
    const text = names[language];

    if (!selectedBusiness) {
      summary.textContent = text.noSelection;
      return;
    }

    const chosenModules = selectedModules
      .map(function (module) {
        return text[module];
      })
      .join("، ");

    const message = isArabic()
      ? [
          "طلب نظام جديد من موقع ALZAYM",
          "",
          "نوع النشاط: " + text[selectedBusiness],
          "المكونات المطلوبة: " + chosenModules
        ].join("\n")
      : [
          "New system request from ALZAYM",
          "",
          "Business type: " + text[selectedBusiness],
          "Requested modules: " + chosenModules
        ].join("\n");

    window.open(
      "https://wa.me/966596100109?text=" + encodeURIComponent(message),
      "_blank"
    );
  });

  document.querySelectorAll(".language-button").forEach(function (button) {
    button.addEventListener("click", function () {
      renderBuilder();
    });
  });

  renderBuilder();
});
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav");
  const menuToggle = document.getElementById("menuToggle");
  const navLink = document.querySelector(".nav-link");

  if (!nav || !menuToggle) return;

  menuToggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  });

  if (navLink) {
    navLink.addEventListener("click", function () {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});
