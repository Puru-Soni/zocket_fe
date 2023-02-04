import "./App.css";
import Campaign from "./pages/Campaign";
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateNewCampaign from "./components/CreateNewCampaign";

function App() {
	return (
		<BrowserRouter className="App">
			<Fragment>
				<Routes>
					<Route exact path="/" element={<Dashboard />} />
					<Route exact path="/campaign" element={<Campaign />} />
					<Route
						exact
						path="/createNewCampaign"
						element={<CreateNewCampaign />}
					/>
				</Routes>
			</Fragment>
		</BrowserRouter>
	);
}

export default App;
