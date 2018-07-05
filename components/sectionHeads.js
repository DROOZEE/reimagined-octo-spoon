import React, {Component} from "react";
import styled, { css } from 'styled-components';
import Link from 'next/link';
import RegularCenterer from "./regularCenterer";

import PaulHead from "../static/img/members/p3.png";
import PaulGif from "../static/img/members/pavel.gif";
import PaulEllips from "../static/img/members/p2.png";
import PaulBody from "../static/img/members/p1.png";

import PaulMask from "../static/img/members/p0.png";

import AlexHead from "../static/img/members/a3.png";
import AlexGif from "../static/img/members/alex.gif";
import AlexEllips from "../static/img/members/a2.png";
import AlexBody from "../static/img/members/a1.png";

import AlexMask from "../static/img/members/a0.png";

import DanHead from "../static/img/members/d3.png";
import DanGif from "../static/img/members/daniil.gif";
import DanEllips from "../static/img/members/d2.png";
import DanBody from "../static/img/members/d1.png";

import DanMask from "../static/img/members/d0.png";

class SectionHeads extends Component {
	render(){
		return (
			<SectionStd>
				<RegularCenterer className="regular-centerer">
					<MemberSectionText memberDesc className="section-members__title">Meet our Heads</MemberSectionText>
					<MemberSectionTitle className="section-members__desc">Three experts with different<br/> background.</MemberSectionTitle>
					<Row>
						<MemberCard pavel className="member-card">
							<MemberCardImagesWrap  className="member-card__wrap">
								<MemberCardHead className="member-card__head" src={PaulHead}/>
								<MemberCardGif className="member-card__gif" src={PaulGif}/>
								<MemberCardEllips className="member-card__ellips" src={PaulEllips}/>
								<MemberCardBody className="member-card__body" src={PaulBody}/>

								<MemberCardMask className="member-card__mask" src={PaulMask}/>
							</MemberCardImagesWrap>
							<MemberName className="member-card__name">Paul M.</MemberName>
							<MemberDesc className="member-card__job">Chief Executive Officer</MemberDesc>
						</MemberCard>

						<MemberCard alex className="member-card">
							<MemberCardImagesWrap  className="member-card__wrap">
								<MemberCardHead className="member-card__head" src={AlexHead}/>
								<MemberCardGif className="member-card__gif" src={AlexGif}/>
								<MemberCardEllips className="member-card__ellips" src={AlexEllips}/>
								<MemberCardBody className="member-card__body" src={AlexBody}/>

								<MemberCardMask className="member-card__mask" src={AlexMask}/>
							</MemberCardImagesWrap>
							<MemberName className="member-card__name">Alex L.</MemberName>
							<MemberDesc className="member-card__job">Executive Art Director</MemberDesc>
						</MemberCard>

						<MemberCard daniil className="member-card">
							<MemberCardImagesWrap  className="member-card__wrap">
								<MemberCardHead className="member-card__head" src={DanHead}/>
								<MemberCardGif className="member-card__gif" src={DanGif}/>
								<MemberCardEllips className="member-card__ellips" src={DanEllips}/>
								<MemberCardBody className="member-card__body" src={DanBody}/>

								<MemberCardMask className="member-card__mask" src={DanMask}/>
							</MemberCardImagesWrap>
							<MemberName className="member-card__name">Daniel S.</MemberName>
							<MemberDesc className="member-card__job">Chief Technology Officer</MemberDesc>
						</MemberCard>
					</Row>
				</RegularCenterer>

				<Link href="/team">
					<LinkHolder className="section-members__link">Meet our team<i className="link-to__icon maincode-arrow-right-long"></i></LinkHolder>
				</Link>
			</SectionStd>
		);
	}
}

export default SectionHeads;

const SectionStd = styled.section`
	display: block;
	width: 100%;
	background-color: #000000;
	min-height: 100vh;
	padding: 40px 0px 40px 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
`

