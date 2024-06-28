import { combineReducers, configureStore } from '@reduxjs/toolkit';

/** call reducers */
import quesReducer from './quesReducer';
import resultReducer from './resultReducer';

const rootReducer = combineReducers({
    questions : quesReducer,
    result : resultReducer
})

/** create store with reducer */
export default configureStore({ reducer : rootReducer});