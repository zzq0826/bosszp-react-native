'use strict';
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

class CompanyProfileView extends Component {
  constructor() {
    super();
    this.state = {  };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
      return (
        <View style={styles.container}>
        </View >
      );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});

export default connect()(CompanyProfileView);
