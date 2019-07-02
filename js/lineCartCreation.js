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

function createHotMealLineCart() {
    for (let i = 0; i < arrHotMeals.length; i++) {
        $("#hotMealLineCart").append(HotMealLineCartConstructor(i, arrHotMeals));
    }
    $("#hotMealLineCart").append(addSpecialCard(arrHotMeals));
}

function createGrillLineCart() {
    for (let i = 0; i < arrGrill.length; i++) {
        $("#grillLineCart").append(lineCartConstructor(i, arrGrill));
    }
}

function createDrinksLineCart() {
    for (let i = 0; i < arrDrinks.length; i++) {
        $("#the_drinksLineCart").append(lineCartConstructor(i, arrDrinks));
    }
}


function lineCartConstructor(iterator, arr) {

    const head = "<div class=\"col-lg-3 col-md-6 md-4 mb-4\">\n" +
        "                    <div class=\"card border-0\">\n" +
        "                        <div class=\"view overlay\">\n";

    let description = "                            <img class=\"card-img-top\"\n src=" + arr[iterator].picture + "\n alt=\"example\">\n" +
        "                            <div class=\"text-left\"><i class=\"fas fa-info-circle\"></i></div>\n" +
        "                        </div>\n" +
        "                        <div class=\"card-body text-center pt-3\">\n" +
        "                            <h4 class=\"good_name\">" + arr[iterator].name + "</h4>\n" +
        "                            <div class=\"good_info\"";


    if (!arr[iterator].have_description) {
        description += "style = \"display:none\"";
    }

    description += ">\n" +
        "                                <h6>\n" +
        "                                    <a class=\"dark-grey-text\">" + arr[iterator].description + "</a>\n" +
        "                                </h6>\n" +
        "                            </div>\n";

    let sizeControlSelector = "";

    if (arr[iterator].have_small) {
        sizeControlSelector = "                            <div class=\"product__size-control\">\n" +
            "                                <div class=\"product__size-control-selector\"></div>\n" +
            "                                <div class=\"product__size-control-item active\" value=\"big\" data-art=\"" + arr[iterator].id + "\">\n" +
            "                                    <h5 class=\"selected_item mt-1\">" + arr[iterator].weight_big + "&nbsp;" + arr[iterator].metrics + "</h5>\n" +
            "                                </div>\n" +
            "                                <div class=\"product__size-control-item\" value=\"small\" data-art=\"" + arr[iterator].id + "\">\n" +
            "                                    <h5 class=\"not_selected_item mt-2\">" + arr[iterator].weight_small + "&nbsp;" + arr[iterator].metrics + "</h5>\n" +
            "                                </div>\n" +
            "                            </div>\n";
    } else {
        sizeControlSelector = "<div class=\"product__size-control\"";

        if (!arr[iterator].have_size_selector) {
            sizeControlSelector += "style = \"display:none\""
        }

        sizeControlSelector += ">\n" +
            "                                <div class=\"product__size-control-selector\" style=\"width: 100%\"></div>\n" +
            "                                <div class=\"product__size-control-item active\" value=\"big\" data-art=\"" + arr[iterator].id + "\">\n" +
            "                                    <h5 class=\"selected_item mt-1\">" + arr[iterator].weight_big + "&nbsp;" + arr[iterator].metrics + "</h5>\n" +
            "                                </div>\n" +
            "                            </div>\n";
    }

    const inCardANDprice = "                            <div class=\"row d-flex justify-content-between align-items-center button-and-price\">\n" +
        "                                <div class=\"col-5\">\n" +
        "                                    <h4 class=\"font-weight-bold blue-text price\">\n" +
        "                                        <strong class='strong_price'>" + arr[iterator].price_big + "₽</strong>\n" +
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

/**
 * @return {string}
 */
// выводит все горячие блюда, кроме вареников (со специальной карточкой), своеобразный фильтр
function HotMealLineCartConstructor(iterator, arr) {
    switch (arr[iterator].special_card) {
        case false:
            console.log("in HMLCC false");
            return '';
        case true:
            console.log("in HMLCC true");
            return '';
        default:
            console.log("in HMLCC default");
            return lineCartConstructor(iterator, arr);
    }
}

// возвращает специальную карточку с селектором начинки вареников
function addSpecialCard(arr) {
    return "<div class=\"col-lg-3 col-md-6 md-4 mb-4\">\n" +
        "                    <div class=\"card border-0\">\n" +
        "                        <div class=\"view overlay\">\n" +
        "\n" +
        "\n" +
        "                            <img class=\"card-img-top\"\n" +
        "                                 src=\"" + arr[2].picture + "\"\n" +
        "                                 alt=\"example\">\n" +
        "                            <div class=\"text-left\"><i class=\"fas fa-info-circle\"></i></div>\n" +
        "                        </div>\n" +
        "                        <div class=\"card-body text-center pt-3\">\n" +
        "                            <h4 class=\"good_name\">" + arr[2].name + "</h4>\n" +
        "                            <div class=\"good_info\" style='height: 45px'>\n" +
        "                                <h6>\n" +
        "                                    <a class=\"dark-grey-text\">" + arr[2].description + "</a>\n" +
        "                                </h6>\n" +
        "                            </div>\n" +
        "\n" +
        "\n" +
        "                            <div class=\"product_ingredients__chooser\">\n" +
        "                                <div class=\"product_ingredients-selector\"></div>\n" +
        "\n" +
        "                                <div class=\"product_ingredients-item active\" value=\"potato\" data-art=\"30003\">\n" +
        "                                    <h5 class=\"selected_item mt-1\">🥔</h5>\n" +
        "                                </div>\n" +
        "\n" +
        "                                <div class=\"product_ingredients-item\" value=\"cabbage\" data-art=\"30004\">\n" +
        "                                    <h5 class=\"not_selected_item mt-2\">🥦</h5>\n" +
        "                                </div>\n" +
        "\n" +
        "                                <div class=\"product_ingredients-item\" value=\"cherry\" data-art=\"30005\">\n" +
        "                                    <h5 class=\"not_selected_item mt-2\">🍒</h5>\n" +
        "                                </div>\n" +
        "\n" +
        "                                <div class=\"product_ingredients-item\" value=\"curd\" data-art=\"30006\">\n" +
        "                                    <h5 class=\"not_selected_item mt-2\">🍚</h5>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "\n" +
        "\n" +
        "                            <div class=\"product__size-control\">\n" +
        "                                <div class=\"product__size-control-selector\"></div>\n" +
        "                                <div class=\"product__size-control-item active\" value=\"big\" data-art=\"30003\">\n" +
        "                                    <h5 class=\"selected_item mt-1\">1000&nbsp;гр</h5>\n" +
        "                                </div>\n" +
        "                                <div class=\"product__size-control-item\" value=\"small\" data-art=\"30003\">\n" +
        "                                    <h5 class=\"not_selected_item mt-2\">500&nbsp;гр</h5>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "\n" +
        "\n" +
        "                            <div class=\"row d-flex justify-content-between align-items-center button-and-price\">\n" +
        "                                <div class=\"col-5\">\n" +
        "                                    <h4 class=\"font-weight-bold blue-text price\">\n" +
        "                                        <strong class='strong_price'>350₽</strong>\n" +
        "                                    </h4>\n" +
        "                                </div>\n" +
        "\n" +
        "                                <div class=\"col-7\">\n" +
        "                                    <button type=\"button\" class=\"btn btn-outline-warning btn-tb add-to-cart\"\n" +
        "                                            data-art=\"30003\">\n" +
        "                        <span>\n" +
        "                            <strong>В&nbsp;корзину</strong>\n" +
        "                        </span>\n" +
        "                                    </button>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>"
}