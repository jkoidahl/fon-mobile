import {    LOAD_SCHEDULE, 
            LOAD_SCHEDULE_ERROR, 
            LOAD_SCHEDULE_RESULT, 
            FILTER_SCHEDULE, 
            UPDATE_FAVORITE,
            UPDATE_FILTER_DATE } from '../actions/schedule';
import events from '../data/events';

const initialState = {
    isLoading: true,
    favoriteFoods: [],
    events: events,
    favoriteEvents: [],
    navData: { currentIndex: 0, items: [{title: 'All'}, {title:'May 3rd 2018'}, {title:'May 4th 2018'}, 
            {title: 'May 5th 2018'}, {title: 'May 6th 2018'}] },
    error: null,
};

const handleLoadScheduleResult = state => {
    console.log('inside handleLoadSchedule ', state);
    return state;
}

const filterListByTitle = (list, searchText) => {
    return list.filter( listItem => listItem.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
}

const filterListByDate = (list, date) => {
    if (date === 'All') {
        return list;
    }
    return list.filter(listItem => listItem.date.toLowerCase() === date.toLowerCase());
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

const updateNavData = (data, offset) => {

    return {...data, currentIndex: data.currentIndex + offset};
}

const handleFilterDate = (state, action) => {
    let updatedIndex = state.navData.currentIndex + action.offset;
    let filteredList = filterListByDate(events, state.navData.items[updatedIndex].title);
    let updatedNavData = updateNavData( state.navData, action.offset);
    return { ...state, 
            events: filteredList,
            navData: updatedNavData,
        };
}

const reducer = ( state = initialState , action ) => {
    switch( action.type ) { 
        case LOAD_SCHEDULE_RESULT: 
            return handleLoadScheduleResult(result);
        case FILTER_SCHEDULE:
            return { ...state,  
                events : filterListByTitle(state.events, action.text)
            }
        case UPDATE_FAVORITE:
            return {...state, favoriteEvents: updateObjectInArray(state.favoriteEvents, action) }
        case UPDATE_FILTER_DATE: 
            return handleFilterDate(state, action);
        default: 
            return state;
    }

}; 

export default reducer;