let colors = ''
const colorPick = document.getElementById('color-pick')
const modePick = document.getElementById('dropdown-box')
let colorValue = colorPick.value.replace('#', '')
let modeValue = modePick.value

const setColors = ()=> {
    for (let i = 0; i < colors.length; i++) {
        document.getElementById(`hex-${i+2}`).textContent = colors[i].hex.value
        document.getElementById(`color-${i+2}`).style.background = colors[i].hex.value
    }
    console.log(colors)
}

const getData = () => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${modeValue}&count=4&format=json`)
    .then(res => res.json())
    .then(data => colors = data.colors)
}

colorPick.addEventListener('input', ()=> {
    colorValue = colorPick.value.replace('#', '')
    document.getElementById('hex-1').textContent = colorPick.value
    document.getElementById('color-1').style.background = colorPick.value
    colors = ''
    getData()
})

modePick.addEventListener('change', ()=> { 
    modeValue = modePick.value
    colors = ''
    getData()
}) 

document.getElementById('scheme-btn').addEventListener('click', ()=> {
    setColors()
})

const copyToClipboard = (id) => {
    const r = document.createRange()
    r.selectNode(document.getElementById(id))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(r)
    document.execCommand('copy')
    window.getSelection().removeAllRanges()
} 

for (let i = 0; i < 5; i++) {
    document.getElementById(`tooltiptext-${i+1}`).addEventListener('click', () => {
        copyToClipboard(`hex-${i+1}`)
    })
}
