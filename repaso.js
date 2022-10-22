const image = document.getElementById('imagen')
const boton = document.getElementById('boton')
const input = document.getElementById('input')
const input2 = document.getElementById('input2')
const divFantasma1 = document.getElementById('cajoncito1')
const divFantasma2 = document.getElementById('cajoncito2')
const divFantasma3 = document.getElementById('cajoncito3')
const cajoncito4 = document.getElementById('cajoncito4')

let variable = true

boton.addEventListener('mouseover', () => {
    image.src = 'https://getbootstrap.com/docs/5.2/assets/img/vite.svg'
})

boton.addEventListener('mouseleave', function () {
    image.src = 'https://getbootstrap.com/docs/5.2/assets/img/webpack.svg'
})

boton.addEventListener('click', () => {

    if (input.value === '') {
        cajoncito4.classList.remove('d-none')
    }

    divFantasma1.innerText = input.value
    divFantasma2.innerText = input2.value
    divFantasma3.innerText = input.value
})

