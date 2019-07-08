function buttonPlus() {
    const id = $(this).parent().parent().attr('data-art');
    const diameter = $(this).parent().parent().attr('data-size');
    const size = getSizeFromDiameter(diameter);

    try {
        let cart = getFromLS();
        cart[id][size]++;
        addToLS(cart);
        $(this).parent().siblings('.name-value').children('.goods-value').html(cart[id][size]);
        changeTotalPrice();
    } catch (e) {
        alert("Something goes wrong◘♦♠☺");
    }


}

function buttonMinus() {

    console.log("buttonMinus");

    const id = $(this).parent().parent().attr('data-art');
    const diameter = $(this).parent().parent().attr('data-size');
    const size = getSizeFromDiameter(diameter);

    try {

        console.log("try");

        let cart = getFromLS();
        if (cart[id][size] > 1) {

            console.log("cart[id][size] > 1 " + cart[id][size]);

            cart[id][size]--;
            addToLS(cart);
            $(this).parent().siblings('.name-value').children('.goods-value').html(cart[id][size]);
            changeTotalPrice();
        } else {

            console.log("else " + cart[id][size]);
            drop(id, size, $(this));
        }
    } catch (e) {
        alert("Something goes wrong◘♦♠☺");
    }
}

function buttonTrash() {
    const id = $(this).parent().attr('data-art');
    const diameter = $(this).parent().attr('data-size');
    const size = getSizeFromDiameter(diameter);

    drop(id, size, $(this));
}

function changeTotalPrice() {
    $('#totalPrice').html(calculateTotalPrice() + '₽')
}

function drop(id, size, currentElement) {
    let cart = getFromLS();
    cart[id][size] = 0;

    if (parseInt(cart[id]['big']) === 0 && parseInt(cart[id]['small']) === 0) {
        console.log("delete");
        delete cart[id];
    }

    currentElement.closest('section.pt-5').remove();
    addToLS(cart);
    changeTotalPrice();
}