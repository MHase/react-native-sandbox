
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Expo from 'expo';

export default class NotificationsScreen extends Component {
  state = { token: null }

  componentDidMount() {
    this.getToken();

    this.listener = Expo.Notifications.addListener(this.handleNotification);
  }

  componentWillUnmount() {
    this.listener && this.listener.remove();
  }

  handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`,
    );
  };

  async getToken() {
    // Remote notifications do not work in simulators, only on device
    if (!Expo.Constants.isDevice) {
      return;
    }
    let { status } = await Expo.Permissions.askAsync(
      Expo.Permissions.NOTIFICATIONS,
    );
    if (status !== 'granted') {
      return;
    }
    const value = await Expo.Notifications.getExpoPushTokenAsync();
    console.log('Our token', value);

    this.setState({
      token: value,
    });
    /// Send this to a server
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Expo Notifications Test</Text>
        <View>
          <Text style={{ textAlign: 'center' }}>Token:</Text>
          <Text style={styles.paragraph}>{this.state.token}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
