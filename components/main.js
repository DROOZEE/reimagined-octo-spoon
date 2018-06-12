import React, {Component} from "react"
import styled from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'

class Main extends Component {
  render () {
    return (
			<MainWrap
				component="main"
				transitionName="main"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={300}
	      transitionAppear={true}
	      transitionAppearTimeout={500}>
	  	  {this.props.children}
			</MainWrap>
    )
  }
}

export default Main


const MainWrap = styled(CSSTransitionGroup)`
	padding: 105px 15px 60px 15px;
	min-height: calc(100vh - 80px);
	background-color: #141414;
`
