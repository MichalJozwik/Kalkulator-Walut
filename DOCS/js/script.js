let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EUR = 4.4278;
let GBP = 5.3523;
let USD = 3.9058;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;

    let result;

    if (currency === "EUR") {
        result = amount / EUR;
        result = result.toFixed(2);
        resultElement.innerText = result + " EUR";
    } else if (currency === "USD") {
        result = amount / USD;
        result = result.toFixed(2);
        resultElement.innerText = result + " USD";
    } else {
        result = amount / GBP;
        result = result.toFixed(2);
        resultElement.innerText = result + "GBP";
    }
});
