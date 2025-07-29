# **DevCanvas: A Full-Stack Blog Application**

---

## **Project Overview**

**DevCanvas** is a robust and meticulously engineered full-stack blog application, serving as a comprehensive demonstration of modern web development principles. This platform empowers users to register, authenticate securely, create and manage their unique blog posts, explore a dynamic public feed of all articles, and discover other contributors' profiles. My core objective in developing DevCanvas was to construct a solution that not only delivers essential blogging functionalities but also rigorously adheres to industry best practices in architecture, security, and user experience.

This application stands as a testament to my capabilities in building scalable, maintainable, and user-centric web solutions.

> Developed with precision by **Maaz Ansari**, a **PHP Full Stack Developer** from **VIT Pune**.

---

## **Motivation & Core Vision**

The digital landscape thrives on effective content dissemination and seamless user interaction. DevCanvas was conceived from a vision to create a platform that is both intuitive for content creators and engaging for readers. Beyond merely fulfilling functional requirements, my primary motivation was to architect a system that embodies:

* **Robustness:** Ensuring the application is stable, reliable, and handles data with integrity.
* **Security:** Implementing strong measures to protect user data and application integrity.
* **Scalability:** Designing the architecture to accommodate future growth and increased user loads.
* **Maintainability:** Structuring the codebase for clarity, reusability, and ease of future development.

This project is a direct reflection of my commitment to these principles, showcasing a holistic understanding of the full-stack development lifecycle.

---

## **Key Features**

DevCanvas offers a rich suite of functionalities, meticulously designed to provide a cohesive and intuitive user experience:

* **Secure User Authentication:** Implemented with industry-standard bcrypt hashing for passwords and stateless JSON Web Tokens (JWT) for session management, ensuring high-level security for user registration and login.

* **Dynamic Blog Post Creation:** Authenticated users can effortlessly compose and publish new articles, contributing to a vibrant and ever-growing content ecosystem.

* **Comprehensive Public Feed:** A central, real-time feed dynamically aggregates and displays all blog posts from every contributor, ensuring users always have access to the latest content.

* **User Discovery & Search:** A dedicated search functionality allows users to efficiently find and connect with other registered members by their username or full name.

* **Detailed User Profiles:** Each user benefits from a dedicated profile page, showcasing their biography and a curated list of all their published works, fostering community engagement.

* **Immersive Single Post View:** Dedicated pages provide a clean and focused reading experience for individual blog posts, complete with author details and timestamps.

* **Responsive & Aesthetic UI:** The application is designed to adapt gracefully across various screen sizes (desktop, tablet, mobile), complemented by a modern, clean, and visually appealing aesthetic.

---

## **Technical Architecture**

### **Frontend: React.js**

The user interface is a dynamic Single Page Application (SPA) built with React.js. This choice was driven by React's component-based paradigm, which facilitates efficient UI rendering, state management, and the creation of highly interactive web experiences.

* **React Router DOM:** Manages declarative, client-side routing, enabling seamless and fast navigation between different application views without full page reloads.

* **Axios:** Employed as the primary HTTP client for making clean, promise-based API requests to the PHP backend, simplifying asynchronous data fetching.

* **Modular Component Design:** The UI is systematically organized into reusable and self-contained components (e.g., `Auth/`, `Blog/`, `Common/`), significantly enhancing code reusability, maintainability, and testability.

### **Backend: PHP 8.3**

The server-side logic is powered by a robust PHP 8.3 RESTful API. PHP was selected for its mature ecosystem, significant performance enhancements in its modern versions, and its proven capability in building reliable and scalable web services.

* **Composer:** Serves as the essential dependency manager for PHP, streamlining the inclusion and management of crucial backend libraries.

* **phpdotenv:** Utilized for securely loading environment variables from a `.env` file, a critical practice for keeping sensitive data (such as database credentials and API keys) out of version control.

* **firebase/php-jwt:** Integrated for robust JSON Web Token (JWT) encoding and decoding, enabling stateless and secure user authentication across API requests.

* **bcrypt:** Employed for strong, one-way password hashing, providing industry-standard security for storing user credentials in the database.

* **PDO (PHP Data Objects):** All database interactions are exclusively performed using PDO, which offers a consistent interface and, crucially, supports parameterized queries to prevent SQL injection vulnerabilities.

### **Database: MySQL 8.x**

Data persistence is managed by MySQL 8.x, a leading open-source relational database management system.

* **Relational Schema:** A clear and normalized schema (`users` and `posts` tables) is designed, incorporating `PRIMARY KEY` and `FOREIGN KEY` constraints to ensure data integrity and efficient relationships between entities.

* **Comprehensive Sample Data:** The `database/blog_app_db.sql` file is meticulously populated with 10 diverse users (including authentic Indian names and realistic bios) and 20 varied blog posts. This rich dataset makes the application immediately impressive and functional upon setup, reflecting a real-world populated system.

---

## **Key Design Decisions & Best Practices**

### **Security-First Development:**

