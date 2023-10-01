const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')
const modalBody = document.getElementById('modal-body')
const btnSaveModal = document.getElementById('buttonUnderstood')
const textSpan = document.getElementById('text-span')
const btnStatus = document.getElementById('btnStatus')

function cl (item) {
    console.log(item)
}



createBtn.onclick = function () {
    
    if (inputElement.value === '') {
        return
    }
    
    const noteObj = {
        title: inputElement.value,
        completed: false
    }
    notes.push(noteObj)
    render()
}

function note (note, indexNote) {
    listElement.insertAdjacentHTML('beforeend',
    `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span id="text-span" data-index="${indexNote}" class="${note.completed ? 'note-item' :''}">${note.title}</span>
        <span class="btnNote">
            <button class="btn btn-outline-secondary" data-type="toggle" data-index="${indexNote}" id="edit"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="button"><svg data-index="${indexNote}" data-type="toggle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
            <path data-index="${indexNote}" data-type="toggle" d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/>
            </svg></button>
            <button class="btn btn-outline-secondary" data-type="remove" data-index="${indexNote}" id="delete" type="button"><svg data-type="remove" data-index="${indexNote}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path data-index="${indexNote}" data-type="remove" d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
            <path data-index="${indexNote}" data-type="remove" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
          </svg></button>
        </span>
    </span>
    </li>`)
    inputElement.value = ''
}



const notes = [
    {
        title: 'Lorem ipsum dolor',
        completed: false
    },
    {
        title: 'unde, enim sunt  aut  eius.',
        completed: false
    },
    {
        title: 'facilis. Laboriosam, maxime modi',
        completed: true
    },
]

// cl(notes[0].title)

const render = function () {
    // for (let note of notes) {
    //     note(note)
    // }
    listElement.innerHTML = ''
    for (let i = 0; i < notes.length; i++) {
        note(notes[i], i) 
    }
}

render()

listElement.onclick = function (event) {

    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
        btnSaveModal.value = index
        cl(btnSaveModal.value)
        if (type === 'toggle') {
            modalBody.value = notes[index].title 
        } else if (type === 'remove') {
            cl('remove')
            notes.splice(index, 1)
        }
    }
    render()

    try {
        if (notes[btnSaveModal.value].completed) {
            btnStatus.textContent = 'Продолжить'
            btnStatus.style.backgroundColor = '#0d6efd';
        } else {
            btnStatus.textContent = 'Вычеркнуть'
            btnStatus.style.backgroundColor = 'rgb(4 175 0)';
        }
      } catch(e) {
    }

   
}


btnSaveModal.onclick = function () {

    notes[btnSaveModal.value].title = modalBody.value  
    render()
}

btnStatus.onclick = function () {
  
    notes[btnSaveModal.value].completed = !notes[btnSaveModal.value].completed
    render()

    // alert(btnStatus.textContent)
}
