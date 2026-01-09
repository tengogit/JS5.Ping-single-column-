const btn = document.getElementById('btn')
const input = document.getElementById('input')
const p = document.getElementById('p')
const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const error = document.getElementById('error')



btn.addEventListener('click', () => {

    if (input.value.trim() === "") {
        p.classList.add('pshow')

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
        input.classList.remove('inputerror')
        input.classList.add('inputtrue')
        p.classList.remove('pshow')
    }
    if (check.test(input.value.trim())) {
        error.classList.remove('showerror')
    }
})
input.addEventListener('mouseleave', function () {
    this.blur()
})