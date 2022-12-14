import "./App.css";
import Navbar from "./Components/Navbar";
import Routeses from "./Routes/index";

function App() {
	return (
		<>
			<div className="container mt-2" style={{ marginTop: 40 }}>
				<Navbar />
			</div>
			<Routeses />
		</>
	);
}

export default App;
