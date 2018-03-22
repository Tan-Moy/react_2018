import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        ctr: state.counter //this state is provided by react-redux from the intital state defined in reducer.js files. Then I can use this ctr as props in this file
    };
} //stores information about how the store managed by redux should be mapped to props used in this container

const mapDispatchToProps = (dispatch) =>{
    return{
        onIncrementCounter: () => dispatch({
            type: 'INCREMENT'
        }) //We can call this function on event handlers so that events can dispatch actions
    };
} //will call dispatch on the stores behind the scenes

// connect is a function that returns a function that takes this component as input and returns a component i.e connect returns a higher order component
// takes mapStateToProps,mapDispatchToProps as arguments
export default connect(mapStateToProps,mapDispatchToProps)(Counter);

// we can use combinereducers react-redux package to combine reducers