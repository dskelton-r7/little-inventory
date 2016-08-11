import React from 'react'
import {Link} from 'react-router'

const Header = () => {
	return (
		<aside className="App-sidebar">
			<nav>
				<ul>
					<li><Link to="/inventory" activeClassName="active">Inventory</Link></li>
					<li><Link to="/add" activeClassName="active">Add Product</Link></li>
				</ul>
			</nav>
		</aside>
	)
}
export default Header;