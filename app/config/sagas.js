import { takeEvery, call, put, select } from 'redux-saga/effects';

// 1. upon init schedule

import { LOAD_SCHEDULE, LOAD_SCHEDULE_ERROR, LOAD_SCHEDULE_RESULT } from '../actions/schedule';

const getLatestSchedule = () => {}; //fetch('../data/data.json');

function* fetchLatestSchedule(action) {
    yield;
    try {
        const bleh = yield select( state => state.schedule.events);
        // const response = yield call(getLatestSchedule);
        // const result = yield response.json();

        // if (result.error) {
        //     yield put( {type: LOAD_SCHEDULE_ERROR, error: result.error} );
        // } else {
        //     yield put( {type: LOAD_SCHEDULE_RESULT, result } );
        // }

        put( {type: LOAD_SCHEDULE_RESULT, bleh});
        
    } catch (e) {
        yield put( {type: LOAD_SCHEDULE_ERROR, error: e.message} );
    }
};

export default function* rootSaga() {
    yield takeEvery(LOAD_SCHEDULE, fetchLatestSchedule);
}