import React from "react";
import TopBar from "../components/topbar/top"

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)

    }

    render(){
        return (
        <div>
            <TopBar />
            HomePage!
        </div>            
        )

    }
}

