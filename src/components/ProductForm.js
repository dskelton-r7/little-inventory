import React from 'react'
import {connect} from 'react-redux';
import {saveItem, notify} from '../actions/';

/*
** Product Component
** Holds specific temporary state relating to the form fields
*/

class ProductForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			desc: '',
			price: '',
			taxable: true,
			dateAvailable: '',
			stock: '',
		}
	}
	onChange(e, key){
		this.setState({[key] : e.target.value})
	}
  
	onSubmit(e){
		e.preventDefault();
		this.props.formSubmit(this.state)
	}

	render(){
		let stateOf = (prop) => (ctx) => this.onChange.call(this, ctx, prop)

		return (
			<div className="productForm-container">
				{this.props.notification.on && <div className="notification">
					<p>{this.props.notification.text}</p>
				</div>}
				<header>
					<h1>Add a new Product</h1>
				</header>
				<form className="Product-Form" onSubmit={this.onSubmit.bind(this)}>
					<input type="text" name="name" placeholder="Product name" onChange={stateOf('name')} required="required" />
					<input type="text" name="desc" placeholder="Product description" onChange={stateOf('desc')} required="required" />
					<input type="number" name="price" placeholder="Product price" onChange={stateOf('price')} required="required" step="0.01" />
					<input type="number" name="stock" placeholder="Product stock" onChange={stateOf('stock')} required="required" min="0"/>
					<input type="date" name="date" placeholder="Product date" onChange={stateOf('dateAvailable')} />
					<label>VAT<input type="checkbox" name="taxable" checked={this.state.taxable} onChange={ (e) => this.setState({taxable: e.target.checked }) } /></label>
					<input type="submit" value="Add Product" />
				</form>
				<p>{JSON.stringify(this.state, null, 2)}</p>
			</div>
		)
	}
}
const mapDispatchToProps = (dispatch) => ({
	formSubmit: (state) => {
		dispatch(saveItem(state))
	},
	notify:(state) => {
		dispatch(notify(state))
	}
})
const mapStatetoProps = (state) => {
	return {
		notification: state.notifications
	}
}
ProductForm.PropTypes = {
	notification: React.PropTypes.notification
}
export default connect(mapStatetoProps, mapDispatchToProps)(ProductForm)