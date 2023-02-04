import styled from "styled-components";

export const StyledNavbar = styled.div`
	margin: 0px;
	height: 80px;
	width: 100%;
	left: 82px;
	top: -8px;
	border-radius: 0px;
	background-color: #ffffff;

	border: 1px solid #dae6ff;

	z-index: 5;

	.navbar-section {
		display: flex;
		padding-top: 10px;
		flex-direction: row;
		align-items: center;
		justify-content: end;

		p {
			font-family: Eudoxus Sans;
			font-size: 12px;
			font-weight: 400;
			line-height: 32px;
			letter-spacing: 0px;
			text-align: left;
			margin-left: auto;
			padding-right: 7px;
		}
	}

	.navbar--profile {
		display: flex;
		align-items: center;
		justify-content: center;
		img {
			height: 36px;
			width: 36px;
			border-radius: 50%;
			border: 0.68px solid #f5faff;
		}

		select {
			border: none;
			outline: none;
		}
	}

	.navbar--buy-plan {
		height: 30px;
		display: flex;
		gap: 0.1em;
		align-items: center;
		color: rgb(255, 166, 0);
		background-color: rgb(247, 232, 206);
		padding: 0.25em 0.45em;
		margin: 0 0.2em;
		border-radius: 5px;
	}

	.navbar--notification-icons {
		display: flex;
		align-items: center;
		gap: 0.5em;
		margin: 0 0.5em;
	}
`;
