import React from "react";
import { StyledTable, StyledSettings } from "./Styled";
import dott from '../../icons/no1.png';
import { Slider } from "@mui/material";

const radius = [
	{
		value: 1,
		label: "1",
	},
	{
		value: 30,
		label: "30",
	},
];
const budget = [
	{
		value: 100,
		label: "100",
	},
	{
		value: "100000",
		label: "1,00,000",
	},
];

const Settings = () => {
	return (
		<StyledTable>
			<StyledSettings>
				<div className="step-header">
					<span className="step-value">Campaign Settings</span>
					<span className="step-count">(Step 3 of 4)</span>
				</div>

				<div className="setting-config">
					<div>
						<img className="top-dott" src={dott} alt="point" />
						<h3>Budget and dates info</h3>
						<div class="sub-settings budget">
							<p>Budget Timeline</p>

							<div className="select-date">
								<label for="start">Start date</label>
								<label for="end">End date</label>
								<input
									className="date-info"
									type="date"
									id="start"
									name="camp-start"
								/>

								<input
									className="date-info"
									type="date"
									id="end"
									name="camp-end"
								/>
							</div>
							<div>
								<p>Enter campaign budget</p>
								<Slider
									defaultValue={2000}
									aria-label="Default"
									valueLabelDisplay="on"
									step={500}
									marks={budget}
									min={100}
									max={100000}
								/>
							</div>
						</div>
					</div>
					<div>
						<img className="bottom-dot" src={dott} alt="point" />
						<h3>Location info</h3>
						<div className="sub-settings">
							<p>Location type</p>
							<div>
								<p>Select Location</p>
							</div>
							<div>
								<p>Select target radius</p>
								<Slider
									defaultValue={50}
									aria-label="Default"
									valueLabelDisplay="on"
									step={1}
									marks={radius}
									min={1}
									max={30}
								/>
							</div>
						</div>
					</div>
				</div>
			</StyledSettings>
		</StyledTable>
	);
};

export default Settings;
