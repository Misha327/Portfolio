import React, { useState } from "react";
import styled from "styled-components/macro";
import xCircleIcon from "../../images/ProjectModal/x-circle.svg";

const ProjectModal = (props) => {
	const [transition, setTransition] = useState("scale-up-center");

	return (
		<>
			<Backdrop
				onClick={() => {
					setTransition("shrink");
					setTimeout(() => {
						props.toggleIsOpen(false);
					}, 180);
				}}
			></Backdrop>
			<Container>
				<ProjectList transition={transition}>
					<Project>
						<TopSection>
							<ExitIcon
								onClick={() => {
									setTransition("shrink");
									setTimeout(() => {
										props.toggleIsOpen(false);
									}, 180);
								}}
								src={xCircleIcon}
							></ExitIcon>
							<Image src={props.picture}></Image>
						</TopSection>
						<BottomSection>
							<Title>{props.title}</Title>
							<Description>{props.subCaption}</Description>
							<Description style={{ marginTop: "auto" }}>
								Tech:
								{props.icons.map((icon, index) => (
									<Icon key={index} src={icon} />
								))}
							</Description>
							<Button href={props.url} target="_blank">
								Visit
							</Button>
						</BottomSection>
					</Project>
				</ProjectList>
			</Container>
		</>
	);
};

const size = {
	xs: "320px",
	sm: "480px",
	md: "768px",
	lg: "1200px",
	xl: "1600px",
};
const Button = styled.a`
	margin-top: 10px;
	font-size: 24px;
	padding: 10px 20px;
	// border: 3px solid #35d49f;
	font-weight: bold;
	background: #35d49f;
	text-decoration: none;
	border-radius: 2px;
	color: white;
	transition: background 0.3s;
	box-shadow: 1px 1px 4px #00000061;
	:hover {
		background: #13b481;
	}
	:active {
		box-shadow: none;
	}
`;

const Icon = styled.img`
	height: 40px;
	:first-child {
		margin-left: 6px;
	}
	margin-left: 2px;

	margin-right: 2px;
`;

const TopSection = styled.div``;

const ExitIcon = styled.img`
	-webkit-filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.3));
	filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.3));
	position: fixed;
	top: 20px;
	right: 20px;
	height: 30px;
	width: 30px;
	transition: transform 0.2s;
	:hover {
		transform: scale(1.3);
	}
`;

const Backdrop = styled.div`
	position: fixed;
	background: rgba(0, 0, 0, 0.6);
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 99;
`;

const Container = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	color: Black;
	align-items: center;
	justify-content: center;
	z-index: 9999;
	height: auto;
	width: 400px;
	@media only screen and (min-width: ${size.lg}) {
		width: 500px;
		font-size: 18px;
	}
	@media only screen and (max-width: 420px) {
		width: 100%;
	}
`;

const ProjectList = styled.div`
	object-fit: cover;
	@keyframes scale-up-center {
		0% {
			-webkit-transform: scale(0.5);
			transform: scale(0.5);
		}
		100% {
			-webkit-transform: scale(1);

			transform: scale(1);
		}
	}

	@keyframes shrink {
		0% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
		100% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
	}

	animation: ${({ transition }) => transition} 0.2s;
`;

const Project = styled.div`
	@media screen only and (max-width: 400px) {
		width: 100%;
		@media screen only and (max-height: 400px) {
		}
	}
`;

const Title = styled.h2`
	margin: 5px 0 10px;
`;

const BottomSection = styled.div`
	height: 250px;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: white;
	padding: 10px 10px 15px;
`;

const Description = styled.p`
	display: flex;
	text-align: center;
	align-items: center;
`;

const Image = styled.img`
	display: block;
	width: 100%;
	height: 400px;
	object-fit: cover;
	@media only screen and (min-width: ${size.lg}) {
		height: 400px;
		@media only screen and (min-height: 900px) {
			height: 600px;
		}
	}
	@media only screen and (min-width: ${size.xl}) {
		height: 600px;
	}
`;

export default ProjectModal;
