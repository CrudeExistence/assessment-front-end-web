

const colorButton = document.querySelector('#color')

const placeButton = document.querySelector('#place')

const ritualButton = document.querySelector('#ritual')

const colorFunc = (event) => {
    event.preventDefault()
    alert('Midnight Blue')
}

colorButton.addEventListener('click', colorFunc)

const placeFunc = (event) => {
    event.preventDefault()
    alert('Japan')
}

const ritualFunc = (event) => {
    event.preventDefault()
    alert('Ed......ward? \<\b\r\> jk, It\'s probably Rock climbing')
    //this break hadn't worked quite the way I wanted to it. If I have time I'll come back and correct it.
}

placeButton.addEventListener('click', placeFunc)

ritualButton.addEventListener('click', ritualFunc)

