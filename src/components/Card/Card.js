import React, { useState } from "react";
import {
	Container,
	CaptionContainer,
	Title,
	SubTitle,
	Icons,
	CaptionText,
	Image,
	ImageContainer,
	HoverContainer,
} from "../Card/styles";

import PlaceholderImage from "../../images/placeholder.png";
import ProjectModal from "../ProjectModal/ProjectModal";
import { Animated } from "react-animated-css";

export default function Card(props) {
	const [isOpen, toggleIsOpen] = useState(false);

	const { name, subCaption, icons, picture, caption, url } = props.project;
	return (
		<>
			{isOpen && (
				<ProjectModal
					title={name}
					picture={picture}
          caption={caption}
          subCaption={subCaption}
					url={url}
					project={props.project}
					toggleIsOpen={toggleIsOpen}
					icons={icons}
				/>
			)}
			<Animated
				animationIn="bounceInUp"
				animationOut="fadeOut"
				isVisible={props.isVisible}
			>
				<ImageContainer>
					<HoverContainer
						onClick={() => {
							toggleIsOpen(true);
						}}
					>
						<CaptionContainer>
							<Title>{name}</Title>
							<CaptionText>{subCaption}</CaptionText>
						</CaptionContainer>
					</HoverContainer>

					<Image src={picture}></Image>
				</ImageContainer>
			</Animated>
		</>
	);
}
