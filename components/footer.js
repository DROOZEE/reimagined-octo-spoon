import Link from 'next/link'
import React, {Component} from "react"
import styled from 'styled-components'

export default class Footer extends Component {
	constructor(props) {
	  super(props);
	}

  render () {
    return (
			<FooterWrap>
				<Link href="/">
					<LinkHolder>{"maincode. " + new Date().getFullYear()}</LinkHolder>
				</Link>
			</FooterWrap>
    )
  }
}

const FooterWrap = styled.footer`
	text-align: center;
	background-color: #141414;
	${'' /* background-color: #ffffff; */}
`
const LinkHolder = styled.a`
	display: inline-block;
	text-decoration: none;
	color: #9D9D9D;
	cursor: pointer;
	font-size: 16px;
	font-family: "Circular", sans-serif;
	line-height: 60px;
	transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	padding: 10px;
	&:hover {
		color: #ffffff;
		${'' /* color: #141414; */}
	}
`
