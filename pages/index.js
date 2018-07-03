import React, {Fragment, Component} from "react"
import styled, {css} from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'

import Head from '../components/head'

import {connect} from 'react-redux'

class Home extends Component {
	render() {
		return (
			<Fragment>
				<Head title="Home"
					description="Page homepage of Daniel site"
				/>
				<Main
					component="main"
					transitionName="main"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
					transitionAppear={true}
					transitionAppearTimeout={500}>
					<RegularText >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur voluptas dolore sed error sapiente numquam iusto adipisci dicta. Aliquid molestias recusandae provident autem voluptatem impedit, quo ut mollitia? Fuga velit consectetur fugit aliquid rerum illum? Optio recusandae, voluptate saepe minus dolorem neque velit. Obcaecati cumque facere amet mollitia pariatur praesentium ab, molestiae velit illum voluptatem repudiandae placeat inventore, id porro deserunt alias quas quam esse. Quam placeat architecto repellendus dolore nemo. Autem adipisci ex temporibus quam nobis natus. Dignissimos.</RegularText>
				</Main>
			</Fragment>
		)
	}
}

export default connect()(Home)

const Main = styled(CSSTransitionGroup)`
	padding: 15px 15px 60px 15px;
	min-height: calc(100vh - 80px);
	background-color: #141414;
	width: 100vw;
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
	&:last-of-type {
		margin: 0 0 0 0;
	}
`
