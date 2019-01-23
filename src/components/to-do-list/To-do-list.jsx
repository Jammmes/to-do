import React, { Component } from 'react';
import { toDoItem as ToDoItem } from '../index';
import { connect } from 'react-redux';

import { List } from 'antd';
import 'antd/lib/list/style/css';

class ToDoList extends Component {

    render(){
        console.log(this.props.items);
        return <div>
            <List
                size="small"
                bordered
                dataSource={this.props.items.todos}
                renderItem={item => (<List.Item>
                <ToDoItem key = {item.id} name = {item.name}/>
                </List.Item>)}
            />
        </div>
    }
}


function mapStateToProps(state) {
    return {
        items: state.addToDo
    }
}

export const toDoList = connect(mapStateToProps)(ToDoList);