const initialPrice = document.querySelector('#intial-price');
const stocksQuantity = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
const findBtn = document.querySelector('#find-btn');
const output = document.querySelector('#output');
const body = document.querySelector('body');

function getInputValues() {
    let initial = Number(initialPrice.value);
    let quantity = Number(stocksQuantity.value);
    let current = Number(currentPrice.value);

    calculateProfitandLoss(initial, quantity, current);


}

function calculateProfitandLoss(initial, quantity, current) {

    if (initial < current)
    {
        let gain = (current - initial) * quantity;
        let gainPercentage = (gain/initial) * 100;
        body.style.backgroundColor = 'lightgreen';
        output.innerText = `your gain is Rs. ${gain} & gain% is ${gainPercentage.toFixed(2)}%`;
    }
    else if (initial > current)
    {
        let loss = (initial - current) * quantity;
        let lossPercentage = (loss/initial) * 100;
        body.style.backgroundColor = '#FCA5A5';
        output.innerText = `your loss is Rs. ${loss} & loss% is ${lossPercentage.toFixed(2)}%`;
    }
    else
    {
        body.style.backgroundColor = 'white';
        output.innerText = 'No gain, no pain; No pain, no gain'
    }
}

findBtn.addEventListener('click', getInputValues);