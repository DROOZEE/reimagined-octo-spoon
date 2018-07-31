import React, {Fragment, Component} from "react"
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'
import createDecorator from 'final-form-focus'
import styled, { css } from 'styled-components';
import ReCAPTCHA from "react-google-recaptcha";

const focusOnErrors = createDecorator()

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let pattname = /.+/;
let pattemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let pattmessage = /.+/;

const required = value => {
	return value ? undefined : "error";
};
const requiredEmail = value => {
	return value ? undefined : "error";
};

const onSubmit = async values => {
	await sleep(300);

	$.ajax({
		url : "/index.php?r=site/contact-us",
		type : "POST",
		data : JSON.stringify(values, 0, 2),
		cache : false,
		contentType : false,
		processData : false,
		success : function() {
			console.log(JSON.stringify(values, 0, 2));
		},
		error: function () {
			console.log(JSON.stringify(values, 0, 2));
		}
	});
}

class Captcha extends Component {
	render(){
		return (
			<Recaptcha>
				<StyledReCAPTCHA
					id="recaptcha1"
					ref="recaptcha"
					sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
					onChange={onChange}
					theme="dark"
				/>
			</Recaptcha>
		)
	}
}

class SectionContact extends Component {

	render() {
		return (
			<Form
				ref={this.myRef}
				onSubmit={onSubmit}
				decorators={[ focusOnErrors ]}
				render={({ handleSubmit, form, submitting, pristine, values }) => (
					<FormStd className="contact-form" onSubmit={handleSubmit}>
						<RegularRow emailandloc>
							<LinkToCommunicate href="mailto:pm@maincode.agency" rel="noopener noreferrer">email:<RegularText emailandloc>pm@maincode.agency</RegularText></LinkToCommunicate>
							<LinkToCommunicate href="https://www.google.com.ua/maps/place/Капиталист/@50.0258501,36.219044,17z/data=!4m5!3m4!1s0x4127a135cd14df0d:0xf787c457ae02fb40!8m2!3d50.0265245!4d36.2202508" target="_blanck" rel="noopener noreferrer">location:<RegularText emailandloc>61072, Ukraine, Kharkiv, 27B Nauky ave.</RegularText></LinkToCommunicate>
						</RegularRow>

						<RegularRow className="contact-form__row">
							<FormGroup className="contact-form__form-group">
								<LabelStd className="contact-form__label" htmlFor="name">Name*</LabelStd>
								<Field name="name" className="contact-form__input req" validate={required}>
									{({ input, meta }) => (
										<FieldsetStd className="contact-form__fieldset">
											<InputStd {...input}
												id="name"
												autoComplete="off"
												component="input"
												type="text"
												placeholder="Your name"
												className={meta.error && meta.touched && meta.error}/>
										</FieldsetStd>
									)}
								</Field>
							</FormGroup>

							<FormGroup className="contact-form__form-group">
								<LabelStd className="contact-form__label" htmlFor="email">Email*</LabelStd>
								<Field name="email" className="contact-form__input req" validate={requiredEmail}>
									{({ input, meta }) => (
										<FieldsetStd className="contact-form__fieldset">
											<InputStd {...input}
												id="email"
												autoComplete="off"
												component="input"
												type="text"
												placeholder="Your email"
												className={meta.error && meta.touched && meta.error}/>
										</FieldsetStd>
									)}
								</Field>
							</FormGroup>

						</RegularRow>

						<RegularRow className="contact-form__row">
							<FormGroup className="contact-form__form-group">
								<LabelStd className="contact-form__label" htmlFor="phone">Phone</LabelStd>


									<Field name="phone" className="contact-form__input req">
										{({ input}) => (
											<FieldsetStd className="contact-form__fieldset">
												<InputStd {...input}
													id="phone"
													autoComplete="off"
													component="input"
													type="text"
													placeholder="Your phone number"/>
											</FieldsetStd>
										)}
									</Field>
							</FormGroup>

							<FormGroup className="contact-form__form-group">
								<LabelStd className="contact-form__label" htmlFor="file">Attach file<RegularText upload className="up-to">(up to 25MB)</RegularText></LabelStd>

								<FieldsetStd className="contact-form__fieldset">
									<Label htmlFor="file"><FormIconStd upload className="contact-form__icon maincode-paperclip"></FormIconStd></Label>

									<UploadStdStyled className="contact-form__upload" id="file" type="file" name="file"/>
									<UploadFieldStyled className="contact-form__upload-field" htmlFor="file"></UploadFieldStyled>
									<FormIconStd remove className="contact-form__icon maincode-close"></FormIconStd>
								</FieldsetStd>
							</FormGroup>
						</RegularRow>

						<RegularRow className="contact-form__row">
							<FormGroup textarea className="contact-form__form-group">
								<LabelStd className="contact-form__label" htmlFor="message">Message*</LabelStd>


									<Field name="message" className="contact-form__textarea req" validate={required}>
										{({ input, meta }) => (
											<FieldsetStd textarea className="contact-form__fieldset">
												<TextareaStd {...input}
													id="message"
													placeholder="Describe your project or tell us how you are doing"
													component="textarea"
													className={meta.error && meta.touched && meta.error}/>
											</FieldsetStd>
										)}
									</Field>
							</FormGroup>
						</RegularRow>
						<Recaptcha id="captch-cont1"></Recaptcha>

						<BtnStd type="submit" className="contact-form__btn" disabled={submitting}>Send request</BtnStd>
					</FormStd>
				)}
			/>
		)
	}
}

