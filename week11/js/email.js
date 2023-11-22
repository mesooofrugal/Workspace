// document.addEventListener("DOMContentLoaded", () => {
//     $("#join_list").addEventListener(
//         "click", processEntries);
//     $("#email_1").focus();
// });

const $ = selector => document.querySelector(selector);

 document.addEventListener("DOMContentLoaded", () => {
//     $("#join_list").addEventListener("click",() =>{
//         const email =$("#email_1").value;
//         alert(email1);
//     });

//     $("#join_list").addEventListener("click",() =>{
//         const email2 =$("#email_2").value;
//         alert(email2);
//     });

    $("#join_list").addEventListener("click",() =>{
        const email1 =$("#email_1").value;
        const email2 =$("#email_2").value;
        const username =$("#username").value;
        let errorMessage ="";

        if (email1 =="")
        {
            errorMessage += "First email is required\n"
        }
        if (email2 =="")
        {
            errorMessage += "Second email is required\n"
        }
        if (email1 != email2)
        {
            errorMessage += "Emails do not match\n"
        }
        if (username =="")
        {
            errorMessage += "Username is required\n"
        }
        if (errorMessage =="")
        {
            $("#email_form").submit();
        }
        else{
            alert(errorMessage);
        }
    });
});