import React, {Component} from "react";
import styled, {css} from "styled-components";
import Link from 'next/link'

import RegularCenterer from "./regularCenterer";
import {AccordionContentButton} from "../static/content/ButtonsTexts.json";
import {ResponsibBackend, ResponsibFrontend,
	ResponsibDriver,ResponsibDesign,
	ResponsibManager,PersonalBackend,
	PersonalFrontend,PersonalDriver,
	PersonalDesign,PersonalManager,
	PlusBackend,PlusFrontend,
	PlusDriver,PlusDesign,
	PlusManager} from "../static/content/AccordionLists.json";

class SectionCareer extends Component {
	componentDidMount() {
		// $(".accordion-header").on("click", function(e){
		// 	let headerHeight = $(".header").innerHeight();
		// 	let clicked = $(this);
		//
		// 	let dropDown = $(this).closest(".accordion__item").find(".accordion-content");
		//
		// 	$(this).closest(".accordion").find(".accordion-content").not(dropDown).slideUp();
		//
		//
		// 	if ($(this).hasClass("accordion-header_active")) {
		// 			$(this).removeClass("accordion-header_active");
		// 	} else {
		// 			$(this).closest(".accordion").find(".accordion-header_active").removeClass("accordion-header_active");
		// 			$(this).addClass("accordion-header_active");
		// 			setTimeout(function(){
		// 				TweenLite.to(window, 0.2, {scrollTo:{y: clicked, offsetY: headerHeight}, ease:Power0.easeInOut});
		// 			}, 420);
		// 	}
		//
		// 	dropDown.stop(false, true).slideToggle();
		//
		// 	e.preventDefault();
		// });
	}
	render(){
		return (
			<SectionStd className="section-career">
				<RegularCenterer>
					<RegularTitle>Only with a team you<br/> can eat a huge pizza.</RegularTitle>
					<RegularText>maincode invites UI/UX Design and Web Development professionals to take part in intersting projects and become a member of our family. We suggest the best environment for self-development and competitive salary. Will be glad to promote your success and personal growth!</RegularText>
					<AccordionMy className="accordion">
						<AccordionItem className="accordion__item">
							<AccordionHeader className="accordion-header">
								<JobName className="accordion-header__title">NodeJS Developer</JobName>
								<JobLvl className="accordion-header__lvl">Senior Level</JobLvl>
								<AccordionHeaderIcon className="maincode-plus"></AccordionHeaderIcon>
								<AccordionHeaderIcon className="maincode-minus"></AccordionHeaderIcon>
							</AccordionHeader>

							<AccordionContent className="accordion-content">
								<AccordionList className="accordion-list">
									<AccordionListItem itemTitle className="accordion-list__title">Requirements:</AccordionListItem>
									{ResponsibBackend.map((text, i) =>
										<AccordionListItem item className="accordion-list__item" key={i}><AccordionListIcon className="maincode-plus"></AccordionListIcon>{text}</AccordionListItem>
									)}
								</AccordionList>


								<AccordionList className="accordion-list">
									<AccordionListItem itemTitle className="accordion-list__title">Responsibilities:</AccordionListItem>
									{PersonalBackend.map((text, i) =>
										<AccordionText item className="accordion-list__text" key={i}>{text}</AccordionText>
									)}
								</AccordionList>
								<AccordionList className="accordion-list">
									<AccordionListItem itemTitle className="accordion-list__title">We offer:</AccordionListItem>
									{PlusBackend.map((text, i) =>
										<AccordionListItem item className="accordion-list__item" key={i}><AccordionListIcon className="maincode-plus"></AccordionListIcon>{text}</AccordionListItem>
									)}
								</AccordionList>
								<Link href="/careers/join-us"><BtnStdStyled inverted className="accordion-content__btn">{AccordionContentButton}</BtnStdStyled></Link>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem className="accordion__item">
							<AccordionHeader className="accordion-header">
								<JobName className="accordion-header__title">React.js Developer</JobName>
								<JobLvl className="accordion-header__lvl">Middle Level</JobLvl>
								<AccordionHeaderIcon className="maincode-plus"></AccordionHeaderIcon>
								<AccordionHeaderIcon className="maincode-minus"></AccordionHeaderIcon>
							</AccordionHeader>

							<AccordionContent className="accordion-content">
								<AccordionList className="accordion-list">
									<AccordionListItem itemTitle className="accordion-list__title">Requirements:</AccordionListItem>
									{ResponsibFrontend.map((text, i) =>
										<AccordionListItem item className="accordion-list__item" key={i}><AccordionListIcon className="maincode-plus"></AccordionListIcon>{text}</AccordionListItem>
									)}
								</AccordionList>
								<AccordionList className="accordion-list">
									<AccordionListItem itemTitle className="accordion-list__title">Responsibilities:</AccordionListItem>
									{PersonalFrontend.map((text, i) =>
										<AccordionText item className="accordion-list__text" key={i}>{text}</AccordionText>
									)}
								</AccordionList>

								<AccordionList className="accordion-list">
									<AccordionListItem itemTitle className="accordion-list__title">Plus:</AccordionListItem>
									{PlusFrontend.map((text, i) =>
										<AccordionListItem item className="accordion-list__item" key={i}><AccordionListIcon className="maincode-plus"></AccordionListIcon>{text}</AccordionListItem>
									)}
								</AccordionList>
								<Link href="/careers/join-us"><BtnStdStyled inverted className="accordion-content__btn">{AccordionContentButton}</BtnStdStyled></Link>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem className="accordion__item">
							<AccordionHeader className="accordion-header">
								<JobName className="accordion-header__title">Recruiter</JobName>
								<JobLvl className="accordion-header__lvl">Middle Level</JobLvl>
								<AccordionHeaderIcon className="maincode-plus"></AccordionHeaderIcon>
								<AccordionHeaderIcon className="maincode-minus"></AccordionHeaderIcon>
							</AccordionHeader>

							<AccordionContent className="accordion-content">
								<AccordionList className="accordion-list">
									<AccordionListItem itemTitle className="accordion-list__title">Requirements:</AccordionListItem>
									{ResponsibDriver.map((text, i) =>
										<AccordionListItem item className="accordion-list__item" key={i}><AccordionListIcon className="maincode-plus"></AccordionListIcon>{text}</AccordionListItem>
									)}
								</AccordionList>

								<AccordionList className="accordion-list">
									<AccordionListItem itemTitle className="accordion-list__title">Responsibilities:</AccordionListItem>
									{PersonalDriver.map((text, i) =>
										<AccordionText item className="accordion-list__text" key={i}>{text}</AccordionText>
									)}
								</AccordionList>
								<AccordionList className="accordion-list">
									<AccordionListItem itemTitle className="accordion-list__title">We offer:</AccordionListItem>
									{PlusDriver.map((text, i) =>
										<AccordionListItem item className="accordion-list__item" key={i}><AccordionListIcon className="maincode-plus"></AccordionListIcon>{text}</AccordionListItem>
									)}
								</AccordionList>
								<Link href="/careers/join-us"><BtnStdStyled inverted className="accordion-content__btn">{AccordionContentButton}</BtnStdStyled></Link>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem className="accordion__item">
							<AccordionHeader className="accordion-header">
								<JobName className="accordion-header__title">Pizza Delivery Driver</JobName>
								<JobLvl className="accordion-header__lvl">Middle Level</JobLvl>
								<AccordionHeaderIcon className="maincode-plus"></AccordionHeaderIcon>
								<AccordionHeaderIcon className="maincode-minus"></AccordionHeaderIcon>
							</AccordionHeader>

							<AccordionContent className="accordion-content">
								<AccordionList className="accordion-list">
									<AccordionListItem itemTitle className="accordion-list__title">Requirements:</AccordionListItem>
									{ResponsibDesign.map((text, i) =>
										<AccordionListItem item className="accordion-list__item" key={i}><AccordionListIcon className="maincode-plus"></AccordionListIcon>{text}</AccordionListItem>
									)}
								</AccordionList>

								<AccordionList className="accordion-list">
									<AccordionListItem itemTitle className="accordion-list__title">Responsibilities:</AccordionListItem>
									{PersonalDesign.map((text, i) =>
										<AccordionText item className="accordion-list__text" key={i}>{text}</AccordionText>
									)}
								</AccordionList>
								<AccordionList className="accordion-list">
									<AccordionListItem itemTitle className="accordion-list__title">We offer:</AccordionListItem>
									{PlusDesign.map((text, i) =>
										<AccordionListItem item className="accordion-list__item" key={i}><AccordionListIcon className="maincode-plus"></AccordionListIcon>{text}</AccordionListItem>
									)}
								</AccordionList>
								<Link href="/careers/join-us"><BtnStdStyled inverted className="accordion-content__btn">{AccordionContentButton}</BtnStdStyled></Link>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem className="accordion__item">
							<AccordionHeader className="accordion-header">
								<JobName className="accordion-header__title">Project Manager</JobName>
								<JobLvl className="accordion-header__lvl">Senior Level</JobLvl>
								<AccordionHeaderIcon className="maincode-plus"></AccordionHeaderIcon>
								<AccordionHeaderIcon className="maincode-minus"></AccordionHeaderIcon>
							</AccordionHeader>

							<AccordionContent className="accordion-content">
								<AccordionList className="accordion-list">
									<AccordionListItem itemTitle className="accordion-list__title">Requirements:</AccordionListItem>
									{ResponsibManager.map((text, i) =>
										<AccordionListItem item className="accordion-list__item" key={i}><AccordionListIcon className="maincode-plus"></AccordionListIcon>{text}</AccordionListItem>
									)}
								</AccordionList>

								<AccordionList className="accordion-list">
									<AccordionListItem itemTitle className="accordion-list__title">Responsibilities:</AccordionListItem>
									{PersonalManager.map((text, i) =>
										<AccordionText item className="accordion-list__text" key={i}>{text}</AccordionText>
									)}
								</AccordionList>

								<AccordionList className="accordion-list">
									<AccordionListItem itemTitle className="accordion-list__title">We offer:</AccordionListItem>
									{PlusManager.map((text, i) =>
										<AccordionListItem item className="accordion-list__item" key={i}><AccordionListIcon className="maincode-plus"></AccordionListIcon>{text}</AccordionListItem>
									)}
								</AccordionList>
								<Link href="/careers/join-us"><BtnStdStyled inverted className="accordion-content__btn">{AccordionContentButton}</BtnStdStyled></Link>
							</AccordionContent>
						</AccordionItem>
					</AccordionMy>
				</RegularCenterer>
			</SectionStd>
		);
	}
}

