/*

1- creare un array vuoto
2- creare un ciclo "for" (oppure "while") da ripetersi per sei volte
3- ogni volta che si ripete viene lanciato un prompt che chiede all'utente di inserire un numero qualsiasi
4- quando l'utente inserisce un numero quest'ultimo viene controllato
5- se il numero è dispari viene "pushato" nell'array (non divisibile per due?)

*/

const arrayNumbers = [];

for (let i = 0; i < 6; i++) {

    let numRequest = parseInt(prompt('inserisci un numero')); 
        console.log('numero inserito -->',numRequest);

    if (numRequest % 2) {
        arrayNumbers.push(numRequest)
        console.log('numeri dispari aggiunti in array',arrayNumbers);

    } 

}

if (arrayNumbers.length === 0) {
    document.getElementById('output').innerHTML = `
        There are no <em>magic</em> numbers! <i class="fa-solid fa-face-frown-open" style="color: #fcd703;"></i>
        <br>
        Try Again!
        <br>
        <img src="https://media.tenor.com/XpXsPDTXhYQAAAAC/math-numbers.gif" alt="numbers">
        `
} else {
    document.getElementById('output').innerHTML = `
        Here's your <em>magic</em> numbers: ${arrayNumbers}
        <br>
        Odd is Good, Odd is Better! <i class="fa-solid fa-face-grin-wink" style="color: #fcd703;"></i>
        <br>
        <img src="https://media.tenor.com/XpXsPDTXhYQAAAAC/math-numbers.gif" alt="numbers">
        `
}


// let i = 0

// while (i < 6) {
//     let numRequest = prompt('inserisci un numero', '25');
        
//         console.log('numero inserito -->',numRequest);

//         if (numRequest % 2) {
//             arrayNumbers.push(numRequest)
//             console.log('numeri dispari aggiunti in array',arrayNumbers);
    
//             document.getElementById('output').innerHTML = `
//             Here's your <em>magic</em> numbers: ${arrayNumbers}
//             <br>
//             Odd is Good, Odd is Better! <i class="fa-solid fa-face-grin-wink" style="color: #fcd703;"></i>
//             <br>
//             <img src="https://media.tenor.com/XpXsPDTXhYQAAAAC/math-numbers.gif" alt="numbers">
//             `
//         } 
//         // else 
//         //     document.getElementById('output').innerHTML = `
//         //     There are no <em>magic</em> numbers! <i class="fa-solid fa-face-frown-open" style="color: #fcd703;"></i>
//         //     <br>
//         //     Try Again!
//         //     <br>
//         //     <img src="https://media.tenor.com/XpXsPDTXhYQAAAAC/math-numbers.gif" alt="numbers">
//         //     `
//     i++
// }


