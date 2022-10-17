let Antho = document.querySelector("#Antho")
let Steve = document.querySelector("#Steve")
let Adriano = document.querySelector("#Adriano")
let Adam = document.querySelector("#Adam")
let bouton = document.querySelector("#bouton")
let resultat = document.querySelector("#resultat")
let candidat = document.getElementsByClassName("number")
let elimine = document.querySelector("#elimine")


bouton.addEventListener("click", function (e) {
    e.preventDefault()
if (candidat < 12.5){
    elimine.textContent = "le candidat est éliminé"
} 
else {
    if (Antho.value >= 50){
    resultat.textContent = "Antho a gagné"
} 

 

    else if (Antho.value < 50 && Antho.value > Steve.value && Antho.value > Adriano.value && Antho.value > Adam.value){
resultat.textContent = "Antho passe au second tour en ballotage favorable"
} 

    else {
    resultat.textContent = "Antho passe au second tour mais en ballotage défavorable"
}
}


})