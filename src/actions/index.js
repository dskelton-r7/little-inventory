import ItemsById from '../stub/products';
const id = () => `_` + Math.random().toString(36).substr(2, 9)

/*
** notify
** Simulating an async control flow.
** Awaits 1 second before dispatching the action to turn off the notification
** notify:: Object -> Function -> Function (Store dispatch) -> Action
*/

export function notify(state){
	return (dispatch) => {
		dispatch({type: 'NOTIFICATION_ON', text: `Successfully saved item: ${state.name}`})
		setTimeout(() => dispatch({type: 'NOTIFICATION_OFF'}), 2000)
	}
}
/*
** saveItem
** Simulating an async control flow. (Everything must have an async interface to simulate db connections)
** Dispatches an action to request an item be saved
** saveItem:: Object -> Function -> Function (Store dispatch) -> Action
*/

export function saveItem(item){
	return (dispatch) => {
		setTimeout(() => { dispatch({type: 'SAVE_ITEM', item: { [id()]: item}})
						   notify(item)(dispatch) }, 500)
	}
}


/*
** fetchInventory
** Uses redux thunk middleware to model async control flow.
** Waits several seconds before dispatching a success action with the product stub data (Easily swappable with an XHR req)
** fetchInventory:: Function -> Function (Store dispatch) -> Action
*/

export function fetchInventory(){
	return (dispatch) => {
		dispatch({type: 'INVENTORY_FETCHING'})
		setTimeout(() => dispatch({type: 'INVENTORY_FETCH_SUCCESS', items: ItemsById}), 2000);
	}
}