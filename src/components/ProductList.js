import React from 'react'
import {values} from 'ramda';
import Product from './Product';

/*
** ProductList component
** StateLess component
** productList :: Object -> React.Component
*/

const ProductList = ({items}) => {
	return (
		<ul className="Product-list">
			{values(items).map(p => <Product key={p.name} {...p} />)}
		</ul>
	);
}
ProductList.PropTypes = {
	items: React.PropTypes.object.isRequired
}
export default ProductList;