const apiLink = 'https://api.coingecko.com/api/v3/exchange_rates';

document.addEventListener('DOMContentLoaded',() => {
    fetch(apiLink)
    .then(res => res.json())
    .then(data => addCurrenciesToDropdown(data.rates))
    body.append(dropdown);
})

// add a dropdown
const dropdown = document.createElement('select');
const body = document.querySelector('body');

// appends each currency to the dropdown
function addCurrenciesToDropdown(currencies){
    let currencyKeys = Object.keys(currencies);
    currencyKeys.forEach(key => {
        let currency = currencies[key];
        console.log(currency);
        const option = document.createElement("option");
        option.value = currency.unit;
        option.text = currency.name;
        dropdown.append(option);
    })
}

// renders info about currency on the DOM
function displayInfo(currency){
    const name = currency.name;
    const type = currency.type;
    const unit = currency.unit;
    const value = currency.unit;
}