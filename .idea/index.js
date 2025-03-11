'use strict';



 async function user() {
     const usersFetch = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();


     const container = document.getElementById("users-container");
     usersFetch.forEach(user => {
         const userDiv = document.createElement('div');
         userDiv.classList.add('user-card');
         userDiv.innerHTML = `
         <p><strong>ID:</strong> ${user.id}</p>
         <h3> ${user.name}</h3>
          <a href="user-details.html?id=${user.id}">View Details</a>
         `;

         container.appendChild(userDiv);
     });

 };

  user();