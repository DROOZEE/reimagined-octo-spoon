import Nav from './nav'
import NProgress from 'nprogress'
import Router from 'next/router'
import React, {Component} from "react"
import styled from 'styled-components'
import {toggleMenu} from '../store'

import {connect} from 'react-redux'

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = (url) => {
	NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Header extends Component {
	toggle = () => {
		const {dispatch} = this.props
		dispatch(toggleMenu())
	}

  render () {
    return (
			this.props.openedMenu ?	<HeaderWrap>
			<Button onClick={this.toggle}>close</Button><Nav /></HeaderWrap> : <HeaderWrap style={{right: '-100%', transition: '0.3s all cubic-bezier(0.4, 0.0, 0.2, 1)'}}>
			<Button onClick={this.toggle}>close</Button><Nav /></HeaderWrap>
    )
  }
}

function mapStateToProps (state) {
  const {openedMenu} = state
  return {openedMenu}
}

export default connect(mapStateToProps)(Header)

const HeaderWrap = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	width: 400px;
	z-index: 100;
	background-color: #141414;
	transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	${'' /* background-color: lightgray; */}
	box-shadow: 5px 0px 7px 4px #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`

const Button = styled.button`
	position: absolute;
	top: 30px;
	right: 20px;
`
