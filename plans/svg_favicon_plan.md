# Plan: Styled SVG Favicon Integration

Proposes writing the styled SVG logo containing internal CSS styling to [logo.svg](file:///E:/OJT/PORTFOLIO/logo.svg) and updating [index.html](file:///E:/OJT/PORTFOLIO/index.html) to link it as the website favicon.

## Proposed Changes

### 1. Create Styled SVG Asset in [logo.svg](file:///E:/OJT/PORTFOLIO/logo.svg)
- Define a solid black background square (`<rect>`) and style the logo paths to be solid white with a bold stroke.
- Use internal SVG CSS (`<style>`) inside the SVG file to match the styling requirements:
  ```xml
  <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      .bg-rect { fill: #000000; }
      .logo-shape { fill: #ffffff; stroke: #ffffff; stroke-width: 10px; stroke-linejoin: round; stroke-linecap: round; }
      .logo-line { stroke: #ffffff; stroke-width: 10px; stroke-linecap: round; }
    </style>
    <rect class="bg-rect" width="512" height="512" />
    <path class="logo-shape" d="M183.273 164.768V405H96V85L183.273 164.768ZM183.273 164.768H323.879V216.71L304.485 234.333H254.061L210.424 305.754H249.212L320 405H416L336.485 295.551L409.212 225.986V154.565L331.636 85H183.273" />
    <path class="logo-line" d="M184.242 85V163.841" />
  </svg>
  ```

### 2. Update Favicon Link in [index.html](file:///E:/OJT/PORTFOLIO/index.html)
- Change the favicon links to link directly to the new `logo.svg` with modern SVG favicon support (and keep a fallback to prevent caching flash):
  ```html
  <!-- Favicon Icon -->
  <link rel="icon" type="image/svg+xml" href="logo.svg?v=1">
  ```
