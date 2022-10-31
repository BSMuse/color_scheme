const colors = []
const colorPick = document.getElementById('color-pick')
const modePick = document.getElementById('dropdown-box')
let colorValue = colorPick.value.replace('#', '')
let modeValue = modePick.value

document.getElementById('scheme-btn').addEventListener('click', ()=> {
    console.log(modeValue)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${modeValue}&count=4&format=json`)
    .then(res => res.json())
    .then(data => console.log(data.colors))
})

colorPick.addEventListener('input', ()=> colorValue = colorPick.value.replace('#', ''))

modePick.addEventListener('change', ()=> modeValue = modePick.value) 

// https://www.thecolorapi.com/scheme?hex=4a8830&mode=Monochrome-dark&count=4&format=json

// `https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${modeValue}&count=4&format=json`