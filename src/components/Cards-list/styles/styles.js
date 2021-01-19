import styled from "styled-components/macro";

export const Container = styled.div`
	display: grid;
	width: 100%;
  margin-top: 3rem;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px;
  // margin: 20px 0 0;
	@media only screen and (min-width: 800px) {
		grid-gap: 15px;
		grid-template-columns: 1fr 1fr 1fr;
	}
`;