export default SectionCareer;

const SectionStd = styled.section`

`
const AccordionMy = styled.div`

`
const AccordionItem = styled.div`
	border-top: 1px solid #9D9D9D;
	&:last-of-type {
		border-bottom: 1px solid #9D9D9D;
	}
`
const AccordionHeader = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
	line-height: 100px;
	transition: 0s all cubic-bezier(0.4, 0.0, 0.2, 1);
	position: relative;
	user-select: none;
	&:hover {
		background-color: #ffffff;
		transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
		.accordion-header {
			&__title {
				color: #141414;
			}
			&__lvl {
				color: #141414;
			}
		}
		.maincode-plus {
			color: #141414;
		}
	}
	&.accordion-header_active {
		background-color: #ffffff;
		transition: 0s all cubic-bezier(0.4, 0.0, 0.2, 1);
		.accordion-header {
			&__title {
				color: #141414;
			}
			&__lvl {
				color: #141414;
			}
		}
		.maincode-plus {
			display: none;
		}
		.maincode-minus {
			display: inline-block;
		}
	}
	@media (max-width: 992px) {
		line-height: 70px;
		&:hover {
			background-color: #141414;
			transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
			.accordion-header {
				&__title {
					color: #ffffff;
				}
				&__lvl {
					color: #ffffff;
				}
			}
			.maincode-plus {
				color: #ffffff;
			}
		}
		&.accordion-header_active {
			background-color: #ffffff;
			transition: 0s all cubic-bezier(0.4, 0.0, 0.2, 1);
			.accordion-header {
				&__title {
					color: #141414;
				}
				&__lvl {
					color: #141414;
				}
			}
			.maincode-plus {
				display: none;
			}
			.maincode-minus {
				display: inline-block;
			}
		}
	}
