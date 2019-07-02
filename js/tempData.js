// 1 - осетинские пироги; 2 - Пицца; 3 - Горячие блюда; 4 - Гриль; 5 - напитки

const arrPies = [
    {
        id: 10001,
        name: "\"Уалибах\" 🧀",
        picture: "picture/pies/005_without_background.png",
        description: "Тесто фирменное, масло сливочное, сыр брынза, творог",
        have_small: true,
        price_big: "300",
        price_small: "75",
        weight_big: "900",
        weight_small: "280",
        description_of_weight_big: "Большой пирог",
        description_of_weight_small: "Маленький пирог",
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    }, {
        id: 10002,
        name: "\"Фыдджин\"",
        picture: "picture/pies/001_without_background.png",
        description: "Тесто фирменное, масло сливочное, свинной фарш, говяжий фарш, лук",
        have_small: true,
        price_big: "400",
        price_small: "100",
        weight_big: "900",
        weight_small: "280",
        description_of_weight_big: "Большой пирог",
        description_of_weight_small: "Маленький пирог",
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    }, {
        id: 10003,
        name: "\"Цахараджин\"",
        picture: "picture/pies/004_without_background.png",
        description: "Тесто фирменное, масло сливочное, сыр брынза, творг, бурачная батва, шпинат",
        have_small: true,
        price_big: "300",
        price_small: "75",
        weight_big: "900",
        weight_small: "280",
        description_of_weight_big: "Большой пирог",
        description_of_weight_small: "Маленький пирог",
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    }, {
        id: 10004,
        name: "\"Фыджин карчи\"",
        picture: "picture/pies/000_without_background.png",
        description: "Тесто фирменное, масло сливочное, сыр брынза, куриный фарш, шампиньоны, лук",
        have_small: true,
        price_big: "400",
        price_small: "100",
        weight_big: "900",
        weight_small: "280",
        description_of_weight_big: "Большой пирог",
        description_of_weight_small: "Маленький пирог",
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    }, {
        id: 10005,
        name: "\"Зокоджин \"",
        picture: "picture/pies/005_without_background.png",
        description: "Тесто фирменное, масло сливочное, картошка, шампиньоны",
        have_small: true,
        price_big: "300",
        price_small: "75",
        weight_big: "900",
        weight_small: "280",
        description_of_weight_big: "Большой пирог",
        description_of_weight_small: "Маленький пирог",
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    }, {
        id: 10006,
        name: "\"Балджин\" 🍒",
        picture: "picture/pies/006_without_background.png",
        description: "Тесто фирменное, масло сливочное, вишня",
        have_small: false,
        price_big: "400",
        weight_big: "900",
        description_of_weight_big: "Большой пирог",
        description_of_weight_small: "Маленький пирог",
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    }, {
        id: 10007,
        name: "Пирог с индейкой",
        picture: "picture/pies/000_without_background.png",
        description: "Тесто фирменное, масло сливочное, сыр брынза, индюшиный фарш",
        have_small: true,
        price_big: "400",
        price_small: "100",
        weight_big: "900",
        weight_small: "280",
        description_of_weight_big: "Большой пирог",
        description_of_weight_small: "Маленький пирог",
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    }, {
        id: 10008,
        name: "\"Картофджин\"",
        picture: "picture/pies/005_without_background.png",
        description: "Тесто фирменное, масло сливочное, картошка, сыр Брынза",
        have_small: true,
        price_big: "300",
        price_small: "75",
        weight_big: "900",
        weight_small: "280",
        description_of_weight_big: "Большой пирог",
        description_of_weight_small: "Маленький пирог",
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    }, {
        id: 10009,
        name: "Хачапури по Имеретински",
        picture: "picture/pies/007_without_background.png",
        description: "Тесто фирменное, масло сливочное, сыр Брынза, сыр Сулугуни",
        have_small: false,
        price_big: "400",
        weight_big: "900",
        description_of_weight_big: "Большой пирог",
        description_of_weight_small: "Маленький пирог",
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    }, {
        id: 10010,
        name: "\"Хадурджин\"",
        picture: "picture/pies/002_without_background.png",
        description: "Тесто фирменное, масло сливочное, фасоль",
        have_small: true,
        price_big: "300",
        price_small: "75",
        weight_big: "900",
        weight_small: "280",
        description_of_weight_big: "Большой пирог",
        description_of_weight_small: "Маленький пирог",
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    }, {
        id: 10011,
        name: "\"Кабускаджин\"",
        picture: "picture/pies/003_without_background.png",
        description: "Тесто фирменное, масло сливочное, капуста",
        have_small: true,
        price_big: "300",
        price_small: "75",
        weight_big: "900",
        weight_small: "280",
        description_of_weight_big: "Большой пирог",
        description_of_weight_small: "Маленький пирог",
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    }
];

