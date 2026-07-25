/* ==========================================================================
   Frischtier™ — theme behaviour
   Plain ES2017, no build step, no dependencies. Replaces the Framer Motion
   and React state from the original Next.js build.
   ========================================================================== */

(function () {
  "use strict";

  var money = window.Frischtier && window.Frischtier.moneyFormat;

  /* --------------------------------------------------------- utilities --- */

  function formatMoney(cents) {
    if (typeof cents !== "number") return "";
    var amount = (cents / 100).toFixed(2);
    if (!money) return amount;
    // Supports the {{amount_with_comma_separator}} family well enough for
    // the shapes Shopify ships by default.
    var withComma = money.indexOf("comma_separator") !== -1;
    var noDecimals = money.indexOf("no_decimals") !== -1;
    var parts = (cents / 100).toFixed(noDecimals ? 0 : 2).split(".");
    parts[0] = parts[0].replace(
      /\B(?=(\d{3})+(?!\d))/g,
      withComma ? "." : ","
    );
    var value = parts.join(withComma ? "," : ".");
    return money.replace(/\{\{\s*\w+\s*\}\}/, value);
  }

  function toast(message) {
    var el = document.getElementById("toast");
    if (!el) return;
    el.textContent = message;
    el.classList.add("is-visible");
    clearTimeout(el._timer);
    el._timer = setTimeout(function () {
      el.classList.remove("is-visible");
    }, 2600);
  }

  /* ---------------------------------------------------- reveal on scroll --- */

  function initReveal() {
    var nodes = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!nodes.length) return;

    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) {
        n.classList.add("is-visible");
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-80px 0px", threshold: 0 }
    );

    nodes.forEach(function (n) {
      io.observe(n);
    });
  }

  /* ---------------------------------------------------------- mobile nav --- */

  function initMobileNav() {
    document.querySelectorAll("[data-menu-toggle]").forEach(function (btn) {
      if (btn._bound) return;
      btn._bound = true;
      btn.addEventListener("click", function () {
        var target = document.getElementById(btn.getAttribute("aria-controls"));
        if (!target) return;
        var open = target.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  /* ------------------------------------------------------------ marquee --- */

  // The CSS animation translates the track by -50%, so the item list has to be
  // duplicated to exactly twice its visible width for a seamless loop.
  function initMarquee() {
    document.querySelectorAll("[data-marquee]").forEach(function (track) {
      if (track._filled) return;
      track._filled = true;
      var original = Array.prototype.slice.call(track.children);
      if (!original.length) return;

      var viewport = track.parentElement.offsetWidth || window.innerWidth;
      var guard = 0;
      while (track.scrollWidth < viewport * 2 && guard < 20) {
        original.forEach(function (child) {
          track.appendChild(child.cloneNode(true));
        });
        guard++;
      }
      // Duplicate the whole set once more so -50% lands on an identical frame.
      Array.prototype.slice.call(track.children).forEach(function (child) {
        track.appendChild(child.cloneNode(true));
      });
    });
  }

  /* ------------------------------------------------------------ gallery --- */

  function initGallery() {
    document.querySelectorAll("[data-gallery]").forEach(function (gallery) {
      if (gallery._bound) return;
      gallery._bound = true;
      var main = gallery.querySelector("[data-gallery-main]");
      if (!main) return;

      gallery.addEventListener("click", function (event) {
        var thumb = event.target.closest("[data-gallery-thumb]");
        if (!thumb) return;
        showMedia(gallery, thumb.getAttribute("data-media-id"));
      });
    });
  }

  function showMedia(gallery, mediaId) {
    if (!mediaId) return;
    var main = gallery.querySelector("[data-gallery-main]");
    var thumb = gallery.querySelector(
      '[data-gallery-thumb][data-media-id="' + mediaId + '"]'
    );
    if (!main || !thumb) return;

    var img = thumb.querySelector("img");
    var full = thumb.getAttribute("data-media-src");
    var mainImg = main.querySelector("img");
    if (!mainImg) return;

    mainImg.style.opacity = "0";
    var next = new Image();
    next.onload = function () {
      mainImg.src = full || (img && img.src);
      mainImg.srcset = "";
      mainImg.alt = (img && img.alt) || mainImg.alt;
      mainImg.style.opacity = "1";
    };
    next.src = full || (img && img.src);

    gallery.querySelectorAll("[data-gallery-thumb]").forEach(function (t) {
      t.setAttribute(
        "aria-current",
        t === thumb ? "true" : "false"
      );
    });
  }

  /* ---------------------------------------------------------- quantity --- */

  function initQuantity() {
    document.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-qty-change]");
      if (!btn) return;
      var wrap = btn.closest("[data-qty]");
      if (!wrap) return;
      var input = wrap.querySelector("input");
      if (!input) return;

      var step = parseInt(btn.getAttribute("data-qty-change"), 10);
      var min = parseInt(input.getAttribute("min") || "1", 10);
      var next = Math.max(min, (parseInt(input.value, 10) || min) + step);
      if (next === parseInt(input.value, 10)) return;

      input.value = next;
      input.dispatchEvent(new Event("change", { bubbles: true }));
    });
  }

  /* ---------------------------------------------------- variant picker --- */

  function initVariantPickers() {
    document.querySelectorAll("[data-product-form]").forEach(function (root) {
      if (root._bound) return;
      root._bound = true;

      var dataEl = root.querySelector("[data-product-json]");
      if (!dataEl) return;

      var product;
      try {
        product = JSON.parse(dataEl.textContent);
      } catch (e) {
        return;
      }

      var groups = root.querySelectorAll("[data-option-index]");
      // Single-variant products have nothing to pick — the form Liquid already
      // rendered the right variant id and button state.
      if (!groups.length) return;

      var selected = [];
      groups.forEach(function (group) {
        var idx = parseInt(group.getAttribute("data-option-index"), 10);
        var active = group.querySelector("[data-option-value].is-active");
        selected[idx] = active ? active.getAttribute("data-option-value") : null;
      });

      root.addEventListener("click", function (event) {
        var btn = event.target.closest("[data-option-value]");
        if (!btn) return;
        event.preventDefault();

        var group = btn.closest("[data-option-index]");
        var idx = parseInt(group.getAttribute("data-option-index"), 10);
        selected[idx] = btn.getAttribute("data-option-value");

        group.querySelectorAll("[data-option-value]").forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });

        var label = group.querySelector("[data-option-selected]");
        if (label) label.textContent = selected[idx];

        update(root, product, selected);
      });

      update(root, product, selected, true);
    });
  }

  function findVariant(product, selected) {
    return (
      product.variants.filter(function (v) {
        return selected.every(function (value, i) {
          return value == null || v.options[i] === value;
        });
      })[0] || null
    );
  }

  function update(root, product, selected, initial) {
    var variant = findVariant(product, selected);
    var idInput = root.querySelector("[data-variant-id]");
    var addBtn = root.querySelector("[data-add-to-cart]");
    var priceEl = root.querySelector("[data-price]");
    var wasEl = root.querySelector("[data-price-was]");
    var saveEl = root.querySelector("[data-price-save]");

    if (idInput) idInput.value = variant ? variant.id : "";

    if (addBtn) {
      var unavailable = !variant || !variant.available;
      addBtn.disabled = unavailable;
      addBtn.textContent = !variant
        ? addBtn.getAttribute("data-text-unavailable") || "Unavailable"
        : variant.available
        ? addBtn.getAttribute("data-text-add") || "Add to Cart"
        : addBtn.getAttribute("data-text-soldout") || "Sold out";
    }

    if (variant) {
      if (priceEl) priceEl.textContent = formatMoney(variant.price);
      if (wasEl) {
        var hasCompare =
          variant.compare_at_price && variant.compare_at_price > variant.price;
        wasEl.textContent = hasCompare
          ? formatMoney(variant.compare_at_price)
          : "";
        wasEl.hidden = !hasCompare;
        if (saveEl) {
          saveEl.hidden = !hasCompare;
          if (hasCompare) {
            saveEl.textContent =
              (saveEl.getAttribute("data-save-label") || "Save") +
              " " +
              formatMoney(variant.compare_at_price - variant.price);
          }
        }
      }

      // Swap the gallery to the variant's own image.
      if (variant.featured_media && variant.featured_media.id) {
        var gallery = document.querySelector("[data-gallery]");
        if (gallery && !initial) {
          showMedia(gallery, String(variant.featured_media.id));
        }
      }

      // Keep the URL shareable without a page reload.
      if (!initial && window.history.replaceState) {
        var url = new URL(window.location.href);
        url.searchParams.set("variant", variant.id);
        window.history.replaceState({}, "", url.toString());
      }
    }

    markUnavailable(root, product, selected);
  }

  // Grey out option values that can't combine with the current selection.
  function markUnavailable(root, product, selected) {
    root.querySelectorAll("[data-option-index]").forEach(function (group) {
      var idx = parseInt(group.getAttribute("data-option-index"), 10);
      group.querySelectorAll("[data-option-value]").forEach(function (btn) {
        var probe = selected.slice();
        probe[idx] = btn.getAttribute("data-option-value");
        var match = product.variants.filter(function (v) {
          return probe.every(function (value, i) {
            return value == null || v.options[i] === value;
          });
        });
        var available = match.some(function (v) {
          return v.available;
        });
        btn.classList.toggle("is-unavailable", !available);
      });
    });
  }

  /* ---------------------------------------------------------- AJAX cart --- */

  function refreshCartCount() {
    return fetch(window.Shopify.routes.root + "cart.js", {
      headers: { Accept: "application/json" },
    })
      .then(function (r) {
        return r.json();
      })
      .then(function (cart) {
        document.querySelectorAll("[data-cart-count]").forEach(function (el) {
          el.textContent = cart.item_count;
          el.hidden = cart.item_count === 0;
        });
        return cart;
      });
  }

  function initAddToCart() {
    document.addEventListener("submit", function (event) {
      var form = event.target.closest('form[action*="/cart/add"]');
      if (!form) return;
      event.preventDefault();

      var btn = form.querySelector("[data-add-to-cart]");
      var original = btn ? btn.textContent : "";
      if (btn) {
        btn.disabled = true;
        btn.textContent = btn.getAttribute("data-text-adding") || "Adding…";
      }

      fetch(window.Shopify.routes.root + "cart/add.js", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })
        .then(function (r) {
          return r.json().then(function (body) {
            if (!r.ok) throw new Error(body.description || body.message);
            return body;
          });
        })
        .then(function (item) {
          toast("Added to cart 🐾 " + item.product_title);
          return refreshCartCount();
        })
        .catch(function (err) {
          toast(err.message || "Sorry, that could not be added.");
        })
        .finally(function () {
          if (btn) {
            btn.disabled = false;
            btn.textContent = original;
          }
        });
    });
  }

  /* --------------------------------------------------------- cart page --- */

  function initCartPage() {
    var page = document.querySelector("[data-cart-page]");
    if (!page || page._bound) return;
    page._bound = true;

    function change(line, quantity) {
      page.style.opacity = "0.55";
      page.style.pointerEvents = "none";

      fetch(window.Shopify.routes.root + "cart/change.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ line: line, quantity: quantity }),
      })
        .then(function (r) {
          return r.json();
        })
        .then(function () {
          // Re-render from the server so line totals, discounts and shipping
          // thresholds all stay authoritative.
          window.location.reload();
        })
        .catch(function () {
          page.style.opacity = "";
          page.style.pointerEvents = "";
          toast("Could not update the cart.");
        });
    }

    page.addEventListener("click", function (event) {
      var remove = event.target.closest("[data-cart-remove]");
      if (remove) {
        event.preventDefault();
        change(parseInt(remove.getAttribute("data-cart-remove"), 10), 0);
      }
    });

    page.addEventListener("change", function (event) {
      var input = event.target.closest("[data-cart-qty]");
      if (!input) return;
      var line = parseInt(input.getAttribute("data-cart-qty"), 10);
      change(line, Math.max(0, parseInt(input.value, 10) || 0));
    });
  }

  /* ------------------------------------------------------------- boot --- */

  function init() {
    initReveal();
    initMobileNav();
    initMarquee();
    initGallery();
    initQuantity();
    initVariantPickers();
    initAddToCart();
    initCartPage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Re-bind after the theme editor swaps a section in.
  document.addEventListener("shopify:section:load", init);
  document.addEventListener("shopify:section:select", init);
})();
