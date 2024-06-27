import React, {useState, useEffect } from 'react'
import PianoKey from '../components/PianoKey'
import notesData from '../data/notes.json'
import CustomToggle from '../components/CustomToggle'

const Piano = () => {
  const [notes, setNotes] = useState([])
  const [showNotes, setShowNotes] = useState(false)
  const [showKeyboardBindinds, setShowKeyboardBindinds] = useState(false)

  useEffect(() => {
    setNotes(notesData)
  }, [])

  const onShowNotes = () => {
    setShowNotes(!showNotes)
  }

  const onShowKeyboardBindinds = () => {
    setShowKeyboardBindinds(!showKeyboardBindinds)
  }

  return (
    <div className="h-128 flex flex-col justify-center items-center">
      <div className='max-w-2xl flex gap-2 mb-5'>
        <CustomToggle
          handleClick={onShowNotes}
          toggleValue={showNotes}
          labelTitle="Show notes"
        />
        <CustomToggle
          handleClick={onShowKeyboardBindinds}
          toggleValue={showKeyboardBindinds}
          labelTitle="Show keyboard bindings"
        />
      </div>
      <div className="flex gap-1 max-w-2xl">
          {
            notes.map(note =>
              <PianoKey
                key={note.note}
                note={note.note}
                isBlackKey={note.isBlackKey}
                keyboardKey={note.keyboardKey}
                showNotes={showNotes}
                showKeyboardBindinds={showKeyboardBindinds}
              />
            )
          }
      </div>
    </div>
  )
}

export default Piano