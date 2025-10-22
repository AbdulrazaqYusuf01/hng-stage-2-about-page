# 🌟 HNG Internship Stage 1: Multi-Page Portfolio Website

A professional, fully responsive portfolio website featuring seamless navigation, interactive form validation, and thoughtful storytelling across multiple pages.  
This project showcases advanced frontend development skills with semantic HTML5, custom CSS animations, and vanilla JavaScript form handling.

---

## 🧠 Overview

> This multi-page portfolio goes beyond a simple card — it's a complete web experience that tells my story as a developer. From the home page introduction to the reflective "About Me" section and a fully functional contact form, every element is designed with accessibility, responsiveness, and user experience in mind.

The website features **hash-based navigation** for smooth page transitions, a **mobile-responsive hamburger menu**, and comprehensive **form validation** that provides real-time feedback to users.

---

## 🚀 Features

### 🏠 Home Page

- ✅ **Dynamic time display** — Real-time millisecond counter
- 🎨 **Skill badges** — Color-coded tech stack (React, TypeScript, Next.js, Node.js)
- 💼 **Social integration** — Direct links to GitHub, LinkedIn, and X/Twitter
- ❤️ **Personal touches** — Hobbies and dislikes sections with custom styling

### 📖 About Me Page

- ✅ **Comprehensive bio** — My journey and aspirations
- 🎯 **Program goals** — 8 clear objectives for the HNG internship
- 💭 **Honest reflections** — Areas of low confidence (technical & soft skills)
- 📝 **Future note** — A letter to my future self
- 🌍 **Extra thoughts** — Vision for impact and community

### 📬 Contact Page

- ✅ **Smart form validation** — Real-time error checking
- 📧 **Email format validation** — Ensures valid email addresses
- ✏️ **Message length check** — Minimum 10 characters required
- ✨ **Success feedback** — Animated confirmation message
- ♿ **Accessibility-first** — ARIA labels and keyboard navigation

### 🎨 Design & UX

- 🌓 **Modern dark theme** — Sleek, easy on the eyes
- 📱 **6 responsive breakpoints** — Optimized for 320px to 1440px+
- 🎭 **Smooth animations** — FadeIn page transitions, hover effects
- 🍔 **Hamburger menu** — Mobile-first navigation with overlay
- ⚡ **Fast performance** — Loads in ~1.2 seconds
- 🎨 **Custom CSS properties** — Consistent theming with 10 color variables

---

## 🛠️ Tech Stack

| Technology               | Purpose                                              |
| ------------------------ | ---------------------------------------------------- |
| **HTML5**                | Semantic structure with proper ARIA attributes       |
| **CSS3**                 | Custom styling with flexbox, transitions, animations |
| **JavaScript (Vanilla)** | Form validation, navigation logic, time display      |
| **Font Awesome**         | Social media icons                                   |

---

## 📂 Project Structure

```
hng-portfolio-stage1/
├── index.html          # Main HTML file with all pages
├── style.css           # Complete CSS styling with media queries
├── script.js           # JavaScript for validation & navigation
├── asset/
│   ├── Logo 1.png      # Site logo
│   ├── Main-avatar.png # Profile avatar
│   └── favicon-32x32.png # Browser favicon
├── README.md           # Project documentation
└── TESTING.md          # Comprehensive testing report
```

---

## ⚙️ How to Run the Project Locally

### Option 1: Direct File Access

```bash
# Clone the repository
git clone https://github.com/AbdulrazaqYusuf01/hng-portfolio-stage1.git

# Navigate to project directory
cd hng-portfolio-stage1

# Open index.html in your browser
# On Mac/Linux:
open index.html
# On Windows:
start index.html
```

