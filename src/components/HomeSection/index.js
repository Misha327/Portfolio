import React from "react";
import styled from "styled-components";
import Jumbotron from "../Jumbotron/Jumbotron";
import arrowIcon from "../../images/arrow-right.svg";
import { Link } from "react-scroll";
import Particles from "react-particles-js";
import { Animated } from "react-animated-css";
import { isMobile } from "react-device-detect";

export default class HomeSection extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div
				style={{
					width: "100%",
				}}
				id="home"
			>
				<Jumbotron
					height={"100vh"}
					justify={"center"}
					backgroundColor="transparent"
				>
					<Particles
						style={{
							width: "100%",
							position: "absolute",
							top: "0",
							left: "0",
						}}
						params={{
							particles: {
								number: {
									value: 70,
									density: {
										enable: true,
										value_area: 4000,
									},
								},
								color: {
									value: "#35d49f",
								},
								shape: {
									type: "circle",
									stroke: {
										width: 0,
										color: "#da3e7d85",
									},
									polygon: {
										nb_sides: 5,
									},
								},
								opacity: {
									value: 0.5,
									random: false,
									anim: {
										enable: false,
										speed: 1,
										opacity_min: 0.1,
										sync: false,
									},
								},
								size: {
									value: 8,
									random: true,
									anim: {
										enable: false,
										speed: 40,
										size_min: 0.1,
										sync: false,
									},
								},
								line_linked: {
									enable: false,
									distance: 100,
									color: "#da3e7d85",
									opacity: 0.30756778632132753,
									width: 1,
								},
								move: {
									enable: true,
									speed: 6,
									direction: "none",
									random: false,
									straight: false,
									out_mode: "out",
									bounce: false,
									attract: {
										enable: false,
										rotateX: 600,
										rotateY: 1200,
									},
								},
							},
							interactivity: {
								detect_on: "canvas",
								events: {
									onhover: {
										enable: isMobile ? false : true,
										mode: "bubble",
									},
									onclick: {
										enable: true,
										mode: "push",
									},
									resize: true,
								},
								modes: {
									grab: {
										distance: 400,
										line_linked: {
											opacity: 1,
										},
									},
									bubble: {
										distance: 400,
										size: 60,
										duration: 2,
										opacity: 8,
										speed: 5,
									},
									repulse: {
										distance: 200,
										duration: 0.4,
									},
									push: {
										particles_nb: 4,
									},
									remove: {
										particles_nb: 2,
									},
								},
							},
							retina_detect: true,
						}}
					></Particles>
						<Jumbotron.TextWrapper>
							<Jumbotron.WelcomeTitle
								style={{
									pointerEvents: "none",
								}}
							>
								Hello, I'm{" "}
								<span
									style={{
										color: "#35d49f",
										textShadow: "0px 0px 4px white",
									}}
								>
									Misha
								</span>
							</Jumbotron.WelcomeTitle>
							<Jumbotron.SecondaryText
								style={{
									pointerEvents: "none",
								}}
							>
								- A Full Stack Software Developer
							</Jumbotron.SecondaryText>
						</Jumbotron.TextWrapper>
						<Link to="projects" smooth={true}>
							<Jumbotron.Button>
								View my work <Icon className={"spinner"} src={arrowIcon} />
							</Jumbotron.Button>
						</Link>
				</Jumbotron>
			</div>
		);
	}
}

const size = {
	xs: "320px",
	sm: "480px",
	md: "768px",
	lg: "1200px",
	xl: "1600px",
};
const Icon = styled.img`
	width: 24px;
	margin-left: 14px;
	transition: transform 0.2s ease-in;
	@media only screen and (min-width: ${size.md}) {
		width: 34px;
	}
`;
