fetch('products.json')
.then(Response => Response.json())
.then(data => {
    console.log(data);

    const swiper_items_sala = document.getElementById("swiper_items_sala")

    const swiper_elctronics = document.getElementById("swiper_elctronics")


    const swiper_appliances = document.getElementById("swiper_appliances")

    
    const swiper_mobiles = document.getElementById("swiper_mobiles")

    data.forEach(product => {
        if (product.old_price){

            const percent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100)


            swiper_items_sala.innerHTML +=`
            
             <div class="swiper-slide product">
                        <span class="sale_present">%${percent_disc}</span>
                        <div class="img_product">
                            <a href=""><img src="${product.img}" alt=""></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="name-product">
                            <a href="">${product.name}</a>
                        </p>

                        <div class="pricr">
                            <p><span>$${product.price}</span></p>
                            <p class="old_price">$${product.old_price}</p>
                        </div>
                        <div class="icons">
                            <span class="btn_add_card" data-id="${product.id}>
                                <i class="fa-solid fa-cart-shopping"></i> add to card
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                    </div>
            
            
            
            `
        }
    })

    data.forEach(product => {
        if (product.catetory == "electronics"){

            const old_price_paragraph = product.old_price ?  `'<p class="old_price">$${product.old_price}</p>` : "";
            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";


            swiper_elctronics.innerHTML +=`
            
            <div class="swiper-slide product">
                      ${percent_disc_div}
                       <div class="img_product">
                           <a href=""><img src="${product.img}" alt=""></a>
                       </div>

                       <div class="stars">
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                       </div>

                       <p class="name-product">
                           <a href="">${product.name}</a>
                       </p>

                       <div class="pricr">
                           <p><span>$${product.price}</span></p>
                           ${old_price_paragraph}
                       </div>
                       <div class="icons">
                       <span class="btn_add_card" data-id="${product.id}>
                               <i class="fa-solid fa-cart-shopping"></i> add to card
                           </span>
                           <span class="icon_product">
                               <i class="fa-regular fa-heart"></i>
                           </span>
                       </div>
                   </div>
           
           
           
           `
        }
    })


    data.forEach(product => {
        if (product.catetory == "appliances"){

            const old_price_paragraph = product.old_price ?  `'<p class="old_price">$${product.old_price}</p>` : "";
            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";


            swiper_appliances.innerHTML +=`
            
            <div class="swiper-slide product">
                      ${percent_disc_div}
                       <div class="img_product">
                           <a href=""><img src="${product.img}" alt=""></a>
                       </div>

                       <div class="stars">
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                       </div>

                       <p class="name-product">
                           <a href="">${product.name}</a>
                       </p>

                       <div class="pricr">
                           <p><span>$${product.price}</span></p>
                           ${old_price_paragraph}
                       </div>
                       <div class="icons">
                       <span class="btn_add_card" data-id="${product.id}>
                               <i class="fa-solid fa-cart-shopping"></i> add to card
                           </span>
                           <span class="icon_product">
                               <i class="fa-regular fa-heart"></i>
                           </span>
                       </div>
                   </div>
           
           
           
           `
        }
    })

    data.forEach(product => {
        if (product.catetory == "mobiles"){

            const old_price_paragraph = product.old_price ?  `'<p class="old_price">$${product.old_price}</p>` : "";
            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";


    const swiper_mobiles = document.getElementById("swiper_mobiles")
            swiper_mobiles.innerHTML +=`
            
            <div class="swiper-slide product">
                      ${percent_disc_div}
                       <div class="img_product">
                           <a href=""><img src="${product.img}" alt=""></a>
                       </div>

                       <div class="stars">
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>
                       </div>

                       <p class="name-product">
                           <a href="">${product.name}</a>
                       </p>

                       <div class="pricr">
                           <p><span>$${product.price}</span></p>
                           ${old_price_paragraph}
                       </div>
                       <div class="icons">
                       <span class="btn_add_card" data-id="${product.id}>
                               <i class="fa-solid fa-cart-shopping"></i> add to card
                           </span>
                           <span class="icon_product">
                               <i class="fa-regular fa-heart"></i>
                           </span>
                       </div>
                   </div>
           
           
           
           `
        }
    })
    
})