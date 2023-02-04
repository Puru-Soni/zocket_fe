import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReadyToGo from "./CreateNewCampaign/ReadyToGo";
import ChooseProduct from "./CreateNewCampaign/ChooseProduct";
import Settings from "./CreateNewCampaign/Settings";
import WhatToDo from "./CreateNewCampaign/WhatToDo";
import styled from "styled-components";
import ContinueBtn from "../components/ContinueBtn";
import { Navigate, NavLink, Route } from "react-router-dom";
import Campaign from "../pages/Campaign";

const StyledCampaign = styled.div`
	box-sizing: border-box;
	background: #f6f9ff;
	width: 100wh;

	margin-left: 82px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 40px 73px 0px 50px;
	padding-bottom: 50px;

	.camp-head {
		padding-bottom: 20px;
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

	.stepper {
		padding: 40px;
	}

	.campSteps {
		box-sizing: border-box;

		background: #ffffff;
		border: 1px solid #dae6ff;
		border-radius: 10px;
	}
`;

const steps = [
	"What you want to do",
	"Choose product",
	"Campaign settings",
	"Ready to go",
];

export default function StepperProgress() {
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<StyledCampaign>
			<Box sx={{ width: "100%" }}>
				<div className="camp-head">
					<h1>Your Campaigns</h1>
					<p>Check the list of campaigs you created</p>
				</div>

				<Stepper className="stepper" activeStep={activeStep}>
					{steps.map((label, index) => {
						const stepProps = {};
						const labelProps = {};

						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>
				{activeStep === steps.length ? (
					 <Navigate to='../campaign' />
				) : (
					<React.Fragment>
						<Typography className="campSteps" sx={{ mt: 2, mb: 1 }}>
							{activeStep === 0 ? (
								<WhatToDo />
							) : activeStep === 1 ? (
								<ChooseProduct />
							) : activeStep === 2 ? (
								<Settings />
							) : activeStep === 3 ? (
								<ReadyToGo />
							) : (
								""
							)}
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
							<Button
								color="inherit"
								disabled={activeStep === 0}
								onClick={handleBack}
								sx={{ mr: 1 }}
							>
								<ContinueBtn text="Back" />
							</Button>
							<Box sx={{ flex: "1 1 auto" }} />

							<Button onClick={handleNext}>
								<ContinueBtn text="Continue" />
							</Button>
						</Box>
					</React.Fragment>
				)}
			</Box>
		</StyledCampaign>
	);
}
