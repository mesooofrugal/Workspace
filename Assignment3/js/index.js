function processEntries() {

    let calcButton = document.getElementById("calculate-button")
    calcButton.onclick = calculateSalesTax

    let clearButton = document.getElementById("clear-button")
    clearButton.onclick = clear
}


function calculateSalesTax() {

    let subtotal = document.querySelector("#subtotal")
    let taxrate = document.querySelector("#taxrate")
    let salestax = document.querySelector("#salestax")
    let total = document.querySelector("#total")
    if (subtotal.value < 0 || subtotal.value > 10000) {
        alert("Subtotal should be greater than 0 or less than 10000")
    }
    if (taxrate.value < 0 || taxrate.value > 12) {
        alert("Tax rate should be greater than 0 and less than 12")
    }
    salestax.value = subtotal.value * (taxrate.value/100)
    total.value = Number(subtotal.value) + Number(salestax.value)
}

function clear() {

    let subtotal = document.querySelector("#subtotal")
    let taxrate = document.querySelector("#taxrate")
    let salestax = document.querySelector("#salestax")
    let total = document.querySelector("#total")
    subtotal.value = 0.00
    taxrate.value = 0.00
    salestax.value = 0.00
    total.value = 0.00 
}