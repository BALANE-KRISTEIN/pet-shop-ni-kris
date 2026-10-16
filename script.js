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


console.log('Shop Name:', shopName);
console.log('Current Year:', currentYear);
console.log('Total Product Count:', runningCount);




const stockCount = 5;
let stockText = "";

if (stockCount > 10) {
    stockText = "In stock";
} else if (stockCount >= 1) {
    stockText = "Only a few left";
} else {
    stockText = "Sold out";
}

const stockElement = document.getElementById('stock-status');
if (stockElement) {
    stockElement.textContent = stockText;
}



const orderTotal = 1200; 
const isMember = true;   


const deliveryFee = (orderTotal >= 1000 && isMember === true) === true ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;

const deliveryElement = document.getElementById('delivery-check');
if (deliveryElement) {
    deliveryElement.textContent = `P ${finalTotal} (Fee: P ${deliveryFee})`;
}



const isOpenToday = true; // Change to false to test "Closed today"

const shopOpenResult = isOpenToday === true ? "Open today" : "Closed today";

const shopStatusElement = document.getElementById('shop-status');
if (shopStatusElement) {
    shopStatusElement.textContent = shopOpenResult;
}