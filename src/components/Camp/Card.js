import React from "react";
import { StyledCard } from "./Styled";

const Card = ({ icon, heading, sub_heading }) => {
	return (
		<StyledCard className="card">
			<div>
				<img src={icon} alt={heading} />
			</div>
			<div className="main-content">
				<span className="heading">{heading}</span>
				<span className="sub-heading">{sub_heading}</span>
			</div>
		</StyledCard>
	);
};

export default Card;
