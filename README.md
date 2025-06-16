# 🌦️ Next.js Weather App

A modern, scalable, and secure weather web application built with **Next.js** and **TypeScript** that provides real-time weather updates, user authentication, offline support, and encrypted API communication. This project is optimized for performance and designed to handle **100k concurrent users**.

---

## 🔧 Tech Stack & Architecture

- **Framework:** [Next.js](https://nextjs.org/) (Latest Stable)
- **DataBase:** SupaBase integrated wih Weather API
- **Language:** TypeScript
- **Data Fetching:** React Query 
- **SSR / SSG:** Optimized 
- **Styling:** Tailwind CSS 
- **Containerization:** Docker
- **Caching & Load Balancing:** CDN (e.g. Cloudflare) with load-balancing strategy
- **Security:** 64-bit custom encryption for API data
--**SupaBase:** Authentication and handle favorites
---

## 🖼️ UI Features

- Reusable Components:
  - Weather Cards
  - Search Bar
  - Weather Details
  - Favorites List
- Dark / Light Theme Support 

---

## 🌍 Core Features

### 🔸 Home Page
- Auto-detects user location via **Geolocation API**
- Displays weather conditions: temperature, wind, humidity
- Offline caching via **IndexedDB** and **localStorage**

### 🔸 City Search
- Fuzzy search for global cities
- Displays weather data for searched cities

### 🔸 Favorites
- JWT-based Authentication System
- Add/remove favorite cities (stored securely)
- View summaries in a favorites list

---

## 🔐 Security

- **64-bit Custom Encryption** for all API responses
- Encrypted local storage of sensitive data
- **JWT Authentication** for protected routes
- Secure headers and enforced HTTPS

---

## ⚡ Performance & Scalability

- SSR / SSG for improved SEO & speed
- CDN caching using services like **Cloudflare**
- Docker-based containerization
- Designed to support **100,000+ concurrent users**
- Performance tracking using Lighthouse / Core Web Vitals

---

## 🧪 Testing

- Unit Testing: **Jest** + **React Testing Library**
- Integration Testing: **Cypress** or **Playwright**
- **85%** Code Coverage (with reports)
- Code Quality enforced with ESLint & Prettier

---

## 🆓 Bonus Features

- ✅ PWA Support (Offline Access)
- ✅ GraphQL Support (Optional)
- ✅ CI/CD with **GitHub Actions**
- ✅ Deployment: **Vercel**, **AWS Amplify**, or similar
- ✅ Load Testing Reports using **JMeter** or **k6**

---

