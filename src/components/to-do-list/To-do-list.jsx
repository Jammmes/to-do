import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toDoItem as ToDoItem } from '../index';
import { connect } from 'react-redux';

import { List } from 'antd';
import 'antd/lib/list/style/css';

class ToDoList extends Component {

    static propTypes = {
        items: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    render() {
        // console.log('Пришло в list ',this.props);
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
    return { items: state.addToDo }
}

export const toDoList = connect(mapStateToProps)(ToDoList);