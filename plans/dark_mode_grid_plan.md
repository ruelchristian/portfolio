# Plan: Dark Mode Diagonal Grid Background

Proposes the implementation of a modern diagonal grid background with a subtle red/blue glow overlay, active specifically in dark mode, and updating the dark theme base background color to `#0f0f0f`.

## Proposed Changes

### 1. Update CSS Variables in [index.css](file:///E:/OJT/PORTFOLIO/index.css)
- Change the primary background variable `--bg-primary` from `hsl(215, 30%, 8%)` to `#0f0f0f` in the default dark mode block.
- Adjust secondary and accent backgrounds to match the new neutral slate theme:
  - `--bg-secondary` to `#161616` (slightly lighter than `#0f0f0f`)
  - `--bg-accent` to `#0a0a0a` (slightly darker than `#0f0f0f`)

### 2. Implement the Diagonal Grid Overlay
- Create a pseudo-element on the `body` (e.g., `body::before`) in [index.css](file:///E:/OJT/PORTFOLIO/index.css):
  ```css
  body::before {
      content: "";
      position: fixed;
      inset: 0;
      z-index: -95; /* Layered above the blurred aurora blobs but below page content */
      pointer-events: none;
      background-image: 
          repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.15) 0, rgba(255, 0, 100, 0.15) 1px, transparent 1px, transparent 20px),
          repeating-linear-gradient(-45deg, rgba(0, 255, 200, 0.1) 0, rgba(0, 255, 200, 0.1) 1px, transparent 1px, transparent 20px);
      background-size: 40px 40px;
      opacity: 1;
      transition: opacity var(--transition-speed) ease;
  }
  ```
- **Light Theme Deactivation**: When light theme is active, hide the grid overlay:
  ```css
  body.light-theme::before {
      opacity: 0;
  }
  @media (prefers-color-scheme: light) {
      body.auto-theme::before {
          opacity: 0;
      }
  }
  ```

## Choices for Grid Line Opacity

1. **Standard Opacity (Exact user values)**:
   - Red/pink: `rgba(255, 0, 100, 0.2)`
   - Cyan: `rgba(0, 255, 200, 0.15)`
2. **Subtle Opacity (Recommended for better content readability)**:
   - Red/pink: `rgba(255, 0, 100, 0.12)`
   - Cyan: `rgba(0, 255, 200, 0.08)`
3. **No opacity change**:
   - Keep existing solid backgrounds without adding grid lines.
