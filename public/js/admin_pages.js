
const triggers = document.querySelectorAll('[data-page]')
triggers.forEach(trigger => {
    const targetId = trigger.dataset.page
    const targetPage = document.getElementById(targetId)
    
    trigger.addEventListener('click', () => {
        closePages(triggers)
        targetPage?.classList.add('active')
        trigger.classList.add('active')
    })
})

function closePages(icons) {
    const close = (elem) => { elem.classList.remove('active') }
    const pages = document.querySelectorAll('.page')

    pages.forEach(page => { close(page) })
    icons.forEach(icon => { close(icon) })
}