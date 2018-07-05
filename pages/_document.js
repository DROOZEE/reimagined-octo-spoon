import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

export default class MyDocument extends Document {
	static getInitialProps ({ renderPage }) {
		const sheet = new ServerStyleSheet()
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
		const styleTags = sheet.getStyleElement()
		return { ...page, styleTags }
	}
	render () {
		return (
			<html>
				<Head>
					{this.props.styleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}

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
`
