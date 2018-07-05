import React from 'react'
import App, {Container} from 'next/app'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

import {HeaderHorizontal} from '../components/headerHorizontal'
import Header from '../components/headerVertical'
import Footer from '../components/footer'
import {SidebarLeft, SidebarRight} from '../components/sideBar'

class Layout extends React.Component {
	static getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return { statusCode }
	}

	render () {
		const {children} = this.props
		return (
			<div className='page'>
				{!this.props.children.props.statusCode ? <HeaderHorizontal /> : null}

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
