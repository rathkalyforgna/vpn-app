import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {images} from '../../constants';

// constants
const {icons} = images;

export type ServerValue = {
  name: string;
  icon: any;
};

type Props = {
  server: ServerValue;
};

export const Server = (props: Props) => {
  const {server} = props;
  const connection = server;

  return (
    <View style={styles.container}>
      <Image source={connection.icon} />
      <Text style={styles.nameText}>{connection.name}</Text>
      <Image source={icons.dropdown} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    marginRight: 10,
    marginLeft: 20,
  },
});
