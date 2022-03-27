import { collection, onSnapshot } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { db } from "../../config/firebase-config"
import Note from "../note/Note"
import "./Notes.css"
function Notes() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        (async () => {
            onSnapshot(collection(db, "notes"), (snapshot) => {
                setNotes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            })
        })()
    }, [])
    return (
        <> <div className="pinned_notes">
            <h3>Pinned</h3>
            {
                notes.map((note) => {
                    if (note.pin && !note.trash && !note.archive) {
                        return (
                            <div key={note.id}>
                                <Note
                                    title={note.title}
                                    text={note.text}
                                    color={note.color}
                                    id={note.id}
                                    notepin={note.pin} 
                                    notelabel={note.label}
                                    />
                            </div>
                        )

                    } else { return (<></>) }

                })
            }
        </div>
            <div className="all_notes">
                <h3>Others</h3>
                {
                    notes.map((note) => {
                        if (!note.pin && !note.trash && !note.archive) {
                            return (
                                <div key={note.id}>
                                    <Note
                                        title={note.title}
                                        text={note.text}
                                        color={note.color}
                                        id={note.id}
                                        notepin={note.pin} 
                                        notelabel={note.label}
                                        />
                                </div>
                            )

                        } else { return (<></>) }

                    })
                }

            </div>

        </>
    )
}

export default Notes