import { useEffect, useRef } from "react"
import * as Tone from 'tone'

export function useToneJs() {
    let samplerRef = useRef(null)
    useEffect(() => {
        console.log("hello useToneJs")
        //create a synth and connect it to the main output (your speakers)
        samplerRef.current = new Tone.Sampler({
            urls: {
                "C4": "C4.mp3",
                "D#4": "Ds4.mp3",
                "F#4": "Fs4.mp3",
                "A4": "A4.mp3",
            },
            release: 1,
            baseUrl: "https://tonejs.github.io/audio/salamander/",
        }).toDestination();
        
        /* Tone.loaded().then(() => {
            sampler.triggerAttackRelease(["Eb3", "G4", "Bb4"], 4);
        }) */
    }, [])

    const makeSound = (note = "G4") => {
        console.log(note)
        Tone.loaded().then(() => {
            samplerRef.current.triggerAttackRelease([note], 4);
        })
    }
    
    return {
        makeSound
    }
}