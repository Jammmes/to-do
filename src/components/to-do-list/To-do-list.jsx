import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { toDoItem as ToDoItem } from '../index';
import { connect } from 'react-redux';
import List from 'antd/lib/list';

class ToDoList extends Component {

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

export const toDoList = connect(mapStateToProps)(ToDoList);