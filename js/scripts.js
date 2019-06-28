//переменная для записи tippy окна
let instance;

$(document).ready(function () {

    setTotalCardValue();
    //слушатель на кнопку КОРЗИНА
    $('button.add-to-cart').on('click', addToCart);


    $('.anchor').on("click", function (event) {
        //прокрутка до якоря (раздела товаров)
        event.preventDefault();
        const id = $(this).attr('href');
        const dist = $(id).offset().top;
        $('html, body').animate({'scrollTop': dist - 150}, 1500);
    });

    $(window).on("scroll", function () {
        // выделение текущего раздела на навбаре
        $('section[id]').each(function () {

            let id = $(this).attr('id');

            if ($(this).offset().top - 220 < $(window).scrollTop()) {
                $('#navbarList li a[href="#' + id + '"]').parent().addClass('active').siblings().removeClass('active');
            }

            if ($(window).scrollTop() < 200) {
                $('#navbarList li').removeClass('active');
            }

        })

    });

    $('.product__size-control-item').on('click', function () {
        // переключение размера товара
        const i = $(this).parent().find('.product__size-control-item').index($(this));
        //Среди найденных классов у родителя кликнутого... находим индекс кликнутого элемента.
        console.clear();
        console.log(i);
        console.log($(this).attr('value'));

        const selector = $(this).parent().find('.product__size-control-selector');
        selector.css('transform', 'translateX(' + 100 * i + '%');
        // 100 * 0 == 0, 100 * 1 == 100, 100 * 2 == 200 ... и можно без case.

        $(this).parent().find('.product__size-control-item').removeClass('active');

        $(this).parent().find('.product__size-control-item').children().removeClass('not_selected_item mt-1 selected_item mt-2');
        $(this).parent().find('.product__size-control-item').children().addClass('not_selected_item mt-2');

        $(this).find('h5').removeClass('not_selected_item mt-2');
        $(this).find('h5').addClass('selected_item mt-1');

        $(this).addClass('active'); // сюда дописать стили...

    });


    //выпадающее окно с корзиной
    instance = tippy('#cart', {
        content: createMiniCart(),
        theme: 'light-border',
        interactive: true,
        animateFill: false,
        animation: 'scale'
    });

});

function isEmpty(obj) {
// проверяет длину объекта(ассоциотивного массива)
    return Object.keys(obj).length === 0;
}


function checkLocalStorage(articul) {
// проверяет наличие переданной позициии в LS
    if (localStorage.getItem('cart') != null) {
        const cart = getFromLS();
        return cart[articul] !== undefined
    } else {
        return false
    }
}

function addToLS(cart) {
    // Добавление в LS
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("Данные добавлены");
}

function getFromLS() {
    // Забрать из LS
    const fromLs = JSON.parse(localStorage.getItem('cart'));
    if (fromLs === undefined || fromLs === null) {
        return {}
    } else {
        return fromLs
    }
}

// так как я не использую глобальных переменных - нужно каждый раз доставать весь массив из LS добалять туда новую позицию
// и записывать его заного. Так как операция SetItem перезаписывает данные.

function addToCart() {
// Добавляет товар в корзину
    let articul = $(this).attr('data-art');
    let size = $(this).parent().parent().siblings('.product__size-control').find('.active').attr('value');
    if (articul !== undefined && size !== undefined) {
        let cart = getFromLS();

        if (checkLocalStorage(articul)) {

            if (size === 'big') cart[articul].big++;
            if (size === 'small') cart[articul].small++;

        } else {
            // Если такой позиции нет в LS

            if (size === 'big') cart[articul] = {big: 1, small: 0};
            if (size === 'small') cart[articul] = {big: 0, small: 1};
        }

        addToLS(cart);
        setTotalCardValue();
        changeMiniCart();
    } else {
        alert("какая то хуета");
    }

}

function setTotalCardValue() {
    // считает и выводит общее количество товаров в корзине
    let total_value = 0;
    let card = getFromLS();

    if (isEmpty(card)) {
        $('#card-value').html(total_value)
    } else {
        for (let key in card) {
            total_value += card[key].big;
            total_value += card[key].small;
        }
        console.log('всего в корзине ' + total_value + ' товаров');
        $('#card-value').html(total_value)
    }

}


function changeMiniCart() {
    //меняет содержимое Tippy окна
    instance[0].setContent(createMiniCart());
}

function createMiniCart() {
    //создает Tippy окно

    let out = '';
    let card = getFromLS();

    if (isEmpty(card)) {
        out += '<div class="card tooltip_card">\n' +
            '  <img class="card-img-top tooltip_img mt-4" src="picture/empty_box.png" alt="Card image cap">\n' +
            '  <div class="card-body">\n' +
            '    <h5 class="card-title">Корзина пуста</h5>\n' +
            '    <p class="card-text">Мы доставим ваш заказ бесплатно при покупке от 1000₽</p>\n' +
            '  </div>\n' +
            '</div>'
    } else {

        let [one, two, tree] = makeReadbleMass();

        console.log(one);
        console.log(two);
        console.log(tree);

        out += makeTippy(one, two, tree);
    }
    return out;
}

function findByID(id) {
    // функция для нахождения эл-та по id в arrPies. Конченый костыль. Потом выпелить
    for (let i = 0; i < arrPies.length; i++) {
        if (arrPies[i].id == id) {
            return arrPies[i]
        }
    }
}

function makeReadbleMass() {
    // создает читабельный массив из LS. Нужен для передачи в makeTippy
    // делит пироги на две группы: большие и маленькие
    const dataFromLS = getFromLS();
    let totalQuantity = 0;
    let totalPrice = 0;

    if (!isEmpty(dataFromLS)) {
        let readableMass = {big: {}, small: {}};

        for (let key in dataFromLS) {
            let temp = findByID(key);

            if (dataFromLS[key].big > 0) {
                readableMass['big'][key] = {
                    id: temp.id,
                    name: temp.name,
                    picture: temp.picture,
                    weight: 900,
                    size: 'Большой',
                    price: temp.price_big,
                    quantity: dataFromLS[key].big
                };
                totalQuantity++;
                totalPrice += (temp.price_big * dataFromLS[key].big);
            }
            if (dataFromLS[key].small > 0) {
                readableMass['small'][key] = {
                    id: temp.id,
                    name: temp.name,
                    picture: temp.picture,
                    weight: 280,
                    size: 'Мальнький',
                    price: temp.price_small,
                    quantity: dataFromLS[key].small
                };
                totalQuantity++;
                totalPrice += (temp.price_small * dataFromLS[key].small);
            }
        }
        return [totalQuantity, totalPrice, readableMass];

    } else {
        console.log("память пуста");
    }
}
