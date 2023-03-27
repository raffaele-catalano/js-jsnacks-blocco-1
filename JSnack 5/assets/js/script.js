/*

1- creare un array vuoto
2- creare un ciclo "for" (oppure "while") da ripetersi per sei volte
3- ogni volta che si ripete viene lanciato un prompt che chiede all'utente di inserire un numero qualsiasi
4- quando l'utente inserisce un numero quest'ultimo viene controllato
5- se il numero è dispari viene "pushato" nell'array (non divisibile per due?)

*/

const arrayNumbers = [];

// let counter = 6;

    // console.log('numero inserito -->',numRequest);

for (let i = 0; i < 6; i++) {

    let numRequest = prompt('inserisci un numero');
        console.log('numero inserito -->',numRequest);

    if (numRequest % 2) {
        arrayNumbers.push(numRequest)
    }
}


// let i = 0

// while (i < 6) {
//     let numRequest = prompt('inserisci un numero', '25');
        
//         console.log('numero inserito -->',numRequest);

//     if (numRequest % 2) {
//         arrayNumbers.push(numRequest)
//     }

//     i++

// }

console.log('numeri salvati in array',arrayNumbers);

document.getElementById('output').innerHTML = `
Here's your <em>magic</em> numbers: ${arrayNumbers}
<br>
Odd is Good, Odd is Better! <i class="fa-solid fa-face-grin-wink" style="color: #fcd703;"></i>
<br>
<img src="https://media.tenor.com/XpXsPDTXhYQAAAAC/math-numbers.gif" alt="numbers">
`
