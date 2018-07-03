import Nav from './nav'
import NProgress from 'nprogress'
import Router from 'next/router'
import React, {Component, Fragment} from "react"
import styled from 'styled-components'

import {connect} from 'react-redux'

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = (url) => {
	NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Header extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.close = this.close.bind(this);
	}

	toggle() {
		this.props.onToggleMenu();
	}
	close() {
		this.props.onCloseMenu();
	}

	shouldComponentUpdate(nextProps, nextState) {
		let html = document.getElementsByTagName('html');
		!this.props.state.changeMenu.openedMenu ? html[0].classList.add("ovf-y_hidden") : html[0].classList.remove("ovf-y_hidden");
		return true;
	}

	render () {
		return (
			<Fragment>
				<Button onClick={this.toggle} >TOGGLEMENU</Button>
				<Fader onClick={this.close} className={this.props.state.changeMenu.openedMenu ? `active` : null} />
				<HeaderWrap className={this.props.state.changeMenu.openedMenu ? `active` : null} ><Nav /></HeaderWrap>
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
)(Header)

const Button = styled.button`
	position: fixed;
	top: 30px;
	right: 30px;
	z-index: 100;
`

const HeaderWrap = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	width: 400px;
	background-color: #333333;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	z-index: 60;
	transform: translateX(100%);
	transition: 0.5s all cubic-bezier(0.4, 0.0, 0.2, 1);
	&.active {
		transform: translateX(0%);
	}
	@media (max-width: 768px) {
		width: 100vw;
	}
`

const Fader = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 50;
	width: 100vw;
	height: 100vh;
	background-color: rgba(20, 20, 20, 0.8);
	opacity: 0;
	visibility: hidden;
	transition: 0.5s all cubic-bezier(0.4, 0.0, 0.2, 1);
	&.active {
		opacity: 1;
		visibility: visible;
	}
	@media (max-width: 768px) {
		display: none;
	}
`
