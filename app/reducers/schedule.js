
import moment from 'moment';

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

const sortByDate = (eventList) => {
    return eventList.sort(
        function (a, b) {
            let format = "MMMM Do YYYY hh:mm A";
            let dateTimeA = getDateTime(a);
            let dateTimeB = getDateTime(b);
            const diff = moment(dateTimeA, format) - moment(dateTimeB, format);
            if (diff === 0 ) {
                var titleA = a.title.toUpperCase(); 
                var titleB = b.title.toUpperCase(); 
                if (titleA < titleB) {
                    return -1;
                }
                if (titleA > titleB) {
                    return 1;
                }
                return 0;
            }
            return diff;
          }
    )
}

const getDateTime = (event) => {
    return event.date + ' ' + event.startTime;
}

const filterListByTitle = (list, searchText) => {
    console.log('filter text', searchText);
    console.log('list size', list.length);
    if (searchText === '' ) {
        return list;
    }
    return list.filter( listItem => listItem.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
}

const filterListByDate = (list, date) => {
    if (date === 'All') {
        return list;
    }
    return list.filter(listItem => listItem.date.toLowerCase() === date.toLowerCase());
}

const updateFavoriteEvent = (events, action) => {
    console.log('action: ' , action);
    const updatedEvents = events.map( (event) => {
        if(event.id !== action.id) {
            return event;
        }
        
        return {
            ...event,
            isFavorite : event.isFavorite ? false : true
        };    
    });
    console.log('updatedEvents', updatedEvents);
    return updatedEvents;
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
                events : filterListByTitle(initialState.events, action.text)
            }
        case UPDATE_FAVORITE:
            return {...state, events: updateFavoriteEvent(state.events, action) }
        case UPDATE_FILTER_DATE: 
            return handleFilterDate(state, action);
        case LOAD_SCHEDULE:
            return { ...state}
        default: 
            return state;
    }

}; 

export default reducer;