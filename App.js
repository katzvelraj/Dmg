import React from 'react';
import {SafeAreaView, StyleSheet, LogBox} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/Store';
import HomeScreen from './src/screens/HomeScreen';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
let persistor = persistStore(store);
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.rootContainer}>
          <HomeScreen />
        </SafeAreaView>
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
