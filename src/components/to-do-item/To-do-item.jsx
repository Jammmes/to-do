import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteToDo } from './actions';
import { toggleToDo } from './actions';

import {
    Form, Input, Button, Checkbox
  } from 'antd';
  import 'antd/lib/form/style/css';
  import 'antd/lib/input/style/css';
  import 'antd/lib/button/style/css';
  import 'antd/lib/checkbox/style/css';
  import './to-do-item.css';

 
class ToDoItem extends Component {

    static propTypes = {
        todo: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }
    
    render() {
        const { name, id, completed } = this.props.item;
        const inputClassName = completed ? 'completed' : 'un-completed';
        return (
            <Form layout="inline">
                <Form.Item>
                    <Input className = { inputClassName } disabled placeholder="Task" value = { name }/>
                </Form.Item>
                <Form.Item>
                    <Checkbox checked = { completed } onChange = { this.onToggle.bind(this, id) }/>
                </Form.Item>
                <Form.Item>
                    <Button type = "danger" icon="delete" onClick = { this.onDelete.bind(this, id) }/>
                </Form.Item>
            </Form>
        );
    }

    onDelete(id) {
        this.props.dispatch( deleteToDo(id) );
    }

    onToggle(id) {
        this.props.dispatch ( toggleToDo(id) );
    }
}

function mapStateToProps(state) {
    return { todo: state.toDoStore }
}

export const toDoItem = connect(mapStateToProps)(ToDoItem);