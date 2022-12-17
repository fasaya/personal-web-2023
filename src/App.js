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

				<div className="line top"></div>
				<div className="line bottom"></div>
				<div className="line left"></div>
				<div className="line right"></div>
			</div>
		</>
	);
}

export default App;
