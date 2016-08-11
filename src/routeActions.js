/*
** enterInventory
** Decouples the process of dispatching an action from inside a component (componentDidMount)
** Used in the onEnter callback inside of react router
** Curried to accept a reference to the redux store as initial arg
** Dispatches the fetchInventory thunk
*/
import { fetchInventory } from './actions/'
export const enterInventory = ({dispatch}) => dispatch(fetchInventory())

