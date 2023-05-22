import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}

export default App