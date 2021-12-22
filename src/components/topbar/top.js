import React from "react";
import { Col, Row } from "react-bootstrap"
import './top.css'
import PersonIcon from '@mui/icons-material/Person';
// import {Profile, Search} from "@material-ui/icons"
import SearchIcon from '@mui/icons-material/Search';
export default class TopBar extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="TopBarContainer">

                        <div className="TopBarLeft">
                            <span className="Logo">
                            {/* <PersonIcon /> User? */}
                                Connect
                            </span>
                        </div>

                        <div className="TopBarCenter">
                            <span className="SearchBar">
                                <SearchIcon className="SearchIcon"/> 
                                <input placeholder="Search For..." className="SearchInput" />
                            </span>
                        </div>

                        <div clasName="TopBarRight">
                            <span>
                                Heyyyyy
                            </span>
                        </div>                    

            </div>
        )
    }
}