import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation/StackNavigator';
import 'react-native-gesture-handler'
import store from './redux/store'
import { Provider } from 'react-redux';

export default function App() {
  const colorScheme = useColorScheme()

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme}></Navigation>
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
}
