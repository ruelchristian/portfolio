# Plan: Performance Optimization and Design Tuning

Addresses the rendering lag (stuttering on scroll/mouse hover) and adjusts the visual design of the cards to match the new light/dark diagonal grid backgrounds.

## Proposed Changes

### 1. Performance optimizations (Eliminating Lag)
- **Compositor Layer Promotion**:
  - Add `will-change: transform`, `transform: translate3d(0, 0, 0)`, and `backface-visibility: hidden` to the animated `.blob` backgrounds in [index.css](file:///E:/OJT/PORTFOLIO/index.css). This forces the browser to run morph/float animations on the GPU instead of constantly recalculating blurred pixels on the CPU.
  - Add `will-change: transform` and `transform: translate3d(0, 0, 0)` to `body::before` (the diagonal grid overlay) to prevent repainting the grid on scroll.
- **Throttled Mouse Parallax**:
  - Refactor the mousemove listener for the tech atom in [index.js](file:///E:/OJT/PORTFOLIO/index.js) using `requestAnimationFrame`. This locks the parallax transformation updates to the monitor's display refresh rate (e.g. 60Hz/144Hz) rather than firing at high polling rates (often 125Hz-1000Hz), eliminating CPU spikes and hover stutter.

### 2. Design Adjustments based on Background
- **Improved Card Contrast**:
  - In dark mode, increase `--glass-bg` opacity from `0.45` to `0.7` (`rgba(22, 22, 22, 0.7)`). This provides a more opaque backdrop for text, preventing grid lines from showing through and impairing readability.
  - In light mode, increase `--glass-bg` opacity to `0.8` (`rgba(255, 255, 255, 0.8)`).
- **Navbar Bug Fix**:
  - Replace the invalid CSS ternary logic on `.navbar` line 288 with a standard, clean CSS variable `--nav-bg`.
  - Configure `--nav-bg` to match the exact background shade in both modes (with a glass blur backdrop-filter).
