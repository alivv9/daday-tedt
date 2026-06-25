// شركة وادي الكوف الجديد للصناعات الكيماوية والمنظفات
// الملف البرمجي التفاعلي للموقع المحدث

document.addEventListener("DOMContentLoaded", () => {
  
  // --- 1. بيانات المنتجات التفصيلية المحدثة للنافذة المنبثقة (Product Specs Database) ---
  const productDetails = {
    dishwash: {
      title: "سائل غسيل الأواني (شركة وادي الكوف)",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:50px;height:50px;color:var(--color-accent);"><rect x="20" y="8" width="24" height="48" rx="3" stroke="currentColor" stroke-width="3" fill="var(--color-primary-glow)"/><path d="M26 8V4M32 4H38" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="32" r="8" stroke="currentColor" stroke-width="2"/></svg>`,
      specs: [
        { label: "المادة الفعالة", value: "سلفونات صوديوم الكيل بنزين خطي عالية التركيز + معززات رغوة مرطبة." },
        { label: "قوة إزالة الدهون", value: "فائقة (درجة ممتازة) - تفكيك فوري للزيوت والشحوم المستعصية." },
        { label: "التعبئة المتوفرة", value: "عبوات سعة 1 لتر، وعبوات سعة 5 لتر، وجالون اقتصادي **سعة 10 لتر (جديد شركة وادي 10)**." },
        { label: "طريقة الاستخدام", value: "توضع قطرات بسيطة على إسفنجة رطبة للحصول على رغوة غنية وتنظيف كامل للأواني والزجاج." },
        { label: "الأمان البشري", value: "يحتوي على مواد مرطبة للجلد ومثبتات درجة الحموضة (pH 7.2) الصديقة للبشرة." }
      ]
    },
    wadi10: {
      title: "عبوة جديد شركة وادي 10 (سعة 10 لتر)",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:50px;height:50px;color:var(--color-accent);"><rect x="22" y="10" width="20" height="44" rx="4" stroke="currentColor" stroke-width="3" fill="var(--color-primary-glow)"/><path d="M27 10V6M37 10V6M30 6H34" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="32" r="6" stroke="currentColor" stroke-width="2"/></svg>`,
      specs: [
        { label: "اسم المنتج وحجمه", value: "عبوة **جديد شركة وادي 10** سعة 10 لتر." },
        { label: "الاستخدام المستهدف", value: "تنظيف الأواني والأطباق للفنادق، المطاعم، والمنازل ذات الاستهلاك العالي." },
        { label: "كفاءة العبوة", value: "توفير اقتصادي كبير جداً بتركيبة مركزة للغاية تدوم طويلاً وتمنع الهدر." },
        { label: "قوة الرغوة", value: "رغوة كثيفة مستقرة مع عطر الليمون الأخضر الطبيعي المنعش والمقوي للنظافة." },
        { label: "معايير الإنتاج", value: "مصنع محلياً بالمنطقة الصناعية في المرج وفق أفضل ضوابط معملية كيميائية متزنة." }
      ]
    },
    laundry: {
      title: "سائل غسيل الملابس العميق",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:50px;height:50px;color:var(--color-accent);"><path d="M12 24V50C12 52.2 13.8 54 16 54H48C50.2 54 52 52.2 52 50V24" stroke="currentColor" stroke-width="3"/><path d="M16 16C16 13.8 17.8 12 20 12H44C46.2 12 48 13.8 48 16V24H16V16Z" fill="var(--color-primary-glow)" stroke="currentColor" stroke-width="3"/><circle cx="32" cy="38" r="8" stroke="currentColor" stroke-width="2"/></svg>`,
      specs: [
        { label: "المادة الفعالة", value: "أنزيمات حيوية نشطة + مواد خافضة للتوتر السطحي غير أيونية متوافقة مع الأنسجة." },
        { label: "أبرز الميزات", value: "إزالة عميقة للبقع المستعصية (حبر، دهون، دم) مع حماية ألوان الأقمشة من البهتان." },
        { label: "الروائح المتاحة", value: "عطر نسيم اللافندر وعطر الياسمين الجبلي الفواح." },
        { label: "التعبئة المتوفرة", value: "جالونات سعة 3 لتر، وسعة 5 لتر، وبراميل مخصصة للمغاسل الكبرى سعة 10 لتر." },
        { label: "إرشادات الغسيل", value: "مناسب للغسالات الأوتوماتيكية بالكامل والغسالات العادية. يضاف مقدار غطاء واحد (100 مل) لكل وجبة غسيل متوسطة." }
      ]
    },
    bumble: {
      title: "منتج الملابس Bumble الفاخر",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:50px;height:50px;color:var(--color-gold);"><path d="M32 6L54 20V44L32 58L10 44V20L32 6Z" fill="var(--color-primary-glow)" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><circle cx="32" cy="32" r="10" stroke="var(--color-gold)" stroke-width="3"/></svg>`,
      specs: [
        { label: "اسم الموديل والتصنيف", value: "سائل غسيل الملابس المتميز **Bumble**." },
        { label: "سعر المنتج", value: "**100 دينار ليبي** للعبوة الفاخرة." },
        { label: "التركيز والتعقيم", value: "تركيز فائق جداً (Premium-Grade) يحتوي على معقمات طبية آمنة للملابس وحماية الألوان." },
        { label: "العطر الخاص", value: "عطر زيتي فرنسي مركز يدوم لعدة أيام في أنسجة الملابس بعد الغسيل." },
        { label: "الأقمشة الموصى بها", value: "مناسب لكافة أنواع الأقمشة الفاخرة، العباءات، الملابس الصوفية، والمفروشات الراقية." }
      ]
    },
    multipurpose: {
      title: "سائل متعدد الأغراض ومطهر الأسطح",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:50px;height:50px;color:var(--color-accent);"><path d="M28 20H40L38 12H30L28 20Z" stroke="currentColor" stroke-width="2"/><path d="M22 28V54C22 56.2 23.8 58 26 58H38C40.2 58 42 56.2 42 54V28" fill="var(--color-primary-glow)" stroke="currentColor" stroke-width="3"/></svg>`,
      specs: [
        { label: "المادة الفعالة", value: "كحول إيزوبروبيلي + كلوريد البنزالكونيوم + عوامل تلميع النانو المتطورة." },
        { label: "الاستخدامات الشائعة", value: "تنظيف وتلميع البلاط، الرخام، الزجاج، الأرضيات الصلبة، وتعقيم الطاولات والمقابض." },
        { label: "قوة إزالة الأوساخ", value: "تفكيك الغبار، البصمات، والدهون الخفيفة بمسحة واحدة دون الحاجة للشطف بالماء." },
        { label: "التعبئة المتوفرة", value: "بخاخ جاهز للاستخدام سعة 750 مل، وجالون اقتصادي للتعبئة سعة 5 لتر." },
        { label: "تعليمات الأمان", value: "يحفظ بعيداً عن متناول الأطفال. غير مخصص للاستخدام على الأواني الغذائية المباشرة." }
      ]
    },
    clorox: {
      title: "مادة الكلوركس (المبيض والمعقم القوي)",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:50px;height:50px;color:var(--color-accent);"><circle cx="32" cy="32" r="16" stroke="currentColor" stroke-width="3" fill="var(--color-primary-glow)"/></svg>`,
      specs: [
        { label: "التركيز الكيميائي", value: "هيبوكلوريت الصوديوم بتركيز نشط ودقيق يتراوح بين 5.25% إلى 6%." },
        { label: "الفعالية الرئيسية", value: "تبييض فائق للمنسوجات القطنية البيضاء + إبادة بيولوجية تامة للفيروسات والميكروبات على الأسطح." },
        { label: "معايير التعقيم للمنشآت", value: "موصى به للمستشفيات، المدارس، والمكاتب لمقاومة العدوى الموسمية والجرثومية." },
        { label: "التعبئة والتركيز", value: "يتوفر في عبوات داكنة لحماية المادة الفعالة من الضوء بسعة 1 لتر وجالونات 5 لتر." },
        { label: "⚠️ تحذيرات هامة جداً", value: "يجب استخدامه في مكان جيد التهوية. لا يخلط أبداً مع الفلاش أو الأحماض لتفادي انبعاث غاز الكلور السام. تجنب ملامسة العين والجلد بشكل مباشر." }
      ]
    },
    garik: {
      title: "المنتج النجمي: \"جارق\" (حارق الروائح الكريهة)",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:50px;height:50px;color:var(--color-gold);"><path d="M32 8L48 14V30C48 42 38 52 32 56C26 52 16 42 16 30V14L32 8Z" fill="var(--color-primary-glow)" stroke="currentColor" stroke-width="3"/></svg>`,
      specs: [
        { label: "اسم المنتج التجاري", value: "**جارق** (منظف ومطهر معقم واسع المدى)." },
        { label: "إزالة الروائح الكريهة", value: "يقضي تماماً على مصدر الروائح المزعجة والكريهة في بالوعات الصرف والمطابخ والمجاري المائية." },
        { label: "تفتيت الدهون والتسليك", value: "إزالة تامة للشحوم والترسبات العضوية الملتصقة بأنابيب الصرف بكفاءة تفتيت معملية فورية." },
        { label: "قوة إبادة الجراثيم", value: "إبادة تامة للبيئة الحاضنة للجراثيم والفطريات الضارة التي تنمو في المناطق الرطبة والمظلمة." },
        { label: "⚠️ تحذيرات أمان كيميائي", value: "يحتوي على مواد قلوية نشطة. يجب ارتداء قفازات ونظارة حماية أثناء الصب والاستخدام. يصب ببطء لتجنب التطاير، ويحفظ تماماً بعيداً عن متناول الأطفال." }
      ]
    }
  };

  // --- 2. التحكم في النافذة المنبثقة للمنتجات (Product Details Modal) ---
  const productModal = document.getElementById("product-modal");
  const modalContent = document.getElementById("modal-body-content");
  const closeModalBtn = document.getElementById("close-modal");

  function openModal(productId) {
    const data = productDetails[productId];
    if (!data) return;

    let specsHtml = "";
    data.specs.forEach(item => {
      specsHtml += `
        <div class="modal-spec-block">
          <h4>${item.label}</h4>
          <p>${item.value}</p>
        </div>
      `;
    });

    modalContent.innerHTML = `
      <div class="modal-header-section">
        ${data.icon}
        <h3>${data.title}</h3>
      </div>
      <div class="modal-body-specs">
        ${specsHtml}
      </div>
    `;

    productModal.classList.add("active");
    const modalScrollContainer = document.querySelector(".product-modal-content");
    if (modalScrollContainer) modalScrollContainer.scrollTop = 0;
    document.body.style.overflow = "hidden"; // منع سكرول الخلفية
  }

  function closeModal() {
    productModal.classList.remove("active");
    document.body.style.overflow = ""; // استعادة سكرول الخلفية
  }

  // مستمعو الأحداث للمودال
  document.querySelectorAll(".open-product-modal").forEach(button => {
    button.addEventListener("click", (e) => {
      const prodId = button.getAttribute("data-product");
      openModal(prodId);
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  }

  if (productModal) {
    productModal.addEventListener("click", (e) => {
      if (e.target === productModal) {
        closeModal();
      }
    });
  }

  // إغلاق المودال بزر Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  // --- 3. التحكم في القائمة المنزلقة للجوال (Mobile Hamburger Drawer) ---
  const menuToggle = document.getElementById("menu-toggle");
  const closeDrawer = document.getElementById("close-drawer");
  const navOverlay = document.getElementById("nav-overlay");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  function toggleMobileMenu(isOpen) {
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
    if (isOpen) {
      navOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    } else {
      navOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", () => toggleMobileMenu(true));
  }

  if (closeDrawer) {
    closeDrawer.addEventListener("click", () => toggleMobileMenu(false));
  }

  if (navOverlay) {
    navOverlay.addEventListener("click", (e) => {
      if (e.target === navOverlay) {
        toggleMobileMenu(false);
      }
    });
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => toggleMobileMenu(false));
  });


  // --- 4. معالجة وتدفق نموذج الطلبيات (Form Handling & WhatsApp Integration) ---
  const orderTypeVal = document.getElementById("order-type-val");
  const tabSample = document.getElementById("tab-sample");
  const tabPurchase = document.getElementById("tab-purchase");

  // دالة تبديل نوع الطلب
  window.setOrderType = function(type) {
    if (type === "sample") {
      orderTypeVal.value = "طلب عينة مجانية";
      tabSample.classList.add("active");
      tabPurchase.classList.remove("active");
    } else {
      orderTypeVal.value = "طلب شراء بالجملة";
      tabPurchase.classList.add("active");
      tabSample.classList.remove("active");
    }
  };

  window.handleFormSubmit = function(event) {
    event.preventDefault();

    const orderType = orderTypeVal.value;
    const name = document.getElementById("order-name").value.trim();
    const phone = document.getElementById("order-phone").value.trim();
    const city = document.getElementById("order-city").value.trim();
    const product = document.getElementById("order-product").value;
    const notes = document.getElementById("order-notes").value.trim();

    // التحقق من صحة المدخلات الأساسية
    if (!name || !phone || !city || !product) {
      alert("يرجى ملء جميع الحقول المطلوبة المميزة بنجمة (*)");
      return;
    }

    // بناء قالب رسالة الواتساب المنسق
    let message = `*طلب جديد من موقع شركة وادي الكوف الجديد للمنظفات* \n\n`;
    message += `*نوع الطلب:* ${orderType}\n`;
    message += `*الاسم/النشاط:* ${name}\n`;
    message += `*رقم الهاتف:* ${phone}\n`;
    message += `*المنطقة/المدينة:* ${city}\n`;
    message += `*المنتج المطلوب:* ${product}\n`;
    if (notes) {
      message += `*ملاحظات إضافية:* ${notes}\n`;
    }
    message += `\n_تم إرسال هذا الطلب تلقائياً من الموقع الإلكتروني للمصنع._`;

    // ترميز الرسالة للرابط
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/218924606780?text=${encodedMessage}`;

    // فتح الرابط في علامة تبويب جديدة
    window.open(whatsappUrl, "_blank");
    document.getElementById("order-form").reset();
  };


  // --- 5. نسخ إحداثيات خرائط جوجل مع إشعار التأكيد (Copy Coordinates & Toast) ---
  const copyBtn = document.getElementById("btn-copy-coords");
  const coordText = document.getElementById("coordinate-text");
  const toastNotify = document.getElementById("toast-notify");
  const tooltipText = document.getElementById("copy-tooltip");

  if (copyBtn && coordText) {
    copyBtn.addEventListener("click", () => {
      const textToCopy = coordText.innerText;
      
      navigator.clipboard.writeText(textToCopy).then(() => {
        // إظهار إشعار Toast
        toastNotify.classList.add("show");
        
        // تغيير نص التلميحة مؤقتاً
        if (tooltipText) tooltipText.innerText = "تم النسخ!";
        
        // إخفاء إشعار Toast بعد 3 ثوانٍ
        setTimeout(() => {
          toastNotify.classList.remove("show");
          if (tooltipText) tooltipText.innerText = "نسخ الإحداثيات";
        }, 3000);
      }).catch(err => {
        console.error("فشل نسخ الإحداثيات: ", err);
      });
    });
  }


  // --- 6. ميزة الوضع الليلي وحفظ التفضيل (Dark/Light Mode Theme Toggle) ---
  const themeToggle = document.getElementById("theme-toggle");
  
  // التحقق من التفضيل المخزن مسبقاً
  const savedTheme = localStorage.getItem("site-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-theme");
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-mode");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-theme");
        localStorage.setItem("site-theme", "light");
      } else {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-mode");
        localStorage.setItem("site-theme", "dark");
      }
    });
  }

  // --- 7. التمرير وسلاسل الحركات البسيطة ونوافذ التمرير النشطة ---
  // وظيفة تمييز رابط التنقل الفعال عند السكرول
  const sections = document.querySelectorAll("section[id], header[id]");
  window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");
      
      const desktopLink = document.querySelector(`.desktop-nav a[href*=${sectionId}]`);
      if (desktopLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelectorAll(".nav-link").forEach(el => el.classList.remove("active"));
          desktopLink.classList.add("active");
        }
      }
    });
  });

});
