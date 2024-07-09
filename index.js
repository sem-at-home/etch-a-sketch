const createButton = document.querySelector('#create-button')
createButton.addEventListener('click', handleCreateButton)

const container = document.querySelector('#container')
const divList = createXDiv(16)
divList.forEach(function(div) {container.appendChild(div)})

function createXDiv(count) {
    let divList = []
    for (i = 1; i <= count * count; i++) {
        const div = document.createElement("div")
        div.addEventListener('mouseover', handleHover)
        div.classList.add('square')
        div.style['flex-basis'] = `${100 / count}%`
        divList.push(div)
    }
    return divList
}

function handleCreateButton() {
    const sizeField = document.querySelector('#size')
    const size = Number(sizeField.value)
    console.log(size)
    if( size > 100 || size < 0 || isNaN(size)) {
        alert('Sorry, we expect a size as a number between 1 and 100.')
    } else {
    const container = document.querySelector('#container')
    container.replaceChildren(...createXDiv(size))
    }
}

function handleHover(event) {
    event.target.style.background = 'black'
}
