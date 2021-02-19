import React from 'react';
import './ToggleNav.css';
import {connect} from 'react-redux';

function ToggleNav(props) {
    const handleToggle = () =>{
        props.dispatch({type: 'HIDENAV', payload: false });
    }
    return (
        <div className="toggle_nav">
            <div className="toggle_box"
                onClick={handleToggle}
            >
                <p className="one"></p>
                <p className="two"></p>
                <p className="three"></p>
            </div>
        </div>
    )
}

export default connect() (ToggleNav);
