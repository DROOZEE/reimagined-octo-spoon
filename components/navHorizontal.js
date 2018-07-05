import React, {Component} from "react";
import ActiveLink from './activeLink'
import styled from 'styled-components';

export class NavHorizontal extends Component {
	render() {
		return (
			<HeaderMnuStd>
				<HeaderMnuItemStd>
					<ActiveLink activeClassName="active" prefetch href="/portfolio">
						<LinkHolder>Portfolio</LinkHolder>
					</ActiveLink>
				</HeaderMnuItemStd>
				<HeaderMnuItemStd>
					<ActiveLink activeClassName="active" prefetch href="/technologies">
						<LinkHolder>Technologies</LinkHolder>
					</ActiveLink>
				</HeaderMnuItemStd>
				<HeaderMnuItemStd>
					<ActiveLink activeClassName="active" prefetch href="/team">
						<LinkHolder>Our team</LinkHolder>
					</ActiveLink>
				</HeaderMnuItemStd>
				<HeaderMnuItemStd>
					<ActiveLink activeClassName="active" prefetch href="/careers">
						<LinkHolder>Careers</LinkHolder>
					</ActiveLink>
				</HeaderMnuItemStd>
				<HeaderMnuItemStd>
					<ActiveLink activeClassName="active" prefetch href="/contact">
						<LinkHolder>Contact us</LinkHolder>
					</ActiveLink>
				</HeaderMnuItemStd>
			</HeaderMnuStd>
		);
	}
}

const HeaderMnuStd = styled.ul`
	display: inline-block;
	position: relative;
	left: calc(13.5416666667vw - 25px);
	transition: 0.3s opacity cubic-bezier(0.4, 0.0, 0.2, 1) 0.3s visibility cubic-bezier(0.4, 0.0, 0.2, 1);
	&.header-mnu_invisible {
		opacity: 0;
		visibility: hidden;
	}
	@media (max-width: 1750px) {
		left: calc(12vw - 20px);
	}
	@media (max-width: 1400px) {
		left: calc(7vw - 20px);
	}
	@media (max-width: 1025px) {
		display: none;
	}
`
const HeaderMnuItemStd = styled.li`
	display: inline-block;
`
const LinkHolder = styled.a`
	position: relative;
	display: inline-block;
	font-family: "Circular", sans-serif;
	font-size: 16px;
	-webkit-font-smoothing: antialiased;
	line-height: 90px;
	color: #9D9D9D;
	text-decoration: none;
	padding: 0px 20px;
	cursor: pointer;
	transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	&::before {
		content: '';
		position: absolute;
		bottom: 36%;
		left: 50%;
		transform: translate(-50%, 100%) scaleX(0);
		transform-origin: 0% 50%;
		width: calc(100% - 40px);
		height: 1px;
		background-color: #9D9D9D;
		transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	}
	&:hover {
		color: #ffffff;
		transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
		&::before {
			background-color: #ffffff;
			transform: translate(-50%, 100%) scaleX(1);
			transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
		}
	}
	&.active {
		color: #ffffff;
		&::before {
			background-color: #ffffff;
			transform: translate(-50%, 100%) scaleX(1);
		}
	}
`
