import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {images, theme} from '../../constants';
import {ServerList} from './ServerList';
import {Server, ServerValue} from './Server';

// constants
const {icons} = images;
const {colors, fonts, shadow, sizes, weights} = theme;

export const VPN = () => {
  const insets = useSafeAreaInsets();
  const [connected, setConnected] = React.useState(false);
  const [server, setServer] = useState<ServerValue>({
    name: 'Automatic',
    icon: icons.automatic,
  });
  const [show, setShow] = useState(false);

  const handleConnect = () => {
    setConnected(!connected);
  };

  const handleServer = (value: ServerValue) => {
    setServer(value);
    setConnected(false);
    setShow(false);
  };

  return (
    <SafeAreaView edges={['top', 'right', 'left']} style={styles.container}>
      <View style={{paddingVertical: sizes.h3}}>
        <Text style={[fonts.title, {fontWeight: weights.semibold}]}>VPN</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.connectedBlock}>
          <Text style={styles.connectedText}>
            {connected ? 'Connected' : 'Disconnected'}
          </Text>
          <View
            style={[
              {
                backgroundColor: connected
                  ? colors.success
                  : 'rgba(83,84,83,0.5)',
              },
              styles.status,
            ]}
          />
        </View>

        <Image
          style={styles.image}
          source={icons[connected ? 'online' : 'offline']}
        />
        <Pressable
          // theme={theme}
          style={[styles.connect, connected && styles.connected]}
          onPress={handleConnect}>
          <Text
            style={[
              styles.connectText,
              {color: !connected ? colors.white : undefined},
            ]}>
            {connected ? 'DISCONNECT' : 'CONNECT NOW'}
          </Text>
        </Pressable>
      </View>
      <View
        style={[
          {
            height: sizes.base * 9 + insets.bottom,
            paddingBottom: insets.bottom,
          },
          styles.servers,
        ]}>
        <Pressable
          // style={{backgroundColor: 'transparent'}}
          onPress={() => setShow(true)}>
          <Server server={server} />
        </Pressable>
      </View>
      <ServerList show={show} server={server} onServer={handleServer} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  connect: {
    minHeight: sizes.base * 5.5,
    borderRadius: sizes.radius,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    width: sizes.width / 2,
  },
  connected: {
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: colors.black,
  },
  connectedBlock: {
    ...shadow,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: sizes.radius,
    paddingVertical: sizes.base,
    paddingHorizontal: sizes.padding,
  },
  connectedText: {
    ...fonts.subtitle,
    fontWeight: weights.semibold,
    color: colors.gray,
    height: sizes.h3,
  },
  image: {
    width: 180,
    height: 180,
    marginVertical: 20,
  },
  status: {
    borderRadius: sizes.base,
    width: sizes.base,
    height: sizes.base,
    marginLeft: sizes.small,
  },
  connectText: {
    ...fonts.caption,
    textAlign: 'center',
    fontWeight: weights.bold,
    marginVertical: sizes.padding / 2,
  },
  servers: {
    justifyContent: 'center',
    backgroundColor: colors.white,
    width: sizes.width,
    ...shadow,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.05,
    shadowRadius: sizes.base / 2,
  },
});
