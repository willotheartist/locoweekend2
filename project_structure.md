# 📁 locoweekend2 - Project Structure

*Generated on: 19/02/2026, 20:37:21*

## 📋 Quick Overview

| Metric | Value |
|--------|-------|
| 📄 Total Files | 61 |
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

- ⚛️ **.tsx** (React TypeScript files): 13 files (21.3%)
- 📄 **.mdx** (Other files): 13 files (21.3%)
- 🖼️ **.jpg** (JPEG images): 10 files (16.4%)
- 🔷 **.ts** (TypeScript files): 5 files (8.2%)
- 🎨 **.svg** (SVG images): 5 files (8.2%)
- ⚙️ **.json** (JSON files): 4 files (6.6%)
- 📄 **.mjs** (Other files): 3 files (4.9%)
- 📖 **.md** (Markdown files): 2 files (3.3%)
- 🚫 **.gitignore** (Git ignore): 1 files (1.6%)
- 📄 **.txt** (Text files): 1 files (1.6%)
- ⚙️ **.yaml** (YAML files): 1 files (1.6%)
- 🖼️ **.png** (PNG images): 1 files (1.6%)
- 🖼️ **.ico** (Icon files): 1 files (1.6%)
- 🎨 **.css** (Stylesheets): 1 files (1.6%)

### By Category

- **Assets**: 17 files (27.9%)
- **Other**: 16 files (26.2%)
- **React**: 13 files (21.3%)
- **Config**: 5 files (8.2%)
- **TypeScript**: 5 files (8.2%)
- **Docs**: 3 files (4.9%)
- **DevOps**: 1 files (1.6%)
- **Styles**: 1 files (1.6%)

### 📁 Largest Directories

- **root**: 61 files
- **src**: 31 files
- **public**: 16 files
- **src/content/articles**: 15 files
- **src/content**: 15 files

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
│   │   │   ├── 🖼️ lebanon-crisis.jpg
│   │   │   ├── 🖼️ mediterranean-marina.jpg
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
│   │   │   │   ├── 📄 the-netflix-effect.mdx
│   │   │   │   ├── 📄 the-passport-economy.mdx
│   │   │   │   ├── 📄 the-subscription-trap.mdx
│   │   │   │   └── 📄 who-owns-the-mediterranean.mdx
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
