const create = document.querySelector('.create')
const form = document.querySelector('.addForm')
let editItem = document.querySelector('.edit')
const inputGroup = document.querySelector('.inputGroup')
const editButton = document.querySelector('#edit')

//.input value


let username = document.querySelector('#username').value
let name = document.querySelector('#name').value
let email = document.querySelector('#email').value
let address = document.querySelector('#address').value
let phone = document.querySelector('#phone').value
let company = document.querySelector('#company').value




create.addEventListener('click', () => {

    inputGroup.classList.toggle('active')

})

function removeUser(id) {

}


//.API

let fetchApi = fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {

        data.map(element => {


            let output = document.createElement('div')
            output.classList.add('box')


            let html = []
            html += `
            <div id='box_${element.id}' class="text">
                <button class="delete" id='${element.id}';><i class="fa-solid fa-trash"></i></button>
                <div class="username">Username: <span data-username="username">${element.username}</span></div>
                <div class="name" >Fullname: <span data-fullname="fullname"> ${element.name}</span></div>
                <div class="email">Mail: <span data-email="email">${element.email}</span></div>
                <div class="address">Address: <span data-address="address"> ${element.address.city} ${element.address.suite} ${element.address.city}</span></div>
                <div class="phone">Phone: <span data-phone="phone">${element.phone}</span></div>
                <div class="company">Company: <span data-company="company"> ${element.company.name}</span></div>
                <div class="edit" data-editId='${element.id}' ><i class="fa-solid fa-pen"></i></div>

            </div>
    `

            //id yi aldın
            // box_id'ye erişip o boxa erişceksin, o boxun içinden de inpujtlara erişeceksin 

            output.innerHTML = html

            const container = document.querySelector('.container')

            container.appendChild(output)

            const selectButton = document.getElementById(element.id);

            selectButton.addEventListener("click", function () {

                selectButton.parentElement.parentElement.remove()

            })

        })

    })








//. ADD SUBMIT

form.addEventListener('submit', function addElement(e) {
    let username = document.querySelector('#username').value
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let address = document.querySelector('#address').value
    let phone = document.querySelector('#phone').value
    let company = document.querySelector('#company').value


    e.preventDefault()


    let output = document.createElement('div')
    output.classList.add('box')


    let html = []
    let id = Math.floor(Math.random() * 100)
    html += `
            <div id='box_${id}' class="text">
                <button class="delete" id='${id}';><i class="fa-solid fa-trash"></i></button>
                <div class="username">Username: <span data-username="username">${username}</span></div>
                <div class="name" >Fullname: <span data-fullname="fullname"> ${name}</span></div>
                <div class="email">Mail: <span data-email="email">${email}</span></div>
                <div class="address">Address: <span data-address="address"> ${address}</span></div>
                <div class="phone">Phone: <span data-phone="phone">${phone}</span></div>
                <div class="company">Company: <span data-company="company"> ${company.name}</span></div>
                <div class="edit" data-editId='${id}' ><i class="fa-solid fa-pen"></i></div>

            </div>
    `


    console.log(html)
    output.innerHTML = html
    const container = document.querySelector('.container')

    container.appendChild(output)


    inputGroup.classList.remove('active')





    ///delete 

    const selectButton = document.getElementById(id);

    selectButton.addEventListener("click", function () {
        removeUser(id)
        selectButton.parentElement.parentElement.remove()

    })

})









//task
/**
UPDATE YAPILACAK

There will be an edit button on card maybe with pen icon, on that button you should use id in a way forexample data-id = id

When user click that edit button, you are gooing to take that id

With that id, forexample 5, you are going to find box by getelementbyid box-5

when you access box, you can access all inputs

kaleme basınca id ile box'a boxtan da tek tek inputlara id ile erişip, ekleme formundaki ilgili inputların value'sunu tıklanana box a göre doldur

ekleme formunu kullan, oraya bi güncelle butonu koy




 */








// //. *************************************************************************
// //.                            EDİT                                         *
// //. *************************************************************************



document.querySelector('#name').value
document.querySelector('#email').value
document.querySelector('#address').value
document.querySelector('#phone').value
document.querySelector('#company').value


let selectedBoxId;


setTimeout(() => {
    const allEditButtons = document.querySelectorAll(".edit");

    allEditButtons.forEach(singleButton => {
        singleButton.addEventListener('click', function upItem() {

            inputGroup.classList.toggle('active')

            var editId = singleButton.getAttribute('data-editid') // idyui aldın

            let targetBox = singleButton.parentElement.getAttribute('id')

            selectedBoxId = targetBox;


            // alert(selectedBoxId)

            let boxAcc = document.querySelector(`#${targetBox}`) //. kutuya erişim


            //kutudan verileri aldın
            let username = boxAcc.querySelector('[data-username]').textContent
            let fullname = boxAcc.querySelector('[data-fullname]').textContent
            let email = boxAcc.querySelector('[data-email]').textContent
            let address = boxAcc.querySelector('[data-address]').textContent
            let phone = boxAcc.querySelector('[data-phone]').textContent
            let company = boxAcc.querySelector('[data-company]').textContent


            //forma verileri bastın
            document.querySelector('#username').value = username
            document.querySelector('#name').value = fullname
            document.querySelector('#email').value = email
            document.querySelector('#address').value = address
            document.querySelector('#phone').value = phone
            document.querySelector('#company').value = company

            console.log(username, fullname, email, address, phone, company);
        })
    });


    //edit butonuna basınca form verilerinin value'larını 


    editButton.addEventListener('click', function editleGari() {
        // selectedBoxId

        document.querySelector(`#${selectedBoxId}`).querySelector('[data-username="username"]').innerText = document.querySelector('#username').value
        document.querySelector(`#${selectedBoxId}`).querySelector('[data-fullname="fullname"]').innerText = document.querySelector('#name').value
        document.querySelector(`#${selectedBoxId}`).querySelector('[data-email="email"]').innerText = document.querySelector('#email').value
        document.querySelector(`#${selectedBoxId}`).querySelector('[data-address="address"]').innerText = document.querySelector('#address').value
        document.querySelector(`#${selectedBoxId}`).querySelector('[data-phone="phone"]').innerText = document.querySelector('#phone').value
        document.querySelector(`#${selectedBoxId}`).querySelector('[data-company="company"]').innerText = document.querySelector('#company').value

        inputGroup.classList.remove('active')

    })


}, 2000);



