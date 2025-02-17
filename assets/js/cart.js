const mainDiv = document.querySelector(".cards");
const count = document.querySelector(".num")

function getCartData() {
    mainDiv.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.forEach((item) => {
        let box = document.createElement("div");
        box.className = 'card';
        box.innerHTML =
            `
            <img src=${item.thumbnail} alt="product">
            <h1>${item.title}</h1>
            <span>Category: ${item.category}</span>
            <p>$${item.price}<span>Stock:${item.stock}</span></p>
            <button onclick="deleteItem(${item.index})">Delete from Cart</button>
        
    
    `;
        mainDiv.appendChild(box);
    });
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart.length != 0) {
        count.innerHTML = cart.length
    } else {
        count.innerHTML = "0"
    }
}

function deleteItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getCartData();


    updateCartCount();
}

getCartData();
updateCartCount();
