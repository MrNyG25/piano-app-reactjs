import React, {useState, useEffect } from 'react'
import PropTypes from "prop-types";
import PianoKey from '../components/PianoKey'
import notesData from '../data/notes.json'

const Piano = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
  }, [])

  const getNotes = () => {
    setNotes(notesData)
    /* try {
        let res = await fetch('../data/notes.json');
        if (!res.ok) {
            throw new Error('Failed to fetch notes');
        }
        let notes = await res.json();
        console.log(notes);
        setNotes(notes);
    } catch (error) {
        console.error('Error fetching notes:', error);
    } */
  }
  

  return (
    <>
        <div className='flex gap-1'>
            {/* <PianoKey />
            <PianoKey isBlack={true}/>
            <PianoKey />
            <PianoKey isBlack={true} />
            <PianoKey /> */}
            {
              notes.map(note => <PianoKey key={note.note} note={note.note} isBlackKey={note.isBlackKey} />)
            }
        </div>
    </>
  )
}

Piano.propTypes = {
    scales: PropTypes.array.isRequired,
};


export default Piano