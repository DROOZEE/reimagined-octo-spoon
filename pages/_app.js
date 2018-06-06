import React from 'react'
import App, {Container} from 'next/app'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

class Layout extends React.Component {
  render () {
    const {children} = this.props
    return (
			<div className='page'>
	      {children}
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
