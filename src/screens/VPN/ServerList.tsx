import React from 'react';
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {images, servers, theme} from '../../constants';
import {ServerValue} from './Server';

// constants
const {icons} = images;
const {colors, fonts, sizes} = theme;

type Props = {
  show: boolean;
  server: ServerValue;
  onServer: (value: ServerValue) => void;
};

export const ServerList = (props: Props) => {
  const {show, server, onServer} = props;
  const connection = server;

  return (
    <Modal visible={show} animationType="fade" transparent>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.titleText}>Pick your Server</Text>
          <ScrollView>
            {servers.map(item => {
              const isConnected = connection.name === item.name;
              const isChecked = icons[isConnected ? 'checked' : 'unchecked'];
              return (
                <Pressable
                  key={`server-${item.name}`}
                  // style={{backgroundColor: 'transparent'}}
                  onPress={() => onServer(item)}>
                  <View style={styles.countryRow}>
                    <View style={styles.countryBlock}>
                      <Image source={item.icon} />
                      <Text style={{paddingHorizontal: sizes.h3}}>
                        {item.name}
                      </Text>
                    </View>
                    <Image source={isChecked} />
                  </View>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(83, 84, 83, 0.2)',
  },
  wrapper: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingVertical: sizes.padding,
  },
  titleText: {
    ...fonts.subtitle,
    color: colors.gray,
    textAlign: 'center',
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: sizes.padding / 2,
  },
  countryBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
