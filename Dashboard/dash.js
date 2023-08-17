pageLoad()

// columnId = ["backlog-card","Ready-card","process-card","review-card"];

function Backlogcard(columnId) {
    console.log(columnId);
    // Find the content container for the specified column
    const contentContainer = document.getElementById(columnId);
    // Create the card element
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'mt-2', 'mb-2', "text"+columnId);
    cardElement.innerHTML = `
        <div class="card-body d-flex flex-column justify-content-between bg-dark">
            <div>
                <textarea id="text${columnId}" class="form-control mb-2 custom-textarea" placeholder="Enter text"></textarea>
            </div>
            <button class="btn custom-button" onclick="saveCard('${columnId}')">Save</button>
        </div> 
    `;
    // Append the card to the content container
    contentContainer.appendChild(cardElement);
}

function saveCard( columnId) {
    const textInput = document.getElementById(`text${columnId}`);
    const div = document.querySelector(`.text${columnId}`);
    // const textarea=document.querySelector(`.text${columnId}`)
    const text = textInput.value;
    console.log(text);

    if (text === "") {
        alert("Textarea is empty. Please enter some text.");
        return; // Exit the function early
    }

    const jsonData = {
        content: text
    };
    let jsonFileName;

    // Determine the JSON file based on the columnId
    switch (columnId) {
        case 'backlog-card':
            jsonFileName = 'backlog.json';
            break;
        case 'Ready-card':
            jsonFileName = 'Ready.json';
            break;
        case 'process-card':
            jsonFileName = 'process.json';
            break;
        case 'review-card':
            jsonFileName = 'review.json';
            break;
        default:
            console.error(`Unknown columnId: ${columnId}`);
            return;
    }

    const url = `https://dashboard-ec3cd-default-rtdb.firebaseio.com/${jsonFileName}`;
    console.log(url);

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(jsonData)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Data Stored successfully:', data);

        textInput.setAttribute('readOnly',true);

        console.log(columnId);
        console.log(data);
        console.log(text);

        getcard( columnId,data.name, text);
        div.remove()
    })
    .catch(error => {
        console.error('Error storing data:', error);
    });
}

function pageLoad() {
    const baseUrl = 'https://dashboard-ec3cd-default-rtdb.firebaseio.com/';
    const endpointNames = [
        'backlog.json',
        'Ready.json',
        'process.json',
        'review.json',
    ];

    const fetchPromises = endpointNames.map(endpointName => {
        // console.log(endpointNames);
        // console.log(endpointName);
        const url = baseUrl + endpointName;
        // console.log(url);
        
        return fetch(url, { method: 'GET' })
            .then(response => response.json())
            .then(data => {console.log('Data retrieved successfully from', url);
                // console.log(Object.keys(data).length);
                // console.log(Object.keys(data));
                // console.log(Object.values(data));

                const content =document.querySelectorAll('.custom-content')
                console.log(content);

                let draggedItem = null

                for (const key in data) {
                    const content = data[key].content;
                    console.log(key);
                    console.log(content);

                    let columnId;

                    if (url.includes('backlog.json')){
                        columnId = 'backlog-card';
                        
                        
                        const item=document.querySelectorAll(`.${columnId}`)
                        console.log(columnId);   
                        console.log(item);

                        for(let i=0;i<item.length;i++){
                            const card=item[i]
                            console.log(card);
    
                            card.addEventListener('dragstart',function(){
                                draggedItem=card
                                console.log(draggedItem);
                                setTimeout(() => {
                                    card.style.display='none'
                                }, 0);
                            })
                            card.addEventListener('dragend',function(){
                                setTimeout(() => {
                                    draggedItem.style.display='block'
                                    draggedItem=null
                                }, 0);    
                            })
                        }
    
                    }else if (url.includes('Ready.json')) {
                        columnId = 'Ready-card';
                        const item=document.querySelectorAll(`.${columnId}`)
                    
                        for(let i=0;item.length>i;i++){
                            let card=item[i]
                            
                        card.addEventListener('dragstart',function(){
                            draggedItem=card
                            console.log(draggedItem);
                            setTimeout(() => {
                                card.style.display='none'
                            }, 0);
                        })
                        card.addEventListener('dragend',function(){
                            setTimeout(() => {
                                draggedItem=null
                                card.style.display='block'
                            }, 0);
                        })
                        }


                    } else if (url.includes('process.json')) {
                        columnId = 'process-card';

                        const item=document.querySelectorAll(`.${columnId}`)
                        console.log(item);
                        console.log(columnId);
                    
                        for(let i=0;item.length>i;i++){
                            let card=item[i]
                            console.log(card);
                            
                        card.addEventListener('dragstart',function(){
                            draggedItem=card
                            console.log(draggedItem);
                            setTimeout(() => {
                                card.style.display='none'
                            }, 0);
                        })
                        card.addEventListener('dragend',function(){
                            setTimeout(() => {
                                draggedItem=null
                                card.style.display='block'
                            }, 0);
                        })
                        }

                    } else if (url.includes('review.json')) {
                        columnId = 'review-card';

                        const item=document.querySelectorAll(`.${columnId}`)
                    
                        for(let i=0;item.length>i;i++){
                            let card=item[i]
                            
                        card.addEventListener('dragstart',function(){
                            draggedItem=card
                            console.log(draggedItem);
                            setTimeout(() => {
                                card.style.display='none'
                            }, 0);
                        })
                        card.addEventListener('dragend',function(){
                            setTimeout(() => {
                                draggedItem=null
                                card.style.display='block'
                            }, 0);
                        })
                        }
                    }
                    
                    getcard(columnId, key, content);
                }
                
                for (let i = 0; i < content.length; i++) {
                    let column=content[i]
                    // console.log('drop event');
                    // console.log(column);

                    column.addEventListener("dragover", function (e) {
                        e.preventDefault();
                    });
                  
                    column.addEventListener("dragenter", function (e) {
                        e.preventDefault();
                        this.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                    });
                  
                    column.addEventListener("dragleave", function (e) {
                        e.preventDefault();
                        this.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                    });
                  
                    column.addEventListener("drop", function (e) {
                        if(draggedItem){
                            this.append(draggedItem);
                            console.log(draggedItem);
                        }
                        this.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                    });             
                } 
                
            })

            .catch(error => {
                console.error('Error retrieving data from', url, error);
            });
    });

    // Use Promise.all to wait for all fetch operations to complete
    Promise.all(fetchPromises)
        .then(() => {
            console.log('All data retrieved');
        })
        .catch(error => {
            console.error('Error in Promise.all:', error);
        });
}


