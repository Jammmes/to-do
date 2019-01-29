import React, { Component } from 'react';

import PropTypes from 'prop-types';
import ToDoItem from '../to-do-item/index';
import { connect } from 'react-redux';
import List from 'antd/lib/list';
import 'antd/lib/list/style/css';

export class ToDoList extends Component {

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

export default connect(mapStateToProps)(ToDoList);