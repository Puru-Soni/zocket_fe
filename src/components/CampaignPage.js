import React from "react";
import { StyledCampaign } from "./CampaignPage.styled";

const CampaignPage = () => {
	return (
		<StyledCampaign>
			<div>
				<input id="search-camp" tpye="text" />

				<label for="platform">Platform:</label>
				<select name="platform" id="platform">
					<option value="Facebook">Facebook</option>
					<option value="Instagram">Instagram</option>
					<option value="Google">Google</option>
					<option value="Youtube">Youtube</option>
				</select>

				<label for="status">Status:</label>
				<select name="status" id="status">
					<option value="Live now">Live now</option>
					<option value="Exhausted">Exhausted</option>
					<option value="Paused">Paused</option>
				</select>

				<select name="record" id="record">
					<option value="last-30">Last 30 days</option>
				</select>
			</div>
		</StyledCampaign>
	);
};

export default CampaignPage;
