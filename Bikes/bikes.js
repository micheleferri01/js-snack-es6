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

sortBikesByWeight(bikes);

function sortBikesByWeight(array){
    
    // variabile per salvare i dati della bici più leggera
    const ligthestBike = {};

    // assumo che il primo elemento dell'array sia il più piccolo e lo salvo
    ligthestBike.nome = array[0].nome;
    ligthestBike.peso = array[0].peso;

    // controllo che sia stato salvato correttamente
    console.table(ligthestBike);

    for(const currentEl of array){

    }
    

}