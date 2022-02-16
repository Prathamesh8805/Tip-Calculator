
const billamount = document.querySelector("#billamount");
const members = document.querySelector("#members");
const service = document.querySelector("#service");
const button = document.querySelector("#button");

button.addEventListener('click', function calculate(billamount,members,service) {

    if (billamount> 0 || members > 0) {
        let billamount = billamount.value;
        let members = members.value;
        let service = service.value;



        document.getElementById("anwser").innerHTML = "Amount is " + billamount + members + service;


    }
    else {
        document.getElementById("anwser").innerHTML = "Else loop";
    }



})
