let x = document.getElementById("projects");
let hire = document.getElementById("hire");
let phoneDiv = document.getElementById("phone-div");
let phone = document.getElementById("phone");
let projectPhoneDiv= document.getElementsByClassName("contact-icon-text");
let projectPhone = document.getElementsByClassName("fa-phone");
x.onmousemove = function () {
    hire.classList.remove("btn-primary");
    
}
x.onmouseout = function () {
    hire.classList.add("btn-primary");

}
phoneDiv.onmousemove = function () {
    phone.classList.add("fa-shake")
}
phoneDiv.onmouseout = function () {
    phone.classList.remove("fa-shake")
}
projectPhoneDiv.onmousemove = function () {
    projectPhone.classList.add("fa-shake")
}
projectPhoneDiv.onmouseout = function () {
    projectPhone.classList.remove("fa-shake")
}
