import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import './Search.css';
import {connect} from 'react-redux';
import { createApi } from 'unsplash-js';

function Search(props) {
    const [searchText, setSearchText] = useState('');

    //STORE TEXT INPUT TO LOCAL STATE
    const handleTextInput = (e) => {
        setSearchText(e.target.value);
    }

    //SEARCH FORM SUBMISSION
    const handleFormSubmission = (e) =>{

        e.preventDefault();
        if (searchText.length <= 1) return;
        //loading data
        props.dispatch({type: 'LOADING'});

        let searchTerm = searchText;
        //ACCESS KEY FOUND IN .ENV FILE
        const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_API;
    
        // INITIALIZE WITH ACCESS KEY
        const unsplash = createApi({
            accessKey: ACCESS_KEY,
        });


        //SEARCH AND STORE RESULT
        unsplash.search.getPhotos({
        query: `Africa ${searchTerm}`,
        page: 1,
        perPage: 6,
        orientation: 'landscape',
        }).then( result => {
            return props.dispatch({type: 'SEARCH', payload: result});
        })
        .catch(err =>{

           return props.dispatch({type: 'ERROR'});
        })
    }

    return (
        <div className="search">
            <form onSubmit={handleFormSubmission}>
                <span><FontAwesomeIcon icon={faSearch} /></span>
                <input 
                    type="text" 
                    name='search' 
                    placeholder="Search high free resolution images"
                    value={searchText} onChange={handleTextInput} />
            </form>
            
        </div>
    )
}
const mapStateToProps = (state) =>({
    data: state
});
export default connect(mapStateToProps) (Search);
