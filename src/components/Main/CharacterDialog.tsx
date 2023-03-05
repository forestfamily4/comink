import { useEffect, Component, useState } from "react"

type CharacterDialogProps = {
    text: string
}

const CharacterDialog = ({ text }: CharacterDialogProps) => {
    const KeyEnterEvent = () => {
        console.log("thinking")
    }
    const KeySkipEvent = () => {

    }
    const [KeyEnter, setKeyEnter] = useState(false)
    const [KeySkip, setKeySkip] = useState(false)

    if (typeof document == 'undefined') return (<div></div>)
    document.addEventListener("keydown", (e) => {
        setKeyEnter(e.key === "Shift" || e.key === "x")
        setKeySkip(e.key === "z" || e.key === "Enter")
        if (KeyEnter) {
            KeyEnterEvent()
        }
        else if (KeySkip) {
            KeySkipEvent()
        }
    }, false)
    document.addEventListener("keyup", (e) => {
        setKeyEnter(e.key === "Shift" || e.key === "x")
        setKeySkip(e.key === "z" || e.key === "Enter")
    }, false)
    return (
        <div>{text}</div>
    )
}
export default CharacterDialog