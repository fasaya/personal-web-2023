import Navbar from "./Components/Navbar";
import Routes from "./Routes/index";
import Footer from "./Components/Footer";

function App() {
	return (
		<>
			<Navbar />

			<div className="main-container">
				<Routes />

				<Footer />

				<div class="line top"></div>
				<div class="line bottom"></div>
				<div class="line left"></div>
				<div class="line right"></div>
			</div>
		</>
	);
}

export default App;
