// fetch('https://jsonplaceholder.typicode.com/users/3')
//   .then(response => {
//     if(!response.ok) {
//       throw new Error(response.status)
//     }
//     return response.json();
//   })
//   .then(data => console.log(`${data.username} works at ${data.company.name}`))
//   .catch(err => console.log(err))

  const response = fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then( response => response.json())
  .then( data => console.log(data));