export default SectionContact

const StyledReCAPTCHA = styled(ReCAPTCHA)`
	transform-origin: 0% 0%;
	transform: scale(0.94);
`
const Recaptcha = styled.div`
	display: block;
	margin-bottom: 32px;
`

const LinkToCommunicate = styled.a`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 16px;
	line-height: 26px;
	display: block;
	color: #9D9D9D;
	margin: 0px 50px 0px 0px;
	display: flex;
	justify-content: flex-start;
`

const FormStd = styled.form`
	width: 850px;
	@media (max-width: 1120px) {
		width: 100%;
	}
`
const RegularText = styled.p`
	font-family: "Circular", sans-serif;
	-webkit-font-smoothing: antialiased;
	font-size: 16px;
	line-height: 26px;
	display: block;
	color: #ffffff;
	margin-bottom: 55px;

	${props => props.emailandloc && css`
		margin-bottom: 0px;
		padding-left: 5px;
	`}
	${props => props.upload && css`
		font-size: 12px;
		margin-bottom: 0px;
		display: inline-block;
		line-height: 14px;
		padding-left: 7px;
		vertical-align: top;
		color: #9D9D9D;
	`}
	@media (max-width: 992px) {
		margin-bottom: 25px;
		${props => props.upload && css`
			margin-bottom: 0px;
		`}
	}
`

const FormGroup = styled.div`
	width: 410px;
	margin: 0;
	padding: 0;
	border: 0;
	line-height: 1;
	border-radius: 3px;
	cursor: default;
	${props => props.textarea && css`
		width: 100%;
	`}
	@media (max-width: 1120px) {
		width: 48.3%;
		${props => props.textarea && css`
			width: 100%;
		`}
	}
	@media (max-width: 992px) {
		width: 100%;
		margin-bottom: 20px;
	}
`
const LabelStd = styled.label`
	padding: 10px 0px;
	display: block;
	font-family: "AvantGardeLT", sans-serif;
	font-size: 14px;
	-webkit-font-smoothing: antialiased;
	color: #ffffff;
	user-select: none;
`
const FieldsetStd = styled.fieldset`
	margin: 0;
	padding: 0;
	border: 0;
	display: inline-block;
	width: 100%;
	line-height: 1;
	vertical-align: top;
	border-radius: 3px;
	cursor: default;
	position: relative;
	background-color: #2B2B2B;
	${props => props.textarea && css`
		height: 160px;
	`}
`


