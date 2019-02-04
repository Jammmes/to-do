import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { ToDoItemContainer } from '../../containers/index';
import List from 'antd/lib/list';
import 'antd/lib/list/style/css';

export class ToDoList extends PureComponent {

    static propTypes = {
        items: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    render() {
        return <div>
            <List
            	style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
                size="small"
                bordered
                dataSource = { this.props.items.todos }
                renderItem = { item => (<List.Item>
                    <ToDoItemContainer  key = { item.id } item = { item }/>
                </List.Item>) }
            />
        </div>
    }
}

export default ToDoList;