//переменная для записи tippy окна
let instance;

$(document).ready(function () {

    // выгружает список пирогов
    createPiesLineCart();

    // выгрпужает список пицц
    createPizzaLineCart();

    // выгружает список горячих блюд
    createHotMealLineCart();

    // выгружает список гриль
    createGrillLineCart();

    //выгружает список напитков
    createDrinksLineCart();

    // устанавливает количество товаров в корзине
    setTotalCardValue();

    //слушатель на кнопку КОРЗИНА
    $('button.add-to-cart').on('click', addToCart);


    // устанавливает якорь
    $('.anchor').on("click", function (event) {
        //прокрутка до якоря (раздела товаров)
        event.preventDefault();
        const id = $(this).attr('href');
        const dist = $(id).offset().top;
        $('html, body').animate({'scrollTop': dist - 150}, 1500);
    });

    // выделение текущего раздела на навБаре
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

// изменение бегунка с размером и цены
    $('.product__size-control-item').on('click', function () {
        // переключение размера товара
        const i = $(this).parent().find('.product__size-control-item').index($(this));
        //Среди найденных классов у родителя кликнутого... находим индекс кликнутого элемента.
        console.clear();
        console.log(i);
        console.log($(this).attr('value'));

        // изменение цены
        const price_path = $(this).parent().siblings('.button-and-price').children('.col-5')
            .children('.price').children('.strong_price');
        const current_good = findByID($(this).attr('data-art'));


        switch (i) {
            case 0:
                price_path.html(current_good.price_big + "₽");
                break;
            case 1:
                price_path.html(current_good.price_small + "₽");
                break;
            default:
                alert("Index error")
        }
// цену изменил

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

    // изменения бегунка для выбора начинки вареников
    ingredientsSelector();

    //выпадающее окно с корзиной
    instance = tippy('#cart', {
        content: createMiniCart(),
        theme: 'light-border',
        interactive: true,
        animateFill: false,
        animation: 'scale'
    });

});

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

        let [totalQuantity, totalPrice, readableMass] = makeReadbleMass();

        console.log(totalQuantity);
        console.log(totalPrice);
        console.log(readableMass);

        out += makeTippy(totalQuantity, totalPrice, readableMass);
    }
    return out;
}

// переключение ингредиентов, применяется  только на варениках
// изменяет data-art у селектора размеров, цену
function ingredientsSelector() {
    $('.product_ingredients-item').on('click', function () {
        const i = $(this).parent().find('.product_ingredients-item').index($(this));

        const selector = $(this).parent().find('.product_ingredients-selector');
        selector.css('transform', 'translateX(' + 100 * i + '%');
        // 100 * 0 == 0, 100 * 1 == 100, 100 * 2 == 200 ... и можно без case.

        $(this).addClass('active').siblings().removeClass('active');

        $(this).parent().find('.product_ingredients-item').children().removeClass('not_selected_item mt-1 selected_item mt-2')
            .addClass('not_selected_item mt-2');

        $(this).find('h5').removeClass('not_selected_item mt-2').addClass('selected_item mt-1');

        // текущая позиция
        const current = findByID($(this).attr('data-art'));

        //изменение описания
        $(this).parent().siblings('.good_info').find('.dark-grey-text').html(current.description);

        //изменение data-art на селекторе размеров
        $(this).parent().siblings('.product__size-control').children('.product__size-control-item')
            .attr('data-art', current.id);

        //изменение data-art на кнопке "в корзину"
        $(this).parent().siblings('.button-and-price').find('.add-to-cart')
            .attr('data-art', current.id);

        // изменение цены
        const active_size = $(this).parent().siblings('.product__size-control').find('.active');

        const active_index = $(this).parent().siblings('.product__size-control')
            .find('.product__size-control-item').index(active_size);

        const price_path = $(this).parent().siblings('.button-and-price').find('.strong_price');

        switch (active_index) {
            case 0:
                price_path.html(current.price_big + "₽");
                break;
            case 1:
                price_path.html(current.price_small + "₽");
                break;
            default:
                alert("Index error")
        }
    });
}