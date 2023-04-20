let form = document.forms.submit
let inputs = form.querySelectorAll('input')

form.onsubmit = (event) => {
    event.preventDefault()

    let erors = ''

    inputs.forEach((input) => {
        input.style.border = '5px solid blue'
        if(input.value.length === 0) {
            input.style.border = '5px solid red'
            erors += ` ${input.name}`
        }
    })

    if(!erors) {
        submit()
    } else {
        alert(`У вас не заполнено поле${erors}`)
    }
}

function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}