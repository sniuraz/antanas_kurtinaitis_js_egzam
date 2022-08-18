/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

// taikomes
const btnEl = document.getElementById('btn__element');
const stateEl = document.getElementById('btn__state');
let count = document.getElementById('btn__state').childElementCount;

btnEl.addEventListener('click', (e) => {
    e.preventDefault();

    count += 1; // skaiciujam

    stateEl.innerHTML = count; // atvaizduojam
});
