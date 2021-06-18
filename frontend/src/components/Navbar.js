import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
	};

	return (
		<nav className="navbar">
			{/* logo */}
			<div className="navbar__logo">
				<Link to="/" className="logo">
					Coffee
				</Link>
			</div>

			{/* links */}
			<ul className="navbar__links">
				<li>
					<Link to="/menu">Menu</Link>
				</li>
				<li>
					<Link to="/cart" className="cart__link">
						<i className="fas fa-shopping-cart"></i>
						<span>
							Cart
							<span className="cartlogo__badge">{getCartCount()}</span>
						</span>
					</Link>
				</li>
			</ul>

			<div className="hamburger__menu" onClick={click}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
};

export default Navbar;
