 let nombrePhotocopies = document.querySelector("#number")
 let result = document.querySelector("#result")
 const bouton = document.querySelector("#bouton")

 const tarif1 = 0.10
 const tarif2 = 0.09
 const tarif3 = 0.08

var prix1 =  (tarif1 * nombrePhotocopies.value )
    var prix2 =  (tarif1 * 10) + (nombrePhotocopies.value  - 10) * tarif2
    var prix3 =  (tarif1 * 10) + (tarif2 * 20) + (nombrePhotocopies.value  - 30) * tarif3

bouton.addEventListener("click", function (e) {
    e.preventDefault()
    

    if (nombrePhotocopies.value <= 10){
        result.textContent = prix1
 }
 else if (10 < nombrePhotocopies.value <= 31){
    result.textContent = prix2
 }
 else {
    result.textContent = prix3
 }
})
 
 
 