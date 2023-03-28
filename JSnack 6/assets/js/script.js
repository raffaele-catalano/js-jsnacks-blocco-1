/*

1- predisporre un array vuoto
2- chiedere all'utente di inserire un numero
3- in base al numero inserito dall'utente stampare in pagina il cubo di ogni singolo numero che compone l'intervallo numerico da 0 fino al numero inserito
4- utilizzare a tale scopo un ciclo "while"




*/

const arrayCubi = [];

let numeroInserito = parseInt(prompt('Inserisci un numero'));

let counterNum = 1;

while (counterNum <= numeroInserito) {
    // let cuboProdotto = Math.cube(counterNum)
    let cuboProdotto = (counterNum * counterNum * counterNum);
    arrayCubi.push(cuboProdotto);

    document.getElementById('output').innerHTML = arrayCubi;
    counterNum++
}