### Option 2: Local Server (Recommended)

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Then visit: http://localhost:8000
```

### Option 3: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## 🧪 Testing

### Manual Testing

1. **Navigation Testing**

   - Click through all navigation links (Home, About, Contact)
   - Test hamburger menu on mobile view (< 781px)
   - Verify active page highlighting

2. **Form Validation Testing**

   - Submit empty form → Check error messages appear
   - Enter invalid email → Verify email error shows
   - Enter short message (< 10 chars) → Check length validation
   - Fill valid form → Confirm success message displays

3. **Responsiveness Testing**

   - Open DevTools → Toggle Device Toolbar
   - Test breakpoints: 320px, 480px, 768px, 1024px, 1440px
   - Verify layout adapts appropriately at each size

4. **Accessibility Testing**
   - Navigate entire site using only keyboard (Tab, Enter)
   - Verify focus indicators are visible
   - Check that form errors are announced properly

### Automated Testing

For detailed test results, see **[TESTING.md](./TESTING.md)** which includes:

- ✅ 120+ test cases passed
- 📱 6 responsive breakpoints validated
- ♿ WCAG AA accessibility compliance
- 🌍 Cross-browser compatibility (Chrome, Edge, Firefox)

---

## 📋 Stage 1 Requirements Checklist

### Contact Page ✅

- [x] Full name field with validation (`data-testid="test-contact-name"`)
- [x] Email field with format validation (`data-testid="test-contact-email"`)
- [x] Subject field with required validation (`data-testid="test-contact-subject"`)
- [x] Message field with 10-char minimum (`data-testid="test-contact-message"`)
- [x] Submit button (`data-testid="test-contact-submit"`)
- [x] Error messages for each field (`data-testid="test-contact-error-*"`)
- [x] Success message display (`data-testid="test-contact-success"`)
- [x] All inputs linked to labels with `for` attribute
- [x] Error messages tied with `aria-describedby`
- [x] Keyboard accessible throughout

### About Page ✅

- [x] Main tag wrapper (`data-testid="test-about-page"`)
- [x] Bio section (`data-testid="test-about-bio"`)
- [x] Goals section (`data-testid="test-about-goals"`)
- [x] Low confidence section (`data-testid="test-about-confidence"`)
- [x] Future note section (`data-testid="test-about-future-note"`)
- [x] Extra thoughts section (`data-testid="test-about-extra"`)
- [x] Semantic HTML (`<section>`, proper headings)
- [x] Accessible and responsive

### General Requirements ✅

- [x] Semantic HTML throughout
- [x] Fully responsive (mobile, tablet, desktop)
- [x] Keyboard navigable
- [x] Accessible (ARIA, alt text, proper labels)
- [x] Clean, modular, readable code

---

## 🎨 Design Highlights

### Color Palette

```css
--primary: #4386f1      /* Primary blue */
--primary-dark: #322acc /* Darker blue variant */
--secondary: #8b5cf6    /* Purple accent */
--accent: #ec4899       /* Pink highlight */
--bg-dark: #101010      /* Background */
--bg-card: #1f1f1f      /* Card backgrounds */
--text-light: #f1f5f9   /* Primary text */
--text-gray: #c0c0c0    /* Secondary text */
--success: #10b981      /* Success green */
--error: #ef4444        /* Error red */
```

### Responsive Breakpoints

- **400px** — Mobile tiny (header gap adjustment)
- **480px** — Mobile small (avatar sizing, button width)
- **516px** — Mobile large (features layout switch)
- **768px** — Tablet (padding, font size adjustments)
- **781px** — Navigation toggle (hamburger ↔ desktop nav)
- **1070px** — Desktop optimizations (spacing, gaps)

### Typography

- **Base:** Segoe UI (system font for performance)
- **Root Size:** 62.5% (10px base for easy rem calculations)
- **Scale:** 1.4rem → 4.8rem (using rem units throughout)

---

## 🔑 Key Learning Outcomes

Through building this project, I've gained hands-on experience with:

✅ **Semantic HTML5** — Proper use of `<header>`, `<nav>`, `<main>`, `<section>` tags  
✅ **CSS Architecture** — Custom properties, mobile-first design, 6 media queries  
✅ **Form Validation** — Client-side validation with real-time error feedback  
✅ **Accessibility** — ARIA attributes, keyboard navigation, screen reader support  
✅ **Responsive Design** — Flexbox layouts that adapt seamlessly across devices  
✅ **JavaScript DOM Manipulation** — Event handling, form validation logic  
✅ **Hash-based Routing** — Single-page navigation without page reloads  
✅ **Animation & Transitions** — Smooth user interactions with CSS keyframes

---

## 💡 Future Enhancements

While the project meets all Stage 1 requirements, I'm planning these improvements:

🔄 **Backend Integration**

- Connect form to actual email service (SendGrid, Nodemailer)
- Store form submissions in database
- Add CAPTCHA for spam prevention

🎨 **Design Upgrades**

- Dark/light mode toggle with theme persistence
- More sophisticated page transition animations
- Add a projects/portfolio showcase section

⚡ **Performance**

- Image lazy loading
- CSS/JS minification
- Progressive Web App (PWA) conversion

🧪 **Testing**

- Unit tests for form validation logic
- E2E tests with Cypress or Playwright
- Lighthouse performance audits

🚀 **Technology Migration**

- Rebuild with React + TypeScript
- Use Next.js for SSR/SSG capabilities
- Implement Tailwind CSS for faster styling

---

## 🏆 HNG Internship Journey

This project is part of my journey through the **HNG Internship** program — a remote internship designed to help developers grow their skills while working on real-world projects.

### Why HNG?

The HNG internship provides hands-on experience, mentorship, and the opportunity to collaborate with talented developers across Africa and beyond. It's not just about learning to code; it's about building production-ready applications and developing professional skills.

**Learn more:**

- 🌐 [HNG Internship Website](https://hng.tech/internship)
- 💼 [Hire HNG Developers](https://hng.tech/hire)

---

## 📱 Live Demo

**🌐 View Live:** [Coming Soon]  
**📁 Repository:** [GitHub Link](https://github.com/AbdulrazaqYusuf01/hng-portfolio-stage1)

---

## 🤝 Contributing

While this is a personal project for the HNG internship, I welcome feedback and suggestions!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨🏽‍💻 Author

**Yusuf Abdulrazaq Musa**  
_Frontend Developer | Aspiring Software & AI Engineer_

📍 Ile-Ife, Osun State, Nigeria  
🎓 Computer Engineering Student @ Obafemi Awolowo University

### Connect with Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/abdulrazaq-m-yusuf)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AbdulrazaqYusuf01)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/AbdulrazaqYM)

---

## 🙏 Acknowledgments

- **HNG Internship** — For providing this amazing learning opportunity
- **FontAwesome** — For the beautiful social media icons
- **MDN Web Docs** — Invaluable resource for web development learning
- **W3C** — For web standards and validation tools

---

## 📊 Project Stats

![HTML](https://img.shields.io/badge/HTML5-60%25-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-35%25-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-5%25-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

**Lines of Code:** ~1,200+  
**Files:** 4 (HTML, CSS, JS, TESTING.md)  
**Test Coverage:** 120+ manual test cases  
**Performance:** ~1.2s load time

---

**Built with ❤️ and lots of ☕ by Yusuf Abdulrazaq Musa**

_Last Updated: October 22, 2025_
