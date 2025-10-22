// Navigation
const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetPage = link.getAttribute("data-page");

    // Update active states
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // Show target page
    pages.forEach((page) => {
      if (page.id === targetPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    // Update URL hash
    window.location.hash = targetPage;
  });
});

// Handle timing
function updateTime() {
  const timeElement = document.getElementById("current-time");
  timeElement.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);

// Handle initial hash
window.addEventListener("load", () => {
  const hash = window.location.hash.slice(1);
  if (hash) {
    const link = document.querySelector(`[data-page="${hash}"]`);
    if (link) link.click();
  }
});

// Form Validation
const form = document.getElementById("contactForm");
const successMessage = document.querySelector(
  '[data-testid="test-contact-success"]'
);

const fields = {
  fullName: {
    input: document.getElementById("fullName"),
    error: document.getElementById("nameError"),
    validate: (value) => {
      if (!value.trim()) return "Full name is required";
      return "";
    },
  },
  email: {
    input: document.getElementById("email"),
    error: document.getElementById("emailError"),
    validate: (value) => {
      if (!value.trim()) return "Email is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Please enter a valid email address";
      return "";
    },
  },
  subject: {
    input: document.getElementById("subject"),
    error: document.getElementById("subjectError"),
    validate: (value) => {
      if (!value.trim()) return "Subject is required";
      return "";
    },
  },
  message: {
    input: document.getElementById("message"),
    error: document.getElementById("messageError"),
    validate: (value) => {
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 10)
        return "Message must be at least 10 characters";
      return "";
    },
  },
};

function showError(field, message) {
  field.error.textContent = message;
  field.error.classList.add("show");
  field.input.classList.add("error");
  field.input.setAttribute("aria-invalid", "true");
}

function clearError(field) {
  field.error.textContent = "";
  field.error.classList.remove("show");
  field.input.classList.remove("error");
  field.input.setAttribute("aria-invalid", "false");
}

function validateField(fieldName) {
  const field = fields[fieldName];
  const errorMessage = field.validate(field.input.value);

  if (errorMessage) {
    showError(field, errorMessage);
    return false;
  } else {
    clearError(field);
    return true;
  }
}

// Real-time validation
Object.keys(fields).forEach((fieldName) => {
  fields[fieldName].input.addEventListener("blur", () => {
    validateField(fieldName);
  });

  fields[fieldName].input.addEventListener("input", () => {
    if (fields[fieldName].error.classList.contains("show")) {
      validateField(fieldName);
    }
  });
});

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Hide previous success message
  successMessage.classList.remove("show");

  // Validate all fields
  let isValid = true;
  Object.keys(fields).forEach((fieldName) => {
    if (!validateField(fieldName)) {
      isValid = false;
    }
  });

  if (isValid) {
    // Show success message
    successMessage.classList.add("show");

    // Reset form
    form.reset();

    // Scroll to success message
    successMessage.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });

    // Clear any remaining error states
    Object.keys(fields).forEach((fieldName) => {
      clearError(fields[fieldName]);
    });
  } else {
    // Focus first invalid field
    const firstInvalid = Object.keys(fields).find((fieldName) =>
      fields[fieldName].input.classList.contains("error")
    );
    if (firstInvalid) {
      fields[firstInvalid].input.focus();
    }
  }
});

/* Hamburger menu implementation */
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  overlay.classList.toggle("active");

  // Accessibility
  const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
  hamburger.setAttribute("aria-expanded", !expanded);
});

// Close overlay when a link is clicked
document.querySelectorAll(".overlay-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// Ensure clicking overlay links triggers your page switch logic
document.querySelectorAll(".overlay-nav .nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetPage = link.getAttribute("data-page");

    // Hide all pages
    document.querySelectorAll(".page").forEach((page) => {
      page.classList.remove("active");
    });

    // Deactivate all nav links
    document.querySelectorAll(".nav-link").forEach((nav) => {
      nav.classList.remove("active");
    });

    // Activate the clicked section
    document.getElementById(targetPage).classList.add("active");
    link.classList.add("active");

    // Close overlay
    hamburger.classList.remove("active");
    overlay.classList.remove("active");
  });
});
