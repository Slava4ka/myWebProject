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

    console.log("$(this).attr('data-art') = " + $(this).attr('data-art'));

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
                    description: temp.description,
                    picture: temp.picture,
                    weight: temp.weight_big,
                    size_description: temp.description_of_weight_big,
                    price: temp.price_big,
                    metrics: temp.metrics,
                    quantity: dataFromLS[key].big
                };
                totalQuantity++;
                totalPrice += (temp.price_big * dataFromLS[key].big);
            }
            if (dataFromLS[key].small > 0) {
                readableMass['small'][key] = {
                    id: temp.id,
                    name: temp.name,
                    description: temp.description,
                    picture: temp.picture,
                    weight: temp.weight_small,
                    size_description: temp.description_of_weight_small,
                    price: temp.price_small,
                    metrics: temp.metrics,
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