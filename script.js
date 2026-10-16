// 1. Declare constants and let variables
const shopName = "Pet Shop ni Kris";
const currentYear = 2026;
let runningCount = 0;

// 2. Perform a small calculation (count product cards automatically)
const products = document.querySelectorAll('.product-card');
runningCount = products.length;

// 3. Use document.getElementById(...).textContent to write the shop name into the header
const titleElement = document.getElementById('shop-title');
if (titleElement) {
    titleElement.textContent = shopName;
}

// 4. Write a dynamic copyright line into your footer
const footerElement = document.getElementById('footer-copyright');
if (footerElement) {
    footerElement.textContent = `© ${currentYear} ${shopName}. All rights reserved.`;
}

// 5. Display the calculated product count on the page
const countDisplay = document.getElementById('product-count');
if (countDisplay) {
    countDisplay.textContent = runningCount;
}

// 6. Log at least three labelled values to the console
console.log('Shop Name:', shopName);
console.log('Current Year:', currentYear);
console.log('Total Product Count:', runningCount);