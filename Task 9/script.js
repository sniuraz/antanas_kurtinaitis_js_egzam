/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.pavadinimas = title;
        this.rezisierius = director;
        this.kaina = budget;
    }
    wasExpensive() {
        if (this.kaina > 100000000) {
            console.log(`${this.pav} was expensive to build:`, true);
        } else {
            console.log(`${this.pav} was expensive to build:`, false);
        }
    }
}

const movie1 = new Movie('pirmas', 'Antanas', 100000001);
const movie2 = new Movie('antras', 'Antanas', 90000034);

// pilna konstruktoriaus info
// console.log(movie1);
// console.log(movie2);

movie1.wasExpensive();
movie2.wasExpensive();
