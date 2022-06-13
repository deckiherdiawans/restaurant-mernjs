import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import AddReview from "./components/add-review"
import Restaurants from "./components/restaurants"
import RestaurantsList from "./components/restaurants-list"
import Login from "./components/login"

function App() {
	const [user, setUser] = React.useState(null)

	async function login(user = null) { setUser(user) }

	async function logout() { setUser(null) }

	return (
		<div>
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<div className="container">
					<a href="/restaurants" className="navbar-brand">Restaurant Reviews</a>
					<div className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to={"/restaurants"} className="nav-link">Restaurants</Link>
						</li>
						<li className="nav-item">
							{user ? (
								<button onClick={logout} className="nav-link" style={{ cursor: 'pointer' }}>Logout {user.name}</button>
							) : (
								<Link to={"/login"} className="nav-link">Login</Link>
							)}
						</li>
					</div>
				</div>
			</nav>

			<div className="container mt-3">
				<Routes>
					<Route path="/restaurants" element={<RestaurantsList />} />
					<Route path="/restaurants/:id/review" element={(props) => (
						<AddReview {...props} user={user} />
					)} />
					<Route path="/restaurants/:id" element={<Restaurants />} />
					<Route path="/login" element={(props) => (
						<Login {...props} login={login} />
					)} />
				</Routes>
			</div>
		</div>
	);
}

export default App