import React, {Fragment, Component} from "react"
import Link from 'next/link'
import styled, {css} from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'

import Head from '../components/head'
import SectionContact from '../components/sectionContact'

import {connect} from 'react-redux'

class Contact extends Component {
	render () {
		return (
			<Fragment>
				<Head title="Contact"
					description="Page contacts of Daniel site"
				/>
				<Main
					component="main"
					transitionName="main"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
					transitionAppear={true}
					transitionAppearTimeout={500}>
					<SectionContact></SectionContact>
				</Main>
			</Fragment>
		)
	}
}

export default connect()(Contact)

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

const RegularText = styled.p`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 16px;
	line-height: 26px;
	color: #9D9D9D;
	display: block;

	max-width: 600px;
	padding: 0 0 0 0;
	margin: 0 0 20px 0;
	&:last-of-type {
		margin: 0 0 0 0;
	}
`
