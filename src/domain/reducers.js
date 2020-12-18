import {
    startedReducer,
    doneReducer,
    failedReducer,
    logger
} from './common.reducer';
import authenticationReducer from './authentication/authentication.reducer';
import pictureReducer from './picture/picture.reducer';
import { checkIfCookieExist } from './authentication/authentication.service';


export const initialState = {
    isLoggedIn: checkIfCookieExist(),
    user : null,
    pending: false,
    pictures: [],
    error: null
}

export function composeReducers(initialState, reducers) {
    return (state, action) =>
        reducers.reduce(
            (acc, cur) => cur(acc, action),
            state === undefined ? initialState : state
        );
}

export default composeReducers(initialState, [
    logger,
    startedReducer,
    authenticationReducer,
    pictureReducer,
    doneReducer,
    failedReducer
]);
