import React, { Component } from 'react';
import {
    Form, Input, Button, Checkbox
  } from 'antd';
  import 'antd/lib/form/style/css';
  import 'antd/lib/input/style/css';
  import 'antd/lib/button/style/css';
  import 'antd/lib/checkbox/style/css';


 
export class ToDoItem extends Component {
    
    render(){
        return (
            <Form layout="inline">
                <Form.Item>
                    <Input  placeholder="Task" value = {this.props.name}/>
                </Form.Item>
                <Form.Item>
                    <Checkbox />
                </Form.Item>
                <Form.Item>
                    <Button type = "danger" icon="delete" />
                </Form.Item>
            </Form>
        );
    }
}
