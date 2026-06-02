// =========================
// Portfolio Interactive Features
// =========================

document.addEventListener("DOMContentLoaded", function() {

  // =========================
  // 1. MOBILE MENU TOGGLE
  // =========================

  function toggleMenu() {
    const navList = document.querySelector("nav ul");
    if (navList) {
      navList.classList.toggle("active");
    }
  }

  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }


  // =========================
  // 2. SMOOTH SCROLLING
  // =========================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
        // Close mobile menu after clicking a link
        const navList = document.querySelector("nav ul");
        if (navList && navList.classList.contains("active")) {
          navList.classList.remove("active");
        }
      }
    });
  });


  // =========================
  // 3. LIGHTBOX (IMAGE MODAL)
  // =========================

  // Create modal dynamically
  const modal = document.createElement("div");
  modal.id = "lightbox-modal";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.9)";
  modal.style.display = "none";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "1000";
  modal.style.cursor = "pointer";
  document.body.appendChild(modal);

  // Close modal on click
  modal.addEventListener("click", () => {
    modal.style.display = "none";
    modal.innerHTML = "";
  });

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      modal.style.display = "none";
      modal.innerHTML = "";
    }
  });

  // Open modal on image click
  const projectImages = document.querySelectorAll(".project img");
  projectImages.forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      const closeBtn = document.createElement("button");
      closeBtn.innerHTML = "✕";
      closeBtn.style.position = "absolute";
      closeBtn.style.top = "20px";
      closeBtn.style.right = "20px";
      closeBtn.style.background = "white";
      closeBtn.style.border = "none";
      closeBtn.style.fontSize = "30px";
      closeBtn.style.cursor = "pointer";
      closeBtn.style.zIndex = "1001";
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        modal.innerHTML = "";
      });

      modal.innerHTML = `<img src="${img.src}" style="max-width:90%; max-height:90%; border-radius:10px;" />`;
      modal.appendChild(closeBtn);
      modal.style.display = "flex";
    });
  });


  // =========================
  // 4. CONTACT FORM VALIDATION WITH REAL-TIME FEEDBACK
  // =========================

  const contactForm = document.querySelector("#contactForm");

  if (contactForm) {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const subjectInput = document.querySelector("#subject");
    const messageInput = document.querySelector("#message");

    // Create error message container
    const errorContainer = document.createElement("div");
    errorContainer.id = "form-errors";
    errorContainer.style.color = "red";
    errorContainer.style.marginBottom = "10px";
    errorContainer.style.display = "none";
    errorContainer.style.padding = "10px";
    errorContainer.style.backgroundColor = "#ffe6e6";
    errorContainer.style.borderRadius = "5px";
    contactForm.insertBefore(errorContainer, contactForm.firstChild);

    // Real-time validation on input
    const validateField = (field) => {
      let isValid = true;
      const value = field.value.trim();

      if (field.id === "name" && value === "") {
        field.style.borderColor = "#ff6b6b";
        field.style.backgroundColor = "#ffe6e6";
        isValid = false;
      } else if (field.id === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value) && value !== "") {
          field.style.borderColor = "#ff6b6b";
          field.style.backgroundColor = "#ffe6e6";
          isValid = false;
        } else {
          field.style.borderColor = "#ccc";
          field.style.backgroundColor = "white";
        }
      } else if ((field.id === "subject" || field.id === "message") && value === "") {
        field.style.borderColor = "#ff6b6b";
        field.style.backgroundColor = "#ffe6e6";
        isValid = false;
      } else {
        field.style.borderColor = "#ccc";
        field.style.backgroundColor = "white";
      }

      return isValid;
    };

    [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
      if (field) {
        field.addEventListener("blur", () => validateField(field));
        field.addEventListener("input", () => validateField(field));
      }
    });

    // Form submit validation
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let errors = [];

      if (!nameInput || nameInput.value.trim() === "") {
        errors.push("• Name is required");
      }

      if (!emailInput || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        errors.push("• Valid email address is required");
      }

      if (!subjectInput || subjectInput.value.trim() === "") {
        errors.push("• Subject is required");
      }

      if (!messageInput || messageInput.value.trim() === "") {
        errors.push("• Message is required");
      }

      if (errors.length > 0) {
        errorContainer.innerHTML = "<strong>Please fix the following errors:</strong><br>" + errors.join("<br>");
        errorContainer.style.display = "block";
      } else {
        errorContainer.style.display = "none";
        alert("✓ Form submitted successfully! Thank you for reaching out.");
        contactForm.reset();
        [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
          if (field) {
            field.style.borderColor = "#ccc";
            field.style.backgroundColor = "white";
          }
        });
      }
    });
  }


  // =========================
  // 5. PROJECT FILTER (Optional: for future enhancement)
  // =========================

  window.filterProjects = function(category) {
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
      const projectCategory = project.getAttribute("data-category");

      if (category === "all" || category === projectCategory) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  };

  console.log("✓ Portfolio script loaded successfully");

});
