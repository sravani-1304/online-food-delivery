// Menu data embedded directly in JavaScript
const menuData = [
    // Burgers
    {
        id: 1,
        name: "Classic Beef Burger",
        description: "Juicy beef patty with lettuce, tomato, onion, and our special sauce",
        price: 999,
        category: "burgers",
        image: "https://pixabay.com/get/gbefc7a4bbb0eb97dbf59c95255aaf39df078accfbe1567c88b60ed02b555edec711ba4252b948ce6e3a2fa57d61bc9185454565e55f5279e4cd003a05e0ba8e3_1280.jpg",
        rating: 4.5
    },
    {
        id: 2,
        name: "Cheese Deluxe Burger",
        description: "Double cheese, beef patty, bacon, and crispy onions",
        price: 1299,
        category: "burgers",
        image: "https://pixabay.com/get/g71091c4288aebe7e093f92ef7ac48b386e65b3ae5f0acb02f0d48ea6799fb9021701b2397655f92ef5fbe23220244fc5640fa8f1d268867b22ddb86d3fe7974f_1280.jpg",
        rating: 4.7
    },
    {
        id: 3,
        name: "Chicken Crispy Burger",
        description: "Crispy fried chicken breast with coleslaw and spicy mayo",
        price: 1199,
        category: "burgers",
        image: "https://pixabay.com/get/g22a00078bd116ca58ddeb76a0065a72f9e270bdd6e2682d351c5c17e28d34e7a01cc449826fb7b0125653e4dc268510c8ccd4f1fe98c192c79c5bbeffbb7fe3a_1280.jpg",
        rating: 4.3
    },
    // Pizza
    {
        id: 4,
        name: "Margherita Pizza",
        description: "Fresh mozzarella, tomato sauce, and basil on thin crust",
        price: 1399,
        category: "pizza",
        image: "https://pixabay.com/get/g8d6dd71433e28615944aea88045286b6ec6e3461160bf8f97f1e30ce1b66ea5962fca059850d00c64b154e9f8a613083ba7d9c6a6216d633d3f3407c7bc63473_1280.jpg",
        rating: 4.6
    },
    {
        id: 5,
        name: "Pepperoni Supreme",
        description: "Loaded with pepperoni, mozzarella, and Italian herbs",
        price: 1599,
        category: "pizza",
        image: "https://pixabay.com/get/ge0094bedf42467edaa3aa73109c28671c6323a27b2bde44d1835647b8ded1f394b3fcd4cb3c3ace1152be78b34577917ea1558c277203fc544a54eb9df574816_1280.jpg",
        rating: 4.8
    },
    {
        id: 6,
        name: "Veggie Delight Pizza",
        description: "Bell peppers, mushrooms, olives, onions, and tomatoes",
        price: 1499,
        category: "pizza",
        image: "https://pixabay.com/get/g8206abe2d43f2103ebed263c2d5a53a76c6a9d3f9d17124540ba69344897ab72ac976623bc957b6bdbaf08e67c49787456f866396dc7cdf9046f49038118eea0_1280.jpg",
        rating: 4.4
    },
    // Drinks
    {
        id: 7,
        name: "Fresh Orange Juice",
        description: "Freshly squeezed orange juice, 100% natural",
        price: 399,
        category: "drinks",
        image: "https://pixabay.com/get/ga93b0367c0454cca695944891bb2c0a07d98ba1576e1f67837aaf05c666b5e044ba880d6a98126611935debb8da6d691779ce6731aeaaef348846ed443b34279_1280.jpg",
        rating: 4.2
    },
    {
        id: 8,
        name: "Iced Coffee",
        description: "Cold brew coffee with ice and your choice of milk",
        price: 499,
        category: "drinks",
        image: "https://pixabay.com/get/g7f0a60637b8b43416413620560d2a9ff09befe476735412f5e39651efdfc4ef762e2d9aa594b71c9d1510dfb5d9cf6c969fbfc4d859b1b8cd7ecf5decf764812_1280.jpg",
        rating: 4.5
    },
    {
        id: 9,
        name: "Tropical Smoothie",
        description: "Mango, pineapple, and coconut blend with yogurt",
        price: 599,
        category: "drinks",
        image: "https://pixabay.com/get/g52e318668e810fab6c81d43ca2e4ca1d952a7e39a61a312bb41eb74fce75afa24ca5a294eaf533dd2ce5de0da5810e021f34bc548514d93e933a33e0a534abfc_1280.jpg",
        rating: 4.7
    },
    // Desserts
    {
        id: 10,
        name: "Chocolate Brownie",
        description: "Rich chocolate brownie with vanilla ice cream",
        price: 649,
        category: "desserts",
        image: "https://pixabay.com/get/g84b2f826bcd8c9d6d8a8a27b01fb9919e102e9f09dfb1964e7448391b472b822f130222e70b16fbc151943b4f35a316bec74a074c35655676220565891c63d9a_1280.jpg",
        rating: 4.6
    },
    {
        id: 11,
        name: "Cheesecake Slice",
        description: "New York style cheesecake with berry compote",
        price: 749,
        category: "desserts",
        image: "https://pixabay.com/get/g2d2a9d6eaa4a270a05964e04f02afd9b1c31673ec38d0803f75a094884f570b8e14dcfaabf25f9de77c84c5f5ccd56d3d9cd2bfc2700fd3dfc358d8ecd9a02c4_1280.jpg",
        rating: 4.8
    },
    {
        id: 12,
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee and mascarpone",
        price: 829,
        category: "desserts",
        image: "https://pixabay.com/get/g032465450476a374ad5c831dc06d6046d245128a6b73280e63d077b991f7389985becf9d9883f5470d2223511311ee51d20903cc04ef386b12ae1c337672c924_1280.jpg",
        rating: 4.5
    },
    // Additional Items
    {
        id: 13,
        name: "Caesar Salad",
        description: "Crisp romaine lettuce, parmesan, croutons, and Caesar dressing",
        price: 999,
        category: "salads",
        image: "https://pixabay.com/get/g39504742eb827f64df3a8f23adf7c9a7834fc59915aa046666bbeebefd516d97c1c219b23a151218f551dd5d67d302452d773ed9c8c8450b81dec48c2588c7d9_1280.jpg",
        rating: 4.3
    },
    {
        id: 14,
        name: "Chicken Wings",
        description: "Spicy buffalo wings served with ranch dipping sauce",
        price: 1249,
        category: "appetizers",
        image: "https://pixabay.com/get/g17cc3a791f9d389c3ea6a177fdab4860acf15c25544b86b7aa6bf085d422ae025cff3ea294447200ddfee271e9afe4a8bcff4d64a85e81ae6e84e769d48c556d_1280.jpg",
        rating: 4.7
    },
    {
        id: 15,
        name: "Pasta Carbonara",
        description: "Creamy pasta with bacon, eggs, parmesan, and black pepper",
        price: 1499,
        category: "pasta",
        image: "https://pixabay.com/get/ge68051b0c012802841b721e51ebc7bf87c10baf3d5fa4d679f31f636c1fbd9f9face68aeee8b1ad7d195eda841dd6466c3617609d6d4f11afb3d8e7576ba00c6_1280.jpg",
        rating: 4.6
    },
    {
        id: 16,
        name: "Fish & Chips",
        description: "Beer-battered fish with crispy fries and tartar sauce",
        price: 1399,
        category: "seafood",
        image: "https://pixabay.com/get/ga116e95f93f9c35825f543a23935a138a3663ed0a5bef87d63207c01a0e2ee69064c92077c11a85fdb69040a62ef72d1a62d32649a87d1f5b57e55012080e4d1_1280.jpg",
        rating: 4.4
    },
    {
        id: 17,
        name: "Fruit Bowl",
        description: "Fresh seasonal fruits with honey yogurt dip",
        price: 749,
        category: "healthy",
        image: "https://pixabay.com/get/g9c7c7bf5b07eb4e43cadd7a65bc2dee514fb256342791b86936e8fd1e346d803c814e85e14a4eddc81dc759628a4d225338d17e9b2608a366e1ac52c16f72f7b_1280.jpg",
        rating: 4.2
    },
    {
        id: 18,
        name: "Energy Smoothie Bowl",
        description: "Acai bowl topped with granola, berries, and coconut flakes",
        price: 1099,
        category: "healthy",
        image: "https://pixabay.com/get/gb9dc8a951138abee1c8ff64e2e0608fbb3c98421abbbcd7ec63666d2ee50c8bea7f98090ded4812351910489cdfeebc5222fcdb426d86944a76c1e158e5786d7_1280.jpg",
        rating: 4.8
    }
];

