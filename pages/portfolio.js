import React, {Fragment, Component} from "react"
import styled, {css} from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'
import {Link, Router} from '../routes'
import Head from '../components/head'

import RegularCenterer from '../components/regularCenterer'
import CompanyLogo from '../components/companyLogo'
import FooterFaces from "../components/footerFaces"

import {connect} from 'react-redux'

import Mockup1 from "../static/img/maincode.jpg";
import Mockup2 from "../static/img/Seveda.jpg";
import Mockup3 from "../static/img/Tokein.jpg";
import Mockup4 from "../static/img/Needle.jpg";
import Mockup5 from "../static/img/Synesthesia.jpg";
import Mockup6 from "../static/img/Bitclave.jpg";
import Mockup7 from "../static/img/Pandora.jpg";

import Logo1 from "../static/img/project/maincode-logo-rev.png";
import Logo2 from "../static/img/project/seveda-logo.png";
import Logo3 from "../static/img/project/token-logo.png";
import Logo4 from "../static/img/project/needle-logo.png";
import Logo5 from "../static/img/project/syn-logo.png";
import Logo6 from "../static/img/project/bitclave-logo.png";
import Logo7 from "../static/img/project/pandora-logo.png";

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	// set(test) {
	// 	const returnedCase = this.props.state.loadCaseData.find(({item}) => item.name === test);
	// 	this.props.onSetData(returnedCase);
	// }
	//
	// loadDoc() {
	// 	function myFunction(xml) {
	// 		var i;
	// 		var xmlDoc = xml.responseXML;
	// 		var table="";
	// 		var TerminalName = xmlDoc.getElementsByTagName("Name");
	// 		var DimSize = xmlDoc.getElementsByTagName("Value")[0].getElementsByTagName("DimSize");
	// 		var Name = xmlDoc.getElementsByTagName("Value")[0].getElementsByTagName("Name");
	// 		var Value = xmlDoc.getElementsByTagName("Value")[0].getElementsByTagName("Value");
	//
	// 		table += `
	// 			<caption>${TerminalName[0].textContent}</caption>
	// 			<tr>
	// 				<td>DS</td>
	// 				<td>${DimSize[0].textContent}</td>
	// 			</tr>
	// 		`
	// 		for (i = 0; i < Name.length && i < Value.length; i++) {
	// 				table += `
	// 					<tr>
	// 						<td>${Name[i].textContent}</td>
	// 						<td>${Value[i].textContent}</td>
	// 					</tr>
	// 				`
	// 		}
	// 		document.getElementById("table").innerHTML = table;
	// 	}
	//
	// 	var xhttp = new XMLHttpRequest();
	// 	xhttp.onreadystatechange = function() {
	// 		if (this.readyState == 4 && this.status == 200) {
	// 			myFunction(this);
	// 		}
	// 	};
	// 	xhttp.open("GET", "/static/3receivers.xml", true);
	// 	xhttp.send();
	// }
	//
	// static async getInitialProps() {
	// 	const res = await fetch('/static/3receivers.xml')
	//
	// 	return {
	// 		shows: 'data'
	// 	}
	// }
	// componentDidMount() {
	// 	this.loadDoc()
	// }

	render () {
		return (
			<Fragment>
				<Head title="Portfolio"
					description="Page portfolio of Daniel site"
				/>
				<Main
					component="main"
					transitionName="main"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
					transitionAppear={true}
					transitionAppearTimeout={500}>

					<RegularCenterer>
						<Link route="/portfolio/maincode">
							<CaseLinkHolder>
								<CaseWrap maincode>
									<MainWrap left>
										<CompanyLogo>
											<StyledImg maincode src={Logo1} alt="maincode"/>
										</CompanyLogo>
										<RegularTitle white>Internal rebranding of the <br/> company website.</RegularTitle>

										<DescWrap>
											<CaseTitle white>JUNE 03, 2018</CaseTitle>
											<CaseDesc white>Branding, UI/UX Design, Web Development</CaseDesc>
										</DescWrap>
									</MainWrap>
								</CaseWrap>
							</CaseLinkHolder>
						</Link>

						<Link route="/portfolio/seveda">
							<CaseLinkHolder>
								<CaseWrap seveda>
									<MainWrap left>
										<CompanyLogo>
											<StyledImg seveda src={Logo2} alt="seveda"/>
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

						<Link route="/portfolio/tokein">
							<CaseLinkHolder>
								<CaseWrap tokein>
									<MainWrap left>
										<CompanyLogo>
											<StyledImg tokein src={Logo3} alt="tokein"/>
										</CompanyLogo>
										<RegularTitle white>Internal rebranding of the <br/> company website.</RegularTitle>

										<DescWrap>
											<CaseTitle white>JUNE 03, 2018</CaseTitle>
											<CaseDesc white>Branding, UI/UX Design, Web Development</CaseDesc>
										</DescWrap>
									</MainWrap>
								</CaseWrap>
							</CaseLinkHolder>
						</Link>

						<Link route="/portfolio/needle">
							<CaseLinkHolder>
								<CaseWrap needle>
									<MainWrap left>
										<CompanyLogo>
											<StyledImg needle src={Logo4} alt="needle"/>
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

						<Link route="/portfolio/synesthesia">
							<CaseLinkHolder>
								<CaseWrap synesthesia>
									<MainWrap left>
										<CompanyLogo>
											<StyledImg synesthesia src={Logo5} alt="synesthesia"/>
										</CompanyLogo>
										<RegularTitle white>Internal rebranding of the <br/> company website.</RegularTitle>

										<DescWrap>
											<CaseTitle white>JUNE 03, 2018</CaseTitle>
											<CaseDesc white>Branding, UI/UX Design, Web Development</CaseDesc>
										</DescWrap>
									</MainWrap>
								</CaseWrap>
							</CaseLinkHolder>
						</Link>

						<Link route="/portfolio/bitclave">
							<CaseLinkHolder>
								<CaseWrap bitclave>
									<MainWrap left>
										<CompanyLogo>
											<StyledImg bitclave src={Logo6} alt="bitclave"/>
										</CompanyLogo>
										<RegularTitle white>Internal rebranding of the <br/> company website.</RegularTitle>

										<DescWrap>
											<CaseTitle white>JUNE 03, 2018</CaseTitle>
											<CaseDesc white>Branding, UI/UX Design, Web Development</CaseDesc>
										</DescWrap>
									</MainWrap>
								</CaseWrap>
							</CaseLinkHolder>
						</Link>

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

					<RegularCenterer>
						<TextWrapLast>
							<TextWrapText>
								<Link route="/technologies">
									<TextWrapLink className="faces-link">Technologies</TextWrapLink>
								</Link> used in projects.
							</TextWrapText>
						</TextWrapLast>
					</RegularCenterer>

					<FooterFaces />
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
)(Portfolio)

const Main = styled(CSSTransitionGroup)`
	padding: 190px 0px 60px 0px;
	min-height: calc(100vh - 80px);
	background-color: #141414;
	width: 100%;
	box-sizing: border-box;
	@media (max-width: 1025px) {
		padding: 120px 0px 30px 0px;
	}
`

const CaseLinkHolder = styled.a`
	display: block;
	margin-bottom: 100px;
	border-radius: 3px;
	cursor: pointer;
	@media (max-width: 1100px) {
		margin-bottom: 40px;
	}
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
		bottom: 0;
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
