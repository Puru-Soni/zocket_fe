import styled from "styled-components";

export const StyledCampaign = styled.div`
	.campaign--container {
		background-color: aliceblue;
		padding: 1em 2em;
		height: calc(100vh - 4.5rem);
	}

	.campaign--header {
		display: flex;
		justify-content: space-between;
	}

	.campaign--header-title p {
		font-size: 14px;
	}

	.campaign--create-new-campaign-button {
		text-decoration: none;
		padding: 0.15em 0.75em;
		border-radius: 5px;
		color: #fff;
		background-color: #1a1aff;
		cursor: pointer;
		font-size: 16px;

		display: flex;
		align-items: center;
		gap: 0.3em;
	}

	.campaign--main-body {
		border: 2px solid #d3e0fd;
		border-radius: 5px;
		margin: 1em 0;
		padding: 1em 1em 0;
		background-color: #fff;
	}

	.campaign--main-body-filters {
		display: flex;
		gap: 0.5em;
		align-items: center;
		justify-content: flex-end;

		font-size: 16px;
	}

	.campaign--main-body-filters select {
		border: 2px solid rgb(221, 221, 221);
		border-radius: 5px;
		outline: none;
		padding: 0.5em;
		margin-left: 1ch;
	}

	.campaign--main-body-table {
		font-size: 14px;
		width: 100%;

		margin-top: 1em;
		border-radius: 5px;
		overflow: hidden;
	}

	.campaign--main-body-table table {
		border-collapse: collapse;
		width: 100%;
	}

	.campaign--main-body-table table thead {
		border: 2px solid rgb(221, 221, 221);
		background-color: rgb(233, 233, 233);
		height: 2.5em;
		text-align: left;
	}

	.campaign--main-body-table table tbody tr:not(:last-child) {
		border-bottom: 2px solid rgb(221, 221, 221);
	}
	.campaign--main-body-table table tbody tr td {
		padding: 1.5em 0;
	}

	.switch {
		position: relative;
		display: inline-block;
		width: 30px;
		height: 17px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 13px;
		width: 13px;
		left: 2px;
		bottom: 2px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #1a1aff;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #1a1aff;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(13px);
		-ms-transform: translateX(13px);
		transform: translateX(13px);
	}

	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}

	.campaign--main-body-table-rows-campaign-col {
		display: flex;
		gap: 0.5em;
		align-items: center;
	}

	.campaign--main-body-table-rows-campaign-col img {
		width: 2.5em;
		border: 1px solid black;
		border-radius: 5px;
	}

	.campaign--main-body-table-rows-platform-col {
		color: blue;
	}
	.campaign--main-body-table-rows-platform-col1 {
		color: red;
	}
	.campaign--main-body-table-rows-status-col p {
		padding: 0.25em 1em;
		border: 1px solid red;
		width: fit-content;
		border-radius: 999px;
	}

	.campaign--main-body-table-rows-actions-col button {
		background-color: transparent;
		border: none;
		outline: none;
	}

	.campaign--main-body-table-rows-actions-col button:first-child {
		color: blue;
	}

	.campaign--main-body-table-rows-actions-col button:last-child {
		color: red;
	}

	box-sizing: border-box;
	background: #f6f9ff;
	width: 100wh;

	margin-left: 82px;

	display: flex;
	flex-direction: column;

	.camp-headers {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
	}

	justify-content: space-between;
	padding: 40px 73px 0px 50px;
	.camp-head {
		h1 {
			font-family: "Eudoxus Sans";
			font-style: normal;
			font-weight: 700;
			font-size: 24px;
			line-height: 32px;

			margin: 0;

			display: flex;
			align-items: center;

			color: #000000;
		}
		p {
			margin: 0;
			font-family: "Eudoxus Sans";
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 32px;

			display: flex;
			align-items: center;

			color: rgba(0, 0, 0, 0.5);
		}
	}

	.create-new-camp {
		a {
			text-decoration: none;
			font-family: Eudoxus Sans;
			font-size: 16px;
			font-weight: 500;
			line-height: 20px;
			letter-spacing: 0em;
			text-align: left;
			color: #ffffff;

			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			padding-top: 14px;

			span {
				padding-left: 9px;
			}
		}
		width: 237px;
		height: 50px;
		background: #0f6eff;
		border-radius: 10px;
	}

	.campSteps {
		box-sizing: border-box;

		background: #ffffff;
		border: 1px solid #dae6ff;
		border-radius: 10px;
	}
`;
