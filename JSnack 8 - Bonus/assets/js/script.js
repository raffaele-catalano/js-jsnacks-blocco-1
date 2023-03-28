/*

1-

*/

const numeroInserito = prompt('Inserisci un numero di quattro cifre');

let sommaCifre = 0;

for (let i = 0; i < numeroInserito.length; i++) {
    const element = numeroInserito[i];
    // console.log(element);

    sommaCifre += parseInt(numeroInserito[i]);

    document.getElementById('output').innerHTML = `
    la somma delle cifre
    <br>
    che compongono
    <br>
    il numero inserito è = ${sommaCifre}
    `;
}

console.log('somma delle quattro cifre inserite -->',sommaCifre);