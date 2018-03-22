const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
	counter: 0
} //intitalizing the state

// Reducer
const rootReducer = (current_state = initialState, action) => {
	if(action.type === "INC_COUNTER"){
		updated_state = {
			...current_state,
			counter: current_state.counter + 1
		}
		return updated_state; //updated_state is a NEW object. The old one has to be immutable
	} 
	if(action.type === "ADD_COUNTER"){
		updated_state = {
			...current_state,
			counter: current_state.counter + action.value
		}
		return updated_state; //updated_state is a NEW object. The old one has to be immutable
	} 
	return current_state;
}

// Store
const store = createStore(rootReducer); //connect store to reducer. This executes the rootReducer function
console.log(store.getState());

// Subscription
store.subscribe(() => {
	console.log('[subscription]',store.getState());
}) // just a function inside which we can put anything to be executed on state update i.e on action dispatch 

// Dispatching Actions
store.dispatch({
	type: 'INC_COUNTER'
});
store.dispatch({
	type: 'ADD_COUNTER',
	value: 10
});
console.log(store.getState());

