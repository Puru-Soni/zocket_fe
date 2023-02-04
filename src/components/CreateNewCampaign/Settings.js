import React, { useState } from "react";
import { StyledTable, StyledSettings } from "./Styled";
import dott from "../../icons/no1.png";
import { Slider, ToggleButton, ToggleButtonGroup } from "@mui/material";

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
	const [alignment, setAlignment] = useState("Lifetime");
	const [alignment2, setAlignment2] = useState("location");

	const handleChange = () => {
		const radios = document.querySelectorAll(".radio-select");
		for (let el of radios) {
			el.addEventListener("click", function () {
				setAlignment(el.value);
			});
		}
	};

	const handleChange2 = () => {
		const radios = document.querySelectorAll('.radio-select2');
		for (let el of radios) {
			el.addEventListener('click', function () {
				setAlignment2(el.value);
			})
		}
	};

	return (
		<StyledTable>
			<StyledSettings>
				<div className="step-header">
					<span className="step-value">Campaign Settings</span>
					<span className="step-count">(Step 3 of 4)</span>
				</div>

				<div className="setting-config">
					<div>
						<h3>Budget and dates info</h3>
						<div class="sub-settings budget">
							<p>Budget Timeline</p>
							<div>
								<ToggleButtonGroup
									color="primary"
									value={alignment}
									exclusive
									onChange={handleChange}
									aria-label="Platform"
								>
									<ToggleButton className="radio-select" value="Lifetime">
										Lifetime
									</ToggleButton>
									<ToggleButton className="radio-select" value="Daily">
										Daily
									</ToggleButton>
								</ToggleButtonGroup>
							</div>

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
						<h3>Location info</h3>
						<div className="sub-settings">
							<p>Location type</p>
							<div>
								<ToggleButtonGroup
									color="primary"
									value={alignment2}
									exclusive
									onChange={handleChange2}
									aria-label="Platform"
								>
									<ToggleButton className="radio-select2" value="location">
										location
									</ToggleButton>
									<ToggleButton className="radio-select2" value="Radius">
										Radius
									</ToggleButton>
								</ToggleButtonGroup>
							</div>
							<div>
								<p>Select Location</p>
								<input
									className="location"
									type="text"
									placeholder="Select a place name, address or coordinates"
								/>
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
