const inputElement = document.getElementById('formGroupExampleInput')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

const array = ['Прочитать 10 страниц', 'Выучить стих', 'Учить js', 'Сходить в банк', 'Сходить к приставу']

/*function notes() {
    for (let notes of array) {
        getNoteTemplate(notes)
    }
}

notes()

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }

    getNoteTemplate(inputElement.value)
    inputElement.value = '';
}

function getNoteTemplate(note) {
    listElement.insertAdjacentHTML('beforeend',
        `<li>
            <span>${note}</span>
            <span class="list-note">
                <span>&check;</span>
                <span>&times;</span>
            </span>
        </li>`
    )
}*/


/*const person = {
    firstName: 'Ivan',
    lastName: 'Andreev',
    year: 1991,
    hasGirlfriends: true,
    languahes: ['ru', 'en', 'de'],
    gettFullName: function () {
        console.log(person.hasGirlfriends)
    }
}*/

const notes = [
    {
        title: 'Прочитать 10 страниц',
        completed: true
    },
    {
        title: 'Выучить стих',
        completed: false
    },
    {
        title: 'Учить js',
        completed: true
    },
    {
        title: 'Сходить в банк',
        completed: false
    },
    {
        title: 'Сходить к приставу',
        completed: false
    }
]

function render() {
    // for (let note of notes) {
    //     getNoteTemplate(note)
    // }

    listElement.innerHTML = ''

    for (let i = 0; i < notes.length; i++) {
        getNoteTemplate(notes[i], i)
    }
}

render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }

    const newNote = {
        title: inputElement.value,
        completed: false
    }

    notes.push(newNote)
    render()
    inputElement.value = '';
}

listElement.onclick = function (event) {

    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index) 
        const type = event.target.dataset.type

        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }
    }
    render()
}

function getNoteTemplate(note, index) {

    listElement.insertAdjacentHTML('beforeend',
        `<li>
            <span class="${note.completed ? 'text-crossed' : ''} text-span">${note.title}</span>
            <span class="list-note">
                <span class="${note.completed ? 'warning' : 'success'} btn btn-primary me-md-2" data-index="${index}" data-type="toggle">&check;</span>
                <span class="btn btn-primary" data-index="${index}" data-type="remove">&times;</span><br>
            </span><br>
        </li>`
    )
} 
