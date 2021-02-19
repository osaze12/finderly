import { faCog, faEnvelope, faFileExport, faHome,faUser} from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from 'react';
import './Nav.css';
import Finderly from '../assets/logo.PNG';
import NavList from './NavList';
import ToggleNav from './ToggleNav';
import {connect} from 'react-redux';

function Nav(props) {
    const [showInfo, setShowInfo] = useState({allow: false, msg: ''});
    const [msgSet, setMsgSet] = useState('');
    const [remove, setRemove] = useState(false);

    //GIVE IT MESSAGE TO DISPLAY
    //DATA GOTTEN FROM CHILD COMPONENT
    const handleCallBack = (data) => {
       setMsgSet(data);
    }
    //DATA GOTTEN FROM CHILD COMPONENT
    //WHEN MOUSE LEAVES THE ICON, REMOVE THE MESSAGE (FEATURE NOT AVAILABLE)
    const handleCallBackRemove = (data) =>{
        setRemove(true);
        setShowInfo({allow:data.allow, msg: data.msg});
    }
    //REMOVE THE MESSAGE(FEATURE NOT AVAILABLE)
    useEffect(()=>{
        if (remove === true) {
            setTimeout(()=>{
                setShowInfo({allow: false, msg:''});
            }, 1000);
        }
    }, [remove]);

    //SHOW THE MESSAGE (FEATURE NOT AVAILABLE)
    useEffect(()=>{
        if (msgSet !== '') {
            setShowInfo({allow: msgSet.allow, id: msgSet.id, msg: msgSet.msg}); 
        }
    }, [msgSet]);

    //DISPLAY MESSAGE FOR INDIVIDUAL NAV LINK
    const showMessage = (id) =>{
        return showInfo.allow && showInfo.id === id 
            ? <h1 className="msgInfo">{showInfo.msg}</h1> 
            : '';
    } 

    return (
        <>
        {props.state.hideNav ? <ToggleNav /> :

       
        <div className="nav">
            <div className="logo">
                <img src={Finderly} alt="finderly" />
            </div>
            <div className="buttons">
            <div className="top_nav">
                <ul>
                    <NavList iconName={faHome}
                        currentPage={true}
                    />

                    <div className="nav_single_container">
                        <NavList iconName={faUser}
                            parentCallBack ={handleCallBack} 
                            parentCallBack1 ={handleCallBackRemove} 
                            notAvailable={true}
                            id={2} />
                        <span>{showMessage(2)}</span>
                    </div> 
                                        
                    <div className="nav_single_container">
                        <NavList iconName={faEnvelope} 
                            parentCallBack ={handleCallBack} 
                            parentCallBack1 ={handleCallBackRemove}
                            notAvailable={true}
                            id={3} /> 
                        <span>{showMessage(3)} </span>
                    </div>
                    
                    <div className="nav_single_container settings">
                        <NavList iconName={faCog} 
                            parentCallBack ={handleCallBack}
                            parentCallBack1 ={handleCallBackRemove}
                            notAvailable={true}
                            id={4}  /> 
                        <span>{showMessage(4)}</span>
                    </div>
                </ul>
            </div>
            <div className="bottom_nav">
                <ul>
                    <NavList iconName={faFileExport}
                        hide={true} />
                </ul>
            </div>
                
            </div>
            
        </div>
      }
      </>
    )
}
const mapStateToProps = (state) =>({
    state: state
})
export default connect(mapStateToProps) (Nav);