const InputStd = styled(Field)`
	width: 100%;
	margin: 0;
	padding: 0;
	border: 0;
	outline: none;
	display: inline-block;
	line-height: 1;
	vertical-align: top;
	padding: 14px 20px;
	box-sizing: border-box;
	font-family: "Circular", sans-serif;
	font-size: 16px;
	color: #ffffff;
	-webkit-font-smoothing: antialiased;
	border-radius: 3px;
	transition: 0.3s background-color cubic-bezier(0.4, 0.0, 0.2, 1);
	z-index: 3;
	position: relative;
	background-color: #2B2B2B;
	&::placeholder {
		color: #9D9D9D;
	}
	&:hover, &:focus {
		background-color: #333333;
		transition: 0.3s background-color cubic-bezier(0.4, 0.0, 0.2, 1);
	}
	@media (max-width: 992px) {
		padding: 12px 15px;
	}
	&.error {
		background-color: #4b2525;
	}
`

const UploadStdStyled = styled.input`
	width: 100%;
	display: none;
`
const UploadFieldStyled = styled.label`
	display: inline-block;
	line-height: 48px;
	vertical-align: middle;
	box-sizing: border-box;
	font-family: "Circular", sans-serif;
	font-size: 16px;
	color: #9D9D9D;
	padding: 0px 44px 0px 45px;
	-webkit-font-smoothing: antialiased;
	border-radius: 3px;
	transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	z-index: 3;
	position: relative;
	background-color: transparent;
	cursor: pointer;
	width: 100%;
	height: 48px;
	overflow: hidden;
	&:hover {
		background-color: #333333;
		transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	}
`
const TextareaStd = styled(Field)`
	height: 160px;
	width: 100%;
	margin: 0;
	padding: 0;
	border: 0;
	outline: none;
	display: inline-block;
	resize: none;
	padding: 15px 20px;
	box-sizing: border-box;
	font-family: "Circular", sans-serif;
	font-size: 16px;
	color: #ffffff;
	-webkit-font-smoothing: antialiased;
	background-color: transparent;
	border-radius: 3px;
	transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	&:hover, &:focus {
		background-color: #333333;
		transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	}
	&::placeholder {
		color: #9D9D9D;
	}
	@media (max-width: 992px) {
		padding: 10px 15px;
	}
	&.error {
		background-color: #4b2525;
	}
`
const Label = styled.label`
	position: relative;
`
const FormIconStd = styled.i`
	position: absolute;
	top: 18px;
	right: 20px;
	font-size: 14px;
	color: #000000;
	user-select: none;
	z-index: 3;
	&::before {
		user-select: none;
	}
	${props => props.upload && css`
		top: 50%;
		left: 15px;
		transform: translateY(-50%);
		z-index: 4;
		width: 20px;
		font-size: 20px;
		color: #9D9D9D;
		background-color: transparent;
		transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
		cursor: pointer;
	`}
	${props => props.remove && css`
		top: 50%;
		right: 0px;
		transform: translateY(-50%);
		z-index: 4;
		width: 12px;
		padding: 18px 16px;
		font-size: 12px;
		color: #9D9D9D;
		transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
		cursor: pointer;
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
		display: none;
		background-color: transparent;
		&:hover {
			color: #ffffff;
		}
	`}
	${props => props.select && css`
		top: 17px;
		transform: rotate(180deg);
		z-index: 1;
	`}
`
const BtnStd = styled.button`
	display: inline-block;
	appearance: none;
	font-family: "CircularMed", sans-serif;
	font-size: 18px;
	line-height: 48px;
	background-color: #ffffff;
	color: #141414;
	border: none;
	outline: none;
	padding: 0px 24px;
	text-align: center;
	cursor: pointer;
	border-radius: 3px;
	-webkit-font-smoothing: antialiased;
	transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);
	&:hover {
		background-color: rgba(255, 255, 255, 0.7);
		color: #141414;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`
const RegularRow = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 26px;
	${props => props.emailandloc && css`
		justify-content: flex-start;
		margin-bottom: 55px;
	`}
	${props => props.textarea && css`
		margin-bottom: 32px;
	`}
	@media (max-width: 992px) {
		flex-direction: column;
		margin-bottom: 0px;
	}
`
