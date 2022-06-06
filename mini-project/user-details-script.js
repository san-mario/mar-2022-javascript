// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
let userJSON = localStorage.getItem('user');
let selectedUSer = JSON.parse(userJSON);
let htmlPElementId = document.createElement('p');
let htmlDivElementName = document.createElement('p');
let htmlDivElementUsernameEmail = document.createElement('div');
let htmlDivElementAddress = document.createElement('div');
let htmlDivElementCompany = document.createElement('div');
document.body.append(htmlPElementId, htmlDivElementName, htmlDivElementUsernameEmail, htmlDivElementAddress, htmlDivElementCompany)
htmlPElementId.innerHTML = "<b>" + "id:" + '</b> ' + selectedUSer.id
htmlDivElementName.innerText = selectedUSer.name
htmlDivElementUsernameEmail.innerHTML = selectedUSer.username + "<br>" + selectedUSer.email
htmlDivElementAddress.innerHTML = 'address street: ' + selectedUSer.address.street + "<br>" + 'suite: ' + selectedUSer.address.suite + "<br>" + 'city: ' + selectedUSer.address.city + "<br>" + 'zipcode: ' + selectedUSer.address.zipcode + "<br>" + 'geo: ' + selectedUSer.address.geo.lat + ', ' + selectedUSer.address.geo.lng
htmlDivElementCompany.innerHTML = selectedUSer.company.bs + " " + "<br>" + " catchPhrase: " + selectedUSer.company.catchPhrase + "<br>" + " company name: " + selectedUSer.company.name

// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
let postOfCurrentUserButton = document.createElement('button');
postOfCurrentUserButton.innerText = 'post of current user';
postOfCurrentUserButton.classList.add('postOfCurrentUserButton');
document.body.appendChild(postOfCurrentUserButton);


let wrapper = document.createElement('div');
wrapper.classList.add('wrapper')
document.body.appendChild(wrapper);


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        postOfCurrentUserButton.onclick = function () {
            this.onclick = null
            for (const post of posts) {
                if (post.userId === selectedUSer.id) {
                    let divElement = document.createElement('div');
                    divElement.style.height = '150px'
                    // 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
                    let post_details_button = document.createElement('button');
                    post_details_button.innerHTML = '<a href="post-details.html">post-details</a>';


                    let wrap = document.createElement('div');
                    wrap.classList.add('wrap');
                    wrapper.append(wrap);


                    post_details_button.onclick = function (e) {
                        localStorage.setItem('post', JSON.stringify(post))
                    }

                    wrap.append(divElement);
                    wrap.append(post_details_button);
                    divElement.innerText = post.title
                }
            }

        }
    })