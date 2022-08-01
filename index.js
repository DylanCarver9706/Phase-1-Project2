const apiLink = 'https://api.coingecko.com/api/v3/exchange_rates';
let currencyList = null;
let currencyOne = null;
let currencyTwo = null;

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
        currencyOne = currencyInfo;
        displayConversion(currencyOne, currencyTwo)
    }

    function dropdownHandlerTo(e){
        let currencyKey = e.target.value;
        let currencyInfo = currencyList[currencyKey]
        currencyTwo = currencyInfo;
        displayConversion(currencyOne, currencyTwo)
    }

    let display = document.querySelector('#display-conversion');

    // converts currency and displays
    function displayConversion(currencyOne, currencyTwo, howMuch = 1){
        if (currencyOne && currencyTwo){
            let valueOne = currencyOne.value;
            let valueTwo = currencyTwo.value;
            let convertValue = ((valueTwo / valueOne) * howMuch).toFixed(2);
            let convertMessage = `${howMuch} ${currencyOne.name} equals ${convertValue} ${currencyTwo.name}`;
            display.innerText = convertMessage;
        }
    }

    let target = null // fill in with new HTML element Dylan is creating
    target.addEventListener('keyup', (e) => {
        console.log(e.target.value);
        newValue = 0;
        displayConversion(currencyOne, currencyTwo, howMuch = newValue);
    })

    // display conversion rate between the two currencies


    // renders info about currency on the DOM
    // function displayInfo(currency){
    //     const name = currency.name;
    //     const type = currency.type;
    //     const unit = currency.unit;
    //     const value = currency.value;
    //     console.log(name);
    //     console.log(type);
    //     console.log(unit);
    //     console.log(value);
    // }

})