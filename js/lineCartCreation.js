function createPiesLineCart() {
    for (let i = 0; i < arrPies.length; i++) {
        $("#piesLineCart").append(lineCartConstructor(i, arrPies));
    }
}

function createPizzaLineCart() {
    for (let i = 0; i < arrPizza.length; i++) {
        $("#pizzaLineCart").append(lineCartConstructor(i, arrPizza));
    }
}

function lineCartConstructor(iterator, arr) {
    const head = "<div class=\"col-lg-3 col-md-6 md-4 mb-4\">\n" +
        "                    <div class=\"card border-0\">\n" +
        "                        <div class=\"view overlay\">\n";

    const description = "                            <img class=\"card-img-top\"\n src=" + arr[iterator].picture + "\n alt=\"example\">\n" +
        "                            <div class=\"text-left\"><i class=\"fas fa-info-circle\"></i></div>\n" +
        "                        </div>\n" +
        "                        <div class=\"card-body text-center pt-3\">\n" +
        "                            <h4 class=\"good_name\">" + arr[iterator].name + "</h4>\n" +
        "                            <div class=\"good_info\">\n" +
        "                                <h6>\n" +
        "                                    <a class=\"dark-grey-text\">" + arr[iterator].description + "</a>\n" +
        "                                </h6>\n" +
        "                            </div>\n";

    let sizeControlSelector = "";
    if (arr[iterator].have_small) {
        sizeControlSelector = "                            <div class=\"product__size-control\">\n" +
            "                                <div class=\"product__size-control-selector\"></div>\n" +
            "                                <div class=\"product__size-control-item active\" value=\"big\">\n" +
            "                                    <h5 class=\"selected_item mt-1\">900&nbsp;гр</h5>\n" +
            "                                </div>\n" +
            "                                <div class=\"product__size-control-item\" value=\"small\">\n" +
            "                                    <h5 class=\"not_selected_item mt-2\">280&nbsp;гр</h5>\n" +
            "                                </div>\n" +
            "                            </div>\n";
    } else {
        sizeControlSelector = "                            <div class=\"product__size-control\">\n" +
            "                                <div class=\"product__size-control-selector\" style=\"width: 100%\"></div>\n" +
            "                                <div class=\"product__size-control-item active\" value=\"big\">\n" +
            "                                    <h5 class=\"selected_item mt-1\">900&nbsp;гр</h5>\n" +
            "                                </div>\n" +
            "                            </div>\n";
    }

    const inCardANDprice = "                            <div class=\"row d-flex justify-content-between align-items-center\">\n" +
        "                                <div class=\"col-5\">\n" +
        "                                    <h4 class=\"font-weight-bold blue-text price\">\n" +
        "                                        <strong>" + arr[iterator].price_big + "₽</strong>\n" +
        "                                    </h4>\n" +
        "                                </div>\n" +
        "\n" +
        "                                <div class=\"col-7\">\n" +
        "                                    <button type=\"button\" class=\"btn btn-outline-warning btn-tb add-to-cart\"\n" +
        "data-art=\"" + arr[iterator].id + "\"\n" +
        "                                            >\n" +
        "                                    <span>\n" +
        "                                        <strong>В&nbsp;корзину</strong>\n" +
        "                                    </span>\n" +
        "                                    </button>\n" +
        "                                </div>\n" +
        "                            </div>\n";

    const footer = "                        </div>\n" +
        "                    </div>\n" +
        "                </div>";

    return head + description + sizeControlSelector + inCardANDprice + footer
}