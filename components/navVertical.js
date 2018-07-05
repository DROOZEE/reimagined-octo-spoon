import React, {Component, Children} from 'react'
import styled from 'styled-components'
import ActiveLink from './activeLink'

import {connect} from 'react-redux'

class NavVertical extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
	}
	toggle() {
		this.props.onToggleMenu();
	}

	render() {
		return(
			<Navigation>
				<List>
					<ListItem onClick={this.toggle}>
						<ActiveLink activeClassName="active" prefetch href="/">
							<LinkHolder>Home</LinkHolder>
						</ActiveLink>
					</ListItem>
					<ListItem onClick={this.toggle}>
						<ActiveLink activeClassName="active" prefetch href="/portfolio">
							<LinkHolder>Portfolio</LinkHolder>
						</ActiveLink>
					</ListItem>
					<ListItem onClick={this.toggle}>
						<ActiveLink activeClassName="active" prefetch href="/technologies">
							<LinkHolder>Technologies</LinkHolder>
						</ActiveLink>
					</ListItem>
					<ListItem onClick={this.toggle}>
						<ActiveLink activeClassName="active" prefetch href="/team">
							<LinkHolder>Our team</LinkHolder>
						</ActiveLink>
					</ListItem>
					<ListItem onClick={this.toggle}>
						<ActiveLink activeClassName="active" prefetch href="/careers">
							<LinkHolder>Careers</LinkHolder>
						</ActiveLink>
					</ListItem>
					<ListItem onClick={this.toggle}>
						<ActiveLink activeClassName="active" prefetch href="/contact">
							<LinkHolder>Contact us</LinkHolder>
						</ActiveLink>
					</ListItem>
				</List>
			</Navigation>
		)
	}
}

export default connect(
	state => ({
		state
	}),
	dispatch => ({
		onToggleMenu: (data) => {
			setTimeout(() => {
				dispatch({type: 'TOGGLEMENU', payload: data});
			},100)
		}
	})
)(NavVertical)

const Navigation = styled.nav`
	display: block;
`
const List = styled.ul`
	margin: 0;
	padding: 0;
	display: inline-block;
	position: relative;
`
const ListItem = styled.li`
	display: block;
`
const LinkHolder = styled.a`
	position: relative;
	display: block;
	font-family: "Circular", sans-serif;
	font-size: 16px;
	-webkit-font-smoothing: antialiased;
	line-height: 90px;
	color: #9D9D9D;
	text-decoration: none;
	padding: 0px 25px;
	transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	cursor: pointer;
	text-align: center;
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
		transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
		&::before {
			background-color: #ffffff;
			transform: translate(-50%, 100%) scaleX(1);
			transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
		}
	}
`
