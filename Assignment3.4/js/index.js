function processEntries() {

    let submitButton = document.getElementById("submit-button")
    submitButton.onclick = calculateChange

}

function numbersOfNight() {

    let nights = document.querySelector("#nights")
    if (nights.value < 0 || nights.value > 30) {
        alert("Amount has to be between 0 and 30")
    }
}

function ValidateEmail(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(validRegex)) {
      alert("Valid email address!");
    //   document.form1.text1.focus();
    //   return true;
    } else {
      alert("Invalid email address!");
        // document.form1.text1.focus();
        // return false;
    }
}

const $ = selector => document.querySelector(selector);

 document.addEventListener("DOMContentLoaded", () => {
    $("#submit").addEventListener("click",() =>{
        const arrivalDate =$("#arrivalDate").value;
        const nights =$("#nights").value;
        const adults =$("#adults").value;
        const childrean =$("#childrean").value;
        const roomType =$("#roomType").value;
        const bedType =$("#bedType").value;
        const name =$("#name").value;
        const email =$("#email").value;
        const phone =$("#phone").value;
        let errorMessage ="";

        if (arrivalDate ==""){
            errorMessage += "Enter arrival date\n"}
        if (nights ==""){
            errorMessage += "Enter number of nights\n"}
        if (adults ==""){
            errorMessage += "Enter number of adults\n"}
        if (childrean ==""){
            errorMessage += "Enter number of childrean\n"}
        if (roomType ==""){
            errorMessage += "Please select room type\n"}
        if (bedType ==""){
            errorMessage += "Please select bed type\n"}
        if (name ==""){
            errorMessage += "Enter your full name\n"}
        if (email ==""){
            errorMessage += "Enter your e-mail\n"}
        if (phone ==""){
            errorMessage += "Enter your phone number\n"}
        if (errorMessage ==""){
            $("#submit").submit();}
        else{
            alert(errorMessage);}
    });
});