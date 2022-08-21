/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const carsContainerEl = document.getElementById('output');

function carData(url) {
    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log('data ===', data);
            data.forEach(makeOneCarHtml); // creates all
        })
        .catch((err) => console.warn(err));
}

function makeOneCarHtml(carObj) {
    const divEl = document.createElement('div');
    divEl.className = 'post';
    divEl.innerHTML = `<h2>${carObj.brand}</h2>
    <h3>${carObj.models.join(', ')}</h3>`;
    carsContainerEl.appendChild(divEl);
    return divEl;
}

carData(ENDPOINT);
