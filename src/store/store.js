import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducer';
import { DevTools } from '../utils/index';


function _applyNiddleware() {

    const middleWare = [

    ];

    return applyMiddleware(...middleWare);

}


export default function configureStore (initialState){
    const store = compose(
        _applyNiddleware(),
        DevTools.instrument()
    )(createStore)(rootReducer, initialState);

    return store;
}
