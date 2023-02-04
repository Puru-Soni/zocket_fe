import React from "react";
import { StyledTable } from "./Styled";
import { ReadyData } from "./Data";
import ReadyCard from "./ReadyCard";
import styled from "styled-components";

const StyledReadyToGo = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr;
	gap: 13.06px;
	margin: 27.51px 32px 80px 32px;
`;

const ReadyToGo = () => {
	return (
		<StyledTable>
			<div className="step-header">
				<span className="step-value">Ready to go</span>
				<span className="step-count">(Step 4 of 4)</span>
			</div>
			<StyledReadyToGo className="cardGroup">
				{ReadyData.map((el) => (
					<ReadyCard
						title={el.title}
						sub_title={el.sub_title}
                        profile={el.profile}
                        content={el.content}
                        image={el.image}
					/>
				))}
			</StyledReadyToGo>
		</StyledTable>
	);
};

export default ReadyToGo;