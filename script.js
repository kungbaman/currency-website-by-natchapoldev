const currencyOne = document.getElementById('currency__one')
const currencyTwo = document.getElementById('currency__two')

const inputOne = document.getElementById('amount__one')
const inputTwo = document.getElementById('amount__two')

const btn = document.getElementById('btn')
const rateText = document.getElementById('rate')

currencyOne.addEventListener('change',calculatedCurrency)
currencyTwo.addEventListener('change',calculatedCurrency)

function calculatedCurrency() {
    const one = currencyOne.value;
    const two = currencyTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
    .then(res=>res.json()).then(data => {
        // console.log(data.rates[two]);
        const rate = data.rates[two];
        rateText.innerHTML = `1 ${one} = ${rate} ${two}`
    })
}

calculatedCurrency();