`
const AccordionContent = styled.div`
	padding: 20px 50px 50px 50px;
	box-sizing: border-box;
	width: 100%;
	background-color: #ffffff;
	display: none;
	@media (max-width: 992px) {
		padding: 5px 15px 30px 15px;
	}
`
const JobName = styled.h4`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 20px;
	margin-left: 50px;
	flex-basis: 400px;
	display: inline-block;
	position: relative;
	color: #ffffff;
	@media (max-width: 992px) {
		margin-left: 15px;
		font-size: 16px;
	}
	@media (max-width: 768px) {
		flex-basis: 300px;
	}
	@media (max-width: 530px) {
		font-size: 14px;
	}
`

const JobLvl = styled.h5`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 20px;
	margin-left: 210px;
	flex-basis: 150px;
	display: inline-block;
	position: relative;
	color: #9D9D9D;
	@media (max-width: 1440px) {
		margin-left: 100px;
	}
	@media (max-width: 992px) {
		margin-left: 0px;
		font-size: 16px;
		flex-basis: 140px;
	}
	@media (max-width: 530px) {
		display: none;
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
	${props => props.inverted && css`
		background-color: #141414;
		color: #ffffff;
		&:hover {
			background-color: rgba(20, 20, 20, 0.8);
			color: #ffffff;
		}
	`}
	@media (max-width: 480px) {
		width: 100%;
	}
`
const AccordionHeaderIcon = styled.i`
	position: absolute;
	right: 35px;
	top: 50%;
	transform: translateY(-50%);
	font-size: 15px;
	&.maincode-plus {
		display: inline-block;
		color: #ffffff;
	}
	&.maincode-minus {
		display: none;
		color: #141414;
	}
	@media (max-width: 992px) {
		font-size: 13px;
		right: 20px;
	}
	@media (max-width: 530px) {
		right: 10px;
	}
`

const AccordionListIcon = styled.i`
	position: absolute;
	top: 15px;
	left: 0px;
	transform: translate(2px, -50%);
	display: inline-block;
	font-size: 8px;
	@media (max-width: 992px) {
		margin-right: 15px;
		top: 12px;
		left: 0px;
		transform: translate(1px, -50%);
	}
`

const AccordionList = styled.ul`
	margin-bottom: 30px;
	@media (max-width: 992px) {
		margin-bottom: 20px;
	}
`
const AccordionText = styled.p`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 16px;
	display: block;
	line-height: 28px;
	margin-bottom: 5px;
	color: #141414;
	padding-left: 0px;
	&:last-of-type {
		margin-bottom: 0px;
	}
	@media (max-width: 992px) {
		font-size: 14px;
		line-height: 22px;
		margin-bottom: 3px;
		&:last-of-type {
			margin-bottom: 0px;
		}
	}
`

const AccordionListItem = styled.li`
	position: relative;
	${props => props.itemTitle && css`
		font-family: "AvantGardeLT", sans-serif;
		-webkit-font-smoothing: antialiased;
		font-size: 18px;
		display: inline-block;
		color: #141414;
		margin-bottom: 15px;
	`}
	${props => props.item && css`
		font-family: "Circular", sans-serif;
		-webkit-font-smoothing: antialiased;
		font-size: 16px;
		display: block;
		line-height: 28px;
		margin-bottom: 5px;
		color: #141414;
		padding-left: 30px;
		&:last-of-type {
			margin-bottom: 0px;
		}
	`}
	@media (max-width: 992px) {
		${props => props.itemTitle && css`
			font-size: 14px;
			margin-bottom: 10px;
		`}
		${props => props.item && css`
			font-size: 14px;
			line-height: 22px;
			margin-bottom: 3px;
			padding-left: 25px;
			&:last-of-type {
				margin-bottom: 0px;
			}
		`}
	}
`

const RegularTitle = styled.h1`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 36px;
	color: #ffffff;
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
	margin-bottom: 70px;
	@media (max-width: 992px) {
		font-size: 16px;
		margin-bottom: 40px;
	}
`
