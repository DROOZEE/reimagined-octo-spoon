import React, {Fragment, Component} from "react"
import styled, {css} from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'
import {Link, Router} from '../routes'
import Head from '../components/head'

import {connect} from 'react-redux'

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.set = this.set.bind(this);
	}
	set(test) {
		const returnedCase = this.props.state.loadCaseData.find(({item}) => item.name === test);
		this.props.onSetData(returnedCase);
	}

	// static async getInitialProps({query}) {
	// 	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
	// 	const data = await res.json()
	//
	// 	return {
	// 		shows: data
	// 	}
	// }

	render () {
		return (
			<Fragment>
				<Head title="Portfolio"
					description="Page portfolio of Daniel site"
				/>
				<Main
					component="main"
					transitionName="main"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
					transitionAppear={true}
					transitionAppearTimeout={500}>
					<ul>
						{this.props.state.loadCaseData.map(({item}) => (
							<li key={item.id} onClick={()=>{Router.pushRoute('portfolio', {name: item.name}); this.set(item.name)}}>
								<Link prefetch as={`/portfolio/${item.name}`} route={`/portfolio?name=${item.name}`}>
									<a>{item.name}</a>
								</Link>
							</li>
						))}
					</ul>
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
		onSetData: (data) => {
			dispatch({type: 'SETDATA', payload: data});
		}
	})
)(Portfolio)

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
