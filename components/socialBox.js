import React from "react";
import styled from 'styled-components';

export function SocialBoxSide() {
	return (
		<SocialBoxStd className="social-box">
			<SocialBoxItemStd>
				<SocialBoxLinkStd href="https://www.linkedin.com/company/main-code/" rel="noopener noreferrer" target="_blank">
					<SocialBoxIconStd className="maincode-facebook"/>
				</SocialBoxLinkStd>
			</SocialBoxItemStd>

			<SocialBoxItemStd>
				<SocialBoxLinkStd href="https://www.behance.net/maincode" rel="noopener noreferrer" target="_blank">
					<SocialBoxIconStd className="maincode-behance"/>
				</SocialBoxLinkStd>
			</SocialBoxItemStd>

			<SocialBoxItemStd>
				<SocialBoxLinkStd href="https://www.upwork.com/agencies/~0147c83e822a3a4962" rel="noopener noreferrer" target="_blank">
					<SocialBoxIconStd className="maincode-upwork"/>
				</SocialBoxLinkStd>
			</SocialBoxItemStd>

			<SocialBoxItemStd>
				<SocialBoxLinkStd href="https://www.instagram.com/maincode.agency/" rel="noopener noreferrer" target="_blank">
					<SocialBoxIconStd className="maincode-instagram"/>
				</SocialBoxLinkStd>
			</SocialBoxItemStd>
		</SocialBoxStd>
	);
}

const SocialBoxStd = styled.ul`
	position: absolute;
	left: 35px;
	bottom: 4vh;
	display: flex;
	width: 40px;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	list-style-type: none;
	min-height: 190px;
	height: 21.208907741251327vh;
	transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	&.social-box_hidden {
		opacity: 0;
		visibility: hidden;
	}
	@media (max-width: 1750px) {
		left: 25px;
	}
	@media (max-width: 1400px) {
		left: 15px;
	}
	@media (max-width: 1025px) {
		display: none !important;
	}
`;
const SocialBoxItemStd = styled.li`
	display: block;
`;
const SocialBoxLinkStd = styled.a`
	display: block;
	text-align: center;
`;
const SocialBoxIconStd = styled.i`
	display: inline-block;
	font-size: 18px;
	line-height: 18px;
	color:  #9D9D9D;
	padding: 10px;
	transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	&:hover {
		color:  #ffffff;
	}
`;
