import React, {Fragment, Component} from "react"
import styled, {css} from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'

import Head from '../components/head'
import RegularCenterer from '../components/regularCenterer'

import {connect} from 'react-redux'

class Showreel extends Component {
	render () {
		return (
			<Fragment>
				<Head title="Showreel"
					description="Page our showreel of Daniel site"
				/>
				<Main
					component="main"
					transitionName="main"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
					transitionAppear={true}
					transitionAppearTimeout={500}>
					<RegularCenterer>
						<ShowreelBlockStd>
							<ShowreelIframeStd src="https://player.vimeo.com/video/277631082?autoplay=1&title=0&byline=0&portrait=0" frameBorder="0" allowFullScreen></ShowreelIframeStd>
						</ShowreelBlockStd>
					</RegularCenterer>
				</Main>
			</Fragment>
		)
	}
}

export default connect()(Showreel)

const Main = styled(CSSTransitionGroup)`
	padding: 90px 0px 60px 0px;
	min-height: calc(100vh - 80px);
	background-color: #141414;
	width: 100%;
	box-sizing: border-box;
	@media (max-width: 1025px) {
		padding: 90px 0px 30px 0px;
	}
`

const ShowreelBlockStd = styled.div`
	position: relative;
	padding-bottom:56.25%;
`

const ShowreelIframeStd = styled.iframe`
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
`
