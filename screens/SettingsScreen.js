import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{ backgroundColor: 'crimson', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Results</Text>
  </View>
);
const SecondRoute = () => (
  <View style={{ backgroundColor: 'pink', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Map of results</Text>
  </View>
);

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        renderTabBar={(props) =>
          <TabBar
            {...props}
            scrollEnabled={false}
            style={{ backgroundColor: 'white' }}
            labelStyle={{ color: 'black' }}
            indicatorStyle={{ backgroundColor: 'blue' }}
            renderLabel={props => {
              return (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    style={{ width: 32, height: 32, marginRight: 15 }}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                  />
                  <Text>abecadlo</Text>
                </View>
              )
            }}
          />}
        onIndexChange={index => this.setState({ index })}
        layout={{
          height: 0,
          width: Dimensions.get('window').width,
          measured: true,
        }}
      />
    );
  }
}
