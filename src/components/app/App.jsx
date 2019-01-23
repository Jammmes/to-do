import React, { Component} from 'react';
import './app.css';
import { AppHeader } from '../index';
import { AppFooter } from '../index';
import { DevTools } from '../../utils/index';
import { Layout } from 'antd';
import 'antd/lib/layout/style/css';

const { Header, Footer, Content } = Layout;

class App extends Component {

  static path = '/';

  render() {
    return (
      <div className="app">
          { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
        <Layout>
          <Header>
            <AppHeader />
          </Header>

          <Content>
          { this.props.children }
          </Content>

          <Footer>
            <AppFooter />
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
