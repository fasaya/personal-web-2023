import Navbar from "./Components/Navbar";
import Routes from "./Routes/index";

function App() {
	return (
		<>
			<Navbar />

			<div className="main-container">
				<Routes />

				<div class="line top"></div>
				<div class="line bottom"></div>
				<div class="line left"></div>
				<div class="line right"></div>
			</div>
		</>
	);
}

export default App;
