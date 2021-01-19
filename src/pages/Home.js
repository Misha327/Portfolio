import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import HomeSection from "../components/HomeSection";
import ProjectSection from "../components/ProjectSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ReactDOM from "react-dom";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
	apiKey: "AIzaSyB65IhtuJXdKEqFxnH9rOhIAZY4D7HnmVQ",
	authDomain: "misha-vasiljev.firebaseapp.com",
	projectId: "misha-vasiljev",
	storageBucket: "misha-vasiljev.appspot.com",
	messagingSenderId: "697374592251",
	appId: "1:697374592251:web:0fe4337db9506cd3b5b45e",
	measurementId: "G-8VSDVEX3Y8",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const LoadingProjects = (props) => {
	return function WrapperFunction(props) {
		const messagesRef = firestore.collection("projects");
		const query = messagesRef.limit(25);

		const [values, loading, error] = useCollectionData(query, {
			idField: "id",
		});

		return <Home {...props} loading={loading} values={values} />;
	};
};

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			projectVisible: false,
			cardsVisible: false,
			aboutVisible: false,

			photoVisible: false,
			contactVisible: false,
			formVisible: false,
			projectWinSize: 0,
			aboutTextVisible: false,

			toHome: false,
			toProjects: false,

			toAbout: false,
			toContact: false,
			values: [],

			section: null,
			homeHeight: 0,
			projectHeight: 0,
			aboutHeight: 0,
			contactHeight: 0,
		};

		this.homeRef = React.createRef();
		this.projectRef = React.createRef();
		this.aboutRef = React.createRef();
		this.contactRef = React.createRef();

		this.myRef = [];

		this.activeWindow = this.activeWindow.bind(this);
	}

	componentDidMount() {
		const homeHeight = this.homeRef.current.offsetHeight;
		const projectHeight = this.projectRef.current.offsetHeight;
		const aboutHeight = this.aboutRef.current.offsetHeight;
		const contactHeight = this.contactRef.current.offsetHeight;

		this.setState({ homeHeight, projectHeight, aboutHeight, contactHeight });
		// console.log(this.projectRef.current.offsetHeight);
		window.addEventListener("scroll", this.activeWindow);
	}

	// Remove the event listener when the component is unmount.
	componentWillUnmount() {
		window.removeEventListener("scroll", this.activeWindow);
	}

	activeWindow = () => {
		const scrollBot = -document.body.getBoundingClientRect().top;

		console.log(scrollBot, this.state.projectHeight);
		// todo: use fractions of the heights to show animation when are actually visible
		// Project section
		if (
			scrollBot >= this.state.homeHeight &&
			scrollBot <= this.state.projectHeight + this.state.homeHeight
		) {
			this.setState({ projectVisible: true });
		}
		if (
			scrollBot >= this.state.homeHeight &&
			scrollBot <= this.state.projectHeight + this.state.homeHeight
		) {
			this.setState({ cardsVisible: true });
		}
		// 3rd
		if (scrollBot <= -1 * Math.round(window.innerHeight / 4)) {
			this.setState({ aboutVisible: true });
		}
		if (scrollBot <= Math.round((window.innerHeight * -10) / 17)) {
			this.setState({ photoVisible: true });
		}
		if (scrollBot <= (window.innerHeight * -5) / 6) {
			this.setState({ aboutTextVisible: true });
		}
		// 4th
		if (scrollBot <= Math.round((window.innerHeight * -5) / 4)) {
			this.setState({ contactVisible: true });
			if (scrollBot <= Math.round((window.innerHeight * -7) / 5)) {
				this.setState({ formVisible: true });
			}
		}
	};

	toggle = () => {
		this.setState((state) => {
			return {
				isOpen: !state.isOpen,
			};
		});
	};

	render() {
		return (
			<div style={{ width: "100%" }}>
				<Sidebar isOpen={this.state.isOpen} toggle={this.toggle} />

				<Header toggle={this.toggle} />
				<div ref={this.homeRef}>
					<HomeSection ref={this.homeRef}></HomeSection>
				</div>
				<div ref={this.projectRef}>
					<ProjectSection
						isVisible={this.state.projectVisible}
						cardsVisible={this.state.cardsVisible}
						projects={this.props.values}
						loading={this.props.loading}
					></ProjectSection>
				</div>
				<div ref={this.aboutRef}>
					<AboutSection
						textVisible={this.state.aboutTextVisible}
						photoIsVisible={this.state.photoVisible}
						isVisible={this.state.aboutVisible}
					></AboutSection>
				</div>
				<div ref={this.contactRef}>
					<ContactSection
						formVisible={this.state.formVisible}
						isVisible={this.state.contactVisible}
					></ContactSection>
				</div>
			</div>
		);
	}
}

export default LoadingProjects(Home);
