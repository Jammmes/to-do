import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteToDo } from './actions';
import { toggleToDo } from './actions';
import Form from 'antd/lib/form';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Checkbox from 'antd/lib/checkbox';
import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/checkbox/style/css';
import './to-do-item.css';
 
export class ToDoItem extends PureComponent {

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

export default connect(mapStateToProps)(ToDoItem);