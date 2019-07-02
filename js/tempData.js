// 1 - осетинские пироги; 2 - Пицца; 3 - Горячие блюда

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
        description_of_weight_small: "Маленький пирог"
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
        description_of_weight_small: "Маленький пирог"
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
        description_of_weight_small: "Маленький пирог"
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
        description_of_weight_small: "Маленький пирог"
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
        description_of_weight_small: "Маленький пирог"
    }, {
        id: 10006,
        name: "\"Балджин\" 🍒",
        picture: "picture/pies/006_without_background.png",
        description: "Тесто фирменное, масло сливочное, вишня",
        have_small: false,
        price_big: "400",
        weight_big: "900",
        description_of_weight_big: "Большой пирог",
        description_of_weight_small: "Маленький пирог"
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
        description_of_weight_small: "Маленький пирог"
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
        description_of_weight_small: "Маленький пирог"
    }, {
        id: 10009,
        name: "Хачапури по Имеретински",
        picture: "picture/pies/007_without_background.png",
        description: "Тесто фирменное, масло сливочное, сыр Брынза, сыр Сулугуни",
        have_small: false,
        price_big: "400",
        weight_big: "900",
        description_of_weight_big: "Большой пирог",
        description_of_weight_small: "Маленький пирог"
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
        description_of_weight_small: "Маленький пирог"
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
        description_of_weight_small: "Маленький пирог"
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
            description_of_weight_small: "Маленькая пицца"
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
            description_of_weight_small: "Маленькая пицца"
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
            description_of_weight_small: "Маленькая пицца"
        }, {
            id: 20004,
            name: "Домашняя",
            picture: "picture/pizza/home.jpg",
            description: "Тесто фирменное, сыр, колбаса, маслины, грибы, перец болгарский, томатный соус, сливочнй соус",
            have_small: false,
            price_big: "400",
            weight_big: "900",
            description_of_weight_big: "Большая пицца",
            description_of_weight_small: "Маленькая пицца"
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
        description_of_weight_small: "Маленькая порция"
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
        description_of_weight_small: "Маленькая порция"
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
        description_of_weight_big: "Большая порция с картошкой",
        description_of_weight_small: "Маленькая порция с картошкой",
        special_card: true
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
        description_of_weight_big: "Большая порция с капустой",
        description_of_weight_small: "Маленькая порция с капустой",
        special_card: true
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
        description_of_weight_big: "Большая порция с вишней",
        description_of_weight_small: "Маленькая порция с вишней",
        special_card: true
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
        description_of_weight_big: "Большая порция с творогом",
        description_of_weight_small: "Маленькая порция с творогом",
        special_card: true
    }
];