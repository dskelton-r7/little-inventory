import React from 'react'
import {connect} from 'react-redux';
import ProductList from './ProductList';
import R_ from 'ramda';

/*
** Cart Component
** This component is not in use
** Stateless component, no need for internal state.
** Cart :: Object -> React.Component
*/

const Cart = ({items}) => {
	return (
		<div>
			<h1>Your cart</h1>
			<ProductList items={items} />
		</div>
	)
}
const inCart = R_.filter(R_.prop('inCart'))
const mapStateToProps = (state) => {
	return {
		items: inCart(state.products.items)
	}
}
export default connect(mapStateToProps)(Cart)