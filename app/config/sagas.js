import { takeEvery, call, put } from 'redux-saga/effects';

// 1. upon init schedule

import { LOAD_SCHEDULE, LOAD_SCHEDULE_ERROR, LOAD_SCHEDULE_RESULT } from '../actions/schedule';


const getLatestSchedule = () => {}; //fetch('../data/data.json');

function* fetchLatestSchedule(action) {
    console.log('todo update the schedule', action);
    try {
        console.log('blah');
        // const response = yield call(getLatestSchedule);
        // const result = yield response.json();
        // console.log(yield response);
        // console.log(yield result);
        console.log('hello');

        // if (result.error) {
        //     yield put( {type: LOAD_SCHEDULE_ERROR, error: result.error} );
        // } else {
        //     yield put( {type: LOAD_SCHEDULE_RESULT, result } );
        // }

        const events = { 'result': {'events': [ {'name': 'intro'}]}};
        put( {type: LOAD_SCHEDULE_RESULT, events});
        
    } catch (e) {
        yield put( {type: LOAD_SCHEDULE_ERROR, error: e.message} );
    }
};

export default function* rootSaga() {
    yield takeEvery(LOAD_SCHEDULE, fetchLatestSchedule);
}