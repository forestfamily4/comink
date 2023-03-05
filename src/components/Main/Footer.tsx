import { Button } from "@mui/material"
import React from "react"

type props={
    username:string
}

export default class Footer extends React.Component{
    constructor(props:props){
        super(props)
    }
    render(): React.ReactNode {
        return (
            <div>
                <Button variant="contained" color="primary">🧐</Button>
            </div>
        )
    }
}
