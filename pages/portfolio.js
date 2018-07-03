import React, {Fragment, Component} from "react"
import styled, {css} from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Head from '../components/head'

import {connect} from 'react-redux'

class Portfolio extends Component {
	constructor(props) {
		super(props);
	}

	static async getInitialProps() {
		const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
		const data = await res.json()

		return {
			shows: data
		}
	}

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
					<RegularText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quod quaerat, ducimus eaque rem ut ipsam natus, nulla blanditiis, cumque nihil unde adipisci corporis ab aperiam eius repudiandae magnam, optio placeat. Architecto repudiandae, perferendis exercitationem odio minus hic sequi dolorem laborum quis consectetur ullam tempore cum vel iusto repellendus, voluptate consequuntur fugiat. Modi pariatur vero maiores, vel atque a laborum recusandae veritatis in sunt dicta porro, illum itore. Qui blanditiis, distinctio culpa reiciendis dolore provident vel libero est, magni voluptas, ea consequuntur cum consectetur eius cupiditate veritatis, non fuga illo cumque. Delectus impedit dolore ab laborum excepturi unde assumenda doloribus vitae beatae nesciunt quibusdam porro cum temporibus, reiciendis autem repr maiores soluta!</RegularText>
					<RegularText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore provident aliquam omnis perspiciatis voluptas, ratione expedita ut consectetur magnam dolores qui repellat, eligendi autem, voluptates est ducimus iusto. Aliquam illo, consequuntur omnis aliquid nisi aperiam vero in, ipsa impedit enim provident officiis et ex illum dignissimos. Doloremque eos, nesciunt sint sequi necessitatibus veniam modi ducimus incidunt, perspiciatis quod accusantium esse suscipit distinctio quae! Neque, quod cupiditate, earum sint perspiciatis enim modi eaque id eligendi ipsam voluptas maiores iusto laudantium vitae, aliquam sed quidem reprehenderit. Possimus vero magni accusantium repellendus ex, vitae ab consequuntur, voluptates fugiat, labore saepe alias quibusdam!</RegularText>
					<RegularText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quod quaerat, ducimus eaque rem ut ipsam natus, nulla blanditiis, cumque nihil unde adipisci corporis ab aperiam eius repudiandae magnam, optio placeat. Architecto repudiandae, perferendis exercitationem odio minus hic sequi dolorem laborum quis consectetur ullam tempore cum vel iusto repellendus, voluptate consequuntur fugiat. Modi pariatur vero maiores, vel atque a laborum recusandae veritatis in sunt dicta porro, illum itore. Qui blanditiis, distinctio culpa reiciendis dolore provident vel libero est, magni voluptas, ea consequuntur cum consectetur eius cupiditate veritatis, non fuga illo cumque. Delectus impedit dolore ab laborum excepturi unde assumenda doloribus vitae beatae nesciunt quibusdam porro cum temporibus, reiciendis autem repr maiores soluta!</RegularText>
					<RegularText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore provident aliquam omnis perspiciatis voluptas, ratione expedita ut consectetur magnam dolores qui repellat, eligendi autem, voluptates est ducimus iusto. Aliquam illo, consequuntur omnis aliquid nisi aperiam vero in, ipsa impedit enim provident officiis et ex illum dignissimos. Doloremque eos, nesciunt sint sequi necessitatibus veniam modi ducimus incidunt, perspiciatis quod accusantium esse suscipit distinctio quae! Neque, quod cupiditate, earum sint perspiciatis enim modi eaque id eligendi ipsam voluptas maiores iusto laudantium vitae, aliquam sed quidem reprehenderit. Possimus vero magni accusantium repellendus ex, vitae ab consequuntur, voluptates fugiat, labore saepe alias quibusdam!</RegularText>
					<RegularText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quod quaerat, ducimus eaque rem ut ipsam natus, nulla blanditiis, cumque nihil unde adipisci corporis ab aperiam eius repudiandae magnam, optio placeat. Architecto repudiandae, perferendis exercitationem odio minus hic sequi dolorem laborum quis consectetur ullam tempore cum vel iusto repellendus, voluptate consequuntur fugiat. Modi pariatur vero maiores, vel atque a laborum recusandae veritatis in sunt dicta porro, illum itore. Qui blanditiis, distinctio culpa reiciendis dolore provident vel libero est, magni voluptas, ea consequuntur cum consectetur eius cupiditate veritatis, non fuga illo cumque. Delectus impedit dolore ab laborum excepturi unde assumenda doloribus vitae beatae nesciunt quibusdam porro cum temporibus, reiciendis autem repr maiores soluta!</RegularText>
					<RegularText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore provident aliquam omnis perspiciatis voluptas, ratione expedita ut consectetur magnam dolores qui repellat, eligendi autem, voluptates est ducimus iusto. Aliquam illo, consequuntur omnis aliquid nisi aperiam vero in, ipsa impedit enim provident officiis et ex illum dignissimos. Doloremque eos, nesciunt sint sequi necessitatibus veniam modi ducimus incidunt, perspiciatis quod accusantium esse suscipit distinctio quae! Neque, quod cupiditate, earum sint perspiciatis enim modi eaque id eligendi ipsam voluptas maiores iusto laudantium vitae, aliquam sed quidem reprehenderit. Possimus vero magni accusantium repellendus ex, vitae ab consequuntur, voluptates fugiat, labore saepe alias quibusdam!</RegularText>

					<ul>
						{this.props.shows.map(({show}) => (
							<li key={show.id}>
								<Link prefetch as={`/post/${show.id}`} href={`/post?id=${show.id}`}>
									<a>{show.name}</a>
								</Link>
							</li>
						))}
					</ul>
				</Main>
			</Fragment>
		)
	}
}

export default connect()(Portfolio)

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
