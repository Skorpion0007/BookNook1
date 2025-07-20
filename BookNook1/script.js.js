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