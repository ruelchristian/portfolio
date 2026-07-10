# Feature Documentation - Developer Portfolio

This documentation outlines the core interactive features implemented in Ruel Christian Umel's developer portfolio, detailing their behavior and design rationale.

---

## 1. Auto-Adaptive Theme (Light / Dark Mode)
* **What it does**: Automatically detects the user's operating system preference (light or dark mode) and applies it dynamically. It also provides a manual toggle button in the navigation bar to allow users to override system settings.
* **Implementation Details**:
  - Uses CSS custom properties (variables) defined under `.light-theme`, `.dark-theme`, and the media query `@media (prefers-color-scheme: light)` for `.auto-theme`.
  - Manual overrides are saved to `localStorage` under the key `theme` and re-applied immediately upon subsequent page loads to prevent visual flash.
* **Rationale**: Providing light/dark theme adaptability ensures an optimal viewing experience for all visitors, reducing eye strain for night-browsing tech recruiters while respecting user preferences.

## 2. Animated Aurora Backdrop & Glassmorphic Interface
* **What it does**: Displays three large colored background blobs ("aurora blobs") that slowly float and morph in the background. The text and project cards are styled as frosted glass panels overlaying these blobs.
* **Implementation Details**:
  - CSS animations (`@keyframes float`) handle GPU-accelerated transition translations and rotations on absolute positioned elements.
  - Card backdrops use `backdrop-filter: blur(16px)` along with a highly subtle translucent border and deep box shadows.
* **Rationale**: Creates an ultra-premium, interactive 3D depth aesthetic that immediately engages users upon landing, avoiding a generic template feel.

## 3. Dynamic Typing Title Subheading
* **What it does**: Cycles through a list of professional phrases (e.g., "Junior Web Developer", "C# & ASP.NET Core Specialist") with an interactive typing and erasing animation in the hero section.
* **Implementation Details**:
  - Implemented in pure JavaScript using recursive timeouts to handle character extraction, substring rendering, and delays.
  - CSS animation flashes the text cursor (`|`) at a steady rate.
* **Rationale**: Highlights Ruel's core specialties (C#, web development, education status) sequentially within a single eye-catching container, keeping the hero section clean and uncluttered.

## 4. Scroll Reveal & Intersection Observer Animations
* **What it does**: Animates elements (fading in and sliding up) smoothly as the user scrolls them into the viewport. It also highlights the active section in the top navigation menu.
* **Implementation Details**:
  - Utilizes two standard JavaScript `IntersectionObserver` instances. One triggers a one-time entry reveal by adding the `.revealed` CSS class (which fires the sequential Anime.js stagger pop animation for `.tech-card` elements). The other updates the active menu link based on which section dominates the viewport (using viewport margin thresholds).
* **Rationale**: Improves scroll aesthetics and reduces page load lag, as animations are only triggered when visible to the user.

## 5. Projects Section: Browser Mockup & System Architecture Drawer
* **What it does**: Renders the capstone project (LAN-Based Administrative Information System with Data Analytics) in a clean, responsive browser mockup container displaying a real system dashboard image preview (`dashboard.avif`). Clicking the button opens a right-aligned sliding modal drawer containing system diagrams, access controls, and evaluation methodologies.
* **Implementation Details**:
  - The dashboard visual is rendered as a clean system screenshot image nested inside a custom CSS browser shell mockup.
  - The modal drawer uses a sliding translation transition on click. Opening it triggers a staggered entry animation (`anime.stagger`) for inner specs (Offline Docker Orchestration, HTMX Reactivity, Optimistic Concurrency Control, Background Tasks, Bulk Migration) using Anime.js.
* **Rationale**: Allows Ruel to demonstrate his developer/programmer role in the capstone project using a realistic administrative dashboard layout, while providing a detailed architecture breakdown for technical recruiters without cluttering the main page layout.

## 6. Simulated Message Form & Success Toast
* **What it does**: Intercepts contact form submissions, simulates a secure API transmit delay (with a spinner animation), and presents a floating success toast notification that automatically dismisses.
* **Implementation Details**:
  - The submit event is captured via JavaScript, switching the button status to `disabled` and changing content to a loading state.
  - Once resolved, a toast element (`#toast-notification`) is faded in from the bottom corner using Anime.js, displaying details for 4 seconds before sliding out.
* **Rationale**: Mocking a complete submit-resolve cycle adds high-end polish and immediate feedback to the interface, signaling responsiveness and frontend expertise.

## 7. Interactive Screenshot Lightbox Overlay
* **What it does**: Allows recruiters to view the full-size system dashboard screenshot. Clicking the small preview image in the browser mockup opens a fullscreen modal backdrop containing the original-sized image.
* **Implementation Details**:
  - Leverages a custom CSS overlay panel (`#lightbox-modal`) styled with absolute centering and a heavy blur filter.
  - Controls entry and exit scaling/fading smoothly using Anime.js, and disables browser scroll behaviors when active.
  - Automatically binds ESC key and clicking outside the image container to exit the modal gracefully.
* **Rationale**: Maintains a clean page layout with a small, neat layout mockup preview, while letting interested viewers easily zoom in to examine the fine detail of the application UI.