function getcard(columnId, key, content) {
    const cardElement = document.createElement('div');
    cardElement.className=columnId
    cardElement.setAttribute('draggable', true); // Make the card draggable
    cardElement.innerHTML = `
        <div class="card-body d-flex flex-column justify-content-between mt-2 p-0  mb-2 bg-dark">
            <div class="text-right">
                <i class="bi bi-chat-square-dots editIcon data-bs-toggle="tooltip" title="setting" "></i>
                <i class="bi bi-check-circle updateIcon" style="display: none; data-bs-toggle="tooltip" data-bs-placement="right" title="update" "></i>
                <i class="bi bi-trash3 deleteIcon" style="display: none; data-bs-toggle="tooltip" data-bs-placement="left" title="Delete" "></i>
            </div>
            <textarea id="text${key}" readOnly class="form-control  custom-textarea" placeholder='Enter text' >${content}</textarea>
        </div> 
    `; 
    
    
    const contentContainer = document.getElementById(columnId); 
    contentContainer.appendChild(cardElement);

    const deleteIcon = cardElement.querySelector('.deleteIcon');
    deleteIcon.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this note?')) {
            deleteNoteInFirebase(columnId,key);
            cardElement.remove();
        }

    });

    const updateIcon = cardElement.querySelector('.updateIcon');
    updateIcon.addEventListener('click', () => {
        // corresponding textarea element based on columnId
        const textInput = document.getElementById(`text${key}`);
        const newText = textInput.value;
        updateNoteInFirebase(columnId, key, newText);
        textInput.placeholder = newText;
        textInput.readOnly = true;
        console.log(newText);

        deleteIcon.style.display = 'none';
        updateIcon.style.display = 'none';
        editIcon.style.display = 'inline-block';
    });

    const editIcon = cardElement.querySelector('.editIcon');
    editIcon.addEventListener('click', () => {
        // Hide the edit icon
        editIcon.style.display = 'none';
        // Show the delete and update icons
        deleteIcon.style.display = 'inline-block';
        updateIcon.style.display = 'inline-block';

        const textInput = document.getElementById(`text${key}`);
        textInput.readOnly = false;
    });
       
}
    
function deleteNoteInFirebase(columnId, key) {
    let jsonFileName;
    // Determine the JSON file based on the columnId
    switch (columnId) {
        case 'backlog-card':
            jsonFileName = 'backlog';
            break;
        case 'Ready-card':
            jsonFileName = 'Ready';
            break;
        case 'process-card':
            jsonFileName = 'process';
            break;
        case 'review-card':
            jsonFileName = 'review';
            break;
        default:
            console.error(`Unknown columnId: ${columnId}`);
            return;
    }
    const url = `https://dashboard-ec3cd-default-rtdb.firebaseio.com/${jsonFileName}/${key}.json`;
    console.log(url);
    fetch(url,{
         method:'DELETE' 
    })
    .then((response) => {
        console.log('res',response);
        if (response.ok) {
            console.log(`Note with ID ${key} deleted successfully from column ${jsonFileName}`);
        } else {
            console.error(`Failed to delete Note with ID ${key} from column ${jsonFileName}`);
        }
    })
    .catch(error => {
        console.error('Error deleting data:', error);
    });
}

function updateNoteInFirebase(columnId,key,newText){
    const jsonData = {
      content: newText
    };
    console.log(jsonData);
    let jsonFileName;
    // Determine the JSON file based on the columnId
    switch (columnId) {
        case 'backlog-card':
            jsonFileName = 'backlog';
            break;
        case 'Ready-card':
            jsonFileName = 'Ready';
            break;
        case 'process-card':
            jsonFileName = 'process';
            break;
        case 'review-card':
            jsonFileName = 'review';
            break;
        default:
            console.error(`Unknown columnId: ${columnId}`);
            return;
    }
    const url = `https://dashboard-ec3cd-default-rtdb.firebaseio.com/${jsonFileName}/${key}.json`;
    console.log(url);
    fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(jsonData)
    })
    .then(response => {
      console.log('res',response);
      if (response.ok) {
        console.log(`Note with ID ${key} updated successfully in ${jsonFileName}.`);
      } else {
        console.error(`Failed to update note with ID ${key} in ${jsonFileName}.`);
      }
    })
    .catch(error => {
        console.error('Error updating note in Firebase:', error);
        console.error('Request URL:', url);
        console.error('Request Data:', jsonData);
    });
}


