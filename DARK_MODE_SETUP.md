# Dark Mode Implementation

## How it works:

### 1. Tailwind CSS v4 Configuration
In `app/globals.css`, we've configured the dark mode variant:
```css
@variant dark (&:where(.dark, .dark *));
```

This tells Tailwind v4 to apply dark mode styles when:
- The element has the `.dark` class, OR
- The element is a child of an element with the `.dark` class

### 2. Initial Theme Detection (SSR)
In `app/layout.tsx`, a script runs before the page renders to prevent flash:
```javascript
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
```

### 3. Theme Toggle Component
`app/components/ThemeToggle.tsx` handles toggling:
- Adds/removes the `dark` class from `<html>` element
- Stores preference in localStorage
- Updates button icon (Sun/Moon)

## Testing Dark Mode:

1. Open the app in browser
2. Click the theme toggle button (top right)
3. The entire page should switch between light and dark mode
4. Refresh the page - theme should persist
5. Check browser DevTools: `<html>` element should have `class="dark"` when in dark mode

## Troubleshooting:

If dark mode doesn't work:
1. Clear localStorage: `localStorage.clear()` in console
2. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
3. Check that the `<html>` element has the `dark` class in DevTools
4. Verify Tailwind classes are being applied (inspect element styles)
