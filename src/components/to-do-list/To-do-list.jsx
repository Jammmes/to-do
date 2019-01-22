import React, { Component } from 'react';
import { ToDoItem } from '../index';

import { List } from 'antd';
import 'antd/lib/list/style/css';


  const data = [
    {
        id:1,
        text: 'To do task #1'
    },
    {
        id:2,
        text: 'To do task #2'
    },
    {
        id:3,
        text: 'To do task #3'
    }
  ]


export class ToDoList extends Component {

    render(){
        return <div>
            <List
                size="small"
                bordered
                dataSource={data}
                renderItem={item => (<List.Item>
                <ToDoItem key = {item.id} text = {item.text}/>
                </List.Item>)}
            />
        </div>
    }
}
