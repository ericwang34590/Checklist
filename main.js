const array = ["Amira", "Baylee", "Briana", "Chelsea", "Cristian", "Danny", "Eric", "Jack", "Kenneth", "Lilly", "Reid", "Spencer", "Zane"];

document.addEventListener('DOMContentLoaded', function() {

    for (let i = 0; i < array.length; i++) {
        
        let main_div = document.createElement('div');
        main_div.className = 'main';

        let div = document.createElement('div');
        div.className = 'content';
        div.textContent = array[i];

        main_div.appendChild(div);

        if (localStorage.getItem(array[i]) === "true") {
            main_div.classList.add('present');
        } else {
            main_div.classList.remove('present');
        }
        main_div.addEventListener('click', () => toggle(main_div));

        document.querySelector('#main').appendChild(main_div);
    }

    document.querySelector('#enable').addEventListener('click', () => all('enable'));
    document.querySelector('#disable').addEventListener('click', () => all('disable'));
})

function toggle(div) {
    div.classList.toggle('present');

    let name = div.textContent;

    if (localStorage.getItem(name) === "false") {
        localStorage.setItem(name, "true");
    } else {
        localStorage.setItem(name, "false")
    }   
}

function all(action) {

    let divs = document.querySelectorAll('.main')

    if (action === 'enable') {
        for (let i = 0; i < array.length; i++) {
            localStorage.setItem(array[i], "true");
            divs.forEach(div => {
                div.classList.add('present');
            })
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            localStorage.setItem(array[i], "false");
            divs.forEach(div => {
                div.classList.remove('present');
            })
        }
    }
}
