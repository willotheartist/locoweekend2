# 📁 locoweekend2 - Project Structure

*Generated on: 20/02/2026, 08:09:34*

## 📋 Quick Overview

| Metric | Value |
|--------|-------|
| 📄 Total Files | 65 |
| 📁 Total Folders | 24 |
| 🌳 Max Depth | 4 levels |
| 🛠️ Tech Stack | React, TypeScript, CSS, Node.js |

## ⭐ Important Files

- 🟡 🚫 **.gitignore** - Git ignore rules
- 🔴 📖 **README.md** - Project documentation
- 🔵 🔍 **eslint.config.mjs** - ESLint config
- 🔴 📦 **package.json** - Package configuration
- 🟡 🔷 **tsconfig.json** - TypeScript config

## 📊 File Statistics

### By File Type

- 📄 **.mdx** (Other files): 15 files (23.1%)
- ⚛️ **.tsx** (React TypeScript files): 13 files (20.0%)
- 🖼️ **.jpg** (JPEG images): 12 files (18.5%)
- 🔷 **.ts** (TypeScript files): 5 files (7.7%)
- 🎨 **.svg** (SVG images): 5 files (7.7%)
- ⚙️ **.json** (JSON files): 4 files (6.2%)
- 📄 **.mjs** (Other files): 3 files (4.6%)
- 📖 **.md** (Markdown files): 2 files (3.1%)
- 🚫 **.gitignore** (Git ignore): 1 files (1.5%)
- 📄 **.txt** (Text files): 1 files (1.5%)
- ⚙️ **.yaml** (YAML files): 1 files (1.5%)
- 🖼️ **.png** (PNG images): 1 files (1.5%)
- 🖼️ **.ico** (Icon files): 1 files (1.5%)
- 🎨 **.css** (Stylesheets): 1 files (1.5%)

### By Category

- **Assets**: 19 files (29.2%)
- **Other**: 18 files (27.7%)
- **React**: 13 files (20.0%)
- **Config**: 5 files (7.7%)
- **TypeScript**: 5 files (7.7%)
- **Docs**: 3 files (4.6%)
- **DevOps**: 1 files (1.5%)
- **Styles**: 1 files (1.5%)

### 📁 Largest Directories

- **root**: 65 files
- **src**: 33 files
- **public**: 18 files
- **src/content/articles**: 17 files
- **src/content**: 17 files

## 🌳 Directory Structure

```
locoweekend2/
├── 🟡 🚫 **.gitignore**
├── 📂 .vercel/
│   ├── ⚙️ project.json
│   └── 📄 README.txt
├── 🔵 🔍 **eslint.config.mjs**
├── 🔷 next-env.d.ts
├── 📄 next.config.mjs
├── 🔴 📦 **package.json**
├── ⚙️ pnpm-lock.yaml
├── 📄 postcss.config.mjs
├── 📖 project_structure.md
├── 🌐 public/
│   ├── 🎨 file.svg
│   ├── 🎨 globe.svg
│   ├── 🖼️ images/
│   │   ├── 📂 global/
│   │   │   ├── 🖼️ 22-burger.jpg
│   │   │   ├── 🖼️ gorpcore.jpg
│   │   │   ├── 🖼️ greenland-question.jpg
│   │   │   ├── 🖼️ hawala.jpg
│   │   │   ├── 🖼️ hotel-lobby.jpg
│   │   │   ├── 🖼️ lebanon-crisis.jpg
│   │   │   ├── 🖼️ mediterranean-marina.jpg
│   │   │   ├── 🖼️ menswear-interesting.jpg
│   │   │   ├── 🖼️ netflix-effect.jpg
│   │   │   ├── 🖼️ passport-economy.jpg
│   │   │   └── 🖼️ subscription-trap.jpg
│   │   └── 📂 london/
│   │   │   └── 🖼️ shoreditch.jpg
│   ├── 🖼️ LWICON.png
│   ├── 🎨 next.svg
│   ├── 🎨 vercel.svg
│   └── 🎨 window.svg
├── 🔴 📖 **README.md**
├── 📁 src/
│   ├── 🚀 app/
│   │   ├── 📂 art/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 articles/
│   │   │   └── 📂 [slug]/
│   │   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 culture/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 drinks/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 🖼️ favicon.ico
│   │   ├── 📂 flicks/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 🎨 globals.css
│   │   ├── 📂 grub/
│   │   │   └── ⚛️ page.tsx
│   │   ├── ⚛️ layout.tsx
│   │   ├── ⚛️ page.tsx
│   │   ├── 📂 picks/
│   │   │   └── ⚛️ page.tsx
│   │   └── 📂 shop/
│   │   │   └── ⚛️ page.tsx
│   ├── 🧩 components/
│   │   └── 📂 site/
│   │   │   ├── ⚛️ Footer.tsx
│   │   │   └── ⚛️ Header.tsx
│   ├── 📂 content/
│   │   └── 📂 articles/
│   │   │   ├── 🔷 data.ts
│   │   │   ├── 📂 global/
│   │   │   │   ├── 📄 hawala-the-invisible-bank.mdx
│   │   │   │   ├── 📄 lebanons-infinite-crisis.mdx
│   │   │   │   ├── 📄 the-22-pound-smash-burger-problem.mdx
│   │   │   │   ├── 📄 the-gorpcore-plateau.mdx
│   │   │   │   ├── 📄 the-greenland-question.mdx
│   │   │   │   ├── 📄 the-hotel-lobby-as-coworking-space.mdx
│   │   │   │   ├── 📄 the-netflix-effect.mdx
│   │   │   │   ├── 📄 the-passport-economy.mdx
│   │   │   │   ├── 📄 the-subscription-trap.mdx
│   │   │   │   ├── 📄 who-owns-the-mediterranean.mdx
│   │   │   │   └── 📄 why-menswear-is-suddenly-interesting-again.mdx
│   │   │   ├── 🔷 index.ts
│   │   │   ├── 📂 london/
│   │   │   │   ├── 📄 is-shoreditch-still-cool.mdx
│   │   │   │   ├── 📄 the-bar-you-only-find-twice.mdx
│   │   │   │   ├── 📄 too-good-for-tourists.mdx
│   │   │   │   └── 📄 welcome-to-the-beige-empire.mdx
│   │   │   └── 📂 madrid/
│   ├── 📚 lib/
│   │   └── 🔷 articles.ts
│   └── ⚛️ mdx-components.tsx
├── 🔷 tailwind.config.ts
├── 🟡 🔷 **tsconfig.json**
└── ⚙️ tsconfig.typecheck.json
```

## 📖 Legend

### File Types
- 🚫 DevOps: Git ignore
- 📄 Docs: Text files
- ⚙️ Config: JSON files
- 📖 Docs: Markdown files
- 📄 Other: Other files
- 🔷 TypeScript: TypeScript files
- ⚙️ Config: YAML files
- 🖼️ Assets: PNG images
- 🎨 Assets: SVG images
- 🖼️ Assets: JPEG images
- ⚛️ React: React TypeScript files
- 🖼️ Assets: Icon files
- 🎨 Styles: Stylesheets

### Importance Levels
- 🔴 Critical: Essential project files
- 🟡 High: Important configuration files
- 🔵 Medium: Helpful but not essential files
