function getCosts() {
    return {
        productCategories: {
            type1: 700,
            type2: 800,
            type3: 1000
        },
        productFeatures: {
            feature_1: 330,
            feature_2: 250,
            feature_3: 785
        },
        productOptions: {
            option_0: 0,
            option_1: 125,
            option_2: 500,
            option_3: 300
        }
    };
}
function updateCost() {
    let cost = 0;
    let costs = getCosts();
    let checkSection = document.getElementById("features_section");
    let selectSection = document.getElementById("product_options");
    let radioButtons = document.getElementsByName("product_type");
    let is_check = 0;
    let is_select = 0;
    radioButtons.forEach(function (radio) {
        if (radio.checked) {
            cost = costs.productCategories[radio.value];
            //checkbox
            if (radio.value === "type1" || radio.value === "type2") {
                checkSection.style.display = "none";
                is_check = 0;
            } else {
                checkSection.style.display = "block";
                is_check = 1;
            }
            //select
            if (radio.value === "type1" || radio.value === "type3") {
                selectSection.style.display = "none";
                is_select = 0;
            } else {
                selectSection.style.display = "block";
                is_select = 1;
            }
        }
    });
    let s = document.getElementsByName("product_options");
    //Определяем опцию
    let select = s[0].value;
    if (select !== undefined && is_select === 1) {
        cost += costs.productOptions[select];
    }

    //Определяем свойства
    let checkboxes = document.querySelectorAll("#features_section input");
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            let featureCost = costs.productFeatures[checkbox.name];
            if (featureCost !== undefined && is_check === 1) {
                cost += featureCost;
            }
        }
    });

    let result = document.getElementById("final_cost");

    //Учитываем кол-во
    let quantityInput = document.getElementsByName("product_quantity");
    let validInput = quantityInput[0].value.match(/^\d+$/);
    if (validInput !== null) {
        cost *= validInput;
        result.innerHTML = "Итоговая стоимость: " + cost;
    } else {
        result.innerHTML = "Некорректный ввод данных!";
    }
}


window.addEventListener("DOMContentLoaded", function () {
    // Обрабатываем радиокнопки
    let radioButtons = document.getElementsByName("product_type");
    radioButtons.forEach(function (radio) {
        radio.addEventListener("change", function () {
            updateCost();
        });
    });
    // Находим select по имени в DOM.
    let sel = document.getElementsByName("product_options");
    let select = sel[0];
    select.addEventListener("change", function () {
        updateCost();
    });
    // Обрабатываем чекбоксы
    let checkboxes = document.querySelectorAll("#features_section input");
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            updateCost();
        });
    });
    let qty = document.getElementsByName("product_quantity");
    let quantityInput = qty[0];
    // Назначаем обработчик на изменение поля ввода количества
    quantityInput.addEventListener("change", function () {
        updateCost();
    });

    updateCost();
});
