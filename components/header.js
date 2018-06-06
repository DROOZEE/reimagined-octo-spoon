import Nav from './nav'
import NProgress from 'nprogress'
import Router from 'next/router'
import React, {Component} from "react"
import styled from 'styled-components'

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


export default class Header extends Component {
	constructor(props) {
	  super(props);
	  this.state = {

	  };
	}

  render () {
    return (
			<HeaderWrap>
				<Nav/>
			</HeaderWrap>
    )
  }
}

const HeaderWrap = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #ffffff;
	padding: 0 15px;
`
