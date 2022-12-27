import React from 'react';
import {View, StyleSheet, StatusBar } from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/Store';
import HomeScreen from './src/screens/HomeScreen';
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore}from 'redux-persist';
let persistor = persistStore(store)

const App = () => {
  return (
    <StoreProvider store={store}>
     <PersistGate  loading={null} persistor={persistor}>
        <View style={styles.rootContainer}>
         <HomeScreen/>
        </View>
       </PersistGate>
    </StoreProvider>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
export default App;
