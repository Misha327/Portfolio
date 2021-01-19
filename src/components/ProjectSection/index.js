import React from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import CardsList from "../Cards-list/CardsList";
import { Animated } from "react-animated-css";
import ResizeObserver from "react-resize-observer";

export default class ProjectSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div style={{
      width: "100%"
    }} id="projects">
			<Jumbotron>
				<Jumbotron.Content color={"white"}>
					{
            /* <Jumbotron.TextWrapper></Jumbotron.TextWrapper> */
          }
					<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={this.props.isVisible}>
						<Jumbotron.Title color={"white"}>Recent Work</Jumbotron.Title>
					</Animated>

					<Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={this.props.isVisible}>
						<Jumbotron.Text>
							Consisting of personal projects created for learning purposes, so
							far. Built using plain Javascript or ReactJS, focusing on a clean,
							responsive design.
						</Jumbotron.Text>
					</Animated>

					<CardsList loading={this.props.loading} projects={this.props.projects} isVisible={this.props.cardsVisible}></CardsList>
				</Jumbotron.Content>
			</Jumbotron>
		</div>);
  }

}