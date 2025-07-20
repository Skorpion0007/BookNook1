<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BookNook - Enhanced Bookstore & Literary Blog</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;800&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        :root {
            --primary: #4a6fa5;
            --secondary: #c9a959;
            --dark: #2c3e50;
            --light: #f8f9fa;
            --gray: #6c757d;
            --success: #28a745;
            --danger: #dc3545;
            --border-radius: 8px;
            --shadow: 0 4px 12px rgba(0,0,0,0.08);
            --transition: all 0.3s ease;
            --max-width: 1200px;
            --header-height: 80px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Lato', sans-serif;
            background-color: #f5f7fa;
            color: var(--dark);
            line-height: 1.6;
            overflow-x: hidden;
        }

        body.dark-mode {
            background-color: #1a1a2e;
            color: #e0e0e0;
        }

        h1, h2, h3, h4, h5 {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        .container {
            width: 100%;
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 0 20px;
        }

        .btn {
            display: inline-block;
            padding: 10px 25px;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: var(--border-radius);
            cursor: pointer;
            font-weight: 600;
            text-decoration: none;
            text-align: center;
            transition: var(--transition);
        }

        .btn:hover {
            background: #3a5a8a;
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }

        .btn-secondary {
            background: var(--secondary);
        }

        .btn-secondary:hover {
            background: #b99849;
        }

        .btn-outline {
            background: transparent;
            border: 2px solid var(--primary);
            color: var(--primary);
        }

        .btn-outline:hover {
            background: var(--primary);
            color: white;
        }

        /* Skip to content link */
        .skip-link {
            position: absolute;
            top: -40px;
            left: 0;
            background: var(--primary);
            color: white;
            padding: 8px;
            z-index: 10000;
            transition: top 0.3s;
        }

        .skip-link:focus {
            top: 0;
        }

        /* Header Styles */
        header {
            background: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .dark-mode header {
            background: #252540;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        .header-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            height: var(--header-height);
        }

        .logo {
            font-family: 'Playfair Display', serif;
            font-size: 28px;
            font-weight: 700;
            color: var(--primary);
            text-decoration: none;
            display: flex;
            align-items: center;
        }

        .logo span {
            color: var(--secondary);
        }

        .logo i {
            margin-right: 10px;
        }

        .search-bar {
            flex: 0 0 40%;
            position: relative;
        }

        .search-bar input {
            width: 100%;
            padding: 12px 20px;
            border: 2px solid #e2e8f0;
            border-radius: 30px;
            font-size: 16px;
            transition: var(--transition);
        }

        .dark-mode .search-bar input {
            background: #2d2d44;
            border-color: #3a3a5a;
            color: #e0e0e0;
        }

        .search-bar input:focus {
            border-color: var(--primary);
            outline: none;
        }

        .search-bar button {
            position: absolute;
            right: 5px;
            top: 5px;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            cursor: pointer;
        }

        .user-actions {
            display: flex;
            gap: 20px;
        }

        .user-actions a {
            color: var(--dark);
            font-size: 20px;
            transition: var(--transition);
            position: relative;
        }

        .dark-mode .user-actions a {
            color: #d0d0d0;
        }

        .user-actions a:hover {
            color: var(--primary);
        }

        .cart-count {
            position: relative;
        }

        .cart-count::after {
            content: attr(data-count);
            position: absolute;
            top: -8px;
            right: -8px;
            background: var(--danger);
            color: white;
            font-size: 12px;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        nav {
            background: var(--dark);
            padding: 15px 0;
        }

        .dark-mode nav {
            background: #1c1c2e;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 25px;
            position: relative;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 600;
            transition: var(--transition);
            position: relative;
            padding-bottom: 5px;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--secondary);
            transition: var(--transition);
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        .hamburger {
            display: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
        }

        /* Dropdown menu */
        .has-dropdown {
            position: relative;
        }

        .dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            background: var(--dark);
            min-width: 200px;
            border-radius: var(--border-radius);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            display: none;
            flex-direction: column;
            z-index: 10;
            padding: 10px 0;
        }

        .dark-mode .dropdown {
            background: #252540;
        }

        .has-dropdown:hover .dropdown {
            display: flex;
        }

        .dropdown a {
            padding: 10px 20px;
            color: #e0e0e0;
            white-space: nowrap;
        }

        .dropdown a:hover {
            background: rgba(255,255,255,0.1);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.9)), url('https://images.unsplash.com/photo-1495446815901-a7297e633e8d');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 100px 0;
            text-align: center;
            margin-bottom: 60px;
        }

        .dark-mode .hero {
            background: linear-gradient(rgba(26, 26, 46, 0.8), rgba(26, 26, 46, 0.9)), url('https://images.unsplash.com/photo-1495446815901-a7297e633e8d');
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 30px;
        }

        /* Section Styling */
        .section-title {
            text-align: center;
            margin-bottom: 40px;
            position: relative;
        }

        .dark-mode .section-title {
            color: #f0f0f0;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: var(--secondary);
        }

        /* Featured Books */
        .featured-books {
            padding: 60px 0;
        }

        .books-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 30px;
        }

        .book-card {
            background: white;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: var(--transition);
            position: relative;
        }

        .dark-mode .book-card {
            background: #252540;
        }

        .book-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .book-image {
            height: 300px;
            overflow: hidden;
            position: relative;
            background: #f5f5f5;
        }

        .book-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition);
        }

        .book-card:hover .book-image img {
            transform: scale(1.05);
        }

        .book-info {
            padding: 20px;
        }

        .book-title {
            font-size: 1.2rem;
            margin-bottom: 5px;
        }

        .dark-mode .book-title {
            color: #f0f0f0;
        }

        .book-author {
            color: var(--gray);
            font-size: 0.9rem;
            margin-bottom: 10px;
        }

        .dark-mode .book-author {
            color: #a0a0c0;
        }

        .book-price {
            font-weight: 700;
            color: var(--primary);
            font-size: 1.2rem;
            margin-bottom: 15px;
        }

        .book-rating {
            color: var(--secondary);
            margin-bottom: 15px;
        }

        .book-actions {
            display: flex;
            gap: 10px;
        }
        
        .wishlist-btn {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(255,255,255,0.8);
            border-radius: 50%;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--danger);
            z-index: 2;
            transition: var(--transition);
        }
        
        .wishlist-btn:hover {
            background: white;
            transform: scale(1.1);
        }

        /* Categories */
        .categories {
            padding: 60px 0;
            background: white;
        }

        .dark-mode .categories {
            background: #1a1a2e;
        }

        .categories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 20px;
        }

        .category-card {
            background: var(--light);
            border-radius: var(--border-radius);
            padding: 30px 20px;
            text-align: center;
            transition: var(--transition);
            cursor: pointer;
        }

        .dark-mode .category-card {
            background: #252540;
        }

        .category-card:hover {
            background: var(--primary);
            color: white;
            transform: translateY(-5px);
        }

        .dark-mode .category-card:hover {
            background: #3a5a8a;
        }

        .category-card i {
            font-size: 2rem;
            margin-bottom: 15px;
            color: var(--secondary);
        }

        .category-card:hover i {
            color: white;
        }

        /* Blog Preview */
        .blog-preview {
            padding: 60px 0;
        }

        .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
        }

        .blog-card {
            background: white;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--shadow);
        }

        .dark-mode .blog-card {
            background: #252540;
        }

        .blog-image {
            height: 200px;
            background: #f5f5f5;
        }

        .blog-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .blog-content {
            padding: 25px;
        }

        .blog-date {
            color: var(--gray);
            font-size: 0.9rem;
            margin-bottom: 10px;
        }

        .dark-mode .blog-date {
            color: #a0a0c0;
        }

        .blog-title {
            font-size: 1.3rem;
            margin-bottom: 15px;
        }

        .dark-mode .blog-title {
            color: #f0f0f0;
        }

        .blog-excerpt {
            margin-bottom: 20px;
            color: #555;
        }

        .dark-mode .blog-excerpt {
            color: #c0c0d0;
        }

        .blog-tags {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .tag {
            background: #e9ecef;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            color: var(--gray);
        }

        .dark-mode .tag {
            background: #3a3a5a;
            color: #d0d0e0;
        }

        /* Newsletter */
        .newsletter {
            background: var(--primary);
            padding: 60px 0;
            color: white;
            text-align: center;
        }

        .dark-mode .newsletter {
            background: #2a3a5a;
        }

        .newsletter-content {
            max-width: 600px;
            margin: 0 auto;
        }

        .newsletter-form {
            display: flex;
            margin-top: 30px;
        }

        .newsletter-form input {
            flex: 1;
            padding: 15px 20px;
            border: none;
            border-radius: var(--border-radius) 0 0 var(--border-radius);
            font-size: 16px;
        }

        .newsletter-form button {
            background: var(--secondary);
            color: white;
            border: none;
            padding: 0 25px;
            border-radius: 0 var(--border-radius) var(--border-radius) 0;
            cursor: pointer;
            font-weight: 600;
            transition: var(--transition);
        }

        .newsletter-form button:hover {
            background: #b99849;
        }

        /* Footer */
        footer {
            background: var(--dark);
            color: white;
            padding: 60px 0 0;
        }

        .dark-mode footer {
            background: #1c1c2e;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
        }

        .footer-col h4 {
            position: relative;
            padding-bottom: 15px;
            margin-bottom: 20px;
        }

        .footer-col h4::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 2px;
            background: var(--secondary);
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 12px;
        }

        .footer-links a {
            color: #b7c0cd;
            text-decoration: none;
            transition: var(--transition);
        }

        .footer-links a:hover {
            color: var(--secondary);
            padding-left: 5px;
        }

        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .social-links a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            color: white;
            transition: var(--transition);
        }

        .social-links a:hover {
            background: var(--secondary);
            transform: translateY(-5px);
        }

        .copyright {
            text-align: center;
            padding: 20px 0;
            margin-top: 60px;
            border-top: 1px solid rgba(255,255,255,0.1);
        }

        /* Bookstore Page */
        .bookstore {
            padding: 60px 0;
        }

        .bookstore-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            flex-wrap: wrap;
            gap: 20px;
        }

        .filters {
            background: white;
            padding: 25px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .dark-mode .filters {
            background: #252540;
        }

        .filter-section {
            margin-bottom: 10px;
        }

        .filter-section h4 {
            margin-bottom: 15px;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .dark-mode .filter-section h4 {
            color: #f0f0f0;
            border-bottom: 1px solid #3a3a5a;
        }

        .filter-options {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .filter-option {
            background: var(--light);
            padding: 8px 15px;
            border-radius: 20px;
            cursor: pointer;
            transition: var(--transition);
            font-size: 0.9rem;
        }

        .dark-mode .filter-option {
            background: #3a3a5a;
            color: #e0e0f0;
        }

        .filter-option:hover, .filter-option.active {
            background: var(--primary);
            color: white;
        }

        .clear-filters {
            align-self: flex-end;
            background: var(--light);
            color: var(--dark);
            padding: 8px 15px;
            border-radius: 20px;
            cursor: pointer;
            transition: var(--transition);
            font-size: 0.9rem;
            border: none;
        }

        .dark-mode .clear-filters {
            background: #3a3a5a;
            color: #e0e0f0;
        }

        .clear-filters:hover {
            background: var(--danger);
            color: white;
        }

        /* Book Detail Page */
        .book-detail {
            padding: 60px 0;
        }

        .book-detail-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
        }

        @media (max-width: 992px) {
            .book-detail-container {
                grid-template-columns: 1fr;
            }
        }

        .book-detail-image {
            background: white;
            padding: 20px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .dark-mode .book-detail-image {
            background: #252540;
        }

        .book-detail-image img {
            max-height: 500px;
            max-width: 100%;
            object-fit: contain;
        }

        .book-detail-info {
            background: white;
            padding: 30px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
        }

        .dark-mode .book-detail-info {
            background: #252540;
        }

        .book-meta {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
            color: var(--gray);
            font-size: 0.9rem;
            flex-wrap: wrap;
        }

        .dark-mode .book-meta {
            color: #a0a0c0;
        }

        .book-price-large {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary);
            margin: 20px 0;
        }

        .book-actions-large {
            display: flex;
            gap: 15px;
            margin: 30px 0;
            flex-wrap: wrap;
        }

        .book-actions-large .btn {
            flex: 1;
            padding: 15px;
            min-width: 150px;
        }

        .book-description {
            margin: 30px 0;
            line-height: 1.8;
        }

        .dark-mode .book-description {
            color: #e0e0e0;
        }

        .book-details-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 20px;
        }

        .detail-item {
            display: flex;
            flex-direction: column;
        }

        .detail-label {
            font-weight: 600;
            color: var(--gray);
            font-size: 0.9rem;
        }

        .dark-mode .detail-label {
            color: #a0a0c0;
        }

        .detail-value {
            margin-top: 5px;
        }

        /* Blog Detail Page */
        .blog-detail {
            padding: 60px 0;
        }

        .blog-detail-container {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 40px;
        }

        @media (max-width: 992px) {
            .blog-detail-container {
                grid-template-columns: 1fr;
            }
        }

        .blog-main {
            background: white;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            overflow: hidden;
        }

        .dark-mode .blog-main {
            background: #252540;
        }

        .blog-main-image {
            height: 400px;
            background: #f5f5f5;
        }

        .blog-main-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .blog-main-content {
            padding: 40px;
        }

        .blog-meta {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
            color: var(--gray);
            flex-wrap: wrap;
        }

        .dark-mode .blog-meta {
            color: #a0a0c0;
        }

        .blog-content {
            line-height: 1.8;
            font-size: 1.1rem;
        }

        .dark-mode .blog-content {
            color: #e0e0e0;
        }

        .blog-content p {
            margin-bottom: 20px;
        }

        .blog-sidebar {
            background: white;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            padding: 25px;
        }

        .dark-mode .blog-sidebar {
            background: #252540;
        }

        .sidebar-widget {
            margin-bottom: 30px;
        }

        .sidebar-widget h4 {
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
        }

        .dark-mode .sidebar-widget h4 {
            color: #f0f0f0;
            border-bottom: 1px solid #3a3a5a;
        }

        .popular-posts {
            list-style: none;
        }

        .popular-post {
            display: flex;
            gap: 15px;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #f1f1f1;
        }

        .dark-mode .popular-post {
            border-bottom: 1px solid #3a3a5a;
        }

        .popular-post:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .popular-post-image {
            width: 80px;
            height: 80px;
            border-radius: var(--border-radius);
            overflow: hidden;
            background: #f5f5f5;
        }

        .popular-post-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .popular-post-content h5 {
            font-size: 1rem;
            margin-bottom: 5px;
        }

        .dark-mode .popular-post-content h5 {
            color: #f0f0f0;
        }

        .popular-post-date {
            color: var(--gray);
            font-size: 0.8rem;
        }

        .dark-mode .popular-post-date {
            color: #a0a0c0;
        }

        /* Shopping Cart */
        .cart {
            padding: 60px 0;
        }

        .cart-container {
            background: white;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            padding: 30px;
        }

        .dark-mode .cart-container {
            background: #252540;
        }

        .cart-header {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr auto;
            padding: 15px 0;
            border-bottom: 1px solid #eee;
            font-weight: 700;
        }

        .dark-mode .cart-header {
            border-bottom: 1px solid #3a3a5a;
            color: #f0f0f0;
        }

        .cart-item {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr auto;
            padding: 20px 0;
            border-bottom: 1px solid #eee;
            align-items: center;
        }

        .dark-mode .cart-item {
            border-bottom: 1px solid #3a3a5a;
        }

        .cart-item-info {
            display: flex;
            gap: 20px;
            align-items: center;
        }

        .cart-item-image {
            width: 80px;
            height: 100px;
            border-radius: var(--border-radius);
            overflow: hidden;
            background: #f5f5f5;
        }

        .cart-item-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .cart-item-details h4 {
            margin-bottom: 5px;
        }

        .dark-mode .cart-item-details h4 {
            color: #f0f0f0;
        }

        .cart-quantity {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .cart-quantity button {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid #ddd;
            background: white;
            cursor: pointer;
        }

        .dark-mode .cart-quantity button {
            background: #3a3a5a;
            border-color: #555;
            color: #e0e0e0;
        }

        .cart-quantity input {
            width: 40px;
            text-align: center;
            border: 1px solid #ddd;
            padding: 5px;
            border-radius: var(--border-radius);
        }

        .dark-mode .cart-quantity input {
            background: #3a3a5a;
            border-color: #555;
            color: #e0e0e0;
        }

        .cart-item-remove button {
            background: transparent;
            border: none;
            color: var(--danger);
            cursor: pointer;
            font-size: 1.2rem;
            transition: var(--transition);
        }

        .cart-item-remove button:hover {
            transform: scale(1.2);
        }

        .cart-summary {
            margin-top: 30px;
            background: #f9f9f9;
            padding: 25px;
            border-radius: var(--border-radius);
        }

        .dark-mode .cart-summary {
            background: #2d2d44;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
        }

        .dark-mode .summary-row {
            color: #e0e0e0;
        }

        .summary-total {
            font-weight: 700;
            font-size: 1.2rem;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid #ddd;
        }

        .dark-mode .summary-total {
            border-top: 1px solid #3a3a5a;
            color: #f0f0f0;
        }

        /* Dashboard */
        .dashboard {
            padding: 60px 0;
        }

        .dashboard-container {
            display: grid;
            grid-template-columns: 250px 1fr;
            gap: 30px;
        }

        @media (max-width: 768px) {
            .dashboard-container {
                grid-template-columns: 1fr;
            }
        }

        .dashboard-sidebar {
            background: white;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            padding: 25px;
        }

        .dark-mode .dashboard-sidebar {
            background: #252540;
        }

        .dashboard-nav {
            list-style: none;
        }

        .dashboard-nav li {
            margin-bottom: 10px;
        }

        .dashboard-nav a {
            display: block;
            padding: 10px 15px;
            text-decoration: none;
            color: var(--dark);
            border-radius: var(--border-radius);
            transition: var(--transition);
        }

        .dark-mode .dashboard-nav a {
            color: #e0e0e0;
        }

        .dashboard-nav a:hover, .dashboard-nav a.active {
            background: var(--primary);
            color: white;
        }

        .dashboard-content {
            background: white;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            padding: 30px;
        }

        .dark-mode .dashboard-content {
            background: #252540;
        }

        .dashboard-section {
            display: none;
        }

        .dashboard-section.active {
            display: block;
        }

        .order-history table {
            width: 100%;
            border-collapse: collapse;
        }

        .order-history th, .order-history td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #eee;
        }

        .dark-mode .order-history th, 
        .dark-mode .order-history td {
            border-bottom: 1px solid #3a3a5a;
        }

        .dark-mode .order-history th {
            color: #f0f0f0;
        }

        .order-history th {
            font-weight: 700;
        }

        /* Stats */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .stat-card {
            background: white;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            padding: 20px;
            text-align: center;
        }

        .dark-mode .stat-card {
            background: #2d2d44;
        }

        .stat-value {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary);
            margin: 10px 0;
        }

        .stat-label {
            color: var(--gray);
        }

        .dark-mode .stat-label {
            color: #a0a0c0;
        }

        /* Loading spinner */
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            display: none;
        }

        .spinner {
            border: 5px solid #f3f3f3;
            border-top: 5px solid var(--primary);
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Back to top button */
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--primary);
            color: white;
            border: none;
            cursor: pointer;
            box-shadow: var(--shadow);
            display: none;
            z-index: 99;
            transition: var(--transition);
        }
        
        .back-to-top:hover {
            transform: translateY(-5px);
        }

        /* Notification */
        .notification {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--primary);
            color: white;
            padding: 15px 30px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            z-index: 1000;
            display: none;
            animation: fadeInOut 3s ease-in-out;
        }

        @keyframes fadeInOut {
            0%, 100% { opacity: 0; transform: translate(-50%, 20px); }
            10%, 90% { opacity: 1; transform: translate(-50%, 0); }
        }

        /* Modal */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background: white;
            border-radius: var(--border-radius);
            padding: 30px;
            max-width: 500px;
            width: 90%;
            box-shadow: var(--shadow);
            position: relative;
        }

        .dark-mode .modal-content {
            background: #252540;
            color: #e0e0e0;
        }

        .close-modal {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--gray);
        }

        .modal-buttons {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        /* Quick View */
        .quick-view-modal .modal-content {
            max-width: 800px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
        }

        @media (max-width: 768px) {
            .quick-view-modal .modal-content {
                grid-template-columns: 1fr;
            }
        }

        .quick-view-image {
            background: #f9f9f9;
            padding: 20px;
            border-radius: var(--border-radius);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .dark-mode .quick-view-image {
            background: #2d2d44;
        }

        .quick-view-image img {
            max-height: 400px;
            max-width: 100%;
            object-fit: contain;
        }

        /* Checkout Page */
        .checkout {
            padding: 60px 0;
        }
        
        .checkout-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
        }
        
        @media (max-width: 992px) {
            .checkout-container {
                grid-template-columns: 1fr;
            }
        }
        
        .checkout-form {
            background: white;
            padding: 30px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
        }
        
        .dark-mode .checkout-form {
            background: #252540;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
        }
        
        .form-group input, .form-group select, .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: var(--border-radius);
        }
        
        .dark-mode .form-group input, 
        .dark-mode .form-group select, 
        .dark-mode .form-group textarea {
            background: #2d2d44;
            border-color: #3a3a5a;
            color: #e0e0e0;
        }
        
        .checkout-summary {
            background: white;
            padding: 30px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            align-self: flex-start;
        }
        
        .dark-mode .checkout-summary {
            background: #252540;
        }
        
        .checkout-summary h3 {
            border-bottom: 1px solid #eee;
            padding-bottom: 15px;
            margin-bottom: 20px;
        }
        
        .dark-mode .checkout-summary h3 {
            border-bottom: 1px solid #3a3a5a;
        }
        
        .order-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        
        .order-total {
            font-weight: 700;
            font-size: 1.2rem;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #eee;
        }
        
        .dark-mode .order-total {
            border-top: 1px solid #3a3a5a;
        }
        
        /* Empty states */
        .empty-state {
            text-align: center;
            padding: 40px;
            background: white;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
        }
        
        .dark-mode .empty-state {
            background: #252540;
        }
        
        .empty-state i {
            font-size: 4rem;
            color: var(--gray);
            margin-bottom: 20px;
        }
        
        .empty-state h3 {
            margin-bottom: 15px;
        }
        
        .empty-state p {
            margin-bottom: 25px;
            color: var(--gray);
        }
        
        .dark-mode .empty-state p {
            color: #a0a0c0;
        }
        
        /* Responsive Design */
        @media (max-width: 992px) {
            .hero h1 {
                font-size: 2.8rem;
            }
        }

        @media (max-width: 768px) {
            .header-top {
                flex-direction: column;
                gap: 20px;
                height: auto;
                padding: 20px 0;
            }
            
            .search-bar {
                width: 100%;
            }
            
            .nav-links {
                display: none;
                position: absolute;
                top: var(--header-height);
                left: 0;
                width: 100%;
                background: var(--dark);
                flex-direction: column;
                padding: 20px;
            }
            
            .has-dropdown .dropdown {
                position: static;
                box-shadow: none;
                background: transparent;
                padding: 10px 0 0 20px;
            }
            
            .nav-links.active {
                display: flex;
            }
            
            .hamburger {
                display: block;
                position: absolute;
                top: 20px;
                right: 20px;
            }
            
            .hero h1 {
                font-size: 2.2rem;
            }
            
            .newsletter-form {
                flex-direction: column;
            }
            
            .newsletter-form input,
            .newsletter-form button {
                border-radius: var(--border-radius);
                width: 100%;
            }
            
            .newsletter-form button {
                margin-top: 10px;
                padding: 15px;
            }
            
            .cart-header, .cart-item {
                grid-template-columns: 1fr;
                gap: 15px;
            }
            
            .cart-item-info {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        @media (max-width: 576px) {
            .hero {
                padding: 60px 0;
            }
            
            .hero h1 {
                font-size: 1.8rem;
            }
            
            .hero p {
                font-size: 1rem;
            }
            
            .section-title {
                font-size: 1.8rem;
            }
            
            .books-grid,
            .blog-grid {
                grid-template-columns: 1fr;
            }
            
            .book-actions-large {
                flex-direction: column;
            }
            
            .checkout-container {
                gap: 20px;
            }
        }

        /* Extra small screens */
        @media (max-width: 400px) {
            :root {
                --header-height: 100px;
            }
            
            .section-title {
                font-size: 1.5rem;
            }
            
            .book-image {
                height: 200px;
            }
            
            .btn {
                padding: 8px 15px;
                font-size: 14px;
            }
            
            .book-actions-large .btn {
                min-width: 100%;
            }
            
            .book-meta span {
                font-size: 0.8rem;
            }
            
            .filter-options {
                gap: 5px;
            }
            
            .filter-option {
                padding: 6px 10px;
                font-size: 0.8rem;
            }
        }

        /* Page sections */
        .page-section {
            display: none;
        }

        .page-section.active {
            display: block;
        }
        
        /* Form validation */
        .error-message {
            color: var(--danger);
            font-size: 0.85rem;
            margin-top: 5px;
            display: none;
        }
        
        .form-group.error input,
        .form-group.error select,
        .form-group.error textarea {
            border-color: var(--danger);
        }
        
        .form-group.error .error-message {
            display: block;
        }
    </style>
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Loading overlay -->
    <div id="loading" class="loading-overlay">
        <div class="spinner"></div>
    </div>
    
    <!-- Notification -->
    <div id="notification" class="notification" role="status" aria-live="polite"></div>
    
    <!-- Back to top button -->
    <button id="backToTop" class="back-to-top" aria-label="Back to top">
        <i class="fas fa-arrow-up"></i>
    </button>
    
    <!-- Quick View Modal -->
    <div id="quickViewModal" class="modal quick-view-modal" role="dialog" aria-modal="true" aria-labelledby="quickViewTitle">
        <div class="modal-content">
            <span class="close-modal" aria-label="Close modal">&times;</span>
            <div class="quick-view-content" id="quickViewContent">
                <!-- Content will be populated by JavaScript -->
            </div>
        </div>
    </div>
    
    <!-- Remove Item Modal -->
    <div id="removeItemModal" class="modal" role="dialog" aria-modal="true" aria-labelledby="removeItemTitle">
        <div class="modal-content">
            <span class="close-modal" aria-label="Close modal">&times;</span>
            <h3 id="removeItemTitle">Confirm Removal</h3>
            <p>Are you sure you want to remove this item from your cart?</p>
            <div class="modal-buttons">
                <button class="btn btn-outline" id="cancelRemove">Cancel</button>
                <button class="btn btn-secondary" id="confirmRemove">Remove</button>
            </div>
        </div>
    </div>
    
    <!-- Checkout Modal -->
    <div id="checkoutModal" class="modal" role="dialog" aria-modal="true" aria-labelledby="checkoutTitle">
        <div class="modal-content">
            <span class="close-modal" aria-label="Close modal">&times;</span>
            <div id="checkoutContent">
                <h3 id="checkoutTitle">Order Confirmation</h3>
                <div class="checkout-success">
                    <i class="fas fa-check-circle" style="font-size: 4rem; color: var(--success); margin: 20px 0;"></i>
                    <h3>Thank You For Your Order!</h3>
                    <p>Your order has been placed successfully. You'll receive a confirmation email shortly.</p>
                    <p>Order ID: <strong>ORD-20230720</strong></p>
                    <div class="order-summary" style="margin: 20px 0;">
                        <p>Total: <strong id="orderTotal"></strong></p>
                    </div>
                    <button class="btn" onclick="showPage('home')">Continue Shopping</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Header Section -->
    <header>
        <div class="container">
            <div class="header-top">
                <a href="#" class="logo" onclick="showPage('home')">
                    <i class="fas fa-book-open"></i>Book<span>Nook</span>
                </a>
                <div class="search-bar">
                    <input type="text" id="searchInput" placeholder="Search books, authors, genres..." aria-label="Search books">
                    <button onclick="searchBooks()" aria-label="Search">
                        <i class="fas fa-search"></i>
                    </button>
                    <div id="searchSuggestions" class="search-suggestions" style="display:none; position:absolute; width:100%; background:white; box-shadow:var(--shadow); border-radius:var(--border-radius); z-index:100; top:50px;"></div>
                </div>
                <div class="user-actions">
                    <a href="#" id="theme-toggle" aria-label="Toggle dark mode"><i class="fas fa-moon"></i></a>
                    <a href="#" onclick="showPage('login')" aria-label="User account"><i class="fas fa-user"></i></a>
                    <a href="#" class="cart-count" data-count="0" onclick="showPage('cart')" aria-label="Shopping cart"><i class="fas fa-shopping-cart"></i></a>
                </div>
            </div>
        </div>
        <nav>
            <div class="container">
                <ul class="nav-links">
                    <li><a href="#" onclick="showPage('home')">Home</a></li>
                    <li class="has-dropdown">
                        <a href="#" aria-haspopup="true" aria-expanded="false">Shop <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown" role="menu">
                            <li><a href="#" onclick="showPage('bookstore')" role="menuitem">Bookstore</a></li>
                            <li><a href="#" onclick="showPage('categories')" role="menuitem">Categories</a></li>
                            <li><a href="#" onclick="showPage('bestsellers')" role="menuitem">Bestsellers</a></li>
                        </ul>
                    </li>
                    <li><a href="#" onclick="showPage('blog')">Blog</a></li>
                    <li><a href="#" onclick="showPage('about')">About Us</a></li>
                    <li><a href="#" onclick="showPage('contact')">Contact</a></li>
                    <li><a href="#" onclick="showPage('dashboard')">Dashboard</a></li>
                </ul>
                <div class="hamburger" aria-label="Toggle menu">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    </header>

    <!-- Main content -->
    <main id="main-content">
        <!-- Home Page -->
        <section id="home" class="page-section active">
            <!-- Hero Section -->
            <div class="hero">
                <div class="container">
                    <h1>Discover Your Next Favorite Book</h1>
                    <p>Explore our curated collection of bestsellers, classics, and hidden gems. Plus, read our blog for literary insights and recommendations.</p>
                    <div class="hero-btns">
                        <a href="#" class="btn" onclick="showPage('bookstore')">Shop Books</a>
                        <a href="#" class="btn btn-secondary" onclick="showPage('blog')">Read Our Blog</a>
                    </div>
                </div>
            </div>

            <!-- Featured Books Section -->
            <div class="featured-books">
                <div class="container">
                    <h2 class="section-title">Featured Books</h2>
                    <div class="books-grid">
                        <!-- Books will be populated by JavaScript -->
                    </div>
                </div>
            </div>

            <!-- Categories Section -->
            <div class="categories">
                <div class="container">
                    <h2 class="section-title">Browse Categories</h2>
                    <div class="categories-grid">
                        <!-- Categories will be populated by JavaScript -->
                    </div>
                </div>
            </div>

            <!-- Blog Preview Section -->
            <div class="blog-preview">
                <div class="container">
                    <h2 class="section-title">Latest Blog Posts</h2>
                    <div class="blog-grid">
                        <!-- Blog posts will be populated by JavaScript -->
                    </div>
                </div>
            </div>
        </section>

        <!-- Bookstore Page -->
        <section id="bookstore" class="page-section">
            <div class="bookstore">
                <div class="container">
                    <div class="bookstore-header">
                        <h2 class="section-title">Bookstore Catalog</h2>
                        <div class="sort-options">
                            <select class="form-control" id="sortSelect" aria-label="Sort books">
                                <option value="popularity">Sort by: Popularity</option>
                                <option value="newest">Sort by: Newest</option>
                                <option value="price-low">Sort by: Price: Low to High</option>
                                <option value="price-high">Sort by: Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="filters">
                        <div class="filter-section">
                            <h4>Genres</h4>
                            <div class="filter-options" id="genreFilters">
                                <!-- Genre filters will be populated by JavaScript -->
                            </div>
                        </div>
                        
                        <div class="filter-section">
                            <h4>Price Range</h4>
                            <div class="filter-options" id="priceFilters">
                                <!-- Price filters will be populated by JavaScript -->
                            </div>
                        </div>
                        
                        <div class="filter-section">
                            <h4>Rating</h4>
                            <div class="filter-options" id="ratingFilters">
                                <!-- Rating filters will be populated by JavaScript -->
                            </div>
                        </div>
                        
                        <button class="clear-filters" onclick="clearFilters()">Clear All Filters</button>
                    </div>
                    
                    <div class="books-grid" id="bookstoreBooks">
                        <!-- Books will be populated by JavaScript -->
                    </div>
                    
                    <!-- Pagination -->
                    <div class="pagination" style="display: flex; justify-content: center; gap: 10px; margin-top: 30px;">
                        <a href="#" class="btn btn-outline" id="prevPage"><i class="fas fa-chevron-left"></i> Previous</a>
                        <div id="pageNumbers" style="display: flex; gap: 5px;"></div>
                        <a href="#" class="btn btn-outline" id="nextPage">Next <i class="fas fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Book Detail Page -->
        <section id="book-detail" class="page-section">
            <div class="book-detail">
                <div class="container">
                    <div class="book-detail-container" id="bookDetailContainer">
                        <!-- Book details will be populated by JavaScript -->
                    </div>
                </div>
            </div>
        </section>

        <!-- Blog Page -->
        <section id="blog" class="page-section">
            <div class="blog-preview">
                <div class="container">
                    <h2 class="section-title">Bookish Blog</h2>
                    <div class="blog-grid" id="blogPosts">
                        <!-- Blog posts will be populated by JavaScript -->
                    </div>
                </div>
            </div>
        </section>

        <!-- Blog Detail Page -->
        <section id="blog-detail" class="page-section">
            <div class="blog-detail">
                <div class="container">
                    <div class="blog-detail-container" id="blogDetailContainer">
                        <!-- Blog details will be populated by JavaScript -->
                    </div>
                </div>
            </div>
        </section>

        <!-- Shopping Cart -->
        <section id="cart" class="page-section">
            <div class="cart">
                <div class="container">
                    <h2 class="section-title">Your Shopping Cart</h2>
                    <div class="cart-container" id="cartContainer">
                        <!-- Cart content will be populated by JavaScript -->
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Checkout Page -->
        <section id="checkout" class="page-section">
            <div class="checkout">
                <div class="container">
                    <h2 class="section-title">Checkout</h2>
                    <div class="checkout-container">
                        <div class="checkout-form">
                            <form id="checkoutForm">
                                <div class="form-group">
                                    <label for="fullName">Full Name</label>
                                    <input type="text" id="fullName" required>
                                    <div class="error-message" id="nameError">Please enter your full name</div>
                                </div>
                                
                                <div class="form-group">
                                    <label for="email">Email Address</label>
                                    <input type="email" id="email" required>
                                    <div class="error-message" id="emailError">Please enter a valid email</div>
                                </div>
                                
                                <div class="form-group">
                                    <label for="address">Shipping Address</label>
                                    <textarea id="address" rows="3" required></textarea>
                                    <div class="error-message" id="addressError">Please enter your shipping address</div>
                                </div>
                                
                                <div class="form-group">
                                    <label for="city">City</label>
                                    <input type="text" id="city" required>
                                    <div class="error-message" id="cityError">Please enter your city</div>
                                </div>
                                
                                <div class="form-group">
                                    <label for="zip">ZIP / Postal Code</label>
                                    <input type="text" id="zip" required>
                                    <div class="error-message" id="zipError">Please enter a valid ZIP code</div>
                                </div>
                                
                                <div class="form-group">
                                    <label for="country">Country</label>
                                    <select id="country" required>
                                        <option value="">Select Country</option>
                                        <option value="US">United States</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="CA">Canada</option>
                                        <option value="AU">Australia</option>
                                    </select>
                                    <div class="error-message" id="countryError">Please select your country</div>
                                </div>
                                
                                <h3>Payment Information</h3>
                                
                                <div class="form-group">
                                    <label for="cardName">Name on Card</label>
                                    <input type="text" id="cardName" required>
                                    <div class="error-message" id="cardNameError">Please enter the name on card</div>
                                </div>
                                
                                <div class="form-group">
                                    <label for="cardNumber">Card Number</label>
                                    <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required>
                                    <div class="error-message" id="cardNumberError">Please enter a valid card number</div>
                                </div>
                                
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                                    <div class="form-group">
                                        <label for="expDate">Expiration Date</label>
                                        <input type="text" id="expDate" placeholder="MM/YY" required>
                                        <div class="error-message" id="expDateError">Please enter a valid expiration date</div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="cvv">CVV</label>
                                        <input type="text" id="cvv" placeholder="123" required>
                                        <div class="error-message" id="cvvError">Please enter a valid CVV</div>
                                    </div>
                                </div>
                                
                                <button type="submit" class="btn" style="width: 100%; margin-top: 20px;">Complete Purchase</button>
                            </form>
                        </div>
                        
                        <div class="checkout-summary">
                            <h3>Order Summary</h3>
                            <div id="orderSummary">
                                <!-- Order summary will be populated by JavaScript -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- User Dashboard -->
        <section id="dashboard" class="page-section">
            <div class="dashboard">
                <div class="container">
                    <h2 class="section-title">Your Dashboard</h2>
                    <div class="dashboard-container">
                        <div class="dashboard-sidebar">
                            <ul class="dashboard-nav">
                                <li><a href="#" class="active" onclick="showDashboardSection('overview')"><i class="fas fa-tachometer-alt"></i> Overview</a></li>
                                <li><a href="#" onclick="showDashboardSection('orders')"><i class="fas fa-shopping-bag"></i> Orders</a></li>
                                <li><a href="#" onclick="showDashboardSection('favorites')"><i class="fas fa-heart"></i> Favorites</a></li>
                                <li><a href="#" onclick="showDashboardSection('wishlist')"><i class="fas fa-bookmark"></i> Wishlist</a></li>
                                <li><a href="#" onclick="showDashboardSection('settings')"><i class="fas fa-cog"></i> Settings</a></li>
                            </ul>
                        </div>
                        <div class="dashboard-content">
                            <div id="dashboard-overview" class="dashboard-section active">
                                <h3>Account Overview</h3>
                                <div class="stats-grid">
                                    <div class="stat-card">
                                        <i class="fas fa-book fa-2x"></i>
                                        <div class="stat-value" id="statBooksPurchased">0</div>
                                        <div class="stat-label">Books Purchased</div>
                                    </div>
                                    <div class="stat-card">
                                        <i class="fas fa-heart fa-2x"></i>
                                        <div class="stat-value" id="statFavoriteBooks">0</div>
                                        <div class="stat-label">Favorite Books</div>
                                    </div>
                                    <div class="stat-card">
                                        <i class="fas fa-comments fa-2x"></i>
                                        <div class="stat-value" id="statComments">0</div>
                                        <div class="stat-label">Comments Posted</div>
                                    </div>
                                    <div class="stat-card">
                                        <i class="fas fa-star fa-2x"></i>
                                        <div class="stat-value" id="statRating">0.0</div>
                                        <div class="stat-label">Average Rating</div>
                                    </div>
                                </div>
                                <div style="background: white; padding: 20px; border-radius: var(--border-radius);">
                                    <canvas id="readingChart"></canvas>
                                </div>
                            </div>
                            <div id="dashboard-orders" class="dashboard-section">
                                <h3>Order History</h3>
                                <div class="order-history">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Order #</th>
                                                <th>Date</th>
                                                <th>Items</th>
                                                <th>Total</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody id="orderHistoryBody">
                                            <!-- Orders will be populated by JavaScript -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="dashboard-favorites" class="dashboard-section">
                                <h3>Favorite Books</h3>
                                <div class="books-grid" id="favoritesGrid">
                                    <!-- Favorites will be populated by JavaScript -->
                                </div>
                            </div>
                            <div id="dashboard-wishlist" class="dashboard-section">
                                <h3>Your Wishlist</h3>
                                <div class="books-grid" id="wishlistGrid">
                                    <!-- Wishlist will be populated by JavaScript -->
                                </div>
                            </div>
                            <div id="dashboard-settings" class="dashboard-section">
                                <h3>Account Settings</h3>
                                <form id="settingsForm" style="max-width: 500px;">
                                    <div style="margin-bottom: 20px;">
                                        <label for="userFullName">Full Name</label>
                                        <input type="text" id="userFullName" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: var(--border-radius);" value="John Doe">
                                    </div>
                                    <div style="margin-bottom: 20px;">
                                        <label for="userEmail">Email Address</label>
                                        <input type="email" id="userEmail" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: var(--border-radius);" value="john@example.com">
                                    </div>
                                    <div style="margin-bottom: 20px;">
                                        <label for="userPassword">Password</label>
                                        <input type="password" id="userPassword" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: var(--border-radius);" placeholder="••••••••">
                                    </div>
                                    <button type="submit" class="btn">Save Changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Login Page -->
        <section id="login" class="page-section">
            <div class="featured-books" style="min-height: 70vh;">
                <div class="container" style="max-width: 500px;">
                    <div style="background: white; padding: 40px; border-radius: var(--border-radius); box-shadow: var(--shadow);">
                        <h2 class="section-title">Sign In to Your Account</h2>
                        <form id="loginForm">
                            <div style="margin-bottom: 20px;">
                                <label for="loginEmail">Email Address</label>
                                <input type="email" id="loginEmail" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: var(--border-radius);" required>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <label for="loginPassword">Password</label>
                                <input type="password" id="loginPassword" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: var(--border-radius);" required>
                            </div>
                            <div style="margin-bottom: 20px; text-align: right;">
                                <a href="#" style="color: var(--primary);">Forgot Password?</a>
                            </div>
                            <button type="submit" class="btn" style="width: 100%;">Sign In</button>
                        </form>
                        <div style="margin-top: 20px; text-align: center;">
                            <p>Don't have an account? <a href="#" style="color: var(--primary);" onclick="showPage('register')">Register here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Registration Page -->
        <section id="register" class="page-section">
            <div class="featured-books" style="min-height: 70vh;">
                <div class="container" style="max-width: 500px;">
                    <div style="background: white; padding: 40px; border-radius: var(--border-radius); box-shadow: var(--shadow);">
                        <h2 class="section-title">Create an Account</h2>
                        <form id="registerForm">
                            <div style="margin-bottom: 20px;">
                                <label for="regName">Full Name</label>
                                <input type="text" id="regName" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: var(--border-radius);" required>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <label for="regEmail">Email Address</label>
                                <input type="email" id="regEmail" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: var(--border-radius);" required>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <label for="regPassword">Password</label>
                                <input type="password" id="regPassword" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: var(--border-radius);" required>
                            </div>
                            <button type="submit" class="btn" style="width: 100%;">Register</button>
                        </form>
                        <div style="margin-top: 20px; text-align: center;">
                            <p>Already have an account? <a href="#" style="color: var(--primary);" onclick="showPage('login')">Login here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Newsletter Section -->
    <section class="newsletter">
        <div class="container">
            <div class="newsletter-content">
                <h2>Join Our Bookish Community</h2>
                <p>Subscribe to our newsletter for exclusive deals, new releases, and literary content delivered to your inbox.</p>
                <form class="newsletter-form" id="newsletterForm">
                    <input type="email" placeholder="Your email address" id="newsletterEmail" aria-label="Email address">
                    <button type="button" onclick="subscribeNewsletter()">Subscribe</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <h4>BookNook</h4>
                    <p>Your literary escape since 2010. We're passionate about connecting readers with their next favorite book.</p>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Pinterest"><i class="fab fa-pinterest"></i></a>
                    </div>
                </div>
                
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="#" onclick="showPage('home')">Home</a></li>
                        <li><a href="#" onclick="showPage('bookstore')">Shop</a></li>
                        <li><a href="#" onclick="showPage('blog')">Blog</a></li>
                        <li><a href="#" onclick="showPage('about')">About Us</a></li>
                        <li><a href="#" onclick="showPage('contact')">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h4>Customer Service</h4>
                    <ul class="footer-links">
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h4>Contact Us</h4>
                    <ul class="footer-links">
                        <li><i class="fas fa-map-marker-alt"></i> 123 Book Street, Litville</li>
                        <li><i class="fas fa-phone"></i> (555) 123-4567</li>
                        <li><i class="fas fa-envelope"></i> hello@booknook.com</li>
                        <li><i class="fas fa-clock"></i> Mon-Fri: 9am-6pm</li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2023 BookNook. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Data for books
        const books = [
            {
                id: 1,
                title: "The Midnight Library",
                author: "Matt Haig",
                genre: "Fiction",
                price: 16.99,
                rating: 4.5,
                image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
                description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices...",
                isbn: "9780525559474",
                publisher: "Viking",
                publicationDate: "September 29, 2020",
                pages: 304,
                dimensions: "5.5 x 1 x 8.5 inches"
            },
            {
                id: 2,
                title: "Project Hail Mary",
                author: "Andy Weir",
                genre: "Science Fiction",
                price: 19.99,
                rating: 5.0,
                image: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb",
                description: "A lone astronaut must save the earth from disaster in this incredible new science-based thriller from the #1 New York Times bestselling author of The Martian.",
                isbn: "9780593135204",
                publisher: "Ballantine Books",
                publicationDate: "May 4, 2021",
                pages: 496,
                dimensions: "6.4 x 1.4 x 9.5 inches"
            },
            {
                id: 3,
                title: "Klara and the Sun",
                author: "Kazuo Ishiguro",
                genre: "Science Fiction",
                price: 17.49,
                rating: 4.0,
                image: "https://images.unsplash.com/photo-1589998059171-988d887df646",
                description: "From the bestselling author of Never Let Me Go and The Remains of the Day, a stunning new novel that asks, what does it mean to love?",
                isbn: "9780593318171",
                publisher: "Knopf",
                publicationDate: "March 2, 2021",
                pages: 320,
                dimensions: "5.7 x 1.1 x 8.5 inches"
            },
            {
                id: 4,
                title: "The Four Winds",
                author: "Kristin Hannah",
                genre: "Historical Fiction",
                price: 15.99,
                rating: 4.5,
                image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666",
                description: "From the number-one bestselling author of The Nightingale and The Great Alone comes a powerful American epic about love and heroism and hope, set during the Great Depression.",
                isbn: "9781250178602",
                publisher: "St. Martin's Press",
                publicationDate: "February 2, 2021",
                pages: 464,
                dimensions: "6.4 x 1.5 x 9.6 inches"
            },
            {
                id: 5,
                title: "The Invisible Life of Addie LaRue",
                author: "V.E. Schwab",
                genre: "Fantasy",
                price: 14.99,
                rating: 4.7,
                image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf",
                description: "A Life No One Will Remember. A Story You Will Never Forget.",
                isbn: "9780765387561",
                publisher: "Tor Books",
                publicationDate: "October 6, 2020",
                pages: 448,
                dimensions: "6.1 x 1.4 x 9.3 inches"
            },
            {
                id: 6,
                title: "The Last Thing He Told Me",
                author: "Laura Dave",
                genre: "Mystery",
                price: 13.49,
                rating: 4.3,
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
                description: "A gripping mystery about a woman who thinks she's found the love of her life—until he disappears.",
                isbn: "9781501171345",
                publisher: "Simon & Schuster",
                publicationDate: "May 4, 2021",
                pages: 320,
                dimensions: "5.5 x 1 x 8.4 inches"
            },
            {
                id: 7,
                title: "The Silent Patient",
                author: "Alex Michaelides",
                genre: "Thriller",
                price: 12.99,
                rating: 4.2,
                image: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da",
                description: "A psychological thriller about a woman's act of violence against her husband and her therapist's obsession with uncovering her motive.",
                isbn: "9781250301697",
                publisher: "Celadon Books",
                publicationDate: "February 5, 2019",
                pages: 336,
                dimensions: "5.5 x 1.1 x 8.4 inches"
            },
            {
                id: 8,
                title: "Educated",
                author: "Tara Westover",
                genre: "Memoir",
                price: 15.99,
                rating: 4.7,
                image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
                description: "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
                isbn: "9780399590504",
                publisher: "Random House",
                publicationDate: "February 20, 2018",
                pages: 352,
                dimensions: "6.4 x 1.1 x 9.5 inches"
            }
        ];

        // Data for blog posts
        const blogPosts = [
            {
                id: 1,
                title: "10 Must-Read Books for Summer 2023",
                date: "June 12, 2023",
                author: "Sarah Johnson",
                image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6",
                excerpt: "Discover our top picks for beach reads, thrillers, and thought-provoking novels perfect for summer days.",
                tags: ["Summer Reads", "Book Recommendations", "New Releases"],
                content: "<p>Summer is the perfect time to dive into a great book. Whether you're lounging by the pool, relaxing on the beach, or enjoying a staycation at home, we've curated a list of the top 10 books you won't want to miss this season.</p><h3>1. The Summer of Lost and Found</h3><p>This heartwarming novel follows the journey of a woman who returns to her childhood home and discovers a box of letters that change everything she thought she knew about her family.</p>"
            },
            {
                id: 2,
                title: "The Rise of Independent Bookstores",
                date: "June 5, 2023",
                author: "Michael Chen",
                image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61",
                excerpt: "How independent bookshops are thriving in the digital age and becoming community hubs for readers.",
                tags: ["Industry Trends", "Bookstores", "Community"],
                content: "<p>In an era dominated by online retailers, independent bookstores are experiencing a surprising renaissance. These local gems are redefining what it means to be a bookseller in the 21st century.</p><p>By creating welcoming spaces that foster community engagement, hosting author events, and curating unique selections, indie bookstores have become cultural centers in their neighborhoods.</p>"
            },
            {
                id: 3,
                title: "Interview with Award-Winning Author",
                date: "May 28, 2023",
                author: "Emma Rodriguez",
                image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
                excerpt: "We sit down with bestselling author Elena Rodriguez to discuss her writing process and new novel.",
                tags: ["Author Interview", "Writing Process", "Behind the Scenes"],
                content: "<p>This month we had the privilege of speaking with Elena Rodriguez, whose latest novel 'The Silent Garden' has captivated readers worldwide. We discussed her creative process, inspiration, and the journey from idea to published book.</p><p>'The most challenging part was finding the authentic voice for my protagonist,' Rodriguez shared. 'I rewrote the first chapter seventeen times before I felt I got it right.'</p>"
            }
        ];

        // Data for categories
        const categories = [
            { name: "Fiction", icon: "fas fa-magic" },
            { name: "History", icon: "fas fa-history" },
            { name: "Romance", icon: "fas fa-heartbeat" },
            { name: "Mystery", icon: "fas fa-user-secret" },
            { name: "Sci-Fi", icon: "fas fa-rocket" },
            { name: "Psychology", icon: "fas fa-brain" },
            { name: "Business", icon: "fas fa-chart-line" },
            { name: "Children", icon: "fas fa-child" }
        ];

        // Data for filters
        const filters = {
            genres: ["Fiction", "Mystery", "Science Fiction", "Romance", "Biography", "History", "Self-Help"],
            priceRanges: ["Under $10", "$10 - $20", "$20 - $30", "Over $30"],
            ratings: [5, 4, 3]
        };
        
        // State management with localStorage
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        let activeFilters = {
            genres: [],
            priceRanges: [],
            ratings: []
        };
        let itemToRemove = null;
        let currentPage = 1;
        const booksPerPage = 6;
        
        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderBooks();
            renderBlogPosts();
            renderCategories();
            renderFilters();
            renderFavorites();
            renderWishlist();
            setupReadingChart();
            setupBackToTop();
            setupEventListeners();
            simulateLoading();
            updateCartCount();
            updateDashboardStats();
            renderOrderHistory();
        });
        
        function setupEventListeners() {
            // Search on Enter key
            document.getElementById('searchInput').addEventListener('keyup', function(event) {
                if (event.key === 'Enter') {
                    searchBooks();
                } else {
                    showSearchSuggestions(this.value);
                }
            });
            
            // Mobile menu toggle
            document.querySelector('.hamburger').addEventListener('click', function() {
                document.querySelector('.nav-links').classList.toggle('active');
                this.setAttribute('aria-expanded', 
                    this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
            });
            
            // Theme toggle
            document.getElementById('theme-toggle').addEventListener('click', function(e) {
                e.preventDefault();
                document.body.classList.toggle('dark-mode');
                
                const icon = this.querySelector('i');
                if (document.body.classList.contains('dark-mode')) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                    localStorage.setItem('theme', 'dark');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                    localStorage.setItem('theme', 'light');
                }
            });
            
            // Apply saved theme
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-mode');
                document.querySelector('#theme-toggle i').classList.remove('fa-moon');
                document.querySelector('#theme-toggle i').classList.add('fa-sun');
            }
            
            // Modal close buttons
            document.querySelectorAll('.close-modal').forEach(btn => {
                btn.addEventListener('click', closeModals);
            });
            
            // Cancel remove button
            document.getElementById('cancelRemove').addEventListener('click', closeModals);
            
            // Confirm remove button
            document.getElementById('confirmRemove').addEventListener('click', function() {
                if (itemToRemove !== null) {
                    removeFromCart(itemToRemove);
                    itemToRemove = null;
                }
                closeModals();
            });
            
            // Login form submission
            document.getElementById('loginForm').addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;
                
                if (validateEmail(email) && password.length >= 6) {
                    showNotification('Login successful!');
                    showPage('dashboard');
                } else {
                    showNotification('Please enter a valid email and password (min 6 characters)');
                }
            });
            
            // Registration form submission
            document.getElementById('registerForm').addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('regName').value;
                const email = document.getElementById('regEmail').value;
                const password = document.getElementById('regPassword').value;
                
                if (validateEmail(email) && password.length >= 6) {
                    showNotification('Registration successful! Please login.');
                    showPage('login');
                } else {
                    showNotification('Please enter a valid email and password (min 6 characters)');
                }
            });
            
            // Settings form submission
            document.getElementById('settingsForm').addEventListener('submit', function(e) {
                e.preventDefault();
                showNotification('Settings saved successfully!');
            });
            
            // Checkout form submission
            document.getElementById('checkoutForm').addEventListener('submit', function(e) {
                e.preventDefault();
                if (validateCheckoutForm()) {
                    completePurchase();
                }
            });
            
            // Newsletter form submission
            document.getElementById('newsletterForm').addEventListener('submit', function(e) {
                e.preventDefault();
                subscribeNewsletter();
            });
            
            // Pagination
            document.getElementById('prevPage').addEventListener('click', function(e) {
                e.preventDefault();
                if (currentPage > 1) {
                    currentPage--;
                    renderBookstoreBooks();
                }
            });
            
            document.getElementById('nextPage').addEventListener('click', function(e) {
                e.preventDefault();
                currentPage++;
                renderBookstoreBooks();
            });
            
            // Sorting
            document.getElementById('sortSelect').addEventListener('change', function() {
                renderBookstoreBooks();
            });
        }
        
        function closeModals() {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
        }

        // Render books
        function renderBooks() {
            const booksGrid = document.querySelector('.books-grid');
            booksGrid.innerHTML = '';
            
            books.slice(0, 4).forEach(book => {
                const bookElement = createBookElement(book);
                booksGrid.appendChild(bookElement);
            });
            
            renderBookstoreBooks();
        }
        
        // Render bookstore books with pagination
        function renderBookstoreBooks() {
            const bookstoreBooks = document.getElementById('bookstoreBooks');
            bookstoreBooks.innerHTML = '';
            
            // Get sort option
            const sortOption = document.getElementById('sortSelect').value;
            let sortedBooks = [...books];
            
            // Apply sorting
            switch(sortOption) {
                case 'newest':
                    sortedBooks.sort((a, b) => b.id - a.id);
                    break;
                case 'price-low':
                    sortedBooks.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    sortedBooks.sort((a, b) => b.price - a.price);
                    break;
                case 'popularity':
                default:
                    sortedBooks.sort((a, b) => b.rating - a.rating);
            }
            
            // Apply filters
            const filteredBooks = sortedBooks.filter(book => {
                // Genre filter
                if (activeFilters.genres.length > 0 && !activeFilters.genres.includes(book.genre)) {
                    return false;
                }
                
                // Rating filter
                if (activeFilters.ratings.length > 0 && !activeFilters.ratings.some(r => book.rating >= r)) {
                    return false;
                }
                
                // Price filter
                if (activeFilters.priceRanges.length > 0) {
                    let inRange = false;
                    for (const range of activeFilters.priceRanges) {
                        if (range === "Under $10" && book.price < 10) {
                            inRange = true;
                        } else if (range === "$10 - $20" && book.price >= 10 && book.price <= 20) {
                            inRange = true;
                        } else if (range === "$20 - $30" && book.price > 20 && book.price <= 30) {
                            inRange = true;
                        } else if (range === "Over $30" && book.price > 30) {
                            inRange = true;
                        }
                    }
                    if (!inRange) return false;
                }
                
                return true;
            });
            
            // Pagination
            const startIndex = (currentPage - 1) * booksPerPage;
            const paginatedBooks = filteredBooks.slice(startIndex, startIndex + booksPerPage);
            
            if (paginatedBooks.length === 0) {
                bookstoreBooks.innerHTML = '<div class="empty-state"><i class="fas fa-book-open"></i><h3>No books found</h3><p>Try adjusting your filters to find what you\'re looking for.</p><button class="btn" onclick="clearFilters()">Clear Filters</button></div>';
            } else {
                paginatedBooks.forEach(book => {
                    const bookElement = createBookElement(book);
                    bookstoreBooks.appendChild(bookElement);
                });
            }
            
            // Render pagination controls
            renderPaginationControls(filteredBooks.length);
        }
        
        function renderPaginationControls(totalBooks) {
            const totalPages = Math.ceil(totalBooks / booksPerPage);
            const pageNumbers = document.getElementById('pageNumbers');
            pageNumbers.innerHTML = '';
            
            for (let i = 1; i <= totalPages; i++) {
                const pageButton = document.createElement('a');
                pageButton.href = '#';
                pageButton.className = currentPage === i ? 'btn btn-secondary' : 'btn';
                pageButton.textContent = i;
                pageButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    currentPage = i;
                    renderBookstoreBooks();
                });
                pageNumbers.appendChild(pageButton);
            }
            
            // Update prev/next buttons
            document.getElementById('prevPage').style.display = currentPage === 1 ? 'none' : 'inline-block';
            document.getElementById('nextPage').style.display = currentPage === totalPages ? 'none' : 'inline-block';
        }

        // Create book element with accessibility
        function createBookElement(book) {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.setAttribute('role', 'article');
            bookCard.innerHTML = `
                <div class="book-image">
                    <img src="${book.image}" alt="Cover of ${book.title} by ${book.author}" loading="lazy">
                </div>
                <div class="book-info">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author}</p>
                    <div class="book-rating" aria-label="Rating: ${book.rating} out of 5 stars">
                        ${renderRatingStars(book.rating)}
                        <span>(${book.rating})</span>
                    </div>
                    <p class="book-price">$${book.price.toFixed(2)}</p>
                    <div class="book-actions">
                        <a href="#" class="btn" onclick="showBookDetail(${book.id})">Details</a>
                        <a href="#" class="btn btn-secondary" onclick="addToCart(${book.id})" aria-label="Add ${book.title} to cart"><i class="fas fa-cart-plus"></i></a>
                        <button class="btn btn-outline" onclick="openQuickView(${book.id})">Quick View</button>
                    </div>
                </div>
                <button class="wishlist-btn" onclick="toggleWishlist(${book.id})" aria-label="Add ${book.title} to wishlist">
                  <i class="${isInWishlist(book.id) ? 'fas' : 'far'} fa-heart"></i>
                </button>
            `;
            return bookCard;
        }

        // Render rating stars
        function renderRatingStars(rating) {
            let stars = '';
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 >= 0.5;
            
            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star" aria-hidden="true"></i>';
            }
            
            if (halfStar) {
                stars += '<i class="fas fa-star-half-alt" aria-hidden="true"></i>';
            }
            
            const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
            for (let i = 0; i < emptyStars; i++) {
                stars += '<i class="far fa-star" aria-hidden="true"></i>';
            }
            
            return stars;
        }

        // Render blog posts with accessibility
        function renderBlogPosts() {
            const blogGrid = document.querySelector('.blog-grid');
            const blogPostsContainer = document.getElementById('blogPosts');
            
            blogGrid.innerHTML = '';
            blogPostsContainer.innerHTML = '';
            
            blogPosts.forEach(post => {
                const blogElement = createBlogElement(post);
                blogGrid.appendChild(blogElement.cloneNode(true));
                blogPostsContainer.appendChild(blogElement);
            });
        }

        // Create blog element
        function createBlogElement(post) {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
            blogCard.setAttribute('role', 'article');
            blogCard.innerHTML = `
                <div class="blog-image">
                    <img src="${post.image}" alt="${post.title}" loading="lazy">
                </div>
                <div class="blog-content">
                    <div class="blog-date">${post.date}</div>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <div class="blog-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div style="margin-top: 20px;">
                        <a href="#" class="btn" onclick="showBlogDetail(${post.id})">Read More</a>
                    </div>
                </div>
            `;
            return blogCard;
        }

        // Render categories
        function renderCategories() {
            const categoriesGrid = document.querySelector('.categories-grid');
            categoriesGrid.innerHTML = '';
            
            categories.forEach(category => {
                const categoryCard = document.createElement('div');
                categoryCard.className = 'category-card';
                categoryCard.setAttribute('role', 'button');
                categoryCard.tabIndex = 0;
                categoryCard.innerHTML = `
                    <i class="${category.icon}"></i>
                    <h3>${category.name}</h3>
                `;
                categoryCard.addEventListener('click', () => {
                    showPage('bookstore');
                    // Filter books by category
                    activeFilters.genres = [category.name];
                    applyFilters();
                });
                categoryCard.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        showPage('bookstore');
                        activeFilters.genres = [category.name];
                        applyFilters();
                    }
                });
                categoriesGrid.appendChild(categoryCard);
            });
        }

        // Render filters
        function renderFilters() {
            const genreFilters = document.getElementById('genreFilters');
            const priceFilters = document.getElementById('priceFilters');
            const ratingFilters = document.getElementById('ratingFilters');
            
            // Genre filters
            filters.genres.forEach(genre => {
                const filterOption = document.createElement('div');
                filterOption.className = 'filter-option';
                filterOption.textContent = genre;
                filterOption.setAttribute('role', 'button');
                filterOption.tabIndex = 0;
                filterOption.addEventListener('click', () => {
                    filterOption.classList.toggle('active');
                    if (filterOption.classList.contains('active')) {
                        activeFilters.genres.push(genre);
                    } else {
                        activeFilters.genres = activeFilters.genres.filter(g => g !== genre);
                    }
                    renderBookstoreBooks();
                });
                filterOption.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        filterOption.click();
                    }
                });
                genreFilters.appendChild(filterOption);
            });
            
            // Price filters
            filters.priceRanges.forEach(range => {
                const filterOption = document.createElement('div');
                filterOption.className = 'filter-option';
                filterOption.textContent = range;
                filterOption.setAttribute('role', 'button');
                filterOption.tabIndex = 0;
                filterOption.addEventListener('click', () => {
                    filterOption.classList.toggle('active');
                    if (filterOption.classList.contains('active')) {
                        activeFilters.priceRanges.push(range);
                    } else {
                        activeFilters.priceRanges = activeFilters.priceRanges.filter(r => r !== range);
                    }
                    renderBookstoreBooks();
                });
                filterOption.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        filterOption.click();
                    }
                });
                priceFilters.appendChild(filterOption);
            });
            
            // Rating filters
            filters.ratings.forEach(rating => {
                const filterOption = document.createElement('div');
                filterOption.className = 'filter-option';
                filterOption.innerHTML = renderRatingStars(rating);
                filterOption.setAttribute('role', 'button');
                filterOption.tabIndex = 0;
                filterOption.addEventListener('click', () => {
                    filterOption.classList.toggle('active');
                    if (filterOption.classList.contains('active')) {
                        activeFilters.ratings.push(rating);
                    } else {
                        activeFilters.ratings = activeFilters.ratings.filter(r => r !== rating);
                    }
                    renderBookstoreBooks();
                });
                filterOption.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        filterOption.click();
                    }
                });
                ratingFilters.appendChild(filterOption);
            });
        }
        
        function applyFilters() {
            renderBookstoreBooks();
        }
        
        function clearFilters() {
            // Clear active filters
            activeFilters = {
                genres: [],
                priceRanges: [],
                ratings: []
            };
            
            // Remove active class from filter options
            document.querySelectorAll('.filter-option').forEach(option => {
                option.classList.remove('active');
            });
            
            // Re-render all books
            renderBookstoreBooks();
        }

        // Show book detail
        function showBookDetail(bookId) {
            const book = books.find(b => b.id === bookId);
            if (!book) {
                showNotification('Book not found!');
                showPage('bookstore');
                return;
            }
            
            const container = document.getElementById('bookDetailContainer');
            container.innerHTML = `
                <div class="book-detail-image">
                    <img src="${book.image}" alt="Cover of ${book.title} by ${book.author}" loading="lazy">
                </div>
                <div class="book-detail-info">
                    <h2>${book.title}</h2>
                    <div class="book-meta">
                        <span>By ${book.author}</span>
                        <span>${book.genre}</span>
                        <span>Published: ${book.publicationDate}</span>
                    </div>
                    <div class="book-rating" aria-label="Rating: ${book.rating} out of 5 stars">
                        ${renderRatingStars(book.rating)}
                        <span>${book.rating} (1,234 reviews)</span>
                    </div>
                    <p class="book-price-large">$${book.price.toFixed(2)}</p>
                    
                    <div class="book-actions-large">
                        <a href="#" class="btn" onclick="addToCart(${book.id})"><i class="fas fa-cart-plus"></i> Add to Cart</a>
                        <a href="#" class="btn btn-secondary" onclick="addToCart(${book.id}); showPage('cart')">Buy Now</a>
                        <button class="btn btn-outline" onclick="toggleWishlist(${book.id})">
                            <i class="${isInWishlist(book.id) ? 'fas' : 'far'} fa-heart"></i> 
                            ${isInWishlist(book.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                        </button>
                    </div>
                    
                    <div class="book-description">
                        <p>${book.description}</p>
                    </div>
                    
                    <h3>Product Details</h3>
                    <div class="book-details-grid">
                        <div class="detail-item">
                            <span class="detail-label">ISBN</span>
                            <span class="detail-value">${book.isbn}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Publisher</span>
                            <span class="detail-value">${book.publisher}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Publication Date</span>
                            <span class="detail-value">${book.publicationDate}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Pages</span>
                            <span class="detail-value">${book.pages}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Dimensions</span>
                            <span class="detail-value">${book.dimensions}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Language</span>
                            <span class="detail-value">English</span>
                        </div>
                    </div>
                </div>
            `;
            
            showPage('book-detail');
        }
        
        // Open quick view modal
        function openQuickView(bookId) {
            const book = books.find(b => b.id === bookId);
            if (!book) return;
            
            const content = document.getElementById('quickViewContent');
            content.innerHTML = `
                <div class="quick-view-image">
                    <img src="${book.image}" alt="Cover of ${book.title}" loading="lazy">
                </div>
                <div class="quick-view-info">
                    <h2>${book.title}</h2>
                    <p class="book-author">${book.author}</p>
                    <div class="book-rating" aria-label="Rating: ${book.rating} out of 5 stars">
                        ${renderRatingStars(book.rating)}
                        <span>(${book.rating})</span>
                    </div>
                    <p class="book-price">$${book.price.toFixed(2)}</p>
                    <p class="book-excerpt">${book.description.substring(0, 200)}...</p>
                    <div class="book-actions" style="margin-top: 20px;">
                        <a href="#" class="btn" onclick="showBookDetail(${book.id}); closeModals()">View Details</a>
                        <a href="#" class="btn btn-secondary" onclick="addToCart(${book.id}); closeModals()">Add to Cart</a>
                    </div>
                </div>
            `;
            
            document.getElementById('quickViewModal').style.display = 'flex';
            document.getElementById('quickViewTitle').textContent = `Quick View: ${book.title}`;
        }

        // Show blog detail
        function showBlogDetail(postId) {
            const post = blogPosts.find(p => p.id === postId);
            if (!post) {
                showNotification('Blog post not found!');
                showPage('blog');
                return;
            }
            
            const container = document.getElementById('blogDetailContainer');
            container.innerHTML = `
                <div class="blog-main">
                    <div class="blog-main-image">
                        <img src="${post.image}" alt="${post.title}" loading="lazy">
                    </div>
                    <div class="blog-main-content">
                        <h2>${post.title}</h2>
                        <div class="blog-meta">
                            <span><i class="fas fa-user"></i> ${post.author}</span>
                            <span><i class="fas fa-calendar"></i> ${post.date}</span>
                            <span><i class="fas fa-comments"></i> 24 Comments</span>
                        </div>
                        <div class="blog-content">
                            ${post.content}
                        </div>
                        
                        <div class="blog-tags">
                            ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        
                        <div class="social-share" style="margin-top: 40px;">
                            <h4>Share this post:</h4>
                            <div class="social-links">
                                <a href="#" aria-label="Share on Facebook"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" aria-label="Share on Twitter"><i class="fab fa-twitter"></i></a>
                                <a href="#" aria-label="Share on Pinterest"><i class="fab fa-pinterest"></i></a>
                                <a href="#" aria-label="Share on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="blog-sidebar">
                    <div class="sidebar-widget">
                        <h4>About the Author</h4>
                        <div class="author-info">
                            <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="${post.author}" style="width:80px; height:80px; border-radius:50%; margin-bottom:15px;">
                            <p>${post.author} is a literary critic and book blogger with over 10 years of experience. Specializes in contemporary fiction and book industry trends.</p>
                        </div>
                    </div>
                    
                    <div class="sidebar-widget">
                        <h4>Popular Posts</h4>
                        <ul class="popular-posts">
                            ${blogPosts.filter(p => p.id !== postId).slice(0, 3).map(p => `
                                <li class="popular-post">
                                    <div class="popular-post-image">
                                        <img src="${p.image}" alt="${p.title}" loading="lazy">
                                    </div>
                                    <div class="popular-post-content">
                                        <h5>${p.title}</h5>
                                        <div class="popular-post-date">${p.date}</div>
                                    </div>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="sidebar-widget">
                        <h4>Newsletter</h4>
                        <p>Subscribe to get the latest book recommendations and literary news.</p>
                        <form id="sidebarNewsletter">
                            <input type="email" placeholder="Your email" style="width:100%; padding:10px; margin:10px 0; border-radius:var(--border-radius); border:1px solid #ddd;">
                            <button type="button" class="btn" style="width:100%;" onclick="subscribeNewsletter()">Subscribe</button>
                        </form>
                    </div>
                </div>
            `;
            
            showPage('blog-detail');
        }

        // Render favorites
        function renderFavorites() {
            const favoritesGrid = document.getElementById('favoritesGrid');
            favoritesGrid.innerHTML = '';
            
            // Show first 4 books as favorites
            books.slice(0, 4).forEach(book => {
                const bookElement = createBookElement(book);
                favoritesGrid.appendChild(bookElement);
            });
        }
        
        // Render wishlist
        function renderWishlist() {
            const wishlistGrid = document.getElementById('wishlistGrid');
            wishlistGrid.innerHTML = '';
            
            if (wishlist.length === 0) {
                wishlistGrid.innerHTML = '<div class="empty-state"><i class="fas fa-bookmark"></i><h3>Your wishlist is empty</h3><p>Add some books you want to save for later!</p><button class="btn" onclick="showPage(\'bookstore\')">Browse Books</button></div>';
                return;
            }
            
            wishlist.forEach(bookId => {
                const book = books.find(b => b.id === bookId);
                if (book) {
                    const bookElement = createBookElement(book);
                    wishlistGrid.appendChild(bookElement);
                }
            });
        }
        
        // Toggle wishlist with localStorage persistence
        function toggleWishlist(bookId) {
            event.preventDefault();
            const index = wishlist.indexOf(bookId);
            
            if (index === -1) {
                wishlist.push(bookId);
                showNotification(`Added to wishlist!`);
            } else {
                wishlist.splice(index, 1);
                showNotification(`Removed from wishlist`);
            }
            
            // Update localStorage
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            
            // Update wishlist button in book card
            if (event.currentTarget) {
                const heartIcon = event.currentTarget.querySelector('i');
                if (heartIcon) {
                    heartIcon.className = isInWishlist(bookId) ? 'fas fa-heart' : 'far fa-heart';
                }
            }
            
            // Update dashboard wishlist if visible
            if (document.getElementById('dashboard-wishlist').classList.contains('active')) {
                renderWishlist();
            }
            
            // Update dashboard stats
            updateDashboardStats();
        }
        
        // Check if book is in wishlist
        function isInWishlist(bookId) {
            return wishlist.includes(bookId);
        }
        
        // Render order history
        function renderOrderHistory() {
            const orderHistoryBody = document.getElementById('orderHistoryBody');
            orderHistoryBody.innerHTML = '';
            
            if (orders.length === 0) {
                orderHistoryBody.innerHTML = `
                    <tr>
                        <td colspan="5" style="text-align: center; padding: 20px;">
                            You haven't placed any orders yet.
                        </td>
                    </tr>
                `;
                return;
            }
            
            orders.forEach(order => {
                const orderRow = document.createElement('tr');
                orderRow.innerHTML = `
                    <td>${order.id}</td>
                    <td>${order.date}</td>
                    <td>${order.items}</td>
                    <td>$${order.total.toFixed(2)}</td>
                    <td><span class="badge" style="background: var(--success); color: white; padding: 5px 10px; border-radius: 20px;">${order.status}</span></td>
                `;
                orderHistoryBody.appendChild(orderRow);
            });
        }
        
        // Update dashboard stats
        function updateDashboardStats() {
            document.getElementById('statBooksPurchased').textContent = orders.reduce((total, order) => total + order.items, 0);
            document.getElementById('statFavoriteBooks').textContent = wishlist.length;
            document.getElementById('statComments').textContent = Math.floor(Math.random() * 20);
            document.getElementById('statRating').textContent = (4.5 + Math.random() * 0.5).toFixed(1);
        }

        // Setup reading chart
        function setupReadingChart() {
            const ctx = document.getElementById('readingChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Books Read',
                        data: [3, 5, 2, 4, 6, 4],
                        backgroundColor: '#4a6fa5',
                        borderColor: '#3a5a8a',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    }
                }
            });
        }

        // Shopping cart functionality with localStorage
        function addToCart(bookId) {
            const book = books.find(b => b.id === bookId);
            if (!book) return;
            
            const existingItem = cart.find(item => item.id === book.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    id: book.id,
                    title: book.title,
                    author: book.author,
                    price: book.price,
                    image: book.image,
                    quantity: 1
                });
            }
            
            updateCartCount();
            showNotification(`${book.title} added to cart!`);
            
            // Save to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        
        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            document.querySelector('.cart-count').setAttribute('data-count', count);
        }
        
        function renderCart() {
            const cartContainer = document.getElementById('cartContainer');
            if (!cartContainer) return;
            
            if (cart.length === 0) {
                cartContainer.innerHTML = '<div class="empty-state"><i class="fas fa-shopping-cart"></i><h3>Your cart is empty</h3><p>Add some books to your cart to get started!</p><button class="btn" onclick="showPage(\'bookstore\')">Browse Books</button></div>';
                return;
            }
            
            let cartHTML = `
                <div class="cart-header">
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Total</div>
                    <div></div>
                </div>
            `;
            
            let subtotal = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;
                
                cartHTML += `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <div class="cart-item-image">
                                <img src="${item.image}" alt="${item.title}" loading="lazy">
                            </div>
                            <div class="cart-item-details">
                                <h4>${item.title}</h4>
                                <p>${item.author}</p>
                            </div>
                        </div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="cart-quantity">
                            <button onclick="updateQuantity(${item.id}, -1)" aria-label="Decrease quantity">-</button>
                            <input type="text" value="${item.quantity}" id="qty-${item.id}">
                            <button onclick="updateQuantity(${item.id}, 1)" aria-label="Increase quantity">+</button>
                        </div>
                        <div class="cart-item-total">$${itemTotal.toFixed(2)}</div>
                        <div class="cart-item-remove">
                            <button onclick="confirmRemoveItem(${item.id})" aria-label="Remove item">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
            });
            
            const tax = subtotal * 0.08;
            const shipping = 3.99;
            const total = subtotal + tax + shipping;
            
            cartHTML += `
                <div class="cart-summary">
                    <div class="summary-row">
                        <span>Subtotal:</span>
                        <span>$${subtotal.toFixed(2)}</span>
                    </div>
                    <div class="summary-row">
                        <span>Shipping:</span>
                        <span>$${shipping.toFixed(2)}</span>
                    </div>
                    <div class="summary-row">
                        <span>Tax:</span>
                        <span>$${tax.toFixed(2)}</span>
                    </div>
                    <div class="summary-row summary-total">
                        <span>Total:</span>
                        <span>$${total.toFixed(2)}</span>
                    </div>
                    
                    <div class="cart-actions" style="display:flex; gap:15px; margin-top:20px;">
                        <a href="#" class="btn btn-outline" onclick="showPage('bookstore')">Continue Shopping</a>
                        <a href="#" class="btn" onclick="showPage('checkout')">Proceed to Checkout</a>
                    </div>
                </div>
            `;
            
            cartContainer.innerHTML = cartHTML;
        }
        
        function updateQuantity(bookId, change) {
            const item = cart.find(i => i.id === bookId);
            if (!item) return;
            
            item.quantity += change;
            if (item.quantity < 1) item.quantity = 1;
            
            document.getElementById(`qty-${bookId}`).value = item.quantity;
            updateCartCount();
            renderCart();
            
            // Save to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        
        function confirmRemoveItem(bookId) {
            itemToRemove = bookId;
            document.getElementById('removeItemModal').style.display = 'flex';
        }
        
        function removeFromCart(bookId) {
            const index = cart.findIndex(item => item.id === bookId);
            if (index !== -1) {
                const bookTitle = cart[index].title;
                cart.splice(index, 1);
                renderCart();
                updateCartCount();
                showNotification(`${bookTitle} removed from cart`);
                
                // Save to localStorage
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        }
        
        function renderOrderSummary() {
            const orderSummary = document.getElementById('orderSummary');
            if (!orderSummary) return;
            
            let summaryHTML = '';
            let subtotal = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;
                
                summaryHTML += `
                    <div class="order-item">
                        <span>${item.title} x ${item.quantity}</span>
                        <span>$${itemTotal.toFixed(2)}</span>
                    </div>
                `;
            });
            
            const tax = subtotal * 0.08;
            const shipping = 3.99;
            const total = subtotal + tax + shipping;
            
            summaryHTML += `
                <div class="order-item">
                    <span>Subtotal</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div class="order-item">
                    <span>Shipping</span>
                    <span>$${shipping.toFixed(2)}</span>
                </div>
                <div class="order-item">
                    <span>Tax</span>
                    <span>$${tax.toFixed(2)}</span>
                </div>
                <div class="order-item order-total">
                    <span>Total</span>
                    <span>$${total.toFixed(2)}</span>
                </div>
            `;
            
            orderSummary.innerHTML = summaryHTML;
            document.getElementById('orderTotal').textContent = `$${total.toFixed(2)}`;
        }
        
        function validateCheckoutForm() {
            let isValid = true;
            const form = document.getElementById('checkoutForm');
            const fields = form.querySelectorAll('input, select, textarea');
            
            fields.forEach(field => {
                const formGroup = field.closest('.form-group');
                if (field.checkValidity()) {
                    formGroup.classList.remove('error');
                } else {
                    formGroup.classList.add('error');
                    isValid = false;
                }
            });
            
            // Additional validation for card number
            const cardNumber = document.getElementById('cardNumber');
            if (cardNumber.value.replace(/\s/g, '').length !== 16) {
                document.getElementById('cardNumberError').textContent = 'Card number must be 16 digits';
                isValid = false;
            }
            
            return isValid;
        }
        
        function completePurchase() {
            showLoading();
            
            // Simulate payment processing
            setTimeout(() => {
                hideLoading();
                
                // Create order
                const order = {
                    id: `ORD-${Date.now().toString().slice(-6)}`,
                    date: new Date().toLocaleDateString(),
                    items: cart.reduce((total, item) => total + item.quantity, 0),
                    total: cart.reduce((total, item) => total + (item.price * item.quantity), 0) * 1.08 + 3.99,
                    status: "Processing"
                };
                
                // Save order
                orders.push(order);
                localStorage.setItem('orders', JSON.stringify(orders));
                
                // Clear cart
                cart = [];
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                
                // Show success modal
                document.getElementById('checkoutModal').style.display = 'flex';
                
                // Update dashboard stats
                updateDashboardStats();
                renderOrderHistory();
            }, 1500);
        }

        // Navigation functions
        function showPage(pageId) {
            // Show loading spinner
            showLoading();
            
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show requested page
            setTimeout(() => {
                document.getElementById(pageId).classList.add('active');
                hideLoading();
                
                // Special handling for certain pages
                if (pageId === 'cart') {
                    renderCart();
                }
                if (pageId === 'dashboard') {
                    renderWishlist();
                    updateDashboardStats();
                }
                if (pageId === 'checkout') {
                    renderOrderSummary();
                }
                
                // Scroll to top
                window.scrollTo(0, 0);
                
                // Focus on main content for screen readers
                document.getElementById('main-content').focus();
            }, 500);
        }
        
        function showDashboardSection(sectionId) {
            // Hide all sections
            document.querySelectorAll('.dashboard-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show requested section
            document.getElementById(`dashboard-${sectionId}`).classList.add('active');
            
            // Update active nav link
            document.querySelectorAll('.dashboard-nav a').forEach(link => {
                link.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Render specific content
            if (sectionId === 'wishlist') {
                renderWishlist();
            }
            if (sectionId === 'orders') {
                renderOrderHistory();
            }
        }

        // Search function
        function searchBooks() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            if (!searchTerm) return;
            
            // Show loading
            showLoading();
            
            // Simulate search delay
            setTimeout(() => {
                const results = books.filter(book => 
                    book.title.toLowerCase().includes(searchTerm) || 
                    book.author.toLowerCase().includes(searchTerm) ||
                    book.genre.toLowerCase().includes(searchTerm)
                );
                
                if (results.length > 0) {
                    // Show bookstore page with filtered results
                    showPage('bookstore');
                    const bookstoreBooks = document.getElementById('bookstoreBooks');
                    bookstoreBooks.innerHTML = '';
                    
                    results.forEach(book => {
                        const bookElement = createBookElement(book);
                        bookstoreBooks.appendChild(bookElement);
                    });
                    
                    // Update search input
                    document.getElementById('searchInput').value = '';
                    document.getElementById('searchSuggestions').style.display = 'none';
                } else {
                    hideLoading();
                    showNotification('No books found matching your search.');
                }
            }, 800);
        }
        
        function showSearchSuggestions(term) {
            if (!term) {
                document.getElementById('searchSuggestions').style.display = 'none';
                return;
            }
            
            const suggestions = books.filter(book => 
                book.title.toLowerCase().includes(term) || 
                book.author.toLowerCase().includes(term)
            ).slice(0, 5);
            
            if (suggestions.length === 0) {
                document.getElementById('searchSuggestions').style.display = 'none';
                return;
            }
            
            const suggestionsContainer = document.getElementById('searchSuggestions');
            suggestionsContainer.innerHTML = '';
            suggestionsContainer.style.display = 'block';
            
            suggestions.forEach(book => {
                const suggestion = document.createElement('div');
                suggestion.className = 'search-suggestion';
                suggestion.style.padding = '10px';
                suggestion.style.cursor = 'pointer';
                suggestion.style.borderBottom = '1px solid #eee';
                suggestion.innerHTML = `${book.title} - ${book.author}`;
                suggestion.addEventListener('click', () => {
                    showBookDetail(book.id);
                    document.getElementById('searchInput').value = '';
                    suggestionsContainer.style.display = 'none';
                });
                suggestionsContainer.appendChild(suggestion);
            });
        }

        // Newsletter subscription
        function subscribeNewsletter() {
            const emailInput = document.getElementById('newsletterEmail');
            const email = emailInput.value;
            
            if (email && validateEmail(email)) {
                showNotification(`Thank you for subscribing with ${email}! You'll receive our next newsletter soon.`);
                emailInput.value = '';
            } else {
                showNotification('Please enter a valid email address.');
            }
        }
        
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
        
        // Loading indicator functions
        function showLoading() {
            document.getElementById('loading').style.display = 'flex';
        }
        
        function hideLoading() {
            document.getElementById('loading').style.display = 'none';
        }
        
        function simulateLoading() {
            showLoading();
            setTimeout(() => {
                hideLoading();
            }, 1200);
        }
        
        // Back to top button
        function setupBackToTop() {
            const backToTopButton = document.getElementById('backToTop');
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopButton.style.display = 'block';
                } else {
                    backToTopButton.style.display = 'none';
                }
            });
            
            backToTopButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
        
        // Show notification
        function showNotification(message) {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.style.display = 'block';
            
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        }
    </script>
</body>
</html>
