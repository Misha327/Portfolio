import React, { useState } from "react";
import { Container } from "./styles/styles";
import Card from "../Card/Card";

export default function CardsList(props) {


	if (props.loading) {
		return <Container></Container>;
	} else {
		const projects = props.projects.map((project) => {
			return (
				<Card
					key={project.id}
					project={project}
					isVisible={props.isVisible}
				></Card>
			);
		});
		return (
			<>
				<Container>{projects}</Container>
			</>
		);
	}
}
