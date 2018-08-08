import React, {Fragment, Component} from "react"
import styled, {css} from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'
import {Link, Router} from '../routes'

import Head from '../components/head'

import RegularCenterer from '../components/regularCenterer'

import {connect} from 'react-redux'

import CompanyLogo from '../components/companyLogo'

import Mockup7 from "../static/img/Pandora.jpg";

import Logo7 from "../static/img/project/pandora-logo.png";

class Case extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<Fragment>
				<Head title="bitclave"
							description="bitclave desc"
				/>

				<Main
					className="case"
					component="main"
					transitionName="main"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
					transitionAppear={true}
					transitionAppearTimeout={500}>

					<RegularCenterer>
						<Link route="/portfolio/pandora">
							<CaseLinkHolder style={{marginBottom: 0}}>
								<CaseWrap pandora>
									<MainWrap left>
										<CompanyLogo>
											<StyledImg pandora src={Logo7} alt="pandora"/>
										</CompanyLogo>
										<RegularTitle black>Internal rebranding of the <br/> company website.</RegularTitle>

										<DescWrap>
											<CaseTitle black>JUNE 03, 2018</CaseTitle>
											<CaseDesc black>Branding, UI/UX Design, Web Development</CaseDesc>
										</DescWrap>
									</MainWrap>
								</CaseWrap>
							</CaseLinkHolder>
						</Link>
					</RegularCenterer>
				</Main>
			</Fragment>
		)

	}
}

export default connect(
	state => ({
		state
	}),
	dispatch => ({

	})
)(Case)

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

const CaseLinkHolder = styled.a`
	display: block;
	border-radius: 3px;
	cursor: pointer;
`

const MainWrap = styled.div`
	display: flex;
	${props => props.left && css`
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		padding: 40px 70px 40px 70px;
		box-sizing: border-box;
		flex-basis: 70%;
		position: relative;
		@media (max-width: 1100px) {
			flex-basis: 100%;
			padding: 40px;
		}
		@media (max-width: 768px) {
			padding: 30px;
		}
	`}
`

const DescWrap = styled.div``

const CaseWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: space-between
	width: 100%;
	height: 600px;
	transition: 0.3s transform cubic-bezier(0.4, 0.0, 0.2, 1);
	background-position: 100% 50%;
	background-repeat: no-repeat;
	border-radius: 3px;
	${props => props.maincode && css`
		background-size: contain;
		background-image: url(${Mockup1});
		background-color: #1A1A1A;
	`}
	${props => props.seveda && css`
		background-size: contain;
		background-image: url(${Mockup2});
		background-color: #EEF2F5;
	`}
	${props => props.tokein && css`
		background-size: cover;
		background-image: url(${Mockup3});
	`}
	${props => props.needle && css`
		background-size: cover;
		background-image: url(${Mockup4});
		background-color: #FFEDEF;
	`}
	${props => props.synesthesia && css`
		background-size: cover;
		background-image: url(${Mockup5});
	`}
	${props => props.bitclave && css`
		background-size: cover;
		background-image: url(${Mockup6});
	`}
	${props => props.pandora && css`
		background-size: cover;
		background-image: url(${Mockup7});
		background-color: #F5F4FA;
	`}
	@media (max-width: 1550px) {
		height: 500px;
	}
	@media (max-width: 1250px) {
		height: 400px;
	}
	@media (max-width: 1100px) {
		${props => props.maincode && css`
			background-image: none;
		`}
		${props => props.seveda && css`
			background-image: none;
		`}
		${props => props.tokein && css`
			background-image: linear-gradient(-135deg, #4CD367 0%, #37AF4E 100%);
		`}
		${props => props.needle && css`
			background-image: none;
		`}
		${props => props.synesthesia && css`
			background-image: linear-gradient(135deg, #4C0B0B 0%, #9D4746 100%);
		`}
		${props => props.bitclave && css`
			background-image: linear-gradient(45deg, #B424FF 0%, #25D0FE 100%);
		`}
		${props => props.pandora && css`
			background-image: none;
		`}
	}
`

const StyledImg = styled.img`
	${props => props.maincode && css`
		display: inline-block;
		width: 120px;
	`}
	${props => props.seveda && css`
		display: inline-block;
		width: 110px;
	`}
	${props => props.tokein && css`
		display: inline-block;
		width: 64px;
	`}
	${props => props.needle && css`
		display: inline-block;
		width: 104px;
	`}
	${props => props.synesthesia && css`
		display: inline-block;
		width: 170px;
	`}
	${props => props.bitclave && css`
		display: inline-block;
		width: 147px;
	`}
	${props => props.pandora && css`
		display: inline-block;
		width: 50px;
	`}
	@media (max-width: 1250px) {
		${props => props.maincode && css`
			display: inline-block;
			width: 100px;
		`}
		${props => props.seveda && css`
			display: inline-block;
			width: 90px;
		`}
		${props => props.tokein && css`
			display: inline-block;
			width: 44px;
		`}
		${props => props.needle && css`
			display: inline-block;
			width: 84px;
		`}
		${props => props.synesthesia && css`
			display: inline-block;
			width: 150px;
		`}
		${props => props.bitclave && css`
			display: inline-block;
			width: 117px;
		`}
		${props => props.pandora && css`
			display: inline-block;
			width: 40px;
		`}
	}
`

const RegularTitle = styled.h2`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 36px;
	color: #ffffff;
	position: absolute;
	left: 70px;
	top: 50%;
	transform: translate(0, -50%);
	@media (max-width: 1550px) {
		font-size: 32px;
	}
	${props => props.white && css`
		color: #ffffff;
	`}
	${props => props.black && css`
		color: #1A1A1A;
	`}
	@media (max-width: 1440px) {
		font-size: 30px;
	}
	@media (max-width: 1100px) {
		left: 40px;
		padding-right: 40px;
	}
	@media (max-width: 768px) {
		font-size: 22px;
		left: 30px;
		padding-right: 15px;
	}
	@media (max-width: 480px) {
		font-size: 18px;
	}
`

const CaseTitle = styled.h5`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	color: #ffffff;
	font-size: 14px;
	line-height: 22px;
	margin-bottom: 2px;
	text-transform: uppercase;
	letter-spacing: 1px;
	${props => props.white && css`
		color: #ffffff;
	`}
	${props => props.black && css`
		color: #1A1A1A;
	`}
`

const CaseDesc = styled.h6`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	color: #9D9D9D;
	font-size: 14px;
	line-height: 22px;
	font-weight: 400;
	${props => props.white && css`
		color: #ffffff;
	`}
	${props => props.black && css`
		color: #1A1A1A;
	`}
`
