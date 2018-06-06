import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import React, {Fragment, Component} from "react"
import styled from 'styled-components'

import {connect} from 'react-redux'

class About extends Component {
	componentDidMount () {

  }

  render () {
    return (
		  <Fragment>
		    <Head title="About"
							description="Page about of Daniel site"
				/>
		    <Header/>
				<main>
					<RegularText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quod quaerat, ducimus eaque rem ut ipsam natus, nulla blanditiis, cumque nihil unde adipisci corporis ab aperiam eius repudiandae magnam, optio placeat. Architecto repudiandae, perferendis exercitationem odio minus hic sequi dolorem laborum quis consectetur ullam tempore cum vel iusto repellendus, voluptate consequuntur fugiat. Modi pariatur vero maiores, vel atque a laborum recusandae veritatis in sunt dicta porro, illum iusto perferendis fugit, quos! Provident porro temporibus fugit veritatis reprehenderit, unde, animi architecto voluptatibus dolorem laudantium nesciunt voluptas at dolor quia placeat aliquid a obcaecati. Porro quos veniam soluta autem temporibus, molestias incidunt voluptate quis. Expedita dolor et rem nulla in a ea vitae, enim inventore. Qui blanditiis, distinctio culpa reiciendis dolore provident vel libero est, magni voluptas, ea consequuntur cum consectetur eius cupiditate veritatis, non fuga illo cumque. Delectus impedit dolore ab laborum excepturi unde assumenda doloribus vitae beatae nesciunt quibusdam porro cum temporibus, reiciendis autem repudiandae totam voluptatum. Enim perspiciatis fuga dolorum consectetur asperiores ad quos consequuntur quia, dolor pariatur. Debitis veniam, earum quaerat itaque impedit cupiditate accusantium blanditiis laudantium, unde, perferendis ab enim odit eligendi sed reiciendis magnam. Alias atque nam voluptates, obcaecati vitae optio illo eos dolor maiores soluta!</RegularText>
				</main>
				<Footer/>
		  </Fragment>
    )
  }
}

export default connect()(About)

const RegularText = styled.p`
	display: inline-block;
	padding: 0 0;
	max-width: 600px;
`
