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
	* {
		box-sizing: border-box;
	}

	html {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		&.oh-y_hidden {
			overflow-y: hidden;
		}
	}

	body {
		margin: 0;
		overflow-x: hidden;
		background-color: #141414;
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
	}

	button {
		margin-top: 60px;
	}

	.main-enter {
		opacity: 0.01;
	}

	.main-enter.main-enter-active {
		opacity: 1;
		transition: opacity 500ms ease-in;
	}

	.main-leave {
		opacity: 1;
	}

	.main-leave.main-leave-active {
		opacity: 0.01;
		transition: opacity 300ms ease-in;
	}

	.main-appear {
	  opacity: 0.01;
	}

	.main-appear.main-appear-active {
	  opacity: 1;
	  transition: opacity .5s ease-in;
	}



	.app-enter {
		opacity: 0.01;
	}

	.app-enter.app-enter-active {
		opacity: 1;
		transition: opacity 500ms ease-in;
	}

	.app-leave {
		opacity: 1;
	}

	.app-leave.app-leave-active {
		opacity: 0.01;
		transition: opacity 300ms ease-in;
	}

	.app-appear {
	  opacity: 0.01;
	}

	.app-appear.app-appear-active {
	  opacity: 1;
	  transition: opacity .5s ease-in;
	}
`
