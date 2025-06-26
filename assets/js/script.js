let alpha_tab = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// let stringLetters = "abcdefjhgfxwopdpojdfjpo"

// const arrayLetters = stringLetters.split('')

// alpha_tab.forEach(letter => 
//     document.getElementById('keyboard') += `
//     <div class="col-lg-1">
//     <button clas="btn btn-secondary w-100">${letter}</button>
//     </div>`
// ){

// }

const randomWords = [ "table","peripatheticien","pharmacien","tuyau","kayou","jesaispas"]
console.log(randomWords)

aleaWords = Math.floor(Math.random() * randomWords.length)


console.log("Le mot est : " + aleaWords)
document.getElementById("Word").innerText = aleaWords
