import React from "react";
import {
	Container,
	Form,
	FormField,
	Button,
	MessageField,
	Inner,
} from "./style";
import Jumbotron from "../Jumbotron/Jumbotron";
import emailjs from "emailjs-com";

export default function ContactForm({ background = "black" }) {
	function sendEmail(e) {
		e.preventDefault();
		console.log("in sendemail");
		emailjs
			.sendForm(
				"service_9s5pd2a",
				"template_8sr5o9q",
				e.target,
				"user_Iec2BW1L2Ep9N0Vfcqw2H"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}

	return (
		<>
			<Container>
				<Inner background={background}>
					<Form onSubmit={sendEmail}>
						<FormField placeholder="Name" name="name" required></FormField>
						<FormField placeholder="Email" name="email" required></FormField>
						<FormField
							placeholder="Subject"
							name="subject"
							required
						></FormField>

						<MessageField
							placeholder="Message"
							name="message"
							required
						></MessageField>
						<Button type="submit">Send it</Button>
					</Form>
				</Inner>
			</Container>
		</>
	);
}
