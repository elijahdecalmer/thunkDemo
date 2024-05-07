import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { Provider } from 'react-redux';
import store from './src/data/store';

export default function App() {
  return (
    <Provider store={store}>
    <Home/>
    </Provider>
  );
}
