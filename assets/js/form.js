const form = document.getElementById('form2')
const emaill = document.getElementById('email')
const passwordd = document.getElementById('password')
const namee = document.getElementById('name')

// form.addEventListener('submit', function (event) {
//     event.preventDefault()


    form.addEventListener('submit', function(event){
        event.preventDefault()

        axios.post(`https://65685e799927836bd974a707.mockapi.io/form`,{
            email: emaill.value,
            password: passwordd.value,
            name: namee.value
        })
            .then(res =>{
                console.log(res.data);
            })
    })