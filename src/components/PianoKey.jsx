import React, { useEffect, useRef, useState} from 'react'
import { useToneJs } from '../hooks/useTonejs'
import PropTypes from "prop-types";
import notesData from '../data/notes.json'
import { clsx } from 'clsx';


// eslint-disable-next-line react/display-name
const PianoKey = React.memo(({isBlackKey, note, keyboardKey, showNotes, showKeyboardBindinds}) => {
  let buttonRef = useRef();
  const {makeSound} = useToneJs();
  const [activeKey, setActiveKey] = useState(false)

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPressEvent);

    return () => {
      window.removeEventListener('keypress', handleKeyPressEvent)
      console.log("event removed")
    }
  }, []);

  const handleKeyPressEvent = e => {

    let noteFound = notesData.find(item => item.keyboardKey === e.key && item.note === note);

    if(noteFound){
      makeSound(note)
      setActiveKey(true)
      setTimeout(() => {
        setActiveKey(false)
      }, 200);
    }
}

  const onKeyClick = () => {
    console.log("onKeyClick")
    makeSound(note)
  }

  return (
    <div
        ref={buttonRef}
        className={
          clsx(
            'flex-row cursor-pointer rounded-sm',
            {
              'h-28 w-14 bg-black text-white active:bg-neutral-500': isBlackKey,
              'bg-red-600': activeKey && isBlackKey
            },
            {
              'h-48 w-16 bg-slate-100 text-black active:bg-neutral-500': !isBlackKey,
              'bg-red-600 text-white': activeKey && !isBlackKey
            }
          )
        }
        onClick={onKeyClick}
    >
     {showNotes && <span className="font-medium">{note}</span>}
     <br />
     {showKeyboardBindinds && <span className="font-bold text-xl ml-1">{keyboardKey}</span>}
    </div>
  )
})

PianoKey.propTypes = {
    isBlackKey: PropTypes.bool,
    note: PropTypes.string.isRequired,
    keyboardKey: PropTypes.string.isRequired,
    showNotes: PropTypes.bool.isRequired,
    showKeyboardBindinds: PropTypes.bool.isRequired
};



export default PianoKey