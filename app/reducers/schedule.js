import { LOAD_SCHEDULE, LOAD_SCHEDULE_ERROR, LOAD_SCHEDULE_RESULT } from '../actions/schedule';

const initialState = {
    isLoading: true,
    events: {},
    error: null,
};

const reducer = ( state = initialState , action ) => {
    switch( action.type ) {
        case LOAD_SCHEDULE:
            return { ...state };
        case LOAD_SCHEDULE_RESULT: 
            return { ...state,  events: action.result.events };
        default: 
            return state;
    }

}; 

export default reducer;