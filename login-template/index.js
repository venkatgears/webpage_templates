let issub = document.getElementById("sub")
let ismaster = document.getElementById("masterCard")
let isvisa = document.getElementById("visaCard")
let ispaypal = document.getElementById("paypal")
let error_msg = document.getElementById("error-msg")

let submit = document.getElementById("checkout")
let content = ""
submit.onclick = function() {
    if (issub.checked) {
        content = "You have chose to subscribe"
        if (ismaster.checked) {
            content = content + " " + "you have shose master card"
        } else if(isvisa.checked) {
            content = content + " " + "you have shose visa card"
        } else if(ispaypal.checked) {
            content = content + " " + "you have shose paypal agteway"
        } else {
            content = content + " " + "But you have shose a payment method "
            error_msg.style.backgroundColor = "red";

        }
        error_msg.innerHTML = content ; 
        
    } else {
        window.alert("first subscribe panra")
    }
}