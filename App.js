import React from 'react';
import { StyleSheet, View, ImageBackground, Image, StatusBar, Dimensions } from 'react-native';

// Đường dẫn tới ảnh nền trong thư mục assets
const backgroundImage = require('./assets/background.png');
const status = require('./assets/Status Bar.png');
const text = require('./assets/text.png');
const phone = require('./assets/phone.png');
const text2 = require('./assets/text2.png');
const google = require('./assets/google.png');
const facebook = require('./assets/facebook.png');
const nghieng = require('./assets/nghieng.png');

// Lấy chiều rộng màn hình
const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={backgroundImage} style={styles.topContainer}>
        <Image source={status} style={styles.StatusBar} />
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <Image source={text} style={styles.text} />
        <Image source={phone} style={styles.phone} />
        <Image source={text2} style={styles.text2} />
        <Image source={google} style={styles.google} />
        <Image source={facebook} style={styles.facebook} />
      </View>
      <Image source={nghieng} style={styles.nghieng} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 0.417, // 41.7% chiều dọc màn hình
  },
  bottomContainer: {
    flex: 0.583, // 58.3% chiều dọc màn hình
    padding: width * 0.1,
  },
  StatusBar: {
    margin: 0,
    padding: 0,
    width: width,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  text: {
    marginTop: height * 0.05,
    width: width * 0.53,
    height: height * 0.07,
    resizeMode: 'contain',
  },
  phone: {
    marginTop: height * 0.05,
    alignSelf: 'center',
    width: width * 0.8,
    resizeMode: 'contain',
  },
  text2: {
    marginTop: height * 0.05,
    alignSelf: 'center',
    width: width * 0.457,
    resizeMode: 'contain',
  },
  google: {
    marginTop: height * 0.05,
    alignSelf: 'center',
    width: width * 0.8,
    resizeMode: 'contain',
  },
  facebook: {
    marginTop: height * 0.02,
    alignSelf: 'center',
    width: width * 0.8,
    resizeMode: 'contain',
  },
  nghieng: {
    position: 'absolute',
    top: height * 0.01,
    right: width * 0.15, // 10% chiều ngang từ bên phải
    resizeMode: 'contain',
  },
});
