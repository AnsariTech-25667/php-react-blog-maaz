-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.4.3 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table blog_app_db.posts: ~20 rows (approximately)
INSERT INTO `posts` (`id`, `user_id`, `title`, `content`, `created_at`, `updated_at`) VALUES
	(1, 1, 'Mastering React Hooks: A Deep Dive', 'React Hooks have revolutionized component design. In this post, I explore useState and useEffect in detail, with practical examples.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(2, 2, 'Dockerizing Your PHP Application', 'A step-by-step guide to containerizing a simple PHP application using Docker. Streamline your development workflow.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(3, 3, 'My Journey Through the Himalayas', 'Anjali Rao shares breathtaking photos and stories from her latest trek in the Indian Himalayas, focusing on sustainable travel.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(4, 4, 'The Psychology Behind Intuitive UI', 'Exploring why some user interfaces just "feel right." A deep dive into cognitive principles applied to UI/UX design.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(5, 1, 'PHP 8.3 New Features: A Developer\'s Perspective', 'A concise look at the most impactful features introduced in PHP 8.3 for backend developers, from JIT to new functions.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(6, 5, 'Introduction to Machine Learning with Python', 'Neha Gupta demystifies the basics of machine learning. Learn about supervised vs. unsupervised learning with simple Python snippets.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(7, 6, 'Automating Deployments with GitLab CI/CD', 'Vikram Reddy guides through setting up CI/CD pipelines in GitLab for continuous integration and deployment of web projects.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(8, 7, 'My First Week Learning Node.js and Express', 'Pooja Kumari recounts her initial challenges and breakthroughs while building her first API with Node.js and Express.js.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(9, 1, 'Building a RESTful API with PHP and PDO', 'A practical guide to designing and implementing a robust RESTful API using native PHP PDO for database interactions.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(10, 8, 'The Future of EdTech in India', 'Arjun Mehta shares insights on how technology is reshaping education across India, from online learning platforms to AI tutors.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(11, 2, 'Understanding SQL Injection: Prevention Strategies', 'A crucial guide for every developer on identifying and preventing SQL injection vulnerabilities in your web applications.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(12, 9, 'Top 5 Superfoods for Energy and Focus', 'Sanjana Nair lists natural superfoods that can significantly boost your energy levels and cognitive function for a productive day.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(13, 3, 'Exploring the Hidden Gems of Rajasthan', 'Anjali Rao uncovers lesser-known cultural and historical sites in Rajasthan, perfect for an off-beat travel experience.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(14, 10, 'Creating Responsive Web Designs with Flexbox', 'Dev Patel provides a comprehensive tutorial on using Flexbox for creating dynamic and responsive layouts without complex CSS.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(15, 5, 'Data Cleaning Techniques for Real-World Data', 'Neha Gupta dives into practical techniques for cleaning messy datasets, a critical step before any data analysis or ML model training.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(16, 7, 'Debugging React Apps: Essential Tips', 'Pooja Kumari shares her favorite browser extensions and debugging strategies for efficiently troubleshooting React application issues.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(17, 8, 'Innovation in Indian Agri-tech: A Closer Look', 'Arjun Mehta discusses emerging trends and startups in India\'s agricultural technology sector, aiming for sustainable farming practices.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(18, 6, 'Monitoring Your Infrastructure with Prometheus and Grafana', 'Vikram Reddy guides through setting up a powerful monitoring stack for your servers and applications using open-source tools.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(19, 9, 'Simple Yoga Poses for Daily Wellness', 'Sanjana Nair introduces beginner-friendly yoga poses and sequences that can be easily incorporated into your daily routine for improved well-being.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(20, 10, 'From Figma to Code: My Workflow for Web Development', 'Dev Patel walks through his design-to-development workflow, translating UI mockups from Figma into clean, functional code.', '2025-07-28 03:45:11', '2025-07-28 03:45:11');

-- Dumping data for table blog_app_db.users: ~10 rows (approximately)
INSERT INTO `users` (`id`, `username`, `email`, `password_hash`, `full_name`, `bio`, `created_at`, `updated_at`) VALUES
	(1, 'priya_sharma', 'priya.sharma@example.com', '$2y$10$abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz', 'Priya Sharma', 'Tech enthusiast, aspiring full-stack developer, and chai lover.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(2, 'rohan_singh', 'rohan.s@example.com', '$2y$10$abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz', 'Rohan Singh', 'Passionate about open-source and building scalable web applications. Always learning.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(3, 'anjali_rao', 'anjali.r@example.com', '$2y$10$abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz', 'Anjali Rao', 'Content creator, travel blogger, and a strong advocate for digital privacy.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(4, 'sameer_k', 'sameer.k@example.com', '$2y$10$abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz', 'Sameer Khan', 'UX/UI designer by profession, amateur photographer by passion. Loves clean interfaces.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(5, 'neha_gupta', 'neha.g@example.com', '$2y$10$abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz', 'Neha Gupta', 'Data science enthusiast exploring the world of AI and machine learning. Loves crunching numbers.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(6, 'vikram_reddy', 'vikram.r@example.com', '$2y$10$abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz', 'Vikram Reddy', 'DevOps advocate and cloud architect. Believes in automating everything.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(7, 'pooja_kumari', 'pooja.k@example.com', '$2y$10$abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz', 'Pooja Kumari', 'Student of life, currently mastering React hooks and PHP frameworks. Future tech leader.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(8, 'arjun_m', 'arjun.m@example.com', '$2y$10$abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz', 'Arjun Mehta', 'Startup founder and entrepreneur. Always looking for innovative solutions to everyday problems.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(9, 'sanjana_nair', 'sanjana.n@example.com', '$2y$10$abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz', 'Sanjana Nair', 'Fitness enthusiast and nutritionist. Blogs about healthy living and balanced diets.', '2025-07-28 03:45:11', '2025-07-28 03:45:11'),
	(10, 'dev_patel', 'dev.p@example.com', '$2y$10$abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz', 'Dev Patel', 'Digital artist and web designer. Combines creativity with code to build beautiful experiences.', '2025-07-28 03:45:11', '2025-07-28 03:45:11');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
