// # Richiesta
// *Creare un array di oggetti di squadre di calcio.
// *Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// *Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// *Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// *Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const soccerTeams = [
    {"nome squadra": "Milan", 'punti fatti': 0, 'falli subiti': 0},
    {"nome squadra": "Juventus", 'punti fatti': 0, 'falli subiti': 0},
    {"nome squadra": "Napoli", 'punti fatti': 0, 'falli subiti': 0},
    {"nome squadra": "Fiorentina", 'punti fatti': 0, 'falli subiti': 0},
    {"nome squadra": "Roma", 'punti fatti': 0, 'falli subiti': 0},
];

console.table(soccerTeams);



/**
 * dato un range genera un numero casuale contenuto nel range 
 * 
 * @param {number} min  il minimo del range
 * @param {number} max il massimo del range
 * @returns {number} numero generato
 */
function randomNumberGenerator(min,max) {return Math.floor(Math.random() * (max - min + 1) + min);} 
