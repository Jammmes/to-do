import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
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
        onDelete: PropTypes.func.isRequired,
        onToggle: PropTypes.func.isRequired,
    }
    
    render() {
        const { name, id, completed } = this.props.item;
        const inputClassName = completed ? 'completed' : 'un-completed';
        const { onToggle, onDelete} = this.props;
        return (
            <Form layout="inline">
                <Form.Item>
                    <Input className = { inputClassName } disabled placeholder="Task" value = { name }/>
                </Form.Item>
                <Form.Item>
                    <Checkbox checked = { completed } onChange = {()=> onToggle(id) }/>
                </Form.Item>
                <Form.Item>
                    <Button type = "danger" icon="delete" onClick = {()=> onDelete(id) }/>
                </Form.Item>
            </Form>
        );
    }
}

export default ToDoItem;