const allRecipe = document.querySelector('.fetch-all-recipe');
const url = "https://more-recipes.herokuapp.com/api/v1";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo4Nn0sImlhdCI6MTUzMDU0MDIwMSwiZXhwIjoxNTMwNTQzODAxfQ.56aY7jgd7FXIHHVB5yaweFCt43OP27kd2dB3g4KJnJQ"
fetch(`${url}/recipes`, {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
        token: token,
      }
}).then((res) => {
    console.log(res.json().then((data) => allRecipe.innerHTML = data.recipes));
})
