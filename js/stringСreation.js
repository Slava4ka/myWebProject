function makeTippy(totalQuantity, totalPrice, readableMass) {
    /* формирует html код для tippy
         должно приходить
        * 1. Адрес картинки ☻
        * 2. Имя ☻
        * 3. ID ☻
        * 4. Размер ☻
        * 5. Описание (граммы и Большой/Маленький) ☻
        * 6. Цена ☻
        * 7. Количество товаров в корзине данной позиции ☻
        * 8. Общее количество товаров (размер входного массива) // передавать в первую очередь ☻ totalQuantity
        * 9. Общаая цена ☻ totalPrice
        * Для реализации сделать паресер памяти (LS), чтоб передавать читабельный массив
        *
        * Передается объект с двумя массивами по размерам big, small
        *
        * */

    const outHead = '<div class="container p-0">\n' +
        '\n' +
        '                <div class="scrollbar scrollbar-primary">\n' +
        '                    <div class="force-overflow">\n';

    let tempOut = '';

    if (!isEmpty(readableMass)) {

        const smallSize = readableMass['small'];
        const bigSize = readableMass['big'];

        if (!isEmpty(smallSize)) {
            for (let key in smallSize) {
                tempOut += makeBody(
                    smallSize[key].picture,
                    smallSize[key].id,
                    smallSize[key].name,
                    smallSize[key].size,
                    smallSize[key].weight,
                    smallSize[key].quantity,
                    smallSize[key].price
                );
            }
        }

        if (!isEmpty(readableMass['big'])) {
            for (let key in bigSize) {
                tempOut += makeBody(
                    bigSize[key].picture,
                    bigSize[key].id,
                    bigSize[key].name,
                    bigSize[key].size,
                    bigSize[key].weight,
                    bigSize[key].quantity,
                    bigSize[key].price);
            }
        }
    }

    const outBody = tempOut;
    const outFooter = '</div>\n' +
        '                </div>\n' +
        '                <div class="row footer-of-cart">\n' +
        '                    <div class="col-lg-5 col-sm-5 col-5 pl-2 pr-0">\n' +
        '                        <div class="p-2 pt-4">\n' +
        '                            <h6>Сумма заказа:</h6>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="col-lg-4 col-sm-4 col-4 p-0 div-of-totalPrice">\n' +
        '                        <div class="pt-4 pl-0 second-div-of-totalPrice">\n' +
        '                            <h6 class="text-info cart-total-price">' + totalPrice + '₽</h6>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="col-lg-3 col-sm-3 col-3 pt-3 pr-0 pl-0 ">\n' +
        '                        <button type="button" class="btn btn-outline-warning btn-sm px-2" onclick="toCard()">В корзину\n' +
        '                        </button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '\n' +
        '            </div>';


    return outHead + outBody + outFooter
}


function makeBody(picture, id, name, size, weight, quantity, price) {
    return '<div class="row cart-detail">\n' +
        '\n' +
        '                            <div class="col-lg-3 col-sm-3 col-3 cart-detail-img">\n' +
        '                                <img src="' + picture + '" alt="">\n' +
        '                            </div>\n' +
        '                            <div class="col-lg-6 col-sm-6 col-6 p-0" data-art="' + id + '">\n' +  // тут id
        '                                <div class="name">\n' +
        '                                    <h6 class="goods-name">' + name + '</h6>\n' +
        '                                </div>\n' +
        '                                <div class="size" data-art="' + weight + '">\n' +
        '                                    <h6 class="goods-size">' + size + ', ' + weight + 'гр.</h6>\n' +
        '                                </div>\n' +
        '                                <div class="count">\n' +
        '                                    <div class="minus d-inline-block">\n' +
        '                                        <button type="button" class="btn btn-outline-warning btn-sm px-1" onclick="minusGoods(this)" data-type="minus">\n' +
        '                                            <i class="fas fa-minus"></i>\n' +
        '                                        </button>\n' +
        '                                    </div>\n' +
        '                                    <div class="name-value d-inline-block p-1">\n' +
        '                                        <h5 class="goods-value">' + quantity + '</h5>\n' +
        '                                    </div>\n' +
        '                                    <div class="plus d-inline-block">\n' +
        '                                        <button type="button" class="btn btn-outline-warning btn-sm px-1" onclick="plusGoods(this)" data-type="plus">\n' +
        '                                            <i class="fas fa-plus"></i>\n' +
        '                                        </button>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                            <div class="col-lg-3 col-sm-3 col-3 p-0 trash-and-price">\n' +
        '                                <div class="trash">\n' +
        '                                    <i class="far fa-trash-alt" onclick="throwTrash(this)"></i>\n' +
        '                                </div>\n' +
        '                                <div class="goods-price text-info">\n' +
        '                                    <h5 class="cart-price">' + (quantity * price) + '₽</h5>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>';

}

