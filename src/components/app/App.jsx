import React, { Component} from 'react';

import './app.css';
import  AppHeader  from '../app-header/index';
import  AppFooter  from '../app-footer/index';
import { DevTools } from '../../utils/index';
import Layout from 'antd/lib/layout';
import Modal from '../modal/index';
import 'antd/lib/layout/style/css';

const {Header, Footer, Content} = Layout;

class App extends Component {

render() {
return (
	<div className="app">
		{ process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
		<Layout>
			<Header>
				<AppHeader />
			</Header>
			< Modal>
				Внимание! Модульное окно.
			</ Modal>
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
