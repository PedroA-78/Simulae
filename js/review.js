const data = JSON.parse(localStorage.getItem('simulae_results'))
const review = document.querySelector('.review_questions')
const answers = data.answers
const questions = data.questions
let results = { hits: 0, misses: 0 }
let percentage = 0

function checkAnswers() {
    questions.forEach((question, index) => {
        if (question.correct == answers[index]) { results.hits++ }
        else { results.misses++ }
    })

    percentage = Math.round((results.hits / questions.length) * 100)
}

function getFeedback(number, elem) {
    const feedback = [
        'Não desanime! Com mais estudo e prática, você vai conseguir.',
        'Bom trabalho! Continue estudando para melhorar ainda mais.',
        'Excelente! Você está muito bem preparado!'
    ]

    if (number < 50) {
        elem.classList.add('bad')
        return feedback[0]
    } else if (number >= 50 && number < 80) {
        elem.classList.add('good')
        return feedback[1]
    } else {
        elem.classList.add('great')
        return feedback[2]
    }
}

function setScore() {
    const hits = document.querySelector('.results_question_hits p:last-child')
    const misses = document.querySelector('.results_question_misses p:last-child')
    const total = document.querySelector('.results_question_total p:last-child')
    const percentageContainer = document.querySelector('.results_percentage')
    const feedback = document.querySelector('.results_feedback h3')

    hits.textContent = results.hits
    misses.textContent = results.misses
    total.textContent = questions.length
    percentageContainer.querySelector('p').textContent = percentage + '%'
    percentageContainer.querySelector('div').setAttribute('style', `--percentage: ${percentage}%`)
    feedback.textContent = getFeedback(percentage, feedback)
}

function getAnswer(letter, index) {    
    const options = ['A', 'B', 'C', 'D']
    const isAnswered = typeof letter !== 'object' && typeof letter !== 'undefined'
    
    if (isAnswered) {
        const answer = questions[index].answers[options.indexOf(letter)]
        return `<span>${letter}) ${answer}</span>`
    }

    return `<span>Não respondida</span>`
}

function setIcon(question, index) {
    const answer = question == answers[index]

    let icon = {
        class: answer ? 'correct' : 'incorrect',
        text: answer ? 'Correto' : 'Incorreto',
        icon: answer ? 'check_circle' : 'cancel'
    }

    return icon    
}

function setQuestions() {
    review.innerHTML = ''
    questions.forEach((question, index) => {
        let icon = setIcon(question.correct, index)
        review.innerHTML += `
            <div class="review_question">
                <h3 class="review_question_title"><span>Questão ${index + 1}:</span> ${question.ask}</h3>
                <div class="review_icon ${icon.class}"><span class="material-symbols-outlined">${icon.icon}</span> ${icon.text}</div>
                <div class="review_question_answers">
                    <p class="${question.correct == 'A' ? 'correct' : ''}">A) ${question.answers[0]}</p>
                    <p class="${question.correct == 'B' ? 'correct' : ''}">B) ${question.answers[1]}</p>
                    <p class="${question.correct == 'C' ? 'correct' : ''}">C) ${question.answers[2]}</p>
                    <p class="${question.correct == 'D' ? 'correct' : ''}">D) ${question.answers[3]}</p>
                </div>
                <div class="review_question_answer">
                    <p class="${question.correct == answers[index] ? 'correct' : ''}">Sua resposta: ${getAnswer(answers[index], index)}</p>
                    <p>Resposta correta: ${getAnswer(question.correct, index)}</p>
                </div>
                <div class="review_question_explication">
                    <h4 class="review_question_explication_title">Explicação:</h4>
                    <p class="review_question_explication_text">${question.explication}</p>
                </div>
            </div>
        `
    })
}

window.addEventListener('DOMContentLoaded', () => {
    if (window.location.href.indexOf('resultados') != -1) {
        checkAnswers()
        setScore()
    }

    if (window.location.href.indexOf('respostas') != -1) {
        setQuestions()
    }
})


