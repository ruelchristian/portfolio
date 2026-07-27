# Plan: Adaptive Light & Dark Mode Diagonal Grid Backgrounds

Proposes the implementation of diagonal grid backgrounds for both light and dark modes, and updates their respective background color systems.

## Proposed Changes

### 1. Update CSS Variables in [index.css](file:///E:/OJT/PORTFOLIO/index.css)
- **Dark Mode Updates**:
  - `--bg-primary` -> `#0f0f0f`
  - `--bg-secondary` -> `#161616`
  - `--bg-accent` -> `#0a0a0a`
  - `--glass-bg` -> `rgba(20, 20, 20, 0.45)`
- **Light Mode Updates**:
  - `--bg-primary` -> `#fafafa` (replacing the previous `hsl(215, 20%, 98%)`)
  - `--bg-secondary` -> `#ffffff`
  - `--bg-accent` -> `#f5f5f5` (slightly darker than `#fafafa` to act as an accent background)
  - `--text-primary` -> `hsl(215, 35%, 15%)` or text-gray-900 equivalents.

### 2. Implement the Adaptive Diagonal Grid Overlay
- Instead of using a static `opacity: 0` for light theme, we will make the `body::before` pseudo-element adaptive by using CSS variables for the background image gradient stops!
- We will define a new CSS variable `--grid-gradient` on the body:
  - **Dark Mode (Default)**:
    ```css
    :root {
        --grid-gradient: 
            repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(-45deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 20px);
    }
    ```
  - **Light Mode overrides**:
    ```css
    body.light-theme {
        --grid-gradient: 
            repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px);
    }
    ```
- The `body::before` layout will consume the variable:
  ```css
  body::before {
      content: "";
      position: fixed;
      inset: 0;
      z-index: -95;
      pointer-events: none;
      background-image: var(--grid-gradient);
      background-size: 40px 40px;
      transition: background-image var(--transition-speed) ease;
  }
  ```
- This approach avoids setting `opacity: 0` in light mode, instead changing the grid colors dynamically and keeping the grid active in both modes!
