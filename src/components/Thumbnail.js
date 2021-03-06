import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  ImageBackground,
  View,
  ViewPropTypes
} from 'react-native';
import Title from './Title';

const Thumbnail = ({ style, titleText, accentColor, url }) => {
  const imageStyle = {
    backgroundColor: `${accentColor}77` // adds some transparency to the color
  };
  const TitleComponent = <Title style={styles.title}>{titleText}</Title>;

  return (
    <View style={[styles.container, { borderColor: accentColor }, style]}>
      {url.length > 0 ? (
        <ImageBackground
          style={[styles.image, imageStyle]}
          source={{
            uri: url
          }}
          shouldRasterizeIOS
        >
          {TitleComponent}
        </ImageBackground>
      ) : (
        <View
          style={[styles.image, imageStyle]}
        >
          {TitleComponent}
        </View>
      )}
    </View>
  );
};

Thumbnail.propTypes = {
  style: ViewPropTypes.style,
  url: PropTypes.string.isRequired,
  accentColor: PropTypes.string.isRequired,
  titleText: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 3,
    borderStyle: 'solid'
  },
  image: {
    height: 100,
    justifyContent: 'flex-end'
  },
  title: {
    padding: 5
  }
});

export default Thumbnail;
