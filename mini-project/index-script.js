// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
        for (const user of users) {
            let divUser = document.createElement('div');
            divUser.innerText =`
                id: ${user.id}
                username: ${user.name} `
            let buttonElement = document.createElement('button');
            // 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
            buttonElement.innerHTML = '<a href="user-details.html">user-details</a>'
            let wrapper = document.getElementsByClassName('wrapper')[0];
            let wrap = document.createElement('div');
            wrap.classList.add('wrap');
            wrapper.appendChild(wrap);
            wrap.appendChild(divUser);
            wrap.appendChild(buttonElement);
            buttonElement.onclick = function () {
                localStorage.setItem('user', JSON.stringify(user))
            }
        }

    })
