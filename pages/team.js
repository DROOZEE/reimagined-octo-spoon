import React, {Fragment, Component} from "react"
import styled, {css} from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'

import Head from '../components/head'

import {connect} from 'react-redux'

import Link from 'next/link';

import FooterFaces from "../components/footerFaces";
import RegularCenterer from '../components/regularCenterer'

import Image1 from "../static/img/team/pavel.png";
import Image2 from "../static/img/team/alexander.png";
import Image3 from "../static/img/team/alex.png";
import Image4 from "../static/img/team/daniil.png";

import Image5 from "../static/img/team/tatiana.png";
import Image6 from "../static/img/team/marina.png";
import Image7 from "../static/img/team/nikita.png";
import Image8 from "../static/img/team/max.png";

import Image9 from "../static/img/team/eugene.png";
import Image10 from "../static/img/team/sergey.png";
import Image11 from "../static/img/team/anna.png";
import Image12 from "../static/img/team/marinaGer.png";

import Image13 from "../static/img/team/maria.png";
import Image14 from "../static/img/team/alina.png";
import Image15 from "../static/img/team/andrey.png";
import Image16 from "../static/img/team/alinaGri.png";

import Image17 from "../static/img/team/valentina.png";
import Image18 from "../static/img/team/anastasia.png";
import Image19 from "../static/img/team/alyona.png";
import Image20 from "../static/img/team/nikitaGre.png";

import Image21 from "../static/img/team/nikitaSok.png";
import Image22 from "../static/img/team/artem.png";

import Gif1 from "../static/img/team/gif/1.gif";
import Gif2 from "../static/img/team/gif/2.gif";
import Gif3 from "../static/img/team/gif/3.gif";
import Gif4 from "../static/img/team/gif/4.gif";

import Gif5 from "../static/img/team/gif/5.gif";
import Gif6 from "../static/img/team/gif/6.gif";
import Gif7 from "../static/img/team/gif/7.gif";
import Gif8 from "../static/img/team/gif/8.gif";

import Gif9 from "../static/img/team/gif/9.gif";
import Gif10 from "../static/img/team/gif/10.gif";
import Gif11 from "../static/img/team/gif/11.gif";
import Gif12 from "../static/img/team/gif/12.gif";

import Gif13 from "../static/img/team/gif/13.gif";
import Gif14 from "../static/img/team/gif/14.gif";
import Gif15 from "../static/img/team/gif/15.gif";
import Gif16 from "../static/img/team/gif/16.gif";

import Gif17 from "../static/img/team/gif/17.gif";
import Gif18 from "../static/img/team/gif/18.gif";
import Gif19 from "../static/img/team/gif/19.gif";
import Gif20 from "../static/img/team/gif/20.gif";

import Gif21 from "../static/img/team/gif/21.gif";
import Gif22 from "../static/img/team/gif/22.gif";

