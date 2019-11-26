import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen  from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CounterScreen from './src/screens/CounterScreen';
import VoiceScreen from './src/screens/VoiceScreen';

const MainNavigator = createStackNavigator({
  Voice:VoiceScreen,
  Couter: CounterScreen,
  Profile: ProfileScreen,
  Home: HomeScreen ,
});

const App = createAppContainer(MainNavigator);

export default App;