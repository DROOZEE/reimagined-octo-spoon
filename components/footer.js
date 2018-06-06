import Link from 'next/link'
import React, {Component} from "react"
import styled from 'styled-components'

export default class Footer extends Component {
	constructor(props) {
	  super(props);
	  this.state = {

	  };
	}

  render () {
    return (
			<FooterWrap>
				<Link href="/"><LinkHolder>Back to home</LinkHolder></Link>
			</FooterWrap>
    )
  }
}

const FooterWrap = styled.footer`
	text-align: center;
`
const LinkHolder = styled.a`
	display: inline-block;
	text-decoration: none;
	color: #444444;
	cursor: pointer;
	font-size: 16px;
	font-family: "Arial", sans-serif;
	line-height: 60px;
	padding: 0 20px;
	&:hover {
		color: #111111;
	}
`
