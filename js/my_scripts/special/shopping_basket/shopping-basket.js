$(document).ready(function () {

    //устанавливать сумму заказа
    createShoppingList();

    $('button.button-plus').on('click', buttonPlus);

    $('button.button-minus').on('click', buttonMinus);

    $('button.button-trash').on('click', buttonTrash);


});