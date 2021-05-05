const btn = document.getElementById('button');
const content = document.querySelector('#contenido');
const span = document.getElementById('span');
const alert = document.querySelector('.alert')
let con = 0;

function traer() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results[0]);
            content.innerHTML =
                `<p class="my-5">${data.results[0].name.first}</p>
                <img class="rounded-full" src="${data.results[0].picture.large}">
                <p class="my-3"> Cell: ${data.results[0].cell}</p > `
        })
}


const contador = () => {
    setTimeout(() => {
        con++;
        span.textContent = con;

        if (con > 15) {
            alert.classList.remove('hidden');
        }
    }, 300)
}


btn.addEventListener('click', traer);
btn.addEventListener('click', contador);
