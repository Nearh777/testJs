'use strict';



const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");


async function postDetailsFunc () {

    if (!postId) {
        return;
    };

    postFetch ();
    commentsFetch ();

};




// Fetch post

async function postFetch () {

    const postInfo = document.getElementById("post-info");
    const post = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)).json();

    postInfo.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    `;

};


// Fetch comments

async function commentsFetch () {

    const commentsContainer = document.getElementById("comments-container");
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)).json();


    comments.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment-card");
        commentDiv.innerHTML = `
            <p><strong>${comment.name}</strong></p>
            <p>${comment.body}</p>
            <p><em>${comment.email}</em></p>
        `;
        commentsContainer.appendChild(commentDiv);
    });
};




postDetailsFunc ();