// Global variables
let cart = [];
let currentTheme = 'light';

// DOM elements
const cartSidebar = document.getElementById('cartSidebar');
const cartToggle = document.getElementById('cartToggle');
const closeCart = document.getElementById('closeCart');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const menuContainer = document.getElementById('menuContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
const orderForm = document.getElementById('orderForm');
const loadingSpinner = document.getElementById('loadingSpinner');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load cart from localStorage
    loadCartFromStorage();
    
    // Load theme from localStorage
    loadThemeFromStorage();
    
    // Setup event listeners
    setupEventListeners();
    
    // Render menu items
    renderMenuItems();
    
    // Update cart display
    updateCartDisplay();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
}

function setupEventListeners() {
    // Cart events
    cartToggle.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    checkoutBtn.addEventListener('click', openOrderModal);
    
    // Search events
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    
    // Filter events
    filterBtns.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Order form
    orderForm.addEventListener('submit', handleOrderSubmit);
    
    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
        if (!cartSidebar.contains(e.target) && !cartToggle.contains(e.target)) {
            if (cartSidebar.classList.contains('show')) {
                toggleCart();
            }
        }
    });
    
    // Navbar smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function setupSmoothScrolling() {
    // Add offset for fixed navbar
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    document.documentElement.style.setProperty('scroll-padding-top', navbarHeight + 'px');
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('quickbite-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function saveCartToStorage() {
    localStorage.setItem('quickbite-cart', JSON.stringify(cart));
}

