import React from "react";
import { productsData } from "./Data.js";
import Card from './Card';
import { StyledTable } from "./Styled.js";

const ChooseProduct = () => (
	<StyledTable>
		<div className="step-header">
			<span className="step-value">Choose the Product</span>
			<span className="step-count">(Step 2 of 4)</span>
		</div>

		<div className="step-table">
			{productsData.map((el, i) => {
				return (
					<Card key={i} icon={el.image} heading={el.name} sub_heading={el.price} />
				);
			})}
		</div>
	</StyledTable>
);

export default ChooseProduct;
