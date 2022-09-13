const create = document.querySelector('.create')
const form = document.querySelector('.addForm')

const subb = () => {
    console.log('bıkbık')
}
function removeUser(id) {

}

let fetchApi = fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {

        data.map(element => {
            // console.log(element)

            let output = document.createElement('div')
            output.classList.add('box')


            let html = []
            html += `
            <div class="text">
                <button class="delete" id='${element.id}'";><i class="fa-solid fa-trash"></i></button>
                <div class="username">Username: ${element.username}</div>
                <div class="name">Fullname: ${element.name}</div>
                <div class="email">Mail: ${element.email}</div>
                <div class="address">Address: ${element.street} ${element.suite} ${element.city}</div>
                <div class="phone">Phone: ${element.phone}</div>
                <div class="company">Company : ${element.company.name}</div>

            </div>
    `
            output.innerHTML = html

            const container = document.querySelector('.container')

            container.appendChild(output)



            const selectButton = document.getElementById(element.id);

            selectButton.addEventListener("click", function () {
                removeUser(element.id)
                selectButton.parentElement.parentElement.remove()

            })
        })

    })


create.addEventListener('click', () => {
    const inputGroup = document.querySelector('.inputGroup')
    inputGroup.classList.toggle('active')
})


form.addEventListener('submit', function addElement(e) {
    e.preventDefault()
    let username = document.querySelector('#username').value
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let address = document.querySelector('#address').value
    let phone = document.querySelector('#phone').value
    let company = document.querySelector('#company').value



    let output = document.createElement('div')
    output.classList.add('box')


    let html = []
    let id = Math.floor(Math.random() * 100)
    html += `
            <div class="text">
            <button class="delete" id='${id}'";><i class="fa-solid fa-trash"></i></button>
                <div class="username">Username: ${username}</div>
                <div class="name">Fullname: ${name}</div>
                <div class="email">Mail: ${email}</div>
                <div class="address">Address: ${address}</div>
                <div class="phone">Phone: ${phone}</div>
                <div class="company">Company : ${company}</div>

            </div>

            
    `

    console.log(html)
    output.innerHTML = html

    const container = document.querySelector('.container')

    container.appendChild(output)



    const selectButton = document.getElementById(id);

    selectButton.addEventListener("click", function () {
        removeUser(id)
        selectButton.parentElement.parentElement.remove()
    })
})


