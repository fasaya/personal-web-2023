import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./Assets/Styles/index.css";
import Main from "./Layouts/Main";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<Main />
	</BrowserRouter>
	// </React.StrictMode>
);
