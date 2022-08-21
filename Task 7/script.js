/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
    make: 'audi',
    model: 'A6',
    year: 2005,
    color: 'white',
};

// testavimui pridetas darvienas automobilis
const bmw = {
    make: 'bmw',
    model: 'E27',
    year: 2015,
    color: 'red',
};

function showObjectKeys(arg) {
    const { make, model, year, color } = arg;
    console.log(`${make} ${model} ${year} ${color}`);
}

showObjectKeys(bmw);
