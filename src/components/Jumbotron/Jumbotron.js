import React from "react";
import {
	Outer,
	Content,
	UnderlinedTitle,
	Text,
	SecondaryText,
	Image,
	Button,
	TextWrapper,
	WelcomeTitle,
	ButtonText,
	Icon,
	Anchor,
} from "./styles/styles";

export default function Jumbotron({
	children,
	backgroundColor = "#35d49f",
	justify,
	alignment = "flex-start",
	minHeight = "100vh",
	height = "100%",
}) {
	return (
		<>
			<Outer
				height={height}
				alignment={alignment}
				backgroundColor={backgroundColor}
				justify={justify}
				minHeight={minHeight}
			>
				{children}
			</Outer>{" "}
		</>
	);
}

Jumbotron.WelcomeTitle = function JumbotronWelcome({ children }) {
	return <WelcomeTitle>{children}</WelcomeTitle>;
};

Jumbotron.Title = function JumbotronTitle({ children, color = "black" }) {
	return <UnderlinedTitle color={color}>{children}</UnderlinedTitle>;
};

Jumbotron.Text = function JumbotronText({
	children,
	margin = "0",
	textAlign = "center",
}) {
	return (
		<Text margin={margin} textAlign={textAlign}>
			{children}
		</Text>
	);
};

Jumbotron.SecondaryText = function JumbotronSecondaryText({ children }) {
	return <SecondaryText>{children}</SecondaryText>;
};

Jumbotron.TextWrapper = function JumbotronWrapper({ children }) {
	return <TextWrapper>{children}</TextWrapper>;
};

Jumbotron.Image = function JumbotronImage({ children }) {
	return <Image>{children}</Image>;
};

Jumbotron.Icon = function JumbotronIcon({ children }) {
	return <Icon>{children}</Icon>;
};

Jumbotron.Button = function JumbotronButton({ children }) {
	return (
		<Button>
			<ButtonText>{children}</ButtonText>
		</Button>
	);
};

Jumbotron.Content = function JumbotronContent({
	children,
	alignment = "center",
	justify = "flex-start",
	color = "black",
}) {
	return (
		<Content alignment={alignment} justify={justify} color={color}>
			{children}
		</Content>
	);
};

Jumbotron.Anchor = function JumbotronAnchor({ children }) {
	return <Anchor>{children}</Anchor>;
};
