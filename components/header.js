import React, {Component, Fragment} from "react";
import HeaderHorizontal from '../components/headerHorizontal'
import HeaderVertical from '../components/headerVertical'

import {connect} from 'react-redux'

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: null
		}
	}

	componentDidMount() {
		this.setState({width: window.innerWidth})
		window.addEventListener("resize", () => (
			this.setState({width: window.innerWidth})
		), false);
	}

	render() {
		return (this.state.width <= 1025 ? <HeaderVertical /> : <HeaderHorizontal />);
	}
}

export default connect(
	state => ({
		state
	}),
	dispatch => ({})
)(Header)
