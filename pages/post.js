import Head from '../components/head'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import React, {Fragment, Component} from "react"
import styled, {css} from 'styled-components'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

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
				<Header/>
				<Main>
		      <RegularText>{this.props.show.name}</RegularText>
		      <RegularText text>{this.props.show.summary.replace(/<[/]?p>/g, '').replace(/<[/]?b>/g, '')}</RegularText>
					<Img src={this.props.show.image.medium}/>

				  <Link href="/portfolio">
				    <LinkHolder>Back to portfolio</LinkHolder>
				  </Link>
				</Main>
		  	<Footer/>
		  </Fragment>
		)
	}
}

export default Post

const RegularText = styled.p`
 display: block;
 padding: 0 0;
 max-width: 600px;
 margin: 0 0 20px 0;
 font-family: "Circular", sans-serif;
 font-size: 26px;
 color: #ffffff;
 ${props => props.text && css`
	 font-size: 16px;
	 color: #ffffff;
`}
 &:last-of-type {
	 margin: 0;
 }
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
		${'' /* color: #141414; */}
	}
`