* **Data Protection:** Prioritized user data security through bcrypt for password hashing and secure token-based authentication.

* **API Security:** Implemented robust CORS configurations and JWT validation to protect API endpoints from unauthorized access and cross-site scripting attacks.

* **SQL Injection Prevention:** Exclusively used PDO with prepared statements for all database queries, eliminating a common web vulnerability.

### **Modular & Maintainable Codebase:**

* **Clear Separation of Concerns:** Distinct responsibilities for frontend UI, backend business logic, and database interactions ensure a highly organized and manageable codebase.

* **Consistent Structure:** Adhered to a logical folder and file naming convention across both React and PHP, making the project intuitive to navigate and understand.

### **Performance & Scalability Considerations:**

* **Efficient Data Retrieval:** Optimized database queries with appropriate JOIN operations and ORDER BY clauses to ensure fast data fetching for the public feed and user profiles.

* **Stateless Authentication:** JWTs minimize server-side overhead, contributing to better scalability.

### **User-Centric UI/UX:**

* **Responsive Design:** Ensured optimal viewing and interaction across all device sizes, from mobile phones to large desktops.

* **Aesthetic Appeal:** Employed a clean, modern design with a calming color palette, professional typography (Inter and Poppins fonts), subtle gradients, and refined shadows to enhance visual appeal and readability. The inclusion of decorative images on the homepage adds to the visual richness.

---

## **Development Journey & Problem Solving**

The development of DevCanvas was a hands-on learning experience, involving systematic problem-solving:

* **Environment Setup Complexities:** Navigating the intricacies of local development environments, including configuring Apache Virtual Hosts in Laragon, managing the Windows hosts file, and resolving persistent npm dependency installation issues (e.g., `"no space left on device"` errors) and `react-scripts` execution problems. Each challenge required diligent research, precise command-line execution, and a methodical approach to debugging.

* **API Connectivity Troubleshooting:** Meticulously debugging cross-origin communication between the React frontend and PHP backend, including fine-tuning CORS headers and ensuring the PHP autoloader correctly located necessary classes. This involved a deep dive into HTTP request/response cycles and PHP's class loading mechanisms.

These challenges, while demanding, significantly enhanced my troubleshooting skills and reinforced the importance of a systematic approach to development.

---

## **Getting Started (Local Development Setup)**

Follow these steps to set up and run **DevCanvas** on your local machine. Please ensure you have a stable internet connection for initial dependency downloads.

---

### **Prerequisites**

* Laragon (Apache + MySQL running)
* Composer (installed globally)
* Node.js & npm (v18.x or higher recommended)
* Git Bash
* Visual Studio Code (VS Code)

---

### **Setup Instructions**

#### 1. Clone the Repository:

```bash
git clone https://github.com/AnsariTech-25667/php-react-blog-maaz.git
cd php-react-blog-maaz
```

#### 2. Backend (PHP) Setup:

```bash
cd server
composer install
```

Create a `.env` file:

```env
DB_HOST=localhost
DB_NAME=blog_app_db
DB_USER=root
DB_PASS=
JWT_SECRET=YOUR_SUPER_STRONG_RANDOM_SECRET_KEY
```

> Replace `YOUR_SUPER_STRONG_RANDOM_SECRET_KEY` with a unique, long, random string (e.g., `openssl rand -base64 32`)

#### 3. Configure Laragon Virtual Host:

* **Laragon Menu → Apache → Add Apache Virtual Host**

  * **Name:** `blog-app.test`
  * **Document Root:** Path to your cloned project (e.g., `C:\laragon\www\php-react-blog-maaz`)
  * Restart Apache when prompted

#### 4. Update Windows hosts file:

Open `C:\Windows\System32\drivers\etc\hosts` as Administrator and add:

```
127.0.0.1       blog-app.test
```

Restart Laragon services.

#### 5. Database Setup:

* Open **HeidiSQL** via Laragon
* Connect to `Laragon.MySQL` (User: `root`, Password: empty)
* Create database: `blog_app_db`
* Import: `database/blog_app_db.sql` → Verify users and posts are populated

#### 6. Frontend (React) Setup:

```bash
cd ../client
npm install
```

Create `.env.development`:

```env
REACT_APP_API_BASE_URL=http://blog-app.test/server/api
```

---

## **Running the Application**

Ensure Laragon (Apache & MySQL) is running.

```bash
cd client
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## **Testing & Verification**

* **Public Feed:** Visit homepage → verify styled header, decorative images, and 20 blog posts
* **Register:** `/register` → Create user → Check database for hashed password
* **Login:** `/login` → Verify header updates with options
* **Create Post:** `/create-post` → Publish post → Confirm in feed and database
* **User Search:** `/search-users` → Search by name
* **Profile View:** Click user → view profile & authored posts
* **Logout:** Click Logout → confirm redirection

---

## **Future Enhancements**

* Add user profile editing
* Enable post editing/deletion by author
* Implement pagination for posts and search results
* Integrate rich text editor
* Enhance search/filtering options

---

