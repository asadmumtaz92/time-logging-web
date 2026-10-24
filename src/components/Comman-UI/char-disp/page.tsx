'use client'
import { useState, useEffect } from 'react'

interface DisplayCharacterProps {
    text: string
    speed: number
}

const DisplayCharacter = ({ text, speed = 500 }: DisplayCharacterProps) => {


    const [displayedText, setDisplayedText] = useState('')


    useEffect(() => {
        console.log('text:', text); // Debugging log
        if (!text) return;

        let index = 0
        const timer = setInterval(() => {
            setDisplayedText((prev) => prev + text[index])
            index++;
            if (index === text.length - 1) {
                clearInterval(timer)
            }
        }, speed)

        return () => clearInterval(timer)

    }, [text, speed])

    return displayedText
};

export default DisplayCharacter
