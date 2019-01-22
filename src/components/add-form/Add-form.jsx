import React, { Component } from 'react';

import {
    Form, Input, Button,Card
  } from 'antd';
  import 'antd/lib/form/style/css';
  import 'antd/lib/input/style/css';
  import 'antd/lib/button/style/css';
  import 'antd/lib/card/style/css';


export class AddForm extends Component {

    render() {
        return (
            <Form layout="inline">
            <Card>
              <Form.Item>
                  <Input  placeholder="To do" />
              </Form.Item>
              <Form.Item>
                <Button>Add to do</Button>
              </Form.Item>
              </Card>
            </Form>
        );
    }

}
