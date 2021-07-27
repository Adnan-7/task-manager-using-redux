 import { tasksReducer } from './tasks-reducer';
 import {combineReduces} from './redux';

 const allReducers=combineReduces({tasksReducer});

 export default allReducers;