const Row = styled.div`
	margin-bottom: 150px;
	text-align: center;
	@media (max-width: 1500px) {
		margin-bottom: 110px;
	}
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 10px;
	}
`

const MemberCard = styled.div`
	display: inline-block;
	width: 220px;
	margin-right: 120px;
	position: relative;
	&:last-of-type{
		margin-right: 0px;
	}
	${props => props.alex && css`
		&:hover {
			.member-card__mask {
				opacity: 0;
				transition: 0.4s all cubic-bezier(0.4, 0.0, 0.2, 1);
			}
			.member-card__wrap {
				transform: scale(1);
			}
			.member-card__head {
				transform: translateY(-86px);
			}
			.member-card__gif {
				transform: translate(-55%, -140%);
			}
			.member-card__name {
				color: #ffffff;
			}
			.member-card__job {
				color: #ffffff;
			}
		}
	`}
	${props => props.daniil && css`
		&:hover {
			.member-card__mask {
				opacity: 0;
				transition: 0.4s all cubic-bezier(0.4, 0.0, 0.2, 1);
			}
			.member-card__wrap {
				transform: scale(1);
			}
			.member-card__head {
				transform: translateY(-98px);
			}
			.member-card__gif {
				transform: scale(0.9) translate(-52%, -158%);
			}
			.member-card__name {
				color: #ffffff;
			}
			.member-card__job {
				color: #ffffff;
			}
		}
	`}
	${props => props.pavel && css`
		&:hover {
			.member-card__mask {
				opacity: 0;
				transition: 0.4s all cubic-bezier(0.4, 0.0, 0.2, 1);
			}
			.member-card__wrap {
				transform: scale(1);
			}
			.member-card__head {
				transform: translateY(-96px);
			}
			.member-card__gif {
				transform: scale(0.75) translate(-65%, -165%);
			}
			.member-card__name {
				color: #ffffff;
			}
			.member-card__job {
				color: #ffffff;
			}
		}
	`}
	@media (max-width: 1100px) {
		margin-right: 80px;
	}
	@media (max-width: 1025px) {
		margin-right: 30px;
		&:hover {
			${props => props.alex && css`
				.member-card__head {
					transform: translateY(-65px);
				}
			`}
			${props => props.daniil && css`
				.member-card__head {
					transform: translateY(-70px);
				}
			`}
			${props => props.pavel && css`
				.member-card__head {
					transform: translateY(-68px);
				}
			`}
		}
	}
	@media (max-width: 890px) {
		margin-right: 0px;
		margin-bottom: 50px;
	}
	@media (max-width: 1200px) {
		// width: 240px;
	}
	@media (max-width: 568px) {
		margin-right: 0px;
	}
`
const MemberCardImagesWrap = styled.div`
	position: relative;
	display: inline-block;
	text-align: center;
	width: 210px;
	height: 340px;
	transform: scale(1);
	transition: 0.4s all cubic-bezier(0.4, 0.0, 0.2, 1);
	z-index: 6;
	${'' /* &.member-card__wrap_touched {
		${props => props.alex && css`
			.member-card__mask {
				opacity: 0;
				transition: 0.4s all cubic-bezier(0.4, 0.0, 0.2, 1);
			}
			.member-card__wrap {
				transform: scale(1.06);
			}
			.member-card__head {
				transform: translateY(-80px);
			}
			.member-card__gif {
				transform: translate(-55%, -140%);
			}
			.member-card__name {
				color: #ffffff;
			}
			.member-card__job {
				color: #ffffff;
			}
		`}
		${props => props.daniil && css`
			.member-card__mask {
				opacity: 0;
				transition: 0.4s all cubic-bezier(0.4, 0.0, 0.2, 1);
			}
			.member-card__wrap {
				transform: scale(1.06);
			}
			.member-card__head {
				transform: translateY(-95px);
			}
			.member-card__gif {
				transform: scale(0.9) translate(-52%, -158%);
			}
			.member-card__name {
				color: #ffffff;
			}
			.member-card__job {
				color: #ffffff;
			}
		`}
		${props => props.pavel && css`
			.member-card__mask {
				opacity: 0;
				transition: 0.4s all cubic-bezier(0.4, 0.0, 0.2, 1);
			}
			.member-card__wrap {
				transform: scale(1.06);
			}
			.member-card__head {
				transform: translateY(-92px);
			}
			.member-card__gif {
				transform: scale(0.75) translate(-65%, -165%);
			}
			.member-card__name {
				color: #ffffff;
			}
			.member-card__job {
				color: #ffffff;
			}
		`}
	} */}

	@media (max-width: 1025px) {
		width: 170px;
		height: 280px;
		${'' /* &.member-card__wrap_touched {
			${props => props.alex && css`
				.member-card__head {
					transform: translateY(-65px);
				}
			`}
			${props => props.daniil && css`
				.member-card__head {
					transform: translateY(-70px);
				}
			`}
			${props => props.pavel && css`
				.member-card__head {
					transform: translateY(-68px);
				}
			`}
		} */}
	}
`
const MemberCardHead = styled.img`
	position: absolute;
	top: 1px;
	display: block;
	width: 100%;
	z-index: 5;
	transition: 0.4s all cubic-bezier(0.4, 0.0, 0.2, 1);
`
const MemberCardBody = styled.img`
	position: absolute;
	display: block;
	z-index: 3;
	width: 100%;
	top: 0px;
`

