import React from "react";
import styled, {css} from 'styled-components';
import Link from 'next/link';

import Image from "../static/img/StockSnap.jpg";

export default function SectionFullScreen() {
	return (
		<SectionStd>
			<ImageWrap>
				<ImageFullWStd src={Image} alt="home"/>
			</ImageWrap>
			<TextWrap>
				<RegularTitle>Only with a team you<br/> can eat a huge pizza.</RegularTitle>
				<RegularText>maincode invites UI/UX Design and Web Development professionals to take part in intersting projects and become a member of our family. We suggest the best environment for self-development and competitive salary. Will be glad to promote your success and personal growth!</RegularText>
				<Link href="/careers"><BtnStdStyled transparent>Join the team.</BtnStdStyled></Link>
			</TextWrap>
		</SectionStd>
	);
}

const SectionStd = styled.section`
	@media (max-width: 1025px) {
		display: none;
	}
`
const ImageWrap= styled.div`
	height: 100vh;
	overflow: hidden;
	@media (max-width: 1400px) {
		height: 600px;
	}
`
const TextWrap = styled.div`
	width: calc(760px + 13.5416666667vw);
	position: absolute;
	bottom: 0;
	left: 0;
	transform: translateY(-30%);
	padding: 70px 190px 100px 13.5416666667vw;
	position: relative;
	background-color: #141414;
	box-sizing: border-box;
	@media (max-width: 1750px) {
		padding: 45px 160px 0px 12vw;
	}
	@media (max-width: 1500px) {
		width: calc(660px + 13.5416666667vw);
		padding: 65px 160px 90px 12vw;
	}
	@media (max-width: 1400px) {
		transform: translateY(0%);
		width: 100%;
		padding: 45px 160px 90px 12vw;
	}
`

const ImageFullWStd = styled.img`
	display: inline-block;
	width: 100%;
	transform: translateY(-180px);
	@media (max-width: 1500px) {
		transform: translateY(-120px);
	}
	@media (max-width: 1400px) {
		transform: translateY(-80px);
	}
`
const BtnStdStyled = styled.button`
	display: inline-block;
	appearance: none;
	font-family: "CircularMed", sans-serif;
	font-size: 18px;
	line-height: 48px;
	background-color: #ffffff;
	color: #141414;
	border: none;
	outline: none;
	padding: 0px 25px;
	text-align: center;
	cursor: pointer;
	border-radius: 3px;
	-webkit-font-smoothing: antialiased;
	transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	&:hover {
		background-color: rgba(255, 255, 255, 0.7);
		color: #141414;
	}
	${props => props.transparent && css`
		line-height: 46px;
		color: #ffffff;
		border: 1px solid #ffffff;
		background-color: transparent;
		&:hover {
			color: #141414;
			border: 1px solid #ffffff;
			background-color: #ffffff;
		}
	`}
`

const RegularTitle = styled.h3`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	color: #ffffff;
	margin-bottom: 20px;
	font-size: 30px;
	@media (max-width: 1500px) {
		margin-bottom: 15px;
		font-size: 26px;
	}
`

const RegularText = styled.p`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 16px;
	line-height: 26px;
	color: #9D9D9D;
	margin-bottom: 35px;
	width: 570px;
	@media (max-width: 1500px) {
		margin-bottom: 30px;
	}
`
