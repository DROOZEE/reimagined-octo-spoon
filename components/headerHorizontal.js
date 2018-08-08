import React, {Component, Fragment} from "react";
import styled, {css} from 'styled-components';
import NavHorizontal from "./navHorizontal";

class HeaderHorizontal extends Component {
	componentDidMount() {
		let lastScrollTop = 0;
		document.addEventListener("scroll", function(){
			let currentScrollTop = window.pageYOffset;

				if(currentScrollTop <= 0) {
					document.querySelectorAll("[data-header-horizontal]")[0].classList.remove("scrolled")
				}

				else if (currentScrollTop > lastScrollTop){
					document.querySelectorAll("[data-header-horizontal]")[0].classList.add("scrolled")
				} else {
					document.querySelectorAll("[data-header-horizontal]")[0].classList.remove("scrolled")
				}
			lastScrollTop = currentScrollTop;
		}, false);
	}

	render() {
		return (
			<HeaderStd data-header-horizontal>
				<NavHorizontal />
			</HeaderStd>
		)
	}
}

export default HeaderHorizontal

const HeaderStd = styled.header`
	position: fixed;
	width: 100%;
	height: 90px;
	background-color: #141414;
	top: 0;
	left: 0;
	z-index: 100;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate(0, 0);
	transition: 0.3s transform cubic-bezier(0.4, 0.0, 0.2, 1), 0.3s opacity cubic-bezier(0.4, 0.0, 0.2, 1);
	&.scrolled {
		transform: translate(0, -90px);
	}
	&.header_hidden {
		opacity: 0;
	}
	@media (max-width: 1025px) {
		height: 60px;
	}
`
