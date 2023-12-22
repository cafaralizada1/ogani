const input = document.getElementById('inp')
const button = document.getElementById('btnSearch')
const qutu = document.getElementById('card')

function getSearch(){
    axios.get('https://65685e799927836bd974a707.mockapi.io/products')
    .then(res => {
        db = res.data
        const filterData = db.filter(item => item.title.toLowerCase().startsWith(input.value.toLowerCase()))
        filterData.map(item => {
            const box = document.createElement('div');
            box.className ="cardList"
            box.innerHTML = `
            <img src="${item.image}" alt="photo">
            <h1>${item.title}</h1>
            <p>$ ${item.price}</p>
        `
        qutu.appendChild(box)
        })
    })
}
button.addEventListener('click',getSearch)