import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import ToDoItem from '../to-do-item/index';
import List from 'antd/lib/list';
import 'antd/lib/list/style/css';
import withConnectToStore from '../../with-connect-to-store/index';

export class ToDoList extends PureComponent {

    static propTypes = {
        items: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    render() {
        return <div>
            <List
                size="small"
                bordered
                dataSource = { this.props.items.todos }
                renderItem = { item => (<List.Item>
                    <ToDoItem  key = { item.id } item = { item }/>
                </List.Item>) }
            />
        </div>
    }
}

function mapStateToProps(state) {
    return { items: state.toDoStore }
}

export default withConnectToStore(ToDoList, mapStateToProps);