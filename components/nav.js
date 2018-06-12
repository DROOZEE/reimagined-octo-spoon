import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { withRouter } from "next/router"
import { Children } from "react"

const ActiveLink = withRouter(({ router, children, activeClassName, ...props }) => (
	<Link {...props}>
    {React.cloneElement(Children.only(children), {
      className: router.pathname === props.href ? `active` : null
    })}
  </Link>
));

export default () => (
	<Nav>
		<List>
			<ListItem>
				<ActiveLink activeClassName="active" prefetch href="/">
					<LinkHolder>Home</LinkHolder>
				</ActiveLink>
			</ListItem>
			<ListItem>
				<ActiveLink activeClassName="active" prefetch href="/portfolio">
					<LinkHolder>Portfolio</LinkHolder>
				</ActiveLink>
			</ListItem>
			<ListItem>
				<ActiveLink activeClassName="active" prefetch href="/technologies">
					<LinkHolder>Technologies</LinkHolder>
				</ActiveLink>
			</ListItem>
			<ListItem>
				<ActiveLink activeClassName="active" prefetch href="/team">
					<LinkHolder>Our team</LinkHolder>
				</ActiveLink>
			</ListItem>
			<ListItem>
				<ActiveLink activeClassName="active" prefetch href="/careers">
					<LinkHolder>Careers</LinkHolder>
				</ActiveLink>
			</ListItem>
			<ListItem>
				<ActiveLink activeClassName="active" prefetch href="/contact">
					<LinkHolder>Contact us</LinkHolder>
				</ActiveLink>
			</ListItem>
		</List>
  </Nav>
)

const Nav = styled.nav`
	display: block;
`
const List = styled.ul`
	margin: 0;
	padding: 0;
	display: inline-block;
	position: relative;
`
const ListItem = styled.li`
	display: inline-block;
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
	&::before {
		content: '';
		position: absolute;
		top: 50%;
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
		${'' /* color: #141414; */}
		transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
		&::before {
			background-color: #ffffff;
			${'' /* background-color: #141414; */}
			transform: translate(-50%, 100%) scaleX(1);
			transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
		}
	}
	&.active {
		color: #ffffff;
		${'' /* color: #141414; */}
		transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
		&::before {
			background-color: #ffffff;
			${'' /* background-color: #141414; */}
			transform: translate(-50%, 100%) scaleX(1);
			transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	}
`
