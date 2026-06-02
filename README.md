# 🎯 Portfolio Website - Quick Reference Guide

## 📁 Project Files
```
Portfolio/
├── index.html          ✅ Updated with proper structure
├── styles.css          ✅ Updated with mobile menu styles
├── script_new.js       ✅ Complete JavaScript implementation
├── test.html           📋 Test suite for verification
└── images/             📸 (Your project images go here)
```

## 🚀 Features Implemented

### 1. Menu Toggle (Mobile Navigation)
**What it does**: Hamburger menu expands/collapses on mobile
```javascript
toggleMenu() // Function available in window
```
**Trigger**: Click the ☰ button on mobile

---

### 2. Smooth Scrolling
**What it does**: Navigation links scroll smoothly to sections
**Works with**: All internal links (`href="#section"`)
**Bonus**: Menu auto-closes after navigation

---

### 3. Image Lightbox
**What it does**: Click project images to view in fullscreen modal
- Dark overlay background
- Close button (✕) in corner
- Press ESC to close
- Images are clickable (cursor changes)

---

### 4. Project Filter
**What it does**: Show/hide projects by category
```javascript
// In browser console:
filterProjects("ml")      // Show only ML projects
filterProjects("web")     // Show only web projects
filterProjects("all")     // Show all projects
```
**Categories Used**:
- `"ml"` → Machine Learning projects (2 projects)
- `"web"` → Web projects (1 project)

---

### 5. Form Validation
**Real-time feedback**:
- Fields turn red while editing if invalid
- Red background highlight for visibility

**Validation Rules**:
- ✓ Name: Required, not empty
- ✓ Email: Required, valid format
- ✓ Subject: Required, not empty
- ✓ Message: Required, not empty

**Feedback**:
- Shows error list on submit if invalid
- Success message on valid submission
- Auto-resets form after success

---

## 🔧 Installation Notes

### Before Using:
1. **Add images** to `images/` folder:
   - `phishing-project.jpg`
   - `battery-project.jpg`
   - `portfolio-project.jpg`

2. **Rename file**:
   - Change `script_new.js` → `script.js`
   - (Or update index.html script tag)

3. **Connect form** (optional):
   - Update form `action` attribute to your backend
   - Or integrate with email service (Formspree, etc.)

---

## 🧪 Testing Checklist

- [ ] Open `index.html` in browser
- [ ] Click hamburger menu on mobile (resize browser to <768px)
- [ ] Click navigation links - should scroll smoothly
- [ ] Click any project image - should open in modal
- [ ] Press ESC in modal - should close
- [ ] Type invalid email in form - field should highlight
- [ ] Submit empty form - should show errors
- [ ] Fill form correctly and submit - should show success

---

## 🐛 Debugging

**Open Browser Console** (F12 → Console tab):
- Check for: `✓ Portfolio script loaded successfully`
- Any red errors? Check script filename matches in HTML

**If features don't work**:
1. Check console for errors
2. Verify HTML element IDs match JavaScript selectors
3. Make sure script loads AFTER page loads
4. Test in modern browser (Chrome, Firefox, Safari, Edge)

---

## 📝 Code Structure

```
script.js
├── DOMContentLoaded wrapper (ensures DOM is ready)
├── 1. Menu Toggle
├── 2. Smooth Scrolling
├── 3. Lightbox Modal
├── 4. Form Validation
└── 5. Project Filter (utility function)
```

---

## 🎨 CSS Classes Used

| Class | Purpose |
|-------|---------|
| `.menu-toggle` | Hamburger menu button |
| `.nav-links` | Navigation container |
| `.nav-links.active` | Active/expanded state |
| `.project` | Project article element |
| `#lightbox-modal` | Image modal (auto-created) |
| `#form-errors` | Error message container |

---

## 🔗 Data Attributes Used

| Attribute | Value | Purpose |
|-----------|-------|---------|
| `data-category="ml"` | ML projects | Filter by category |
| `data-category="web"` | Web projects | Filter by category |

---

## 💡 Pro Tips

1. **Mobile Testing**: Use DevTools → Device Toolbar (Ctrl+Shift+M)
2. **Form Testing**: Right-click → Inspect to watch classes change
3. **Lightbox**: Try on different screen sizes
4. **Filter**: Open console and test with different categories

---

## ✨ Ready to Deploy!

Your portfolio is fully functional and ready to share. 🎉
