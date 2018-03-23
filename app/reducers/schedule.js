import { LOAD_SCHEDULE, LOAD_SCHEDULE_ERROR, LOAD_SCHEDULE_RESULT, FILTER_SCHEDULE, UPDATE_FAVORITE } from '../actions/schedule';

const initialState = {
    isLoading: true,
    favoriteFoods: [],
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
    favoriteEvents: [],
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
    console.log(array);
    const index = array.indexOf(action.id);
    if (index !== -1) {
        console.log('removing id at index', index);
        array.splice(index);
    } else {
        array.push(action.id);
    }
    console.log('pushed id',array);
    return array;
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
        case UPDATE_FAVORITE:
            return {...state, favoriteEvents: updateObjectInArray(state.favoriteEvents, action) }
        default: 
            return state;
    }

}; 

export default reducer;