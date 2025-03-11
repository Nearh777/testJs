'use strict';



const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");


async function userInfoFunc () {
    if (!userId) return;

    userInfoFetch ();
    loadPostsBtn ();
};




// Fetch user details

async function userInfoFetch () {

    const userInfo = document.getElementById("user-info");
    const userFetch = await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json();

    userInfo.innerHTML = `
<h2>${userFetch.name}</h2>
<p><strong>ID:</strong>${userFetch.id}</p>
<p><strong>Username:</strong>${userFetch.username}</p>
<p><strong>Email:</strong> ${userFetch.email}</p>
<p><strong>Phone:</strong> ${userFetch.phone}</p>
<p><strong>Website:</strong> ${userFetch.website}</p>
<p><strong>Company:</strong> Name: ${userFetch.company.name}, catchPhrase: ${userFetch.company.catchPhrase}, Bs: ${userFetch.company.bs}</p>
<p><strong>Address:</strong> st. ${userFetch.address.street}, ${userFetch.address.suite}, ${userFetch.address.city}, ${userFetch.address.zipcode}</p>
<p><strong>Geo:</strong> Lat: ${userFetch.address.geo.lat}, Lng: ${userFetch.address.geo.lng}</p>
    `;
};




// Fetch user post

 function loadPostsBtn () {

    const postsContainer = document.getElementById("posts-container");
    const loadPostsButton = document.getElementById("load-posts");

     loadPostsButton.onclick = async () => {

         const posts = await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)).json();

         postsContainer.innerHTML = "";

         posts.forEach(post => {
             const postDiv = document.createElement("div");
             postDiv.classList.add("post-card");
             postDiv.innerHTML = `
                
                <p>${post.body}</p>
                <a href="post-details.html?id=${post.id}">View Post</a>
            `;
             postsContainer.appendChild(postDiv);
         });
     };
};



userInfoFunc();


