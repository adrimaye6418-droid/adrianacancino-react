
const products = [

    

        {
        id: '01',
        name: "Carpa 3 estaciones",
        price: 100,
        description: "Carpa de 3 estaciones, ideal para camping en verano e invierno",
        category: "camping",
        stock: 10,
        img: "/camping-inicial.jpg"
    },
        {
        id: '02',
        name: "Aislante termico",
        price: 100,
        description: "Aislante térmico de alta calidad",
        category: "camping",
        stock: 20,
        img: "/aislante-termico.jpeg"
    },
        {
        id: '03',
        name: "Colchon Autoinflable",
        price: 100,
        description: "olchon autoinflable para camping",
        category: "camping",
        stock: 15,
        img: "/colchon-autoinflable.jpeg"
    },
        {
        id: '04',
        name: "Sleeping Bags",
        price: 100,
        description: "Bolsa de dormir para camping",
        category: "camping",
        stock: 15,
        img: "/sleeping-bags.jpeg"
    },
       {
        id: '05',
        name: "Mesa plegable",
        price: 100,
        description: "Mesa plegable para camping",
        category: "camping",
        stock: 15,
        img: "/mesa-plegable.jpeg"
    },
        {
        id: '06',
        name: "Banquito trípode",
        price: 100,
        description: "Banquito trípode para camping",
        category: "camping",
        stock: 15,
        img: "/banquito-tripode.jpeg"
    },
        {
        id: '07',
        name: "Silla plegable",
        price: 100,
        description: "Silla plegable para camping",
        category: "camping",
        stock: 15,
        img: "/silla-plegable.jpeg"
    },
        {
        id: '08',
        name: "Guinda ropa portatil",
        price: 100,
        description: "Guinda ropa portatil para camping",
        category: "camping",
        stock: 15,
        img: "/guinda-ropa-portatil.jpeg"
    },
        {
        id: '09',
        name: "Ventilador portatil",
        price: 100,
        description: "Ventilador portatil para camping",
        category: "camping",
        stock: 15,
        img: "/ventilador-portatil.jpeg"
    },
        {
        id: '10',
        name: "Bolsos impermeables de 3L",
        price: 100,
        description: "Bolsos impermeables de 3L para camping",
        category: "camping",
        stock: 15,
        img: "/bolso-impermeable-verde.jpeg"
    },
       {
        id: '11',
        name: "Bolsos impermeables de 5L",
        price: 100,
        description: "Bolsos impermeables de 5L para camping",
        category: "camping",
        stock: 15,
        img: "/bolso-impermeable-azul.jpeg"
    },
       {
        id: '12',
        name: "Bolsos impermeables de 15L",
        price: 100,
        description: "Bolsos impermeables de 15L para camping",
        category: "camping",
        stock: 15,
        img: "/bolso-impermeable-amarillo.jpeg"
    },
     {
        id: '13',
        name: "Bolso de 60L",
        price: 100,
        description: "Bolso de 60L para senderismo",
        category: "senderismo",
        stock: 15,
        img: "/bolso-60l.jpeg"
    },
     {
        id: '14', 
        name: "Bolso de 20L",
        price: 100,
        description: "Bolso de 20L para senderismo",
        category: "senderismo",
        stock: 15,
        img: "/bolso-20l.jpeg"
    },
       {
        id: '15',
        name: "Bastones de trekking",
        price: 100,
        description: "Bastones de trekking para senderismo",
        category: "senderismo",
        stock: 15,
        img: "/bastones.jpeg"
    },
          {
        id: '16',
        name: "Linterna frontal",
        price: 100,
        description: "Linterna frontal para senderismo",
        category: "senderismo",
        stock: 15,
        img: "/linterna-frente.jpeg"
    },
       {
        id: '17',
        name: "Kit de supervivencia",
        price: 100,
        description: "Kit de supervivencia para senderismo",
        category: "senderismo",
        stock: 15,
        img: "/kit-supervivencia.jpeg"
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};  

export const getOneProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let prod = products.find((producto) => producto.id === id);
            resolve(prod);
        }, 2000);
    });
};