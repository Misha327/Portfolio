import styled from "styled-components/macro";
const size = {
	xs: "320px",
	sm: "480px",
	md: "768px",
	lg: "1200px",
	xl: "1600px",
};
export const Container = styled.div`
	width: 100%;
	height: 200px;
	@media only screen and (max-width: 420px) {
		width: 100%;
	}

	object-fit: cover;
	position: relative;
	overflow: hidden;
	padding-top: 100%;
`;

export const CaptionContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	padding: 0 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	opacity: 0;
	-webkit-transition: all 0.45s ease-in-out;
	-moz-transition: all 0.45s ease-in-out;
	-o-transition: all 0.45s ease-in-out;
	-ms-transition: all 0.45s ease-in-out;
	transition: all 0.45s ease-in-out;

	&:hover {
		opacity: 1;
	}
`;

export const CaptionText = styled.div`
	width: inherit;
	height: inherit;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 400px) {
		font-size: 12px;
	}
	@media only screen and (max-width: 580px) {
		font-size: 18px;
	}

	@media only screen and (min-width: ${size.xl}) {
		font-size: 30px;
	}

	font-size: 20px;
	margin-top: auto;
	text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.8);

	@keyframes downSlide {
		from {
			transform: translateY(30%);
			opacity: 0;
		}
		to {
			transform: translateY(15%);
			opacity: 1;
		}
	}
`;
export const HoverContainer = styled.button`
	outline: none;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: 0;
	background: rgba(184, 184, 184, 0.52);
	z-index: 9;
	display: block;

	keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opactiy: 1;
		}
	}
	opacity: 0;
`;

export const SubTitle = styled.div``;

export const Icons = styled.div``;

export const Title = styled.h1`
	font-weight: bold;
	text-transform: uppercase;
	font-size: 24px;
	text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.8);
	color: white;
	opacity: 0;
	@media only screen and (max-width: 420px) {
		font-size: 18px;
	}
	@keyframes mymove {
		from {
			transform: translateY(0);
			opacity: 0;
		}
		to {
			transform: translateY(35px);
			opacity: 1;
		}
	}
	@media only screen and (min-width: ${size.xl}) {
		font-size: 34px;
	}
`;

export const ImageContainer = styled.div`
	outline: none;
	box-shadow: 1px 1px 4px #0000004d;
	position: relative;
	overflow: hidden;
	padding-top: 100%;
	:hover ${HoverContainer} {
		animation: fadeIn 0.3s ease-in forwards;
	}
	:hover ${Title} {
		animation: mymove 0.3s ease-in forwards;
		animation-play-state: running;
	}
	:hover ${CaptionText} {
		animation: downSlide 0.3s ease-in forwards;
		animation-play-state: running;
	}
`;
export const Image = styled.img`
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: 0;
`;
