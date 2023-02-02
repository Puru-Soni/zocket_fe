import "./App.css";
import LeftMenu from "./components/LeftMenu.js";
import CampaignsPage from "./components/CampaignPage.js";
import HeadBar from "./components/HeadBar.js";

function App() {
	return (
		<div className="App">
			<LeftMenu />
			<HeadBar />
			<CampaignsPage />
		</div>
	);
}

export default App;
