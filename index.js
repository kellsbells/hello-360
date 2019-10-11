import React from 'react';
import { Surface } from 'react-360-web';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

const myFlatSurface = new Surface(
  300, /* width */
  600, /* height */
  Surface.SurfaceShape.Flat /* shape */
);

export default class Hello360 extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text>
            Kellee
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
