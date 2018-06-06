import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import React, {Fragment, Component} from "react"
import styled from 'styled-components'

import {connect} from 'react-redux'

class Contact extends Component {
	componentDidMount () {

  }

  render () {
    return (
		  <Fragment>
		    <Head title="Contact"
							description="Page contacts of Daniel site"
				/>
		    <Header/>
				<main>
					<RegularText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui explicabo voluptatem illo tempora, consequuntur provident amet magni impedit facere, excepturi labore aliquid id itaque veniam ullam ducimus assumenda aperiam expedita velit dolor sunt, nostrum cupiditate unde. Voluptatem facilis, ducimus beatae vel maxime voluptatibus architecto tempora nostrum est vitae error eveniet.</RegularText>
				</main>
				<Footer/>
		  </Fragment>
    )
  }
}

export default connect()(Contact)

const RegularText = styled.p`
	display: inline-block;
	padding: 0 0;
	max-width: 600px;
`
