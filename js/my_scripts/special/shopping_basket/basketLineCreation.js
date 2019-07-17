function getListOfGoods() {
    return makeReadbleMass();
}


function createShoppingList() {

    let tempOut = '';

    try {
        let [totalQuantity, totalPrice, readableMass] = getListOfGoods();

        if (!isEmpty(readableMass)) {

            const smallSize = readableMass['small'];
            const bigSize = readableMass['big'];

            if (!isEmpty(smallSize)) {
                for (let key in smallSize) {
                    tempOut += createBasketLine(
                        smallSize[key].id,
                        smallSize[key].name,
                        smallSize[key].size_description,
                        smallSize[key].weight,
                        smallSize[key].metrics,
                        smallSize[key].description,
                        smallSize[key].price,
                        smallSize[key].quantity
                    );
                }
            }

            if (!isEmpty(bigSize)) {
                for (let key in bigSize) {
                    tempOut += createBasketLine(
                        bigSize[key].id,
                        bigSize[key].name,
                        bigSize[key].size_description,
                        bigSize[key].weight,
                        bigSize[key].metrics,
                        bigSize[key].description,
                        bigSize[key].price,
                        bigSize[key].quantity
                    );
                }
            }
            $('#totalPrice').html(totalPrice + "₽");
        } else {
            tempOut += '<h1>Ваша корзина пуста</h1>';
        }
    } catch (e) {
        console.log(e);
    }


    $('#shopping-list').empty().append(tempOut);

}

function createBasketLine(id, name, size, weight, metrics, description, price, quantity) {
    return ('<section class="pt-5">\n' +
        '                <div class="row">\n' +
        '                    <div class="col-12 col-md-6">\n' +
        '                        <div class="name">\n' +
        '                            <h4 class="goods-name">' + name + '</h4>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="size">\n' +
        '                            <h6 class="goods-size">' + size + ' ' + weight + metrics + '</h6>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="description">\n' +
        '                            <h6 class="goods-description">' + description + '</h6>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '\n' +
        '                    <div class="col-12 col-md-6">\n' +
        '                        <div class="row">\n' +
        '                            <div class="col-4 col-md-5 pt-3">\n' +
        '                                <div class="goods-price">\n' +
        '                                    <h6><strong>' + price + '₽</strong></h6>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '\n' +
        '                            <div class="col-6 col-md-4">\n' +
        '                                <div class="count" data-art="' + id + '" data-size="' + weight + '" >\n' +
        '                                    <div class="minus d-inline-block">\n' +
        '                                        <button type="button" class="btn btn-outline-warning btn-sm px-1 button-minus"\n' +
        '                                                data-type="minus">\n' +
        '                                            <i class="fas fa-minus"></i>\n' +
        '                                        </button>\n' +
        '                                    </div>\n' +
        '                                    <div class="name-value d-inline-block p-1">\n' +
        '                                        <h5 class="goods-value">' + quantity + '</h5>\n' +
        '                                    </div>\n' +
        '                                    <div class="plus d-inline-block">\n' +
        '                                        <button type="button" class="btn btn-outline-warning btn-sm px-1 button-plus"\n' +
        '                                                data-type="plus">\n' +
        '                                            <i class="fas fa-plus"></i>\n' +
        '                                        </button>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '\n' +
        '                            <div class="col-2 col-md-3 text-center p-1" data-art="' + id + '" data-size = "' + weight + '">\n' +
        '                                <button type="button" class="cross-in-a-circle button-trash">\n' +
        '                                    <i class="far fa-times-circle fa-2x" aria-hidden="true"></i>\n' +
        '                                </button>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </section>'
    )
        ;
}