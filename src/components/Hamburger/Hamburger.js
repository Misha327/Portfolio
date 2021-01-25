import React, { Component } from "react";
import styled from "styled-components";

export default class Hamburger extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container
				onClick={this.props.toggle}
				className={this.props.active ? "open" : ""}
				color={this.props.color}
			>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</Container>
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
const Container = styled.div`
	width: 35px;
	height: 30px;
	position: relative;
  float: right;
  margin: 0;
	@media screen only and (min-width: ${size.md}) {
		margin: 15px auto 0;
	}
	-webkit-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	transform: rotate(0deg);
	-webkit-transition: 0.5s ease-in-out;
	-moz-transition: 0.5s ease-in-out;
	-o-transition: 0.5s ease-in-out;
	transition: 0.5s ease-in-out;
	cursor: pointer;

	display: none;
	@media only screen and (max-width: 700px) {
		display: block;
		z-index: 9999999;
	}
	span {
		display: block;
		position: absolute;
		height: 6px;
		width: 100%;
		background: ${({ color }) => color};
		border-radius: 9px;
		opacity: 1;
		left: 0;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.25s ease-in-out;
		-moz-transition: 0.25s ease-in-out;
		-o-transition: 0.25s ease-in-out;
		transition: 0.25s ease-in-out;
	}
	span:nth-child(1) {
		top: 0px;
	}

	span:nth-child(2),
	span:nth-child(3) {
		top: 12px;
	}

	span:nth-child(4) {
		top: 24px;
	}

	&.open {
		span:nth-child(1) {
			top: 18px;
			width: 0%;
			left: 50%;
		}
		span:nth-child(2) {
			-webkit-transform: rotate(45deg);
			-moz-transform: rotate(45deg);
			-o-transform: rotate(45deg);
			transform: rotate(45deg);
		}
		span:nth-child(3) {
			-webkit-transform: rotate(-45deg);
			-moz-transform: rotate(-45deg);
			-o-transform: rotate(-45deg);
			transform: rotate(-45deg);
		}
		span:nth-child(4) {
			top: 18px;
			width: 0%;
			left: 50%;
		}
	}
`;
