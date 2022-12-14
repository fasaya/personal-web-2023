import "./Assets/Styles/glitche-layout.css";
import "./Assets/Styles/glitche-basic.css";
import "./Assets/Styles/dark.css";

import Navbar from "./Components/Navbar";
import Routeses from "./Routes/index";

function App() {
	return (
		<>
			<div className="container">
				<Navbar />
				<Routeses />
			</div>
		</>
	);
}

export default App;
