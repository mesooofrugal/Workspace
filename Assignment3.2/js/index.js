function processEntries() {

    let calcButton = document.getElementById("calculate-button")
    calcButton.onclick = calculateChange

}


function calculateChange() {

    let enterAmount = document.querySelector("#enterAmount")
    if (enterAmount.value < 0 || enterAmount.value > 99) {
        alert("Amount has to be between 0 and 99")
    }
    quarters.value = parseInt(enterAmount.value/25)
    let remainder = parseInt(enterAmount.value %25)
    dimes.value = parseInt(remainder/10)
    remainder = parseInt(remainder%10)
    nickels.value = parseInt(remainder/5)
    remainder = parseInt(remainder%5)
    pennies.value = parseInt(remainder)
}
