// DEMO Numbers APP
import generateNumber from './generateNumber'
import './styles/main.scss'
import nums from './assets/nums.png'

const currentNumber = document.getElementById('number')

// image handled by webpack selection
const numsImg = document.getElementById('numsImg')
numsImg.src = nums

// button
const numsBtn = document.getElementById('numbtn')
numsBtn.addEventListener('click', ()=>{
    currentNumber.textContent = generateNumber()
})
currentNumber.textContent = generateNumber()

