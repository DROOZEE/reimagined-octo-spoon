import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = (props) => (
	<NextHead {...props}>
		<meta charset="UTF-8" />
		<title>{props.title || ''}</title>
		<meta name="description" content={props.description || defaultDescription} />
		<meta name="viewport" content="width=device-width, initial-scale=1" />

		<link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
		<link rel="apple-touch-icon" sizes="57x57" href="/static/apple-touch-icon.png" />
		<link rel="apple-touch-icon" sizes="72x72" href="/static/apple-touch-icon-72x72.png" />
		<link rel="apple-touch-icon" sizes="114x114" href="/static/apple-touch-icon-114x114.png" />
		<meta property="og:url" content={props.url || defaultOGURL} />
		<meta property="og:title" content={props.title || ''} />
		<meta property="og:description" content={props.description || defaultDescription} />
		<meta name="twitter:site" content={props.url || defaultOGURL} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<link rel='stylesheet' type='text/css' href='/static/nprogress.css' />

		<link rel='stylesheet' type='text/css' href='/static/fonts/maincode/style.css' />
		<link rel='stylesheet' type='text/css' href='/static/fonts/AvantGardeLT/style.css' />
		<link rel='stylesheet' type='text/css' href='/static/fonts/Circular/style.css' />
		<link rel='stylesheet' type='text/css' href='/static/fonts/CircularMed/style.css' />
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/jquery.gsap.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/utils/Draggable.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/plugins/ScrollToPlugin.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/plugins/PixiPlugin.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/plugins/ModifiersPlugin.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/plugins/ColorPropsPlugin.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/plugins/CSSRulePlugin.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/plugins/EaselPlugin.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/plugins/TextPlugin.min.js"></script>
	</NextHead>
)

Head.propTypes = {
	title: string,
	description: string,
	url: string,
	ogImage: string
}

export default Head
