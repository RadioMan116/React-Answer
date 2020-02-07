import React, {Component} from 'react';
import './Layout';

class Layout extends Component {
	render() {
		return (
			<div className="layoutElem">
				{this.props.children}
			</div>
		)
	}
}

export default Layout;
