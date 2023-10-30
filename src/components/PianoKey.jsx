import React, { useRef } from 'react'
import { useToneJs } from '../hooks/useTonejs'
import PropTypes from "prop-types";

const PianoKey = ({isBlack}) => {
  useToneJs();

  let refKey = useRef();

  const onKeyClick = () => {
        console.log("onKeyClick")
  }

  const computeIsBlackKey = () => {
    if(isBlack){
        return "h-28 w-14 bg-slate-200 active:bg-neutral-500";
    }
    return "h-40 w-14 bg-neutral-500 active:bg-neutral-300";
  }

  function handleKeyUp (event) {
    /* event is an instance of SyntheticEvent 
       from wich you can extract the currentTarget 
    */
   console.log(event)
   refKey.current.click()
   refKey.current.classList.add(`active:bg-neutral-500`);
  }

  document.addEventListener("keydown", handleKeyUp);

  return (
    <div 
        ref={refKey}
        className={computeIsBlackKey()}
        onClick={onKeyClick}
    >PianoKey</div>
  )
}

PianoKey.propTypes = {
    isBlack: PropTypes.bool,
};



export default PianoKey