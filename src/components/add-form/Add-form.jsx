import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToDo } from './actions';

import {
    Form, Input, Button,Card
  } from 'antd';
  import 'antd/lib/form/style/css';
  import 'antd/lib/input/style/css';
  import 'antd/lib/button/style/css';
  import 'antd/lib/card/style/css';


class AddForm extends Component {

    constructor(props) {
        super(props);
        this.state = { toDoName: ''  };
    }

    static propTypes = {
        inputText: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    inputOnChange(event) {
        const toDoName = event.target.value;
        this.setState({ toDoName })
    }

    generateNewId(array) {
        const result = array.slice();
        result.sort((a,b) => (a.id > b.id) ? -1 : 1);
        return (result.length) ? result[0].id + 1 : 1;
    }

    onAddToDo() {
        const name = this.state.toDoName;
        if (name) {
            const id = this.generateNewId(this.props.inputText.todos);
            this.props.dispatch( addToDo(id, name) );
            this.setState({ toDoName: '' });
        } else { console.log('text is required!') }
    }

    render() {
        const { toDoName } = this.state;
        return (
            <Form layout="inline">
                <Card>
                    <Form.Item>
                        <Input value = { toDoName } placeholder="Write To do here" onChange = { this.inputOnChange.bind(this) } required/>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick = { this.onAddToDo.bind(this) }>Add to do</Button>
                    </Form.Item>
                </Card>
            </Form>
        );
    }
}

function mapStateToProps(state) {
    return { inputText: state.addToDo };
}

export const addForm =  connect(mapStateToProps)(AddForm);