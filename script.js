const solveButton = document.querySelector('.solve')
const errorMessage = document.querySelector('.error__message')
const finalAnswer = document.querySelector('.answer')
const previewMath = document.querySelector('.preview')
const aSign = document.querySelector('.a__sign')
const bSign = document.querySelector('.b__sign')
const cSign = document.querySelector('.c__sign')
const aBox = document.querySelector('.a_box')
const bBox = document.querySelector('.b_box')
const cBox = document.querySelector('.c_box')
const card = document.querySelector('.math__details')
const rotate = () => {
    deg ++
    if (deg>=360){
        deg = 0
    }
    card.style.background = `linear-gradient(${deg}deg, rgb(0 139 63 / 89%), rgb(0 78 159 / 82%))`
}

// Gradient rotatio animation
var deg = 0
setInterval(rotate, 200)
// Toggle function for bSign
aSign.addEventListener('click', () =>{
    aSign.innerHTML == '+'
    ? aSign.innerHTML = '-'
    : aSign.innerHTML = '+'
})

// Toggle function for bSign
bSign.addEventListener('click', () =>{
    bSign.innerHTML == '+'
    ? bSign.innerHTML = '-'
    : bSign.innerHTML = '+'
})

// Toggle function for cSign
cSign.addEventListener('click', () =>{
    cSign.innerHTML == '+'
    ? cSign.innerHTML = '-'
    : cSign.innerHTML = '+'
})

solveButton.addEventListener('click', () => {
    let a = aBox.value
    let b = bBox.value
    let c = cBox.value
    let aS = aSign.innerHTML
    let bS = bSign.innerHTML
    let cS = cSign.innerHTML
    console.log(a,b,c)
    if (a===''||b===''||c===''){
        errorMessage.classList.remove('hidden')
    }
    else {
        errorMessage.classList.add('hidden')
        a = Number.parseInt(aS + a)
        b = Number.parseInt(bS + b)
        c = Number.parseInt(cS + c)
        previewMath.innerHTML = `${a}x<sup>2</sup> + ${b}x + ${c} `
        console.log(Math.sqrt((b**2)-(4*a*c)))
        let x1 = (-b+Math.sqrt((b**2)-(4*a*c)))/(2*a)
        let x2 = (-b-Math.sqrt((b**2)-(4*a*c)))/(2*a)
        if (isNaN(x1) || isNaN(x2)){
        finalAnswer.innerHTML = `x is imaginary(complex)`
        }
        else{
            finalAnswer.innerHTML = `x = <i>${x1.toPrecision(3)}</i>  or  x = <i>${x2.toPrecision(3)}</i>`
        }
    }
})
