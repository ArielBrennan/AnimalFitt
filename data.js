export { products, split };

/* class Pizza {
    constructor(img, name, info, price) {
        this.img = img;
        this.name = name;
        this.info = info;
        this.price = price;
    }



let Bennazianna = new Pizza("src='./assets/img/Photo Menu (11).png'", "Bennazianna", "La más completa", "");

let mrPit 

console.log(Bennazianna) */


let products = [{img: "", name: "Bennazianna", info: "La más completa", price: "800", category: "proteinas", id: 1},

{img: "", name: "La Mr. Pit", info: "Solo para expertos", price: "800", category: "proteinas", id: 2}, 

{img: "", name: "Tronco-Pizza", info: "Para todo el día", price: "800", category: "proteinas", id: 3},

{img: "", name: "Papas | Provenzal", info: "Van como piña", price: "800", category: "preentrenos", id: 4}, 

{img: "", name: "¡Q’ Jamone!", info: "c/jamón crudo", price: "800", category: "preentrenos", id: 5},

{img: "", name: "La Charly García", info: "¡BASTA!", price: "800", category: "quemadores", id: 6},

{img: "", name: "La Maradona", info: "¡Eterna!", price: "800", category: "quemadores", id: 7},

{img: "", name: "Picantovich", info: "Pica 2 veces", price: "800", category: "proteinas", id: 8},

{img: "", name: "La Hasbulla", info: "En honor al 1", price: "800", category: "proteinas", id: 9},

{img: "", name: "Leo Messi", info: "¡De pié señores!", price: "800", category: "proteinas", id: 10},

{img: "", name: "Nick Gi", info: "La que desaparece", price: "800", category: "proteinas", id: 11},

{img: "", name: "sartadawdaw", info: "La que desaparece", price: "800", category: "quemadores", id: 12},

{img: "", name: "fefvge", info: "La que desaparece", price: "800", category: "ganadores", id: 13},

{img: "", name: "234234", info: "La que desaparece", price: "800", category: "ganadores", id: 14},

{img: "", name: "11236543", info: "La que desaparece", price: "800", category: "creatinas", id: 15},

{img: "", name: "Nhbtr45", info: "La que desaparece", price: "800", category: "creatinas", id: 16},

{img: "", name: "btr56", info: "La que desaparece", price: "800", category: "aminoacidos", id: 17},

{img: "", name: "23456bfdw", info: "La que desaparece", price: "800", category: "aminoacidos", id: 18},

{img: "", name: "987hjf546", info: "La que desaparece", price: "800", category: "vitymin", id: 19},

];

/* console.log(products) */



const splitProducts = (size) => {
    let dividedProducts = [];
    for (let i = 0; i < products.length; i += size)
    dividedProducts.push(products.slice(i, i + size));
    return dividedProducts;
};

let split = splitProducts(8);

