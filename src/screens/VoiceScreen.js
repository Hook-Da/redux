import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Voice from 'react-native-voice';

class VoiceScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      results: [],
    };
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    console.log('%c++', 'background:voiceAvailable', Voice.isAvailable());
  }
  onSpeechResultsHandler(e) {
    console.log('%c++', 'background:lime', e);
    this.setState({
      results: e.value,
    });
  }
  static navigationOptions = {
    title: 'Voice Page',
  };
  onSpeechStart() {
    console.log('%c++', 'background:', 'here');
    Voice.start('ru_RU');
  }
  onSpeechEnd() {
    Voice.stop();
  }
  render() {
    return (
      <View>
        <Text>Voice Screen Demo</Text>
        <View style={styles.ViewStyle}>
          <TouchableOpacity
            onPress={this.onSpeechStart.bind()}
            style={styles.btnStyle}>
            <Text>Start Voice Recognition</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onSpeechEnd.bind()}
            style={styles.btnStyle}>
            <Text>Stop Voice Recognition</Text>
          </TouchableOpacity>
        </View>
        {this.state.results.map((text, index) => {
          return <Text key={index}>{text}</Text>;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnStyle: {
    backgroundColor: 'lightblue',
    width: 200,
    height: 60,
  },
});

export default VoiceScreen;
