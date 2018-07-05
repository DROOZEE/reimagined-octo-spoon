import React from "react";
import styled, {css} from 'styled-components';
import {MainCodeLogo, MinMainCodeLogo} from './mainCodeLogo';
import {SocialBoxSide} from './socialBox';

import {ShowreelLink} from './showreelLink';
import {LetsTalk, MinLetsTalk} from './letsTalk';

const SideBar = styled.div`
	display: block;
	position: fixed;
	top: 0;
	width: 0;
	height: 100vh;
	z-index: 100;
	transition: 0.3s opacity cubic-bezier(0.4, 0.0, 0.2, 1);
	${props => props.left && css`
		left: 0;
	`}
	${props => props.right && css`
		right: 0;
	`}
	@media (max-width: 1025px) {
		display: none;
	}
`

export function SidebarLeft() {
	return (
		<SideBar left>
			<MainCodeLogo />
			<MinMainCodeLogo />
			<SocialBoxSide />
		</SideBar>
	);
}

export function SidebarRight() {
	return (
		<SideBar right>
			<ShowreelLink />
			<LetsTalk />
			<MinLetsTalk />
		</SideBar>
	);
}
