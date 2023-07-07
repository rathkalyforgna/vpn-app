import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '../constants';
import {background} from '../constants/images';
import {useNavigation} from '@react-navigation/native';

const backgrounds = [
  {
    title: 'Secured, forever.',
    description:
      'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.',
    image: background.welcome,
  },
  {
    title: 'Secured, forever.',
    description:
      'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.',
    image: background.encrypted,
  },
  {
    title: 'Secured, forever.',
    description:
      'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.',
    image: background.privacy,
  },
];

export const Welcome = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const renderImages = () => {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}>
        {backgrounds.map((item, index) => (
          <View
            key={`img-${index}`}
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
              width: theme.sizes.width,
            }}>
            <Image
              source={item.image}
              resizeMode="center"
              style={{
                width: theme.sizes.width / 1.5,
                height: '100%',
              }}
            />
          </View>
        ))}
      </ScrollView>
    );
  };

  const renderDots = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 40,
        }}>
        <View
          style={{
            backgroundColor: theme.colors.gray,
            marginHorizontal: 5,
            borderRadius: 8,
            width: 8,
            height: 8,
          }}
        />
        <View
          style={{
            backgroundColor: theme.colors.gray,
            marginHorizontal: 5,
            borderRadius: 8,
            width: 8,
            height: 8,
          }}
        />
        <View
          style={{
            backgroundColor: theme.colors.gray,
            marginHorizontal: 5,
            borderRadius: 8,
            width: 8,
            height: 8,
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          marginTop: insets.top,
          marginBottom: insets.bottom,
        },
      ]}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {renderImages()}
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          margin: 60,
        }}>
        <Text
          style={{
            ...theme.fonts.h3,
            fontWeight: theme.weights.semibold,
          }}>
          Secured, forever
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: theme.colors.gray,
            marginVertical: 10,
            ...theme.fonts.caption,
          }}>
          Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
          Quisque volutpat augue enim, pulvinar lobortis.
        </Text>
        {renderDots()}
        <Pressable
          style={{
            backgroundColor: theme.colors.primary,
            borderRadius: theme.sizes.base * 5,
            padding: theme.sizes.base,
          }}
          onPress={() => {
            navigation.navigate('VPN');
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 6,
              marginHorizontal: 26,
              color: theme.colors.white,
              fontWeight: theme.weights.bold,
              ...theme.fonts.caption,
            }}>
            GET STARTED
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
