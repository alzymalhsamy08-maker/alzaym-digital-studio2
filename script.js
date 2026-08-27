document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const languageToggle = document.getElementById("languageToggle");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const gateway = document.getElementById("gateway");
  const gatewayStage = document.getElementById("gatewayStage");
  const clientForm = document.getElementById("clientForm");
  const formStatus = document.getElementById("formStatus");
  const cursor = document.getElementById("cursor");

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const canHover = window.matchMedia("(pointer:fine)").matches;

  let activeLanguage =
    localStorage.getItem("alzaym-language") ||
    (navigator.language && navigator.language.startsWith("ar")
      ? "ar"
      : "en");

  /* ---------------------------------------------------------
     LOADER
  --------------------------------------------------------- */

  window.setTimeout(function () {
    if (loader) {
      loader.classList.add("is-hidden");
    }
  }, prefersReducedMotion ? 50 : 1050);

  /* ---------------------------------------------------------
     THEME
  --------------------------------------------------------- */

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("alzaym-theme", theme);

    if (themeIcon) {
      themeIcon.textContent = theme === "dark" ? "◐" : "◑";
    }

    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark"
          ? "Switch to light theme"
          : "Switch to dark theme"
      );
    }
  }

  const savedTheme = localStorage.getItem("alzaym-theme");

  const systemPrefersLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  applyTheme(
    savedTheme ||
      (systemPrefersLight ? "light" : "dark")
  );

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const current =
        document.documentElement.getAttribute("data-theme") ||
        "dark";

      applyTheme(
        current === "dark"
          ? "light"
          : "dark"
      );
    });
  }

  /* ---------------------------------------------------------
     LANGUAGE / RTL
  --------------------------------------------------------- */

  const selectCopy = {
    en: {
      servicePlaceholder: "Choose a project type",

      services: [
        "Professional website",
        "Online store",
        "POS & sales system",
        "Inventory & loyalty system",
        "App or platform",
        "Ordering & delivery",
        "Other"
      ],

      budgetPlaceholder: "Choose a package / budget",

      budgets: [
        "Professional Website — 525 SAR",
        "E-commerce Store — 929 SAR",
        "App / Business System — 1,424 SAR",
        "Custom Project — Request Quote"
      ],

      detailsPlaceholder:
        "What do you want to build?",

      namePlaceholder:
        "Mohammed"
    },

    ar: {
      servicePlaceholder: "اختر نوع المشروع",

      services: [
        "موقع إلكتروني احترافي",
        "متجر إلكتروني",
        "نظام مبيعات وكاشير",
        "نظام مخزون وولاء",
        "تطبيق أو منصة",
        "طلبات وتوصيل",
        "مشروع آخر"
      ],

      budgetPlaceholder: "اختر الباقة / الميزانية",

      budgets: [
        "موقع احترافي — 525 ريال",
        "متجر إلكتروني — 929 ريال",
        "تطبيق / نظام أعمال — 1,424 ريال",
        "مشروع مخصص — طلب تسعير"
      ],

      detailsPlaceholder:
        "اكتب فكرتك والخدمات المطلوبة وطريقة عمل نشاطك...",

      namePlaceholder:
        "محمد"
    }
  };

  function applyLanguage(language) {
    activeLanguage =
      language === "ar"
        ? "ar"
        : "en";

    document.documentElement.lang =
      activeLanguage;

    document.documentElement.dir =
      activeLanguage === "ar"
        ? "rtl"
        : "ltr";

    document
      .querySelectorAll("[data-copy-en]")
      .forEach(function (element) {
        const value =
          activeLanguage === "ar"
            ? element.getAttribute(
                "data-copy-ar"
              )
            : element.getAttribute(
                "data-copy-en"
              );

        if (value !== null) {
          element.textContent = value;
        }
      });

    if (languageToggle) {
      languageToggle.textContent =
        activeLanguage === "ar"
          ? "EN"
          : "AR";
    }

    const name =
      document.getElementById("name");

    const details =
      document.getElementById("details");

    const service =
      document.getElementById("service");

    const budget =
      document.getElementById("budget");

    const strings =
      selectCopy[activeLanguage];

    if (name) {
      name.placeholder =
        strings.namePlaceholder;
    }

    if (details) {
      details.placeholder =
        strings.detailsPlaceholder;
    }

    if (service) {
      const currentValue =
        service.value;

      const options =
        service.options;

      if (options.length >= 8) {
        options[0].textContent =
          strings.servicePlaceholder;

        for (
          let i = 1;
          i < 8;
          i += 1
        ) {
          options[i].textContent =
            strings.services[i - 1];
        }
      }

      service.value =
        currentValue;
    }

    if (budget) {
      const currentValue =
        budget.value;

      const options =
        budget.options;

      if (
        options.length >=
        strings.budgets.length + 1
      ) {
        options[0].textContent =
          strings.budgetPlaceholder;

        for (
          let i = 1;
          i <= strings.budgets.length;
          i += 1
        ) {
          options[i].textContent =
            strings.budgets[i - 1];
        }
      }

      budget.value =
        currentValue;
    }

    localStorage.setItem(
      "alzaym-language",
      activeLanguage
    );
  }

  if (languageToggle) {
    languageToggle.addEventListener(
      "click",
      function () {
        applyLanguage(
          activeLanguage === "ar"
            ? "en"
            : "ar"
        );
      }
    );
  }

  applyLanguage(activeLanguage);

  /* ---------------------------------------------------------
     MOBILE MENU
  --------------------------------------------------------- */

  function setMenu(open) {
    if (
      !mobileMenu ||
      !menuToggle
    ) {
      return;
    }

    mobileMenu.classList.toggle(
      "is-open",
      open
    );

    mobileMenu.setAttribute(
      "aria-hidden",
      open
        ? "false"
        : "true"
    );

    menuToggle.setAttribute(
      "aria-expanded",
      open
        ? "true"
        : "false"
    );

    document.body.style.overflow =
      open
        ? "hidden"
        : "";
  }

  if (menuToggle) {
    menuToggle.addEventListener(
      "click",
      function () {
        const open =
          menuToggle.getAttribute(
            "aria-expanded"
          ) !== "true";

        setMenu(open);
      }
    );
  }

  if (mobileMenu) {
    mobileMenu
      .querySelectorAll("a")
      .forEach(function (link) {
        link.addEventListener(
          "click",
          function () {
            setMenu(false);
          }
        );
      });
  }

  document.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "Escape") {
        setMenu(false);
      }
    }
  );

  window.addEventListener(
    "resize",
    function () {
      if (
        window.innerWidth > 1180
      ) {
        setMenu(false);
      }
    }
  );

  /* ---------------------------------------------------------
     REVEAL ON SCROLL
  --------------------------------------------------------- */

  const revealItems =
    document.querySelectorAll(
      ".reveal"
    );

  if (
    prefersReducedMotion ||
    !(
      "IntersectionObserver"
      in window
    )
  ) {
    revealItems.forEach(
      function (item) {
        item.classList.add(
          "is-visible"
        );
      }
    );
  } else {
    const revealObserver =
      new IntersectionObserver(
        function (entries) {
          entries.forEach(
            function (entry) {
              if (
                !entry.isIntersecting
              ) {
                return;
              }

              entry.target.classList.add(
                "is-visible"
              );

              revealObserver.unobserve(
                entry.target
              );
            }
          );
        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -6% 0px"
        }
      );

    revealItems.forEach(
      function (item, index) {
        item.style.transitionDelay =
          Math.min(
            index % 4,
            3
          ) *
            70 +
          "ms";

        revealObserver.observe(
          item
        );
      }
    );
  }

  /* ---------------------------------------------------------
     HERO TITLE ENTRANCE
  --------------------------------------------------------- */

  if (!prefersReducedMotion) {
    document
      .querySelectorAll(
        ".title-mask > span, .title-mask > em"
      )
      .forEach(
        function (
          line,
          index
        ) {
          line.animate(
            [
              {
                opacity: 0,
                transform:
                  "translateY(110%)"
              },
              {
                opacity: 1,
                transform:
                  "translateY(0)"
              }
            ],
            {
              duration: 950,

              delay:
                220 +
                index * 100,

              easing:
                "cubic-bezier(0.16,1,0.3,1)",

              fill: "both"
            }
          );
        }
      );
  }

  /* ---------------------------------------------------------
     SMOOTH 3D GATEWAY
  --------------------------------------------------------- */

  if (
    gateway &&
    gatewayStage &&
    canHover &&
    !prefersReducedMotion
  ) {
    let targetRX = 0;
    let targetRY = 0;
    let targetX = 0;
    let targetY = 0;

    let currentRX = 0;
    let currentRY = 0;
    let currentX = 0;
    let currentY = 0;

    function animateGateway() {
      const ease = 0.085;

      currentRX +=
        (targetRX - currentRX) *
        ease;

      currentRY +=
        (targetRY - currentRY) *
        ease;

      currentX +=
        (targetX - currentX) *
        ease;

      currentY +=
        (targetY - currentY) *
        ease;

      gatewayStage.style.transform =
        "translate3d(" +
        currentX.toFixed(2) +
        "px," +
        currentY.toFixed(2) +
        "px,0) rotateX(" +
        currentRX.toFixed(2) +
        "deg) rotateY(" +
        currentRY.toFixed(2) +
        "deg)";

      requestAnimationFrame(
        animateGateway
      );
    }

    gateway.addEventListener(
      "pointermove",
      function (event) {
        const rect =
          gateway.getBoundingClientRect();

        const x =
          (event.clientX -
            rect.left) /
            rect.width -
          0.5;

        const y =
          (event.clientY -
            rect.top) /
            rect.height -
          0.5;

        targetRY =
          x * 7.2;

        targetRX =
          y * -5.4;

        targetX =
          x * 8;

        targetY =
          y * 8;
      }
    );

    gateway.addEventListener(
      "pointerleave",
      function () {
        targetRX = 0;
        targetRY = 0;
        targetX = 0;
        targetY = 0;
      }
    );

    requestAnimationFrame(
      animateGateway
    );
  }

  /* ---------------------------------------------------------
     CUSTOM CURSOR
  --------------------------------------------------------- */

  if (
    cursor &&
    canHover &&
    !prefersReducedMotion
  ) {
    let targetCursorX =
      window.innerWidth / 2;

    let targetCursorY =
      window.innerHeight / 2;

    let currentCursorX =
      targetCursorX;

    let currentCursorY =
      targetCursorY;

    function animateCursor() {
      const ease = 0.22;

      currentCursorX +=
        (
          targetCursorX -
          currentCursorX
        ) * ease;

      currentCursorY +=
        (
          targetCursorY -
          currentCursorY
        ) * ease;

      cursor.style.left =
        currentCursorX.toFixed(2) +
        "px";

      cursor.style.top =
        currentCursorY.toFixed(2) +
        "px";

      requestAnimationFrame(
        animateCursor
      );
    }

    document.addEventListener(
      "pointermove",
      function (event) {
        targetCursorX =
          event.clientX;

        targetCursorY =
          event.clientY;

        cursor.classList.add(
          "is-visible"
        );
      }
    );

    document.addEventListener(
      "pointerleave",
      function () {
        cursor.classList.remove(
          "is-visible"
        );
      }
    );

    document
      .querySelectorAll(
        ".project-card"
      )
      .forEach(
        function (project) {
          project.addEventListener(
            "mouseenter",
            function () {
              cursor.classList.add(
                "is-project"
              );
            }
          );

          project.addEventListener(
            "mouseleave",
            function () {
              cursor.classList.remove(
                "is-project"
              );
            }
          );
        }
      );

    requestAnimationFrame(
      animateCursor
    );
  }

  /* ---------------------------------------------------------
     EXISTING ALZAYM AUTOMATION
     n8n + WhatsApp
  --------------------------------------------------------- */

  if (clientForm) {
    clientForm.addEventListener(
      "submit",
      async function (event) {
        event.preventDefault();

        const name =
          document.getElementById(
            "name"
          );

        const phone =
          document.getElementById(
            "phone"
          );

        const service =
          document.getElementById(
            "service"
          );

        const budget =
          document.getElementById(
            "budget"
          );

        const details =
          document.getElementById(
            "details"
          );

        const isArabic =
          activeLanguage === "ar";

        const payload = {
          name: name
            ? name.value.trim()
            : "",

          phone: phone
            ? phone.value.trim()
            : "",

          email: "",

          projectType: service
            ? service.value
            : "",

          budget: budget
            ? budget.value
            : "",

          details: details
            ? details.value.trim()
            : ""
        };

        const message =
          isArabic
            ? [
                "طلب مشروع جديد من موقع ALZAYM",
                "",
                "الاسم: " +
                  payload.name,
                "رقم التواصل: " +
                  payload.phone,
                "نوع المشروع: " +
                  payload.projectType,
                "الميزانية: " +
                  payload.budget,
                "التفاصيل: " +
                  payload.details
              ].join("\n")
            : [
                "New project request from ALZAYM",
                "",
                "Name: " +
                  payload.name,
                "Phone: " +
                  payload.phone,
                "Project type: " +
                  payload.projectType,
                "Estimated budget: " +
                  payload.budget,
                "Details: " +
                  payload.details
              ].join("\n");

        if (formStatus) {
          formStatus.textContent =
            isArabic
              ? "جارٍ تجهيز طلبك..."
              : "Preparing your request...";
        }

        try {
          await fetch(
            "https://alzaymdigital.app.n8n.cloud/webhook/alzaym-lead",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json"
              },

              body:
                JSON.stringify(
                  payload
                )
            }
          );

          if (formStatus) {
            formStatus.textContent =
              isArabic
                ? "تم إرسال البيانات. سيتم فتح واتساب الآن."
                : "Details sent. Opening WhatsApp now.";
          }

          window.open(
            "https://wa.me/966596100109?text=" +
              encodeURIComponent(
                message
              ),
            "_blank"
          );

          clientForm.reset();

          applyLanguage(
            activeLanguage
          );
        } catch (error) {
          console.error(
            "n8n error:",
            error
          );

          if (formStatus) {
            formStatus.textContent =
              isArabic
                ? "تعذر الوصول للأتمتة، سيتم فتح واتساب مباشرة."
                : "Automation unavailable. Opening WhatsApp directly.";
          }

          window.open(
            "https://wa.me/966596100109?text=" +
              encodeURIComponent(
                message
              ),
            "_blank"
          );
        }
      }
    );
  }
});
