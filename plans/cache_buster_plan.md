# Plan: Script Cache Busting in HTML

Proposes adding a version query parameter (cache buster) to the script reference in [index.html](file:///E:/OJT/PORTFOLIO/index.html).

## Problem
Browsers aggressively cache local static JavaScript files (`index.js`). Even if the file has been updated on disk, the browser continues to run the cached older version, displaying the previous typing titles.

## Proposed Change
- Update the script source import at the bottom of [index.html](file:///E:/OJT/PORTFOLIO/index.html) from:
  ```html
  <script src="index.js"></script>
  ```
  to:
  ```html
  <script src="index.js?v=1.0.1"></script>
  ```
- This forces the browser to fetch the updated JavaScript file immediately, clearing the caching issue without requiring the user to manually trigger a hard refresh.
