if (!localStorage.getItem("isLoggedIn")) {
    window.location.href = "index.html";
}

const productContainer = document.getElementById("productContainer");

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        displayProducts(data);
    })
    .catch(err => {
        productContainer.innerHTML = "Failed to load products";
    });

    function displayProducts(products) {
    productContainer.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}">
            <h4>${product.title}</h4>
            <p>₹ ${product.price}</p>
            <p><b>${product.category}</b></p>
            <button>Add to Cart</button>
        `;

        productContainer.appendChild(card);
    });
}
