import Head from '../components/head'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import React, {Fragment, Component} from "react"
import styled from 'styled-components'
import { loadData, fetchFromData, getIndex } from '../store'

import {connect} from 'react-redux'

class Home extends Component {
	componentDidMount () {

  }

	fetchLoadedData = () => {
    const {dispatch} = this.props
    dispatch(fetchFromData())
  }

	getINDEX = () => {
    const {dispatch} = this.props
    dispatch(getIndex())
  }

  render () {
    return (
	    <Fragment>
	      <Head title="Home"
	      			description="Page homepage of Daniel site"
	    	/>
				<Header/>
				<Main>
					<RegularText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quod quaerat, ducimus eaque rem ut ipsam natus, nulla blanditiis, cumque nihil unde adipisci corporis ab aperiam eius repudiandae magnam, optio placeat. Architiditate accusantium blanditiis laudantium, unde, perferendis ab enim odit eligendi sed reiciendis magnam. Alias atque nam voluptates, obcaecati vitae optio illo eos dolor maiores soluta!</RegularText>
					<RegularText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore provident aliquam omnis perspiciatis voluptas, ratione expedita ut consectetur magnam dolores qui repellat, eligendi autem, voluptates est ducimus iusto. Aliquam illo, consequuntur omnis aliquid nisi aperiam vero in, ipsa impedit enim provident officiis et ex illum dignissimos. Doloremque eos, nesciunt sint sequi necessitatibus veniam modi ducimus incidunt, perspiciatis quod accusantium esse suscipit distinctio quae! Neque, quod cupiditate, earum sint perspiciatis enim modi eaque id eligendi ipsam voluptas maiores iusto laudantium vitae, aliquam sed quidem reprehenderit. Possimus vero magni accusantium repellendus ex, vitae ab consequuntur, voluptates fugiat, labore saepe alias quibusdam!</RegularText>
					<TextWrap>
						{this.props.data.map((data) => {
							return <TextBlock key={data.id} onClick={(event) => {this.getINDEX(); this.fetchLoadedData()}}>{data.name}</TextBlock>
						})}
					</TextWrap>
				</Main>
	    	<Footer/>
	    </Fragment>
    )
  }
}


// function getIndex(event) {
// 	let p = event.target.parentElement;
// 	let index = Array.prototype.indexOf.call(p.children, event.target);
// 	console.log(index);
// 	return index;
// }


function mapStateToProps (state) {
  const {data, fetched, id} = state
  return {data, fetched, id}
}

export default connect(mapStateToProps)(Home)

const RegularText = styled.p`
 display: block;
 padding: 0 0;
 max-width: 600px;
 margin: 0 0 20px 0;
 font-family: "Circular", sans-serif;
 color: #9D9D9D;
 &:last-of-type {
	 margin: 0;
 }
`

const TextBlock = styled.p`
 display: inline-block;
 padding: 15px;
 margin: 0 20px 0 0;
 font-family: "Circular", sans-serif;
 color: #ffffff;
 cursor: pointer;
 background-color: #9D9D9D;
 &:last-of-type {
	 margin: 0;
 }
`
const TextWrap = styled.div`
	margin-top: 40px;
`
