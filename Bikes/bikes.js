// # Richiesta
//* Creare un array di oggetti:
//* Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//* Stampare a schermo la bici con peso minore.


// array di oggetti contenenti i dati delle bici
const bikes = [
    {nome: "Race", peso: 10,},
    {nome: "Endurance", peso: 15},
    {nome: "Aero", peso: 13},
    {nome: "Scott Addict RC", peso: 6},
    {nome: "Giant TCR Advanced SL", peso: 8}
];

console.table(bikes);

const theLightestBike = findLightestBike(bikes);
console.table(theLightestBike);

/**
 * Trova l'elemento più leggero dato un array di oggetti che al loro interno contengano almeno un  indice chiamato nome e un indice chiamato peso
 * 
 * @param {obeject} array un array di oggetti che contengano almeno un indice chiamato nome e un indice chiamato peso
 * @returns {object} restituisce un oggetto con i dati dell'elemento più leggero nell'array di oggetti dato
 */
function findLightestBike(array){
    
    // oggetto per salvare i dati della bici più leggera
    const lightestBike = {};

    // assumo che il primo elemento dell'array sia il più piccolo e lo salvo
    lightestBike.nome = array[0].nome;
    lightestBike.peso = array[0].peso;

    // controllo che sia stato salvato correttamente
    console.table(lightestBike);

    // scorro tutti gli elementi dell'array
    for(const currentEl of array){

        // condizione che aggiorna l'oggetto lightestBike solo quando trova un'elemento con un peso minore
        if (currentEl.peso < lightestBike.peso){
            lightestBike.nome = currentEl.nome;
            lightestBike.peso = currentEl.peso;
        }
    }
    

    return lightestBike;
}