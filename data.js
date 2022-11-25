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


let products = [{img: "/assets/img/ON NUTRITION GOLD STANDARD WHEY OPT270_grey_900x.webp", name: "ON NUTRITION GOLD STANDARD WHEY", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "proteinas", id: 1},

{img: "/assets/img/OPTIMUM NUTRITION GOLD STANDARDOPT5410061_grey_900x.webp", name: "ON NUTRITION GOLD STANDARD WHEY ISOLATE", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "proteinas", id: 2}, 

{img: "/assets/img/MUSCLETECH NITRO TECHMT4450108_grey_900x.webp", name: "MUSCLETECH NITROTECH", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "proteinas", id: 3},

{img: "/assets/img/CELLUCOR C4 CELLU5100017-61121_grey_900x.webp", name: "CELLUCOR C4", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "preentrenos", id: 4}, 

{img: "/assets/img/JYM6370526_grey_900x.webp", name: "JYM PREWORKOUT", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "preentrenos", id: 5},

{img: "/assets/img/CELLUCOR SUPER HD CELLU5820064_grey_900x.webp", name: "CELLUCOR SUPERHD", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "quemadores", id: 6},

{img: "/assets/img/ANIMAL CUTS UNIV6370197_grey_900x.webp", name: "UNIVERSAL NUTRITION ANIMAL CUTS", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "quemadores", id: 7},

{img: "/assets/img/ISOPURE ZERO CARB WHEY NB079_grey_900x.webp", name: "ISOPURE ZERO CARB WHEY", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "proteinas", id: 8},

{img: "/assets/img/DYMATIZE ISO1005lb-Cookies-Crm-DYM1930128-6721_grey_900x.webp", name: "DYMATIZE ISO100", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "proteinas", id: 9},

{img: "/assets/img/DYMATIZE ELITE CASEIN PROTEIN DYM2280128_grey_900x.webp", name: "DYMATIZE ELITE CASEIN PROTEIN", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "proteinas", id: 10},

{img: "/assets/img/CHEF ROBERT IRVINE FIT CRUNCH BARS FFX1800077_grey_900x.webp", name: "CHEF ROBERT IRVINE FIT CRUNCH BARS", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "proteinas", id: 11},

{img: "/assets/img/EVLUTION NUTRITION L-CARNITINE 500 EVL4790041_grey_900x.webp", name: "EVLUTION NUTRITION L-CARNITINE 500", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "quemadores", id: 12},

{img: "/assets/img/DYMATIZE SUPER MASS GAINER DYM980188_grey_900x.webp", name: "DYMATIZE SUPER MASS GAINER", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "ganadores", id: 13},

{img: "/assets/img/ALLMAX NUTRITION QUICKMASS ALL4601001_grey_900x.webp", name: "ALLMAX NUTRITION QUICKMASS", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "ganadores", id: 14},

{img: "/assets/img/EVLUTION NUTRITION CREATINE5000 EVL2210034_grey_900x.webp", name: "EVLUTION NUTRITION CREATINE5000", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "creatinas", id: 15},

{img: "/assets/img/JNX SPORTS THE CURSE! CREATINACOBRA6480466-JNXSPORT-Creatine-grey_900x.webp", name: "JNX SPORTS THE CURSE! CREATINA", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "creatinas", id: 16},

{img: "/assets/img/XTEND ORIGINAL BCAA SV4600993_grey_900x.webp", name: "XTEND ORIGINAL BCAA", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "aminoacidos", id: 17},

{img: "/assets/img/EVLUTION NUTRITION BCAA ENERGY EVL6330070_grey_900x.webp", name: "EVOLUTION NUTRITION BCAA ENERGY", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "aminoacidos", id: 18},

{img: "/assets/img/ANIMAL PAK  Animal-Pak-30pks-New-Form-081921-squooshed_grey_900x.webp", name: "UNIVERSAL NUTRITION ANIMAL PAK", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.", price: "800", category: "vitymin", id: 19},

];

/* console.log(products) */



const splitProducts = (size) => {
    let dividedProducts = [];
    for (let i = 0; i < products.length; i += size)
    dividedProducts.push(products.slice(i, i + size));
    return dividedProducts;
};

let split = splitProducts(8);

