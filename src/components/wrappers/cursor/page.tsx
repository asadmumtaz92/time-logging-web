"use client"

import React, { useEffect, useState, useRef } from "react"
import "./cursor.css"

const CursorFollower = () => {
    const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 })
    const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 })
    const animationFrameRef = useRef(1)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setTargetPosition({ x: e.pageX, y: e.pageY })
        }

        document.addEventListener("mousemove", handleMouseMove)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [])

    useEffect(() => {
        const updateCursor = () => {
            const deltaX = (targetPosition.x - currentPosition.x) / 8
            const deltaY = (targetPosition.y - currentPosition.y) / 8

            setCurrentPosition((prevPosition) => ({
                x: Math.min(prevPosition.x + deltaX, window.innerWidth - 10),
                y: Math.min(
                    prevPosition.y + deltaY,
                    window.innerHeight + window.scrollY - 10
                ),
            }))

            animationFrameRef.current = requestAnimationFrame(updateCursor)
        }

        animationFrameRef.current = requestAnimationFrame(updateCursor)

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [targetPosition, currentPosition])
    const [windowSize, setWindowSize] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth)
        }

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])


    return (
        <>
            <span
                id="cursorFollower"
                className={`cursorFollower`}
                style={{
                    left: `${currentPosition.x}px`,
                    top: `${currentPosition.y}px`,
                }}
            ></span>
            <span
                id="cursorFollowerDot"
                className="cursorFollowerDot"
                style={{
                    left: `${currentPosition.x}px`,
                    top: `${currentPosition.y}px`,
                }}
            ></span>
        </>
    )
}

export default CursorFollower
