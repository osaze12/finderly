
const initialState = {
    hold: false,
    error: false,
    images : [],
    loading: false,
    hideNav: false,
};

function rootReducer(state= initialState, action){
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                images: action.payload,
                loading:false,
                hold: true,
            }
        case 'LOADING':
            return {
                ...state,
                loading: true,
            }
        
        case 'FRESHPAGE':
            return {
                ...state,
                images: action.payload.result,
                loading:false,
               
            }
        
        case 'ERROR':
            return {
                ...state,
                error: true,
                loading: false,
            }
        case 'HIDENAV':
            return {
                ...state,
                hideNav: action.payload
            }

        default:
            return state;
    }
}

export default rootReducer;