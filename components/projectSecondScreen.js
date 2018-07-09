import React, {Fragment, Component} from "react"
import styled, {css} from 'styled-components'

import {connect} from 'react-redux'

class ProjectSecondScreen extends Component {
	render() {
		return (
			<Fragment>
				<RegularText>{this.props.state.setData.item ? this.props.state.setData.item.desc  : ''}</RegularText>
			</Fragment>
		)
	}
}

export default connect(
	state => ({state}),
	dispatch => ({})
)(ProjectSecondScreen)

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
