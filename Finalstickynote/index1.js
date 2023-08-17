

function addNote() {

  const container = document.querySelector('.container');
  const stickyNote = document.createElement('new-note');
  stickyNote.classList.add('sticky-note');

  const icons = document.createElement('new-node');
  icons.classList.add('icons');

  const noteText = document.createElement('textarea');
  noteText.classList.add('note-text');
  noteText.placeholder = 'Write your note here...';
  
  const updateIcon = document .createElement('i');
  updateIcon.classList.add('bi','bi-bookmark-check','update-icon');

  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('bi', 'bi-x-circle-fill', 'delete-icon');

  const saveIcon = document.createElement('i');
  saveIcon.classList.add('bi', 'bi-bookmark-check-fill', 'save-icon');
 
  const editIcon = document.createElement('i');
  editIcon.classList.add('bi', 'bi-pen', 'edit-icon');

  deleteIcon.addEventListener('click', () => { 
  if (confirm('Are you sure')) {
    container.removeChild(stickyNote);
  }
  });

  updateIcon.addEventListener('click',() => {
    alert('no text...')
    // updateText(noteText);
  })

  saveIcon.addEventListener('click', () => {
    saveText(noteText);
  });

  editIcon.addEventListener('click', () => {
    editText(noteText);
  });

  icons.appendChild(updateIcon);
  icons.appendChild(saveIcon);
  icons.appendChild(editIcon);
  icons.appendChild(deleteIcon);
  
  stickyNote.appendChild(icons);
  stickyNote.appendChild(noteText);
  container.appendChild(stickyNote);
}

 function deleteNoteInFirebase(key) {
  const url = `https://sticky-note-sk-default-rtdb.firebaseio.com/add/${key}.json`; 
  console.log(url);
   fetch(url,{
    method: 'DELETE',
  })
  .then(response => {
    console.log("res",response);
    if (response.ok) {
      console.log(`Note with ID ${key} deleted successfully from Firebase.`);
    } 
    else {
      console.error(`Failed to delete note with ID ${key} from Firebase.`);
    }
  })
  .catch(error => {
    console.log(error);
    console.error('Error deleting note from Firebase:', error);
  });
}

function updateText(key,textArea){
  const jsonData = {
    content: textArea.value
  };
  const url = `https://sticky-note-sk-default-rtdb.firebaseio.com/add/${key}.json`;
  fetch(url, {
    method: 'PUT',
    body: JSON.stringify(jsonData)
  })
  .then(response => {
    if (response.ok) {
      console.log(`Note with ID ${key} updated successfully in Firebase.`);
    } else {
      console.error(`Failed to update note with ID ${key} in Firebase.`);
    }
  })
  .catch(error => {
    console.error('Error updating note in Firebase:', error);
  });

}

function saveText(textArea){  

  const jsonData = {
    content:textArea.value
  }
  const url = `https://sticky-note-sk-default-rtdb.firebaseio.com/add.json`;
  console.log(url);
  fetch(url,{
    method:'POST',
    body: JSON.stringify(jsonData)
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Data Stored successfully:',data);
  })
  .catch(error =>{
    console.error('Error Stored data:',error)
  });  
}

function editText(noteText){
    noteText.readOnly = false; // Make editable
    noteText.focus(); // Focus the textarea for editing
  } 

function createNoteElement(key,content){
  const container = document.querySelector('.container');
  const stickyNote = document.createElement('new-note');
  stickyNote.classList.add('sticky-note');

  stickyNote.setAttribute('id',key)

  const icons = document.createElement('new-node');
  icons.classList.add('icons');

  const noteText = document.createElement('textarea');
  noteText.classList.add('note-text');
  noteText.placeholder = 'Write your note here...';
  noteText.value = content;
  noteText.readOnly = true;

  const updateIcon = document .createElement('i');
  updateIcon.classList.add('bi','bi-bookmark-check','update-icon');
 
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('bi', 'bi-x-circle-fill', 'delete-icon');

  const saveIcon = document.createElement('i');
  saveIcon.classList.add('bi', 'bi-bookmark-check-fill', 'save-icon');
  saveIcon.style.visibility = "hidden";

  const editIcon = document.createElement('i');
  editIcon.classList.add('bi', 'bi-pen', 'edit-icon');

  deleteIcon.addEventListener('click', () => {   
  if (confirm('Are you sure you want to delete this note?')) {
      deleteNoteInFirebase(key,content);
      container.removeChild(stickyNote);
    }
  });

  saveIcon.addEventListener('click', () => {
    saveText(noteText);
    noteText.readOnly = true; 
  });

  updateIcon.addEventListener('click',() => {
    updateText(key, noteText);
      noteText.readOnly = true;
  })

  editIcon.addEventListener('click', () => {
    saveIcon.style.display = "none";
    updateIcon.style.display = "inline-block";
    editText(noteText);
  })
  
  icons.appendChild(updateIcon);
  icons.appendChild(saveIcon);
  icons.appendChild(editIcon);
  icons.appendChild(deleteIcon);
  
  stickyNote.appendChild(icons);
  stickyNote.appendChild(noteText);

  container.appendChild(stickyNote);

}

const url =`https://sticky-note-sk-default-rtdb.firebaseio.com/add.json`;
  fetch(url, {
    method: 'GET'
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Data retrieved successfully:',data);
    console.log(Object.keys(data));
    console.log(Object.values(data));

    for (const key in data){
      const content = data[key].content;
      createNoteElement(key,content);
    }
  })
  .catch(error =>{
      console.error('Error retrieving data:',error)
  });

  // window.onload = createNoteElement;
  // console.log("page is fully loaded");
