import React from 'react';
import { View, Text } from 'react-native';

class ProfileScreen extends React.Component{
    static navigationOptions = {
        title: 'Profile Page',
    };
    render(){
        return <Text>This is profile page</Text>
    }
}

export default ProfileScreen;