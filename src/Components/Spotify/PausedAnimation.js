import React from "react";
import styled, { keyframes } from "styled-components";

const PausedAnimation = () => {
	return (
		<Playing>
			<span style={{ marginRight: "3px" }} />
			<span />
		</Playing>
	);
};

export default PausedAnimation;

const Playing = styled.div`
	position: relative;
	display: flex;
	// justify-content: left;
	width: 13px;
	height: 12px;

	span {
		width: 3px;
		height: 100%;
		background-color: #1ed760;
		border-radius: 0.5px;
		content: "";
		transform-origin: bottom;

		&:nth-of-type(2) {
			animation-delay: -2.2s;
		}

		&:nth-of-type(3) {
			animation-delay: -3.7s;
		}
	}
`;