const MemberCardMask = styled.img`
	position: absolute;
	display: block;
	z-index: 4;
	width: 100%;
	top: 0px;
	transition: 0.4s all cubic-bezier(0.4, 0.0, 0.2, 1);
`

const MemberCardEllips = styled.img`
	position: absolute;
	display: block;
	z-index: 1;
	width: 100%;
	top: 0px;
`
const MemberCardGif = styled.img`
	position: absolute;
	display: block;
	width: 110px;
	z-index: 2;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -20%);
	transition: 0.4s all cubic-bezier(0.4, 0.0, 0.2, 1) 0.1s;
	@media (max-width: 1025px) {
		width: 85px;
	}
`
const MemberSectionTitle = styled.h4`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	color: #ffffff;
	margin-bottom: 5px;
	font-size: 24px;
	max-width: 450px;
	margin: 0px auto 90px auto;
	text-align: center;
	@media (max-width: 1500px) {
		font-size: 22px;
	}
`
const MemberSectionText = styled.p`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 18px;
	line-height: 26px;
	color: #444444;
	margin-bottom: 20px;
	text-align: center;
	@media (max-width: 1500px) {
		margin-bottom: 10px;
	}
`

const MemberName = styled.h5`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	color: #444444;
	font-size: 20px;
	line-height: 20px;
	font-weight: 400;
	margin-bottom: 12px;
	transition: 0.4s all cubic-bezier(0.4, 0.0, 0.2, 1);
	@media (max-width: 1025px) {
		font-size: 18px;
	}
`
const MemberDesc = styled.p`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	line-height: 26px;
	color: #444444;
	font-size: 16px;
	line-height: 16px;
	text-align: center;
	transition: 0.4s all cubic-bezier(0.4, 0.0, 0.2, 1);
`
const LinkHolder = styled.a`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 16px;
	line-height: 26px;
	color: #9D9D9D;
	display: inline-block;
	position: static;
	padding: 10px;
	cursor: pointer;
	.link-to__icon {
		position: relative;
		top: 4px;
		display: inline-block;
		font-size: 20px;
		transform: translateX(8px);
		transition: 0.3s transform cubic-bezier(0.4, 0.0, 0.2, 1);
	}
	transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	&:hover {
		color: #ffffff;
		transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
		.link-to__icon {
			transform: translateX(15px);
			transition: 0.3s transform cubic-bezier(0.4, 0.0, 0.2, 1);
		}
	}
`
