import { useEffect, Component } from "react"

type props = {
    text: string
}

class CharacterDialog extends Component {
    KeyEnterEvent = () => {
        console.log("thinking")
    }
    KeySkipEvent = () => {
        
    }
    KeyEnter: boolean = false
    KeySkip: boolean = false
    constructor(props: props) {
        super(props)
        if(typeof document == 'undefined') return
        document.addEventListener("keydown", (e) => {
            this.KeyEnter = e.key === "Shift" || e.key === "x"
            this.KeySkip = e.key === "z" || e.key === "Enter"
            if (this.KeyEnter) {
                this.KeyEnterEvent()
            }
            else if (this.KeySkip) {
                this.KeySkipEvent()
            }
        }, false)
        document.addEventListener("keyup", (e) => {
            this.KeyEnter = e.key === "Shift" || e.key === "x"
            this.KeySkip = e.key === "z" || e.key === "Enter"
        }, false)
        this.state={props};
    }
    render(): React.ReactNode {
        return (
            <div>{""}</div>
        )
    }
}

export default CharacterDialog