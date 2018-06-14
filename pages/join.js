import Head from '../components/head'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import React, {Fragment, Component} from "react"
import styled from 'styled-components'

import {connect} from 'react-redux'

class Join extends Component {
  render () {
    return (
		  <Fragment>
		    <Head title="Join"
							description="Page join us of Daniel site"
				/>
		    <Header/>
				<Main>
					<RegularText>Page join us of Daniel site</RegularText>
				</Main>
				<Footer/>
		  </Fragment>
    )
  }
}

export default connect()(Join)

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
