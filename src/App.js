import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import CampPage from "./components/Camp/CampPage.js";
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<BrowserRouter className="App">
			<Fragment>
				<Routes>
					<Route exact path="/" element={<Dashboard />} />
					<Route exact path="/campaign" element={<CampPage />} />
					{/* <Route
						exact
						path="/createNewCampaign"
						element={<CreateNewCampaign />}
					/> */}
				</Routes>
			</Fragment>
		</BrowserRouter>
	);
}

export default App;
