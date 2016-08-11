import React from 'react'

/*
** Product Component
** Stateless component, no need for internal state.
** Product :: Object -> React.Component
*/

const Product = (product) => {
	var src = product.artwork 
		? require(`../assets/artworks/${product.artwork}`)
		: "http://placehold.it/200x200";

	return (
		<li className="Product-card">
			<img src={src} alt="product" />
			<div className="content">
				<div className="product-details">
					<h1>{product.name}</h1>
					<p>{product.desc.slice(0, 50) + ' ..'}</p>
				</div>
				<div className="product-stocks">
					<h2>£{product.price} {product.taxable && ' +VAT'}</h2>
					<span>{product.stock} in stock</span>
				</div>
			</div>
		</li>
	)
}
export default Product;