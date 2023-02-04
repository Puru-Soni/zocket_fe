import styled from "styled-components";

export const StyledSidebar = styled.div`
	.sidebar {
		box-sizing: border-box;
		position: absolute;
		width: 82px;
		height: 100vh;
		left: 0px;
		top: -5px;
		background: #001738;

		p {
			font-family: Eudoxus Sans;
			font-size: 10px;
			font-weight: 400;
			line-height: 32px;
			letter-spacing: 0px;
			text-align: left;
		}

		.logo {
			padding: 0px;
			margin: 20px;
			background: #0f6eff;
			border-radius: 50%;

			margin-top: 50%;
			margin-bottom: 80%;
		}

		a {
			text-decoration: none;
		}
		
		* {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0;
			color: #ffffff;
		}

		.nav-item {
			padding: 10%;
			height: 58px;
		}

		.active {
			border-left: solid 5px;
			background: rgba(25, 119, 243, 0.1);
			border-radius: 0px 2px 2px 0px;
			border-color: #1977f3;
		}
	}
`;
