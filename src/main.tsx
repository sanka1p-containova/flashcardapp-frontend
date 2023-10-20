import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./Header.tsx";
import App from "./App.tsx";
import "./index.css";
import Deck from "./Deck.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/decks/:deckId",
		element: <Deck />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className="page">
			<Header />
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>
);
