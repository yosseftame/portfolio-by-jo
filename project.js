let phoneDiv = document.getElementById("phone-div");
let phone = document.getElementById("phone");
phoneDiv.onmousemove = function () {
    phone.classList.add("fa-shake")
}
phoneDiv.onmouseout = function () {
    phone.classList.remove("fa-shake")
}