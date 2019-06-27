// увеличени/уменьшение корзины при наведении
$(document).ready(function () {
    $('.trash').hover(function () {
            $(this).html('<i class="far fa-trash-alt fa-2x"></i>');
        },
        function () {
            $(this).html('  <i class="far fa-trash-alt"></i>');
        })
});
