(function () {
  const chargify = {
    monthly: {
      political: {
        user1: "https://idonatepro.chargify.com/subscribe/x53c5mjpp24k/monthly-fundraiser-plan",
        user2: "https://idonatepro.chargify.com/subscribe/6vs458c3f62p/monthly-organization-plan",
        office: "https://idonatepro.chargify.com/subscribe/dmsn7y3jnwqm/monthly-office-plan",
        enterprise: "https://idonatepro.chargify.com/subscribe/ksj98nzhyk2y/monthly-enterprise-plan"
      }
    },
    trial: {
      political: {
        user1: "https://idonatepro.chargify.com/subscribe/f9753bp8xqnn/30-day-trial-monthly-fundraiser-plan",
        user2: "https://idonatepro.chargify.com/subscribe/m84kgx46kj8m/30-day-trial-monthly-organization-plan",
        office: "https://idonatepro.chargify.com/subscribe/kg3vzxxrz245/30-day-trial-monthly-office-plan",
        enterprise: "https://idonatepro.chargify.com/subscribe/pw25x642msjt/30-day-trial-monthly-enterprise-plan"
      }
    }
  };

  function closeAll() {
    document.querySelectorAll(".dropdown.open").forEach((el) => el.classList.remove("open"));
  }

  document.querySelectorAll("[data-dropdown]").forEach((wrap) => {
    const btn = wrap.querySelector("button");
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = wrap.classList.contains("open");
      closeAll();
      wrap.classList.toggle("open", !open);
    });
  });
  document.addEventListener("click", closeAll);

  const menuBtn = document.querySelector("[data-menu]");
  const panel = document.querySelector("[data-mobile-panel]");
  if (menuBtn && panel) {
    menuBtn.addEventListener("click", () => panel.classList.toggle("open"));
  }


  const rotateEl = document.querySelector("[data-rotate]");
  if (rotateEl) {
    const quotes = [
      { text: "iDONATEpro is simply the best.", name: "Matthew" },
      { text: "It's given Fundraisers the secret weapon to raising money.", name: "Claire" },
      { text: "iDONATEpro is so much better for fundraising!", name: "Molly" },
      { text: "The Cleanest, Easiest to use CRM I have ever used.", name: "Zac" }
    ];
    function renderQuote(q) {
      rotateEl.innerHTML = "<span class=\"quote-text\">\u201c" + q.text + "\u201d</span><span class=\"quote-name\">\u2014 " + q.name + "</span>";
    }
    renderQuote(quotes[0]);
    let i = 0;
    setInterval(() => {
      i = (i + 1) % quotes.length;
      rotateEl.style.opacity = "0";
      setTimeout(() => {
        renderQuote(quotes[i]);
        rotateEl.style.opacity = "1";
      }, 220);
    }, 4500);
  }

  const prices = {
    political: { monthly: [150, 275, 350, 575], annual: [1650, 3025, 3850, 6325] },
    nonprofit: { monthly: [60, 120, 250, 400], annual: [660, 1320, 2750, 4400] }
  };

  const pricingRoot = document.querySelector("[data-pricing]");
  if (pricingRoot) {
    let audience = "political";
    let cycle = "monthly";
    const audienceBtns = pricingRoot.querySelectorAll("[data-audience]");
    const cycleBtns = pricingRoot.querySelectorAll("[data-cycle]");
    const amountEls = pricingRoot.querySelectorAll("[data-amount]");
    const suffixEls = pricingRoot.querySelectorAll("[data-suffix]");
    const signupLinks = pricingRoot.querySelectorAll("[data-signup]");
    const trialLinks = pricingRoot.querySelectorAll("[data-trial]");
    const missingNote = pricingRoot.querySelector("[data-missing]");

    function refresh() {
      const list = prices[audience][cycle];
      amountEls.forEach((el, i) => {
        el.textContent = "$" + list[i].toLocaleString();
      });
      suffixEls.forEach((el) => {
        el.textContent = cycle === "monthly" ? "/mo" : "/yr";
      });
      const keys = ["user1", "user2", "office", "enterprise"];
      signupLinks.forEach((a, i) => {
        const url = chargify.monthly[audience] && chargify.monthly[audience][keys[i]];
        if (cycle === "monthly" && url) {
          a.href = url;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.textContent = "Sign Up";
        } else {
          a.href = "/signup/";
          a.removeAttribute("target");
          a.textContent = "Request this plan";
        }
      });
      trialLinks.forEach((a, i) => {
        const url = chargify.trial[audience] && chargify.trial[audience][keys[i]];
        if (url) {
          a.href = url;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.textContent = "Start 14-Day Trial";
        } else {
          a.href = "/signup/";
          a.removeAttribute("target");
          a.textContent = "Start 14-Day Trial";
        }
      });
      if (missingNote) {
        const missing = cycle === "annual" || audience === "nonprofit";
        missingNote.classList.toggle("hidden", !missing);
      }
    }

    audienceBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        audience = btn.dataset.audience;
        audienceBtns.forEach((b) => b.classList.toggle("active", b === btn));
        refresh();
      });
    });
    cycleBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        cycle = btn.dataset.cycle;
        cycleBtns.forEach((b) => b.classList.toggle("active", b === btn));
        refresh();
      });
    });
    refresh();
  }

  const signupRoot = document.querySelector("[data-signup-form]");
  if (signupRoot) {
    let term = "trial";
    let nonprofit = false;
    let users = "user1";
    const termBtns = signupRoot.querySelectorAll("[data-term]");
    const userBtns = signupRoot.querySelectorAll("[data-users]");
    const npBtn = signupRoot.querySelector("[data-nonprofit]");
    const frame = signupRoot.querySelector("#chargifyFrame");
    const fallback = signupRoot.querySelector("[data-fallback]");
    const direct = signupRoot.querySelectorAll("[data-direct]");
    const hint = signupRoot.querySelector("[data-hint]");

    function currentUrl() {
      if (nonprofit || term === "annual") return null;
      return (chargify[term] && chargify[term].political && chargify[term].political[users]) || null;
    }

    function refresh() {
      const url = currentUrl();
      if (hint) {
        hint.textContent = nonprofit
          ? "Nonprofit 501(c) pricing is $60 / $120 / $250 / $400 monthly, billed annually at 11 months. Chargify nonprofit checkout IDs were not in the captured site, so we will connect you by email or demo."
          : term === "annual"
            ? "Annual plans are billed at 11 times the monthly rate (save 1 month). Chargify annual checkout IDs were not in the captured site."
            : "Test with up to 3 Worksheets and 3 Campaigns — 14-day trial, no credit card required to start.";
      }
      if (url) {
        if (frame) {
          frame.src = url;
          frame.classList.remove("hidden");
        }
        if (fallback) fallback.classList.add("hidden");
        direct.forEach((a) => {
          a.href = url;
          a.classList.remove("hidden");
        });
      } else {
        if (frame) {
          frame.removeAttribute("src");
          frame.classList.add("hidden");
        }
        if (fallback) fallback.classList.remove("hidden");
        direct.forEach((a) => a.classList.add("hidden"));
      }
    }

    termBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        term = btn.dataset.term;
        termBtns.forEach((b) => b.classList.toggle("active", b === btn));
        refresh();
      });
    });
    userBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        users = btn.dataset.users;
        userBtns.forEach((b) => b.classList.toggle("active", b === btn));
        refresh();
      });
    });
    if (npBtn) {
      npBtn.addEventListener("click", () => {
        nonprofit = !nonprofit;
        npBtn.classList.toggle("on", nonprofit);
        refresh();
      });
    }
    refresh();
  }
})();