// не забудь менять card-value ||-||setTotalCardValue()||-||
function plusGoods(address) {
// добавить единицу  товара
    const id = $(address).parent().parent().parent().attr('data-art');
    const diameter = $(address).parent().parent().siblings('.size').attr('data-art');
    let size = '';
    if (diameter == 280) {
        size = 'small';
    } else {
        size = 'big';
    }

    console.log("plusGoods");
    console.log("id = " + id + "\nsize = " + size);

    try {
        let cart = getFromLS();
        console.log(cart);
        cart[id][size]++;
        addToLS(cart);
        $(address).parent().siblings('.name-value').children('.goods-value').html(cart[id][size]);
// цена меняется так - парсится текущая цена, вычисляется цена за единицу товара и полученнное значение умножатся на текущее количество
        const get_old_total_price = parseInt($(address).parent().parent().parent().siblings('.trash-and-price').children('.goods-price').children('.cart-price').html());
        const price_for_one = (get_old_total_price / (cart[id][size] - 1)); //
        const total_price = cart[id][size] * price_for_one;

        $(address).parent().parent().parent().siblings('.trash-and-price').children('.goods-price').children('.cart-price').html(total_price);

        const cart_price = parseInt($(address).parent().parent().parent().parent().parent().parent().siblings('.footer-of-cart')
            .children('.div-of-totalPrice').children('.second-div-of-totalPrice').children('.cart-total-price').html());

        $(address).parent().parent().parent().parent().parent().parent().siblings('.footer-of-cart').children('.div-of-totalPrice').children('.second-div-of-totalPrice')
            .children('.cart-total-price').html(cart_price + price_for_one);

        setTotalCardValue();
    } catch (e) {
        alert("Ups! Something goes wrong!");
    }
}


function minusGoods(address) {
//уменьшить количество товаров на 1, если в корзине 1 ед. товара, то вызвать dropGoods()
    const id = $(address).parent().parent().parent().attr('data-art');
    const diameter = $(address).parent().parent().siblings('.size').attr('data-art');
    let size = '';
    if (diameter == 280) {
        size = 'small';
    } else {
        size = 'big';
    }

    console.log("plusGoods");
    console.log("id = " + id + "\nsize = " + size);

    try {
        let cart = getFromLS();
        console.log(cart);
        if (cart[id][size] > 1) {
            cart[id][size]--;
            addToLS(cart);
            $(address).parent().siblings('.name-value').children('.goods-value').html(cart[id][size]);
            const get_old_total_price = parseInt($(address).parent().parent().parent().siblings('.trash-and-price').children('.goods-price').children('.cart-price').html());
            const price_for_one = (get_old_total_price / (cart[id][size] + 1)); //
            const total_price = cart[id][size] * price_for_one;

            $(address).parent().parent().parent().siblings('.trash-and-price').children('.goods-price').children('.cart-price').html(total_price);

            const cart_price = parseInt($(address).parent().parent().parent().parent().parent().parent().siblings('.footer-of-cart')
                .children('.div-of-totalPrice').children('.second-div-of-totalPrice').children('.cart-total-price').html());

            $(address).parent().parent().parent().parent().parent().parent().siblings('.footer-of-cart').children('.div-of-totalPrice').children('.second-div-of-totalPrice')
                .children('.cart-total-price').html(cart_price - price_for_one);

            setTotalCardValue();
        } else {
            dropGoods(id, size);
        }


    } catch (e) {
        alert("Ups! Something goes wrong!");
    }
}

function throwTrash(address) {
// удалить позицию с корзины
// т.к у всех элементов уникальные классы стоит ли заменить такой длинный селектор на closest
    const id = $(address).parent().parent().siblings('.col-lg-6').attr('data-art');
    const diameter = $(address).parent().parent().siblings('.col-lg-6').children('.size').attr('data-art');

    let size = '';
    if (diameter == 280) {
        size = 'small';
    } else {
        size = 'big';
    }

    dropGoods(id, size);
}

function toCard() {
// перейти в корзину
    alert("dropGoods");
}

function dropGoods(id, size) {
    try {
        let cart = getFromLS();

        cart[id][size] = 0;

        if (parseInt(cart[id]['big']) === 0 && parseInt(cart[id]['small']) === 0) {
            console.log("delete");
            delete cart[id];
        }

        addToLS(cart);
        setTotalCardValue();
        changeMiniCart();

    } catch (e) {
        alert("Ups! Something goes wrong!");
    }
}