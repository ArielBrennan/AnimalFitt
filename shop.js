/* import {changeFilterState} from './index.js' */
/* import {products, split} from './data.js'
const categoryBtns = document.getElementsByClassName("category");
const addToCartBtn = document.getElementsByClassName("addToCartBtn");
const btnProt = document.getElementsByClassName("prot");
const btnGan = document.getElementsByClassName("gan");
const btnQuem = document.getElementsByClassName("quem");
const btnCr = document.getElementsByClassName("cr");
const btnVit = document.getElementsByClassName("vit");
const btnPre = document.getElementsByClassName("pree");
const btnInd = document.getElementsByClassName("ind");

const changeFilterState = (e) => {
    const selectedCategory = e.target.dataset.category;
    changeBtnActiveState(selectedCategory);
    renderFilter(selectedCategory)
};






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




let addEvent = (items, funcion) => {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", funcion);
    }    
}



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


btnProt.addEventListener("click", changeFilterState)
btnGan.addEventListener("click", changeFilterState)
btnQuem.addEventListener("click", changeFilterState)
btnCr.addEventListener("click", changeFilterState)
btnVit.addEventListener("click", changeFilterState)
btnPre.addEventListener("click", changeFilterState)
btnInd.addEventListener("click", changeFilterState) */