import React, {Fragment, Component} from "react"
import styled, {css} from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Head from '../components/head'

import ProjectFirstScreen from '../components/projectFirstScreen'
import ProjectSecondScreen from '../components/projectSecondScreen'

import {connect} from 'react-redux'

class Post extends Component {
	constructor(props) {
		super(props);
		this.set = this.set.bind(this)(this.props.name);
	}

	set(name) {
		const returnedCase = this.props.state.loadCaseData.find(({item}) => item.name === name);
		this.props.onSetData(returnedCase);
	}

	static async getInitialProps(context) {
		const { name } = context.query

		return { name }
	}

	// static async getInitialProps(context) {
	// 	const { name } = context.query
	// 	// const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
	// 	// const show = await res.json()
	// 	return {
	// 		name
	// 	}
	// }

	render() {
		return (
			<Fragment>
				<Head title={this.props.state.setData.item ? this.props.state.setData.item.title : ''}
					description={this.props.state.setData.item ? this.props.state.setData.item.desc  : ''}
				/>
				<Main
					component="main"
					transitionName="main"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
					transitionAppear={true}
					transitionAppearTimeout={500}>

					<ProjectFirstScreen />
					<ProjectSecondScreen />

					<Link href="/portfolio">
						<LinkHolder>Back to portfolio</LinkHolder>
					</Link>
				</Main>
			</Fragment>
		)
	}
}

export default connect(
	state => ({
		state
	}),
	dispatch => ({
		onGetCaseData: (data) => {
			dispatch({type: 'GETDATA', payload: data});
		},
		onSetData: (data) => {
			dispatch({type: 'SETDATA', payload: data});
		}
	})
)(Post)

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
