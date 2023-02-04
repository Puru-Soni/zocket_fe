import React from "react";
import { whatYouWantToDo } from "./Data";
import Card from "./Card";
import { StyledTable } from "./Styled";

const WhatToDo = () => {
	return (
		<StyledTable>
			<div className="step-header">
				<span className="step-value">What you want to do?</span>
				<span className="step-count">(Step 1 of 4)</span>
			</div>
			<div className="step-table">
				{whatYouWantToDo.map((el) => (
					<Card icon={el.icon} heading={el.option} sub_heading={el.sub} />
				))}
			</div>
		</StyledTable>
	);
};

export default WhatToDo;
