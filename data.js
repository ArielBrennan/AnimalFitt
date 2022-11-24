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


let products = [{img: "/assets/img/SINTHA6D_NQ_NP_2X_818947-MLA50624622057_072022-F.webp", name: "BSN SYNTHA-6", info: "La más completa", price: "800", category: "proteinas", id: 1},

{img: "/assets/img/OPTIMUM NUTRITION GOLD STANDARDOPT5410061_grey_900x.webp", name: "ON GOLD STANDARD WHEY", info: "Solo para expertos", price: "800", category: "proteinas", id: 2}, 

{img: "/assets/img/MUSCLETECH NITRO TECHMT4450108_grey_900x.webp", name: "MUSCLETECH NITROTECH", info: "Para todo el día", price: "800", category: "proteinas", id: 3},

{img: "/assets/img/bsn-no-xplode_Image_01.webp", name: "BSN N.O. XPLODE", info: "Van como piña", price: "800", category: "preentrenos", id: 4}, 

{img: "/assets/img/JYMPREWORKOUTJYM6370143-Cherry-Lime20-7-15_900x.webp", name: "JYM PREWORKOUT", info: "c/jamón crudo", price: "800", category: "preentrenos", id: 5},

{img: "/assets/img/CELLUCOR SUPER HD CELLU5820064_grey_900x.webp", name: "CELLUCOR SUPERHD", info: "¡BASTA!", price: "800", category: "quemadores", id: 6},

{img: "/assets/img/ANIMAL CUTS UNIV6370197_grey_900x.webp", name: "UNIVERSAL NUTRITION ANIMAL CUTS", info: "¡Eterna!", price: "800", category: "quemadores", id: 7},

{img: "/assets/img/rsz_1isowhey6150_n.jpg", name: "RSZ ISOWHEY", info: "Pica 2 veces", price: "800", category: "proteinas", id: 8},

{img: "/assets/img/DYMATIZE ISO1005lb-Cookies-Crm-DYM1930128-6721_grey_900x.webp", name: "DYMATIZE ISO100", info: "En honor al 1", price: "800", category: "proteinas", id: 9},

{img: "/assets/img/ENA TRUEMADE WHEYD_NQ_NP_857454-MLA46076857826_052021-O.webp", name: "ENA TRUEMADE WHEY", info: "¡De pié señores!", price: "800", category: "proteinas", id: 10},

{img: "/assets/img/Star Nutrition Whey Protein D_NQ_NP_2X_782490-MLA48946238232_012022-F.webp", name: "STAR NUTRITION WHEY PROTEIN", info: "La que desaparece", price: "800", category: "proteinas", id: 11},

{img: "/assets/img/Lipo 6x black BOX-BlackUC-082321-MC-5K.png.webp", name: "NUTREX LIPO 6 UC", info: "La que desaparece", price: "800", category: "quemadores", id: 12},

{img: "/assets/img/MUTANT MASS STAR NUTRITION D_NQ_NP_784591-MLA51226818890_082022-O.webp", name: "MUTANT MASS STAR NUTRITION", info: "La que desaparece", price: "800", category: "ganadores", id: 13},

{img: "/assets/img/ALLMAX NUTRITION QUICKMASS ALL4601001_grey_900x.webp", name: "ALLMAX NUTRITION QUICKMASS", info: "La que desaparece", price: "800", category: "ganadores", id: 14},

{img: "/assets/img/Creatina Star D_NQ_NP_705680-MLA48462687556_122021-O.webp", name: "STAR NUTRITION CREATINA", info: "La que desaparece", price: "800", category: "creatinas", id: 15},

{img: "/assets/img/JNX SPORTS THE CURSE! CREATINACOBRA6480466-JNXSPORT-Creatine-grey_900x.webp", name: "JNX SPORTS THE CURSE! CREATINA", info: "La que desaparece", price: "800", category: "creatinas", id: 16},

{img: "/assets/img/XTEND ORIGINAL BCAA SV4600993_grey_900x.webp", name: "XTEND ORIGINAL BCAA", info: "La que desaparece", price: "800", category: "aminoacidos", id: 17},

{img: "/assets/img/EVLUTION NUTRITION BCAA ENERGY EVL6330070_grey_900x.webp", name: "EVOLUTION NUTRITION BCAA ENERGY", info: "La que desaparece", price: "800", category: "aminoacidos", id: 18},

{img: "/assets/img/ANIMAL PAK  Animal-Pak-30pks-New-Form-081921-squooshed_grey_900x.webp", name: "UNIVERSAL NUTRITION ANIMAL PAK", info: "La que desaparece", price: "800", category: "vitymin", id: 19},

];

/* console.log(products) */



const splitProducts = (size) => {
    let dividedProducts = [];
    for (let i = 0; i < products.length; i += size)
    dividedProducts.push(products.slice(i, i + size));
    return dividedProducts;
};

let split = splitProducts(8);

