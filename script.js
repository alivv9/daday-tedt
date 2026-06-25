// Wadi Al-Kouf Exchange - JavaScript Actions

document.addEventListener("DOMContentLoaded", () => {
  // --- Rate Definitions (Normalized to LYD) ---
  const currencyRates = {
    LYD: { name: "دينار ليبي", rate: 1.0, buy: 1.0, sell: 1.0, trend: "neutral", change: "0.0%" },
    USD: { name: "دولار أمريكي", rate: 6.82, buy: 6.80, sell: 6.85, trend: "up", change: "+0.15%" },
    EUR: { name: "يورو أوروبي", rate: 7.39, buy: 7.36, sell: 7.42, trend: "up", change: "+0.08%" },
    EGP: { name: "جنيه مصري", rate: 0.143, buy: 0.141, sell: 0.145, trend: "down", change: "-0.22%" },
    TND: { name: "دينار تونسي", rate: 2.16, buy: 2.14, sell: 2.18, trend: "down", change: "-0.11%" }
  };

  const COMMISSION_PCT = 0.005; // 0.5% commission
  const MIN_COMMISSION = 1.0; // 1 LYD minimum commission

  // --- Elements Selection ---
  const themeToggle = document.getElementById("theme-toggle");
  const menuToggle = document.getElementById("menu-toggle");
  const closeDrawer = document.getElementById("close-drawer");
  const navOverlay = document.getElementById("nav-overlay");
  
  // Converter Elements
  const convertAmount = document.getElementById("convert-amount");
  const fromCurrency = document.getElementById("from-currency");
  const toCurrency = document.getElementById("to-currency");
  const switchCurrencies = document.getElementById("switch-currencies");
  
  const resultValue = document.getElementById("result-value");
  const rateDetail = document.getElementById("rate-detail");
  const commissionDetail = document.getElementById("commission-detail");
  const totalWithCommDetail = document.getElementById("total-with-comm-detail");
  const resultSection = document.getElementById("result-section");

  // Form Elements
  const orderForm = document.getElementById("order-form");
  const formCurrencySelect = document.getElementById("order-currency");
  const formAmountInput = document.getElementById("order-amount");

  // --- Theme Toggle Action ---
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // --- Mobile Navigation Drawer ---
  const toggleDrawer = () => {
    navOverlay.classList.toggle("active");
  };

  menuToggle.addEventListener("click", toggleDrawer);
  closeDrawer.addEventListener("click", toggleDrawer);
  
  // Close drawer on overlay click
  navOverlay.addEventListener("click", (e) => {
    if (e.target === navOverlay) {
      toggleDrawer();
    }
  });

  // Close drawer on link click
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", toggleDrawer);
  });

  // --- Converter Logic ---
  function calculateConversion() {
    const amount = parseFloat(convertAmount.value);
    if (isNaN(amount) || amount <= 0) {
      resultSection.style.opacity = "0.5";
      resultValue.textContent = "0.00";
      rateDetail.textContent = "-";
      commissionDetail.textContent = "-";
      totalWithCommDetail.textContent = "-";
      return;
    }

    resultSection.style.opacity = "1";

    const from = fromCurrency.value;
    const to = toCurrency.value;

    // Normalize through LYD: Rate is how many LYD equals 1 unit of currency.
    // Amount in LYD = amount * rate[from]
    // Amount in Target = (amount * rate[from]) / rate[to]
    const amountInLyd = amount * currencyRates[from].rate;
    const targetAmount = amountInLyd / currencyRates[to].rate;

    // Calculate commission in target currency
    let commission = targetAmount * COMMISSION_PCT;
    // Enforce minimum commission (converted to target currency)
    const minCommInTarget = MIN_COMMISSION / currencyRates[to].rate;
    if (commission < minCommInTarget) {
      commission = minCommInTarget;
    }

    // Displays
    resultValue.textContent = `${targetAmount.toFixed(2)} ${to}`;

    // Detail rate string: 1 From = X To
    const unitRate = currencyRates[from].rate / currencyRates[to].rate;
    rateDetail.textContent = `1 ${from} = ${unitRate.toFixed(4)} ${to}`;
    commissionDetail.textContent = `${commission.toFixed(2)} ${to} (${(COMMISSION_PCT * 100).toFixed(1)}%)`;
    
    // Total is target amount minus commission (or plus depending on buy/sell logic. Usually, user pays commission on top)
    const totalWithComm = targetAmount + commission;
    totalWithCommDetail.textContent = `${totalWithComm.toFixed(2)} ${to}`;
  }

  // Bind inputs
  convertAmount.addEventListener("input", calculateConversion);
  fromCurrency.addEventListener("change", calculateConversion);
  toCurrency.addEventListener("change", calculateConversion);

  // Switch currencies click
  switchCurrencies.addEventListener("click", () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    calculateConversion();
  });

  // Sync converter to Order Form
  // When currency is selected in form, also set it in converter
  formCurrencySelect.addEventListener("change", (e) => {
    toCurrency.value = e.target.value;
    fromCurrency.value = "LYD";
    calculateConversion();
  });

  formAmountInput.addEventListener("input", (e) => {
    convertAmount.value = e.target.value;
    calculateConversion();
  });

  // Initialize conversion display
  calculateConversion();

  // --- Order Form Handling ---
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("order-name").value.trim();
    const phone = document.getElementById("order-phone").value.trim();
    const amount = document.getElementById("order-amount").value.trim();
    const currency = document.getElementById("order-currency").value;

    if (!name || !phone || !amount || !currency) {
      alert("الرجاء ملء جميع الحقول المطلوبة.");
      return;
    }

    // Simulate submission loading states
    const submitBtn = orderForm.querySelector("button[type='submit']");
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "جاري إرسال طلبك...";

    setTimeout(() => {
      // Re-enable
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;

      // Show success overlay or dialog
      showOrderSuccess(name, phone, amount, currency);
      orderForm.reset();
      calculateConversion();
    }, 1500);
  });

  function showOrderSuccess(name, phone, amount, currency) {
    const currencyName = currencyRates[currency]?.name || currency;
    
    // Create success alert element dynamically
    const alertDiv = document.createElement("div");
    alertDiv.style.position = "fixed";
    alertDiv.style.top = "0";
    alertDiv.style.left = "0";
    alertDiv.style.width = "100%";
    alertDiv.style.height = "100%";
    alertDiv.style.backgroundColor = "rgba(0,0,0,0.6)";
    alertDiv.style.backdropFilter = "blur(8px)";
    alertDiv.style.display = "flex";
    alertDiv.style.alignItems = "center";
    alertDiv.style.justifyContent = "center";
    alertDiv.style.zIndex = "3000";
    alertDiv.style.opacity = "0";
    alertDiv.style.transition = "opacity 0.3s ease";
    
    alertDiv.innerHTML = `
      <div class="panel" style="max-width: 450px; width: 90%; text-align: center; border-radius: var(--radius-lg); transform: scale(0.9); transition: transform 0.3s ease; direction: rtl;">
        <div class="feature-icon-wrapper" style="background-color: var(--color-primary-glow); color: var(--color-primary); width: 64px; height: 64px; margin-bottom: 20px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="width: 28px; height: 28px;">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 style="font-size: 1.6rem; margin-bottom: 12px; font-weight: 800;">تم إرسال طلبك بنجاح!</h3>
        <p style="color: var(--text-secondary); margin-bottom: 24px; font-size: 0.95rem; line-height: 1.5;">
          عزيزنا <strong>${name}</strong>، لقد تلقينا طلب صرف بمبلغ <strong>${amount} ${currencyName}</strong>. 
          سيقوم موظف خدمة العملاء بصرافة وادي الكوف بالتواصل معك قريباً على الرقم <strong>${phone}</strong> لتأكيد عمليتك واستلام المبلغ من فرعنا بالمرج.
        </p>
        <button id="close-alert-btn" class="btn btn-primary" style="width: 100%;">حسناً، شكراً لك</button>
      </div>
    `;

    document.body.appendChild(alertDiv);
    
    // Trigger animations
    setTimeout(() => {
      alertDiv.style.opacity = "1";
      alertDiv.querySelector(".panel").style.transform = "scale(1)";
    }, 50);

    const closeBtn = alertDiv.querySelector("#close-alert-btn");
    closeBtn.addEventListener("click", () => {
      alertDiv.style.opacity = "0";
      alertDiv.querySelector(".panel").style.transform = "scale(0.9)";
      setTimeout(() => {
        alertDiv.remove();
      }, 300);
    });
  }
});
