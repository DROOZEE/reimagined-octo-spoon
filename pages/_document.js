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
	}

	main {
		padding: 60px 15px;
		min-height: calc(100vh - 60px);
	}
`
