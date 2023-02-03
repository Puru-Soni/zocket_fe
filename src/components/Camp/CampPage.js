import React from "react";
import ChooseProduct from "./ChooseProduct";
import styled from "styled-components";
import Settings from "./Settings";
import WhatToDo from "./WhatToDo";


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
		<CampPageStyles>
			{/* <div>
				<ChooseProduct />
			</div> */}

			{/* <div>
				<WhatToDo />
			</div> */}

			<div>
                <Settings />
            </div>
		</CampPageStyles>
	);
};

export default CampPage;