const arrPizza = [
    {
        id: 20001,
        name: "Маргарита",
        picture: "picture/pizza/margarita-500x500.jpg",
        description: "Тесто фирменное, сыр, помидоры, томатный соус",
        have_small: false,
        price_big: "400",
        weight_big: "900",
        description_of_weight_big: "Большая пицца",
        description_of_weight_small: "Маленькая пицца",
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    },
    {
        id: 20002,
        name: "4 сыра",
        picture: "picture/pizza/4cheese.jpg",
        description: "Тесто фирменное, моцарелла, пармезан, сливочный сыр, брынза, томатный соус, сливочнй соус",
        have_small: false,
        price_big: "400",
        weight_big: "900",
        description_of_weight_big: "Большая пицца",
        description_of_weight_small: "Маленькая пицца",
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    },
    {
        id: 20003,
        name: "Ассорти",
        picture: "picture/pizza/myasnoe_assorti.png",
        description: "Тесто фирменное, колбаса, ветчина, перец болгарский, помидоры, маслины, сыр, грибы, томатный соус, сливочнй соус",
        have_small: false,
        price_big: "400",
        weight_big: "900",
        description_of_weight_big: "Большая пицца",
        description_of_weight_small: "Маленькая пицца",
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    }, {
        id: 20004,
        name: "Домашняя",
        picture: "picture/pizza/home.jpg",
        description: "Тесто фирменное, сыр, колбаса, маслины, грибы, перец болгарский, томатный соус, сливочнй соус",
        have_small: false,
        price_big: "400",
        weight_big: "900",
        description_of_weight_big: "Большая пицца",
        description_of_weight_small: "Маленькая пицца",
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    }
];

const arrHotMeals = [
    {
        id: 30001,
        name: "Хинкали",
        picture: "picture/hot_meals/hinkali.png",
        description: "Тесто фирменное, свиноговяжий фарш",
        have_small: true,
        price_big: "350",
        price_small: "175",
        weight_big: "1000",
        weight_small: "500",
        description_of_weight_big: "Большая порция",
        description_of_weight_small: "Маленькая порция",
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    },
    {
        id: 30002,
        name: "Пельмени",
        picture: "picture/hot_meals/dumplings.png",
        description: "Тесто фирменное, свиноговяжий фарш",
        have_small: true,
        price_big: "350",
        price_small: "175",
        weight_big: "1000",
        weight_small: "500",
        description_of_weight_big: "Большая порция",
        description_of_weight_small: "Маленькая порция",
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    },
    {
        id: 30003,
        name: "Вареники",
        picture: "picture/hot_meals/vareniki.png",
        description: "Вареники с картошкой",
        have_small: true,
        price_big: "350",
        price_small: "175",
        weight_big: "1000",
        weight_small: "500",
        description_of_weight_big: "Большая порция с картошкой 🥔",
        description_of_weight_small: "Маленькая порция с картошкой 🥔",
        special_card: true,
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    },
    {
        id: 30004,
        name: "Вареники",
        picture: "picture/hot_meals/vareniki.png",
        description: "Вареники с капустой",
        have_small: true,
        price_big: "350",
        price_small: "175",
        weight_big: "1000",
        weight_small: "500",
        description_of_weight_big: "Большая порция с капустой 🥦",
        description_of_weight_small: "Маленькая порция с капустой 🥦",
        special_card: true,
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    },
    {
        id: 30005,
        name: "Вареники",
        picture: "picture/hot_meals/vareniki.png",
        description: "Вареники с вишней",
        have_small: true,
        price_big: "350",
        price_small: "175",
        weight_big: "1000",
        weight_small: "500",
        description_of_weight_big: "Большая порция с вишней 🍒",
        description_of_weight_small: "Маленькая порция с вишней 🍒",
        special_card: true,
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    },
    {
        id: 30006,
        name: "Вареники",
        picture: "picture/hot_meals/vareniki.png",
        description: "Вареники с творогом",
        have_small: true,
        price_big: "350",
        price_small: "175",
        weight_big: "1000",
        weight_small: "500",
        description_of_weight_big: "Большая порция с творогом 🍚",
        description_of_weight_small: "Маленькая порция с творогом 🍚",
        special_card: true,
        metrics: "гр.",
        have_description: true,
        have_size_selector: true
    }
];

