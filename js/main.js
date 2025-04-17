let catrgory_nav_list = document.querySelector(".catrgory_nav_list");

function open_cate_list() {
    catrgory_nav_list.classList.toggle("active")
}



var cart = document.querySelector('.cart');

function open_close_cart() {

    cart.classList.toggle("active")

}


fetch('products.json')
    .then(Response => Response.json())
    .then(data => {
        const addToCartButtons = document.querySelectorAll(".btn_add_card")

        addToCartButtons.forEach(button => {

            button.addEventListener("click", (event) => {
                const productId = event.target.getAttribute('data-id')
                const selcetedProduct = data.find(product => product.id == productId)



                addToCart(selcetedProduct);

                const allMatchingButtons = document.querySelectorAll(`.btn_add_card[data-id="${productId}"]`);
                allMatchingButtons.forEach(btn => {
                    btn.classList.add("active")
                    btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Item in card </span>
                `;
                });
            });


        });






    });


function addToCart(product) {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({ ...product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart))

    updateCart()

}

function updateCart() {

    const cartItemsContainer = document.getElementById("cart_items")

    const cart = JSON.parse(localStorage.getItem('cart')) || []

    cartItemsContainer.innerHTML = "";

    cart.forEach((item, index) => {

        cartItemsContainer.innerHTML += `

        <div class="item_card">
                <img src="${item.img}" alt="">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_cart">$${item.price}</p>
                    <div class="quntity_control">
                        <button class="decrease_quantity">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase_quantity">+</button>

                    </div>
                </div>

                <button class="delete_item"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        
        
        `

    })
}

