import React from "react";
import styled, { css } from "styled-components";

import {Architecture,AdditionsDesign,DesignTools,FrameworksFront,AdditionsFront,FrontEndTools,FrameworksBack,AdditionsBack,ContentManagementSystem,Database,Actionitems} from "../static/content/TechnologyLists.json";

import RegularCenterer from '../components/regularCenterer'
import Design from "../static/img/design.gif";
import Web from "../static/img/web.gif";
import Qa from "../static/img/qa.gif";

export function SectionTechnologiesStack(props) {
	return (
		<SectionStd>
			<RegularCenterer>
				<TechTitle>We have extensive experience in all brand-new technologies to create you turn-key web solutions.</TechTitle>
				<TechnologyIntro>
					<TechnologyNumber>01</TechnologyNumber>
					<RegularTitle>UX / UI Design</RegularTitle>
					<RegularText>Today Design effects not only customer’s visually-esthetic perception, but is also acknowledged as one of the main tool in Web Marketing, helping a customer choose the right route of the application map. </RegularText>
					<GifImageStyled src={Design} />
					<WrapperStd subblock>
						<SubTitle>UX - User Experience </SubTitle>
						<SubText>Our designers care about usability and profit of your product. Having marketing knowledge they know how to lead your customer to the right action and use your application with ease.</SubText>
					</WrapperStd>

					<WrapperStd subblock>
						<SubTitle>UI - User Interface</SubTitle>
						<SubText>Our designers will make your customer feel the difference and quality of your product by creating professional graphics, animations, logos etc.</SubText>
						<SubText>Profound knowledge of psychological impact on a user by using correct colors, sizes, forms, textures, labels, appropriate functionality will make the professional product with top branding campaign for achieving higher analytics data; number of visitors, conversion, bounce rate increase makes us best specialists in our trade.</SubText>
					</WrapperStd>
				</TechnologyIntro>

				<WrapperStd>
					<StackTitle>Design Stack</StackTitle>
					<ListStd>
						<ListItemStd itemTitle>Architecture:</ListItemStd>
						{Architecture.map((text, i) =>
							<ListItemStd item key={i}>{text}</ListItemStd>
						)}
					</ListStd>
					<ListStd>
						<ListItemStd itemTitle>Additions:</ListItemStd>
						{AdditionsDesign.map((text, i) =>
							<ListItemStd item key={i}>{text}</ListItemStd>
						)}
					</ListStd>
					<ListStd>
						<ListItemStd itemTitle>DesignTools:</ListItemStd>
						{DesignTools.map((text, i) =>
							<ListItemStd item key={i}>{text}</ListItemStd>
						)}
					</ListStd>
				</WrapperStd>

				<TechnologyIntro>
					<TechnologyNumber>02</TechnologyNumber>
					<RegularTitle>Web Development</RegularTitle>
					<RegularText>Our web developers can use a plethora of different scripting languages to create web applications. All of them have their own advantages, disadvantages and specific purposes.</RegularText>
					<GifImageStyled src={Web} />
					<WrapperStd subblock>
						<SubTitle>Front-end developers</SubTitle>
						<SubText>will take care  how your web product will look like. We consider cross-browser compatibility to have ultimate importance according to nowadays reality, i.e. how the web application will function across various different browsers, such as Mozilla Firefox, Internet Explorer, Google Chrome, Opera, Safari, mobile browsers etc. We will take care your product looks pixel-perfect in any environment.</SubText>
					</WrapperStd>

					<WrapperStd subblock>
						<SubTitle>Back-end developers</SubTitle>
						<SubText>deal with the ‘server-side’. They develop the stuff we don’t physically see on the website, but make your product execute various functionality involving database administration. You can see all the top technologies in our framewoks list as well.</SubText>
					</WrapperStd>
				</TechnologyIntro>

				<WrapperStd>
					<StackTitle>Front-End Stack</StackTitle>
					<ListStd>
						<ListItemStd itemTitle>Frameworks:</ListItemStd>
						{FrameworksFront.map((text, i) =>
							<ListItemStd item key={i}>{text}</ListItemStd>
						)}
					</ListStd>
					<ListStd>
						<ListItemStd itemTitle>Additions:</ListItemStd>
						{AdditionsFront.map((text, i) =>
							<ListItemStd item key={i}>{text}</ListItemStd>
						)}
					</ListStd>
					<ListStd>
						<ListItemStd itemTitle>Front-End Tools:</ListItemStd>
						{FrontEndTools.map((text, i) =>
							<ListItemStd item key={i}>{text}</ListItemStd>
						)}
					</ListStd>
				</WrapperStd>

				<WrapperStd>
					<StackTitle>Back-End Stack</StackTitle>
					<ListStd>
						<ListItemStd itemTitle>Frameworks:</ListItemStd>
						{FrameworksBack.map((text, i) =>
							<ListItemStd item key={i}>{text}</ListItemStd>
						)}
					</ListStd>
					<ListStd>
						<ListItemStd itemTitle>Additions:</ListItemStd>
						{AdditionsBack.map((text, i) =>
							<ListItemStd item key={i}>{text}</ListItemStd>
						)}
					</ListStd>
					<ListStd>
						<ListItemStd itemTitle>CMS:</ListItemStd>
						{ContentManagementSystem.map((text, i) =>
							<ListItemStd item key={i}>{text}</ListItemStd>
						)}
					</ListStd>
					<ListStd>
						<ListItemStd itemTitle>Database:</ListItemStd>
						{Database.map((text, i) =>
							<ListItemStd item key={i}>{text}</ListItemStd>
						)}
					</ListStd>
				</WrapperStd>

				<TechnologyIntro>
					<TechnologyNumber>03</TechnologyNumber>
					<RegularTitle>Quality Assurance</RegularTitle>
					<RegularText>Quality Assurance ia also an important part of development process as it can save time, money and avoid further frustration by early discovering defects in the development cycle.</RegularText>
					<GifImageStyled src={Qa} />

					<WrapperStd subblock>
						<SubTitle>Quality Assurance</SubTitle>
						<SubText>Even if you have a finished product a proper QA testing will show all inconsistencies and errors. Testing of a product according to the speciafication requirements will help not only indicate if it corresponds the documentation, but whether it will survive the real world and work correctly for years and years.</SubText>
					</WrapperStd>
				</TechnologyIntro>

				<WrapperStd>
					<StackTitle>QA Stack</StackTitle>
					<ListStd>
						<ListItemStd itemTitle>Action items:</ListItemStd>
						{Actionitems.map((text, i) =>
							<ListItemStd item key={i}>{text}</ListItemStd>
						)}
					</ListStd>
				</WrapperStd>
			</RegularCenterer>
		</SectionStd>
	);
}

