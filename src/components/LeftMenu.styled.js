import styled from "styled-components";

export const StyledLeftMenu = styled.div`
	.sidebar {
		box-sizing: border-box;
		position: absolute;
		width: 82px;
		height: 100%;
		left: 0px;
		top: -5px;
		background: #001738;

		.logo {
			padding: 0px;
			margin: 20px;
			background: #0f6eff;
			border-radius: 50%;

			margin-top: 50%;
			margin-bottom: 80%;
		}

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0;
			color: #ffffff;
		}

		.nav-item{
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
