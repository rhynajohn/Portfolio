# 🚀 Deployment Guide

## Quick Deploy Options

### 1. GitHub Pages (FREE - Recommended)

**Step 1: Create GitHub Repository**
1. Go to https://github.com/new
2. Name: `rhyna-portfolio`
3. Make it Public
4. Click "Create repository"

**Step 2: Upload Files**
```bash
# In your project folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rhyna-portfolio.git
git push -u origin main
```

**Step 3: Enable GitHub Pages**
1. Go to repository → Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / (root)
4. Click Save
5. Wait 2-3 minutes
6. Your site is live at: `https://YOUR_USERNAME.github.io/rhyna-portfolio`

---

### 2. Netlify (FREE - Easiest)

**Option A: Drag & Drop**
1. Go to https://app.netlify.com/drop
2. Drag your project folder onto the page
3. Get instant live URL

**Option B: Git Integration**
1. Push to GitHub (see above)
2. Go to https://app.netlify.com
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select repository
5. Build command: (leave empty)
6. Publish directory: (leave as `/`)
7. Click Deploy

---

### 3. Vercel (FREE)

**Using CLI:**
```bash
# Install Vercel CLI
npm i -g vercel

# In project folder
vercel

# Follow prompts
# Your site will be deployed instantly
```

**Using Git:**
1. Push to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Framework preset: Other
5. Deploy

---

### 4. Firebase Hosting (FREE)

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting
# Select: Create a new project
# Public directory: . (current directory)
# Configure as SPA: No

# Deploy
firebase deploy
```

---

### 5. Surge.sh (FREE - Simplest)

```bash
# Install Surge
npm install -g surge

# In project folder
surge

# Follow prompts
# Your site will be live at something.surge.sh
```

---

## 🔧 Custom Domain (Optional)

### GitHub Pages + Custom Domain
1. Go to repository → Settings → Pages
2. Custom domain: enter your domain (e.g., www.rhynajohn.com)
3. Add CNAME file to repo with your domain
4. Configure DNS with your domain provider:
   - Type: CNAME
   - Name: www
   - Value: YOUR_USERNAME.github.io

### Netlify Custom Domain
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS as instructed

---

## 📊 Analytics Setup (Optional)

### Google Analytics
1. Create account at https://analytics.google.com
2. Get tracking ID (G-XXXXXXXXXX)
3. Add to index.html before `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔄 Continuous Deployment

### Auto-deploy on Git push:
All platforms (GitHub Pages, Netlify, Vercel) automatically redeploy when you push changes to GitHub.

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main

# Site updates automatically in 1-2 minutes!
```

---

## 🛠️ Troubleshooting

**Issue: Site not showing**
- Check if index.html is in root directory
- Verify file names are correct (case-sensitive)
- Check browser console for errors

**Issue: CSS/JS not loading**
- Check file paths in HTML (should be relative: `css/style.css`)
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**Issue: Chat bot not working**
- Check browser console for JS errors
- Verify all 3 JS files are loading correctly
- Test locally first by opening index.html

**Issue: Images not showing**
- Use HTTPS URLs for external images
- For local images, place in assets/ folder
- Check file extensions match exactly

---

## 📱 Testing Checklist

Before sharing your portfolio, test:

- [ ] Works on desktop (Chrome, Firefox, Safari)
- [ ] Works on mobile (iOS Safari, Chrome Mobile)
- [ ] All navigation links work
- [ ] Chat bot responds correctly
- [ ] Contact links (email, phone) work
- [ ] No console errors
- [ ] Loading speed is fast (< 3 seconds)
- [ ] All animations work smoothly

---

## 🎉 You're Live!

Once deployed, share your portfolio:
- LinkedIn: Add to featured section
- Resume: Include URL
- Email signature: Add link
- GitHub: Pin the repository

**Congratulations!** 🚀
