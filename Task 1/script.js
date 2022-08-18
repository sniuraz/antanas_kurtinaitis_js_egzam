/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
// taikomes
const inputEl = document.getElementById('search');
const btnEl = document.getElementById('submit-btn');
const rezEl = document.getElementById('output');

btnEl.addEventListener('click', (e) => {
    e.preventDefault();

    // input console
    console.log(inputEl.value);

    unitsPrintToHtml(inputEl.value);
});

function unitsPrintToHtml(input) {
    // units
    const lb = input * 2.2046;
    const g = input / 0.001;
    const oz = input * 35.274;

    // result console
    console.log(`${lb} lb | ${g} g | ${oz} oz`);

    // print to html
    rezEl.innerHTML = `<p class="result">${lb} lb</p>
    <p class="result">${g} g</p>
    <p class="result">${oz} oz</p>`;
}
