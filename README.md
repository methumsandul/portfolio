# Methum Sandul — Portfolio

Built with **React + Vite + Tailwind CSS + Framer Motion**

---

## 🚀 Setup (one time)

```bash
# 1. Create a new Vite React project
npm create vite@latest portfolio -- --template react
cd portfolio

# 2. Install dependencies
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion

# 3. Replace ALL files in src/ with the ones provided
# 4. Replace tailwind.config.js, vite.config.js, postcss.config.js, index.html
```

---

## 📁 Drop your files here

```
public/
  ms.png              ← your logo (already done)
  cv.pdf              ← rename your CV to this exactly
  images/
    vlan-setup-1.jpg  ← first physical setup photo
    vlan-setup-2.jpg  ← second physical setup photo
    vlan-topology.jpg ← topology diagram
```

---

## 🖼️ Add your profile photo

Open `src/components/Hero.jsx` and find the comment:
```jsx
{/* Show initials — replace with <img src="/your-photo.jpg" .../> when ready */}
```

Replace the inner div with:
```jsx
<img src="/your-photo.jpg" alt="Methum Sandul" className="w-full h-full object-cover" />
```

And add your photo to `public/your-photo.jpg`

---

## ▶️ Run locally

```bash
npm run dev
```

Open http://localhost:5173

---

## 🌐 Deploy free on Vercel

```bash
npm run build
# Upload the dist/ folder to vercel.com
# Or: npx vercel
```

---

## ✏️ Easy edits

| What to change | File |
|---|---|
| Your name, description | `src/components/Hero.jsx` |
| About text, stats | `src/components/About.jsx` |
| Skills list | `src/components/Skills.jsx` |
| Projects | `src/components/Projects.jsx` |
| Education timeline | `src/components/Education.jsx` |
| Certifications | `src/components/Certifications.jsx` |
| Contact links | `src/components/Contact.jsx` |
| Colors / fonts | `src/index.css` (`:root` variables) |
| Nav links | `src/components/Navbar.jsx` |
