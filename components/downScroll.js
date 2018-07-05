import React from "react";
import styled, {css} from 'styled-components'

function DownScroll() {
	return (
		<DownScrollStyled>
			<DownScrollContentStyled>
				<AnimatedDownScrollStd>
					<Circle first/>
					<Line/>
					<Circle second/>
				</AnimatedDownScrollStd>

				<DownScrollTextStyled>Scroll down to<br/>see the full page</DownScrollTextStyled>
			</DownScrollContentStyled>
		</DownScrollStyled>
	);
}

export default DownScroll;

const DownScrollStyled = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;
	padding: 0 0 30px 0;
	@media (max-width: 768px) {
		height: 53px;
		margin-bottom: 20px;
	}
`
const DownScrollContentStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 120px;
	height: 100%;
`
const DownScrollTextStyled = styled.p`
	text-align: center;
	font-family: "Circular", sans-serif;
	font-size: 12px;
	-webkit-font-smoothing: antialiased;
	line-height: 1.54545454;
	color: #ffffff;
	transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	@media (max-width: 768px) {
		display: none;
	}
`

const AnimatedDownScrollStd = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 32px;
	height: 35px;
	border-radius: 20px;
	background-color: rgba(0,0,0,0.2);
	padding: 9px 0px;
	transform: translateX(-0.5px);
`
const Circle = styled.div`
	display: block;
	width: 7px;
	height: 7px;
	border-radius: 50%;
	border: 1px solid #9D9D9D;
	${props => props.first && css`
		animation-name: flash-circle;
		animation-duration: 0.9s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-delay: 1.2s;
	`}
	${props => props.second && css`
		animation-name: flash-circle;
		animation-duration: 0.9s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-delay: 0s;
	`}
`
const Line = styled.div`
	display: block;
	width: 1px;
	height: 10px;
	background-color: #9D9D9D;
	animation-name: flash-line;
	animation-duration: 0.9s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-delay: 0.6s;
`
