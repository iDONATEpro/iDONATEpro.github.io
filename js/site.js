(function () {
  const chargify = {
    monthly: {
      political: {
        user1: "https://idonatepro.chargify.com/subscribe/x53c5mjpp24k/monthly-fundraiser-plan",
        user2: "https://idonatepro.chargify.com/subscribe/6vs458c3f62p/monthly-organization-plan",
        office: "https://idonatepro.chargify.com/subscribe/dmsn7y3jnwqm/monthly-office-plan",
        enterprise: "https://idonatepro.chargify.com/subscribe/ksj98nzhyk2y/monthly-enterprise-plan"
      },
      nonprofit: {
        user1: "https://idonatepro.chargify.com/subscribe/yhc7bbwc8f8w/monthly-non-profit-fundraiser-plan",
        user2: "https://idonatepro.chargify.com/subscribe/ndgg3sjsjqft/monthly-non-profit-organization-plan",
        office: "https://idonatepro.chargify.com/subscribe/kt4j2hvh9x6b/monthly-non-profit-office-plan",
        enterprise: "https://idonatepro.chargify.com/subscribe/tztfz4mrgsbq/monthly-non-profit-enterprise-plan"
      }
    },
    trial: {
      political: {
        user1: "https://idonatepro.chargify.com/subscribe/f9753bp8xqnn/30-day-trial-monthly-fundraiser-plan",
        user2: "https://idonatepro.chargify.com/subscribe/m84kgx46kj8m/30-day-trial-monthly-organization-plan",
        office: "https://idonatepro.chargify.com/subscribe/kg3vzxxrz245/30-day-trial-monthly-office-plan",
        enterprise: "https://idonatepro.chargify.com/subscribe/pw25x642msjt/30-day-trial-monthly-enterprise-plan"
      },
      nonprofit: {
        user1: "https://idonatepro.chargify.com/subscribe/8ym9z4gfx9sv/30-day-trial-monthly-non-profit-fundraiser-plan",
        user2: "https://idonatepro.chargify.com/subscribe/sv3w5978jpkw/30-day-trial-monthly-non-profit-organization-plan",
        office: "https://idonatepro.chargify.com/subscribe/cv6fsyjxdkjy/30-day-trial-monthly-non-profit-office-plan",
        enterprise: "https://idonatepro.chargify.com/subscribe/fyyhccqrs5kq/30-day-trial-monthly-non-profit-enterprise-plan"
      }
    },
    annual: {
      political: {
        user1: "https://idonatepro.chargify.com/subscribe/btcb33gpvhfc/annual-fundraiser-plan",
        user2: "https://idonatepro.chargify.com/subscribe/gd7jvdzgp8zf/annual-organization-plan",
        office: "https://idonatepro.chargify.com/subscribe/5885vwr53r8p/annual-office-plan",
        enterprise: "https://idonatepro.chargify.com/subscribe/whzgy7pf2p3t/annual-enterprise-plan"
      },
      nonprofit: {
        user1: "https://idonatepro.chargify.com/subscribe/jdymx8kcr9rc/annual-non-profit-fundraiser-plan",
        user2: "https://idonatepro.chargify.com/subscribe/3wbz7bbn77x4/annual-non-profit-organization-plan",
        office: "https://idonatepro.chargify.com/subscribe/wytx8vvndd6n/annual-non-profit-office-plan",
        enterprise: "https://idonatepro.chargify.com/subscribe/m9xbcrh4txmc/annual-non-profit-enterprise-plan"
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
      function signupHref(term, usersKey) {
        let href = "/signup/?term=" + encodeURIComponent(term) + "&users=" + encodeURIComponent(usersKey);
        if (audience === "nonprofit") href += "&nonprofit=1";
        return href + "#checkout";
      }
      signupLinks.forEach((a, i) => {
        a.href = signupHref(cycle === "annual" ? "annual" : "monthly", keys[i]);
        a.removeAttribute("target");
        a.removeAttribute("rel");
        a.textContent = "Sign Up";
      });
      trialLinks.forEach((a, i) => {
        a.href = signupHref("trial", keys[i]);
        a.removeAttribute("target");
        a.removeAttribute("rel");
        a.textContent = "Start 14-Day Trial";
      });
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
    const params = new URLSearchParams(location.search);
    if ({ trial: 1, monthly: 1, annual: 1 }[params.get("term")]) term = params.get("term");
    if ({ user1: 1, user2: 1, office: 1, enterprise: 1 }[params.get("users")]) users = params.get("users");
    if (params.get("nonprofit") === "1") nonprofit = true;
    const termBtns = signupRoot.querySelectorAll("[data-term]");
    const userBtns = signupRoot.querySelectorAll("[data-users]");
    const npBtn = signupRoot.querySelector("[data-nonprofit]");
    termBtns.forEach((b) => b.classList.toggle("active", b.dataset.term === term));
    userBtns.forEach((b) => b.classList.toggle("active", b.dataset.users === users));
    if (npBtn) {
      npBtn.classList.toggle("on", nonprofit);
      npBtn.setAttribute("aria-pressed", nonprofit ? "true" : "false");
    }
    const frame = signupRoot.querySelector("#chargifyFrame");
    const fallback = signupRoot.querySelector("[data-fallback]");
    const direct = signupRoot.querySelectorAll("[data-direct]");
    const hint = signupRoot.querySelector("[data-hint]");

    function currentUrl() {
      const audience = nonprofit ? "nonprofit" : "political";
      return (chargify[term] && chargify[term][audience] && chargify[term][audience][users]) || null;
    }

    function refresh() {
      const url = currentUrl();
      if (hint) {
        if (term === "annual") {
          hint.textContent = "1 Month Free - 11 Months Billed";
          hint.classList.remove("hidden");
        } else if (nonprofit) {
          hint.textContent = "Nonprofit 501(c) pricing is $60 / $120 / $250 / $400 monthly.";
          hint.classList.remove("hidden");
        } else {
          hint.textContent = "";
          hint.classList.add("hidden");
        }
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
