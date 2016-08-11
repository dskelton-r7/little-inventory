import React, { Component } from 'react'
import ProductList from '../components/ProductList'
import {connect} from 'react-redux'
import {fetchInventory} from '../actions/'
import {values} from 'ramda'

class Inventory extends Component {
  constructor(props){
    super(props);
    this.state = {
      dots: ''
    }
  }
  dotProgress(){
    let inc = (len=1) => {
      this.setState({dots:'.'.repeat(len)})
      setTimeout(() => { this.props.isFetching && inc(++len) }, 500)
    }
    inc()
  }
  componentDidMount(){
    this.dotProgress()
  }
  render() {
    return (
      <div className="Product_inventory">
        <header>
	 		    <h1>Product Inventory</h1>
          {!this.props.isFetching && <span>{values(this.props.items).length} items</span>}
        </header>
        {this.props.isFetching  ? <h3>fetching Inventory {this.state.dots}</h3> 
                                : <ProductList items={this.props.items} /> }
	 	</div>
    );
  }
}
const mapStateToProps = (state) => {
	return {
		items: state.products.items,
		isFetching: state.products.isFetching
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onProductClick: (id) => {
			dispatch(fetchInventory())
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Inventory)