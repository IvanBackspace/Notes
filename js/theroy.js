const inputElement = document.getElementById('title')
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

    getNoteTemplate(newNote)
    inputElement.value = '';
}

function getNoteTemplate(note, index) {
    console.log(note.completed)
    listElement.insertAdjacentHTML('beforeend',
        `<li>
            <span class="${note.completed ? 'text-crossed' : ''}">${note.title}</span>
            <span class="list-note">
                <span class="${note.completed ? 'warning' : 'success'}" data-index="${index}">&check;</span>
                <span>&times;</span>
            </span>
        </li>`
    )
}