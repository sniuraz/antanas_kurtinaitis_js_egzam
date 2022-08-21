/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const btnEl = document.getElementById('btn');
const pEl = document.getElementById('message');

const usersContainerEl = document.getElementById('output'); // hiden

btnEl.addEventListener('click', (e) => {
    e.preventDefault();

    usersData(ENDPOINT);

    btnEl.style.display = 'none';
    pEl.style.display = 'none';
});

function usersData(url) {
    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log('data ===', data);
            data.forEach(makeOneUserHtml); // creates all users list
        })
        .catch((err) => console.warn(err));
}

function makeOneUserHtml(userObj) {
    const divEl = document.createElement('div');
    divEl.className = 'post';
    divEl.innerHTML = `<img src="${userObj.avatar_url}" alt="avatar" />
     <h3>${userObj.login}</h3>`;
    usersContainerEl.appendChild(divEl);
    return divEl;
}
