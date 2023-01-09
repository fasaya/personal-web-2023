import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./Assets/Styles/index.css";
import "./Components/Editor/styles.css";
import Main from "./Layouts/Main";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<Main />
	</BrowserRouter>
	// </React.StrictMode>
);
