let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = ""; // Clear the cart display
    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.textContent = `${item.name} - $${item.price}`;
        cartDiv.appendChild(itemDiv);
    });
    document.getElementById("total").textContent = total;
}
