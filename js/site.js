(function () {
  const chargify = {
    monthly: {
      political: {
        user1: "https://idonatepro.chargifypay.com/subscribe/x53c5mjpp24k/monthly-fundraiser-plan",
        user2: "https://idonatepro.chargifypay.com/subscribe/6vs458c3f62p/monthly-organization-plan",
        office: "https://idonatepro.chargifypay.com/subscribe/dmsn7y3jnwqm/monthly-office-plan",
        enterprise: "https://idonatepro.chargifypay.com/subscribe/ksj98nzhyk2y/monthly-enterprise-plan"
      },
      nonprofit: {
        user1: "https://idonatepro.chargifypay.com/subscribe/yhc7bbwc8f8w/monthly-non-profit-fundraiser-plan",
        user2: "https://idonatepro.chargifypay.com/subscribe/ndgg3sjsjqft/monthly-non-profit-organization-plan",
        office: "https://idonatepro.chargifypay.com/subscribe/kt4j2hvh9x6b/monthly-non-profit-office-plan",
        enterprise: "https://idonatepro.chargifypay.com/subscribe/tztfz4mrgsbq/monthly-non-profit-enterprise-plan"
      }
    },
    trial: {
      political: {
        user1: "https://idonatepro.chargifypay.com/subscribe/f9753bp8xqnn/30-day-trial-monthly-fundraiser-plan",
        user2: "https://idonatepro.chargifypay.com/subscribe/m84kgx46kj8m/30-day-trial-monthly-organization-plan",
        office: "https://idonatepro.chargifypay.com/subscribe/kg3vzxxrz245/30-day-trial-monthly-office-plan",
        enterprise: "https://idonatepro.chargifypay.com/subscribe/pw25x642msjt/30-day-trial-monthly-enterprise-plan"
      },
      nonprofit: {
        user1: "https://idonatepro.chargifypay.com/subscribe/8ym9z4gfx9sv/30-day-trial-monthly-non-profit-fundraiser-plan",
        user2: "https://idonatepro.chargifypay.com/subscribe/sv3w5978jpkw/30-day-trial-monthly-non-profit-organization-plan",
        office: "https://idonatepro.chargifypay.com/subscribe/cv6fsyjxdkjy/30-day-trial-monthly-non-profit-office-plan",
        enterprise: "https://idonatepro.chargifypay.com/subscribe/fyyhccqrs5kq/30-day-trial-monthly-non-profit-enterprise-plan"
      }
    },
    annual: {
      political: {
        user1: "https://idonatepro.chargifypay.com/subscribe/btcb33gpvhfc/annual-fundraiser-plan",
        user2: "https://idonatepro.chargifypay.com/subscribe/gd7jvdzgp8zf/annual-organization-plan",
        office: "https://idonatepro.chargifypay.com/subscribe/5885vwr53r8p/annual-office-plan",
        enterprise: "https://idonatepro.chargifypay.com/subscribe/whzgy7pf2p3t/annual-enterprise-plan"
      },
      nonprofit: {
        user1: "https://idonatepro.chargifypay.com/subscribe/jdymx8kcr9rc/annual-non-profit-fundraiser-plan",
        user2: "https://idonatepro.chargifypay.com/subscribe/3wbz7bbn77x4/annual-non-profit-organization-plan",
        office: "https://idonatepro.chargifypay.com/subscribe/wytx8vvndd6n/annual-non-profit-office-plan",
        enterprise: "https://idonatepro.chargifypay.com/subscribe/m9xbcrh4txmc/annual-non-profit-enterprise-plan"
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
      { text: "iDONATEpro is unmatched.", name: "Claire" },
      { text: "We spent over $50k trying to modify SalesForce to our needs with an $800/month fee - it…", name: "Lisa" },
      { text: "We've worked with hundreds of candidates, and we've tried dozens of programs.", name: "Matthew" },
      { text: "iDONATEpro gives users comprehensive information at their fingertips.", name: "Joanne" },
      { text: "As Finance Director on a targeted race, my documents, reports, and email blasts must…", name: "Ann" },
      { text: "iDONATEpro has increased my productivity tenfold.", name: "Ashley" },
      { text: "I love using iDONATEpro.", name: "Haley" },
      { text: "I am so impressed with you guy’s customer service and promptness to all my insane questions.", name: "Jenise" },
      { text: "Thank you so much for your help!", name: "Ieva" },
      { text: "We used to have Aristotle for our database.", name: "Molly" },
      { text: "We were using Aristotle's Campaign Manager and it's terrible.", name: "Kayla" },
      { text: "iDONATEpro is Awesome! I now know what all the great things I heard from other Florida…", name: "Beth" },
      { text: "I love all the updates you are making!", name: "Julie" },
      { text: "You guys are ROCK STARS!", name: "Janel" },
      { text: "Your product is amazing! I was SVP for both DDC Advocacy and Aristotle and I say this with…", name: "Holly" },
      { text: "Thanks for being amazing to work with.", name: "Jessica" },
      { text: "Y'all are the best!", name: "Hillary" },
      { text: "This is the best Fundraising database I've ever seen!", name: "Cherish" },
      { text: "I love how you are making my life easy!", name: "Jack" },
      { text: "Thank you for getting our data sorted out!", name: "Samantha" },
      { text: "Thanks so much for all your help – you all are really wonderful!", name: "Julie" },
      { text: "Thank you for your software!", name: "Jen" },
      { text: "Damn right! Thanks, you guys are the best.", name: "Samantha" },
      { text: "You are wonderful, thank you so much!!", name: "Josalun" },
      { text: "Thank you again for all your help! If you guys ever want a testimonial, let us know.", name: "Tom" },
      { text: "I can’t say enough good about you guys.", name: "Cindy" },
      { text: "Your database is awesome, and your customer service is the best I have ever worked with.", name: "Teresa" },
      { text: "This is Exactly what we have been looking for!", name: "David" },
      { text: "This right here blows me away.", name: "Sandy" },
      { text: "Love your awesome customer service!", name: "Janel" },
      { text: "You are always awesome!", name: "T.W." },
      { text: "Thank you so much for this super quick turnaround.", name: "Stephanie" },
      { text: "This is Amazing! This is going to save me so much time! Thank you!", name: "Emily" },
      { text: "Thank you for working with us over the years while we have been building our business.", name: "Megan" },
      { text: "Thank you so much for all of the help you are giving me!", name: "Regina" },
      { text: "I love working in your database!", name: "Roxanne" },
      { text: "You do such good work!", name: "J.D." },
      { text: "I have been looking for this for a million years! I am so glad I found you! All the other…", name: "Jess" },
      { text: "We Love iDONATEpro and Our Clients LOVE the Call Sheets!", name: "Chelsey" },
      { text: "This is awesome!! Thank you so much!! :)", name: "Stephanie" },
      { text: "Really appreciate all you and your team are doing to support us!", name: "Michelle" },
      { text: "This is the Cleanest, Easiest to use CRM database I have ever used, and I have used a ton…", name: "Zac" },
      { text: "We wanted you to know this has been a HUGE help and we are really grateful!", name: "Kelly" },
      { text: "This is Exactly what we Need.", name: "Casey" },
      { text: "Just wanted to send a note to say thank you all for operating such an amazing database…", name: "Corinne" }
    ];
    rotateEl.innerHTML = "";
    const slides = quotes.map((q, idx) => {
      const slide = document.createElement("span");
      slide.className = "quote-slide" + (idx === 0 ? " is-active" : "");
      slide.innerHTML = "<span class=\"quote-text\">\u201c" + q.text + "\u201d</span><span class=\"quote-name\">\u2014 " + q.name + "</span>";
      rotateEl.appendChild(slide);
      return slide;
    });
    let i = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotion) {
      setInterval(() => {
        slides[i].classList.remove("is-active");
        i = (i + 1) % slides.length;
        slides[i].classList.add("is-active");
      }, 7000);
    }
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
    const fallback = signupRoot.querySelector("[data-fallback]");
    const direct = signupRoot.querySelectorAll("[data-direct]");
    const hint = signupRoot.querySelector("[data-hint]");
    const lede = document.querySelector("[data-signup-lede]");
    const trialOnly = document.querySelectorAll("[data-trial-only]");
    const holder = signupRoot.querySelector(".iframe-frame");

    function currentUrl() {
      const audience = nonprofit ? "nonprofit" : "political";
      return (chargify[term] && chargify[term][audience] && chargify[term][audience][users]) || null;
    }

    function setFrame(url) {
      const frame = signupRoot.querySelector("#chargifyFrame");
      if (!url) {
        if (frame) {
          frame.removeAttribute("src");
          frame.classList.add("hidden");
        }
        return;
      }
      if (frame && frame.getAttribute("src") === url) {
        frame.classList.remove("hidden");
        return;
      }
      const next = document.createElement("iframe");
      next.id = "chargifyFrame";
      next.title = "iDONATEpro Sign Up";
      next.name = "chargifyframe";
      next.scrolling = "no";
      next.style.width = "100%";
      next.style.minHeight = "180rem";
      next.style.height = "180rem";
      next.style.border = "0";
      next.style.display = "block";
      next.setAttribute("sandbox", "allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation");
      next.src = url;
      if (frame) frame.replaceWith(next);
      else if (holder) holder.prepend(next);
    }

    function refresh() {
      const url = currentUrl();
      if (lede) {
        lede.textContent = "Onboarding is Simple. We typically have new accounts live in a couple days.";
      }
      trialOnly.forEach((el) => el.classList.toggle("hidden", term !== "trial"));
      if (hint) {
        if (term === "annual") {
          hint.textContent = "1 Month Free - 11 Months Billed";
          hint.classList.remove("hidden");
        } else if (term === "trial") {
          hint.textContent = "Test with up to 3 Worksheets and 3 Campaigns.";
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
        setFrame(url);
        if (fallback) fallback.classList.add("hidden");
        direct.forEach((a) => {
          a.href = url;
          a.classList.remove("hidden");
        });
      } else {
        setFrame(null);
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

  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    const opened = Date.now();
    if (/[?&]sent=1/.test(location.search) || location.hash.indexOf("sent=1") !== -1) {
      contactForm.classList.add("sent");
    }
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const trap = contactForm.querySelector("[name=company_website]");
      const honey = contactForm.querySelector("[name=_gotcha]");
      if ((trap && trap.value) || (honey && honey.value)) return;
      if (Date.now() - opened < 2500) return;
      const body = new FormData(contactForm);
      fetch(contactForm.action, {
        method: "POST",
        body,
        headers: { Accept: "application/json" }
      }).then((res) => {
        if (!res.ok) throw new Error("send failed");
        contactForm.classList.add("sent");
        contactForm.reset();
      }).catch(() => {
        contactForm.submit();
      });
    });
  }


  window.addEventListener("message", (e) => {
    if (typeof e.origin === "string" && e.origin.indexOf("chargifypay.com") !== -1) {
      const data = e.data || {};
      const height = data.height || data.frameHeight || (data.payload && data.payload.height);
      const frame = document.getElementById("chargifyFrame");
      if (height && frame) frame.style.height = Number(height) + "px";
      return;
    }
    if (typeof e.origin !== "string" || e.origin.indexOf("calendly.com") === -1) return;
    const data = e.data || {};
    const height = data.payload && data.payload.height;
    if (!height || !data.event || String(data.event).indexOf("calendly") !== 0) return;
    const iframe = document.querySelector(".calendly-wrap iframe");
    if (iframe) iframe.style.height = height + "px";
  });


  // US site notice (cookies / Analytics) — show once until Got it
  (function siteNotice() {
    var KEY = "idp_site_notice_ok";
    try {
      if (localStorage.getItem(KEY) === "1") return;
    } catch (e) {}
    var bar = document.createElement("div");
    bar.className = "site-notice";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Site notice");
    bar.innerHTML =
      '<div class="site-notice-inner">' +
      '<p class="site-notice-copy">We use cookies and similar tools (including analytics) to run and improve this site. See our <a href="/privacy-policy/">Privacy Policy</a>.</p>' +
      '<div class="site-notice-actions"><button type="button" class="site-notice-gotit" data-site-notice-ok>Got it</button></div>' +
      "</div>";
    document.body.appendChild(bar);
    var btn = bar.querySelector("[data-site-notice-ok]");
    if (!btn) return;
    btn.addEventListener("click", function () {
      try {
        localStorage.setItem(KEY, "1");
      } catch (e) {}
      bar.hidden = true;
      bar.remove();
    });
  })();

})();
