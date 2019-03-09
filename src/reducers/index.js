import { combineReducers } from 'redux';
import user from './user';
import swapi from './swapi';

const rootReducers = combineReducers({
    user,
    swapi
});

export default rootReducers;