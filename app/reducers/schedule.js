import { LOAD_SCHEDULE, LOAD_SCHEDULE_ERROR, LOAD_SCHEDULE_RESULT, FILTER_SCHEDULE, UPDATE_FAVORITE } from '../actions/schedule';

const initialState = {
    isLoading: true,
    events: 
        [ 
            {'id':'1', 'title': 'Australian Digeridoo', 'date': 'May 4th 2018', 'startTime':'', 'endTime': '', 'location' :'Atrium Stage'},
            {'id':'2', 'title': 'Belgian Chocolate Making', 'date': 'May 4th 2018','startTime':'', 'endTime': '', 'location' :'Main Stage'},
            {'id':'3', 'title': 'Canadian Snow Shoeing','date': 'May 4th 2018', 'startTime':'', 'endTime': '', 'location' :'Cafe Stage'},
            {'id':'4', 'title': 'Danish Baking','date': 'May 4th 2018', 'startTime':'', 'endTime': '', 'location' :'Atrium Stage'},
            {'id':'5', 'title': 'Equadorian Flutes','date': 'May 4th 2018', 'startTime':'', 'endTime': '', 'location' :'Main Stage'},
            {'id':'6', 'title': 'Finnish Bisto', 'date': 'May 4th 2018', 'startTime':'', 'endTime': '', 'location' :'Atrium Stage'},
            {'id':'7', 'title': 'German Dumpling Demo', 'date': 'May 4th 2018', 'startTime':'', 'endTime': '', 'location' :'Atrium Stage'},
            {'id':'8', 'title': 'Georgian Horse Riding', 'date': 'May 4th 2018', 'startTime':'', 'endTime': '', 'location' :'Atrium Stage'},
        ]
    ,
    error: null,
};

const handleLoadScheduleResult = state => {
    console.log('inside handleLoadSchedule ', state);
    return state;
}

const filterEvents = (events, searchText) => {
    return events.filter( event => event.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
}

const updateObjectInArray = (array, action) => {
    console.log(action);
    return array.map( (item) => {
        if(item.id !== action.id) {
            return item;
        }
        
        return {
            ...item,
            isFavorite : item.isFavorite ? false : true
        };    
    });
}

const reducer = ( state = initialState , action ) => {
    switch( action.type ) { 
        case LOAD_SCHEDULE_RESULT: 
            return handleLoadScheduleResult(result);
        case FILTER_SCHEDULE:
            console.log('inside filter schedule reducer');
            return { ...state,  
                events : filterEvents(state.events, action.text)
            }
        case LOAD_SCHEDULE: 
            return {...state, events: initialState.events }
        case UPDATE_FAVORITE:
            return {...state, events: updateObjectInArray(state.events, action) }
        default: 
            return state;
    }

}; 

export default reducer;