$(document).ready(function () {

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
                $('#navbarList li').removeClass('active')
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


});








