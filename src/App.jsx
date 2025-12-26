import { useState } from "react";

function App(){
    const [note, setNote] = useState("");
    const [notes, setNotes] = useSate([]);

    return (
        <div>
            <h1>Notes App</h1>

            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write a note..."
            />

            <button>Add Note</button>
        </div>
    );
}

export default App;