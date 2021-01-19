import React from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import ContactForm from "../ContactForm/ContactForm";
import { Animated } from "react-animated-css";
import Footer from "../Footer/Footer";
import mishaCV from "../../images/MishaVasiljevs_CV.pdf";
import styled from "styled-components/macro";

export default class ContactSection extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div
					style={{
						width: "100%",
					}}
					id="contact"
				></div>

				<Jumbotron backgroundColor={"#08415C"}>
					<Jumbotron.Content justify={"center"} color={"white"}>
						<Animated
							animationIn="bounceInLeft"
							animationOut="fadeOut"
							isVisible={this.props.isVisible}
						>
							<Jumbotron.Title color={"white"}>Get In Touch</Jumbotron.Title>
							<Jumbotron.Text margin={"0 0 20px"}>
								Hiring? Check out my{" "}
								<Anchor href={mishaCV} target="_blank">
									CV
								</Anchor>
							</Jumbotron.Text>
						</Animated>
						<Animated
							animationIn="bounceInRight"
							animationOut="fadeOut"
							isVisible={this.props.formVisible}
						>
							<BottomText>Have a question or want to work together?</BottomText>
						</Animated>
						<Animated
							animationIn="bounceIn"
							animationOut="fadeOut"
							isVisible={this.props.formVisible}
						>
							<ContactForm background={""}></ContactForm>
						</Animated>
					</Jumbotron.Content>
					<Footer></Footer>
				</Jumbotron>
			</>
		);
	}
}

const Anchor = styled.a`
	// text-decoration: none;
	// font-style: italic;
	color: #33ffbb;
	:hover {
		color: #35d49f;
	}
	:visited {
	}
`;

const size = {
	xs: "320px",
	sm: "480px",
	md: "768px",
	lg: "1200px",
	xl: "1600px",
};

const heightSize = {
	xs: "320px",
	sm: "480px",
	md: "720px",
	lg: "900px",
	xl: "1080px",
};
const BottomText = styled.p`
	// pointer-events: none;
	text-align: center;
	margin-bottom: 20px;
	@media only screen and (min-width: ${size.xs}) {
		font-size: 16px;
		@media only screen and (min-height: 568px) {
		}

		@media only screen and (min-height: 667px) {
		}
		@media only screen and (min-height: ${size.lg}) {
			font-size: 25px;
		}
	}

	@media only screen and (min-width: ${size.sm}) {
		padding: 0 2rem;
		font-size: 20px;

		@media only screen and (min-height: ${size.md}) {
			font-size: 22px;
		}
	}
	@media only screen and (min-width: ${size.md}) {
		font-size: 25px;
		@media only screen and (min-height: ${size.md}) {
			font-size: 27px;
			margin: ${({ margin }) => margin};
		}
		@media only screen and (min-height: 900px) {
			font-size: 27px;
		}
	}

	@media only screen and (min-height: ${heightSize.md}) {
		@media only screen and (min-width: ${size.lg}) {
			font-size: 22px;
		}
	}
	@media only screen and (min-height: ${heightSize.lg}) {
		@media only screen and (min-width: ${size.lg}) {
			font-size: 25px;
		}
	}
`;
