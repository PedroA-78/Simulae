const questions = [
    {
        area: "matematica",
        subarea: "",
        ask: "Qual é o valor de x na equação: 2x + 6 = 14?",
        answers: [3, 4, 5, 6],
        correct: "B",
        explication: "2x + 6 = 14 → 2x = 8 → x = 4."
    },
    {
        area: "matematica",
        subarea: "",
        ask: "Se um pacote custa R$ 18,00 e há promoção de leve 3 e pague 2, quanto se paga por unidade comprando 3 pacotes?",
        answers: [9, 12, 6, 18],
        correct: "B",
        explication: "Paga-se R$ 36 por 3 pacotes → 36 ÷ 3 = 12, mas na promoção paga só R$ 36 ÷ 3 = R$ 12 cada."
    },
    {
        area: "matematica",
        subarea: "",
        ask: "Qual é a porcentagem de 30 em relação a 200?",
        answers: [10, 15, 20, 25],
        correct: "B",
        explication: "30 ÷ 200 = 0,15 = 15%."
    },
    {
        area: "matematica",
        subarea: "",
        ask: "Um número dividido por 4 resulta em 12. Qual é esse número?",
        answers: [36, 42, 48, 52],
        correct: "C",
        explication: "12 × 4 = 48"
    },
    {
        area: "matematica",
        subarea: "",
        ask: "Em uma receita, 2/3 de um copo de açúcar foi usado. Qual fração sobrou?",
        answers: ["1/3", "2/3", "3/4", "1/4"],
        correct: "A",
        explication: "3/3 - 2/3 = 1/3."
    }
];
const answers = new Array
let i = 0

function ask() {
    const question = document.querySelector('.question')

    question.innerHTML = `
        <h2 class="question_title"><span>Questão ${i + 1}: </span>${questions[i].ask}</h2>
        <div class="question_options">
            <label class="question_option">
                <input type="radio" name="option" ${setSelectedOption('A')}>
                <span>A)</span>
                ${questions[i].answers[0]}
            </label>

            <label class="question_option">
                <input type="radio" name="option" ${setSelectedOption('B')}>
                <span>B)</span>
                ${questions[i].answers[1]}
            </label>

            <label class="question_option">
                <input type="radio" name="option" ${setSelectedOption('C')}>
                <span>C)</span>
                ${questions[i].answers[2]}
            </label>

            <label class="question_option">
                <input type="radio" name="option" ${setSelectedOption('D')}>
                <span>D)</span>
                ${questions[i].answers[3]}
            </label>
        </div>
    `

    question.querySelectorAll('input[name="option"]').forEach((input, index) => {
        input.addEventListener('change', () => {
            const options = ['A', 'B', 'C', 'D']
            answers[i] = options[index]
        })
    })
}

function setSelectedOption(letter) {
    if (answers[i] == letter) return 'checked'
}

function setTriggers() {
    const triggers = document.querySelectorAll('[data-action]')
    triggers.forEach(trigger => {
        const action = trigger.dataset.action

        trigger.addEventListener('click', () => {
            if (action == 'next') {
                if (i < (questions.length - 1)) i++
                if (i == (questions.length - 1)) {
                    triggers.forEach(trigger => {if (trigger.dataset.action == 'finish') trigger.style.display = 'flex'})
                    trigger.classList.add('disable')
                    trigger.setAttribute('disabled', true)
                }
            } else if (action == 'prev') {
                if (i > 0) i--
                if (i < (questions.length - 1)) {
                    triggers.forEach(trigger => {
                        if (trigger.dataset.action == 'next') {
                            trigger.removeAttribute('disabled')
                            trigger.classList.remove('disable')
                        }
                    })
                    
                }
            } else if (action == 'finish') {
                storage()
                window.location.href = '/results.html'
                return
            }
            
            ask()
        })
    })
}

function storage() {
    const simulated = {
        questions: questions,
        answers: answers
    }

    localStorage.setItem('simulae_results', JSON.stringify(simulated))
}

function initSimulated() {
    i = 0
    setTriggers()
    ask()
}

initSimulated()