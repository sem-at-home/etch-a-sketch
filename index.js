const container = document.querySelector('#container')
append256Div(container)

function append256Div(element) {
    for (i = 1; i <= 256; i++) {
        const div = document.createElement("div")
        div.classList.add('square')
        element.appendChild(div)
    }
}
