import {createStore, combineReducers} from 'redux'
import reducer from './reducers/reducer'
// import adminReducer from './reducers/adminReducer'

// const rootReducer = combineReducers({
//     reducer,
//     adminReducer
// })


export default createStore(reducer)