const btn = document.getElementById('btn')
const input = document.getElementById('input')
const p = document.getElementById('p')
const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const error = document.getElementById('error')



btn.addEventListener('click', () => {

    if (input.value.trim() === "") {
        p.classList.add('pshow')
        input.classList.add('inputerror')


    } else if (!check.test(input.value.trim())) {

        error.classList.add('showerror')

    } else {
        alert("sent");
    }
}
)
input.addEventListener('input', () => {

    if (input.value.trim() === "") {
        input.classList.add('inputerror')
    }
    else {


        p.classList.remove('pshow')
    }
    if (check.test(input.value.trim())) {
        error.classList.remove('showerror')
        input.classList.add('inputtrue')
    }
})
input.addEventListener('focus', () => {
    input.classList.add('scale')
})
input.addEventListener('blur', () => {
    input.classList.remove('scale')
})
