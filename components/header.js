import Nav from './nav'
import NProgress from 'nprogress'
import Router from 'next/router'
import React, {Component} from "react"
import styled from 'styled-components'

import {connect} from 'react-redux'

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Header extends Component {

  render () {
    return (
			<HeaderWrap>
				<Nav />
			</HeaderWrap>
    )
  }
}

// export default connect()(Header)
export default Header

const HeaderWrap = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	background-color: #141414;
	${'' /* background-color: #ffffff; */}
`
