import React from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../../constants';

export const Dots = () => {
  return (
    <View style={styles.container}>
      {[...Array(3)].map((_, idx) => (
        <View key={idx} style={styles.roundStyle} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  roundStyle: {
    backgroundColor: theme.colors.gray,
    marginHorizontal: 5,
    borderRadius: 8,
    width: 8,
    height: 8,
  },
});
