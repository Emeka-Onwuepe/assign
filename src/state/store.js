import {createStore} from 'redux';
import data from './data';
import storeReducer from "./reducer";


const store= createStore(storeReducer,data)

export default store