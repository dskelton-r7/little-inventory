import { combineReducers } from 'redux'
import R_ from 'ramda'
/*
** products
** products:: State -> Action -> State
** Updates the products portion of the state tree with new data
*/

const initialProductState = {isFetching: false, notification: false, items: {} }
const products = (state = initialProductState, action) => {
	switch(action.type){
		case 'INVENTORY_FETCHING':
			return {...state, isFetching:true}
		case 'INVENTORY_FETCH_SUCCESS':
			return {...state, isFetching:false, items: action.items}
		case 'SAVE_ITEM':
			return R_.over(R_.lensProp('items'), R_.merge(action.item), state)	// Ramda lens returns new object
		default:
			return state;
	}
}

/*
** notifications
** notifications:: State -> Action -> State
** Updates the state tree of notifications
*/

const initialNotificationState = {on:false, text: ''}
const notifications = (state = initialNotificationState, action) => {
	switch(action.type){
		case 'NOTIFICATION_ON':
			return {...state, on:true, text: action.text}
		case 'NOTIFICATION_OFF':
			return {...state, on:false, text: ''}
		default:
			return state;
	}
}


/*
merge reducers into a single object
eq to {
	products: products(state.products, action),
	notifications: notifications(state.notifications, action) 
}
*/
const rootReducer = combineReducers({products, notifications})
export default rootReducer;