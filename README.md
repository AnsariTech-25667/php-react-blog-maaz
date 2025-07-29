# 🌐 **DevCanvas: A Full-Stack Blog Application**

---

## 📌 **Project Overview**

**DevCanvas** is a full-stack blog application I meticulously engineered to showcase modern web development principles. This platform lets users register, log in securely, create and manage their own blog posts, explore a dynamic public feed of all articles, and even discover other contributors.
My main goal with DevCanvas was to build a solution that not only handles core blogging features but also strictly follows best practices in **architecture, security**, and **user experience**.

> This application truly stands as a testament to my capabilities in crafting scalable, maintainable, and user-centric web solutions.

🛠️ Developed with precision by **Maaz Ansari**, a **PHP Full Stack Developer** from **VIT Pune**.

---

## 🎯 **Motivation & Core Vision**

In today's digital world, sharing insights and connecting through content is key. I built DevCanvas from a vision to create a platform that's not just intuitive for creators but genuinely engaging for readers.
Beyond simply ticking off functional requirements, my primary drive was to architect a system that embodies:

* **Robustness:** Ensuring the application is stable, reliable, and handles data with integrity.
* **Security:** Implementing strong measures to protect user data and application integrity.
* **Scalability:** Designing the architecture to comfortably handle future growth and increased user loads.
* **Maintainability:** Structuring the codebase for clarity, reusability, and ease of future development.

This project directly reflects my commitment to these principles, showcasing a holistic understanding of the full-stack development lifecycle.

---

## ✨ **Key Features**

DevCanvas offers a rich set of features, all designed with a cohesive and intuitive user experience in mind:

* 🔐 **Secure User Authentication:**
  Robust registration and login flows using **bcrypt hashing** and **JWT** for secure sessions.

* 📝 **Dynamic Blog Post Creation:**
  Authenticated users can effortlessly compose and publish new articles.

* 🌍 **Comprehensive Public Feed:**
  Real-time aggregation of all blog posts across contributors.

* 🔍 **User Discovery & Search:**
  Search function to find other members by username or full name.

* 👤 **Detailed User Profiles:**
  Each user has a bio and list of all their published works.

* 📄 **Immersive Single Post View:**
  Clean and focused reading interface with author details and timestamps.

* 📱 **Responsive & Aesthetic UI:**
  Mobile-friendly design with a modern, clean aesthetic and smooth adaptability.

---

## 🏗️ **Technical Architecture**

### 📦 **Frontend: React.js**

* **SPA architecture** with React.js for responsiveness and performance
* **React Router DOM:** For seamless page transitions
* **Axios:** For promise-based API interaction
* **Component Modularization:** Auth/, Blog/, and other reusable modules

### 🧠 **Backend: PHP 8.3**

* RESTful API built with **PHP 8.3**
* **Composer:** Dependency management
* **phpdotenv:** Secure .env loading
* **firebase/php-jwt:** JWT-based stateless authentication
* **bcrypt:** Strong password hashing
* **PDO:** Secure DB access with prepared statements

### 🗃️ **Database: MySQL 8.x**

* Relational schema with **users** and **posts** tables
* PRIMARY & FOREIGN KEY constraints
* Pre-seeded with **10 diverse users** and **20 blog posts**
* SQL dump file: `database/blog_app_db.sql`

---

## 📐 **Key Design Decisions & Best Practices**

* 🔒 **Security-First:** bcrypt, CORS, JWT validation, and PDO prepared statements
* 🔧 **Modular & Maintainable Code:** Separation of concerns
* 🚀 **Performance & Scalability:** Optimized queries, stateless sessions
* 🎨 **User-Centric UI/UX:** Responsive, clean, modern design with subtle gradients and shadows

---

## 🧪 **Development Journey & Problem Solving**

Building DevCanvas was a truly hands-on journey and significantly honed my engineering and debugging skills. Notable challenges included:

* 🛠️ **Environment Setup Complexities:**

  * Apache Virtual Hosts in Laragon
  * Windows hosts file modification
  * Resolving `npm` issues like `"no space left on device"` and `react-scripts` failures

* 🌐 **API Connectivity Troubleshooting:**

  * Fine-tuning **CORS headers**
  * Debugging PHP **class autoloaders**
  * HTTP request/response cycle inspection

These experiences reinforced my confidence in tackling full-stack development problems through deep debugging and systematic research.

---

## 💻 **Getting Started (Local Development Setup)**

### ✅ **Prerequisites**

* Laragon (Apache + MySQL running)
* Composer (installed globally)
* Node.js & npm (v18.x or higher)
* Git Bash
* Visual Studio Code (VS Code)

---

## 🚀 **Setup Instructions**

### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/AnsariTech-25667/php-react-blog-maaz.git
cd php-react-blog-maaz
```

### 2️⃣ **Backend (PHP) Setup**

```bash
cd server
composer install
```

Create a `.env` file:

```dotenv
DB_HOST=localhost  
DB_NAME=blog_app_db  
DB_USER=root  
DB_PASS=  
JWT_SECRET=YOUR_SUPER_STRONG_RANDOM_SECRET_KEY
```

Replace `YOUR_SUPER_STRONG_RANDOM_SECRET_KEY` with a unique, long, random string.

### 3️⃣ **Configure Laragon Virtual Host**

**Laragon Menu → Apache → Add Apache Virtual Host**

* **Name:** `blog-app.test`
* **Document Root:** `C:\laragon\www\php-react-blog-maaz`
  Restart Apache when prompted.

### 4️⃣ **Update Windows Hosts File**

Open `C:\Windows\System32\drivers\etc\hosts` as **Administrator** and add:

```
127.0.0.1       blog-app.test
```

Restart Laragon services.

---

### 5️⃣ **Database Setup**

* Open **HeidiSQL** via Laragon
* Connect to `Laragon.MySQL` (User: `root`, Password: `empty`)
* Create database: `blog_app_db`
* Import: `database/blog_app_db.sql`
* ✅ Verify users and posts are populated

---

### 6️⃣ **Frontend (React) Setup**

```bash
cd ../client
npm install
```

Create `.env.development`:

```dotenv
REACT_APP_API_BASE_URL=http://blog-app.test/server/api
```

---

## ▶️ **Running the Application**

Ensure **Laragon (Apache & MySQL)** is running.

Start React server:

```bash
cd client
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧪 **Testing & Verification**

Go through this checklist once the app is running:

* 📰 **Public Feed:** Verify header, images, and all 20 posts
* 🧍 **Register:** `/register` → Create user → Check DB for hashed password
* 🔐 **Login:** `/login` → Check login flow, updated header
* ✍️ **Create Post:** `/create-post` → Add post → Confirm in feed & DB
* 🔍 **User Search:** `/search-users` → Search by name
* 👤 **Profile View:** Click user → view profile & posts
* 🚪 **Logout:** Test session termination

---

## 🚧 **Future Enhancements**

* 🛠️ Add user profile editing
* ✏️ Enable post editing/deletion by authors
* 📑 Pagination for posts and search
* 🖋️ Rich text editor integration
* 🔍 Smarter search and filters

---

