let homme = document.querySelector("#homme")
let femme = document.querySelector("#femme")
let age = document.querySelector("#age")
let bouton = document.querySelector("#bouton")
let impot = document.querySelector("#impot")

bouton.addEventListener("click", function (e) {
    e.preventDefault()

if (homme.checked && age.value > 20){
    impot.textContent = "paie impôt"
}
else if (femme.checked && 18 <= age.value && age.value <= 35){
impot.textContent = "paie impôt"
}
else {
impot.textContent = "paie pas impôt"
}

})