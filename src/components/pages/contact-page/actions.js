export const CONTACTS_IS_LOADING = 'CONTACTS_IS_LOADING';
export const CONTACTS_LOAD_ERROR = 'CONTACTS_LOAD_ERROR';
export const CONTACTS_LOAD_SUCCESS = 'CONTACTS_LOAD_SUCCESS';

export function contactsIsLoading(bool) {
    return {
        type: CONTACTS_IS_LOADING,
        isLoading: bool
    }
}

export function contactsLoadError(bool) {
    return {
        type: CONTACTS_LOAD_ERROR,
        isError: bool
    }
}

export function contactsLoadSuccess(contacts){
    return {
        type: CONTACTS_LOAD_SUCCESS,
        contacts: contacts
    }
}