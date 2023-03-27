/*

1- settare un array vuoto
2- settare un contatore
3- inizializzare un indice per un ciclo "while"
4- impostare il calcolo matematico delle potenze nel ciclo "while"
5- pushare il risultato 
6- stampare in pagina

*/

const arrayPotenze = [];

let counter = 0;

let risultato = 0;

while (risultato < 1000) {
    risultato = Math.pow(2, counter);

    if (risultato < 1000) {
        arrayPotenze.push(risultato);

        document.getElementById('output').innerHTML = arrayPotenze

        counter++
    }
}