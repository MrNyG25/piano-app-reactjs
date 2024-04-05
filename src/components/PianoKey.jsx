import React, { useEffect, useRef, useState} from 'react'
import { useToneJs } from '../hooks/useTonejs'
import PropTypes from "prop-types";
import notesData from '../data/notes.json'

// eslint-disable-next-line react/display-name
const PianoKey = React.memo(({isBlackKey, note}) => {
  let buttonRef = useRef();
  const {makeSound} = useToneJs();
  const [activeKey, setActiveKey] = useState('')

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPressEvent);

    return () => {
      window.removeEventListener('keypress', handleKeyPressEvent)
      console.log("event removed")
    }
  }, []);

  const handleKeyPressEvent = e => {

    /* if(e.key === "z" && note == "C4"){
      //makeSound('C4')
      buttonRef.current.click();
    } */
    let noteFound = notesData.find(item => item.keyboardKey === e.key && item.note === note);

    if(noteFound){
      makeSound(note)
      //buttonRef.current.click();
      if(!isBlackKey){
        setActiveKey('bg-red-200')
      }else{
        setActiveKey('bg-red-300')
      }
      setTimeout(() => {
        setActiveKey('')
      }, 200);
    }
  
}

  const onKeyClick = () => {
        console.log("onKeyClick")
        makeSound(note)
  }

  const computeIsBlackKey = () => {
    if(isBlackKey){
        return "h-28 w-14 bg-slate-200 text-black active:bg-neutral-500";
    }
    return "h-40 w-14 bg-neutral-500 active:bg-neutral-300";
  }

  return (
    <div 
        ref={buttonRef}
        className={`${computeIsBlackKey()} ${activeKey}`}
        onClick={onKeyClick}
    >{note}</div>
  )
})

PianoKey.propTypes = {
    isBlackKey: PropTypes.bool,
    note: PropTypes.string.isRequired
};



export default PianoKey