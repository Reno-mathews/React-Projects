import { useState } from "react";

function App(){
    const [note, setNote] = useState("");
    const [notes, setNotes] = useSate([]);
    function addNote() {

        if(note.trim() === "") return;

        setNotes([...notes,note]);
        setNote("");

    }


    return (
        <div>
            <h1>Notes App</h1>

            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write a note..."
            />

            <button onClick={addNote}>Add Note</button>

            <ul>
                {notes.map((n, index) => (
                    <li key={index}>{n}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;