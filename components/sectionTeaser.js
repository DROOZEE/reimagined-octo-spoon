import React, {Component} from "react";
import styled from 'styled-components';

import RegularCenterer from "./regularCenterer";

export default class SectionTeaser extends Component {
	// componentDidMount(){
	// 	function isAnyPartOfElementInViewport(el) {
	//
	// 		const rect = el.getBoundingClientRect();
	// 		const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
	// 		const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
	//
	// 		const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
	// 		const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
	//
	// 		return (vertInView && horInView);
	// 	}
	//
	// 	let element =	$('#count-1')[0];
	// 	let inViewport = false;
	//
	// 	$(window).on('resize scroll', function() {
	// 		if (isAnyPartOfElementInViewport(element)) {
	//
	// 			if(!inViewport) {
	// 				$('.count').each(function () {
	// 					$(this).prop('Counter',0).animate({
	// 						Counter: $(this).text()
	// 					}, {
	// 						duration: 4000,
	// 						easing: 'swing',
	// 						step: function (now) {
	// 							$(this).text(Math.ceil(now));
	// 						}
	// 					});
	// 				});
	// 			}
	// 			inViewport = true;
	// 		}
	// 	});
	// }
	render() {
		return (
			<SectionStd>
				<RegularCenterer>
					<RegularTitle>Our team’s<br/>achievements.</RegularTitle>

		      <RegularRow>
						<TeaserCard>
							<TeaserTitles><span id="count-1" className="count">100</span>%</TeaserTitles>
							<TeaserDesc>Positive Feedbacks</TeaserDesc>
						</TeaserCard>

						<TeaserCard>
							<TeaserTitles><span className="count">107</span></TeaserTitles>
							<TeaserDesc>Done Projects</TeaserDesc>
						</TeaserCard>

						<TeaserCard>
							<TeaserTitles><span className="count">87</span>%</TeaserTitles>
							<TeaserDesc>Clients Return</TeaserDesc>
						</TeaserCard>

						<TeaserCard>
							<TeaserTitles><span className="count">0</span></TeaserTitles>
							<TeaserDesc>Unmet Deadlines</TeaserDesc>
						</TeaserCard>

						<TeaserCard>
							<TeaserTitles><span className="count">100</span>%</TeaserTitles>
							<TeaserDesc>Team Love Pizza</TeaserDesc>
						</TeaserCard>
		      </RegularRow>
				</RegularCenterer>
			</SectionStd>
		);
	}
}

const SectionStd = styled.section`
	width: 100%;
	background-color: #141414;
	padding: 165px 0px 200px 0px;
	@media (max-width: 1025px) {
		padding: 105px 0px 100px 0px;
	}
`
const RegularTitle = styled.h2`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 36px;
	color: #ffffff;
	width: 22%;
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
		margin-bottom: 65px;
	}
`

const TeaserTitles = styled.p`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 30px;
	color: #ffffff;
	line-height: 1.333;
	margin-bottom: 10px;
	@media (max-width: 1500px) {
		font-size: 24px;
	}
`

const TeaserDesc = styled.h3`
	font-family: "AvantGardeLT", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 22px;
	color: #ffffff;
	line-height: 1.333;
	@media (max-width: 1500px) {
		font-size: 18px;
	}
`

const RegularRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 1025px) {
		flex-wrap: wrap;
		justify-content: flex-start;
	}
	@media (max-width: 480px) {
		align-items: flex-start;
		flex-direction: column;
	}
`
const TeaserCard = styled.div`
	text-align: left;

	@media (max-width: 1025px) {
		margin-bottom: 50px;
		margin-right: 50px;
		flex-basis: 25%;

		&:last-of-type, &:nth-of-type(3) {
			margin-right: 0px;
		}
	}
	@media (max-width: 768px) {
		margin-bottom: 50px;
		margin-right: 0px;
		flex-basis: 50%;

	}
	@media (max-width: 480px) {
		flex-basis: 100%;
		margin-bottom: 50px;
		margin-right: 0px;
		&:nth-of-type(3) {
			margin-right: 0px;
		}
	}
`
