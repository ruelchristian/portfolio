# Feature Documentation - Developer Portfolio

This documentation outlines the core interactive features implemented in Ruel Christian Umel's developer portfolio, detailing their behavior and design rationale.

---

## 1. Auto-Adaptive Theme (Light / Dark Mode)
* **What it does**: Automatically detects the user's operating system preference (light or dark mode) and applies it dynamically. It also provides a manual toggle button in the navigation bar to allow users to override system settings.
* **Implementation Details**:
  - Uses CSS custom properties (variables) defined under `.light-theme`, `:root` (default dark), and the media query `@media (prefers-color-scheme: light)` for `.auto-theme`.
  - Dark mode has a base color of `#0f0f0f` with matching neutral slate components (`#161616` and `#0a0a0a`), while light mode uses a soft `#fafafa` base color with matching pure white card backdrops (`#ffffff`) and slate elements (`#f5f5f5`, `#111827`).
  - Manual overrides are saved to `localStorage` under the key `theme` and re-applied immediately upon subsequent page loads to prevent visual flash.
* **Rationale**: Providing light/dark theme adaptability ensures an optimal viewing experience for all visitors, reducing eye strain for night-browsing tech recruiters while respecting user preferences.

## 2. Adaptive Diagonal Grid & Animated Aurora Backdrop
* **What it does**: Displays three large colored background blobs ("aurora blobs") that slowly float and morph, overlayed by a premium, sharp diagonal grid with an adaptive aesthetic. In dark mode, it features a glowing red/cyan neon layout; in light mode, it shifts to a clean, subtle dark-on-light grid pattern.
* **Implementation Details**:
  - CSS animations (`@keyframes float`) handle GPU-accelerated transition translations and rotations on absolute positioned elements inside `.aurora-container`.
  - The diagonal grid is implemented as a `body::before` pseudo-element referencing the dynamic `--grid-gradient` variable at `80px 80px` size.
  - In dark mode, `--grid-gradient` uses repeating 45deg and -45deg linear gradients with `rgba(255, 0, 100, 0.2)` and `rgba(0, 255, 200, 0.15)` at a `40px` repeat step.
  - In light mode, `--grid-gradient` adapts to a clean structure using `rgba(0, 0, 0, 0.1)` at a `40px` repeat step.
  - Card backdrops use `backdrop-filter: blur(16px)` along with a highly subtle translucent border and deep box shadows.
* **Rationale**: Creates an ultra-premium, interactive 3D depth aesthetic that immediately engages users upon landing, avoiding a generic template feel.

## 3. Dynamic Typing Title Subheading
* **What it does**: Cycles through a list of professional phrases ("Software Engineer", "Backend Engineer", "C# & ASP.NET Core Developer", "AI-Assisted Engineering") with an interactive typing and erasing animation in the hero section.
* **Implementation Details**:
  - Implemented in pure JavaScript using recursive timeouts to handle character extraction, substring rendering, and delays.
  - CSS animation flashes the text cursor (`|`) at a steady rate.
* **Rationale**: Highlights Ruel's core specialties (Software engineering, Backend development, C# & ASP.NET Core, and AI-assisted workflows) sequentially within a single eye-catching container, keeping the hero section clean and uncluttered.

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

## 8. Interactive Tech Atom Parallax Visual
* **What it does**: Renders an interactive 3D tech atom representing Ruel's core backend stack. Moving the mouse across the hero section causes the orbits, nodes, and nucleus to tilt and float in 3D perspective space (parallax).
* **Implementation Details**:
  - Leverages CSS 3D properties (`perspective: 1000px`, `transform-style: preserve-3d`) to establish spatial depth.
  - Subtly maps client mouse movements to dynamically calculate translation offsets for orbits, nodes, and the C# nucleus at different speeds (depths).
  - Uses `requestAnimationFrame` to throttle styling updates, locking them to the browser's display refresh rate to eliminate rendering stutter on high-polling rate mice.
  - Leverages GPU-accelerated 3D translations (`translate3d`) for ultra-smooth rendering.
  - Automatically resets positions smoothly on mouseleave, returning to normal CSS floating loops.
* **Rationale**: Immediate wow-factor on page load that highlights interactive scripting skills and backend priorities.

## 9. Custom Styled SVG Favicon Icon
* **What it does**: Displays the custom stylized "R" / "IR" badge as the website's favicon in the browser tab and bookmark icons.
* **Implementation Details**:
  - Leverages the styled `logo.svg` file linked inside the `<head>` of [index.html](file:///E:/OJT/PORTFOLIO/index.html) as `<link rel="icon" type="image/svg+xml" href="logo.svg?v=1">`.
  - The SVG uses internal CSS styling (`<style>`) to render a solid black background square (`#000000`) and fills the geometric vector logo paths with solid white (`#ffffff`), matching the uploaded design reference.
* **Rationale**: Anchors a unique visual brand representation directly in the browser's chrome and tabs, matching the modern, customized feel of the site.
