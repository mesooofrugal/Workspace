function processEntries() {

    let calcButton = document.getElementById("calculate-button")
    calcButton.onclick = calculateTax

}


function calculateTax() {

    let enterIncome = document.querySelector("#enterIncome")
    let incomeTaxOwed = document.querySelector("#incomeTaxOwed")
    if (enterIncome.value < 0) {
        alert("Amount has to be greater than 0")
    }
    if (enterIncome.value > 0 || enterIncome.value <= 9875) {
        incomeTaxOwed = parseFloat(enterIncome.value*0.10 + enterIncome.value).toFixed(2);}
    if (enterIncome.value > 9875 || enterIncome.value <= 40125) {
        incomeTaxOwed = parseFloat(enterIncome.value*0.12 + enterIncome.value).toFixed(2);}
    if (enterIncome.value > 40125 || enterIncome.value <= 85525) {
        incomeTaxOwed = parseFloat(enterIncome.value*0.22 + enterIncome.value).toFixed(2);}
    if (enterIncome.value > 85525 || enterIncome.value <= 163300) {
        incomeTaxOwed = parseFloat(enterIncome.value*0.24 + enterIncome.value).toFixed(2);}
    if (enterIncome.value > 163300 || enterIncome.value <= 207350) {
        incomeTaxOwed = parseFloat(enterIncome.value*0.32 + enterIncome.value).toFixed(2);}
    if (enterIncome.value > 207350 || enterIncome.value <= 518400) {
        incomeTaxOwed = parseFloat(enterIncome.value*0.35 + enterIncome.value).toFixed(2);}
    if (enterIncome.value > 518400) {
        incomeTaxOwed = parseFloat(enterIncome.value*0.37 + enterIncome.value).toFixed(2);}
}
