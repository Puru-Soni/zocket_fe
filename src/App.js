import "./App.css";
import LeftMenu from "./components/LeftMenu.js";
import HeadBar from "./components/HeadBar.js";
import CampPage from "./components/Camp/CampPage.js";

function App() {
	return (
		<div className="App">
			<LeftMenu />
			<HeadBar />
			<CampPage />
		</div>
	);
}

export default App;
