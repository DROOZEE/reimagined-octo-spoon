import React, {Component} from "react";
import styled from 'styled-components';

import Image1 from "../static/img/team/pavel.png";
import Image2 from "../static/img/team/alexander.png";
import Image3 from "../static/img/team/alex.png";
import Image4 from "../static/img/team/daniil.png";

import Image5 from "../static/img/team/tatiana.png";
import Image6 from "../static/img/team/marina.png";
import Image7 from "../static/img/team/nikita.png";

import Image9 from "../static/img/team/eugene.png";
import Image11 from "../static/img/team/anna.png";

import Image17 from "../static/img/team/valentina.png";
import Image16 from "../static/img/team/alinaGri.png";
import Image15 from "../static/img/team/andrey.png";

export default class FooterFaces extends Component {
	componentDidMount(){
		document.getElementsByClassName("faces-link")[0].addEventListener('mouseenter', function() {
			document.getElementsByClassName('faces-wrap')[0].classList.add("faces-wrap_active")
		})
		document.getElementsByClassName("faces-link")[0].addEventListener('mouseleave', function() {
			document.getElementsByClassName('faces-wrap')[0].classList.remove("faces-wrap_active")
		})
	}

	render(){
		return (
			<FacesWrap className="faces-wrap">
				<Faces className="faces" src={Image3} alt="alt" />
				<Faces className="faces" src={Image15} alt="alt" />
				<Faces className="faces" src={Image17} alt="alt" />
				<Faces className="faces" src={Image7} alt="alt" />

				<Faces className="faces" src={Image1} alt="alt" />
				<Faces className="faces" src={Image2} alt="alt" />
				<Faces className="faces" src={Image4} alt="alt" />
				<Faces className="faces" src={Image5} alt="alt" />

				<Faces className="faces" src={Image9} alt="alt" />
				<Faces className="faces" src={Image6} alt="alt" />
				<Faces className="faces" src={Image11} alt="alt" />
				<Faces className="faces" src={Image16} alt="alt" />
			</FacesWrap>
		);
	}
}

const FacesWrap = styled.div`
	position: fixed;
	left: 50%;
	top: 100%;
	transform: translate(-50%, 84%) scale(0.9);
	background-color: red;
	transition: 0.3s all linear;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	z-index: 300;
	&.faces-wrap_active {
		background-color: green;
		.faces {
			&:nth-child(1) {
				transform: translateY(-224px);
			}
			&:nth-child(2) {
				transform: translateY(-229px);
			}
			&:nth-child(3) {
				transform: translateY(-226px);
			}
			&:nth-child(4) {
				transform: translateY(-230px);
			}

			&:nth-child(5) {
				transform: translateY(-230px);
			}
			&:nth-child(6) {
				transform: translateY(-222px);
			}
			&:nth-child(7) {
				transform: translateY(-225px);
			}
			&:nth-child(8) {
				transform: translateY(-225px);
			}

			&:nth-child(9) {
				transform: translateY(-225px);
			}
			&:nth-child(10) {
				transform: translateY(-231px);
			}
			&:nth-child(11) {
				transform: translateY(-220px);
			}
			&:nth-child(12) {
				width: 100px;
				transform: translateY(-225px) scale(1.1);
			}
		}
	}
	@media (max-width: 1200px) {
		display: none;
	}
`
const Faces = styled.img`
	position: relative;
	display: inline-block;
	width: 100px;
	transform: translateY(0%);
	transition: 0.3s all linear;
	&:nth-child(2) {
		transition-delay: 0.04s;
	}
	&:nth-child(3) {
		transition-delay: 0.08s;
	}
	&:nth-child(4) {
		transition-delay: 0.12s;
	}

	&:nth-child(5) {
		transition-delay: 0.16s;
	}
	&:nth-child(6) {
		transition-delay: 0.20s;
	}
	&:nth-child(7) {
		transition-delay: 0.24s;
	}
	&:nth-child(8) {
		transition-delay: 0.28s;
	}

	&:nth-child(9) {
		transition-delay: 0.32s;
	}
	&:nth-child(10) {
		transition-delay: 0.36s;
	}
	&:nth-child(11) {
		transition-delay: 0.40s;
	}
	&:nth-child(12) {
		transition-delay: 0.44s;
	}
`
