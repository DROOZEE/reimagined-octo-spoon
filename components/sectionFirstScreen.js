import React, {Component} from "react";
import styled from 'styled-components';


import DownScroll from '../components/downScroll'
import {DigitalLogo, DigitalLogoHighlighted} from '../components/digitalLogo'

import RegularCenterer from "./regularCenterer";

export default class SectionFirstScreen extends Component {
	render() {
		return (
			<SectionStd>
				<RegularCenterer>
					<FirstScreen className="first-screen">
						<FirstScreenContent className="first-screen__content">
							<FirstScreenTitle className="first-screen__title">
							Create top-notch and exclusive web solutions for your business with maincode.</FirstScreenTitle>
							<FirstScreenSubTitle className="first-screen__sub-title">Web Development &amp; Design Innovation</FirstScreenSubTitle>
							<DigitalLogo/>
							<DigitalLogoHighlighted/>
						</FirstScreenContent>
					</FirstScreen>

					<DownScroll />
				</RegularCenterer>
			</SectionStd>
		);
	}
}

const SectionStd = styled.section`
	width: 100%;
	background-color: #141414;
`

const FirstScreen = styled.div`
	display: block;
	width: 100%;
	height: calc(100vh - 180px);
	position: relative;
	user-select: none;
	padding: 0 0 90px 0;
	@media (max-width: 1025px) {
		padding: 0 0 90px 0;
	}
	@media (max-width: 768px) {
		padding: 0 0 110px 0;
	}
`

const FirstScreenContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	position: relative;
`
const FirstScreenTitle = styled.h1`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 40px;
	line-height: 1.4;
	color: #ffffff;
	margin-bottom: 2.651113467656416vh;
	width: 660px;
	z-index: 2;
	@media (max-width: 1500px) {
		font-size: 32px;
		width: 550px;
		margin-bottom: 15px;
	}
	@media (max-width: 1025px) {
		font-size: 30px;
		width: 490px;
	}
	@media (max-width: 580px) {
		font-size: 24px;
		width: 100%;
	}
`
const FirstScreenSubTitle = styled.h3`
	font-family: "Circular", sans-serif;
	font-size: 18px;
	font-weight: 400;
	-webkit-font-smoothing: antialiased;
	color: #9D9D9D;
	width: 700px;
	z-index: 2;
	@media (max-width: 1025px) {
		font-size: 16px;
		width: 100%;
	}
`
