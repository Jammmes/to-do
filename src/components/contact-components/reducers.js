import { CONTACTS_IS_LOADING } from './actions';
import { CONTACTS_LOAD_ERROR } from './actions';
import { CONTACTS_LOAD_SUCCESS } from './actions';

const initialState = {
    contacts:[],
    hasErrored:false,
    isLoading:false
}


function contactReducer (state = initialState, action={}) {
    switch (action.type) {
        case CONTACTS_IS_LOADING:
            if (action.isLoading){
                return { ...state, isLoading: true};
            } else {
                return { ...state, isLoading: false};
            }
        case CONTACTS_LOAD_ERROR:
            return { ...state, hasErrored: true};
        case CONTACTS_LOAD_SUCCESS:
            return { ...state, contacts:action.contacts };
        default:
            return state;
    }
}

export const ContactReducer =  {
    contact: contactReducer
}