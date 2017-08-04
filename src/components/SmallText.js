import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  InteractionManager
} from 'react-native';
import AppText from './AppText';

class SmallText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doExpensiveRender: false
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        doExpensiveRender: true
      });
    });
  }
  
  render() {
    const { children, useFallColors, style, ...rest } = this.props;
    let childrenFormatted = children;
    if (useFallColors && this.state.doExpensiveRender) {
      childrenFormatted = fallColors(children);
    }
    return (
      <AppText style={[styles.small, style]} {...rest}>
        {childrenFormatted}
      </AppText>
    );
  }
}

// const SmallText = ({ children, style, ...rest }) => (
//   <AppText style={[styles.small, style]} {...rest}>
//     {children}
//   </AppText>
// );

SmallText.propTypes = {
  children: PropTypes.node,
  style: Text.propTypes.style
};

const styles = StyleSheet.create({
  small: {
    fontSize: 11
  }
});

export default SmallText;
