import { connect } from 'react-redux';

import ShowInfo from '../../components/show-info/index';
import { openModal} from '../../components/modal/index';

export const ShowInfoContainer = connect(

    state=> ({
        modal: state.modal
    }),
    dispatch => ({
        onOpenModal: ()=> dispatch(openModal())
    })
)(ShowInfo);