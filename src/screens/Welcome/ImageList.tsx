import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {theme, images} from '../../constants';

const {background} = images;

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

export const ImageList = () => {
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