function loadThemeFromStorage() {
    const savedTheme = localStorage.getItem('quickbite-theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        applyTheme(currentTheme);
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    localStorage.setItem('quickbite-theme', currentTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

function renderMenuItems(itemsToRender = null) {
    const items = itemsToRender || menuData;
    menuContainer.innerHTML = '';
    
    if (items.length === 0) {
        menuContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h5 class="text-muted">No items found</h5>
                <p class="text-muted">Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    items.forEach(item => {
        const menuCard = createMenuCard(item);
        menuContainer.appendChild(menuCard);
    });
}

function createMenuCard(item) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 col-sm-12';
    
    col.innerHTML = `
        <div class="menu-card" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="menu-card-body">
                <h5 class="menu-card-title">${item.name}</h5>
                <p class="menu-card-description">${item.description}</p>
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <span class="menu-card-price">₹${item.price}</span>
                    <div class="rating">
                        ${generateStarRating(item.rating)}
                        <span class="text-muted ms-1">(${item.rating})</span>
                    </div>
                </div>
                <button class="btn btn-warning add-to-cart-btn" onclick="addToCart(${item.id})">
                    <i class="fas fa-plus me-2"></i>Add to Cart
                </button>
            </div>
        </div>
    `;
    
    return col;
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star text-warning"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt text-warning"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star text-warning"></i>';
    }
    
    return starsHTML;
}

function addToCart(itemId) {
    const item = menuData.find(item => item.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    saveCartToStorage();
    updateCartDisplay();
    showNotification(`${item.name} added to cart!`, 'success');
    
    // Add animation to cart button
    const cartBtn = cartToggle;
    cartBtn.classList.add('animate__animated', 'animate__pulse');
    setTimeout(() => {
        cartBtn.classList.remove('animate__animated', 'animate__pulse');
    }, 600);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCartToStorage();
    updateCartDisplay();
    showNotification('Item removed from cart', 'warning');
}

function updateQuantity(itemId, change) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        saveCartToStorage();
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    // Update cart count badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'inline' : 'none';
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart text-center py-4">
                <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                <p class="text-muted">Your cart is empty</p>
                <p class="text-muted small">Add some delicious items to get started!</p>
            </div>
        `;
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map(item => createCartItemHTML(item)).join('');
        checkoutBtn.disabled = false;
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total;
}

function createCartItemHTML(item) {
    return `
        <div class="cart-item">
            <div class="row align-items-center">
                <div class="col-3">
                    <img src="${item.image}" alt="${item.name}" class="img-fluid">
                </div>
                <div class="col-6">
                    <div class="cart-item-details">
                        <h6>${item.name}</h6>
                        <p class="cart-item-price">₹${item.price}</p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="remove-item-btn mt-2" onclick="removeFromCart(${item.id})" title="Remove item">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function toggleCart() {
    cartSidebar.classList.toggle('show');
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const filteredItems = menuData.filter(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );
    renderMenuItems(filteredItems);
}

function handleFilter(event) {
    // Update active filter button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const filter = event.target.dataset.filter;
    
    if (filter === 'all') {
        renderMenuItems();
    } else {
        const filteredItems = menuData.filter(item => item.category === filter);
        renderMenuItems(filteredItems);
    }
    
    // Clear search input
    searchInput.value = '';
}

function openOrderModal() {
    if (cart.length === 0) return;
    
    // Populate order summary
    const orderSummary = document.getElementById('orderSummary');
    const orderTotal = document.getElementById('orderTotal');
    
    orderSummary.innerHTML = cart.map(item => `
        <div class="d-flex justify-content-between mb-2">
            <span>${item.name} × ${item.quantity}</span>
            <span>₹${(item.price * item.quantity)}</span>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    orderTotal.textContent = total;
    
    orderModal.show();
}

function handleOrderSubmit(event) {
    event.preventDefault();
    
    // Validate form
    if (!orderForm.checkValidity()) {
        orderForm.reportValidity();
        return;
    }
    
    // Show loading
    showLoading(true);
    
    // Collect form data
    const orderData = {
        customerName: document.getElementById('customerName').value,
        customerPhone: document.getElementById('customerPhone').value,
        customerEmail: document.getElementById('customerEmail').value,
        customerAddress: document.getElementById('customerAddress').value,
        paymentMethod: document.getElementById('paymentMethod').value,
        deliveryTime: document.getElementById('deliveryTime').value,
        orderNotes: document.getElementById('orderNotes').value,
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        orderNumber: generateOrderNumber(),
        timestamp: new Date().toISOString()
    };
    
    // Simulate order processing
    setTimeout(() => {
        processOrder(orderData);
    }, 2000);
}

function processOrder(orderData) {
    // Save order to localStorage for demo purposes
    const orders = JSON.parse(localStorage.getItem('quickbite-orders') || '[]');
    orders.push(orderData);
    localStorage.setItem('quickbite-orders', JSON.stringify(orders));
    
    // Hide loading
    showLoading(false);
    
    // Hide order modal
    orderModal.hide();
    
    // Show confirmation modal
    showOrderConfirmation(orderData);
    
    // Clear cart
    cart = [];
    saveCartToStorage();
    updateCartDisplay();
    
    // Reset form
    orderForm.reset();
}

function showOrderConfirmation(orderData) {
    document.getElementById('orderNumber').textContent = orderData.orderNumber;
    document.getElementById('finalTotal').textContent = orderData.total;
    document.getElementById('deliveryAddress').textContent = orderData.customerAddress;
    
    confirmationModal.show();
    
    showNotification('Order placed successfully! 🎉', 'success');
}

function generateOrderNumber() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `QB${timestamp.toString().slice(-6)}${random.toString().padStart(3, '0')}`;
}

function showLoading(show) {
    loadingSpinner.style.display = show ? 'flex' : 'none';
}

function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas ${getNotificationIcon(type)} me-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'warning': return 'fa-exclamation-triangle';
        default: return 'fa-info-circle';
    }
}

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add debounced search
const debouncedSearch = debounce(handleSearch, 300);
searchInput.addEventListener('input', debouncedSearch);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe menu cards for scroll animations
function observeMenuCards() {
    const menuCards = document.querySelectorAll('.menu-card');
    menuCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Call this after rendering menu items
setTimeout(observeMenuCards, 100);