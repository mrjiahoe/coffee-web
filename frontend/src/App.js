import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import MenuScreen from "./Screens/MenuScreen";

// Components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

function App() {
	const [sideToggle, setSideToggle] = useState(false);

	return (
		<Router>
			<Navbar click={() => setSideToggle(true)} />

			<SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
			<Backdrop show={sideToggle} click={() => setSideToggle(false)} />
			<main>
				<Switch>
					<Route exact path="/" component={HomeScreen} />
					<Route exact path="/product/:id" component={ProductScreen} />
					<Route exact path="/" component={MenuScreen} />
					<Route exact path="/cart" component={CartScreen} />
				</Switch>
			</main>
		</Router>
	);
}

export default App;
