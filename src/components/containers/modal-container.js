import { connect } from 'react-redux';

import Modal from '../../components/modal/index';
import { closeModal } from '../../components/modal/index';

export const ModalContainer = connect(
    state => ({
        modal: state.modal
    }),
    dispatch => ({
        onClose: ()=> dispatch(closeModal())
    })
)(Modal)