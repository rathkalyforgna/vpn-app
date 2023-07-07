import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../constants';
import {Dots} from './Dots';
import {ImageList} from './ImageList';

export const Welcome = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagesBlock}>
        <ImageList />
      </View>
      <View style={styles.bottomBlock}>
        <Text style={styles.titleText}>Secured, forever</Text>
        <Text style={styles.subtitleText}>
          Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
          Quisque volutpat augue enim, pulvinar lobortis.
        </Text>
        <Dots />
        <Pressable
          style={styles.startedButton}
          onPress={() => {
            navigation.navigate('VPN');
          }}>
          <Text style={styles.startedText}>GET STARTED</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagesBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBlock: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 60,
  },
  titleText: {
    ...theme.fonts.h3,
    fontWeight: theme.weights.semibold,
  },
  subtitleText: {
    textAlign: 'center',
    color: theme.colors.gray,
    marginVertical: 10,
    ...theme.fonts.caption,
  },
  startedButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.sizes.base * 5,
    padding: theme.sizes.base,
  },
  startedText: {
    textAlign: 'center',
    marginVertical: 6,
    marginHorizontal: 26,
    color: theme.colors.white,
    fontWeight: theme.weights.bold,
    ...theme.fonts.caption,
  },
});