const arrGrill = [
    {
        id: 40001,
        name: "Курочка Гриль",
        picture: "picture/grill/grill_chichen.png",
        description: "Курица приготовденная в фирменом соусе. Вес ~1500 гр.",
        have_small: false,
        price_big: "400",
        weight_big: "1",
        description_of_weight_big: "",
        metrics: "шт.",
        have_description: true,
        have_size_selector: false
    },
    {
        id: 40002,
        name: "Куриные крылышки",
        picture: "picture/grill/chicken_wings.png",
        description: "Куриные крылышки, приготовленные в гриле в панеровочных сухорях. 5 шт. на шпашке",
        have_small: false,
        price_big: "100",
        weight_big: "1",
        description_of_weight_big: "",
        metrics: "шт.",
        have_description: true,
        have_size_selector: false
    }
];

const arrDrinks = [
    {
        id: 50001,
        name: "Coca-cola",
        picture: "picture/drinks/Coca-cola.jpg",
        description: "",
        have_small: true,
        price_big: "100",
        price_small: "50",
        weight_big: "1",
        weight_small: "0.5",
        description_of_weight_big: "",
        description_of_weight_small: "",
        special_card: false,
        metrics: "л.",
        have_description: false,
        have_size_selector: true
    },
    {
        id: 50002,
        name: "Coca-cola Zero",
        picture: "picture/drinks/coca-cola_Zero.jpg",
        description: "",
        have_small: true,
        price_big: "100",
        price_small: "50",
        weight_big: "1",
        weight_small: "0.5",
        description_of_weight_big: "",
        description_of_weight_small: "",
        special_card: false,
        metrics: "л.",
        have_description: false,
        have_size_selector: true
    },
    {
        id: 50003,
        name: "Fanta",
        picture: "picture/drinks/Fanta.jpg",
        description: "",
        have_small: true,
        price_big: "100",
        price_small: "50",
        weight_big: "1",
        weight_small: "0.5",
        description_of_weight_big: "",
        description_of_weight_small: "",
        special_card: false,
        metrics: "л.",
        have_description: false,
        have_size_selector: true
    },
    {
        id: 50004,
        name: "Fanta",
        picture: "picture/drinks/Sprite.jpg",
        description: "",
        have_small: true,
        price_big: "100",
        price_small: "50",
        weight_big: "1",
        weight_small: "0.5",
        description_of_weight_big: "",
        description_of_weight_small: "",
        special_card: false,
        metrics: "л.",
        have_description: false,
        have_size_selector: true
    },
    {
        id: 50005,
        name: "BonAqua негаз.",
        picture: "picture/drinks/BonAqua_негаз..jpg",
        description: "",
        have_small: true,
        price_big: "80",
        price_small: "40",
        weight_big: "1",
        weight_small: "0.5",
        description_of_weight_big: "",
        description_of_weight_small: "",
        special_card: false,
        metrics: "л.",
        have_description: false,
        have_size_selector: true
    },
    {
        id: 50006,
        name: "Fuzetea Зеленый с манго и ромашкой",
        picture: "picture/drinks/Fuzetea_green.jpg",
        description: "",
        have_small: true,
        price_big: "120",
        price_small: "60",
        weight_big: "1",
        weight_small: "0.5",
        description_of_weight_big: "",
        description_of_weight_small: "",
        special_card: false,
        metrics: "л.",
        have_description: false,
        have_size_selector: true
    },
    {
        id: 50007,
        name: "Fuzetea Черный с лимоном и лемонграссом",
        picture: "picture/drinks/Fuzetea_lemon.jpg",
        description: "",
        have_small: true,
        price_big: "120",
        price_small: "60",
        weight_big: "1",
        weight_small: "0.5",
        description_of_weight_big: "",
        description_of_weight_small: "",
        special_card: false,
        metrics: "л.",
        have_description: false,
        have_size_selector: true
    },
    {
        id: 50008,
        name: "Сок Rich Апельсин",
        picture: "picture/drinks/Rich_orange.jpg",
        description: "",
        have_small: false,
        price_big: "150",
        weight_big: "1",
        description_of_weight_big: "",
        description_of_weight_small: "",
        special_card: false,
        metrics: "л.",
        have_description: false,
        have_size_selector: true
    },
    {
        id: 50009,
        name: "Сок Rich Вишня",
        picture: "picture/drinks/Rich_cherry.jpg",
        description: "",
        have_small: false,
        price_big: "150",
        weight_big: "1",
        description_of_weight_big: "",
        description_of_weight_small: "",
        special_card: false,
        metrics: "л.",
        have_description: false,
        have_size_selector: true
    },
    {
        id: 50010,
        name: "Сок Rich Яблоко",
        picture: "picture/drinks/Rich_apple.jpg",
        description: "",
        have_small: false,
        price_big: "150",
        weight_big: "1",
        description_of_weight_big: "",
        description_of_weight_small: "",
        special_card: false,
        metrics: "л.",
        have_description: false,
        have_size_selector: true
    }
];