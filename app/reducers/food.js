import { FILTER_FOOD } from '../actions/food';

const initialState = {
    isLoading: true,
    error: null,
};

const reducer = ( state = initialState , action ) => {
    switch( action.type ) { 
        case FILTER_FOOD:
            return { ...state}
        default: 
            return state;
    }

}; 

export default reducer;