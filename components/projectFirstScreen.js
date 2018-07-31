import React, {Component} from "react"
import styled, {css} from 'styled-components'

import {connect} from 'react-redux'

class ProjectFirstScreen extends Component {
	render() {
		return (
			this.props.state.setData.item ?
			<div>
				{this.props.state.setData.item.name ? <RegularText>{this.props.state.setData.item.name}</RegularText> : null}
				{this.props.state.setData.item.firstScreenImgUrl ? <Image src={this.props.state.setData.item.firstScreenImgUrl}/> : null}
			</div>
			: null
		)
	}
}

export default connect(
	state => ({state}),
	dispatch => ({})
)(ProjectFirstScreen)

const RegularText = styled.p`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 16px;
	line-height: 26px;
	color: #9D9D9D;
	display: block;

	max-width: 600px;
	padding: 0 0 0 0;
	margin: 0 0 20px 0;
`
const Image = styled.img`
	display: block;
	max-width: 200px;
	margin: 0 0 20px 0;
`
