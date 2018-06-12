import React, {Fragment, Component} from 'react'
import Link from 'next/link'
import Main from '../components/main'
import Footer from '../components/footer'
import Head from '../components/head'
import styled from 'styled-components'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
			<Fragment>
		    <Head title={`${this.props.statusCode}` + " error"} />
				<ErrorWrap>
					<ErrorText>
		        {this.props.statusCode
		          ? `An error ${this.props.statusCode} occurred on server.`
		          : 'An error occurred on client.'}
		      </ErrorText>
					<Link href="/">
						<LinkHolder>Back to home.</LinkHolder>
					</Link>
				</ErrorWrap>
			</Fragment>
    )
  }
}

export default (Error)

const ErrorWrap = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`
const ErrorText = styled.p`
	padding: 10px;
`
const LinkHolder = styled.a`
	display: inline-block;
	text-decoration: none;
	color: #9D9D9D;
	cursor: pointer;
	font-size: 16px;
	line-height: 20px;
	transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	padding: 10px;
	&:hover {
		color: #141414;
	}
`
