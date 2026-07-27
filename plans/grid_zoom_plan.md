# Plan: Background Grid Scaling (Zoom In)

Proposes scaling up the background diagonal grid size by a factor of 2 to make the pattern more prominent and clean.

## Proposed Changes

### 1. Update Grid Variables and Sizes in [index.css](file:///E:/OJT/PORTFOLIO/index.css)
- **Dark Mode Grid**: Update `--grid-gradient` repeating step to `40px` (instead of `20px`):
  ```css
  --grid-gradient: 
      repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 40px),
      repeating-linear-gradient(-45deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 40px);
  ```
- **Light Mode Grid**: Update `--grid-gradient` repeating step to `40px` (instead of `20px`):
  ```css
  --grid-gradient: 
      repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 40px),
      repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 40px);
  ```
- **Background Size Update**: In the `body::before` block, update `background-size` from `40px 40px` to `80px 80px`:
  ```css
  body::before {
      ...
      background-size: 80px 80px;
  }
  ```
- This scaling configuration keeps the grid pattern continuous and matches the scale increase of 2x.
