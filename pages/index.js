import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import React, {Fragment, Component} from "react"
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'

import {connect} from 'react-redux'



class Home extends Component {
	state = {
		items: Array.from({ length: 15 }),
		hasMore: true
	};

	fetchMoreData = () => {
		if (this.state.items.length >= 60) {
			this.setState({ hasMore: false });
			return;
		}

		setTimeout(() => {
			this.setState({
				items: this.state.items.concat(Array.from({ length: 5 }))
			});
		}, 500);
 	};

  render () {
    return (
		  <Fragment>
		    <Head title="Home"
							description="Page homepage of Daniel site"
				/>
		    <Header/>
				<main>
					<InfiniteScroll
	          dataLength={this.state.items.length}
	          next={this.fetchMoreData}
	          hasMore={this.state.hasMore}
	          loader={<p style={{ textAlign: "center" }}>Loading...</p>}
	          endMessage={
	            <p style={{ textAlign: "center" }}>Yay! You have seen it all!</p>
	          }
					>
	          {this.state.items.map((i, index) => (
	            <DinamicBlock key={index + 1}>Block - #{index + 1}</DinamicBlock>
	          ))}
	        </InfiniteScroll>
					<RegularText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore provident aliquam omnis perspiciatis voluptas, ratione expedita ut consectetur magnam dolores qui repellat, eligendi autem, voluptates est ducimus iusto. Aliquam illo, consequuntur omnis aliquid nisi aperiam vero in, ipsa impedit enim provident officiis et ex illum dignissimos. Doloremque eos, nesciunt sint sequi necessitatibus veniam modi ducimus incidunt, perspiciatis quod accusantium esse suscipit distinctio quae! Neque, quod cupiditate, earum sint perspiciatis enim modi eaque id eligendi ipsam voluptas maiores iusto laudantium vitae, aliquam sed quidem reprehenderit. Possimus vero magni accusantium repellendus ex, vitae ab consequuntur, voluptates fugiat, labore saepe alias quibusdam!</RegularText>
				</main>
				<Footer/>
		  </Fragment>
    )
  }
}

export default connect()(Home)

const RegularText = styled.p`
	display: inline-block;
	padding: 0 0;
	max-width: 600px;
`
const DinamicBlock = styled.p`
	height: 30px;
	border: 1px solid #141414;
	margin: 0 0 20px 0;
	padding: 5px;
	background-color: #999999;
`
