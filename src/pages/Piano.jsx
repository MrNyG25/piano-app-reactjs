import React, {useState, useEffect } from 'react'
import PianoKey from '../components/PianoKey'
import notesData from '../data/notes.json'

const Piano = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    setNotes(notesData)
  }, [])

  return (
    <div className="h-128 flex flex-col justify-center items-center">
      <div className='max-w-2xl flex gap-2 mb-5'>
        <label className="inline-flex items-center cursor-pointer  self-end">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Show notes</span>
        </label>
        <label className="inline-flex items-center cursor-pointer  self-end">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Show keyboard bindings</span>
        </label>
      </div>
      <div className="flex gap-1 max-w-2xl">
          {
            notes.map(note =>
              <PianoKey
                key={note.note}
                note={note.note}
                isBlackKey={note.isBlackKey}
                keyboardKey={note.keyboardKey}
              />
            )
          }
      </div>
    </div>
  )
}

export default Piano