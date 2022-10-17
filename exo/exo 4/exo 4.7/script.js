let moinsAge = document.querySelector("#moins-age")
let plusAge = document.querySelector("#plus-age")

let moinsPermis = document.querySelector("#moins-permis")
let plusPermis = document.querySelector("#plus-permis")


let aucunAccident = document.querySelector("#aucun-accident")
let unAccident = document.querySelector("#un-accident")
let deuxAccidents = document.querySelector("#deux-accidents")
let plusAccidents = document.querySelector("#plus-accidents")

let moinsFidelite = document.querySelector("#moins-fidelite")
let plusFidelite = document.querySelector("#plus-fidelite")

let bouton = document.querySelector("#bouton")
let tarif = document.querySelector("#tarif")


bouton.addEventListener("click", function (e) {
    e.preventDefault()

    
// ============================ condition 1 ===================================== //


if (moinsAge.checked && moinsPermis.checked && aucunAccident.checked && moinsFidelite.checked){
    tarif.textContent = "Tarif rouge"
}

    else if (moinsAge.checked && moinsPermis.checked && aucunAccident.checked && plusFidelite.checked){
        tarif.textContent = "Tarif orange"
    }


// ============================ condition 1 ===================================== //


// ============================ condition 2 ===================================== //

            else if (moinsAge.checked && plusPermis.checked && aucunAccident.checked && moinsFidelite.checked){
                tarif.textContent = "Tarif orange"
            }

            else if (plusAge.checked && moinsPermis.checked && aucunAccident.checked && moinsFidelite.checked){
                tarif.textContent = "Tarif orange"
            }

            else if (moinsAge.checked && plusPermis.checked && unAccident.checked && moinsFidelite.checked){
                tarif.textContent = "Tarif rouge"
            }

            else if (plusAge.checked && moinsPermis.checked && unAccident.checked && moinsFidelite.checked){
                tarif.textContent = "Tarif rouge"
            }

                else if (moinsAge.checked && plusPermis.checked && aucunAccident.checked && plusFidelite.checked){
                    tarif.textContent = "Tarif vert"
                }

                else if (plusAge.checked && moinsPermis.checked && aucunAccident.checked && plusFidelite.checked){
                    tarif.textContent = "Tarif vert"
                }

                else if (moinsAge.checked && plusPermis.checked && unAccident.checked && plusFidelite.checked){
                    tarif.textContent = "Tarif orange"
                }

                else if (plusAge.checked && moinsPermis.checked && unAccident.checked && plusFidelite.checked){
                    tarif.textContent = "Tarif orange"
                }
            

// ============================ condition 2 ===================================== //


// ============================ condition 3 ===================================== //

else if (plusAge.checked && plusPermis.checked && aucunAccident.checked && moinsFidelite.checked) {
    tarif.textContent = "Tarif vert"
}

else if (plusAge.checked && plusPermis.checked && unAccident.checked && moinsFidelite.checked) {
    tarif.textContent = "Tarif orange"
}

else if (plusAge.checked && plusPermis.checked && deuxAccidents.checked && moinsFidelite.checked) {
    tarif.textContent = "Tarif rouge"
}

    else if (plusAge.checked && plusPermis.checked && aucunAccident.checked && plusFidelite.checked) {
        tarif.textContent = "Tarif bleu"
    }

    else if (plusAge.checked && plusPermis.checked && unAccident.checked && plusFidelite.checked) {
        tarif.textContent = "Tarif vert"
    }

    else if (plusAge.checked && plusPermis.checked && deuxAccidents.checked && plusFidelite.checked) {
        tarif.textContent = "Tarif orange"
    }

// ============================ condition 3 ===================================== //

            else {
                tarif.textContent = "Refusé"
            }

})