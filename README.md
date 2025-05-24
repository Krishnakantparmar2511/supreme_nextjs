# Project Documentation
GitHub Repository: https://github.com/Krishnakantparmar2511/supreme_nextjs.git
Deployed Link: https://supreme-nextjs.vercel.app/dashboard
##  Run Project

1. **Check Node.js**: Make sure Node.js is installed. If not, download and install it from [nodejs.org](https://nodejs.org/en/download).
2. **Setup Project**:
   - Unzip the project.
   - Run `npm install` in the project directory.
3. **Start Project**:
   - Run `npm run dev`.
   - The project will start on port `3000` or the next available port if `3000` is in use.

---

##  Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Build Tool**: Webpack (default bundler used by Next.js)

---

##  Component Architecture

We follow the **Atomic Design** methodology:
- **Atoms**: Basic UI elements (e.g., input, button)
- **Molecules**: Combination of atoms with logic (e.g., input + label + error)
- **Organisms**: Larger components like Header, Footer
- **Others**: Non-reusable or one-off components are used directly in flow components

---

##  Responsiveness Strategy

- Started designing for **desktop-first**.
- Progressively optimized for **laptop**, **tablet**, and **mobile** by scaling down and testing across breakpoints.

---

##  Performance Optimization

- Used **reusable components** to reduce duplication.
- Encapsulated complex logic using **custom hooks**.
- Prevented unnecessary re-renders by scoping states properly.
- Maximized use of **SSR (Server-Side Rendering)**.
- Limited client-side logic to where it was necessary.

---

## Accessibility

- Used **semantic HTML** elements like `<section>`, `<form>`, `<button>`, `<footer>`.
- Added **ARIA attributes** for enhanced assistive technology support.
- Ensured full **keyboard navigation** support.

---

##  Animations

- Used **Framer Motion** for smooth section entrance/exit animations.
- Scroll effects implemented with **CSS sticky** positioning and `useRef` for scroll tracking.
- Animation properties like **delay**, **easing**, and **scaling** were fine-tuned for a natural feel.

---

##  Third-party Libraries

- **Zod**: For schema-based server-side validation
- **React Hook Form**: Lightweight form management (used with Zod for validations)
- **Framer Motion**: Smooth animations and transitions

---

##  Challenges Faced and Solutions

My approach was step-by-step — from setting up the project and ensuring responsive, accessible, and performant UI, to eventually moving on to the exciting part: **animations**.

The most challenging part was implementing **scroll-triggered animations** that toggle between **Passenger** and **Commercial** vehicle states based on the active video. It required precise coordination of scroll position and active states. After multiple iterations and learning through experimentation, I successfully implemented it. It was a rewarding and enriching experience.

---