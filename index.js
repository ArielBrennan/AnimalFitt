import {products, split} from './data.js'
/* export { changeFilterState }; */




const cartBtn = document.querySelector('.cartBtn');
const cartProducts = document.querySelector('.cart-container');
/* const total = document.querySelector('.cart-total'); */
const buyBtn = document.querySelector('.buy-btn');
const overlay = document.querySelector('.overlay');
const deleteBtn = document.querySelector('.btn-delete');
const productsContainer = document.querySelector('.products-container')
const barsMenu = document.querySelector('.navbar-list');
const searchBar = document.querySelector('.search-bar');
const hamburguesaBtn = document.querySelector('.hamburguesa');
const carrito = document.getElementById('carrito');
const xBtn = document.getElementById('x');
const carritoContainer = document.getElementById('carritoProdContainer');
const addToCartBtn = document.getElementsByClassName("addToCartBtn");
const successModal = document.querySelector(".add-modal");
const categoryBtns = document.getElementsByClassName("category");
const add = document.querySelectorAll(".add-btn");
const rest = document.querySelectorAll(".substract-btn");
const total = document.querySelector(".totalCount");







/* console.log(add)



console.log(productsContainer)
console.log(split) */






let carritoLs = JSON.parse(localStorage.getItem("cartProducts")) || [];



/* console.log(carritoLs) */

let saveLs = (products) => localStorage.setItem("cartProducts", JSON.stringify(products));

/* Menu hamburguesa */
const toggleMenu = () => {
    barsMenu.classList.toggle('active')
    console.log("apretado")
}
hamburguesaBtn.addEventListener('click', toggleMenu)

/* Desplegar carrito */

const toggleCarrito = (e) => {
    e.preventDefault()
    overlay.classList.add('active')
    carrito.classList.add('active')
    console.log('apretado')
    console.log(carrito)
}
cartBtn.addEventListener('click', toggleCarrito)

console.log(carrito)



const closeCart = () => {
    carrito.classList.remove('active')
    overlay.classList.remove('active')
}

overlay.addEventListener('click', closeCart)



let renderProducts = (product) => {
    let {img, name, info, price, category, id} = product;

    return `    
    <div class="card">
    <img src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${info}</p>
    <p class="card-price">$${price}</p>
    <button
        data-img='${img}'
        data-name='${name}'
        data-info='${info}'
        data-price='${price}' 
        data-category='${category}'
        data-id='${id}'
        class="addToCartBtn btn" >Añadir al carrito</button>
    </div>
</div>`
}



let productArray = products.map(product => renderProducts(product));

/* productsContainer.innerHTML = productArray.join(""); */




let renderCartProduct = product => {let {img, name, info, price, quantity, id} = product

return `        
<div class="cart-product">
    <div><img src="${img}" alt=""></div>
    <div class="cart-product-info"><p>${name}</p><p class="cart-product-info-b">${info}</p><p class="cart-product-info-c">$${price}</p></div>
    <div class="cart-btns" btn><button 
    data-img='${img}'
    data-name='${name}'
    data-info='${info}'
    data-price='$${price}'
    class="substract-btn btn" data-id='${id}'>-</button><span class="span-quantity">${quantity}</span><button class="add-btn btn" data-id='${id}'
    data-name='${name}'
    data-info='${info}'
    data-price='${price}'
    >+</button></div>
</div>`

}
carritoContainer.innerHTML = carritoLs.map(product => renderCartProduct(product)).join("");

const addUnitToProduct = (product) => {
    carritoLs = carritoLs.map((cartProduct) => {
    return cartProduct.name === product.name
        ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
        : cartProduct;
    });
};
const isExistingCartProduct = (product) => {
    return carritoLs.find((item) => item.name === product.name);
};
const createCartProduct = (product) => {
    carritoLs = [...carritoLs, { ...product, quantity: 1 }];
};



const showSuccessModal = (msg) => {
    successModal.classList.add("active-modal");
    successModal.textContent = msg;
    setTimeout(() => {
    successModal.classList.remove("active-modal");
    }, 1500);
};


let sendToCart = (e) => {

    console.log("apretado")
    const { img, name, info, price, category, id} = e.target.dataset


    
    let product = {img, name, info, price, category, id};

    
    if (isExistingCartProduct(product)) {
        addUnitToProduct(product);
        showSuccessModal("Se agregó una unidad del producto al carrito");
    } else {
        createCartProduct(product);
        showSuccessModal("El producto se ha agregado al carrito");
    }
    
    saveLs(carritoLs)

    carritoContainer.innerHTML = carritoLs.map(product => renderCartProduct(product)).join("");
    showTotal();
}



