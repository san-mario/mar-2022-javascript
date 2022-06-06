fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        let postsJSON = localStorage.getItem('post');
        let selectedPost = JSON.parse(postsJSON);
        for (const post of posts) {
            if (selectedPost.title === post.title){
                for (const postKey in post) {
                    let htmlDivElement = document.createElement('div');
                    let p = document.createElement('p');
                    p.classList.add('items')
                    let info_div = document.getElementsByClassName('info')[0];
                    info_div.appendChild(p);
                    info_div.appendChild(htmlDivElement);
                    htmlDivElement.innerText = post[postKey];
                    p.innerText = postKey
                }
            }
        }
    })
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        let idForComment = localStorage.getItem('post');
        console.log(idForComment);
        let selectedIdForComment = JSON.parse(idForComment)
        for (const comment of comments) {
            if (comment['postId'] === selectedIdForComment.id) {
                let divComments = document.createElement('div');
                divComments.classList.add('comments-block');
                let wrap = document.getElementsByClassName('wrap')[0];
                wrap.append(divComments);
                divComments.innerText = comment.body;

            }
        }
    })