const SectionStd = styled.section`

`

const TechTitle = styled.h1`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 36px;
	color: #ffffff;
	margin-top: 100px;
	width: 711px;
	@media (max-width: 1025px) {
		font-size: 26px;
		width: 511px;
	}
	@media (max-width: 580px) {
		font-size: 24px;
		width: 100%;
	}
`

const WrapperStd = styled.div`
	${props => props.subblock && css`
			margin-bottom: 40px;
	`}
`
const TechnologyIntro = styled.div`
	padding: 150px 0px 0px 0px;
	@media (max-width: 650px) {
		padding: 100px 0px 0px 0px;
	}
`

const TechnologyNumber = styled.p`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	color: #ffffff;
	font-size: 30px;
	line-height: 30px;
	display: block;
	margin-bottom: 20px;
	@media (max-width: 1025px) {
		font-size: 26px;
		line-height: 26px;
		margin-bottom: 15px;
	}
	@media (max-width: 580px) {
		font-size: 24px;
		margin-bottom: 10px;
	}
`
const RegularTitle = styled.h3`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	color: #ffffff;
	font-size: 26px;
	line-height: 26px;
	display: block;
	margin-bottom: 20px;
	@media (max-width: 1025px) {
		font-size: 24px;
		line-height: 24px;
		margin-bottom: 15px;
	}
	@media (max-width: 580px) {
		font-size: 22px;
	}
`
const StackTitle = styled.h4`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	color: #ffffff;
	font-size: 20px;
	margin-top: 75px;
	margin-bottom: 40px;
	line-height: 20px;
	@media (max-width: 560px) {
		margin-top: 45px;
		margin-bottom: 20px;
		font-size: 18px;
	}
`
const RegularText = styled.p`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 16px;
	line-height: 26px;
	color: #9D9D9D;
	display: block;
	max-width: 660px;
	margin-bottom: 40px;
	@media (max-width: 560px) {
		margin-bottom: 25px;
	}
`

const SubTitle = styled.h5`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	color: #ffffff;
	font-size: 18px;
	line-height: 18px;
	margin-bottom: 10px;
	font-weight: 400;
`

const SubText = styled.p`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 16px;
	line-height: 26px;
	color: #9D9D9D;
	display: block;
	max-width: 660px;
	margin-bottom: 10px;
	&:last-of-type{
		margin-bottom: 0px;
	}
	@media (max-width: 560px) {

	}
`

const GifImageStyled = styled.img`
	display: block;
	width: 660px;
	margin-bottom: 30px;
	@media (max-width: 730px) {
		width: 100%;
	}
`
const ListStd = styled.ul`
	margin-bottom: 35px;
	&:last-of-type {
		margin-bottom: 0px;
	}
	@media (max-width: 560px) {
		margin-bottom: 25px;
	}
`
const ListItemStd = styled.li`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 16px;
	line-height: 26px;
	color: #9D9D9D;
	${props => props.item && css`
		font-size: 14px;
		line-height: 22px;
		padding-left: 25px;
		margin-bottom: 10px;
		position: relative;
		&::before {
			content: "";
			position: absolute;
			top: 50%;
			left: 1px;
			transform: translateY(-50%);
			width: 3px;
			height: 3px;
			background-color: #9D9D9D;
			border-radius: 50%;
		}
		&:last-of-type {
			margin-bottom: 0px;
		}
	`}
	${props => props.itemTitle && css`
		color: #ffffff;
		margin-bottom: 15px;
	`}
	@media (max-width: 560px) {
		${props => props.item && css`
			padding-left: 20px;
			margin-bottom: 5px;
		`}
		${props => props.itemTitle && css`
			color: #ffffff;
			margin-bottom: 10px;
		`}
	}
`
