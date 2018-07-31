import NavVertical from './navVertical'
import React, {Component, Fragment} from "react"
import styled from 'styled-components'

import {connect} from 'react-redux'


class HeaderVertical extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.close = this.close.bind(this);
		this.test = this.test.bind(this);
	}
	toggle() {
		this.props.onToggleMenu();
	}
	close() {
		this.props.onCloseMenu();
	}
	shouldComponentUpdate(nextProps, nextState) {
		// let html = document.getElementsByTagName('html');
		// if(this.props.state.changeMenu.openedMenu === true) {
		// 	html[0].classList.add("ovf-y_hidden")
		// } else {
		// 	html[0].classList.remove("ovf-y_hidden");
		// }
		// this.props.state.changeMenu.openedMenu === true ? html[0].classList.add("ovf-y_hidden") : html[0].classList.remove("ovf-y_hidden");
		return true;
	}
	test() {
		let html = document.getElementsByTagName('html');
		this.props.state.changeMenu.openedMenu === true ? html[0].classList.add("ovf-y_hidden") : html[0].classList.remove("ovf-y_hidden");
		window.addEventListener("resize", () => {
			document.getElementsByClassName("vert-header")[0].classList.remove("active");
			document.getElementsByClassName("vert-fader")[0].classList.remove("active");
			html[0].classList.remove("ovf-y_hidden");
		}, false);
	}

	componentDidUpdate() {
		this.test();
	}

	render () {
		return (
			<Fragment>
				<Button onClick={this.toggle} >TOGGLEMENU</Button>
				<Fader onClick={this.close} className={`vert-fader ${this.props.state.changeMenu.openedMenu ? `active` : null}`} />
				<Header className={`vert-header ${this.props.state.changeMenu.openedMenu ? `active` : null}`} ><NavVertical /></Header>
			</Fragment>
		)
	}
}

export default connect(
	state => ({
		state
	}),
	dispatch => ({
		onToggleMenu: (data) => {
			dispatch({type: 'TOGGLEMENU', payload: data});
		},
		onCloseMenu: (data) => {
			dispatch({type: 'CLOSEMENU', payload: data});
		}
	})
)(HeaderVertical)

const Button = styled.button`
	display: none;
	position: fixed;
	top: 30px;
	right: calc(100% - 100vw + 30px);
	z-index: 200;
	@media (max-width: 1024px) {
		display: block;
	}
`

const Header = styled.header`
	display: none;
	position: fixed;
	top: 0;
	right: calc(100% - 100vw);
	background-color: #333333;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	z-index: 110;
	transform: translateX(100%);
	transition: 0.5s transform cubic-bezier(0.4, 0.0, 0.2, 1);
	&.active {
		transform: translateX(0%);
	}
	@media (max-width: 1024px) {
		display: flex;
		width: 400px;
	}
	@media (max-width: 768px) {
		width: 100vw;
	}
`

const Fader = styled.div`
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 110;
	width: 100vw;
	height: 100vh;
	background-color: rgba(20, 20, 20, 0.8);
	opacity: 0;
	visibility: hidden;
	transition: 0.5s visibility cubic-bezier(0.4, 0.0, 0.2, 1), 0.5s opacity cubic-bezier(0.4, 0.0, 0.2, 1);
	&.active {
		opacity: 1;
		visibility: visible;
	}
	@media (max-width: 1024px) {
		display: block;
	}
	@media (max-width: 768px) {
		display: none;
	}
`
