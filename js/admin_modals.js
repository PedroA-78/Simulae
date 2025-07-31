const print = console.log

function modalInit() {
    const triggers = document.querySelectorAll('[data-modal]')
    triggers.forEach(trigger => {
        const targetId = trigger.dataset.modal
        const targetModal = document.getElementById(targetId)
    
        trigger.addEventListener('click', () => {
            targetModal?.classList.add('active')
        })
    
        setupClose(targetModal)
    })
}

function setupClose(modal) {
    const cancel = modal.querySelector('.modal_submit .cancel')
    const overlay = modal.querySelector('.page_modal_overlay')

    const close = () => { modal.classList.remove('active') }

    cancel?.addEventListener('click', close)
    overlay?.addEventListener('click', close)
}

modalInit()