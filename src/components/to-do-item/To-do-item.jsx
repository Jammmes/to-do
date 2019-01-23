import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Form, Input, Button, Checkbox
  } from 'antd';
  import 'antd/lib/form/style/css';
  import 'antd/lib/input/style/css';
  import 'antd/lib/button/style/css';
  import 'antd/lib/checkbox/style/css';


 
class ToDoItem extends Component {
    
    render() {
        return (
            <Form layout="inline">
                <Form.Item>
                    <Input  placeholder="Task" value = {this.props.name}/>
                </Form.Item>
                <Form.Item>
                    <Checkbox onChange = {this.onToggle.bind(this)}/>
                </Form.Item>
                <Form.Item>
                    <Button type = "danger" icon="delete" onClick = {this.onDelete.bind(this)}/>
                </Form.Item>
            </Form>
        );
    }

    onDelete() {
        console.log('delete');
    }

    onToggle() {
        console.log('toggle');
    }
}

function mapStateToProps(state) {
    return {
        todo: state.addToDo
    }
}

export const toDoItem = connect(mapStateToProps)(ToDoItem);