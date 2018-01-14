import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import getImageForWeather from './utils/getImageForWeather';
import SearchInput from './components/SearchInput';

class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <ImageBackground
          source={getImageForWeather('Clear')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>Dallas</Text>
            <Text style={[styles.smallText, styles.textStyle]}>Partly Cloudy</Text>
            <Text style={[styles.largeText, styles.textStyle]}>55°</Text>
            <SearchInput placeholder='Search any city'/>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});

export default App;