import React, { useRef } from 'react'
import { useToneJs } from '../hooks/useTonejs'
import PropTypes from "prop-types";

const PianoKey = ({isBlack, note}) => {
  let refKey = useRef();
  const {makeSound} = useToneJs();


  const onKeyClick = () => {
        console.log("onKeyClick")
        makeSound(note)
  }

  const computeIsBlackKey = () => {
    if(isBlack){
        return "h-28 w-14 bg-slate-200 active:bg-neutral-500";
    }
    return "h-40 w-14 bg-neutral-500 active:bg-neutral-300";
  }

  return (
    <div 
        ref={refKey}
        className={computeIsBlackKey()}
        onClick={onKeyClick}
    >{note}</div>
  )
}

PianoKey.propTypes = {
    isBlack: PropTypes.bool,
    note: PropTypes.string.isRequired
};



export default PianoKey