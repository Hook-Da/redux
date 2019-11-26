import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Counter extends React.Component {
    render() {
        return <View style={styles.containerStyle}>
            <TouchableOpacity style={styles.btn} onPress={()=>this.props.increaseCounter()}>
                <Text style={styles.btn__text}>
                    Increase
                </Text>
            </TouchableOpacity>
                <Text>{this.props.counter}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => this.props.decreaseCounter()}>
                <Text style={styles.btn__text}>
                    Decrease
                </Text>
            </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    btn:{
        width:100,
        height:30,
        borderColor:'lime',
        borderWidth:4,
        fontSize:14
    },
    btn__text:{
        marginRight:10,
        marginLeft:10
    }
})

function mapDispatchToProps(dispatch){
    return {
        increaseCounter : () => dispatch({
            type:'INCREASE_COUNTER'
        }),
        decreaseCounter : () => dispatch({
            type:'DECREASE_COUNTER'
        })
    }
}

function mapStateToProps(state){
    return {
        counter:state.counter
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);