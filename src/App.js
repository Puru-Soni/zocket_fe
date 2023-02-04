import "./App.css";
import Campaign from "./pages/Campaign";
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateNewCampaign from "./components/CreateNewCampaign";

function App() {
	return (
		<BrowserRouter className="App">
			<Fragment>
				<Routes>
					<Route exact path="/" element={<Campaign />} />
					<Route exact path="/campaign" element={<Campaign />} />
					<Route
						exact
						path="/createNewCampaign"
						element={<CreateNewCampaign />}
					/>
					<Route exact path="/products" element={<Campaign />} />
					<Route exact path="/customers" element={<Campaign />} />
				</Routes>
			</Fragment>
		</BrowserRouter>
	);
}

export default App;
