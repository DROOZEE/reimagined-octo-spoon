import React, {Fragment, Component} from "react"
import styled, {css} from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'
import Link from 'next/link'

import Head from '../components/head'
import FooterFaces from "../components/footerFaces"
import RegularCenterer from '../components/regularCenterer'
import SectionFirstScreen from '../components/sectionFirstScreen'
import SectionHeads from '../components/sectionHeads'
import SectionOffer from '../components/sectionOffer'
import SectionTeaser from '../components/sectionTeaser'
import SectionFullScreen from '../components/sectionFullScreen'

import {connect} from 'react-redux'

class Home extends Component {
	render() {
		return (
			<Fragment>
				<Head title="Home"
					description="Page homepage of Daniel site"
				/>
				<Main
					component="main"
					transitionName="main"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
					transitionAppear={true}
					transitionAppearTimeout={500}>

					<SectionFirstScreen />

					<SectionHeads />

					<SectionOffer />



					<SectionTeaser />

					<SectionFullScreen />


					<RegularCenterer>
						<TextWrapLast>
							<TextWrapText>See our <Link href="/portfolio"><TextWrapLink className="faces-link">cases!</TextWrapLink></Link></TextWrapText>
						</TextWrapLast>
					</RegularCenterer>

					<FooterFaces />
				</Main>
			</Fragment>
		)
	}
}

export default connect()(Home)

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

const TextWrapLast = styled.div`
	margin: 0 auto;
	height: calc(100vh - 140px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 140px 0 0 0;
	box-sizing: border-box;
	@media (max-width: 1025px) {
		height: calc(100vh - 110px);
		padding: 110px 0 0 0;
	}
`

const TextWrapText = styled.h3`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 42px;
	line-height: 1.4;
	color: #ffffff;
	@media (max-width: 1500px) {
		font-size: 32px;
	}
	@media (max-width: 1025px) {
		font-size: 26px;
	}
`

const TextWrapLink = styled.a`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 42px;
	line-height: 1.4;
	color: #ffffff;
	position: relative;
	padding-bottom: 5px;
	cursor: pointer;
	&::after {
		content: '';
		position: absolute;
		bottom: 2px;
		left: 0;
		background-color: #ffffff;
		height: 2px;
		width: 100%;
		transform-origin: 100% 50%;
		transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	}
	&:hover {
		&::after{
			transform: scaleX(0);
		}
	}
	@media (max-width: 1500px) {
		font-size: 32px;
	}
	@media (max-width: 1025px) {
		font-size: 26px;
	}
`