class Team extends Component {
	render () {
		return (
			<Fragment>
				<Head title="Team"
					description="Page our team of Daniel site"
				/>
				<Main
					component="main"
					transitionName="main"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
					transitionAppear={true}
					transitionAppearTimeout={500}>
					<RegularCenterer className="regular-centerer">
						<RegularTitle className="main__title">Only with a team you<br/> can eat a huge pizza.</RegularTitle>
						<RegularText className="main__desc">maincode invites UI/UX Design and Web Development professionals to take part in intersting projects and become a member of our family. We suggest the best environment for self-development and competitive salary. Will be glad to promote your success and personal growth!</RegularText>
						<Link href="/careers" ><BtnStdStyled transparent className="main__btn">Join the team.</BtnStdStyled></Link>
						<TeamRow className="team-row">
							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image1} alt="photo"/>
									<TeamCardGif pavel className="team-card__gif" src={Gif1} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Paul M.</CardText>
								<CardText teamPosition>Chief Executive Officer</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image2} alt="photo"/>
									<TeamCardGif alexander className="team-card__gif" src={Gif2} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Alex L.</CardText>
								<CardText teamPosition>Executive Art Director</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image4} alt="photo"/>
									<TeamCardGif daniil className="team-card__gif" src={Gif4} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Daniel S.</CardText>
								<CardText teamPosition>Chief Technology Officer</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image7} alt="photo"/>
									<TeamCardGif nick className="team-card__gif" src={Gif7} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Dmitry A.</CardText>
								<CardText teamPosition>Full Stack Developer</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image16} alt="photo"/>
									<TeamCardGif alinaGri className="team-card__gif" src={Gif17} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Alina G.</CardText>
								<CardText teamPosition>Product Manager</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image5} alt="photo"/>
									<TeamCardGif tanya className="team-card__gif" src={Gif5} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Tetiana S.</CardText>
								<CardText teamPosition>UI Designer</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image10} alt="photo"/>
									<TeamCardGif sergey className="team-card__gif" src={Gif10} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Sergey V.</CardText>
								<CardText teamPosition>Front End Developer</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image21} alt="photo"/>
									<TeamCardGif nikitaSok className="team-card__gif" src={Gif21} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Nick S.</CardText>
								<CardText teamPosition>Back End Developer</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image17} alt="photo"/>
									<TeamCardGif valentina className="team-card__gif" src={Gif16} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Valentina S.</CardText>
								<CardText teamPosition>Project Manager</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image6} alt="photo"/>
									<TeamCardGif marina className="team-card__gif" src={Gif6} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Marina K.</CardText>
								<CardText teamPosition>UX Designer</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image8} alt="photo"/>
									<TeamCardGif maxim className="team-card__gif" src={Gif8} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Max G.</CardText>
								<CardText teamPosition>Front End Developer</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image22} alt="photo"/>
									<TeamCardGif artem className="team-card__gif" src={Gif22} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Artem G.</CardText>
								<CardText teamPosition>Back End Developer</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image20} alt="photo"/>
									<TeamCardGif nikitaGre className="team-card__gif" src={Gif20} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Nick G.</CardText>
								<CardText teamPosition>Business Analyst </CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image14} alt="photo"/>
									<TeamCardGif alina className="team-card__gif" src={Gif14} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Alina O.</CardText>
								<CardText teamPosition>Illustrator</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image18} alt="photo"/>
									<TeamCardGif anastasia className="team-card__gif" src={Gif18} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Anastasia F.</CardText>
								<CardText teamPosition>Front End Developer</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image12} alt="photo"/>
									<TeamCardGif marinaGer className="team-card__gif" src={Gif12} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Marina G.</CardText>
								<CardText teamPosition>QA Specialist</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image3} alt="photo"/>
									<TeamCardGif alex className="team-card__gif" src={Gif3} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Alexey E.</CardText>
								<CardText teamPosition>Sales Manager</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image19} alt="photo"/>
									<TeamCardGif alyona className="team-card__gif" src={Gif19} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Alena B.</CardText>
								<CardText teamPosition>Graphic Designer</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image13} alt="photo"/>
									<TeamCardGif maria className="team-card__gif" src={Gif13} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Mary Z.</CardText>
								<CardText teamPosition>Content Strategist</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image15} alt="photo"/>
									<TeamCardGif andrey className="team-card__gif" src={Gif15} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Andrew N.</CardText>
								<CardText teamPosition>DevOps Engineer</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image11} alt="photo"/>
									<TeamCardGif anna className="team-card__gif" src={Gif11} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Ann V.</CardText>
								<CardText teamPosition>HR Manager</CardText>
							</TeamCard>

							<TeamCard>
								<TeamImageWrap>
									<TeamCardImage src={Image9} alt="photo"/>
									<TeamCardGif eugene className="team-card__gif" src={Gif9} alt="gif"/>
								</TeamImageWrap>
								<CardText teamName>Eugene I.</CardText>
								<CardText teamPosition>Lawyer</CardText>
							</TeamCard>
						</TeamRow>
					</RegularCenterer>

					<RegularCenterer className="regular-centerer">
						<TextWrapLast>
							<TextWrapText>Have an idea? <Link href="/contact"><TextWrapLink className="faces-link">Talk to us!</TextWrapLink></Link></TextWrapText>
						</TextWrapLast>
					</RegularCenterer>

					<FooterFaces />
				</Main>
			</Fragment>
		)
	}
}

export default connect()(Team)

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

const TeamRow = styled.div`
	display: block;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	@media (max-width: 1280px) {
		justify-content: center;
	}
	@media (max-width: 778px) {
		justify-content: center;
	}
	@media (max-width: 480px) {
		justify-content: center;
	}
`

const CardText = styled.p`
	text-align: center;
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 16px;
	line-height: 26px;
	color: #9D9D9D;
	${props => props.teamName && css`
		font-size: 16px;
		line-height: 24px;
		color: #ffffff;
		margin-bottom: 5px;
	`}
	${props => props.teamPosition && css`
		font-size: 14px;
		line-height: 22px;
		color: #9D9D9D;
	`}
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
		margin-bottom: 70px;
		&:hover {
			color: #141414;
			border: 1px solid #ffffff;
			background-color: #ffffff;
		}
	`}
	${props => props.contactus && css`
		margin-bottom: 0px;
	`}
	@media (max-width: 992px) {
		${props => props.transparent && css`
			margin-bottom: 40px;
		`}
	}
