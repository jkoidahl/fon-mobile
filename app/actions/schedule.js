export const LOAD_SCHEDULE = 'LOAD_SCHEDULE';

export const LOAD_SCHEDULE_RESULT = 'LOAD_SCHEDULE_RESULT';
export const LOAD_SCHEDULE_ERROR = 'LOAD_SCHEDULE_ERROR';
export const FILTER_SCHEDULE = 'FILTER_SCHEDULE';
export const UPDATE_FAVORITE = 'UPDATE_FAVORITE';
export const UPDATE_FILTER_DATE = 'UPDATE_FILTER_DATE';

export const loadSchedule = () => ({
    type: LOAD_SCHEDULE,
});

export const filterSchedule = text => ({
    type: FILTER_SCHEDULE,
    text,
});

export const updateFavorite = id => ({
    type: UPDATE_FAVORITE,
    id,
});

export const updateFilterDate = offset => ({
    type: UPDATE_FILTER_DATE,
    offset,
})