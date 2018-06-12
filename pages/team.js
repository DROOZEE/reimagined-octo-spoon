import Head from '../components/head'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import React, {Fragment, Component} from "react"
import styled from 'styled-components'

import {connect} from 'react-redux'

class Team extends Component {
	componentDidMount () {
		
  }

  render () {
    return (
		  <Fragment>
		    <Head title="Team"
							description="Page our team of Daniel site"
				/>
		    <Header/>
				<Main>
					<RegularText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quod quaerat, ducimus eaque rem ut ipsam natus, nulla blanditiis, cumque nihil unde adipisci corporis ab aperiam eius repudiandae magnam, optio placeat. Architecto repudiandae, perferendis exercitationem odio minus hic sequi dolorem laborum quis consectetur ullam tempore cum vel iusto repellendus, voluptate consequuntur fugiat. Modi pariatur vero maiores, vel atque a laborum recusandae veritatis in sunt dicta porro, illum iusto perferendis fugit, quos! Provident porro temporibus fugit veritatis reprehendni voluptas, ea consequuntur cum consectetur eius cupiditate veritatis, non fuga illo cumque. Delectus impedit dolore ab laborum excepturi unde assumenda doloribus vitae beatae nesciunt quibusdam porro cum temporibus, reiciendis autem repudiandae totam voluptatum. Enim perspiciatis fuga dolorum consectetur asperiores ad quos consequuntur quia, dolor pariatur. Debitis veniam, earum quaerat itaque impedit cupiditate accusantium blanditiis laudantium, unde, perferendis ab enim odit eligendi sed reiciendis magnam. Alias atque nam voluptates, obcaecati vitae optio illo eos dolor maiores soluta!</RegularText>
					<RegularText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quod quaerat, ducimus eaque rem ut ipsam natus, nulla blanditiis, cumque nihil unde adipisci corporis ab aperiam eius repudiandae magnam, optio placeat. Architiditate accusantium blanditiis laudantium, unde, perferendis ab enim odit eligendi sed reiciendis magnam. Alias atque nam voluptates, obcaecati vitae optio illo eos dolor maiores soluta!</RegularText>
					<RegularText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore provident aliquam omnis perspiciatis voluptas, ratione expedita ut consectetur magnam dolores qui repellat, eligendi autem, voluptates est ducimus iusto. Aliquam illo, consequuntur omnis aliquid nisi aperiam vero in, ipsa impedit enim provident officiis et ex illum dignissimos. Doloremque eos, nesciunt sint sequi necessitatibus veniam modi ducimus incidunt, perspiciatis quod accusantium esse suscipit distinctio quae! Neque, quod cupiditate, earum sint perspiciatis enim modi eaque id eligendi ipsam voluptas maiores iusto laudantium vitae, aliquam sed quidem reprehenderit. Possimus vero magni accusantium repellendus ex, vitae ab consequuntur, voluptates fugiat, labore saepe alias quibusdam!</RegularText>
				</Main>
				<Footer/>
		  </Fragment>
    )
  }
}

export default connect()(Team)

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