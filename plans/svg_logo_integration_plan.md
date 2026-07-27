# Plan: SVG Logo Integration and CSS Matching

Proposes integrating the new custom SVG logo from [Frame 1 (1).svg](file:///E:/OJT/PORTFOLIO/Frame%201%20%281%29.svg) into the portfolio navbar and favicon, styled with CSS to match the uploaded reference (white letter on a solid black square).

## Proposed Changes

### 1. Style the SVG in [index.css](file:///E:/OJT/PORTFOLIO/index.css)
- Create a styling block for the navbar logo to match the solid black background and white filled shape:
  ```css
  .nav-logo {
      display: flex;
      align-items: center;
      gap: 0.6rem;
  }

  .nav-logo-svg {
      width: 32px;
      height: 32px;
      background-color: #000000; /* Solid black square background */
      border-radius: 6px; /* Clean, slightly rounded corners */
      padding: 4px; /* Padding inside the square */
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
  }

  /* Fill the SVG paths with solid white and add a clean matching stroke */
  .nav-logo-svg path {
      fill: #ffffff;
      stroke: #ffffff;
      stroke-width: 4px; /* Matches the visual weight of the drawing */
      stroke-linecap: round;
      stroke-linejoin: round;
  }

  /* Hover micro-interaction */
  .nav-logo:hover .nav-logo-svg {
      transform: scale(1.1) rotate(6deg);
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3); /* Accent glow on hover */
  }
  ```

### 2. Update HTML Navbar Logo in [index.html](file:///E:/OJT/PORTFOLIO/index.html)
- Replace the textual navbar logo with the new inline SVG:
  ```html
  <a href="#" class="nav-logo" id="nav-logo">
      <svg class="nav-logo-svg" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M183.273 164.768V405H96V85L183.273 164.768ZM183.273 164.768H323.879V216.71L304.485 234.333H254.061L210.424 305.754H249.212L320 405H416L336.485 295.551L409.212 225.986V154.565L331.636 85H183.273" />
          <path d="M184.242 85V163.841" />
      </svg>
      <span class="nav-logo-text"><span class="logo-accent">&lt;</span>ruel.dev<span class="logo-accent"> /&gt;</span></span>
  </a>
  ```

### 3. Update Favicon Link in [index.html](file:///E:/OJT/PORTFOLIO/index.html)
- Swap the favicon to point to the new SVG file directly for modern browser SVG favicon support:
  ```html
  <!-- Favicon Icon -->
  <link rel="icon" type="image/svg+xml" href="Frame 1 (1).svg">
  ```
