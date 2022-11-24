let btnModal = document.getElementById('openModal')
let modal = document.getElementById('modal')
let bgModal = document.getElementById('bg-modal')
let openModal = [btnModal,bgModal]


let toggleModal = () => {
    modal.classList.toggle('dpNone')
    bgModal.classList.toggle('dpNone')
}

openModal.map((val) => {
    val.addEventListener('click', () => toggleModal())
})