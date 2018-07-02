// const createUser = (element) =>{

// }

// const addons = (parent, el) => {

// }

//document.getElementById('signUpForm').addEventListener('submit', saveUser)


var url = 'https://more-recipes.herokuapp.com/api/v1/users/signup';


var fetchIssues = () => {

}



var btn = document.querySelector('#signUpBtn')
btn.addEventListener('click', saveUser)
function saveUser  (e)  {
    e.preventDefault();

    var fullname = document.getElementById('fullname').value;
    console.log(fullname)
    var email = document.getElementById('userEmail').value;
    console.log(email)
    var password = document.getElementById('userPassword').value;
    console.log(userPassword)

    let userDetail = {
        fullname: fullname,
        email: email,
        password: password
    }

    let fetchData = {
        method: 'POST',
        body:JSON.stringify({
            user: {
                fullname: fullname,
                email: email,
                password: password
        }}),
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-type': 'application/json',
          },
          
    }

    fetch(url, fetchData)
      .then((resp) => {
          console.log(resp)
          return resp.json()
        })
      .then((data) => {
          console.log(data)}
        ).catch((err) => {
            console.log(err)
        })

    document.getElementById('signUpForm').reset();

    fetchIssues()
    
}
 




// let data = {
//     fullname: document.getElementById('issues')
    
// }

// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => {
//       console.log(data)
//   })