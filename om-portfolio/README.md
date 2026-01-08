# ⚡ Interactive Developer Portfolio

![Portfolio Preview](public/screenshot.png)

> **Live Demo:** [https://ompatil.site](https://ompatil.site)

A high-performance, immersive developer portfolio built with **React**, **Vite**, and **Framer Motion**. Designed to showcase my projects, technical expertise, and real-time GitHub activity with velocity-based animations and a modern dark aesthetic.

## 🚀 Key Features

* **Velocity-Based Animations:** Smooth, physics-based scrolling effects using `framer-motion` (scroll velocity, parallax).
* **Bento Grid Layout:** A responsive, modular grid system for displaying tech stacks and social links.
* **Real-Time Data:** Fetches and visualizes live GitHub commit history and activity using GitHub APIs.
* **High Performance:** Optimized with Vite for lightning-fast builds and almost zero load times.
* **Responsive Design:** Fully fluid layout that adapts perfectly from 4K desktops to mobile devices.
* **Dynamic Components:** Reusable card components with hover states, tilt effects, and stacking interactions.

## 🛠️ Tech Stack

* **Framework:** [React.js](https://react.dev/) (Vite)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment:** [Vercel](https://vercel.com/)
* **Domain Management:** GoDaddy

## 📂 Project Structure

```bash
├── public/              # Static assets (images, resume)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── BentoGrid.jsx    # The main tech stack grid
│   │   ├── GithubStats.jsx  # Live GitHub activity graph
│   │   ├── Hero.jsx         # Landing section with animations
│   │   ├── Projects.jsx     # Stacking cards for projects
│   │   └── ...
│   ├── App.jsx          # Main application layout
│   └── main.jsx         # Entry point
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
