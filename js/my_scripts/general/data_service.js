function findByID(id) {
    // функция для нахождения эл-та по id в arrPies. Конченый костыль. Потом выпелить
    let tempArr;
    switch (id[0]) {
        case "1":
            tempArr = arrPies;
            break;
        case "2":
            tempArr = arrPizza;
            break;
        case "3":
            tempArr = arrHotMeals;
            break;
        case "4":
            tempArr = arrGrill;
            break;
        case "5":
            tempArr = arrDrinks;
            break;
        default:
            alert("Something goes wrong in findByID()");
            break;
    }

    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i].id == id) {
            return tempArr[i]
        }
    }
}

function getSizeFromDiameter(diameter) {

    if (diameter == 280 || diameter == 500 || diameter == 0.5) {
        return 'small';
    } else {
        return 'big';
    }
}

function calculateTotalPrice() {
    const arr = getFromLS();
    let totalPrice = 0;

    for (let key in arr) {
        if (arr[key]['big'] > 0) {
            totalPrice += arr[key]['big'] * findByID(key).price_big;
        }
        if (arr[key]['small'] > 0) {
            totalPrice += arr[key]['small'] * findByID(key).price_small;
        }
    }

    console.log("totalPrice " + totalPrice);

    return totalPrice
}