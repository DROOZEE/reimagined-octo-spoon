import React from "react";
import styled from 'styled-components';

import Link from 'next/link';

import RegularCenterer from "./regularCenterer";

function SectionOffer() {
	return (
		<SectionStd>
			<RegularCenterer>
				<RegularTitle>What can we offer you</RegularTitle>

				<OfferWrap>
					<ServicesCard>
						<TeaserNumber>01</TeaserNumber>
						<TeaserTitle>UX / UI Design</TeaserTitle>
						<RegularText>Professionally developed design will result not only in admiration of the users, but also increase your analytical and marketing perfomance</RegularText>
					</ServicesCard>

					<ServicesCard>
						<TeaserNumber>02</TeaserNumber>
						<TeaserTitle>Web Development</TeaserTitle>
						<RegularText>Either you want a landing or a huge e-commerce platform, our web experts will develop the best solution according to the latest tendencies</RegularText>
					</ServicesCard>

					<ServicesCard>
						<TeaserNumber>03</TeaserNumber>
						<TeaserTitle>Quality Assurance</TeaserTitle>
						<RegularText>Once the product is developed, we will test it in different environments for detecting and fixing bugs for creating a high-level product</RegularText>
					</ServicesCard>

					<ServicesCard>
						<TeaserNumber>04</TeaserNumber>
						<TeaserTitle>Sicilian Pizza</TeaserTitle>
						<RegularText>Fluffy, spongy bread base topped with a sauce made with vegetables and sea products, covered with hard cheese and baked in a square tray</RegularText>
					</ServicesCard>
				</OfferWrap>

				<Link href="/technologies">
					<LinkHolder className="section-members__link">See our technologies<i className="link-to__icon maincode-arrow-right-long"></i></LinkHolder>
				</Link>
			</RegularCenterer>
		</SectionStd>
	);
}

export default SectionOffer;

const SectionStd = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	padding: 90px 0px 90px 0px;
	min-height: calc(100vh - 300px);
	@media (max-width: 768px) {
		padding: 45px 0px 45px 0px;
	}
`
const ServicesCard = styled.div`
	display: inline-block;
	flex-basis: 310px;
	margin-right: 20px;
	&:last-of-type {
		margin-right: 0px;
	}
	@media (max-width: 1500px) {
		flex-basis: 42%;
		margin-bottom: 50px;
		margin-right: 0px;
		&:nth-of-type(odd) {
			margin-right: 8%;
		}
	}
	@media (max-width: 768px) {
		flex-basis: 46%;
		margin-right: 0px;
		&:nth-of-type(odd) {
			margin-right: 4%;
		}
	}
	@media (max-width: 568px) {
		flex-basis: 100%;
		margin-bottom: 40px;
	}
`
const RegularTitle = styled.h2`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 36px;
	color: #ffffff;
	width: 280px;
	line-height: 56px;
	margin-bottom: 80px;
	@media (max-width: 1500px) {
		font-size: 32px;
		line-height: 46px;
	}
	@media (max-width: 1025px) {
		font-size: 30px;
		line-height: 42px;
		width: 230px;
	}
	@media (max-width: 568px) {
		margin-bottom: 45px;
	}
`

const TeaserTitle = styled.h3`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	color: #ffffff;
	display: block;
	line-height: 1.42;
	margin-bottom: 18px;
	font-size: 22px;
	@media (max-width: 1500px) {
		margin-bottom: 10px;
		font-size: 20px;
	}
	@media (max-width: 568px) {
		margin-bottom: 5px;
	}
`
const TeaserNumber = styled.p`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	color: #ffffff;
	display: block;
	line-height: 1.42;
	font-size: 22px;
	margin-bottom: 7px;
	@media (max-width: 1500px) {
		margin-bottom: 4px;
		font-size: 20px;
	}
`

const RegularText = styled.p`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	line-height: 26px;
	color: #9D9D9D;
	display: block;
	font-size: 14px;
	line-height: 22px;
`
const OfferWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 90px;
	@media (max-width: 1500px) {
		width: calc(100% - 100px);
		flex-wrap: wrap;
		margin-bottom: 60px;
	}
	@media (max-width: 768px) {
		width: 100%;
		flex-wrap: wrap;
		margin-bottom: 60px;
	}
	@media (max-width: 600px) {
		flex-direction: column;
		margin-bottom: 20px;
	}
`
const LinkHolder = styled.a`
	position: relative;
	left: -10px;
	display: inline-block;
	transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	padding: 10px 10px 10px 10px;
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 16px;
	line-height: 26px;
	color: #9D9D9D;
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
