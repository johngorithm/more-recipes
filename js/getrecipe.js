const recipe = document.getElementById('getrecipe');
const baseUri = 'https://more-recipes.herokuapp.com/api/v1/recipes/:id';
const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo4OX0sImlhdCI6MTUzMDU0MDU0MiwiZXhwIjoxNTMwNTQ0MTQyfQ.BybBrjnSpAR4K1zOGLcT0UE-s_21OqB8NRYjTEuXw-s"

fetch(baseUri, {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
    token: token,
    id: `${id}`
  }
}).then((res) => res.json())
.then((data) => {
  console.log(data);
})