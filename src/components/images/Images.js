import React, {useEffect, useState} from 'react';
import './Images.css';
import {connect} from 'react-redux';
import { createApi } from 'unsplash-js';
import InternetMsgError from '../internetMsgError/InternetMsgError';

function Images(props) {
     const [imgList, setImgList] = useState([]);

     let getStore = props.data;
    
     useEffect(()=>{
          //MAKE SURE REDUX STORE HAS DATA AVIALABLE BEFORE STORING TO LOCAL STATE
          if (getStore.images.length < 1 ) return;
          setImgList(getStore.images.response.results);
     }, [getStore])

     useEffect(()=>{
          //GET INITIAL/FRESH/STARTING IMAGES WHEN COMPONENT IS MOUNTED
          if (getStore.hold === true) return;
        
          //ACCESS KEY FOUND IN .ENV FILE
          const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_API;

          // INITIALIZE WITH ACCESS KEY
          const unsplash = createApi({
               accessKey: ACCESS_KEY,
          });

          //SEARCH AND STORE RESULT
          unsplash.search.getPhotos({
          query: 'Africa children playing',
          page: 1,
          perPage: 6,
          orientation: 'landscape',
          }).then( result => {
              
               return props.dispatch({type: 'FRESHPAGE', payload: {result}});
          })
          .catch(err =>{
               // IF THERE'S AN ERROR DISPATCHED ALREADY, STOP IT FROM CONTINEOUSLY DISPATCHING
               if (getStore.error === true) return;
               return props.dispatch({type: 'ERROR'});
           });

     }, [getStore, props]);

     
     //GET AND DISPLAY THE DATA
     let getallImg = imgList.length > 0 
     ? 
          imgList.map((img, key) =>{
               return <div className="singleImg" key={key}>
                         <img src={img.urls.regular} alt="flower" />
                    </div>
          })
     : null;

    return (
         <>
         {!navigator.onLine ? <div className="msgBox"><InternetMsgError /></div> 
         :
          <div className="images" style={getStore.loading && getallImg ? { filter: 'blur(2px)'} : {filter: 'blur(0)'}}>
                    {getallImg && getallImg}
          </div>
          }
     
     </>
     
    )
}

const mapStateToProps = (state) =>({
     data: state
 });

export default connect(mapStateToProps) (Images);
