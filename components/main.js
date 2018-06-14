import React, {Component} from "react"
import styled from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'
import {toggleMenu, closeMenu} from '../store'

import {connect} from 'react-redux'

class Main extends Component {
	componentWillUnmount() {
		setTimeout(() => {
			this.close();
		},1)
	}

	close = () => {
		const {dispatch} = this.props
		dispatch(closeMenu())
	}

	toggle = () => {
		const {dispatch} = this.props
		dispatch(toggleMenu())
	}

  render () {
    return (
			<MainWrap
				component="main"
				transitionName="main"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={300}
	      transitionAppear={true}
	      transitionAppearTimeout={500}>
				<Button onClick={this.toggle}>open</Button>
	  	  {this.props.children}
			</MainWrap>
    )
  }
}

function mapStateToProps (state) {
  const {openedMenu} = state
  return {openedMenu}
}

export default connect(mapStateToProps)(Main)


const MainWrap = styled(CSSTransitionGroup)`
	padding: 15px 15px 60px 15px;
	min-height: calc(100vh - 80px);
	background-color: #141414;
`

const Button = styled.button`
	position: absolute;
	top: 30px;
	right: 20px;
`
