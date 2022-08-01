const apiLink = 'https://api.coingecko.com/api/v3/exchange_rates';

document.addEventListener('DOMContentLoaded',() => {
    const body = document.querySelector('body');
    const dropdown = document.querySelector('#currency-dropdown');
    console.log(dropdown);
    fetch(apiLink)
    .then(res => res.json())
    .then(data => addCurrenciesToDropdown(data.rates))

    // appends each currency to the dropdown
    function addCurrenciesToDropdown(currencies){
        let currencyKeys = Object.keys(currencies);
        currencyKeys.forEach(key => {
            let currency = currencies[key];
            const option = document.createElement("option");
            option.value = currency.unit;
            option.text = currency.name;
            console.log(dropdown);
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

})