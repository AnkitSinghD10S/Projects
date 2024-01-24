export default class NotesAPI{
    static getAllNotes(){
        const notes =JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

        return notes;
    }

    static saveNote(noteToSave){
        const notes = NotesAPI.getAllNotes();
        const existing =notes.find(note => note.id == noteToSave.id);

        if(existing){
            existing.title = noteToSave.title;
            existing.body= noteToSave.body;
            existing.updated = new Date().toISOString();;
        }else{
            noteToSave.id= Math.floor(Math.random() *1000000);
            noteToSave.updated= new Date().toISOString();
            notes.push(noteToSave);
        }

        localStorage.setItem("notesapp-notes",JSON.stringify(notes));
    }

    static deleteNote(id){

    }
}