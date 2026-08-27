document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");
  const heroImage = document.querySelector(".hero-image");
  const revealTargets = document.querySelectorAll(
    ".intro-content, .image-break-text, .menu-heading, .menu-item, .experience-content, .reservation"
  );

  // صور الأطباق تتبع الماوس
  menuItems.forEach((item) => {
    const preview = item.querySelector(".menu-preview");

    if (!preview) return;

    item.addEventListener("mousemove", (event) => {
      preview.style.left = event.clientX + "px";
      preview.style.top = event.clientY + "px";
    });
  });

  // Parallax خفيف للـ Hero
  if (heroImage) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      heroImage.style.transform = `scale(1.05) translateY(${scrollY * 0.08}px)`;
    });
  }

  // Reveal عند النزول
  revealTargets.forEach((element) => {
    element.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealTargets.forEach((element) => {
    observer.observe(element);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     TABLE SELECTION
  ========================= */

  const tables = document.querySelectorAll(".table.available");
  const selectedTableText = document.getElementById("selectedTable");
  const selectedGuests = document.getElementById("selectedGuests");
  const selectedLocation = document.getElementById("selectedLocation");
  const selectedView = document.getElementById("selectedView");
  const tableStatus = document.getElementById("tableStatus");
  const confirmTable = document.getElementById("confirmTable");

  let currentTable = null;

  tables.forEach((table) => {
    table.addEventListener("click", () => {
      tables.forEach((item) => item.classList.remove("selected"));

      table.classList.add("selected");
      currentTable = table;

      const tableNumber = table.dataset.table;
      const guests = table.dataset.guests;
      const location = table.dataset.location;
      const view = table.dataset.view;

      if (tableStatus) {
        tableStatus.textContent = "AVAILABLE";
      }

      if (selectedTableText) {
        selectedTableText.textContent = `TABLE ${tableNumber}`;
      }

      if (selectedGuests) {
        selectedGuests.textContent = `${guests} Guests`;
      }

      if (selectedLocation) {
        selectedLocation.textContent = location;
      }

      if (selectedView) {
        selectedView.textContent = view;
      }

      if (confirmTable) {
        confirmTable.disabled = false;
      }
    });
  });

  if (confirmTable) {
    confirmTable.addEventListener("click", () => {
      if (!currentTable) return;

      const tableNumber = currentTable.dataset.table;
      const guests = currentTable.dataset.guests;
      const location = currentTable.dataset.location;
      const view = currentTable.dataset.view;

      const message = [
        "NOIR Reservation Request",
        "",
        `Table: ${tableNumber}`,
        `Guests: ${guests}`,
        `Location: ${location}`,
        `View: ${view}`
      ].join("\n");

      const url =
        "https://wa.me/966596100109?text=" +
        encodeURIComponent(message);

      window.open(url, "_blank");
    });
  }


  /* =========================
     DELIVERY / PICKUP
  ========================= */

  const orderMethods = document.querySelectorAll(".order-method");
  const orderType = document.getElementById("orderType");

  orderMethods.forEach((button) => {
    button.addEventListener("click", () => {
      orderMethods.forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      const method = button.dataset.orderMethod;

      if (!orderType) return;

      if (method === "pickup") {
        orderType.textContent = "Pickup from Restaurant";
      } else {
        orderType.textContent = "Home Delivery";
      }
    });
  });


  /* =========================
     3D RESTAURANT MOUSE MOTION
  ========================= */

  const scene = document.getElementById("restaurantScene");
  const floor = scene?.querySelector(".restaurant-floor");

  if (
    scene &&
    floor &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  ) {
    scene.addEventListener("mousemove", (event) => {
      const rect = scene.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      const rotateZ = -3 + x * 4;
      const rotateX = 58 - y * 4;

      floor.style.transform =
        `rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`;
    });

    scene.addEventListener("mouseleave", () => {
      floor.style.transform =
        "rotateX(58deg) rotateZ(-3deg)";
    });
  }
});
/* =========================================
   NOIR — MENU, CART & ORDERING
   Unified version
========================================= */

document.addEventListener("DOMContentLoaded", function () {
  const WHATSAPP_NUMBER = "966596100109";

  /* -------------------------
     MENU: LUNCH / DINNER
  ------------------------- */

  const menuButtons = document.querySelectorAll(".menu-switch");
  const menuPanels = document.querySelectorAll("[data-menu-panel]");
  const menuDescription = document.getElementById("menuDescription");
  const menuHours = document.getElementById("menuHours");

  function switchMenu(menuName) {
    menuButtons.forEach(function (button) {
      button.classList.toggle("active", button.dataset.menu === menuName);
    });

    menuPanels.forEach(function (panel) {
      panel.classList.toggle(
        "active",
        panel.dataset.menuPanel === menuName
      );
    });

    if (menuName === "dinner") {
      if (menuDescription) {
        menuDescription.textContent =
          "A refined Saudi dinner menu inspired by traditional flavours, open-fire cooking and contemporary presentation.";
      }

      if (menuHours) {
        menuHours.textContent = "DINNER · 6:00 PM — 12:00 AM";
      }
    } else {
      if (menuDescription) {
        menuDescription.textContent =
          "A contemporary Saudi lunch menu built around familiar flavours, generous portions and modern presentation.";
      }

      if (menuHours) {
        menuHours.textContent = "LUNCH · 12:00 — 5:00 PM";
      }
    }
  }

  menuButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      switchMenu(button.dataset.menu);
    });
  });

  /* -------------------------
     CART
  ------------------------- */

  let cart = [];

  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");
  const clearCart = document.getElementById("clearCart");
  const checkoutButton = document.getElementById("checkoutButton");

  function createProduct(foodItem) {
    const title = foodItem.querySelector("h3");
    const arabic = foodItem.querySelector(".food-ar");
    const priceElement = foodItem.querySelector(".food-action > strong");

    const name =
      foodItem.dataset.name ||
      (title ? title.textContent.trim() : "Menu Item");

    let price = Number(foodItem.dataset.price);

    if (!Number.isFinite(price) || price <= 0) {
      const match = priceElement
        ? priceElement.textContent.match(/\d+(?:\.\d+)?/)
        : null;

      price = match ? Number(match[0]) : 0;
    }

    return {
      id:
        foodItem.dataset.id ||
        name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      name: name,
      arabicName:
        foodItem.dataset.nameAr ||
        (arabic ? arabic.textContent.trim() : ""),
      price: price,
      quantity: 1
    };
  }

  function getCartQuantity() {
    return cart.reduce(function (sum, item) {
      return sum + item.quantity;
    }, 0);
  }

  function getCartTotal() {
    return cart.reduce(function (sum, item) {
      return sum + item.price * item.quantity;
    }, 0);
  }

  function renderCart() {
    if (cartCount) {
      cartCount.textContent = getCartQuantity();
    }

    if (cartTotal) {
      cartTotal.textContent = getCartTotal().toFixed(0);
    }

    if (checkoutButton) {
      checkoutButton.disabled = cart.length === 0;
    }

    if (!cartItems) return;

    if (cart.length === 0) {
      cartItems.innerHTML = `
        <div class="empty-cart" id="emptyCart">
          <span>YOUR CART IS EMPTY.</span>
          <p>Add a dish from the menu to start your order.</p>
        </div>
      `;
      return;
    }

    cartItems.innerHTML = cart
      .map(function (item) {
        return `
          <div class="cart-row" data-cart-id="${item.id}">
            <div class="cart-row-info">
              <strong>${item.name}</strong>
              ${
                item.arabicName
                  ? `<span dir="rtl">${item.arabicName}</span>`
                  : ""
              }
            </div>

            <div class="cart-quantity">
              <button
                type="button"
                data-cart-action="minus"
                data-cart-id="${item.id}"
                aria-label="Decrease quantity"
              >−</button>

              <span>${item.quantity}</span>

              <button
                type="button"
                data-cart-action="plus"
                data-cart-id="${item.id}"
                aria-label="Increase quantity"
              >+</button>
            </div>

            <div class="cart-row-price">
              ${(item.price * item.quantity).toFixed(0)} SAR
            </div>

            <button
              type="button"
              class="cart-remove"
              data-cart-action="remove"
              data-cart-id="${item.id}"
            >
              REMOVE
            </button>
          </div>
        `;
      })
      .join("");
  }

  document.addEventListener("click", function (event) {
    const addButton = event.target.closest(".add-to-cart");
    if (!addButton) return;

    const foodItem = addButton.closest(".food-item");
    if (!foodItem) return;

    const product = createProduct(foodItem);

    if (!product.price) {
      console.warn("NOIR: Missing price for", product.name);
      return;
    }

    const existing = cart.find(function (item) {
      return item.id === product.id;
    });

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push(product);
    }

    const originalText = addButton.textContent;
    addButton.textContent = "ADDED ✓";
    addButton.classList.add("added");

    window.setTimeout(function () {
      addButton.textContent = originalText || "ADD +";
      addButton.classList.remove("added");
    }, 700);

    renderCart();
  });

  if (cartItems) {
    cartItems.addEventListener("click", function (event) {
      const button = event.target.closest("[data-cart-action]");
      if (!button) return;

      const id = button.dataset.cartId;
      const action = button.dataset.cartAction;

      const product = cart.find(function (item) {
        return item.id === id;
      });

      if (!product) return;

      if (action === "plus") {
        product.quantity += 1;
      }

      if (action === "minus") {
        product.quantity -= 1;

        if (product.quantity <= 0) {
          cart = cart.filter(function (item) {
            return item.id !== id;
          });
        }
      }

      if (action === "remove") {
        cart = cart.filter(function (item) {
          return item.id !== id;
        });
      }

      renderCart();
    });
  }

  if (clearCart) {
    clearCart.addEventListener("click", function () {
      cart = [];
      renderCart();
    });
  }

  /* -------------------------
     DELIVERY / PICKUP
  ------------------------- */

  const methodButtons = document.querySelectorAll(".order-method");
  const deliveryFields = document.querySelector(".delivery-fields");
  const pickupFields = document.querySelector(".pickup-fields");
  const orderType = document.getElementById("orderType");
  const sendButton = document.getElementById("sendWhatsappOrder");

  let selectedMethod = "delivery";

  function setOrderMethod(method) {
    selectedMethod = method === "pickup" ? "pickup" : "delivery";

    methodButtons.forEach(function (button) {
      button.classList.toggle(
        "active",
        button.dataset.orderMethod === selectedMethod
      );
    });

    if (selectedMethod === "pickup") {
      if (deliveryFields) deliveryFields.classList.remove("active");
      if (pickupFields) pickupFields.classList.add("active");
      if (orderType) orderType.textContent = "Pickup from Branch";
    } else {
      if (pickupFields) pickupFields.classList.remove("active");
      if (deliveryFields) deliveryFields.classList.add("active");
      if (orderType) orderType.textContent = "Home Delivery";
    }
  }

  methodButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setOrderMethod(button.dataset.orderMethod);
    });
  });

  /* CONTINUE ORDER:
     keep the cart in memory and move to delivery / pickup details. */
  if (checkoutButton) {
    checkoutButton.addEventListener("click", function () {
      if (!cart.length) return;

      const orderSection = document.getElementById("order");

      if (orderSection) {
        orderSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }

  /* SEND THE FINAL ORDER TO WHATSAPP */
  if (sendButton) {
    sendButton.addEventListener("click", function () {
      if (!cart.length) {
        alert("Please add items to your order first.");
        return;
      }

      let orderDetails = "";

      if (selectedMethod === "delivery") {
        const address =
          document.getElementById("deliveryAddress")?.value.trim() || "";
        const phone =
          document.getElementById("deliveryPhone")?.value.trim() || "";

        if (!address) {
          alert("Please enter the delivery address.");
          document.getElementById("deliveryAddress")?.focus();
          return;
        }

        orderDetails = [
          "Order type: Home Delivery",
          "Address: " + address,
          phone ? "Mobile: " + phone : ""
        ]
          .filter(Boolean)
          .join("\n");
      } else {
        const branch =
          document.getElementById("pickupBranch")?.value ||
          "Riyadh — King Fahd Road";
        const time =
          document.getElementById("pickupTime")?.value ||
          "As soon as possible";

        orderDetails = [
          "Order type: Pickup",
          "Branch: " + branch,
          "Pickup time: " + time
        ].join("\n");
      }

      const itemsText = cart
        .map(function (item) {
          return (
            item.name +
            " x" +
            item.quantity +
            " = " +
            (item.price * item.quantity).toFixed(0) +
            " SAR"
          );
        })
        .join("\n");

      const paymentMethod =
        document.querySelector('input[name="payment"]:checked')?.value ||
        "Not selected";

      const message = [
        "New NOIR Order",
        "",
        orderDetails,
        "",
        "Items:",
        itemsText,
        "",
        "Payment: " + paymentMethod,
        "Total: " + getCartTotal().toFixed(0) + " SAR"
      ].join("\n");

      window.open(
        "https://wa.me/" +
          WHATSAPP_NUMBER +
          "?text=" +
          encodeURIComponent(message),
        "_blank"
      );
    });
  }

  /* Initial state */
  switchMenu("lunch");
  setOrderMethod("delivery");
  renderCart();
});
