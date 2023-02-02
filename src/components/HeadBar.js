import React from "react";
import { StyledHeadBar } from "./HeadBar.styled.js";

const HeadBar = () => {
	return (
		<StyledHeadBar>
            <div>
                <p>Free trial ends in 2 days</p>
                <button>Buy Plan</button>
                <img alt="basket" />
                <img alt="notifications" />
                <img alt="profile" />
                <p>Mukund cake shop</p>
            </div>
		</StyledHeadBar>
	);
};

export default HeadBar;
