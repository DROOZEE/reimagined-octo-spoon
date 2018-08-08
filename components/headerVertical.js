import NavVertical from './navVertical'
import React, {Component, Fragment} from "react"
import styled from 'styled-components'

import {MainCodeLogo} from './mainCodeLogo';

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
	test() {
		let html = document.getElementsByTagName('html');
		this.props.state.changeMenu.openedMenu === true ? html[0].classList.add("ovf-y_hidden") : html[0].classList.remove("ovf-y_hidden");
	}

	componentDidUpdate() {
		this.test();
	}

	render () {
		return (
			<Header data-header-vertical>
				{/* <MainCodeLogoInHeader /> */}
				<Button onClick={this.toggle} >TOGGLEMENU</Button>
				<Fader onClick={this.close} className={`vert-fader ${this.props.state.changeMenu.openedMenu ? `active` : null}`} />
				<VertMnuWrap className={`vert-header ${this.props.state.changeMenu.openedMenu ? `active` : null}`} ><NavVertical /></VertMnuWrap>
			</Header>
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

const Header = styled.header`
`

const MainCodeLogoInHeader = styled(MainCodeLogo)`
	position: fixed;
	display: block;
	z-index: 120;
`

const Button = styled.button`
	display: none;
	position: fixed;
	top: 15px;
	right: calc(100% - 100vw + 30px);
	z-index: 200;
	@media (max-width: 1024px) {
		display: block;
	}
`

const VertMnuWrap = styled.div`
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
