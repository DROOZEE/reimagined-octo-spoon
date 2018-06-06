import React, {Fragment} from 'react'
import Link from 'next/link'
import styled from 'styled-components'

export default () => (
	<Fragment>
		<Nav>
			<List>
				<ListItem>
					<Link prefetch href="/">
						<LinkHolder>Home</LinkHolder>
					</Link>
				</ListItem>
				<ListItem>
					<Link prefetch href="/about">
						<LinkHolder>About</LinkHolder>
					</Link>
				</ListItem>
				<ListItem>
					<Link prefetch href="/contact">
						<LinkHolder>Contact</LinkHolder>
					</Link>
				</ListItem>
			</List>
	  </Nav>
	</Fragment>
)

const Nav = styled.nav`

`
const List = styled.ul`
	display: inline-block;
	margin: 0;
	padding: 0;
`
const ListItem = styled.li`
	display: inline-block;
`
const LinkHolder = styled.a`
	display: inline-block;
	text-decoration: none;
	color: #555555;
	cursor: pointer;
	font-size: 20px;
	font-family: "Arial", sans-serif;
	line-height: 60px;
	padding: 0 25px;
	user-select: none;
	&:hover {
		color: #222222;
		background-color: rgba(0,0,0,0.1);
	}
`
