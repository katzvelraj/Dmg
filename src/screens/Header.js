import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {strings} from '../res/strings';

const Header = ({isGrid, toggleLayout}) => {
  return (
    <View style={styles.rootContainerStyle}>
      <View style={styles.headerContainer}>
        <Text style={styles.appHeaderStyle}>{strings.title}</Text>

        <Text onPress={toggleLayout} style={styles.toggleStyle}>
          {isGrid ? strings.list : strings.grid}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainerStyle: {
    height: 60,
    borderWidth: 0.2,
    alignItems: 'center',
    elevation: 2,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appHeaderStyle: {
    flex: 1,
    color: 'black',
    textAlign: 'center',
    fontSize: 24,
  },
  toggleStyle: {
    flex: 1,
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Header;
