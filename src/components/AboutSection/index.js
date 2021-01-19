import React from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import avatarImage from "../../images/face@0.5x.png";
import { Image } from "../Jumbotron/styles/styles";

import { Animated } from "react-animated-css";

// Figure out why Jumbotron.Image cannot be used instead of Image

export default class AboutSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<>
			<div id="about">
				<Jumbotron backgroundColor="white">
					<Jumbotron.Content>
						<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={this.props.isVisible}>
							<Jumbotron.Title>About Me</Jumbotron.Title>
						</Animated>
						<Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={this.props.photoIsVisible}>
							<Image src={avatarImage}></Image>
						</Animated>
						<Jumbotron.TextWrapper>
							<Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={this.props.textVisible}>
								<Jumbotron.Text>
									My name is Misha Vasiljevs and I am a recent computer science
									graduate from the University of East Anglia. Due to my
									exposure to languages with different programming paradigms at
									university, I am able to tackle all aspects of software
									development personally. Since graduation, I have delved into
									the industry standard front-end web technologies, focusing
									mainly on the <span style={{
                    color: "#35d49f"
                  }}> MERN</span>{" "}
									stack along with honing my general knowledge of HTML, CSS, and
									Javascript in the hopes of landing a front end position.
								</Jumbotron.Text>
							</Animated>
						</Jumbotron.TextWrapper>
					</Jumbotron.Content>
				</Jumbotron>
			</div>
		</>);
  }

}
