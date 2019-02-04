export const CONTACTS_IS_LOADING = 'CONTACTS_IS_LOADING';
export const CONTACTS_LOAD_ERROR = 'CONTACTS_LOAD_ERROR';
export const CONTACTS_LOAD_SUCCESS = 'CONTACTS_LOAD_SUCCESS';

export function contactsIsLoading(bool) {
    return {
        type: CONTACTS_IS_LOADING,
        isLoading: bool,
    };
}

export function contactsLoadError(bool) {
    return {
        type: CONTACTS_LOAD_ERROR,
        isError: bool,
    };
}

export function contactsLoadSuccess(contacts) {
    return {
        type: CONTACTS_LOAD_SUCCESS,
        contacts: contacts,
    };
}

export function loadContacts(url) {
    return (dispatch) => {
        dispatch(contactsIsLoading(true));
        fetch(url)
            .then( (response) => {
            if (!response.ok) {
                throw Error (response.status);
            }
            dispatch (contactsIsLoading(false));
            return response;
        })
        .then((response) => response.json() )
        .then ((contacts) => dispatch( contactsLoadSuccess(contacts.results)))
        .catch( () => dispatch(contactsLoadError(true)));
    };
}
