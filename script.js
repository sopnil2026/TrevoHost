(() => {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector("#mainNav");
  const modal = document.querySelector("#accountModal");
  const modalTitle = document.querySelector("#modalTitle");
  const modalMessage = document.querySelector("#modalMessage");
  const closeButton = modal?.querySelector(".modal-close");
  const defaultMessage = "The TrevoHost landing page is ready. Sign-in, wallet and bot deployment need to be connected to a secure backend before accounts can be activated.";

  function openModal(title = "Account access", message = defaultMessage) {
    if (!modal) return;
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeButton?.focus();
  }

  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = mainNav?.classList.toggle("is-open") ?? false;
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  mainNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle?.setAttribute("aria-expanded", "false");
      menuToggle?.setAttribute("aria-label", "Open navigation menu");
    });
  });

  document.querySelectorAll("[data-open-modal='account']").forEach((button) => {
    button.addEventListener("click", () => openModal());
  });

  document.querySelectorAll(".choose-plan").forEach((button) => {
    button.addEventListener("click", () => {
      const plan = button.dataset.plan || "selected";
      openModal(
        plan + " plan selected",
        "You selected the " + plan + " plan. Checkout, wallet payments and plan activation will work once a secure backend and payment provider are connected."
      );
    });
  });

  modal?.querySelectorAll("[data-close-modal], .modal-close").forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  modal?.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  // Keep the header's mobile menu closed when the viewport returns to desktop.
  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 681px)").matches) {
      mainNav?.classList.remove("is-open");
      menuToggle?.setAttribute("aria-expanded", "false");
    }
  });
})();
