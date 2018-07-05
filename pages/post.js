import React, {Fragment, Component} from "react"
import styled, {css} from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Head from '../components/head'

import {connect} from 'react-redux'

class Post extends Component {
	constructor(props) {
		super(props);
	}

	static async getInitialProps(context) {
		const { id } = context.query
		const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
		const show = await res.json()

		return { show }
	}

	render() {
		return (
			<Fragment>
				<Head title={this.props.show.name} />
				<Main
					component="main"
					transitionName="main"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
					transitionAppear={true}
					transitionAppearTimeout={500}>
					<RegularText>{this.props.show.name}</RegularText>
					<RegularText>{this.props.show.summary.replace(/<[/]?p>/g, '').replace(/<[/]?b>/g, '')}</RegularText>
					<Img src={this.props.show.image.medium}/>

					<Link href="/portfolio">
						<LinkHolder>Back to portfolio</LinkHolder>
					</Link>
				</Main>
			</Fragment>
		)
	}
}

export default Post

const Main = styled(CSSTransitionGroup)`
	padding: 90px 0px 60px 0px;
	min-height: calc(100vh - 80px);
	background-color: #141414;
	width: 100%;
	box-sizing: border-box;
	@media (max-width: 1025px) {
		padding: 90px 0px 30px 0px;
	}
`

const RegularText = styled.p`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 16px;
	line-height: 26px;
	color: #9D9D9D;
	display: block;

	max-width: 600px;
	padding: 0 0 0 0;
	margin: 0 0 20px 0;
`

const Img = styled.img`
	display: block;
	width: 200px;
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
	}
`
