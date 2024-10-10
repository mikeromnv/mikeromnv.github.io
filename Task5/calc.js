function click1(event) {
    let res = document.getElementById("total");
    let price_of_item = parseInt(document.getElementById("item").value);
    let am = document.getElementById("count").value.match(/^[1-9]\d*$/);
    if (am === null) {
        res.textContent = String("Введите целое положительное число!");
        return;
    }
    event.preventDefault();
    if (document.getElementById("item").value === "") {
        res.textContent = String("Вы не выбрали товар!");
        return;
    }
    let item_count = parseInt(am);
    res.textContent = String(
        "Стоимость " + item_count + "шт.равна " + price_of_item * item_count
    );
    res.style.fontWeight = "bold";
    res.style.fontStyle = "italic";
    return false;
}

window.addEventListener("DOMContentLoaded", function () {
    let button_price = document.getElementById("price");
    button_price.addEventListener("click", click1);
    button_price.style.backgroundColor = "#6b0d0be8";
    button_price.style.color = "#FDFFF5";
    button_price.style.fontFamily = "Courier New, Courier, monospace";
    button_price.style.fontSize = "20px";
});