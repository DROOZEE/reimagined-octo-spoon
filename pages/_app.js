import React from 'react'
import App, {Container} from 'next/app'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'

// import Header from '../components/header'

import HeaderHorizontal from '../components/headerHorizontal'
import HeaderVertical from '../components/headerVertical'
import {Footer} from '../components/footer'
import {SidebarLeft, SidebarRight} from '../components/sideBar'

import NProgress from 'nprogress'
import Router from 'next/router'

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = (url) => {
	NProgress.start()
}
Router.onRouteChangeComplete = () => {
	NProgress.done()

	if(window.location.pathname === '/showreel'){
		document.getElementsByClassName('showreel-link_open')[0].classList.remove("showreel-link_active")
		document.getElementsByClassName('showreel-link_close')[0].classList.add("showreel-link_active")
		document.getElementsByClassName('lets-talk')[0].classList.add("lets-talk_hidden")
		document.getElementsByClassName('min-lets-talk')[0].classList.add("min-lets-talk_hidden")
		document.getElementsByClassName('header')[0].classList.add("header_hidden")
	} else {
		document.getElementsByClassName('showreel-link_open')[0].classList.add("showreel-link_active")
		document.getElementsByClassName('showreel-link_close')[0].classList.remove("showreel-link_active")
		document.getElementsByClassName('lets-talk')[0].classList.remove("lets-talk_hidden")
		document.getElementsByClassName('min-lets-talk')[0].classList.remove("min-lets-talk_hidden")
		document.getElementsByClassName('header')[0].classList.remove("header_hidden")
		if(window.location.pathname === '/contact'){
			document.getElementsByClassName('lets-talk')[0].classList.add("lets-talk_hidden")
			document.getElementsByClassName('min-lets-talk')[0].classList.add("min-lets-talk_hidden")
		} else {
			document.getElementsByClassName('lets-talk')[0].classList.remove("lets-talk_hidden")
			document.getElementsByClassName('min-lets-talk')[0].classList.remove("min-lets-talk_hidden")
		};
	};
}
Router.onRouteChangeError = () => NProgress.done()

class Layout extends React.Component {
	static getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return { statusCode }
	}

	render () {
		const {children} = this.props
		return (
			<div className='page'>
				{/* {!this.props.children.props.statusCode ? <Header /> : null} */}
				{!this.props.children.props.statusCode ? <HeaderHorizontal /> : null}
				{!this.props.children.props.statusCode ? <HeaderVertical /> : null}

				{!this.props.children.props.statusCode ? <SidebarLeft /> : null}
				{!this.props.children.props.statusCode ? <SidebarRight /> : null}

				{children}

				{!this.props.children.props.statusCode ? <Footer /> : null}
			</div>
		)
	}
}

class MyApp extends App {
	render () {
		const {Component, pageProps, reduxStore} = this.props
		return (
			<Container>
				<Provider store={reduxStore}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Provider>
			</Container>
		)
	}
}

export default withReduxStore(MyApp)


injectGlobal`
	${'' /* * {
		box-sizing: border-box;
	} */}

	html {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		overflow-x: hidden;
		&.ovf-y_hidden {
			overflow-y: hidden;
		}
	}

	body {
		margin: 0;
		overflow-x: hidden;
		background-color: #141414
		width: calc(100vw - 100% + 100%);
	}

	h1, h2, h3, h4, h5, h6, p, ul, li {
		margin: 0;
		padding: 0;
	}

	p {
		margin: 0;
		padding: 0;
	}

	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;
	}

	a, a:active, a:visited, a:focus {
		text-decoration: none;
		outline: none;
	}

	.main-enter {
		opacity: 0.01;
	}

	.main-enter.main-enter-active {
		opacity: 1;
		transition: opacity 0.5s ease-in;
	}

	.main-leave {
		opacity: 1;
	}

	.main-leave.main-leave-active {
		opacity: 0.01;
		transition: opacity 0.3s ease-in;
	}

	.main-appear {
		opacity: 0.01;
	}

	.main-appear.main-appear-active {
		opacity: 1;
		transition: opacity 0.5s ease-in;
	}



	.fade-enter {
		opacity: 0.01;
	}

	.fade-enter.fade-enter-active {
		opacity: 1;
		transition: opacity 0.5s ease-in;
	}

	.fade-leave {
		opacity: 1;
	}

	.fade-leave.fade-leave-active {
		opacity: 0.01;
		transition: opacity 0.3s ease-in;
	}

	.fade-appear {
		opacity: 0.01;
	}

	.fade-appear.fade-appear-active {
		opacity: 1;
		transition: opacity 0.5s ease-in;
	}

	@keyframes flash-circle {
		0% {
			border: 1px solid #9D9D9D;
		}
		50% {
			border: 1px solid #ffffff;
		}
		100% {
			border: 1px solid #9D9D9D;
		}
	}

	@keyframes flash-line {
		0% {
			background-color: #9D9D9D;
		}
		50% {
			background-color: #ffffff;
		}
		100% {
			background-color: #9D9D9D;
		}
	}

	@keyframes drag {
		0% {
			transform: translate(-20px, 0px);
		}
		33% {
			transform: translate(0px, 0px);
		}
		66% {
			transform: translate(-20px, 0px);
		}
		100% {
			transform: translate(0px, 0px);
		}
	}
`