let addEvent = (items, funcion) => {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", funcion);
    }    
}

addEvent(addToCartBtn, sendToCart)






const renderFilter = (category) => {

    if (!category) {
        let productArray = products.map(product => renderProducts(product));

        productsContainer.innerHTML = productArray.join("");
    } else {    const productsList = products.filter(
        (product) => product.category === category
        );
        productsContainer.innerHTML = productsList.map(renderProducts).join("");
    }


    
    
    addEvent(addToCartBtn, sendToCart)
};


const changeBtnActiveState = (selectedCategory) => {
    const categories = [...categoryBtns];
    categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
        categoryBtn.classList.remove("active-btn");
        return;
    }
    categoryBtn.classList.add("active-btn");
    });
};

const changeFilterState = (e) => {
    const selectedCategory = e.target.dataset.category;
    changeBtnActiveState(selectedCategory);
    renderFilter(selectedCategory)
};

addEvent(categoryBtns, changeFilterState)

const substractProductUnit = (existingProduct) => {
    carritoLs = carritoLs.map((cartProduct) => {
      return cartProduct.name === existingProduct.name
        ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
        : cartProduct;
    });
  };

const removeProductFromCart = (existingProduct) => {
    carritoLs = carritoLs.filter((product) => product.name !== existingProduct.name);
    /* checkCartState(); */
    saveLs(carritoLs)
    carritoContainer.innerHTML = carritoLs.map(product => renderCartProduct(product)).join("");
    showTotal();
};

const handleMinusBtnEvent = (name) => {
    const existingCartProduct = carritoLs.find((item) => item.name === name);
    
    if (existingCartProduct.quantity === 1) {
      if (window.confirm("¿Desea Eliminar el producto del carrito?")) {
        removeProductFromCart(existingCartProduct);
      }
      return;
    }
    substractProductUnit(existingCartProduct);
  };
  
  const handlePlusBtnEvent = (name) => {
    const existingCartProduct = carritoLs.find((item) => item.name === name);
    addUnitToProduct(existingCartProduct);
  };
  
  const handleQuantity = (e) => {
    if (e.target.classList.contains("substract-btn")) {
      handleMinusBtnEvent(e.target.dataset.name);
    } else if (e.target.classList.contains("add-btn")) {
      handlePlusBtnEvent(e.target.dataset.name);
    }

    saveLs(carritoLs)
    carritoContainer.innerHTML = carritoLs.map(product => renderCartProduct(product)).join("");
    /* checkCartState(); */
    showTotal()
  };


  carrito.addEventListener("click", handleQuantity);


  const getCartTotal = () => {
    return carritoLs.reduce(
      (acc, cur) => acc + Number(cur.price) * Number(cur.quantity),
      0
    );
  };
  
  const showTotal = () => {
    total.innerHTML = `$${getCartTotal()}`;
  };



  document.addEventListener("DOMContentLoaded", showTotal);

console.log(total)

console.log(carritoLs)

/* const quitCart = (e) => {
    if(!e.target.classList.contains("carrito")){
        overlay.classList.remove('active')
        carrito.classList.remove('active')
    console.log("click en ventana del documento")
    } 
}

document.addEventListener("click", quitCart) */




function purchaseClicked() {
    carritoLs = [];
    localStorage.clear()
    alert('Gracias por su compra!')
    carritoContainer.innerHTML = "";
    showTotal()
}


buyBtn.addEventListener('click', purchaseClicked)




/* btnProt.addEventListener("click", changeFilterState)
btnGan.addEventListener("click", changeFilterState)
btnQuem.addEventListener("click", changeFilterState)
btnCr.addEventListener("click", changeFilterState)
btnVit.addEventListener("click", changeFilterState)
btnPre.addEventListener("click", changeFilterState)
btnInd.addEventListener("click", changeFilterState)

console.log(btnProt) */


const initRenderProducts = () => {
    
    if(window.location.pathname == '/pages/productos.html') {
    

    productsContainer.innerHTML = productArray.join("");
    addEvent(addToCartBtn, sendToCart)
    }
}
initRenderProducts()


