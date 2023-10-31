import React, { useRef, useState } from 'react'
import PropTypes from "prop-types";
import PianoKey from '../components/PianoKey'


const Piano = () => {
  const [notes, setNotes] = useState([
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "A4",
    "B4",
    "C5",
    "D5",
    "E5",
    "F5",
    "G5",
    "A5",
    "B5",
  ])

  return (
    <>
        Piano
        <div className='flex gap-1'>
            {/* <PianoKey />
            <PianoKey isBlack={true}/>
            <PianoKey />
            <PianoKey isBlack={true} />
            <PianoKey /> */}
            {
              notes.map(note => <PianoKey key={note} note={note} />)
            }
        </div>
    </>
  )
}

Piano.propTypes = {
    scales: PropTypes.array.isRequired,
};


export default Piano