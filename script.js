// شركة وادي الكوف الجديد لصناعة المنظفات واستيراد مواد الخام
// الملف البرمجي التفاعلي للموقع

document.addEventListener("DOMContentLoaded", () => {
  
  // --- 1. بيانات المنتجات التفصيلية (Product Specifications Data) ---
  const productDetails = {
    dishwash: {
      title: "سائل غسيل الأواني (Dexan)",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:50px;height:50px;"><rect x="20" y="8" width="24" height="48" rx="3" stroke="currentColor" stroke-width="3" fill="var(--color-accent-glow)"/><path d="M26 8V4M32 4H38" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="32" r="8" stroke="currentColor" stroke-width="2"/></svg>`,
      specs: [
        { label: "المادة الفعالة", value: "سلفونات صوديوم الكيل بنزين خطي عالية التركيز + معززات رغوة مرطبة." },
        { label: "قوة إزالة الدهون", value: "فائقة (درجة ممتازة) - تفكيك فوري للزيوت والشحوم المستعصية." },
        { label: "التعبئة المتوفرة", value: "عبوات سعة 1 لتر، وعبوات سعة 5 لتر، وجالونات اقتصادية سعة 10 لتر." },
        { label: "طريقة الاستخدام", value: "توضع قطرات بسيطة على إسفنجة رطبة للحصول على رغوة غنية وتنظيف كامل للأواني والزجاج." },
        { label: "الأمان البشري", value: "يحتوي على مواد مرطبة للجلد ومثبتات درجة الحموضة (pH 7.2) الصديقة للبشرة." }
      ]
    },
    laundry: {
      title: "سائل غسيل الملابس العميق",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:50px;height:50px;"><path d="M12 24V50C12 52.2 13.8 54 16 54H48C50.2 54 52 52.2 52 50V24" stroke="currentColor" stroke-width="3"/><path d="M16 16C16 13.8 17.8 12 20 12H44C46.2 12 48 13.8 48 16V24H16V16Z" fill="var(--color-accent-glow)" stroke="currentColor" stroke-width="3"/><circle cx="32" cy="38" r="8" stroke="currentColor" stroke-width="2"/></svg>`,
      specs: [
        { label: "المادة الفعالة", value: "أنزيمات حيوية نشطة + مواد خافضة للتوتر السطحي غير أيونية متوافقة مع الأنسجة." },
        { label: "أبرز الميزات", value: "إزالة عميقة للبقع المستعصية (حبر، دهون، دم) مع حماية ألوان الأقمشة من البهتان." },
        { label: "الروائح المتاحة", value: "عطر نسيم اللافندر وعطر الياسمين الجبلي الفواح." },
        { label: "التعبئة المتوفرة", value: "جالونات سعة 3 لتر، وسعة 5 لتر، وبراميل مخصصة للمغاسل الكبرى سعة 10 لتر." },
        { label: "إرشادات الغسيل", value: "مناسب للغسالات الأوتوماتيكية بالكامل والغسالات العادية. يضاف مقدار غطاء واحد (100 مل) لكل وجبة غسيل متوسطة." }
      ]
    },
    multipurpose: {
      title: "سائل متعدد الأغراض ومطهر الأسطح",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:50px;height:50px;"><path d="M28 20H40L38 12H30L28 20Z" stroke="currentColor" stroke-width="2"/><path d="M22 28V54C22 56.2 23.8 58 26 58H38C40.2 58 42 56.2 42 54V28" fill="var(--color-accent-glow)" stroke="currentColor" stroke-width="3"/></svg>`,
      specs: [
        { label: "المادة الفعالة", value: "كحول إيزوبروبيلي + كلوريد البنزالكونيوم + عوامل تلميع النانو المتطورة." },
        { label: "الاستخدامات الشائعة", value: "تنظيف وتلميع البلاط، الرخام، الزجاج، الأجهزة الإلكترونية الخارجية، والأرضيات الصلبة." },
        { label: "قوة إزالة الأوساخ", value: "تفكيك الغبار، البصمات، والدهون الخفيفة بمسحة واحدة دون الحاجة للشطف بالماء." },
        { label: "التعبئة المتوفرة", value: "بخاخ جاهز للاستخدام سعة 750 مل، وجالون اقتصادي للتعبئة سعة 5 لتر." },
        { label: "تعليمات الأمان", value: "يحفظ بعيداً عن متناول الأطفال. غير مخصص للاستخدام على الأواني الغذائية المباشرة." }
      ]
    },
    disinfectants: {
      title: "المطهرات والمعطرات المركزة",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:50px;height:50px;"><path d="M32 8L48 14V30C48 42 38 52 32 56C26 52 16 42 16 30V14L32 8Z" fill="var(--color-accent-glow)" stroke="currentColor" stroke-width="3"/></svg>`,
      specs: [
        { label: "نسبة التعقيم", value: "يقضي على 99.9% من البكتيريا والجراثيم والفطريات الضارة المسببة للأمراض." },
        { label: "المادة الفعالة", value: "الصنوبر النقي المعدل + كلوريد الأمونيوم الرباعي كمطهر معقم واسع المدى." },
        { label: "الروائح والتعطير", value: "روائح طبيعية منعشة ومركزة (الصنوبر، العود الفاخر، النعناع) تدوم لأكثر من 24 ساعة." },
        { label: "مجالات التطبيق", value: "تعقيم الأرضيات، الحمامات، الممرات والمرافق الصحية العامة والمنزلية." },
        { label: "طريقة الاستخدام", value: "يخفف بمعدل 50 مل (نصف كوب) لكل 5 لتر من الماء النظيف للمسح اليومي." }
      ]
    },
    clorox: {
      title: "مادة الكلوركس (المبيض والمعقم القوي)",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:50px;height:50px;"><circle cx="32" cy="32" r="16" stroke="currentColor" stroke-width="3" fill="var(--color-accent-glow)"/></svg>`,
      specs: [
        { label: "التركيز الكيميائي", value: "هيبوكلوريت الصوديوم بتركيز نشط ودقيق يتراوح بين 5.25% إلى 6%." },
        { label: "الفعالية الرئيسية", value: "تبييض فائق للمنسوجات القطنية البيضاء + إبادة بيولوجية تامة للفيروسات والميكروبات على الأسطح." },
        { label: "معايير التعقيم للمنشآت", value: "موصى به للمستشفيات، المدارس، والمكاتب لمقاومة العدوى الموسمية والجرثومية." },
        { label: "التعبئة والتركيز", value: "يتوفر في عبوات داكنة لحماية المادة الفعالة من الضوء بسعة 1 لتر وجالونات 5 لتر." },
        { label: "⚠️ تحذيرات هامة جداً", value: "يجب استخدامه في مكان جيد التهوية. لا يخلط أبداً مع الفلاش أو الأحماض لتفادي انبعاث غاز الكلور السام. تجنب ملامسة العين والجلد بشكل مباشر." }
      ]
    },
    potash: {
      title: "مادة البوتاس (هيدروكسيد البوتاسيوم المطور)",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:50px;height:50px;"><path d="M32 8L48 14V30C48 42 38 52 32 56C26 52 16 42 16 30V14L32 8Z" fill="var(--color-accent-glow)" stroke="currentColor" stroke-width="3"/></svg>`,
      specs: [
        { label: "التركيب الكيميائي", value: "هيدروكسيد البوتاسيوم المركّز الصرف (Potassium Hydroxide)." },
        { label: "الاستخدامات الصناعية والتعقيم", value: "تفتيت الدهون العضوية والزيوت الصلبة بالبالوعات ومجاري الصرف، وتعقيم الأسطح الخرسانية والمصانع من المخلفات الجرثومية المتراكمة." },
        { label: "إزالة الروائح الكريهة", value: "يقضي على مصدر الروائح الكريهة مباشرة عبر تفكيك المادة العضوية المسببة لها." },
        { label: "التعبئة المتوفرة", value: "عبوات بتركيز معملي دقيق خاضع للفحص مع غطاء أمان ضد عبث الأطفال." },
        { label: "⚠️ تحذيرات السلامة المهنية", value: "مادة كاوية شديدة القلوية. يجب ارتداء قفازات ونظارة حماية عند الاستخدام. في حال ملامسة الجلد، يغسل فوراً بماء بارد وفير ثم يوضع الخل المخفف أو عصير الليمون لمعادلة القلوية." }
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

    // بناء كود HTML لعرضه داخل النافذة
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
      <div style="margin-top: 30px; display: flex; justify-content: flex-end;">
        <a href="#orders" class="btn btn-primary" onclick="selectProductFromModal('${data.title}')" style="width: 100%;">
          طلب عينة من هذا المنتج
        </a>
      </div>
    `;

    productModal.classList.add("active");
    document.body.style.overflow = "hidden"; // منع سكرول الصفحة خلف المودال
  }

  function closeModal() {
    productModal.classList.remove("active");
    document.body.style.overflow = ""; // إعادة تفعيل سكرول الصفحة
  }

  // ربط الأزرار بالمودال
  document.querySelectorAll(".open-product-modal").forEach(button => {
    button.addEventListener("click", () => {
      const productId = button.getAttribute("data-product");
      openModal(productId);
    });
  });

  closeModalBtn.addEventListener("click", closeModal);

  // إغلاق المودال بالضغط على الخلفية
  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) {
      closeModal();
    }
  });

  // إغلاق المودال بزر Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && productModal.classList.contains("active")) {
      closeModal();
    }
  });

  // زر الطلب السريع من داخل المودال
  window.selectProductFromModal = function(productTitle) {
    closeModal();
    // تحديد المنتج في القائمة المنسدلة للنموذج
    const selectElem = document.getElementById("order-product");
    
    // البحث عن الخيار المطابق جزئياً
    for (let i = 0; i < selectElem.options.length; i++) {
      if (productTitle.includes("ديكسان") && selectElem.options[i].value.includes("ديكسان")) {
        selectElem.selectedIndex = i;
        break;
      } else if (productTitle.includes("الملابس") && selectElem.options[i].value.includes("الملابس")) {
        selectElem.selectedIndex = i;
        break;
      } else if (productTitle.includes("الأغراض") && selectElem.options[i].value.includes("الأغراض")) {
        selectElem.selectedIndex = i;
        break;
      } else if (productTitle.includes("المطهرات") && selectElem.options[i].value.includes("المطهرات")) {
        selectElem.selectedIndex = i;
        break;
      } else if (productTitle.includes("الكلوركس") && selectElem.options[i].value.includes("الكلوركس")) {
        selectElem.selectedIndex = i;
        break;
      } else if (productTitle.includes("البوتاس") && selectElem.options[i].value.includes("البوتاس")) {
        selectElem.selectedIndex = i;
        break;
      }
    }
  };


  // --- 3. إدارة التبويبات ونوع الطلب (Order Tabs Logic) ---
  const tabSample = document.getElementById("tab-sample");
  const tabPurchase = document.getElementById("tab-purchase");
  const orderTypeVal = document.getElementById("order-type-val");

  window.setOrderType = function(type) {
    if (type === "sample") {
      tabSample.classList.add("active");
      tabPurchase.classList.remove("active");
      orderTypeVal.value = "طلب عينة مجانية";
    } else {
      tabPurchase.classList.add("active");
      tabSample.classList.remove("active");
      orderTypeVal.value = "طلب شراء بالجملة";
    }
  };

  // ربط زر الهيرو "طلب عينة مجانية" لينتقل لتبويب عينة
  const heroSampleBtn = document.getElementById("hero-sample-btn");
  if (heroSampleBtn) {
    heroSampleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      setOrderType("sample");
      document.getElementById("orders").scrollIntoView({ behavior: "smooth" });
    });
  }


  // --- 4. إرسال نموذج الطلب لواتساب (Form Submission Handler) ---
  window.handleFormSubmit = function(event) {
    event.preventDefault();

    const name = document.getElementById("order-name").value.trim();
    const phone = document.getElementById("order-phone").value.trim();
    const city = document.getElementById("order-city").value.trim();
    const product = document.getElementById("order-product").value;
    const notes = document.getElementById("order-notes").value.trim();
    const orderType = orderTypeVal.value;

    if (!product) {
      alert("الرجاء اختيار المنتج المطلوب.");
      return;
    }

    // صياغة رسالة واتساب أنيقة ومنسقة
    const whatsappMsg = `السلام عليكم شركة وادي الكوف الجديد، أود تقديم طلب من موقعكم الإلكتروني:
----------------------------------------
📌 *نوع الطلب:* ${orderType}
👤 *الاسم / الجهة:* ${name}
📞 *رقم الهاتف:* ${phone}
📍 *المدينة والمنطقة:* ${city}
🧪 *المنتج المطلوب:* ${product}
📝 *ملاحظات إضافية:* ${notes || 'لا يوجد ملاحظات إضافية'}
----------------------------------------
تم الإرسال عبر صفحة الهبوط الرسمية.`;

    // رقم هاتف واتساب الخاص بالشركة: 0924606780 (الدولي: 218924606780)
    const companyPhone = "218924606780";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${companyPhone}&text=${encodeURIComponent(whatsappMsg)}`;

    // فتح رابط واتساب في نافذة جديدة
    window.open(whatsappUrl, "_blank");

    // تفريغ المدخلات بعد الإرسال بنجاح
    document.getElementById("order-form").reset();
  };


  // --- 5. نسخ إحداثيات الخريطة (Copy Coordinates Feature) ---
  const copyBtn = document.getElementById("btn-copy-coords");
  const coordinateText = document.getElementById("coordinate-text");
  const copyTooltip = document.getElementById("copy-tooltip");
  const toastNotify = document.getElementById("toast-notify");

  if (copyBtn && coordinateText) {
    copyBtn.addEventListener("click", () => {
      const textToCopy = coordinateText.textContent;
      
      navigator.clipboard.writeText(textToCopy).then(() => {
        // تحديث التلميح الفوري
        copyTooltip.textContent = "تم النسخ!";
        
        // إظهار إشعار التوست السفلي
        toastNotify.classList.add("show");
        
        // إعادة التلميح لحالته الطبيعية بعد ثانيتين
        setTimeout(() => {
          copyTooltip.textContent = "نسخ الإحداثيات";
          toastNotify.classList.remove("show");
        }, 2000);
      }).catch(err => {
        console.error("فشل نسخ النص: ", err);
      });
    });
  }


  // --- 6. تشغيل الوضع المظلم / المضيء (Theme Switcher Logic) ---
  const themeToggle = document.getElementById("theme-toggle");
  
  // التحقق من التفضيل المخزن مسبقاً
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-theme");
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-mode");
  }

  themeToggle.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
  });


  // --- 7. قائمة الجوال والتحكم بها (Mobile Drawer Navigation) ---
  const menuToggle = document.getElementById("menu-toggle");
  const closeDrawer = document.getElementById("close-drawer");
  const navOverlay = document.getElementById("nav-overlay");

  const toggleDrawer = () => {
    navOverlay.classList.toggle("active");
  };

  if (menuToggle && closeDrawer && navOverlay) {
    menuToggle.addEventListener("click", toggleDrawer);
    closeDrawer.addEventListener("click", toggleDrawer);

    // إغلاق القائمة عند النقر على الخلفية الشفافة
    navOverlay.addEventListener("click", (e) => {
      if (e.target === navOverlay) {
        toggleDrawer();
      }
    });

    // إغلاق القائمة عند النقر على أي من الروابط
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", () => {
        toggleDrawer();
      });
    });
  }

  // --- 8. تحديث تبويب القائمة النشط عند سكرول الصفحة (Active Nav Link on Scroll) ---
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".desktop-nav .nav-link");

  window.addEventListener("scroll", () => {
    let currentId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 120)) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href === "#" && currentId === "home") {
        link.classList.add("active");
      } else if (href === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });

});
