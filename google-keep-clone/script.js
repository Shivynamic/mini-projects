const addButton = document.querySelector('#add')

const updateLSD = () =>{
    const textAreaData = document.querySelectorAll('textArea');
    const notes = [];
    
    textAreaData.forEach((note)=>{
        return notes.push(note.value);
    });
    
    localStorage.setItem('notes',JSON.stringify(notes));

}

const addNewNote = (text = '')=>{
    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData=`<div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>

</div>
<div class="main ${ text ? "" : "hidden" }"></div>
<textArea class="${text ? "hidden" : "" }"></textArea> `;

note.insertAdjacentHTML('afterbegin',htmlData);


const editButton = note.querySelector('.edit');
const delButton = note.querySelector('.delete');
const mainDiv = note.querySelector('.main');
const textArea = note.querySelector('textArea');


delButton.addEventListener('click',()=>{
    note.remove();
    updateLSD();
});

textArea.value = text;
mainDiv.innerHTML = text;


editButton.addEventListener('click',()=>{
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
});

textArea.addEventListener('change',(event) =>{
    const value = event.target.value;
    mainDiv.innerHTML = value;


    updateLSD();
});


// If there is already data present then we can show it in textArea and mainDiv by below code
textArea.value = text;
mainDiv.innerHTML = text;

document.body.appendChild(note)

}


const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){
    notes.forEach((note)=> addNewNote(note))
};

addButton.addEventListener('click',()=> addNewNote() );