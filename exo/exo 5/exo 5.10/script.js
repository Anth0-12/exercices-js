function factorielle(nombre) {
	let total = 1;
  //je calcule ma factorielle
	for (let i = 1; i <= nombre; i++) {
		total = total * i; // calcul masqué pour l'utilisateur
		// 	total *= i; // version raccourcie
	}
	//une fois le résultat obtenu, je dois renvoyer le resultat au reste du code
	return total;
}

let chevauxPartant = parseInt(prompt("entrez un nombre de chevaux"))
let chevauxJoué = parseInt(prompt("combien de chevaux voulez vous jouer?"))
let factPartant = factorielle(chevauxPartant)
let factJoué = factorielle(chevauxJoué)
let factSoustraction = factorielle(chevauxPartant - chevauxJoué)
let x = factPartant / factSoustraction
let y = factPartant / (factJoué * factSoustraction)

alert(`Tu as 1 chance sur ${x} de gagner dans l'ordre et une chance sur ${y} de gagner dans le désordre`)