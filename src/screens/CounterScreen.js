import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

import Counter from '../components/Counter';

import {createStore} from 'redux';
import { Provider } from 'react-redux';

const initialState = {counter:0}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREASE_COUNTER':
            console.log('%c++', 'background:', state.counter);
            return {counter:state.counter + 1};
        case 'DECREASE_COUNTER':
            console.log('%c++', 'background:', state.counter);
            return { counter: state.counter - 1};
    }
    return state;
};
const store = createStore(reducer);

class CounterScreen extends React.Component{
    static navigationOptions = {
        title: 'Profile Page',
    };
    state ={
        counter:0
    }

    render() {
        return <Provider store={store}>
            <Counter />
        </Provider>
    }
}
const styles = StyleSheet.create({
    count:{
        flexDirection:'column',
        alignItems:'center',
        fontSize:20
    }
});
export default CounterScreen;