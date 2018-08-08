import React, { Component } from "react";
import Link from 'next/link';
import styled from 'styled-components';

export class ShowreelLink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			handlePath: "/",
		}
		this.handlePath = this.handlePath.bind(this);
	}

	handlePath() {
		this.setState({handlePath: window.location.pathname});
	}

	componentDidMount() {
		if(window.location.pathname === '/showreel'){
			document.getElementsByClassName('showreel-link_open')[0].classList.remove("showreel-link_active")
			document.getElementsByClassName('showreel-link_close')[0].classList.add("showreel-link_active")
			document.getElementsByClassName('lets-talk')[0].classList.add("lets-talk_hidden")
			document.getElementsByClassName('min-lets-talk')[0].classList.add("min-lets-talk_hidden")
			document.querySelectorAll("[data-header-horizontal]")[0].classList.add("header_hidden")
		} else {
			document.getElementsByClassName('showreel-link_open')[0].classList.add("showreel-link_active")
			document.getElementsByClassName('showreel-link_close')[0].classList.remove("showreel-link_active")
			document.getElementsByClassName('lets-talk')[0].classList.remove("lets-talk_hidden")
			document.getElementsByClassName('min-lets-talk')[0].classList.remove("min-lets-talk_hidden")
			document.querySelectorAll("[data-header-horizontal]")[0].classList.remove("header_hidden")
			if(window.location.pathname === '/contact'){
				document.getElementsByClassName('lets-talk')[0].classList.add("lets-talk_hidden")
				document.getElementsByClassName('min-lets-talk')[0].classList.add("min-lets-talk_hidden")
			} else {
				document.getElementsByClassName('lets-talk')[0].classList.remove("lets-talk_hidden")
				document.getElementsByClassName('min-lets-talk')[0].classList.remove("min-lets-talk_hidden")
			};
		};
	}

	render() {
		return (
			<ShowreelLinkWrap className="showreel-link-wrap">
				<Link href="/showreel">
					<ShowreelLinkStd className="showreel-link showreel-link_open showreel-link_active">
						<div onClick={this.handlePath}>
							<ShowreelIconStd className="showreel-link__icon maincode-play"></ShowreelIconStd><span className="showreel-link__text showreel-link__text_open">Showreel</span>
						</div>
					</ShowreelLinkStd>
				</Link>

				<Link href={this.state.handlePath}>
					<ShowreelLinkStd className="showreel-link showreel-link_close">
						<span className="showreel-link__text showreel-link__text_close">Close showreel</span><ShowreelIconStd className="showreel-link__icon maincode-close"></ShowreelIconStd>
					</ShowreelLinkStd>
				</Link>
			</ShowreelLinkWrap>
		);
	}
}

const ShowreelLinkWrap = styled.div`
	position: fixed;
	top: 0px;
	height: 90px;
	right: calc(100% - 100vw + 35px);
	display: block;
	text-align: right;
	@media (max-width: 1750px) {
		right: 15px;
	}
	@media (max-width: 1400px) {
		height: 60px;
	}
	${'' /* @media (max-width: 1025px) {
		display: none !important;
	} */}
`
const ShowreelLinkStd = styled.a`
	position: relative;
	font-family: "Circular", sans-serif;
	font-size: 16px;
	-webkit-font-smoothing: antialiased;
	line-height: 90px;
	color: #9D9D9D;
	text-decoration: none;
	transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	padding: 0px 10px;
	display: none;
	position: relative;
	cursor: pointer;
	&:hover {
		color: #ffffff;
		transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	}
	&.showreel-link_active {
		display: inline-block;
	}
	&.showreel-link_close {
		color: #ffffff;
	}
`

const ShowreelIconStd = styled.i`
	display: inline-block;
	position: relative;
	line-height: 90px;
	height: 90px;
	&.maincode-play {
		top: 0px;
		font-size: 13px;
		margin-right: 5px;
	}
	&.maincode-close {
		top: -1px;
		font-size: 12px;
		margin-left: 6px;
	}
	@media (max-width: 1400px) {
		height: 60px;
	}
`
