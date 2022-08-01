const apiLink = 'https://api.coingecko.com/api/v3/exchange_rates';
let currencyList = null;

document.addEventListener('DOMContentLoaded',() => {
    //const body = document.querySelector('body');
    let convertFrom = document.querySelector('#currency-dropdown');
    let convertTo = document.querySelector('#currency-dropdown2');
    fetch(apiLink)
    .then(res => res.json())
    .then(data => addCurrenciesToDropdown(data.rates))

    // appends each currency to the dropdown
    function addCurrenciesToDropdown(currencies){
        currencyList = currencies;
        let currencyKeys = Object.keys(currencies);
        currencyKeys.forEach(key => {
            let currency = currencies[key];
            const option = document.createElement("option");
            option.value = key;
            option.text = currency.name;
            //console.log(convertFrom);
            convertFrom.append(option);
            //console.log(convertTo);
            convertTo.append(option.cloneNode(true));
        })
    }

    // dropdown handling
    convertFrom.addEventListener('change', (e) => dropdownHandlerFrom(e));
    convertTo.addEventListener('change', (e) => dropdownHandlerTo(e));

    function dropdownHandlerFrom(e){
        let currencyKey = e.target.value;
        let currencyInfo = currencyList[currencyKey]
        displayInfo(currencyInfo)
    }

    function dropdownHandlerTo(e){
        let currencyKey = e.target.value;
        let currencyInfo = currencyList[currencyKey]
        displayInfo(currencyInfo)
    }

    // renders info about currency on the DOM
    function displayInfo(currency){
        const name = currency.name;
        const type = currency.type;
        const unit = currency.unit;
        const value = currency.value;
        console.log(name);
        console.log(type);
        console.log(unit);
        console.log(value);
    }

})