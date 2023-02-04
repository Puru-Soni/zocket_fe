import React from "react";
import ChooseProduct from "./ChooseProduct";
import styled from "styled-components";
import Settings from "./Settings";
import WhatToDo from "./WhatToDo";
import ReadyToGo from "./ReadyToGo";
import { Step, StepLabel, Stepper } from "@mui/material";
import Dashboard from "../../pages/Dashboard";

const CampPageStyles = styled.div`
	box-sizing: border-box;

	position: absolute;
	width: 1258px;
	left: 132px;
	top: 196px;

	background: #ffffff;
	border: 1px solid #dae6ff;
	border-radius: 10px;
`;

const CampPage = () => {
	return (
		<div>
			<Dashboard />
			<CampPageStyles>
				{/* <div>
					<ChooseProduct />
				</div>

				<div>
					<WhatToDo />
				</div>

				<div>
					<Settings />
				</div> */}

				<div>
					<ReadyToGo />
				</div>
			</CampPageStyles>
		</div>
	);
};

export default CampPage;
