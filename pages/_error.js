import React, {Fragment} from 'react'
import Header from '../components/header'
import Head from '../components/head'


export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
			<Fragment>
		    <Head title={`${this.props.statusCode}` + " error"} />
		    <Header />
				<p>
	        {this.props.statusCode
	          ? `An error ${this.props.statusCode} occurred on server`
	          : 'An error occurred on client'}
	      </p>
			</Fragment>
    )
  }
}
