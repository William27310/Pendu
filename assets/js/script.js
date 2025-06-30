// let alpha_tab = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// let stringLetters = "abcdefjhgfxwopdpojdfjpo"

// const arrayLetters = stringLetters.split('')

// alpha_tab.forEach(letter => 
//     document.getElementById('keyboard') += `
//     <div class="col-lg-1">
//     <button clas="btn btn-secondary w-100">${letter}</button>
//     </div>`
// ){

// }

let randomWords = [ "table","peripatheticien","pharmacien","tuyau","kayou","jesaispas"]
console.log(randomWords)

aleaWords = randomWords[Math.floor(Math.random() * randomWords.length)]

let word = aleaWords

console.log(aleaWords)
// console.log("Le mot est : " + aleaWords)
// document.getElementById("Word").innerText = aleaWords

for (let i = 0; i < aleaWords.length ; i++) {
    document.getElementById("guessWord").innerHTML += `
    <div id="letter-${i}" class="letter mx-1"> _ </div>
    `
}


function guessLetter(letter) {
    for (let index = 0; index < word.length; index++ ) {
        if (word[index] == letter.toLowerCase()) {
            document.getElementById(`letter-${index}`).innerText = letter
        }
    }
}