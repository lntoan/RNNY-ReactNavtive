import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  StatusBar,
  StyleSheet
} from 'react-native';
import Title from './Title';
import AppText from './AppText';
import * as globalStyles from './styles/global';

// Set the status bar for iOS to light
StatusBar.setBarStyle('light-content');

export default class IntroScreen extends Component {

  render() {
        const { navigate } = this.props.navigation;
        return (
          <View style={[globalStyles.COMMON_STYLES.pageContainer, styles.container]}>
            <TouchableOpacity
              onPress={() => navigate('Home', { title:  'RNNYT' })}
            >
              <Title>React Native News Reader</Title>
              <AppText>
                Start Reading
              </AppText>
            </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

//export default IntroScreen;
