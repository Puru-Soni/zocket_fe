import styled from "styled-components";

export const StyledCard = styled.div`
	display: flex;
	flex-direction: row;
	padding: 12px;
	border: 1.5px solid #f3f3f3;

	:hover {
		background: rgba(231, 240, 255, 0.3);
		border: 1.5px solid #0f6eff;
	}
	border-radius: 10px;
	box-sizing: border-box;
	height: 80px;
	width: 389px;
	left: 565px;
	top: 417px;
	border-radius: 10px;

	img {
		padding-right: 13px;
	}

	.main-content {
		display: flex;
		flex-direction: column;

		font-family: Eudoxus Sans;
		font-size: 15px;
		font-weight: 500;
		line-height: 32px;
		letter-spacing: 0px;
		text-align: left;
	}

	.sub-heading {
		display: block;
		font-family: Eudoxus Sans;
		font-size: 14px;
		font-weight: 500;
		line-height: 12px;
		letter-spacing: 0px;
		text-align: left;

		color: #a5a5a5;
	}
`;

export const StyledSettings = styled.div`
	margin: 19px 94px 86px 32px;

	p,
	label {
		margin: 16px 0 8px;
		color: rgba(96, 96, 96, 1);

		font-family: Eudoxus Sans;
		font-size: 12px;
		font-weight: 500;
		line-height: 32px;
		letter-spacing: 0px;
		text-align: left;
	}

	.budget{
		border-left: 1.5px solid rgba(0, 0, 0, 0.16);

	}

	.date-info {
		height: 50px;
		width: 363px;
		left: 199px;
		top: 596px;
		border: 1.5px solid rgba(233, 233, 233, 1);
		border-radius: 10px;
	}

	.select-date {
		label {
			margin-bottom: 0px;
		}
		display: grid;
		grid-template-columns: 363px 363px;
		grid-template-rows: auto 50px;

		grid-column-gap: 16px;
	}

	.step-header {
		margin-left: 0;
		margin-top: 0;
		margin-right: 0;
	}

	.sub-settings {
		padding-left: 26px;
	}

	top-dott{
		position: absolute;
		left: 0px;
		top: 70px;
	}

	h3 {
		padding-left: 20px;
		font-family: Eudoxus Sans;
		font-size: 14px;
		font-weight: 500;
		line-height: 32px;
		letter-spacing: 0px;
		text-align: left;
		font-style: normal;

		display: flex;
		align-items: center;
		text-decoration-line: underline;
		color: #000000;
	}
`;

export const StyledTable = styled.div`
	.step-table {
		display: grid;
		gap: 12px;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		margin: 32px;
	}

	.step-header {
		margin: 19px 32px 0px 32px;
		border-bottom: 1.5px solid #eaeaea;
		display: flex;
		align-items: center;
	}

	.step-value {
		color: #000000;
		font-family: Eudoxus Sans;
		font-size: 16px;
		font-weight: 700;
		line-height: 32px;
		letter-spacing: 0px;
		text-align: left;
	}

	.step-count {
		margin-left: 8px;
		color: rgba(0, 0, 0, 0.5);
		font-family: Eudoxus Sans;
		font-size: 14px;
		font-weight: 400;
		line-height: 32px;
		letter-spacing: 0px;
		text-align: left;
	}
`;