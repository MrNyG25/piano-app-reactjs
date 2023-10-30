import React from 'react'
import PropTypes from "prop-types";
import PianoKey from '../components/PianoKey'


const Piano = () => {

  return (
    <>
        Piano
        <div className='flex gap-1'>
            <PianoKey />
            <PianoKey isBlack={true}/>
            <PianoKey />
            <PianoKey isBlack={true} />
            <PianoKey />
        </div>
    </>
  )
}

Piano.propTypes = {
    scales: PropTypes.array.isRequired,
};


export default Piano