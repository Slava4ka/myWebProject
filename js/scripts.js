$(document).ready(function () {

    //слушатель на кнопку КОРЗИНА
    $('button.add-to-cart').on('click', addToCart);

    $('#navbarList li a, #logo a').on("click", function (event) {
        //прокрутка до якоря (раздела товаров)
        event.preventDefault();

        const id = $(this).attr('href');
        const dist = $(id).offset().top;

        console.log(id);
        console.log(this);
        console.log("id = %i \ndist = %d", id, dist);

        $('html, body').animate({'scrollTop': dist - 150}, 1500);
    });


    $(window).on("scroll", function () {
        // выделение текущего раздела на навбаре
        $('section[id]').each(function () {

            var id = $(this).attr('id');

            if ($(this).offset().top - 220 < $(window).scrollTop()) {
                $('#navbarList li a[href="#' + id + '"]').parent().addClass('active').siblings().removeClass('active');
                console.log("$('#navbarList li a[href=#'+id+']').addClass('active').siblings().removeClass('active');");
            }

            if ($(window).scrollTop() < 200) {
                $('#navbarList li').removeClass('active');
                console.log("$('#navbarList li a').removeClass('active')");
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
    tippy('#cart', {
        content: '' +
            '<div class="card tooltip_card">\n' +
            '  <img class="card-img-top tooltip_img mt-4" src="picture/empty_box.png" alt="Card image cap">\n' +
            '  <div class="card-body">\n' +
            '    <h5 class="card-title">Корзина пуста</h5>\n' +
            '    <p class="card-text">Мы доставим ваш заказ бесплатно при покупке от 1000₽</p>\n' +
            '  </div>\n' +
            '</div>',
        theme: 'light-border',
        interactive: true,
        animateFill: false,
        animation: 'scale'
    });

});

function checlLocalStorage(articul) {
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
    console.log(cart);
    console.log("Данные добавлены");
}

function getFromLS() {
    // Забрать из LS
    const fromLs = JSON.parse(localStorage.getItem('cart'));
    console.log(fromLs);
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

        if (checlLocalStorage(articul)) {

            if (size === 'big') cart[articul].big++;
            if (size === 'small')cart[articul].small++;

        } else {
            // Если такой позиции нет в LS

            if (size === 'big') cart[articul] = {big: 1, small: 0};
            if (size === 'small')cart[articul] = {big: 0, small: 1};
        }

        addToLS(cart);
    } else {
        alert("какая то хуета");
    }

}





