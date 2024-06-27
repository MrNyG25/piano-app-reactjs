import React, {useState, useEffect } from 'react'
import PianoKey from '../components/PianoKey'
import notesData from '../data/notes.json'

const Piano = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    setNotes(notesData)
  }, [])

  return (
    <div className="h-128 flex flex-row justify-center jitems-center ">
      <div className='flex gap-1 max-w-lg'>
          {
            notes.map(note =>
              <PianoKey
                key={note.note}
                note={note.note}
                isBlackKey={note.isBlackKey}
              />
            )
          }
      </div>
    </div>
  )
}

export default Piano