`

const TeamCard = styled.div`
	display: inline-block;
	width: 330px;
	background-color: #000000;
	padding: 0px 0px 15px 0px;
	box-sizing: border-box;
	margin: 0px 20px 40px 0px;
	&:hover {
		.team-card__gif {
			opacity: 1;
		}
	}

	@media (max-width: 480px) {
		margin: 0px 0px 20px 0px;
	}
`

const TeamImageWrap = styled.div`
	height: 215px;
	overflow: hidden;
	margin-bottom: 14px;
	background-color: #000000;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	position: relative;
	padding: 35px 0px 0px 0px;
`
const TeamCardImage = styled.img`
	width: 144px;
	display: block;
	box-sizing: border-box;
`

const TeamCardGif = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 100px;
	transform: translate(-50%, -50%);
	${props => props.daniil && css`
		transform: translate(calc(-50% - 32px), calc(-50% + 52px));
		width: 100px;
		height: 100px;
	`}
	${props => props.alexander && css`
		transform: translate(calc(-50% - 8px), calc(-50% + 3px)) rotate(-2deg);
		width: 100px;
		height: 100px;
	`}
	${props => props.pavel && css`
		transform: translate(calc(-50% - 21px), calc(-50% + 27px));
		width: 130px;
		height: 130px;
	`}
	${props => props.alex && css`
		transform: translate(calc(-50% + 7px), calc(-50% + 38px));
		width: 90px;
		height: 90px;
	`}
	${props => props.tanya && css`
		transform: translate(calc(-50% - 8px), calc(-50% + 5px));
		width: 100px;
	`}
	${props => props.marina && css`
		transform: translate(calc(-50% - 12px), calc(-50% + 16px));
		width: 95px;
	`}
	${props => props.nick && css`
		transform: translate(calc(-50% - 1px), calc(-50% - 60px));
		width: 160px;
		height: 160px;
	`}
	${props => props.maxim && css`
		transform: translate(calc(-50% - 1px), calc(-50% + 44px));
		width: 110px;
		height: 110px;
	`}
	${props => props.eugene && css`
		transform: translate(calc(-50% + 11px), calc(-50% + 5px));
		width: 110px;
	`}
	${props => props.sergey && css`
		transform: translate(calc(-50% + 3px), calc(-50% - 44px));
		width: 90px;
		height: 90px;
	`}
	${props => props.anna && css`
		transform: translate(calc(-50% + 6px), calc(-50% - 2px)) rotate(+2deg);
		width: 100px;
	`}
	${props => props.marinaGer && css`
		transform: translate(calc(-50% - 5px), calc(-50% + 29px));
		width: 100px;
	`}
	${props => props.maria && css`
		transform: translate(calc(-50% - 4px), calc(-50% + 6px));
		width: 85px;
	`}
	${props => props.alina && css`
		transform: translate(calc(-50% + 13px), calc(-50% + 13px));
		width: 80px;
	`}
	${props => props.andrey && css`
		transform: translate(calc(-50% + 1px), calc(-50% + 6px));
		width: 220px;
	`}
	${props => props.alinaGri && css`
		transform: translate(calc(-50% + 1px), calc(-50% + 47px));
		width: 46px;
	`}
	${props => props.valentina && css`
		transform: translate(calc(-50% + 1px), calc(-50% + -2px));
		width: 100px;
	`}
	${props => props.anastasia && css`
		transform: translate(calc(-50% - 5px), calc(-50% + 3px));
		width: 110px;
	`}
	${props => props.alyona && css`
		transform: translate(calc(-50% + 3px), calc(-50% - 5px));
		width: 95px;
	`}
	${props => props.nikitaGre && css`
		transform: translate(calc(-50% + 5px), calc(-50% - 34px));
		width: 150px;
	`}
	${props => props.nikitaSok && css`
		transform: translate(calc(-50% + 5px), calc(-50% + 7px)) rotate(+1deg);
		width: 160px;
	`}
	${props => props.artem && css`
		transform: translate(calc(-50% + 1px), calc(-50% + 4px));
		width: 114px;
	`}
	opacity: 0;
	@media (max-width: 1025px) {
		display: none;
	}
`

const RegularTitle = styled.h1`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 36px;
	color: #ffffff;
	max-width: 670px;
	margin-top: 55px;
	margin-bottom: 20px;
	@media (max-width: 992px) {
		font-size: 24px;
		margin-top: 0px;
	}
`

const RegularText = styled.p`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 16px;
	line-height: 26px;
	color: #9D9D9D;
	max-width: 570px;
	margin-bottom: 35px;
	${props => props.questionText && css`
		max-width: 430px;
		margin-bottom: 35px;
	`}
	@media (max-width: 1500px) {
		${props => props.questionText && css`
			margin-bottom: 25px;
		`}
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
		left: 0px;
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
