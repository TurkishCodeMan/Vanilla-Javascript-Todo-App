window.addEventListener('load', () => {

    const plusIcon = document.querySelector(".plus");
    const textArea = document.querySelector(".input-todo")
    const noteContainer = document.querySelector(".note-container")
    const completeContanier = document.querySelector(".complete-container")

    plusIcon.addEventListener('click', () => {
        if (textArea.value == '') {
            return alert("Lütfen Bir Not Giriniz !");
        }
        createNote(textArea.value);
        textArea.value = '';
    })



    const deleteNote = (e) => {
        const note = e.target.parentElement.parentElement;
        if (note.classList[0] != 'note') {
            return;
        }
        console.log(e.target)

        noteContainer.removeChild(note);
    }


    const createNote = (text) => {
        const note = document.createElement('div');
        note.classList.add("note");

        note.innerHTML = `
      
                <p class="note-text">${text}</p>
                <div class="icons">
                     <p class="iconify delete" data-icon="mdi:trash-can-outline" data-inline="false"></p>
                    <p class="iconify edit" data-icon="mdi:file-document-edit-outline" data-inline="false"></p>
                    <span class="iconify complete" data-icon="mdi:hand-okay" data-inline="false"></span>
                </div>
    
        `
        noteContainer.appendChild(note);
        noteContainer.insertBefore(note, noteContainer.childNodes[0])
        //Event Listeners
        console.log(noteContainer.childNodes);
        console.log(noteContainer.children)
        const deleteIcons = document.querySelectorAll(".delete");
        const completeIcons = document.querySelectorAll(".complete");
        deleteIcons.forEach(icon => {
            icon.addEventListener('click', (e) => {
                console.log("ss")
                if (e.target.parentElement.parentElement.classList[0] == 'note') {

                    e.target.parentElement.parentElement.remove();
                }
            })
        })
        completeIcons.forEach(icon => {
            icon.addEventListener('click', (e) => {
                console.log("ssss")
                if (e.target.parentElement.parentElement.classList[0] == 'note') {
                    noteContainer.removeChild(   e.target.parentElement.parentElement);
                    completeContanier.appendChild(e.target.parentElement.parentElement) 
                    e.target.parentElement.parentElement.classList.add('complete')
                    console.log(  e.target.parentElement.parentElement.classList)
                    icon.remove();
                  
                }
            })
        })




    }



})
