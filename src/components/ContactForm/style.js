import styled from "styled-components/macro";

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

export const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;

	@media only screen and (max-width: 620px) {
	}
`;

export const Inner = styled.div`
	@media only screen and (min-height: 728px) {
		max-width: 100%;
	}
	height: 100%;
	min-height: 100%;
	max-width: 758px;
	border-radius: 2px;
	background: ${({ background }) => background};

	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
	-webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
	-moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
	-ms-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
	-o-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
	// height: 100%;
`;

export const Header = styled.h3`
	margin: 10px auto 25px;
	font-weight: normal;
		font-size: 15px;
	text-align:center;
	@media only screen and (min-width: 360px) {
		font-size: 15px;
	}
	@media only screen and (min-width: ${size.sm}) {
		font-size: 17px;
	}
	@media only screen and (min-width: ${size.md}) {
		font-size: 23px;
	}
	@media only screen and (min-width: ${size.lg}) {
		font-size: 28px;
	}
`;

export const Form = styled.form`
	text-align: left;
	display: flex;
	flex-direction: column;
	padding: 20px 20px;
	min-height: 100%;
	width: 300px;
	height: 100%;

	@media only screen and (min-width: ${size.xs}) {
		width: 250px;
	}
	@media only screen and (min-height: 590px) {
		width: 320px;
	}
	@media only screen and (min-height: 668px) {
		width: 340px;
	}

	@media only screen and (min-height: ${heightSize.md}) {
		@media only screen and (min-width: ${size.sm}) {
			width: 380px;
		}
	}
	@media only screen and (min-height: 800px) {
	}
	@media only screen and (min-height: ${heightSize.lg}) {
		@media only screen and (min-width: ${size.md}) {
			width: 500px;
		}
	}
	@media only screen and (min-width: ${size.md}) {
		@media only screen and (min-height: ${size.lg}) {
			width: 600px;
		}
	}
	// @media only screen and (min-width: ${size.lg}) {
	// 	@media only screen and (min-height: ${size.md}) {
	// 		width: 450px;
	// 		height: 450px;
	// 	}
	// }
`;

export const FormLabel = styled.label``;

export const FormField = styled.input`
	border-radius: 2px;
	font-weight: 600;
	@media only screen and (min-width: ${size.xl}) {
		font-size: 18px;
	}
	border: 0;
	margin: 0 0 15px;
	padding: 5px 8px;
	outline: none;
	background: #fcf7f8;
	box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
	::-webkit-input-placeholder {
		font-family: "Lato", Arial, Helvetica, sans-serif;
		opacity: 1; /* Firefox */
	}
	font-family: inherit;
`;

export const MessageField = styled.textarea`
	text-decoration: none;
	font-weight: 500;
	resize: none;

	height: 100%;
	@media only screen and (min-width: ${size.xl}) {
		font-size: 18px;
	}
	@media only screen and (min-height: 590px) {
		height: 150px;
	}
	@media only screen and (min-height: ${heightSize.md}) {
		height: 180px;
	}
	@media only screen and (min-height: ${heightSize.lg}) {
		height: 290px;
	}
	@media only screen and (min-height: ${heightSize.xl}) {
		height: 450px;
	}
	@media only screen and (min-height: ${size.lg}) {
		height: 550px;
	}

	border-radius: 2px;
	outline: none;
	padding: 5px 8px;
	width: 100%;
`;

export const Button = styled.button`
	border: none;
	outline: none;
	color: white;
	padding: 10px 30px;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
	background: #35d49f;
	margin: 1rem auto 0;
	transition: background 0.1s ease-in;
	border-radius: 2px;
	:hover {
		background: #23916d;
		cursor: pointer;
	}
	:active {
		box-shadow: none;
	}

	@media only screen and (min-height: ${size.md}) {
		font-size: 18px;
	}
`;
