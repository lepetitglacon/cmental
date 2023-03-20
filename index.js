console.log('test')

const divN1 = document.getElementById('n1')
const divOp = document.getElementById('op')
const divN2 = document.getElementById('n2')
const divPoints = document.getElementById('points')
const form = document.getElementById('form')
const hiddenAnwser = document.getElementById('hidden-answer')
const anwser = document.getElementById('answer')
let lastOp = undefined
let points = 0

const operators = [
    {op: '+'},
    {op: '-'},
    {op: 'x'},
    //{op: '/'},
]
const random = () => {
        const n = Math.floor(Math.random() * operators.length)
        return Object.values(operators)[n];
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let correctAnswer = undefined
    if (lastOp !== undefined) {
        switch (lastOp.op) {
            case '+': correctAnswer = parseInt(divN1.innerText) + parseInt(divN2.innerText); break;
            case '-': correctAnswer = parseInt(divN1.innerText) - parseInt(divN2.innerText); break;
            case 'x': correctAnswer = parseInt(divN1.innerText) * parseInt(divN2.innerText); break;
            case '/': correctAnswer = parseInt(divN1.innerText) / parseInt(divN2.innerText); break;
        }
    }
    console.log('correct answer is : ' + correctAnswer)
    if (correctAnswer === parseInt(anwser.value)) {
        points++
        divPoints.innerText = points
    }
    reset()
})
function reset() {
    divN1.innerText = getRandomNumber()
    divN2.innerText = getRandomNumber()
    let op = random()
    divOp.innerText = op.op
    lastOp = op
    anwser.value = ''
}

reset()

function getRandomNumber() {
    return Math.ceil(Math.random() * 10)
}
