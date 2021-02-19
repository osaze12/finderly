import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react';
import {connect} from 'react-redux';

function NavList(props) {
    const [brighten, setBrighten] = useState(false);

    //HOVER STYLES
    let style = brighten === true ? {color: '#fff'} : {color: '#888787'};
  
    const msgInfo = (msg) =>{
        if (msg === '') return;
        //SEND DATA TO PARENT COMPONENT
        props.parentCallBack({allow: true, id: props.id, msg})
    }
  
    const handleBrighten = () =>{
        if (!props.notAvailable || props.notAvailable !== true) return setBrighten(true);
        //MAKE ICONS WHITE WHEN HOVERED ON
        setBrighten(true);
        //IF NOT AVAILABLE EQUALS TRUE, SHOW THE MESSAGE
        return msgInfo("Not available yet."); 
    }
    
    const handleMouseLeave = () =>{
        if (props.currentPage === true) return setBrighten(true);
        if( !props.parentCallBack1 && props.notAvailable !== true) return setBrighten(false);
        //REMOVE BRIGHT/WHITE ICON WHEN MOUSE LEAVE THE ICON
        setBrighten(false);
         // REMOVE NOT AVAILABLE INFO, SETTING ALLOW TO FALSE
        props.parentCallBack1({allow: false, id: props.id, msg: ''});
    }
    //HIDE NAV WHEN CLICKED ON
    const handleClickEvent = () => {
        if (!props.hide && props.hide !== true) return;
        props.dispatch({type: 'HIDENAV', payload: true });

    }
    return (
        <>
             <li
               onMouseOver={ handleBrighten} 
               onMouseLeave={handleMouseLeave}
               onClick={handleClickEvent}
               style={props.currentPage ? {color: '#fff'} : style}
             >
                   <FontAwesomeIcon icon={props.iconName} />
             </li>
        </>
    )
}

const mapStateToProps = (state) =>({
    state: state
});
export default connect(mapStateToProps) (NavList);
